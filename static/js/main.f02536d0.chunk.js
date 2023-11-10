(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(8),r=c(3),s=c(4),l=c(10),i=c.n(l),o=c(1),j=function(){var e=Object(a.d)(),t=Object(s.a)(e,1)[0],c=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})};return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{to:"/",className:c,children:"Home"}),Object(o.jsx)(a.c,{to:{pathname:"/people",search:t.toString()},className:c,children:"People"})]})})})},d=(c(37),function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(r.b,{})})})]})}),u=c(0),b=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},h=c(9),O=c(5),p=c(7),m="https://mate-academy.github.io/react_people-table/api/people.json";function x(e){return new Promise((function(t){return setTimeout(t,e)}))}function f(){return(f=Object(p.a)(Object(O.a)().mark((function e(){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x(500).then((function(){return fetch(m)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=c(15);function g(e,t){var c=new URLSearchParams(t.toString());return Object.entries(e).forEach((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}c(38);var N=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},y=[{title:"All",value:null},{title:"Male",value:"m"},{title:"Female",value:"f"}],w=["16","17","18","19","20"],S=c(27),k=["children","params"],L=function(e){var t=e.children,c=e.params,n=Object(S.a)(e,k),r=Object(a.d)(),l=Object(s.a)(r,1)[0];return Object(o.jsx)(a.b,Object(v.a)(Object(v.a)({to:{search:g(c,l)}},n),{},{children:t}))},B=function(e){var t=e.setSearchWith,c=Object(a.d)(),n=Object(s.a)(c,1)[0],r=n.get("query")||"",l=n.get("sex")||null,j=n.getAll("centuries")||[];return Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:y.map((function(e){return Object(o.jsx)(L,{params:{sex:e.value},className:i()({"is-active":l===e.value}),children:e.title},e.title)}))}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left",children:[Object(o.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:r,onChange:function(e){t({query:e.target.value||null})}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(o.jsx)("div",{className:"level-left",children:w.map((function(e){return Object(o.jsx)(L,{"data-cy":"century",className:i()("button mr-1",{"is-info":j.includes(e)}),params:{centuries:j.includes(e)?j.filter((function(t){return t!==e})):[].concat(Object(h.a)(j),[e])},children:e},e)}))}),Object(o.jsx)("div",{className:"level-right ml-4",children:Object(o.jsx)(L,{"data-cy":"centuryALL",className:"button is-success is-outlined",params:{centuries:null},children:"All"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)(a.b,{className:"button is-link is-outlined is-fullwidth",to:{search:g({centuries:null,sex:null,query:null},n)},children:"Reset all filters"})})]})},P=function(e){var t=e.person,c=Object(a.d)(),n=Object(s.a)(c,1)[0];return Object(o.jsx)(a.b,{to:{pathname:"/people/".concat(t.slug),search:n.toString()},className:"f"===t.sex?"has-text-danger":"",children:t.name})},A=function(e){var t=e.person,c=e.personId;return Object(o.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":t.slug===c}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(P,{person:t})}),Object(o.jsx)("td",{children:t.sex}),Object(o.jsx)("td",{children:t.born}),Object(o.jsx)("td",{children:t.died}),Object(o.jsx)("td",{children:t.mother?Object(o.jsx)(P,{person:t.mother}):t.motherName||"-"}),Object(o.jsx)("td",{children:t.father?Object(o.jsx)(P,{person:t.father}):t.fatherName||"-"})]})},C=[{id:"1",sortBy:"name",title:"Name"},{id:"2",sortBy:"sex",title:"Sex"},{id:"3",sortBy:"born",title:"Born"},{id:"4",sortBy:"died",title:"Died"}],F=function(e){var t=e.people,c=Object(r.r)().personId,n=Object(a.d)(),l=Object(s.a)(n,1)[0],j=l.get("sort")||null,d=l.get("order")||null;return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[C.map((function(e){return Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e.title,Object(o.jsx)(L,{params:(t=e.sortBy,j&&j===t?j!==t||d?{sort:null,order:null}:{sort:t,order:"desc"}:{sort:t}),children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:i()("fas fa-sort",{"fa-sort-up":j===e.sortBy&&!d,"fa-sort-down":j===e.sortBy&&d})})})})]})},e.id);var t})),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsx)(A,{person:e,personId:c},e.slug)}))})]})},E=function(){var e=Object(a.d)(),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(u.useState)([]),l=Object(s.a)(r,2),i=l[0],j=l[1],d=Object(u.useState)(i),b=Object(s.a)(d,2),O=b[0],p=b[1],m=Object(u.useState)(!1),x=Object(s.a)(m,2),y=x[0],w=x[1],S=Object(u.useState)(!1),k=Object(s.a)(S,2),L=k[0],P=k[1],A=c.get("query")||"",C=c.get("sex")||"all",E=c.getAll("centuries")||[],I=c.get("sort")||null,M=c.get("order")||null,_=!y&&i.length>0,q=!y&&0===i.length,T=!y&&0===O.length;Object(u.useEffect)((function(){P(!1),w(!0),function(){return f.apply(this,arguments)}().then((function(e){var t=function(e){var t=function(t){return e.find((function(e){return e.name===t.motherName}))||null},c=function(t){return e.find((function(e){return e.name===t.fatherName}))||null};return e.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{mother:t(e),father:c(e)})}))}(e);j(t)})).catch((function(){return P(!0)})).finally((function(){return w(!1)}))}),[]);return Object(u.useEffect)((function(){var e=function(e){var t=Object(h.a)(e);if(A){var c=A.toLowerCase();t=t.filter((function(e){var t,n;return e.name.toLowerCase().includes(c)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(c))||(null===(n=e.fatherName)||void 0===n?void 0:n.toLowerCase().includes(c))}))}if("all"!==C&&(t=t.filter((function(e){return e.sex===C}))),E.length&&(t=t.filter((function(e){return E.includes(Math.ceil(e.born/100).toString())}))),I)switch(I){case"name":case"sex":t=t.sort((function(e,t){return e[I].localeCompare(t[I])}));break;case"born":case"died":t=t.sort((function(e,t){return e[I]-t[I]}))}return"desc"===M&&(t=Object(h.a)(t).reverse()),t}(i);p(e)}),[c,i]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(o.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:_&&Object(o.jsx)(B,{setSearchWith:function(e){var t=g(e,c);n(t)}})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsxs)("div",{className:"box table-container",children:[y&&Object(o.jsx)(N,{}),L&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),_&&O.length>0&&Object(o.jsx)(F,{people:O}),q&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),T&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people matching the current search criteria"})]})})]})})]})},I=function(){return Object(o.jsx)("h1",{className:"title",children:"Page not found"})},M=function(){return Object(o.jsx)(a.a,{children:Object(o.jsx)(r.e,{children:Object(o.jsxs)(r.c,{path:"/",element:Object(o.jsx)(d,{}),children:[Object(o.jsx)(r.c,{index:!0,element:Object(o.jsx)(b,{})}),Object(o.jsx)(r.c,{path:"/home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsx)(r.c,{path:"/people",element:Object(o.jsx)(E,{}),children:Object(o.jsx)(r.c,{path:":personId",element:Object(o.jsx)(E,{})})}),Object(o.jsx)(r.c,{path:"*",element:Object(o.jsx)(I,{})})]})})})};c(39),c(40);Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(M,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.f02536d0.chunk.js.map