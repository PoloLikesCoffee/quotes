(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{17:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),s=n.n(r),i=n(6),u=n.n(i),o=n(8),j=n(7),d=(n(17),n(1)),l=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"header__main",children:"\u4eca\u65e5\u306e\u5f15\u7528"}),Object(d.jsx)("div",{className:"header__sub",children:"get inspiration from the quote of the day"})]})},h=function(e){var t=e.title,n=e.handleClick;return Object(d.jsx)("button",{className:"card__button",id:t,onClick:n,children:t})},b=n(9),O=n.n(b),v=function(e){var t=e.quote,n=e.author,c=e.getNewQuote;return Object(d.jsxs)("div",{className:"card",children:[t&&n&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"card__quote",children:[Object(d.jsx)("div",{className:"quotes-symbol",children:Object(d.jsx)(O.a,{})}),Object(d.jsx)("div",{className:"quote-text",children:t})]}),Object(d.jsxs)("div",{className:"card__author",children:["By ",n,"."]})]}),Object(d.jsx)("div",{className:"button-container",children:Object(d.jsx)(h,{title:"New quote",handleClick:function(e){c()}})})]})};var x=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(j.a)(r,2),i=s[0],h=s[1],b=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.quotable.io/random");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b().then((function(e){var t=e.content,n=e.author;a(t),h(n)}))}),[]),Object(d.jsxs)("div",{className:"quotes-app",children:[Object(d.jsx)(l,{}),Object(d.jsx)(v,{quote:n,author:i,getNewQuote:function(){b().then((function(e){var t=e.content,n=e.author;a(t),h(n)}))}})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.aba5cbec.chunk.js.map