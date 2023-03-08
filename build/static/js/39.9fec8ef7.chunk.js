"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[39],{8039:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(4165),c=t(5861),i=t(9439),s=t(2791),o=t(1405),a="shopBanner_shopBanner__0rs+5",u="shopBanner_shopDescription__gyolC",d=t(3308),h=t(184),l=function(){return(0,h.jsxs)("div",{className:a,children:[(0,h.jsx)("img",{src:d}),(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)("h1",{children:"BOUTIQUE PRODUCTS"}),(0,h.jsx)("h3",{children:"Everything you want ! "})]})]})},p="product_productTitle__d-h1t",f="product_fetchFail__gXuB3",x="product_searchDetail__221rc",_="productInfo_productInfo__cNk9g",m="productInfo_productAction__OJKPc",v=t(8174),j=t(7689),g=t(651),E=function(e){var n=(0,o.I0)(),t=(0,j.s0)(),i=(0,o.v9)((function(e){return e.currentUser.token})),s=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var c,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_URL+"/admin/product/".concat(t),{credentials:"include",method:"DELETE",headers:{Authorization:i}});case 3:return c=e.sent,e.next=6,c.json();case 6:if(s=e.sent,c.ok){e.next=10;break}throw v.Am.error("".concat(s.message)),new Error("Fetching failed !");case 10:v.Am.success("".concat(s.message)),n(g.J.change()),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:_,children:[(0,h.jsx)("h5",{children:e.item._id}),(0,h.jsx)("h4",{children:e.item.name}),(0,h.jsx)("h4",{children:e.item.price}),(0,h.jsx)("img",{src:e.item.image[0],alt:e.item.name}),(0,h.jsx)("h4",{children:e.item.category}),(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("button",{id:"update",onClick:function(){t("/editProduct/".concat(e.item._id))},children:"Update"}),(0,h.jsx)("button",{id:"delete",onClick:function(){"y"===prompt("Are you sure you want delete this product (y/n) ?").toLowerCase()&&s(e.item._id)},children:"Delete"})]})]}),(0,h.jsx)(v.Ix,{position:"top-center",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!1,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})},C=t(2550),S=t(8141),O=function(){var e=(0,s.useState)(),n=(0,i.Z)(e,2),t=n[0],a=n[1],u=(0,o.I0)(),d=(0,o.v9)((function(e){return e.currentUser.token})),_=(0,s.useRef)(),m=(0,j.s0)(),v=(0,o.v9)((function(e){return e.data.currentData})),g=(0,o.v9)((function(e){return e.product.productChange})),O=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.API_URL+"/admin/allProduct",{credentials:"include",headers:{Authorization:d}});case 3:if((n=e.sent).ok){e.next=6;break}throw Error("Loading failed !");case 6:return e.next=8,n.json();case 8:t=e.sent,u(C.t.getData(t)),a(t),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){u(S.O.getCategories(v))}),[v,g]);var k=(0,o.v9)((function(e){return e.categories.categories}));return(0,s.useEffect)((function(){O()}),[g]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{}),d&&(0,h.jsxs)("div",{className:x,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("input",{placeholder:"Enter Search Here ! ",ref:_}),(0,h.jsx)("button",{onClick:function(){var e=_.current.value.toLowerCase(),n=v.filter((function(n){return n.name.match(e)}));u(S.O.getCategories(n))},children:"Search"})]}),(0,h.jsx)("button",{id:"add",onClick:function(){m("/addproduct")},children:"Add New Product"})]}),t&&(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("h2",{children:"ID"}),(0,h.jsx)("h2",{children:"Name"}),(0,h.jsx)("h2",{children:"Price"}),(0,h.jsx)("h2",{children:"Image"}),(0,h.jsx)("h2",{children:"Category"}),(0,h.jsx)("h2",{children:"Edit"})]}),k.length>0?k.map((function(e){return(0,h.jsx)(E,{item:e},e._id)})):(0,h.jsx)("div",{className:f,children:(0,h.jsx)("h2",{children:"No product found "})})]})},k=function(){return(0,h.jsx)(O,{})}}}]);
//# sourceMappingURL=39.9fec8ef7.chunk.js.map