"use strict";(self["webpackChunkattack_ui_app"]=self["webpackChunkattack_ui_app"]||[]).push([[166],{2166:(e,t,l)=>{l.r(t),l.d(t,{default:()=>R});var a=l(536),o=l(6902),u=l(9676),n=l(2496);const r={props:{list:{type:Array,default:()=>[]}},emits:[],setup(e,{emit:t}){const{t:l}=(0,n.QT)();return(t,n)=>{const r=(0,a.up)("q-icon"),s=(0,a.up)("q-item-section"),p=(0,a.up)("q-item"),d=(0,a.up)("q-list"),c=(0,a.Q2)("ripple");return(0,a.wg)(),(0,a.j4)(d,{separator:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.list,(({text:e,to:t,showRule:n,icon:d},m)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[!n||n()?(0,a.wy)(((0,a.wg)(),(0,a.j4)(p,{key:m+e,to:t,clickable:""},{default:(0,a.w5)((()=>[d?((0,a.wg)(),(0,a.j4)(s,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{name:d},null,8,["name"])])),_:2},1024)):(0,a.kq)("",!0),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,u.zw)((0,o.SU)(l)(e)),1)])),_:2},1024)])),_:2},1032,["to"])),[[c]]):(0,a.kq)("",!0)],64)))),256))])),_:1})}}};var s=l(2163),p=l(4823),d=l(9655),c=l(8867),m=l(2656),i=l(2417),w=l.n(i);const v=r,g=v;w()(r,"components",{QList:s.Z,QItem:p.Z,QItemSection:d.Z,QIcon:c.Z}),w()(r,"directives",{Ripple:m.Z});const b={props:{modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,u=(0,a.Fl)({get(){return l.modelValue},set(e){t("update:modelValue",e)}}),n=[{text:"nav.ddosDasboardLabel",icon:"dns",to:{name:"DdosAttack"}},{text:"nav.ddosConfigLabel",icon:"settings",to:{name:"DdosConfig"}}];return(e,t)=>{const l=(0,a.up)("q-drawer");return(0,a.wg)(),(0,a.j4)(l,{modelValue:(0,o.SU)(u),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,o.dq)(u)?u.value=e:null),"show-if-above":"",side:"left",width:280,bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(g),{list:n})])),_:1},8,["modelValue"])}}};var f=l(3909);const q=b,_=q;w()(b,"components",{QDrawer:f.Z});const V={setup(e){const t=(0,o.iH)("Attack UI");return(e,l)=>(0,u.zw)(t.value)}},h=V,Q=h,k={props:{color:{type:String,default:"white"}},setup(e){const{locale:t,t:l}=(0,n.QT)({useScope:"global"}),r=[{value:"ua",label:"Українська"},{value:"ru",label:"Русский"},{value:"en",label:"English"}];return(0,a.YP)(t,(()=>{localStorage.setItem("lang",t.value)})),(l,n)=>{const s=(0,a.up)("q-icon"),p=(0,a.up)("q-select");return(0,a.wg)(),(0,a.j4)(p,{modelValue:(0,o.SU)(t),"onUpdate:modelValue":n[0]||(n[0]=e=>(0,o.dq)(t)?t.value=e:null),options:r,borderless:"","emit-value":"","map-options":"","options-dense":"",behavior:"menu","hide-dropdown-icon":"","hide-bottom-space":""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(s,{name:"language",size:"sm",color:e.color},null,8,["color"])])),"selected-item":(0,a.w5)((({opt:t})=>[(0,a._)("span",{class:(0,u.C_)(`text-${e.color}`)},(0,u.zw)(t.label),3)])),_:1},8,["modelValue"])}}};var W=l(3137);const Z=k,S=Z;w()(k,"components",{QSelect:W.Z,QIcon:c.Z});const U=(0,a._)("a",{href:"https://t.me/attack_ui_bot",target:"_blank"},"Support",-1),y={props:{modelValue:Boolean},emits:["update:modelValue"],setup(e,{emit:t}){const l=e,u=()=>{t("update:modelValue",!l.modelValue)};return(e,t)=>{const l=(0,a.up)("q-btn"),n=(0,a.up)("q-toolbar-title"),r=(0,a.up)("q-separator"),s=(0,a.up)("q-toolbar"),p=(0,a.up)("q-header");return(0,a.wg)(),(0,a.j4)(p,{reveal:"",bordered:"",class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,{dense:"",flat:"",round:"",icon:"menu",onClick:u}),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(Q))])),_:1}),(0,a.Wm)(r,{vertical:"",spaced:"lg"}),(0,a.Wm)((0,o.SU)(S),{color:"white"}),(0,a.Wm)(r,{vertical:"",spaced:"lg"}),U])),_:1})])),_:1})}}};var j=l(6012),C=l(2468),D=l(2235),H=l(7900),I=l(3678);const x=y,T=x;w()(y,"components",{QHeader:j.Z,QToolbar:C.Z,QBtn:D.Z,QToolbarTitle:H.Z,QSeparator:I.Z});const z={setup(e){const t=(0,o.iH)(!1);return(e,l)=>{const u=(0,a.up)("router-view"),n=(0,a.up)("q-page"),r=(0,a.up)("q-page-container"),s=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(s,{view:"hHh lpR fFf"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(_),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e)},null,8,["modelValue"]),(0,a.Wm)((0,o.SU)(T),{modelValue:t.value,"onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e)},null,8,["modelValue"]),(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a.Wm)(n,{class:"q-pl-md q-pr-md q-pb-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1})])),_:1})])),_:1})}}};var L=l(6327),A=l(1036),B=l(251);const P=z,R=P;w()(z,"components",{QLayout:L.Z,QPageContainer:A.Z,QPage:B.Z})}}]);