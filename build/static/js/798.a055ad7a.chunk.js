"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[798],{9798:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var s=n(4165),t=n(5861),c=n(9439),d="orderIdDetail_orderWrapper__3MXqY",i="orderIdDetail_orderIdDetail__UzqJ9",a="orderIdDetail_orderIdDetailInfo__5fDvM",h="orderIdDetail_productTitle__6MoDW",l=n(7689),o=n(2791),u=n(1405),x=n(5217),j="productInOrder_productInOrder__udeYH",p=n(184),m=function(e){var r=(0,o.useState)(),n=(0,c.Z)(r,2),d=n[0],i=n[1],a=function(){var r=(0,t.Z)((0,s.Z)().mark((function r(){var n,t;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://shy-roan-roll.glitch.me"+"/shop/product/".concat(e.item.productId));case 2:return n=r.sent,r.next=5,n.json();case 5:t=r.sent,console.log("data",t),i(t.product);case 8:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,o.useEffect)((function(){a()}),[]),(0,p.jsx)(p.Fragment,{children:d&&(0,p.jsxs)("div",{className:j,children:[(0,p.jsx)("h3",{children:d._id}),(0,p.jsx)("img",{src:d.image[0],alt:d.name}),(0,p.jsx)("h3",{children:d.name}),(0,p.jsx)("h3",{children:(0,x.lz)(d.price)}),(0,p.jsx)("h3",{children:e.item.quantity})]})})},f=function(e){var r=(0,l.UO)(),n=(0,u.v9)((function(e){return e.currentUser.token})),j=(0,o.useState)(),f=(0,c.Z)(j,2),v=f[0],I=f[1],_=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(){var t,c;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://shy-roan-roll.glitch.me"+"/shop/order/".concat(r.orderId),{credentials:"include",headers:{Authorization:n}});case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,I(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){_()}),[]),(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)("h1",{children:"Information Order"}),v&&(0,p.jsxs)("div",{className:i,children:[(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("h3",{children:"User ID : "}),(0,p.jsx)("h3",{children:v.userId})]}),(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("h3",{children:"Full Name :"}),(0,p.jsx)("h3",{children:v.name})]}),(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("h3",{children:"Phone Number : "}),(0,p.jsx)("h3",{children:v.phoneNumber})]}),(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("h3",{children:"Address : "}),(0,p.jsx)("h3",{children:v.address})]}),(0,p.jsxs)("div",{className:a,children:[(0,p.jsx)("h3",{children:"Total : "}),(0,p.jsx)("h3",{children:(0,x.lz)(v.total)})]})]}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("h2",{children:"ProductId"}),(0,p.jsx)("h2",{children:"Image"}),(0,p.jsx)("h2",{children:"Name"}),(0,p.jsx)("h2",{children:"Price"}),(0,p.jsx)("h2",{children:"Quantity"})]}),v&&v.products.map((function(e){return(0,p.jsx)(m,{item:e},e.productId)}))]})}}}]);
//# sourceMappingURL=798.a055ad7a.chunk.js.map