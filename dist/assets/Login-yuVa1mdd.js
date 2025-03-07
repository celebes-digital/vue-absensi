import{s as w}from"./index-BZEh9QIP.js";import{_,u as h,c as o,b as a,w as r,o as l,a as t,t as b,D as v,s as k}from"./index-IT0w0-03.js";import{s as x,a as y}from"./index-BgSt7lMH.js";import{s as V}from"./index-J9SwwLSJ.js";import{u as L}from"./index-Cn83LMNj.js";import{r as u,e as I}from"./index-DhnhZP77.js";import"./index-VH5_t4r8.js";const S={data(){return{authStore:h(),v$:L(),hasValidated:!1,email:"",password:"",btnIsLoading:!1}},validation(){return{email:{required:u,email:I},password:{required:u}}},methods:{async login(){this.v$.$validate(),this.btnIsLoading=!0;const n={email:this.email,password:this.password};await this.authStore.login(n),this.authStore.authLogin==!1?this.$toast.add({severity:"error",summary:"Login Gagal",detail:"Pastikan password dan email benar",life:3e3}):this.$toast.add({severity:"success",summary:"Login Berhasil",detail:"Selamat datang di aplikasi absensi",life:3e3}),this.btnIsLoading=!1}}},$={class:"w-full h-dvh flex justify-center items-center bg-[#F1F5F9]"},q={key:0,class:"text-red-500"},B={key:1,class:"invisible"},F={key:2,class:"text-red-500"},P={key:3,class:"invisible"};function E(n,s,M,C,e,d){const p=V,m=x,f=y,c=k,g=w;return l(),o("div",$,[a(g,{class:"shadow-md"},{title:r(()=>s[3]||(s[3]=[t("div",{class:""},[t("h1",{class:"text-3xl"},"Login"),t("p",{class:"font-normal text-sm"},"Masuk kedalam aplikasi absensi")],-1)])),content:r(()=>[t("form",{id:"login",onSubmit:s[2]||(s[2]=v((...i)=>d.login&&d.login(...i),["prevent"])),class:"flex flex-col"},[a(m,{variant:"in"},{default:r(()=>[a(p,{class:"w-full",inputId:"email",modelValue:e.email,"onUpdate:modelValue":s[0]||(s[0]=i=>e.email=i),required:"",autofocus:""},null,8,["modelValue"]),s[4]||(s[4]=t("label",{for:"email"},"Email",-1))]),_:1}),e.hasValidated&&e.v$.email.$error?(l(),o("small",q,b(e.v$.email.email?"Invalid email format":"Email is required"),1)):(l(),o("small",B,"...")),a(m,{variant:"in"},{default:r(()=>[a(f,{modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=i=>e.password=i),toggleMask:"",feedback:!1,inputId:"password",required:""},null,8,["modelValue"]),s[5]||(s[5]=t("label",{for:"password"},"Password",-1))]),_:1}),e.hasValidated&&e.v$.password.$error?(l(),o("small",F," Password is required ")):(l(),o("small",P,"...")),a(c,{label:"Login",loading:e.btnIsLoading,type:"submit"},null,8,["loading"])],32)]),_:1})])}const z=_(S,[["render",E]]);export{z as default};
