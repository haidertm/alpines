import{u as m}from"./index.Blbt_SK2.js";import{d as v,r as h,I as f,b as s,c as o,M as i,f as p,e as t,F as y,Z as C,p as k,i as b,t as g,l as I}from"./entry.DXn3Jc2q.js";const n=e=>(k("data-v-9717fb3e"),e=e(),b(),e),S={key:0,class:"copied"},w=n(()=>t("div",{class:"scrim"},null,-1)),x=n(()=>t("div",{class:"content"}," Copied! ",-1)),B=[w,x],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=n(()=>t("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(e){const a=e,{copy:l}=m(),c=h("init"),r=f(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(s(),o("div",S,B)):p("",!0),T,t("div",F,[(s(!0),o(y,null,C(i(r),d=>(s(),o("span",{key:d,class:"line"},[N,t("span",V,g(d),1)]))),128))]),i(c)!=="copied"?(s(),o("div",j," Click to copy ")):p("",!0)]))}}),L=I(q,[["__scopeId","data-v-9717fb3e"]]);export{L as default};
