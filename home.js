(() => {
  'use strict';
  const dataElement = document.getElementById('portfolio-data');
  const games = dataElement ? JSON.parse(dataElement.textContent) : [];
  const byId = new Map(games.map(game => [game.id, game]));
  const panel = document.getElementById('feature-panel');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let active = games[0];
  let view = 'art';
  let changeToken = 0;
  let lastVideoTrigger = null;
  const element = id => document.getElementById(id);
  const tabs = [...document.querySelectorAll('.game-tab')];
  const viewTabs = [...document.querySelectorAll('.media-tab')];
  const panes = {art:element('art-pane'),screenshot:element('screenshot-pane'),menu:element('menu-pane')};
  const images = {art:element('feature-artwork'),screenshot:element('feature-screenshot'),menu:element('feature-menu')};
  const warmImage = source => new Promise(resolve => {
    const image = new Image();
    image.onload = image.onerror = resolve;
    image.src = source;
    if (image.complete) resolve();
  });
  function setView(next, animate = true) {
    if (!active?.[next] || !panes[next]) next = 'art';
    view = next;
    for (const [key,pane] of Object.entries(panes)) pane.hidden = key !== view;
    for (const tab of viewTabs) {
      const selected = tab.dataset.view === view;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    }
    const imageLink = element('image-open');
    imageLink.href = images[view].src;
    imageLink.setAttribute('aria-label', `Enlarge ${active.name} ${active.screenshotOnly ? 'main-page screenshot' : view === 'art' ? 'artwork' : view === 'menu' ? 'menu' : 'gameplay screenshot'}`);
    if (animate && !reduced.matches) panes[view].animate([{opacity:.45,clipPath:'inset(0 2% 0 2%)'},{opacity:1,clipPath:'inset(0)'}],{duration:380,easing:'cubic-bezier(.22,1,.36,1)'});
  }
  async function selectGame(id, {updateHash=true, animate=true} = {}) {
    const game = byId.get(id);
    if (!game || !panel) return;
    const token = ++changeToken;
    element('watch-gameplay').disabled = true;
    element('gameplay-preview').disabled = true;
    for (const tab of tabs) {
      const selected = tab.dataset.game === id;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    }
    panel.setAttribute('aria-busy', 'true');
    await Promise.all([game.art, game.screenshot].filter(Boolean).map(warmImage));
    if (token !== changeToken) return;
    active = game;
    const title = element('game-title');
    title.textContent = game.name;
    title.classList.toggle('long-title', game.name.length > 14);
    element('game-status').replaceChildren(Object.assign(document.createElement('span'),{ariaHidden:'true'}),document.createTextNode(game.status));
    element('game-description').textContent = game.description;
    images.art.src = game.art;
    images.art.alt = game.artAlt;
    for (const [key, widthKey, heightKey] of [
      ['screenshot', 'shotWidth', 'shotHeight'],
      ['menu', 'menuWidth', 'menuHeight'],
    ]) {
      const image = images[key];
      element(`${key}-tab`).hidden = !game[key];
      if (game[key]) {
        image.src = game[key];
        image.alt = game[`${key}Alt`];
        image.width = game[widthKey];
        image.height = game[heightKey];
      } else {
        image.removeAttribute('src');
        image.alt = '';
      }
    }
    const store = element('store-link');
    store.hidden = !game.store;
    if (game.store) {
      store.href = game.store;
      store.firstChild.textContent = game.storeLabel;
    }
    const preview = element('gameplay-preview');
    preview.hidden = !game.video;
    element('watch-gameplay').hidden = !game.video;
    document.querySelector('.media-controls').hidden = Boolean(game.screenshotOnly);
    const poster = element('gameplay-poster');
    poster.src = game.screenshot || game.art;
    if (game.screenshot) {
      poster.width = game.shotWidth;
      poster.height = game.shotHeight;
    } else {
      poster.removeAttribute('width');
      poster.removeAttribute('height');
    }
    preview.setAttribute('aria-label', `Watch ${game.name} gameplay`);
    element('preview-label').textContent = game.videoLabel;
    element('preview-duration').textContent = game.duration;
    element('watch-gameplay').setAttribute('aria-label', `Watch ${game.name} gameplay`);
    panel.setAttribute('aria-labelledby', `game-tab-${id}`);
    setView(game.screenshotOnly ? 'screenshot' : view, false);
    panel.setAttribute('aria-busy', 'false');
    element('watch-gameplay').disabled = false;
    element('gameplay-preview').disabled = false;
    element('project-status').textContent = `${game.name}. ${game.status}.`;
    if (updateHash) history.replaceState(null, '', `#${id}`);
    if (animate && !reduced.matches) panel.animate([{opacity:.55,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:420,easing:'cubic-bezier(.22,1,.36,1)'});
  }
  function moveTab(event, list) {
    const available = list.filter(tab => !tab.hidden);
    let index = available.indexOf(event.currentTarget);
    if (event.key === 'ArrowRight') index = (index + 1) % available.length;
    else if (event.key === 'ArrowLeft') index = (index - 1 + available.length) % available.length;
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = available.length - 1;
    else return;
    event.preventDefault();
    available[index].focus({preventScroll:true});
    available[index].click();
    if (list === tabs) available[index].scrollIntoView({block:'nearest',inline:'nearest',behavior:reduced.matches?'instant':'smooth'});
  }
  for (const tab of tabs) {
    tab.addEventListener('click', () => selectGame(tab.dataset.game));
    tab.addEventListener('keydown', event => moveTab(event, tabs));
    tab.addEventListener('pointerenter', () => warmImage(byId.get(tab.dataset.game).art), {once:true});
    tab.addEventListener('focus', () => warmImage(byId.get(tab.dataset.game).art), {once:true});
  }
  for (const tab of viewTabs) {
    tab.addEventListener('click', () => setView(tab.dataset.view));
    tab.addEventListener('keydown', event => moveTab(event, viewTabs));
  }
  const dialog = element('video-dialog');
  const video = element('demo-video');
  function openVideo(event) {
    if (!active?.video || !dialog) return;
    lastVideoTrigger = event.currentTarget;
    element('video-title').textContent = `${active.name} · ${active.videoLabel}`;
    element('video-note').textContent = active.videoNote;
    element('video-file').href = active.video;
    element('video-error').hidden = true;
    video.poster = active.screenshot || active.art;
    video.src = active.video;
    dialog.showModal();
    document.body.classList.add('modal-open');
    video.play().catch(() => {});
  }
  element('watch-gameplay')?.addEventListener('click', openVideo);
  element('gameplay-preview')?.addEventListener('click', openVideo);
  element('close-video')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog?.addEventListener('close', () => {
    video.pause();
    video.removeAttribute('src');
    video.load();
    document.body.classList.remove('modal-open');
    lastVideoTrigger?.focus({preventScroll:true});
  });
  video?.addEventListener('error', () => {if(dialog.open) element('video-error').hidden = false;});
  window.addEventListener('hashchange', () => {const id=location.hash.slice(1);if(byId.has(id)) selectGame(id,{updateHash:false});});
  if (games.length) selectGame(byId.has(location.hash.slice(1))?location.hash.slice(1):games[0].id,{updateHash:false,animate:false});

  const demoFrame = document.querySelector('.annotation-demo iframe');
  const demoMedia = matchMedia('(max-width:760px)');
  const desktopDemoSource = demoFrame?.getAttribute('src');
  const syncDemo = () => {
    if (!demoFrame) return;
    const source = demoMedia.matches ? demoFrame.dataset.mobileSrc : desktopDemoSource;
    if (demoFrame.getAttribute('src') !== source) demoFrame.src = source;
  };
  syncDemo();
  demoMedia.addEventListener('change', syncDemo);
  window.addEventListener('message', event => {
    if(event.source !== demoFrame?.contentWindow || event.data?.type !== 'drawply-demo-size') return;
    const height=event.data.height;
    if(Number.isFinite(height) && height>=180 && height<=900) demoFrame.style.height=Math.ceil(height)+'px';
  });
})();
