import{d as a,r as s,k as n,x as c,h as u,v as l,U as d,b as r,z as _}from"./vendor-6e462d07.js";const i={class:"scroll-y"},p=l("div",null,"mock \u4F7F\u7528\u793A\u4F8B(dev\u73AF\u5883\u65F6\u4F7F\u7528)",-1),m=_("\u70B9\u51FB\u53D1\u9001mock\u8BF7\u6C42"),B=a({setup(F){const t=()=>{d.get("/getMapInfo").then(e=>{e.data&&(console.log(e.data),alert(e.data.title))})};return(e,f)=>{const o=s("el-button");return r(),n("div",i,[p,c(o,{type:"primary",onClick:t},{default:u(()=>[m]),_:1})])}}});export{B as default};
