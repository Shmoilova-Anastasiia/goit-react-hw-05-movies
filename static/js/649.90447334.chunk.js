"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[649],{3551:function(n,e,t){t.d(e,{Hx:function(){return l},Y5:function(){return u},bI:function(){return s},uV:function(){return p},wr:function(){return c}});var r=t(5861),a=t(4687),o=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8",include_adult:!1};var c=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,a.length>1?a[1]:void 0,n.prev=2,n.next=5,i.Z.get("/trending/movie/day",{params:{page:e,language:" en - US"}});case 5:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(2),alert("Oops, there is no movies");case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t,r,a,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:1,n.prev=2,n.next=5,i.Z.get("/search/movie",{params:{language:"en-US",page:t,query:e}});case 5:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 10:n.prev=10,n.t0=n.catch(2),alert("Oops, there is no movie");case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e),{params:{language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),alert("Oops, there is no movie with that name");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/credits"),{params:{language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 8:n.prev=8,n.t0=n.catch(0),alert("Oops, there is no cast movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,i.Z.get("/movie/".concat(e,"/reviews\n"),{params:{language:"en-US"}});case 4:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 9:n.prev=9,n.t0=n.catch(1),alert("Oops, we don`t have any reviews");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},9554:function(n,e,t){t.d(e,{H:function(){return f}});var r,a,o,i=t(1087),c=t(168),s=t(5706),u=s.Z.li(r||(r=(0,c.Z)(["\n  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    scale: 1.1;\n  }\n"]))),p=s.Z.h2(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  color: #fff;\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n  text-transform: uppercase;\n  padding-top: 8px;\n  max-width: 240px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: rgb(255, 89, 0);\n    font-weight: 600;\n  }\n"]))),l=s.Z.img(o||(o=(0,c.Z)(["\n  width: 240px;\n  border-radius: 10px;\n  border: 3px solid rgba(0, 255, 0, 0.5);\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    animation: glow 800ms ease-out infinite alternate;\n    background: #222922;\n    background: linear-gradient(#333933, #222922);\n    border-color: #393;\n    box-shadow: 0 0 5px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 255, 0, 0.1);\n    color: #efe;\n    outline: none;\n  }\n"]))),d=t(184),f=function(n){var e=n.url,t=n.title,r=n.activeId,a=n.location;return(0,d.jsx)(u,{children:(0,d.jsxs)(i.rU,{to:"/movies/".concat(r),state:{from:a},children:[(0,d.jsx)(l,{src:null!==e?"https://image.tmdb.org/t/p/w300".concat(e):(0,d.jsx)("p",{children:"NotFound"}),alt:t}),(0,d.jsx)(p,{children:t})]})})}},9637:function(n,e,t){t.d(e,{V:function(){return s},W:function(){return c}});var r,a,o=t(168),i=t(5706),c=i.Z.div(r||(r=(0,o.Z)(["\n  background-color: grey;\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 30px;\n"]))),s=i.Z.h1(a||(a=(0,o.Z)(["\n  text-align: center;\n  padding: 30px 0;\n  color: #fff;\n  font-size: 35px;\n  font-weight: 900;\n  text-transform: uppercase;\n"])))},1649:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,o,i,c,s=t(5861),u=t(9439),p=t(4687),l=t.n(p),d=t(2791),f=t(1087),g=t(3551),h=t(168),x=t(5706),v=x.Z.form(r||(r=(0,h.Z)(["\n  padding: 50px 15px 0 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 25px;\n"]))),m=x.Z.button(a||(a=(0,h.Z)(["\n  background: #222;\n  background: linear-gradient(#333, #222);\n  box-sizing: border-box;\n  border: 1px solid #393;\n  border-radius: 10px;\n  color: #fff;\n  display: block;\n  float: left;\n  font-size: 18px;\n  font-weight: 600;\n  height: 40px;\n  line-height: 40px;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  width: 100px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background: #292929;\n    background: linear-gradient(#393939, #292929);\n    color: rgb(255, 89, 0);\n    outline: none;\n  }\n"]))),b=x.Z.input(o||(o=(0,h.Z)(["\n  margin-top: 8px;\n  margin-bottom: 30px;\n  height: 40px;\n  width: 500px;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  border: 2px solid #444;\n  font-size: 23px;\n  color: rgb(220, 231, 255);\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: auto;\n\n  &:focus {\n    animation: glow 800ms ease-out infinite alternate;\n    background: #222922;\n    background: linear-gradient(#333933, #222922);\n    border-color: #393;\n    box-shadow: 0 0 5px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 255, 0, 0.1);\n    color: #efe;\n    outline: none;\n  }\n\n  &::placeholder {\n    color: #a09b9b;\n    font-size: 23px;\n  }\n"]))),w=x.Z.label(i||(i=(0,h.Z)(["\n  color: rgb(220, 231, 255);\n  font-size: 29px;\n  font-weight: 700;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 15px;\n"]))),Z=t(184),k=function(n){var e=n.onSubmit,t=(0,d.useState)(""),r=(0,u.Z)(t,2),a=r[0],o=r[1];return(0,Z.jsxs)(v,{onSubmit:function(n){n.preventDefault(),e(a),o("")},children:[(0,Z.jsx)(w,{htmlFor:"search",children:"Find movie by name"}),(0,Z.jsx)(b,{type:"text",name:"search",value:a,onChange:function(n){o(n.target.value)},placeholder:"Search movie...",autoComplete:"off"}),(0,Z.jsx)(m,{type:"submit",children:"Search"})]})},y=t(7689),j=t(9554),S=x.Z.ul(c||(c=(0,h.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  padding-bottom: 30px;\n"]))),_="success",z=function(n){var e=n.value,t=n.status,r=n.movies,a=(0,y.TH)();return(0,Z.jsxs)(Z.Fragment,{children:[t===_&&r.length>0&&(0,Z.jsx)(S,{children:null===r||void 0===r?void 0:r.map((function(n){return(0,Z.jsx)(j.H,{location:a,title:n.original_title,url:n.poster_path,activeId:n.id},n.id)}))}),t===_&&0===r.length&&(0,Z.jsxs)("p",{children:["text=",'Sorry, but nothing was found for "'.concat(e,'"! try again!')]})]})},U=t(9637),O="init",C="success",F="error",H=function(){var n,e,t=(0,f.lr)(),r=(0,u.Z)(t,2),a=r[0],o=r[1],i=(0,d.useState)([]),c=(0,u.Z)(i,2),p=c[0],h=c[1],x=(0,d.useState)(O),v=(0,u.Z)(x,2),m=v[0],b=v[1],w=null!==(n=a.get("page"))&&void 0!==n?n:1,y=null!==(e=a.get("search"))&&void 0!==e?e:"";(0,d.useEffect)((function(){var n=function(){var n=(0,s.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.bI)(y,w);case 3:e=n.sent,h(e),b(C),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),b(F),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();y?n():h([])}),[y,w]);return(0,Z.jsxs)(U.W,{children:[(0,Z.jsx)(k,{onSubmit:function(n){o({search:n,page:1})}}),(0,Z.jsx)(z,{value:y,movies:p,status:m})]})}}}]);
//# sourceMappingURL=649.90447334.chunk.js.map