'use strict';
const content=document.querySelector('#project-content');
ProjectProcess.mount(content);
IndieEvolution.mount(content);
const arrow='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const projectState={project:new URLSearchParams(location.search).get('project')||'market',screen:0,indie:0,development:0,evidence:{poker:0,indie:0}};
if(!['market','poker','indie','resume'].includes(projectState.project))projectState.project='market';
const gameScreens=[{file:'pokericabra-3.jpg',title:['Play','遊玩'],heading:['Every move has a reason.','每一步，都有意義。'],caption:['Clear a row. Build a hand. See exactly what scored.','消除一行、組成牌型，清楚看見計分結果。']},{file:'pokericabra-2.jpg',title:['Learn','學習'],heading:['Complex rules. Simple to learn.','複雜規則，輕鬆上手。'],caption:['Touch-first onboarding and a hand reference, right when you need it.','觸控引導與牌型參考，在需要時出現。']},{file:'pokericabra-1.jpg',title:['Return','重玩'],heading:['More than a single session.','不止一次遊玩的體驗。'],caption:['Campaign, Endless, upgrades, daily rewards and rankings.','闖關、無盡模式、升級、每日獎勵及排行榜。']}];
const indieScreens=[
 {file:'iteration/sales-concept.png',name:['Sales & forecasts','銷售與預測'],caption:['AI concept · Received revenue and forecasts are visually distinct.','AI 概念 · 以不同線條區分已收收入與預測。']},
 {file:'iteration/sales-history-concept.png',name:['Project history','項目紀錄'],caption:['AI concept · Trends, receipts and project history in one view.','AI 概念 · 在同一畫面整理走勢、收入明細及項目紀錄。']},
 {name:['In development','開發中畫面'],development:true}
];
const developmentScreens=[
  {
    "file": "iteration/development-research.png",
    "name": [
      "Research timeline",
      "研究時間軸"
    ],
    "caption": [
      "In development · A categorized timeline with searchable options and a detail panel.",
      "開發中畫面 · 分類時間軸結合選項搜尋與詳細資料。"
    ]
  },
  {
    "file": "iteration/development-mobile-workspace.png",
    "portrait": true,
    "name": [
      "Mobile workspace",
      "手機版工作區"
    ],
    "caption": [
      "In development · Portrait workspace with grouped navigation and persistent controls.",
      "開發中畫面 · 直向工作區整合分組導覽與固定操作區。"
    ]
  },
  {
    "file": "iteration/development-map.png",
    "name": [
      "Map navigation",
      "地圖導覽"
    ],
    "caption": [
      "In development · Named destinations with zoom and navigation controls.",
      "開發中畫面 · 具名稱的地點配合縮放及導覽控制。"
    ]
  },
  {
    "file": "iteration/development-sales.png",
    "name": [
      "Sales analysis",
      "銷售分析"
    ],
    "caption": [
      "In development · A time-range selector and revenue trend. Simulation data.",
      "開發中畫面 · 期間選擇與收入走勢，數值為模擬數據。"
    ]
  },
  {
    "file": "iteration/development-status.png",
    "name": [
      "Status details",
      "狀態明細"
    ],
    "caption": [
      "In development · Grouped metrics and a table explaining how values change.",
      "開發中畫面 · 分組指標與表格，說明數值變化。"
    ]
  },
  {
    "file": "iteration/development-settings.png",
    "name": [
      "Value settings",
      "數值設定"
    ],
    "caption": [
      "In development · Summary metrics above adjustable settings and their limits.",
      "開發中畫面 · 摘要指標置頂，下方列出可調整設定及上限。"
    ]
  },
  {
    "file": "iteration/development-mobile-layout.png",
    "portrait": true,
    "name": [
      "Mobile layout",
      "手機版佈局"
    ],
    "caption": [
      "In development · A compact portrait layout with separated navigation and input areas.",
      "開發中畫面 · 精簡直向佈局，分開導覽與輸入區域。"
    ]
  }
];
function pokerPage(){const s=gameScreens[projectState.screen];return `<section class="project-hero"><h1>Pokericabra Trainee.</h1><p class="hero-sub">${t('Tetris × Poker. A Texas Hold’em-inspired puzzle.','俄羅斯方塊 × 撲克 · 益智德州撲克')}</p><div class="hero-meta">${t('Product design & full development by me. Art assets by others.','本人負責產品設計及完整開發，美術資產由外部提供。')}</div>${ProjectProcess.teaser(false)}<a class="play-link" href="https://play.google.com/store/apps/details?id=com.pokericabra.trainee" target="_blank" rel="noopener"><img src="assets/google-play-badge.png" alt="Get it on Google Play" width="180" height="70"><span>${t('View on Google Play','前往 Google Play')}${arrow}</span></a><div class="aligned-phones"><button class="image-button phone" type="button" data-image="pokericabra-1.jpg" data-caption="${t('Pokericabra · Main menu','Pokericabra · 主選單')}"><img src="assets/pokericabra-1.jpg" alt="${t('Pokericabra main menu','Pokericabra 主選單')}" width="1080" height="2340"></button><button class="image-button phone" type="button" data-image="pokericabra-3.jpg" data-caption="${t('Pokericabra · Gameplay','Pokericabra · 遊戲畫面')}"><img src="assets/pokericabra-3.jpg" alt="${t('Pokericabra gameplay','Pokericabra 遊戲畫面')}" width="1080" height="2340"></button></div><p class="image-note">${t('Actual screens from the Google Play release. Select to enlarge.','Google Play 版本實際畫面。點選可放大。')}</p></section>${ProjectProcess.render(false)}<section class="game-detail surface"><div class="detail-copy"><h2>${t(...s.heading)}</h2><p>${t(...s.caption)}</p><div class="segmented" role="group" aria-label="${t('Explore the experience','探索體驗')}">${gameScreens.map((x,i)=>`<button type="button" data-screen="${i}" aria-pressed="${i===projectState.screen}">${t(...x.title)}</button>`).join('')}</div><div class="execution-tags"><span>${t('Touch interaction','觸控互動')}</span><span>${t('Cloud save','雲端存檔')}</span><span>${t('Billing & rewards','付款及獎勵')}</span><span>${t('Innovative gameplay','創新玩法')}</span></div></div><button class="image-button detail-phone" type="button" data-image="${s.file}" data-caption="${t(...s.heading)}"><img src="assets/${s.file}" loading="lazy" alt="${t(...s.title)}" width="1080" height="2340"></button></section>${pokerGallery()}${projectEvidence()}<div class="quiet-note">${t('Built end to end: interaction, game logic, progression and Android integration.','完整實現：互動、遊戲邏輯、進度系統及 Android 整合。')}</div>`;}
function indiePage(){return `<section class="project-hero indie-hero indie-intro"><h1>${t('Project in development.','項目開發中。')}</h1><p class="hero-sub">${t('Project preview','項目前瞻')}</p><div class="hero-meta">${t('Built from 0 to 1 · Product direction, AI collaboration & implementation','由 0 至 1 建立產品 · 產品方向、AI 協作及實作')}</div>${ProjectProcess.teaser(true)}</section>${IndieEvolution.render()}${ProjectProcess.render(true)}${indieGallery()}`;}
function indieGallery(){
 const group=indieScreens[projectState.indie],selected=group.development?developmentScreens[projectState.development]:group;
 return `<section class="product-gallery" aria-labelledby="gallery-heading"><header><h2 id="gallery-heading">${t('Explore the product.','探索產品畫面。')}</h2></header><div class="gallery-tabs" role="group" aria-label="${t('Product screens','產品畫面')}">${indieScreens.map((screen,i)=>`<button type="button" data-indie="${i}" aria-pressed="${i===projectState.indie}">${t(...screen.name)}</button>`).join('')}</div>${group.development?`<div class="evolution-versions development-thumbnails" role="group" aria-label="${t('Development screens','開發中畫面')}">${developmentScreens.map((screen,i)=>`<button type="button" data-development="${i}" aria-pressed="${i===projectState.development}"><img src="assets/${screen.file}" loading="lazy" alt=""><span>${t(...screen.name)}</span></button>`).join('')}</div>`:''}<figure class="gallery-feature ${group.development?'development-preview':''} ${selected.portrait?'is-portrait':''}"><button class="image-button" type="button" data-image="${selected.file}" data-caption="${t(...selected.caption)}"><img src="assets/${selected.file}" loading="lazy" alt="${t(...selected.name)}"></button><figcaption>${t(...selected.caption)}</figcaption></figure></section>`;
}

