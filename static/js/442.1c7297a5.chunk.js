"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[442],{862:function(r,t,e){e.d(t,{Hg:function(){return i},IQ:function(){return f},Jh:function(){return m},Pg:function(){return p},Pt:function(){return o}});var n=e(861),a=e(757),c=e.n(a),u=e(44),s="2996ac4c632c41fce1458614a9485a98";u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var r=(0,n.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.ZP.get("/trending/movie/day",{params:{api_key:s}});case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.ZP.get("/search/movie",{params:{api_key:s,query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.ZP.get("/movie/".concat(t),{params:{api_key:s,query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.ZP.get("/movie/".concat(t,"/credits"),{params:{api_key:s,query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),m=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.ZP.get("/movie/".concat(t,"/reviews"),{params:{api_key:s,query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},94:function(r,t,e){e.d(t,{F:function(){return n}});var n=function(r){return"https://image.tmdb.org/t/p/w500".concat(r)}},442:function(r,t,e){e.r(t),e.d(t,{default:function(){return h}});var n=e(861),a=e(885),c=e(757),u=e.n(c),s=e(862),i=e(94),o=e(791),p=e(739),f={items:"Cast_items__On14N",foto:"Cast_foto__kNl4G",name:"Cast_name__y8nr9",character:"Cast_character__esJL+"},m=e(184);function h(){var r=(0,o.useState)(null),t=(0,a.Z)(r,2),e=t[0],c=t[1],h=(0,p.UO)().movieId;return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.IQ)(h);case 2:t=r.sent,c(t.cast);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:"Cast"}),e&&(0,m.jsx)("ul",{className:f.items,children:null===e||void 0===e?void 0:e.map((function(r){return(0,m.jsxs)("li",{className:f.item,children:[(0,m.jsx)("img",{className:f.foto,src:(0,i.F)(r.profile_path),alt:"actor"}),(0,m.jsxs)("p",{className:f.name,children:["Name: ",r.original_name]}),(0,m.jsxs)("p",{className:f.character,children:["Character: ",r.character]})]},r.id)}))})]})}}}]);
//# sourceMappingURL=442.1c7297a5.chunk.js.map