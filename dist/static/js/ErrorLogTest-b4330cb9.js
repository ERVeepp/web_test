import{d as k,u as w,c as b,e as l,r as E,k as m,i as e,x as r,h as t,j as c,v as s,b as _,z as n}from"./vendor-6e462d07.js";import{a as h}from"./index-f04f82d0.js";const q={class:"scroll-y"},x=s("div",{class:"mt-2"},"throw unhandledrejection",-1),j=n("unhandledrejection"),L=s("div",{class:"mt-2"},"throw console.error",-1),B=n("console.error"),N=s("div",{class:"mt-2"},"throw normalError",-1),V=n("normalError"),P=s("div",{class:"mt-2"},"throw req cross origin",-1),O=n("reqCrossOrigin"),R=s("div",{class:"mt-2"},"throw req 404 error",-1),S=n("req404"),T=s("div",{class:"mt-2"},"throw image load error",-1),z=n("imageLoadError"),F={key:0,src:"http://img.png"},D=k({setup(I){const u=w();b(()=>u.state.app.settings||{});const p=()=>{new Promise((i,d)=>{d("reject promise")}).then(i=>{console.log("ok")})};l(null);const f=()=>{console.error("console.error")},g=()=>{throw new Error(` throw new Error("")
`)};let v=()=>{h({baseURL:"http://8.135.1.141/micro-service-test",url:"/integration-front/brand/updateBy",data:{id:"fai"},method:"put",isParams:!0,bfLoading:!0}).then(()=>{})},y=()=>{h({url:"/integration-front/brand/updateBy1",data:{id:"fai"},method:"put",isParams:!0,bfLoading:!0}).then(i=>{})},a=l(!1);const C=()=>{a.value=!a.value};return(i,d)=>{const o=E("el-button");return _(),m("div",q,[e('    <teleport to="body">'),e("      <div>i come from ErrorLogTest.vue</div>"),e("    </teleport>"),x,r(o,{type:"primary",onClick:p},{default:t(()=>[j]),_:1}),L,r(o,{type:"primary",onClick:f},{default:t(()=>[B]),_:1}),N,r(o,{type:"primary",onClick:g},{default:t(()=>[V]),_:1}),e("req relative"),P,r(o,{type:"primary",onClick:c(v)},{default:t(()=>[O]),_:1},8,["onClick"]),R,r(o,{type:"primary",onClick:c(y)},{default:t(()=>[S]),_:1},8,["onClick"]),e(" resource load error   "),T,r(o,{type:"primary",onClick:C},{default:t(()=>[z]),_:1}),e("image load error demo"),c(a)?(_(),m("img",F)):e("v-if",!0)])}}});export{D as default};
