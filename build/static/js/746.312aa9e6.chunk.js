"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[746],{6746:function(e,t,i){i.r(t),i.d(t,{default:function(){return P}});i(4165),i(5861);var n=i(9439),r="detailProduct_detailProduct__ilQwg",s="detailProduct_miniImg__ZAqTj",l="detailProduct_imgMain__3TFZQ",c="detailProduct_detailDescription__bd9g7",a="detailProduct_middle__8esLa",o="detailProduct_bottom__YoxVi",d="detailProduct_description__cHKhy",u="detailProduct_products__-a+V8",h="detailProduct_formButton__tG1RZ",m="detailProduct_backToShopBtn__dK18Q",g=i(1405),p=i(948),v=i(5217),x=i(7689),j=(i(5431),i(2791)),_=i(8174),f=(i(5462),i(184)),y=function(e){var t=(0,g.v9)((function(e){return e.data.currentData})),i=((0,g.v9)((function(e){return e.currentUser.email})),(0,g.v9)((function(e){return e.currentUser.userId})),(0,g.v9)((function(e){return e.currentUser.token})),(0,g.v9)((function(e){return e.cart})),(0,j.useState)()),y=(0,n.Z)(i,2),P=y[0],k=y[1],C=(0,j.useState)(1),N=(0,n.Z)(C,2),b=N[0],O=N[1],T=(0,x.UO)(),D=(0,x.s0)(),I=((0,g.I0)(),(0,j.useRef)()),U=(0,j.useCallback)(t.filter((function(e){return e.category===(null===P||void 0===P?void 0:P.category)&&e._id!==(null===P||void 0===P?void 0:P._id)})),[P]);(0,j.useEffect)((function(){fetch("https://shy-roan-roll.glitch.me"+"/shop/product/".concat(T.productId)).then((function(e){return e.json()})).then((function(e){console.log("data 45",e),k(e.product)})).catch((function(e){return console.log(e)}))}),[t,T]);var R=function(e){var t=U[e]._id;D("/detail/".concat(t))};return(0,f.jsxs)(f.Fragment,{children:[P&&(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:r,children:[(0,f.jsxs)("div",{className:s,children:[(0,f.jsx)("img",{src:"https://shy-roan-roll.glitch.me/"+(null===P||void 0===P?void 0:P.image[0]),alt:"image0"}),(0,f.jsx)("img",{src:"https://shy-roan-roll.glitch.me/"+(null===P||void 0===P?void 0:P.image[1]),alt:"image1"}),(0,f.jsx)("img",{src:"https://shy-roan-roll.glitch.me/"+(null===P||void 0===P?void 0:P.image[2]),alt:"image2"}),(0,f.jsx)("img",{src:"https://shy-roan-roll.glitch.me/"+(null===P||void 0===P?void 0:P.image[3]),alt:"image3"})]}),(0,f.jsx)("div",{className:l,children:(0,f.jsx)("img",{src:"https://shy-roan-roll.glitch.me/"+(null===P||void 0===P?void 0:P.image[0]),alt:"image0"})}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("h1",{children:P.name}),(0,f.jsx)("h3",{children:(0,v.lz)(P.price)}),(0,f.jsx)("p",{children:P.short_desc}),(0,f.jsxs)("h3",{children:["Category : ",null===P||void 0===P?void 0:P.category]}),(0,f.jsx)("div",{className:h,children:(0,f.jsxs)("form",{children:[(0,f.jsx)("label",{htmlFor:"",for:"qty",children:"Quantity:"}),(0,f.jsx)("input",{ref:I,type:"number",name:"qty",id:"qty",min:"1",max:"10",step:"1",defaultValue:b,onChange:function(e){O(e.target.value)}})]})})]})]}),"//"," ",(0,f.jsxs)("div",{className:a,children:[(0,f.jsx)("span",{children:"Description"}),(0,f.jsx)("h3",{children:"PRODUCT DESCRIPTION"}),(0,f.jsx)("p",{className:d,children:P.long_desc})]})," ",(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h3",{children:"RELATED PRODUCTS"})," ",(0,f.jsx)("div",{className:u,children:U.length>0&&U.map((function(e,t){return(0,f.jsx)(p.Z,{item:e,click:R,index:t},t)}))})]}),(0,f.jsx)("div",{className:m,children:(0,f.jsx)("button",{onClick:function(e){e.preventDefault(),D("/shop")},children:" Back To ShopPage"})})]}),0===t.length&&(0,f.jsx)("h1",{children:"Loading..."}),(0,f.jsx)(_.Ix,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})},P=function(){var e=(0,x.UO)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(y,{id:e.productId})})}}}]);
//# sourceMappingURL=746.312aa9e6.chunk.js.map