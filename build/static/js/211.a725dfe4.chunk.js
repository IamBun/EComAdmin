"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[211],{2211:function(e,r,n){n.r(r),n.d(r,{default:function(){return k}});var s=n(4165),t=n(5861),i=n(9439),c=n(2791),d="dashboard_dashboardWrapper__5ak8H",a="dashboard_widgets__xIJrU",o="dashboard_title__S1J0s",l="widget_widget__XDkfx",h="widget_left__V-K4X",u="widget_right__IIMVM",x="widget_title__adMJD",j="widget_info__K2fP6",_=n(5217),f=n(184),p=function(e){return console.log(e.item),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:l,children:[(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("h2",{className:j,children:e.item>1e5?(0,_.lz)(e.item):e.item}),(0,f.jsx)("h3",{className:x,children:e.type})]}),(0,f.jsx)("div",{className:u,children:e.icon})]})})},m=n(4802),v=n(719),g="order_orderDetail__0OqMo",E=n(1405),S=n(7689),N=function(e){(0,E.v9)((function(e){return e.currentUser.token})),(0,E.v9)((function(e){return e.currentUser.userId}));var r=(0,c.useState)([]),n=(0,i.Z)(r,2),s=n[0],t=n[1],d=(0,S.s0)();return(0,c.useEffect)((function(){t(e.order)}),[]),(0,f.jsxs)(f.Fragment,{children:[0!=s.length&&s.map((function(e){return(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)("p",{children:(0,_.$G)(e.userId,10)}),(0,f.jsx)("p",{children:e.name}),(0,f.jsx)("p",{children:e.phoneNumber}),(0,f.jsx)("p",{children:e.address}),(0,f.jsx)("p",{children:(0,_.lz)(e.total)}),(0,f.jsx)("p",{children:"Pending"}),(0,f.jsx)("p",{children:e.status}),(0,f.jsx)("button",{onClick:function(){var r;r=e._id,d("/order/".concat(r))},id:"detail",children:"Detail"})]},e._id)})),0==s.length&&(0,f.jsx)("h1",{children:"No order yet ! Shopping now "})]})},D=function(){var e=(0,m.v9)((function(e){return e.currentUser.token})),r=(0,c.useState)(),n=(0,i.Z)(r,2),l=n[0],h=n[1],u=function(){var r=(0,t.Z)((0,s.Z)().mark((function r(){var n,t;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_URL+"/admin/dashboard",{headers:{Authorization:e},credentials:"include"});case 3:return n=r.sent,r.next=6,n.json();case 6:if(t=r.sent,n.ok){r.next=9;break}throw Error("Loading failed !");case 9:h(t),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),console.log(r.t0);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(){return r.apply(this,arguments)}}();return console.log("Data",l),(0,c.useEffect)((function(){u()}),[]),(0,f.jsx)("div",{className:d,children:l&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:a,children:[(0,f.jsx)(p,{type:"users",item:l.countUser,icon:(0,f.jsx)(v.EDj,{})}),(0,f.jsx)(p,{type:"earning",item:l.totalOrder,icon:(0,f.jsx)(v.iFN,{})}),(0,f.jsx)(p,{type:"orders",item:l.countOrder,icon:(0,f.jsx)(v.UY3,{})})]}),(0,f.jsx)("h2",{children:" Order History"}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h3",{children:"ID USER"}),(0,f.jsx)("h3",{children:"USER NAME"}),(0,f.jsx)("h3",{children:"PHONE"}),(0,f.jsx)("h3",{children:"ADDRESS"}),(0,f.jsx)("h3",{children:"TOTAL"}),(0,f.jsx)("h3",{children:"DELIVERY"}),(0,f.jsx)("h3",{children:"STATUS"}),(0,f.jsx)("h3",{children:"DETAIL"})]}),(0,f.jsx)(N,{order:l.orders})]})})},k=function(){return(0,f.jsx)(D,{})}}}]);
//# sourceMappingURL=211.a725dfe4.chunk.js.map