"use strict";(self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[]).push([[422],{695:(t,e,a)=>{a.d(e,{Z:()=>k});var s=a(536),l=a(6902),r=a(9676);const o={class:"text-h6"},c={props:{title:String,actionsAlign:{type:String,default:"right"}},setup(t){const e=t,a=(0,s.Rr)(),c=(0,s.Fl)((()=>e.title||a.title));return(e,n)=>{const i=(0,s.up)("q-card-section"),g=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(g,{flat:"",bordered:"",class:"my-card"},{default:(0,s.w5)((()=>[t.title||(0,l.SU)(a).title?((0,s.wg)(),(0,s.j4)(i,{key:0},{default:(0,s.w5)((()=>[(0,s._)("div",o,[(0,s.WI)(e.$slots,"title",{},(()=>[(0,s.Uk)((0,r.zw)(t.title),1)]))])])),_:3})):(0,s.kq)("",!0),(0,l.SU)(a).body?((0,s.wg)(),(0,s.j4)(i,{key:1,class:(0,r.C_)({"q-pt-none":(0,l.SU)(c)})},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"body")])),_:3},8,["class"])):(0,s.kq)("",!0),(0,l.SU)(a).actions?((0,s.wg)(),(0,s.j4)(i,{key:2,align:t.actionsAlign},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"actions")])),_:3},8,["align"])):(0,s.kq)("",!0)])),_:3})}}};var n=a(3316),i=a(1007),g=a(2417),d=a.n(g);const u=c,k=u;d()(c,"components",{QCard:n.Z,QCardSection:i.Z})},1422:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Q});var s=a(536),l=a(6902),r=a(3721),o=a(9676),c=a(2496),n=a(695);const i={class:"row column items-end"},g={class:"text-grey q-mt-xs"},d={setup(t){const{t:e}=(0,c.QT)(),a=(0,r.oR)(),n=(0,s.Fl)((()=>a.getters["ddos/getBrowserAttackStatus"])),d=(0,s.Fl)((()=>a.getters["ddos/getTargetsList"].length>0)),u=()=>{a.dispatch("ddos/destroyBrowserAttack")},k=()=>{a.dispatch("ddos/initBrowserAttack")};return(t,a)=>{const r=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)("div",i,[(0,l.SU)(d)?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,l.SU)(n)?((0,s.wg)(),(0,s.j4)(r,{key:0,onClick:u,label:(0,l.SU)(e)("attackPage.stopBtnLabel"),color:"negative"},null,8,["label"])):((0,s.wg)(),(0,s.j4)(r,{key:1,onClick:k,label:(0,l.SU)(e)("attackPage.startBtnLabel"),color:"primary"},null,8,["label"])),(0,s._)("span",g,(0,o.zw)((0,l.SU)(e)("attackPage.actionsHint")),1)],64)):((0,s.wg)(),(0,s.j4)(r,{key:1,to:{name:"DdosConfig"},label:(0,l.SU)(e)("attackPage.ddosAttackConfigureBtnLabel"),color:"primary"},null,8,["label"]))])}}};var u=a(2235),k=a(2417),w=a.n(k);const p=d,S=p;w()(d,"components",{QBtn:u.Z});const b={setup(t){const{t:e}=(0,c.QT)(),a=(0,r.oR)(),i=(0,s.Fl)((()=>a.getters["ddos/getBrowserAttackStatus"]));return(t,a)=>((0,s.wg)(),(0,s.j4)((0,l.SU)(n.Z),{class:"col-12",title:(0,l.SU)(e)("attackPage.pageTitle")},{body:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)((0,l.SU)(e)("attackPage.statusTitle"))+": ",1),(0,s._)("span",{class:(0,o.C_)({"text-negative":!(0,l.SU)(i),"text-positive":(0,l.SU)(i)})},(0,o.zw)((0,l.SU)(i)?(0,l.SU)(e)("attackPage.attackActiveStatusLabel"):(0,l.SU)(e)("attackPage.attackStoppedStatusLabel")),3)])),actions:(0,s.w5)((()=>[(0,s.Wm)((0,l.SU)(S))])),_:1},8,["title"]))}},U=b,m=U,_={class:"row"},f={class:"q-pa-sm bg-green-1"},v={class:"text-positive"},y={class:"q-ml-md q-pa-sm bg-red-1"},q={class:"text-negative"},P={setup(t){const e=(0,r.oR)(),{t:a}=(0,c.QT)(),n=(0,s.Fl)((()=>e.getters["ddos/getCommonResultsBrowserAttack"]));return(t,e)=>((0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",f,[(0,s._)("b",v,(0,o.zw)((0,l.SU)(a)("attackPage.totalResults.success"))+":",1),(0,s.Uk)(" "+(0,o.zw)((0,l.SU)(n).success),1)]),(0,s._)("div",y,[(0,s._)("b",q,(0,o.zw)((0,l.SU)(a)("attackPage.totalResults.error"))+":",1),(0,s.Uk)(" "+(0,o.zw)((0,l.SU)(n).error),1)])]))}},A=P,B=A,C={setup(t){const{t:e}=(0,c.QT)(),a=(0,r.oR)(),o=(0,s.Fl)((()=>a.getters["ddos/getBrowserAttackResults"])),i=[{name:"target",required:!0,label:e("attackPage.table.target"),align:"left",field:"target"},{name:"success",required:!0,label:e("attackPage.table.success"),align:"left",field:"success",sortable:!0},{name:"errors",required:!0,label:e("attackPage.table.errors"),align:"left",field:"error",sortable:!0}];return(t,a)=>{const r=(0,s.up)("q-table");return(0,s.wg)(),(0,s.j4)((0,l.SU)(n.Z),{title:(0,l.SU)(e)("attackPage.resultsCardTitle"),class:"col-12"},{body:(0,s.w5)((()=>[(0,s.Wm)((0,l.SU)(B)),(0,s.Wm)(r,{rows:(0,l.SU)(o),columns:i,flat:"",pagination:{rowsPerPage:30},class:"q-mt-sm"},null,8,["rows"])])),_:1},8,["title"])}}};var R=a(298);const h=C,j=h;w()(C,"components",{QTable:R.Z});const T={setup(t){const e=(0,r.oR)(),a=(0,s.Fl)((()=>e.getters["ddos/getBrowserAttackStatus"]));return(0,s.bv)((()=>{a.value&&e.dispatch("ddos/initBrowserAttack")})),(t,e)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)((0,l.SU)(m)),(0,s.Wm)((0,l.SU)(j))],64))}},z=T,Q=z}}]);