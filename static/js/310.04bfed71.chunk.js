"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{310:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,o,i,c,a,u,s,l,f=e(439),h=e(87),d=e(689),p=e(791),g=e(751),m=e(168),x=e(444),w=x.ZP.div(r||(r=(0,m.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),v=x.ZP.ul(o||(o=(0,m.Z)(["\nlist-style: none;\npadding: 0;\nmargin: 0;\n"]))),b=(0,x.ZP)(h.OL)(i||(i=(0,m.Z)(["\n  display: flex;\n  padding: 8px 0px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: violet;\n  }\n"]))),y=x.ZP.li(c||(c=(0,m.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n"]))),_=x.ZP.img(a||(a=(0,m.Z)(["\n  margin-right: 20px;\n"]))),k=x.ZP.p(u||(u=(0,m.Z)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  color: inherit;\n  &:hover {\n    color: violet;\n  }\n"]))),Z=x.ZP.input(s||(s=(0,m.Z)(["\n  height: 40px;\n  margin-right: 20px;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n"]))),j=x.ZP.button(l||(l=(0,m.Z)(["\n  background-color: violet;\n  border-radius: 10px;\n  height: 40px;\n  border: none;\n  font-weight: 500;\n  color: white;\n"]))),P=e(184),S=function(){var n=(0,h.lr)(),t=(0,f.Z)(n,2),e=t[0],r=t[1],o=e.get("query"),i=(0,p.useState)([]),c=(0,f.Z)(i,2),a=c[0],u=c[1],s=(0,d.TH)();if((0,p.useEffect)((function(){o&&(0,g.Q_)(o).then((function(n){return u(n.results)}))}),[o]),a)return(0,P.jsxs)(w,{children:[(0,P.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==n.target.elements.query.value&&r({query:n.target.elements.query.value})},children:[(0,P.jsx)(Z,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",name:"query"}),(0,P.jsx)(j,{type:"submit",children:(0,P.jsx)("span",{children:"Search"})})]}),0!==a.length&&(0,P.jsx)(v,{children:a.map((function(n){return(0,P.jsx)(y,{children:(0,P.jsxs)(b,{to:"/movies/".concat(n.id),state:{from:s},style:{display:"flex"},children:[(0,P.jsx)(_,{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(n.poster_path),alt:n.original_title,width:"50"}),(0,P.jsx)(k,{children:n.original_title})]})},n.id)}))})]})}},751:function(n,t,e){e.d(t,{Cp:function(){return i},Lo:function(){return c},Q_:function(){return s},cI:function(){return a},fy:function(){return u}});var r="https://api.themoviedb.org/3",o="9739146968645f4ae720d1253291b334",i=function(){return fetch("".concat(r,"/trending/movie/day?api_key=").concat(o,"&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},c=function(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},a=function(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},u=function(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},s=function(n){return fetch("".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}}}]);
//# sourceMappingURL=310.04bfed71.chunk.js.map