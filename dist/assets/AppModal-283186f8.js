import{_ as p,u,a as m,r as f,o as v,b as k,c as l,d,e as o,f as s,g as r,h as M,i as b}from"./index-36a557a9.js";const C={class:"modal-background"},g={class:"content-wrapper"},w={class:"content-main-wrapper"},$={class:"content-main"},y={__name:"AppModal",setup(h){const t=u(),i=m(),a=f(null);return v(a,()=>{t.switchModal()}),(_,e)=>{const n=k("font-awesome-icon");return l(),d("div",C,[o(t).isModalDisplayed?(l(),d("div",{key:0,ref_key:"target",ref:a,class:"modal"},[s("button",{onClick:e[0]||(e[0]=c=>o(t).switchModal()),class:"close-btn"},[r(n,{icon:"fa-solid fa-xmark"})]),s("div",g,[s("main",w,[s("div",$,[M(_.$slots,"content-main",{},void 0,!0)])])]),s("button",{onClick:e[1]||(e[1]=c=>o(t).saveModalChanges()),class:"save-btn"},[r(n,{icon:"fa-solid fa-check"})]),s("button",{onClick:e[2]||(e[2]=c=>{o(i).$reset(),o(t).$reset()}),class:"reset-default-btn"},"Reset default")],512)):b("",!0)])}}},A=p(y,[["__scopeId","data-v-707a3c7a"]]);export{A as default};