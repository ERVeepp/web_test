import{d as p,u,e as m,r as h,k as f,x as o,h as s,v as c,b as B,z as a,t as S}from"./vendor-6e462d07.js";const v=c("div",null,"getter",-1),k=c("div",{class:"mt-2"},"commit",-1),C=a("c_openSideBar"),b=a("c_closeSideBar"),g=c("div",{class:"mt-2"},"action",-1),x=a("openSideBar"),V=a("closeSideBar"),M=p({setup(N){const e=u(),n=m(null),d=()=>{n.value=e.getters.cachedViews},i=()=>{e.commit("app/M_sidebar_opened",!0)},_=()=>{e.commit("app/M_sidebar_opened",!1)},r=()=>{e.dispatch("app/A_sidebar_opened",!0)},l=()=>{e.dispatch("app/A_sidebar_opened",!1)};return(w,A)=>{const t=h("el-button");return B(),f("div",null,[v,o(t,{onClick:d},{default:s(()=>[a("\u83B7\u53D6getter:"+S(n.value),1)]),_:1}),k,o(t,{onClick:i},{default:s(()=>[C]),_:1}),o(t,{onClick:_},{default:s(()=>[b]),_:1}),g,o(t,{onClick:r},{default:s(()=>[x]),_:1}),o(t,{onClick:l},{default:s(()=>[V]),_:1})])}}});export{M as default};
