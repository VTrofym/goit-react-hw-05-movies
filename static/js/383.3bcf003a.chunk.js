"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[383],{862:function(e,t,n){n.d(t,{Hg:function(){return u},IQ:function(){return l},Jh:function(){return v},Pg:function(){return p},Pt:function(){return o}});var r=n(861),a=n(757),s=n.n(a),c=n(44),i="2996ac4c632c41fce1458614a9485a98";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/trending/movie/day",{params:{api_key:i}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/search/movie",{params:{api_key:i,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t),{params:{api_key:i,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/credits"),{params:{api_key:i,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/reviews"),{params:{api_key:i,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},94:function(e,t,n){n.d(t,{F:function(){return r}});var r=function(e){return"https://image.tmdb.org/t/p/w500".concat(e)}},383:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(885),s=n(757),c=n.n(s),i=n(791),u=n(862),o=n(731),p=n(739),l=n(94),v={sectionHome:"MovieDetails_sectionHome__slrc6",containerHome:"MovieDetails_containerHome__AF-1L",foto:"MovieDetails_foto__eJRoq",title:"MovieDetails_title__cUGs9",overview:"MovieDetails_overview__U5Vnb",genres:"MovieDetails_genres__Pnmgt",castRewiew:"MovieDetails_castRewiew__aC1EC"},f="Button_button__wiIYs",m=n(184),d=function(){var e=(0,p.s0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("button",{className:f,onClick:function(){return e(-1)},type:"button",children:"Go back"})})};function h(){var e,t=(0,i.useState)({}),n=(0,a.Z)(t,2),s=n[0],f=n[1],h=(0,p.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Pg)(h);case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("section",{className:v.sectionHome,children:(0,m.jsxs)("div",{className:v.containerHome,children:[(0,m.jsx)(d,{}),(0,m.jsx)("img",{className:v.foto,src:(0,l.F)(s.poster_path),alt:""}),(0,m.jsx)("h2",{className:v.title,children:s.original_title}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{className:v.overview,children:s.overview}),(0,m.jsx)("h4",{className:v.genres,children:"Genres"}),(0,m.jsx)("p",{className:v.gengerItems,children:null===s||void 0===s||null===(e=s.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(" ")}),(0,m.jsxs)("div",{className:v.castRewiew,children:[(0,m.jsx)(o.rU,{className:v.cast,to:"cast",children:"Cast"}),(0,m.jsx)(o.rU,{className:v.reviews,to:"reviews",children:"Reviews"})]}),(0,m.jsx)(i.Suspense,{fallback:(0,m.jsx)("p",{children:"Loading..."}),children:(0,m.jsx)(p.j3,{})})]})})})}}}]);
//# sourceMappingURL=383.3bcf003a.chunk.js.map