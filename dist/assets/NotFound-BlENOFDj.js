import{s as m}from"./index-BZEh9QIP.js";import{_ as f,c as _,b as e,w as n,o as k,a as o,C as i,l as c,v as d,s as h,e as g}from"./index-IT0w0-03.js";const v={name:"NotFound",inject:["default"],data(){return{token:localStorage.getItem("token")}},methods:{hasHistory(){return window.history.length>2}},mounted(){}},x={class:"flex w-full h-dvh items-center justify-center"},w={class:"flex flex-col gap-2"},y={class:"flex justify-center"};function N(s,t,b,B,a,u){const r=h,l=g("RouterLink"),p=m;return k(),_("div",x,[e(p,{class:"col-span-12 shadow-md"},{title:n(()=>t[1]||(t[1]=[o("h1",{class:"text-3xl"}," Error 404 - Page Not Found :( ",-1)])),content:n(()=>[o("div",w,[t[2]||(t[2]=o("p",null,[i("Halaman yang kamu cari tidak ditemukan "),o("br"),i("atau telah di pindah kan ke route lain")],-1)),o("div",y,[c(e(l,{to:""},{default:n(()=>[e(r,{type:"button",onClick:t[0]||(t[0]=C=>u.hasHistory()?s.$router.go(-1):s.$router.push("/")),label:"Back"})]),_:1},512),[[d,a.token]]),c(e(l,{to:"/login"},{default:n(()=>[e(r,{label:"Login"})]),_:1},512),[[d,!a.token]])])])]),_:1})])}const F=f(v,[["render",N]]);export{F as default};