function renderProject(){document.title=t('Jason Zhong — Product & interaction design','Jason Zhong — 產品及互動設計');document.querySelectorAll('[data-project]').forEach(button=>{const selected=button.dataset.project===projectState.project;button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;});content.setAttribute('aria-labelledby','tab-'+projectState.project);document.body.classList.toggle('market-active',projectState.project==='market');document.body.classList.toggle('resume-active',projectState.project==='resume');document.querySelector('meta[name="theme-color"]').content=projectState.project==='resume'?'#09090b':'#f5f5f7';if(projectState.project==='market'){MarketView.mount(content);}else{content.innerHTML=projectState.project==='resume'?renderResume():projectState.project==='indie'?indiePage():pokerPage();}}
// A fresh scroll container cancels in-flight touch/keyboard momentum; existing content listeners stay attached.
function chooseProject(project){if(project===projectState.project)return;const changesTheme=project==='resume'||projectState.project==='resume';const update=()=>{projectState.project=project;const url=new URL(location.href);url.searchParams.set('project',project);url.hash='';history.replaceState(null,'',url);renderProject();const previous=content.parentElement,fresh=previous.cloneNode(false);fresh.append(...previous.childNodes);previous.replaceWith(fresh);};if(!changesTheme||!document.startViewTransition||matchMedia('(prefers-reduced-motion:reduce)').matches){update();return;}const button=document.querySelector('#tab-resume'),rect=button.getBoundingClientRect(),x=rect.left+rect.width/2,y=rect.top+rect.height/2,radius=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));document.documentElement.classList.add('theme-transition');const transition=document.startViewTransition(update);transition.ready.then(()=>{document.documentElement.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${radius}px at ${x}px ${y}px)`]},{duration:380,easing:'cubic-bezier(.2,.65,.3,1)',pseudoElement:'::view-transition-new(root)'});}).catch(()=>{});transition.finished.finally(()=>document.documentElement.classList.remove('theme-transition'));}
document.querySelector('.project-nav').addEventListener('click',e=>{const button=e.target.closest('[data-project]');if(button)chooseProject(button.dataset.project);});
document.querySelector('.project-nav').addEventListener('keydown',e=>{const tabs=[...document.querySelectorAll('[data-project]')],index=tabs.indexOf(document.activeElement);if(index<0)return;let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;if(e.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();tabs[next].focus();chooseProject(tabs[next].dataset.project);}});
content.addEventListener('click',e=>{const button=e.target.closest('button');if(!button)return;if(button.dataset.proof!==undefined){projectState.evidence[projectState.project]=Number(button.dataset.proof);const proof=content.querySelector('.project-evidence');proof.outerHTML=projectEvidence();content.querySelector(`[data-proof="${button.dataset.proof}"]`).focus({preventScroll:true});}if(button.dataset.screen!==undefined){projectState.screen=Number(button.dataset.screen);renderProject();content.querySelector(`[data-screen="${projectState.screen}"]`).focus({preventScroll:true});}if(button.dataset.indie!==undefined||button.dataset.development!==undefined){const old=content.querySelector('.product-gallery'),scroll=old.querySelector('.development-thumbnails')?.scrollLeft||0;if(button.dataset.indie!==undefined)projectState.indie=Number(button.dataset.indie);if(button.dataset.development!==undefined)projectState.development=Number(button.dataset.development);old.outerHTML=indieGallery();const selector=button.dataset.development!==undefined?`[data-development="${projectState.development}"]`:`[data-indie="${projectState.indie}"]`;content.querySelector(selector).focus({preventScroll:true});const rail=content.querySelector('.development-thumbnails');if(rail){rail.scrollLeft=scroll;const active=rail.querySelector('[aria-pressed=true]');if(active.offsetLeft<rail.scrollLeft||active.offsetLeft+active.offsetWidth>rail.scrollLeft+rail.clientWidth)rail.scrollLeft=active.offsetLeft-12;}}if(button.dataset.image){const dialog=document.querySelector('#image-viewer'),img=dialog.querySelector('img');img.src='assets/'+button.dataset.image;img.alt=button.dataset.caption;dialog.querySelector('p').textContent=button.dataset.caption;dialog.showModal();}});
document.querySelector('.close-viewer').addEventListener('click',()=>document.querySelector('#image-viewer').close());document.addEventListener('languagechange',renderProject);renderProject();

function pokerGallery(){const shots=[['pokericabra-results.jpg',['Results, made clear.','清晰呈現遊戲結果。']],['pokericabra-battle.jpg',['Every hand. Every point.','每個牌型，每分紀錄。']],['pokericabra-shop.jpg',['A complete in-app economy.','完整的應用程式經濟系統。']]];return `<section class="poker-gallery"><h2>${t('The details complete the experience.','細節，成就完整體驗。')}</h2><div class="poker-gallery-grid">${shots.map(([file,caption])=>`<figure><button type="button" class="image-button gallery-phone" data-image="${file}" data-caption="${t(...caption)}"><img loading="lazy" src="assets/${file}" width="1440" height="3120" alt="${t(...caption)}"></button><figcaption>${t(...caption)}</figcaption></figure>`).join('')}</div></section>`; }

function projectEvidence(){
const labels=[['AI workflow','AI 能力'],['Visual design','審美與設計'],['Information design','複雜資訊設計'],['Delivery','落地能力']];
const proofs=[
 {title:['A clearer first minute, with AI.','以 AI 協作，改善首分鐘體驗。'],copy:['I use AI coding tools to turn specific UX feedback into focused tutorial and localization changes.','我運用 AI 編程工具，把具體 UX 回饋轉化為聚焦的新手教學及本地化修訂。'],image:'pokericabra-2.jpg',note:['Released app · Tutorial reference','已發佈應用程式 · 教學參考'],steps:[['The brief','需求'],['AI-assisted revision','AI 協作修訂'],['Review & release','覆核及發佈']],details:[['Make the next action obvious','讓下一步操作清晰可見'],['Highlight the stored slot; simplify hints','突出暫存區，精簡操作提示'],['Check the flow and Chinese labels','檢查流程與中文標籤']]},
 {title:['Play, rewards and shop. One language.','遊玩、獎勵、商店，一致語言。'],copy:['I designed the interaction and interface around a cohesive art direction, using art assets supplied by others.','我以一致美術方向設計互動及介面，美術資產由外部提供。'],image:'pokericabra-shop.jpg',note:['Actual Google Play release screen','Google Play 版本實際畫面'],steps:[['Hierarchy','層級'],['Interaction','互動'],['Consistency','一致性']],details:[['Primary action first','主要操作優先'],['Touch-friendly controls and feedback','適合觸控的控制及回饋'],['Shared patterns across play and shop','遊玩及商店共用設計模式']]},
 {title:['See what happened. Understand why.','看見結果，理解原因。'],copy:['Hand combinations, scoring and progression become clear feedback that players can inspect.','把牌型組合、計分及進度轉化為清晰回饋，讓玩家逐項查看。'],image:'pokericabra-battle.jpg',note:['Actual battle log · Released app','實際戰鬥紀錄 · 已發佈'],steps:[['Action','操作'],['Explanation','解釋'],['Progress','進度']],details:[['Clear a row and form a hand','消除一行，組成牌型'],['Read the hand and points awarded','查看牌型及所得分數'],['See level rewards and the next target','查看升級獎勵及下一目標']]},
 {title:['From 0 to 1. All the way to Google Play.','由 0 至 1，完整上架 Google Play。'],copy:['I built the product end to end: interaction, game logic, Android integrations, QA and release.','我完整建立產品：互動、遊戲邏輯、Android 整合、品質測試及發佈。'],image:'pokericabra-results.jpg',note:['Released app · Results screen','已發佈應用程式 · 結果畫面'],steps:[['Design & AI coding','設計及 AI 編程'],['Implement & debug','實作及調試'],['Release','上線']],details:[['Flows, rules and interactions','流程、規則及互動'],['Cloud save, billing and rewards','雲端存檔、付款及獎勵'],['Available on Google Play','已於 Google Play 發佈']]}
];
const selected=projectState.evidence.poker,proof=proofs[selected];
return `<section class="project-evidence"><header><h2>${t('Building from 0 to 1.','由 0 至 1 建立產品。')}</h2><p>${t('A complete product, in players’ hands.','完整產品，已交到玩家手上。')}</p></header><div class="proof-tabs" role="tablist" aria-label="${t('Explore four capabilities','探索四項能力')}">${labels.map((label,i)=>`<button type="button" role="tab" id="proof-tab-${i}" data-proof="${i}" tabindex="${selected===i?0:-1}" aria-selected="${selected===i}" aria-controls="proof-panel">${t(...label)}</button>`).join('')}</div><div class="proof-panel proof-portrait" id="proof-panel" role="tabpanel" aria-labelledby="proof-tab-${selected}"><div class="proof-story"><h3>${t(...proof.title)}</h3><p>${t(...proof.copy)}</p><div class="proof-sequence">${proof.steps.map((step,i)=>`<div><span class="proof-node" aria-hidden="true"></span><h4>${t(...step)}</h4><p>${t(...proof.details[i])}</p></div>`).join('')}</div>${selected===3?`<a href="https://play.google.com/store/apps/details?id=com.pokericabra.trainee" target="_blank" rel="noopener">${t('See the released product','查看已發佈產品')} ${arrow}</a>`:''}</div><figure><button class="image-button" type="button" data-image="${proof.image}" data-caption="${t(...proof.note)}"><img src="assets/${proof.image}" alt="${t(...proof.note)}" loading="lazy"></button><figcaption>${t(...proof.note)}</figcaption></figure></div></section>`;
}

content.addEventListener('keydown',e=>{const tabs=[...content.querySelectorAll('[data-proof]')],i=tabs.indexOf(e.target);if(i<0||!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?3:(i+(e.key==='ArrowRight'?1:3))%4;tabs[next].click();});
