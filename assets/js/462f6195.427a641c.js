"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37072],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=o(t),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var o=2;o<l;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82659:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var r=t(87462),i=t(63366),l=(t(67294),t(3905)),s=["components"],a={id:"unwind",title:"UNWIND clause",sidebar_label:"UNWIND"},u=void 0,o={unversionedId:"clauses/unwind",id:"clauses/unwind",isDocsHomePage:!1,title:"UNWIND clause",description:"The UNWIND clause is used to unwind a list of values as individual rows.",source:"@site/cypher-manual/clauses/unwind.md",sourceDirName:"clauses",slug:"/clauses/unwind",permalink:"/cypher-manual/clauses/unwind",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/unwind.md",tags:[],version:"current",frontMatter:{id:"unwind",title:"UNWIND clause",sidebar_label:"UNWIND"},sidebar:"cypher_manual",previous:{title:"UNION",permalink:"/cypher-manual/clauses/union"},next:{title:"WHERE",permalink:"/cypher-manual/clauses/where"}},c=[{value:"1. Unwinding lists",id:"1-unwinding-lists",children:[]},{value:"2. Distinct list",id:"2-distinct-list",children:[]},{value:"3. Expression returning lists",id:"3-expression-returning-lists",children:[]},{value:"4. Unwinding lists of lists",id:"4-unwinding-lists-of-lists",children:[]}],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"UNWIND")," clause is used to unwind a list of values as individual rows."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-unwinding-lists"},"Unwinding lists")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-distinct-list"},"Distinct list")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-expression-returning-lists"},"Expression returning lists")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#4-unwinding-lists-of-lists"},"Unwinding lists of lists"))),(0,l.kt)("h2",{id:"1-unwinding-lists"},"1. Unwinding lists"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"UNWIND")," to transform a literal list into rows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"UNWIND [1,2,3] AS listElement \nRETURN listElement;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+-------------+\n| listElement |\n+-------------+\n| 1           |\n| 2           |\n| 3           |\n+-------------+\n")),(0,l.kt)("h2",{id:"2-distinct-list"},"2. Distinct list"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"UNWIND")," clause can be used to remove duplicates from a list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"WITH [1,1,1,2,2,3] AS list \nUNWIND list AS listElement\nWITH DISTINCT listElement\nRETURN collect(listElement) AS distinctElements;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+------------------+\n| distinctElements |\n+------------------+\n| [1, 2, 3]        |\n+------------------+\n")),(0,l.kt)("h2",{id:"3-expression-returning-lists"},"3. Expression returning lists"),(0,l.kt)("p",null,"An expression that returns a list can be used with the ",(0,l.kt)("inlineCode",{parentName:"p"},"UNWIND")," clause."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"WITH [1,2,3] AS listOne, [4,5,6] AS listTwo \nUNWIND (listOne + listTwo) AS list\nRETURN list;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+------+\n| list |\n+------+\n| 1    |\n| 2    |\n| 3    |\n| 4    |\n| 5    |\n| 6    |\n+------+\n")),(0,l.kt)("h2",{id:"4-unwinding-lists-of-lists"},"4. Unwinding lists of lists"),(0,l.kt)("p",null,"Multiple  ",(0,l.kt)("inlineCode",{parentName:"p"},"UNWIND")," clauses can be combined to unwind nested lists."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"WITH [[1,2,3],[4,5,6],[7,8,9]] AS listOne\nUNWIND listOne AS listOneElement\nUNWIND listOneElement AS element\nRETURN element;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+---------+\n| element |\n+---------+\n| 1       |\n| 2       |\n| 3       |\n| 4       |\n| 5       |\n| 6       |\n| 7       |\n| 8       |\n| 9       |\n+---------+\n")))}d.isMDXComponent=!0}}]);