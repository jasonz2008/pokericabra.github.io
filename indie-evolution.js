'use strict';
// Portfolio language describes UI decisions; source records stay in the evidence manifest.
window.IndieEvolution=(()=>{
  const state={feature:0,versions:[3,2,3,4]};
  const arrow='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
  const actual=['Working interface','實際介面'];
  const concept=['AI-generated concept','AI 生成概念'];
  const features=[
    {name:['Project setup','項目設定'],goal:['Set a project’s scope, budget and schedule without moving between screens.','在同一畫面設定項目範圍、預算與時間安排。'],decision:['Group related settings, keep cost and time visible, and replace separate sliders with one shared timeline. This makes the effect of each choice easier to understand.','把相關設定分組，持續顯示成本與工期，並以一條共用時間軸取代分散的滑桿，讓每個選擇的影響更容易理解。'],result:['A compact form with illustrated choices, a live cost-and-time summary and adjustable project phases. Extra choices stay one click away.','精簡表單結合圖像選項、即時成本與工期摘要，以及可調整的工作階段；額外選項只需點擊一次即可查看。'],versions:[
      {name:['Prototype','原型'],file:'creation-legacy.png',decision:["Group related fields and keep the overall project plan in view.", "把相關欄位分組，並讓整體項目計劃保持可見。"],type:actual,title:['A long form makes comparison difficult.','表單太長，難以比較設定。'],detail:['The first form uses familiar controls, but settings compete for space and the overall plan is hard to see.','最初表單採用熟悉的控制，但設定互相爭奪空間，難以掌握整體計劃。']},
      {name:['AI prototype','AI 原型'],file:'creation-ai.png',decision:["Ask AI to separate settings from the cost summary and connect all phases with one timeline.", "要求 AI 將設定與成本摘要分區，並以共用時間軸連接各階段。"],type:concept,title:['Explore the layout before writing the interface.','先探索佈局，再實作介面。'],detail:['AI helped explore grouped settings, compact labels and a shared timeline. Values in this concept are illustrative.','透過 AI 探索分組設定、精簡標籤及共用時間軸。概念圖中的數值僅作示意。']},
      {name:['Version Alpha','初版'],file:'creation-alpha.png',decision:["Reduce nested controls and replace separate sliders with a single phase timeline.", "減少層層展開的控制，並以共用階段時間軸取代分散滑桿。"],type:actual,title:['Make the working form easier to scan.','讓可操作的表單更容易閱讀。'],detail:['Nested controls, cramped scrolling and separate sliders make a working form difficult to understand.','層層展開的控制、狹窄捲動區與分散滑桿，讓能操作的表單仍然難以理解。']},
      {name:['Final Result','最終成果'],file:'creation-current.png',decision:["Keep choices, cost and schedule together, with additional options available on demand.", "把選項、成本與工期放在一起，額外設定則按需要展開。"],type:actual,title:['Settings and their impact, together.','設定與影響，一起看清。'],detail:['The current screen places grouped choices beside the budget and schedule, with project phases below.','目前畫面將分組選項放在預算與工期旁，下方則顯示工作階段。'],extra:'creation-overflow.png',extraLabel:['See how extra choices fit','查看額外選項的顯示方式']}
    ]},
    {name:['Clear choices','選項辨識'],goal:['Help people recognize options and see what they have chosen.','讓使用者容易辨認選項，清楚知道自己選了甚麼。'],decision:['Give each option a distinct illustration and a readable name. Use a small checkmark for its chosen state, so the option itself gets the attention.','為每個選項配上易辨插圖及清晰名稱，以小勾號表示已選狀態，讓注意力回到選項本身。'],result:['A five-column layout makes the options easy to compare. People can choose several categories and immediately see their choices and the total selected.','五欄佈局方便比較選項，易辨插圖配合簡潔勾號；使用者可同時選擇多個類型，立即看清已選項目及數量。'],versions:[
      {name:['Prototype','原型'],file:'options-before.png',decision:["Give the option image more space and reduce the size of the state label.", "放大選項圖像，縮小狀態標籤，讓內容更容易辨認。"],type:actual,title:['Too much space. Too little distinction.','留白過多，選項辨識不足。'],detail:['An earlier appearance-settings dialog shows the shared problem: a small image, a large state label and unused space.','早期外觀設定視窗呈現共通問題：圖像太小、狀態文字搶眼，空間未被有效運用。']},
      {name:['AI prototype','AI 原型'],file:'genre-ai.png',decision:["Use AI to establish one illustration style, then refine the grid for easier comparison.", "透過 AI 建立一致插圖風格，再調整網格以方便比較。"],type:concept,title:['Make options recognizable at a glance.','讓選項一眼就能辨認。'],detail:['AI-generated illustrations establish a consistent style. The layout is then refined from three columns to five.','AI 生成插圖建立一致風格，佈局再由三欄調整為五欄。']},
      {name:['Final Result','最終成果'],file:'genre-current.png',decision:["Use five columns, small checkmarks and a visible count to make multiple selection clear.", "採用五欄佈局、小勾號與已選數量，清楚呈現多選狀態。"],type:actual,title:['Clear images. Clear choices.','圖像清晰，選擇明確。'],detail:['Different categories demonstrate the reusable option layout. A count confirms how many are chosen.','以不同類型示範可重用的選項佈局，並以數字確認已選數量。']}
    ]},
    {name:['Finding features','功能導覽'],goal:['Make related tools easy to find without learning the product’s internal structure.','無需先理解產品內部架構，也能找到相關工具。'],decision:['Organize tools by what people want to do. Give idea-development tools a dedicated menu, use consistent illustrations, and show unavailable actions before a click.','按使用目的整理工具，為構思及研究建立專屬選單，使用一致插圖，並在點擊前標明尚未開放的功能。'],result:['The menu groups related planning, research and learning tools. Softer artwork supports recognition; clear availability labels prevent dead ends.','選單集中相關的規劃、研究及學習工具。柔和插圖協助辨認，清晰的開放狀態避免無效操作。'],versions:[
      {name:['Original menu','原本選單'],file:'navigation-before.png',decision:["Name and group tools by the action people want to take.", "按使用者想完成的操作命名及整理工具。"],type:actual,title:['Places are not the same as tasks.','地點名稱，未必能解釋功能。'],detail:['The original menu groups tools by place rather than purpose. People must infer which action each destination offers.','原本總覽以地點而非用途分類，使用者需要自行推測各入口提供的操作。']},
      {name:['AI prototype','AI 原型'],file:'ideas-ai.png',decision:["Ask AI for a dedicated planning menu with clearly separated tool groups.", "要求 AI 為規劃工具建立專屬選單，清楚分開不同用途。"],type:concept,title:['Group tools around a clear purpose.','以明確用途整理工具。'],detail:['The AI proposal gives idea-development actions a dedicated home. Unrelated tools are moved to more appropriate menus.','AI 方案為構思相關操作建立專屬入口，其他工具則移至更合適的選單。']},
      {name:['Version Alpha','初版'],file:'ideas-first.png',decision:["Unify illustration style and scale while keeping the established grouping.", "保留清晰的功能分組，統一插圖風格及比例。"],type:actual,title:['The layout works; the icons need consistency.','佈局能用，圖示仍需統一。'],detail:['The first working menu establishes the grouping. Mixed illustration styles make the actions feel less connected.','首個可操作選單建立了功能分組，但混合的插圖風格削弱整體一致性。']},
      {name:['Final Result','最終成果'],file:'ideas-current.png',decision:["Pair recognizable illustrations with availability labels before an action is chosen.", "以易辨插圖配合功能狀態，讓使用者在點擊前知道哪些操作可用。"],type:actual,title:['A menu that explains its actions.','讓選單自己說明用途。'],detail:['Illustrations share a softer style and balanced scale. Coming soon and View only labels show what is currently available.','插圖採用一致柔和風格與均衡比例。「即將推出」及「僅供查看」清楚交代功能狀態。']}
    ]},
    {
  "name": [
    "Calendar",
    "日曆"
  ],
  "goal": [
    "See cash flow and upcoming work in the same calendar.",
    "在同一個日曆掌握收支與工作安排。"
  ],
  "versions": [
    {
      "name": [
        "Prototype",
        "原型"
      ],
      "file": "calendar-schedule-before.png",
      "type": [
        "Working interface",
        "實際介面"
      ],
      "title": [
        "Start with the dates.",
        "從日期格開始。"
      ],
      "detail": [
        "The original grid shows dates and today, but does not yet explain cash flow or work phases.",
        "原本的日期格標示日期與今天，但尚未清楚呈現收支及工作階段。"
      ],
      "decision": [
        "Add two views to the same calendar: finances and scheduling, with consistent navigation.",
        "在同一個日曆加入收支與排程兩種檢視，保持一致的日期導覽。"
      ]
    },
    {
      "name": [
        "Finances · AI prototype",
        "收支 · AI 原型"
      ],
      "file": "calendar-finances-ai.png",
      "type": [
        "AI-generated concept",
        "AI 生成概念"
      ],
      "title": [
        "My requirement: daily detail and a period summary.",
        "我的要求：每日明細與期間摘要。"
      ],
      "detail": [
        "Show income and expenses inside each date, then summarize income, expenses and net totals by month, year or all time.",
        "在日期格內顯示每日收入與支出，下方可切換每月、每年及累計的收入、支出與淨額。"
      ],
      "decision": [
        "Ask AI to combine signed daily figures with a prominent summary row. Keep detailed breakdowns below the totals.",
        "要求 AI 將帶正負號的每日金額與醒目的總額列結合，分類明細放在總額下方。"
      ]
    },
    {
      "name": [
        "Schedule · AI prototype",
        "排程 · AI 原型"
      ],
      "file": "calendar-schedule-ai.png",
      "type": [
        "AI-generated concept",
        "AI 生成概念"
      ],
      "title": [
        "My requirement: make the whole schedule visible.",
        "我的要求：一眼掌握整體排程。"
      ],
      "detail": [
        "Show work phases, important deadlines and today together, without opening individual dates.",
        "同時看見工作階段、重要期限與今天的位置，無需逐一打開日期。"
      ],
      "decision": [
        "Ask AI to use phase colors with icons and labels, outline today, and gather key dates below the calendar.",
        "要求 AI 以階段色彩配合圖示及文字，框出今天，並在日曆下方集中列出重要日期。"
      ]
    },
    {
      "name": [
        "Finances · Final Result",
        "收支 · 最終成果"
      ],
      "file": "calendar-finances-final.png",
      "type": [
        "Working interface",
        "實際介面"
      ],
      "title": [
        "The financial view, connected to working data.",
        "收支檢視，連接實際運行數據。"
      ],
      "detail": [
        "The working interface combines daily figures with monthly, yearly and all-time summaries. Amounts belong to the product simulation.",
        "實際介面結合每日金額與每月、每年及累計摘要；畫面金額來自產品模擬數據。"
      ],
      "decision": [
        "Carry the AI layout into the interface, with readable signs, aligned amounts and consistent period controls.",
        "把 AI 佈局落實為介面，保留清楚的正負號、對齊金額與一致的期間切換。"
      ]
    },
    {
      "name": [
        "Schedule · Final Result",
        "排程 · 最終成果"
      ],
      "file": "calendar-schedule-final.png",
      "type": [
        "Working interface",
        "實際介面"
      ],
      "title": [
        "The schedule, connected to project dates.",
        "排程檢視，連接項目日期。"
      ],
      "detail": [
        "The working calendar displays project phases, milestones and the current date in one view.",
        "實際日曆在同一畫面呈現項目階段、里程碑與目前日期。"
      ],
      "decision": [
        "Keep the phase bands, Today outline and date list. Pair color with text and icons so each state remains clear.",
        "保留階段色帶、今天外框及日期清單，以文字與圖示配合色彩，清楚區分各種狀態。"
      ]
    }
  ]
}
  ];
  function render(){
    const f=features[state.feature],i=state.versions[state.feature],v=f.versions[i];
    return `<section class="evolution" id="ui-evolution" aria-labelledby="evolution-heading">
      <header class="evolution-heading"><h2 id="evolution-heading">${t('From prototype to working interface.','從原型到實際介面。')}</h2><p>${t('A studio-management simulation. Four UI improvements, from project setup to financial planning.','一款模擬工作室經營的產品。4 個 UI 改善案例，從項目設定到財務規劃。')}</p></header>
      <div class="evolution-features" role="tablist" aria-label="${t('UI design examples','UI 設計案例')}">${features.map((x,n)=>`<button type="button" id="evolution-feature-${n}" role="tab" data-evolution-feature="${n}" aria-selected="${n===state.feature}" aria-controls="evolution-case" tabindex="${n===state.feature?0:-1}">${t(...x.name)}</button>`).join('')}</div>
      <div id="evolution-case" role="tabpanel" aria-labelledby="evolution-feature-${state.feature}">
        <div class="evolution-purpose"><strong>${t('The goal','設計目標')}</strong><p>${t(...f.goal)}</p></div>
        <div class="evolution-workspace"><div class="evolution-rail"><div class="evolution-version-heading"><span>${t('Design versions','設計版本')}</span><small>${t('Swipe to explore','滑動查看')}</small></div>
        <div class="evolution-versions" role="tablist" aria-label="${t('Design versions','設計版本')}">${f.versions.map((x,n)=>`<button type="button" id="evolution-version-${n}" role="tab" data-evolution-version="${n}" aria-selected="${n===i}" aria-controls="evolution-artifact" tabindex="${n===i?0:-1}"><img src="assets/iteration/${x.file}" alt="" loading="lazy"><span>${t(...x.name)}</span></button>`).join('')}</div>
        </div><div class="evolution-artifact" id="evolution-artifact" role="tabpanel" aria-labelledby="evolution-version-${i}">
          <div class="evolution-context"><div class="evolution-stage-copy"><h3>${t(...v.title)}</h3><p>${t(...v.detail)}</p></div><div class="evolution-decision"><h3>${t('My design decision','我的設計決策')}</h3><p>${t(...(v.decision||f.decision))}</p></div></div>
          <div class="evolution-tools">${v.extra?`<button type="button" class="evolution-extra" data-image="iteration/${v.extra}" data-caption="${t(...v.extraLabel)}">${t(...v.extraLabel)}${arrow}</button>`:'<span></span>'}<div class="evolution-navigation"><button type="button" data-evolution-version="${Math.max(0,i-1)}" ${i===0?'disabled':''} aria-label="${t('Previous version','上一版本')}">${arrow}</button><span>${i+1} / ${f.versions.length}</span><button type="button" data-evolution-version="${Math.min(f.versions.length-1,i+1)}" ${i===f.versions.length-1?'disabled':''} aria-label="${t('Next version','下一版本')}">${arrow}</button></div></div>
          <figure><button type="button" class="image-button" data-image="iteration/${v.file}" data-caption="${t(...v.type)} — ${t(...v.title)}"><img src="assets/iteration/${v.file}" alt="${t(...v.title)} ${t(...v.detail)}" loading="lazy"></button><figcaption><span>${t(...v.type)}</span><button type="button" data-image="iteration/${v.file}" data-caption="${t(...v.type)} — ${t(...v.title)}">${t('Enlarge','放大查看')}${arrow}</button></figcaption></figure>
        </div></div><div class="evolution-bottom"><p>${t('Working screens from a product in development. AI concepts are labelled.','開發中產品的實際介面；AI 概念圖已另行標示。')}</p></div>
      </div></section>`;
  }
  function mount(root){
    root.addEventListener('click',e=>{
      const b=e.target.closest('button');if(!b)return;
      const feature=b.dataset.evolutionFeature,version=b.dataset.evolutionVersion;
      if(feature===undefined&&version===undefined)return;
      const old=root.querySelector('.evolution');if(!old)return;
      const scroll=old.querySelector('.evolution-versions').scrollLeft;
      const featureScroll=old.querySelector('.evolution-features').scrollLeft;
      if(feature!==undefined){state.feature=Number(feature);state.versions[state.feature]=features[state.feature].versions.length-1;}
      if(version!==undefined)state.versions[state.feature]=Number(version);
      old.outerHTML=render();
      const next=root.querySelector('.evolution');
      next.querySelector('.evolution-features').scrollLeft=featureScroll;
      if(version!==undefined)next.querySelector('.evolution-versions').scrollLeft=scroll;
      next.querySelector(feature!==undefined?`[data-evolution-feature="${feature}"]`:`.evolution-versions [data-evolution-version="${version}"]`).focus({preventScroll:true});
      for(const selector of ['.evolution-features','.evolution-versions']){
        const rail=next.querySelector(selector),active=rail.querySelector('[aria-selected=true]');
        if(active.offsetLeft<rail.scrollLeft||active.offsetLeft+active.offsetWidth>rail.scrollLeft+rail.clientWidth)rail.scrollLeft=active.offsetLeft-12;
      }
    });
    root.addEventListener('keydown',e=>{
      if(!e.target.matches('.evolution [role=tab]')||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;
      e.preventDefault();const tabs=[...e.target.parentElement.querySelectorAll('[role=tab]')],n=tabs.indexOf(e.target),next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(n+(['ArrowRight','ArrowDown'].includes(e.key)?1:tabs.length-1))%tabs.length;tabs[next].click();
    });
  }
  return{render,mount};
})();
