(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{32:function(t,e,c){},34:function(t,e,c){"use strict";c.r(e);var a=c(22),s=c.n(a),n=c(7),b=(c(30),c(31),c(2)),i=(c(32),c(15)),j=c.n(i),r=c(3),l=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},d=function(t){var e=t.tab,c=Object(b.q)().tabId;return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":c===e.id}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})})},o=function(t){var e=t.tabs,c=Object(b.q)().tabId,a=e.find((function(t){return t.id===c}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)(d,{tab:t})}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})},x=function(t){var e=t.tabs;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(o,{tabs:e})]})},h=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},O=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],m=function(t){var e=t.isActive;return j()("navbar-item",{"is-active":e})},u=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:m,children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:m,children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{path:"/",element:Object(r.jsx)(l,{})}),Object(r.jsx)(b.b,{path:"/home",element:Object(r.jsx)(b.a,{to:"/",replace:!0})}),Object(r.jsxs)(b.b,{path:"tabs",children:[Object(r.jsx)(b.b,{index:!0,element:Object(r.jsx)(x,{tabs:O})}),Object(r.jsx)(b.b,{path:":tabId",element:Object(r.jsx)(x,{tabs:O})})]}),Object(r.jsx)(b.b,{path:"*",element:Object(r.jsx)(h,{})})]})})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b4eb3f0e.chunk.js.map