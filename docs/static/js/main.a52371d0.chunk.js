(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n(8),i=n.n(a),s=n(2),u=n(10),o=function(t){var e=t.setCategorias,n=Object(r.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(console.log("Submit realizado"),e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(t){console.log(t.target.value),o(t.target.value)}})})},j=n(7),l=n(6),d=n.n(l),p=n(9),b=function(){var t=Object(p.a)(d.a.mark((function t(e){var n,c,r,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=5&api_key=vqK0l4lu4cQPEkS2txke4LjprVoiCopL"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.id,n=t.title,r=t.url;return console.log({id:e,title:n,url:r}),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("img",{src:r,alt:n}),Object(c.jsx)("p",{children:n})]})},O=function(t){var e=t.categoria,n=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){b(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),c}(e),a=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h3",{children:[" ",e," "]}),i&&Object(c.jsx)("p",{children:"Loading"}),Object(c.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(r.createElement)(f,Object(j.a)(Object(j.a)({},t),{},{key:t.id}))}))})]})},g=function(){var t=Object(r.useState)(["Castlevania"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h2",{children:[" ","GifExpertApp"," "]}),Object(c.jsx)(o,{setCategorias:a}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(t){return Object(c.jsx)(O,{categoria:t},t)}))})]})};n(17);i.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a52371d0.chunk.js.map