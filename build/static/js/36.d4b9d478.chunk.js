"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[36],{7036:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(4165),s=r(5861),a=r(3433),c=r(9439),i=r(1405),o="editProduct_editProductWrapper__ptFV5",u="editProduct_field__+kn66",l=r(2791),d=r(8174),p=r(7689),f=r(184),h=function(){var e=(0,i.v9)((function(e){return e.currentUser.token})),t=(0,p.UO)(),r=(0,l.useRef)(),h=(0,l.useRef)(),x=(0,l.useRef)(),m=(0,l.useRef)(),g=(0,l.useRef)(),j=(0,l.useRef)(),v=(0,l.useState)(),b=(0,c.Z)(v,2),y=b[0],k=b[1],w=y?(0,a.Z)(y):[],_=(0,p.s0)(),P=(0,l.useState)(),Z=(0,c.Z)(P,2),C=Z[0],N=Z[1],R=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(){var s,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://shy-roan-roll.glitch.me"+"/admin/product/".concat(t.productId),{credentials:"include",headers:{Authorization:e}});case 2:return s=r.sent,r.next=5,s.json();case 5:if(a=r.sent,s.ok){r.next=8;break}throw new Error("Loading failed !");case 8:console.log("data",a),N(a);case 10:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();(0,l.useEffect)((function(){R()}),[]);var V=function(){var a=(0,s.Z)((0,n.Z)().mark((function s(a){var c,i,o,u,l,p,f,j,v;return(0,n.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(n.prev=0,a.preventDefault(),c=r.current.value,i=x.current.value,o=h.current.value,u=m.current.value,l=g.current.value,(p=new FormData).append("name",c),p.append("price",o),p.append("category",i),p.append("long_desc",u),p.append("short_desc",l),f=0;f<w.length;f++)p.append("images",w[f]);return n.next=16,fetch("https://shy-roan-roll.glitch.me"+"/admin/product/".concat(t.productId),{credentials:"include",method:"PUT",headers:{Authorization:e},body:p});case 16:return j=n.sent,n.next=19,j.json();case 19:if(v=n.sent,console.log("result",v),j.ok){n.next=24;break}throw d.Am.error("".concat(v.message)),new Error("Loading failed !");case 24:d.Am.success("".concat(v.message)),setTimeout((function(){_("/product")}),2e3),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(0),console.log(n.t0);case 31:case"end":return n.stop()}}),s,null,[[0,28]])})));return function(e){return a.apply(this,arguments)}}();return(0,f.jsx)(f.Fragment,{children:C&&(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h2",{children:"Edit Product"}),(0,f.jsxs)("form",{onSubmit:V,children:[(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("label",{children:"Product Name"}),(0,f.jsx)("input",{type:"text",id:"name",ref:r,defaultValue:C.name})]}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("label",{children:"Category"}),(0,f.jsx)("input",{type:"text",id:"category",ref:x,defaultValue:C.category})]}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("label",{children:"Price"}),(0,f.jsx)("input",{type:"number",id:"price",ref:h,defaultValue:C.price})]}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("label",{children:"Short Description"}),(0,f.jsx)("textarea",{row:"4",id:"longdesc",ref:g,defaultValue:C.short_desc})]}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("label",{children:"Long Description"}),(0,f.jsx)("textarea",{rows:"4",id:"shortdesc",ref:m,defaultValue:C.long_desc})]}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("label",{children:"Images (4 images )"}),(0,f.jsx)("input",{type:"file",id:"images",name:"images",ref:j,multiple:!0,onChange:function(e){k(e.target.files)}})]}),(0,f.jsx)("button",{type:"submit",id:"edit",children:"Update Product"}),(0,f.jsx)("button",{id:"cancel",onClick:function(){_("/product")},children:"Cancel"})]}),(0,f.jsx)(d.Ix,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!1,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})})},x=function(){return(0,f.jsx)(h,{})}}}]);
//# sourceMappingURL=36.d4b9d478.chunk.js.map