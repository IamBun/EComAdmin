"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[202],{202:function(e,n,s){s.r(n),s.d(n,{default:function(){return g}});var t=s(4165),r=s(5861),o=s(3308),a=s(1087),c=s(2791),i=s(1405),u=s(3533),l=s(7689),p="login_login__fUtgA",h="login_form__bIjov",f=s(8174),d=(s(5462),s(184)),m=function(){var e=(0,i.v9)((function(e){return e.currentUser.token})),n=(0,c.useRef)(),s=(0,c.useRef)(),m=(0,i.I0)(),g=(0,l.s0)();(0,c.useEffect)((function(){e&&g("/home")}),[e]);var x=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(r){var o,a,c,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),o=n.current.value,a=s.current.value,e.prev=3,e.next=6,fetch("https://shy-roan-roll.glitch.me/auth/adminlogin",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:a})});case 6:return c=e.sent,e.next=9,c.json();case 9:return i=e.sent,e.next=12,i.userId;case 12:if(e.sent){e.next=16;break}throw f.Am.error("".concat(i.message)),new Error("Login failed !");case 16:f.Am.success("Login success !"),sessionStorage.setItem("token",i.token),sessionStorage.setItem("isUser",i.name),m(u.N.login({token:i.token,userId:i.userId,name:i.name})),g("/home"),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),console.log(e.t0.message);case 26:case"end":return e.stop()}}),e,null,[[3,23]])})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)("img",{src:o}),(0,d.jsxs)("form",{onSubmit:x,className:h,children:[(0,d.jsx)("h1",{children:"Sign In"}),(0,d.jsx)("input",{type:"text",placeholder:"Email",ref:n}),(0,d.jsx)("input",{type:"password",placeholder:"Password",ref:s}),(0,d.jsx)("button",{children:"SIGN IN"}),(0,d.jsxs)("h3",{children:["Create an account ? ",(0,d.jsx)(a.rU,{to:"/register",children:" Sign up"})]})]}),(0,d.jsx)(f.Ix,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!1,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})},g=function(){return(0,d.jsx)(m,{})}}}]);
//# sourceMappingURL=202.72d063e6.chunk.js.map