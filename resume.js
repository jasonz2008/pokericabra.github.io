'use strict';
window.renderResume=()=>{
  const row=(label,value,note='')=>`<div class="spec-row"><dt>${label}</dt><dd>${value}${note?`<small>${note}</small>`:''}</dd></div>`;
  const job=(role,company,dates,description)=>`<div class="career-row"><div><h3>${role}</h3><p>${company}</p><time>${dates}</time></div><p>${description}</p></div>`;
  return `<article class="resume-shell">
  <header class="resume-hero"><h1>Jason Zhong.</h1><p>${t('Analytical by training. A builder by instinct.','以分析為根基，以創造為本能。')}</p><div class="resume-actions"><span>${t('Hong Kong · No sponsorship needed','香港 · 毋須工作簽證贊助')}</span></div></header>
  <section class="resume-section"><h2>${t('Technical specifications.','專業規格。')}</h2><dl class="spec-list">
  ${row(t('Core experience','核心經驗'),t('5 years data analysis','5 年數據分析'),t('2 years AI development','2 年 AI 項目開發經驗'))}
  ${row(t('Product delivery','產品交付'),t('Discovery → design → development → release','探索 → 設計 → 開發 → 發佈'),t('Pokericabra Trainee · Available on Google Play','Pokericabra Trainee · 已於 Google Play 發佈'))}
  ${row(t('Research scale','研究規模'),t('1,500 research projects','1,500 個研究專案'),t('End-to-end research delivery at KGS Research','於 KGS Research 管理完整研究流程'))}
  ${row(t('Education','學歷'),t('University of Toronto','多倫多大學'),t('B.S. Psychology · June 2016','心理學理學士 · 2016 年 6 月'))}
  ${row(t('Languages','語言'),t('Fluent in English, Cantonese & Mandarin','流利英語、廣東話及普通話'))}
  </dl></section>
  <section class="resume-section"><h2>${t('Built through experience.','從實踐中累積。')}</h2><div class="career-list">
  ${job(t('Project Manager','專案經理'),'Pokericabra Trainee',t('May 2024 — Present · Remote','2024 年 5 月 — 至今 · 遙距'),t('Product roadmap, UI/UX, release delivery and QA. Google Play launch, Google Ads and interactive HTML5 campaign creative.','產品路線圖、UI/UX、版本交付及品質測試。Google Play 上架、Google Ads 及互動 HTML5 廣告素材。'))}
  ${job(t('Market Research Data Analyst','市場研究數據分析師'),'KGS Research',t('Jan 2019 — Feb 2024 · Toronto','2019 年 1 月 — 2024 年 2 月 · 多倫多'),t('Managed 1,500 research projects. Survey design, sample and quota validation, anomaly detection, executive reporting and A/B testing.','管理 1,500 個研究專案。問卷設計、樣本及配額核實、異常識別、管理層報告及 A/B 測試。'))}
  ${job(t('Office Administrator','辦公室行政人員'),'Kam Wah Resources',t('Jun 2017 — Dec 2018 · Toronto','2017 年 6 月 — 2018 年 12 月 · 多倫多'),t('Financial documentation, commercial invoices, bilingual localization and accurate corporate records.','財務文件、商業發票、雙語本地化及企業紀錄管理。'))}
  </div></section>
  <section class="resume-section"><h2>${t('Tools. With a purpose.','工具，各有所長。')}</h2><dl class="spec-list">
  ${row(t('AI proficiency','AI 工具運用'),t('Proficient in ChatGPT, ChatGPT Codex, ChatGPT Image Gen, Gemini, Claude & Claude Code','熟練使用 ChatGPT、ChatGPT Codex、ChatGPT Image Gen、Gemini、Claude 及 Claude Code'))}
  ${row(t('Analytics','數據分析'),'SQL · Python · Excel · SPSS · SAS',t('Survey design · Qualtrics · A/B testing · Data visualization','問卷設計 · Qualtrics · A/B 測試 · 數據視覺化'))}
  ${row(t('Product & delivery','產品及交付'),t('Strategy · Roadmaps · Requirements · Release management','策略 · 路線圖 · 需求 · 版本管理'),t('Scope management · Cross-functional delivery · QA · Bug triage','範圍管理 · 跨職能交付 · 品質測試 · 缺陷分類'))}
  ${row(t('Design & growth','設計及增長'),'UI/UX · HTML5 · Google Ads',t('User journeys · Interaction design · Usability testing · AI coding agents','用戶旅程 · 互動設計 · 可用性測試 · AI 編程代理'))}
  </dl></section>
  <section class="resume-section ai-activity"><div class="resume-section-heading"><h2>${t('AI, in practice.','AI，付諸實踐。')}</h2><span>Codex</span></div>
  <div class="token-display"><div><strong>${t('1.97<span>B</span>','19.7<span>億</span>')}</strong><p>${t('Cumulative tokens','累計 Token 數')}</p></div><div><strong>${t('230<span>M</span>','2.3<span>億</span>')}</strong><p>${t('Peak token count','峰值 Token 數')}</p></div></div>
  <dl class="spec-list usage-tools">
  ${row(t('Most-used tools','最常用工具'),'Impeccable 42 · Custom Icons 16 · Superpowers 14 · ImageGen 13 · Documents 6',t('Runs recorded in the supplied screenshot','提供截圖中記錄的執行次數'))}
  </dl>
  </section></article>`;
};
