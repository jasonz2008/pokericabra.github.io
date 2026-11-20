(() => {
  'use strict';
  const id = document.querySelector('meta[name="ga4-measurement-id"]')?.content || '';
  if (!/^G-[A-Z0-9]{10}$/.test(id) || /^G-(X{10}|0{10})$/.test(id)) return;
  if (!['https://pokericabra.com', 'https://www.pokericabra.com'].includes(location.origin)) return;
  try { if (window.top !== window.self) return; } catch { return; }

  const banner = document.getElementById('site-analytics-consent');
  const storageKey = 'portfolio-analytics-consent';
  const denied = {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'};
  let choice;
  try { choice = localStorage.getItem(storageKey); } catch { /* The choice still works for this page. */ }
  if (choice !== 'granted' && choice !== 'denied') choice = undefined;
  const privacyPreference = navigator.globalPrivacyControl === true || navigator.doNotTrack === '1' || window.doNotTrack === '1';
  let enabled = false;
  let initialized = false;
  let pageViewed = false;
  let settingsTrigger;
  let gtag;

  const publicUrl = value => {
    try {
      const url = new URL(value, location.href);
      return /^https?:$/.test(url.protocol) ? url.origin + url.pathname : '';
    } catch { return ''; }
  };
  const query = new URLSearchParams(location.search);
  const campaign = {};
  const campaignFields = {utm_source: 'campaign_source', utm_medium: 'campaign_medium', utm_campaign: 'campaign_name', utm_id: 'campaign_id', utm_term: 'campaign_term', utm_content: 'campaign_content'};
  for (const [utm, field] of Object.entries(campaignFields)) {
    const label = (query.get(utm) || '').trim();
    // Campaign labels only: no email addresses, URLs, controls or unbounded text.
    if (label.length <= 100 && /^[\p{L}\p{N} ._()+-]+$/u.test(label)) campaign[field] = label;
  }
  const page = {
    ...campaign,
    page_location: location.origin + location.pathname,
    page_referrer: document.referrer ? publicUrl(document.referrer) : '',
    page_title: location.pathname === '/resume.html' ? 'Résumé' : location.pathname.startsWith('/drawply/') ? 'Drawply' : 'Jason Zhong — Games & creative tools'
  };
  const debug = query.get('analytics_debug') === '1';
  function event(name, params = {}) {
    if (enabled) gtag('event', name, {...page, ...params, ...(debug ? {debug_mode: true} : {})});
  }
  function allow() {
    enabled = true;
    window['ga-disable-' + id] = false;
    if (!initialized) {
      initialized = true;
      window.dataLayer = window.dataLayer || [];
      gtag = window.gtag = function () { window.dataLayer.push(arguments); };
      gtag('consent', 'default', denied);
      gtag('js', new Date());
      gtag('consent', 'update', {...denied, analytics_storage: 'granted'});
      gtag('config', id, {...page, send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, ...(debug ? {debug_mode: true} : {})});
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
      script.referrerPolicy = 'no-referrer';
      document.head.appendChild(script);
    } else {
      gtag('consent', 'update', {...denied, analytics_storage: 'granted'});
    }
    if (!pageViewed) {
      pageViewed = true;
      event('page_view');
    }
  }
  function clearCookies() {
    const domains = ['', location.hostname, '.' + location.hostname, 'pokericabra.com', '.pokericabra.com'];
    for (const part of document.cookie.split(';')) {
      const name = part.split('=')[0].trim();
      if (!/^_ga(?:_|$)/.test(name)) continue;
      for (const domain of new Set(domains)) {
        document.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax; Secure' + (domain ? '; Domain=' + domain : '');
      }
    }
  }
  function deny() {
    enabled = false;
    window['ga-disable-' + id] = true;
    if (initialized) gtag('consent', 'update', denied);
    try { clearCookies(); } catch { /* Cookie storage can also be blocked. */ }
  }
  function showSettings(trigger) {
    if (!banner) return;
    settingsTrigger = trigger;
    banner.hidden = false;
    banner.querySelector('[data-analytics-consent="denied"]')?.focus();
  }

  if (banner) banner.hidden = Boolean(choice || privacyPreference);
  if (choice === 'granted') allow();
  else if (choice === 'denied' || privacyPreference) deny();
  document.addEventListener('click', click => {
    const target = click.target.closest?.('[data-analytics-consent]');
    if (target && banner?.contains(target)) {
      const next = target.dataset.analyticsConsent;
      if (next !== 'granted' && next !== 'denied') return;
      choice = next;
      try { localStorage.setItem(storageKey, choice); } catch { /* Storage may be blocked. */ }
      if (choice === 'granted') allow(); else deny();
      banner.hidden = true;
      settingsTrigger?.focus();
      return;
    }
    const settings = click.target.closest?.('[data-analytics-settings]');
    if (settings) { showSettings(settings); return; }
    if (!enabled) return;
    const tab = click.target.closest?.('#game-rail .game-tab[data-game]');
    if (tab) {
      const game = games.find(item => item.id === tab.dataset.game);
      if (game) event('game_select', gameParams(game));
      return;
    }
    const link = click.target.closest?.('a[href]');
    if (!link || link.hidden) return;
    let url;
    try { url = new URL(link.getAttribute('href'), location.href); } catch { return; }
    if (link.id === 'store-link') {
      const game = games.find(item => item.store === url.href);
      const destination = url.hostname === 'store.steampowered.com' ? 'steam' : url.hostname === 'play.google.com' ? 'google_play' : '';
      if (game && destination) event('store_click', {...gameParams(game), destination});
    } else if (url.origin === location.origin && link.hasAttribute('download')) {
      if (url.pathname === '/assets/Jason-Zhong-Resume.pdf') event('resume_download', {file_name: 'Jason-Zhong-Resume.pdf'});
      const packages = {'/drawply/downloads/drawply-skill-v0.4.2.zip': 'skill', '/drawply/downloads/drawply-plugin-v0.4.2.zip': 'plugin'};
      const packageType = packages[url.pathname];
      if (packageType) event('drawply_download', {package_type: packageType, file_name: url.pathname.split('/').pop()});
    }
  });

  let games = [];
  try {
    const data = JSON.parse(document.getElementById('portfolio-data')?.textContent || '[]');
    if (Array.isArray(data)) games = data;
  } catch { /* Other tracked pages have no game data. */ }
  const gameParams = game => ({game_id: game.id, game_name: game.name});
  const video = document.getElementById('demo-video');
  let videoPath = '';
  let started = false;
  let completed = false;
  const milestones = new Set();
  function resetVideo() { videoPath = ''; started = false; completed = false; milestones.clear(); }
  function currentGame() {
    let source;
    try { source = new URL(video.currentSrc || video.getAttribute('src'), location.href); } catch { return; }
    if (source.origin !== location.origin) return;
    return games.find(game => game.video && new URL(game.video, location.href).pathname === source.pathname);
  }
  video?.addEventListener('emptied', resetVideo);
  video?.addEventListener('playing', () => {
    if (!enabled) return;
    const game = currentGame();
    if (!game) return;
    const path = new URL(game.video, location.href).pathname;
    if (path !== videoPath) { resetVideo(); videoPath = path; }
    if (!started) { started = true; event('video_start', gameParams(game)); }
  });
  video?.addEventListener('timeupdate', () => {
    if (!enabled || !started || video.paused || video.seeking || !Number.isFinite(video.duration) || video.duration <= 0) return;
    const game = currentGame();
    if (!game || new URL(game.video, location.href).pathname !== videoPath) return;
    for (const percent of [25, 50, 75]) {
      if (video.currentTime / video.duration * 100 >= percent && !milestones.has(percent)) {
        milestones.add(percent);
        event('video_progress', {...gameParams(game), video_percent: percent});
      }
    }
  });
  video?.addEventListener('ended', () => {
    if (!enabled || !started || completed) return;
    const game = currentGame();
    if (!game || new URL(game.video, location.href).pathname !== videoPath) return;
    completed = true;
    event('video_complete', gameParams(game));
  });
})();
