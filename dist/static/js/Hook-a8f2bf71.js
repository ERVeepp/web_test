import{e as u,D as l,d as k,r as h,k as f,v as d,t as n,j as s,x as C,h as _,b as i,z as p}from"./vendor-6e462d07.js";function B(){const t=u("hook\u6570\u636E"),o=u("hook\u6570\u636Eref2");return l(()=>{console.log("hooks onMounted")}),{ref1:t,ref2:o,hooksFunc:()=>(alert("\u6211\u662Fhook\u91CC\u7684\u65B9\u6CD5"),"hook\u65B9\u6CD5\u6267\u884C\u4E86")}}const m=p("\u6267\u884Chook\u65B9\u6CD5"),x=k({setup(t){const{ref1:o,ref2:e,hooksFunc:r}=B(),c=()=>{r()};return u("111"),console.log(`\u83B7\u53D6\u5230hook\u5BFC\u51FA\u7684\u6570\u636E${e}`),console.log(`\u83B7\u53D6\u5230hook\u5BFC\u51FA\u7684\u6570\u636E${o}`),(F,D)=>{const a=h("el-button");return i(),f("div",null,[d("div",null,"ref1:"+n(s(o))+",ref2:"+n(s(e)),1),C(a,{onClick:c},{default:_(()=>[m]),_:1})])}}});export{x as default};