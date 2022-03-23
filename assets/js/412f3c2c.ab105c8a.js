"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99926],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},36774:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"overview",title:"Import data",sidebar_label:"Import data overview"},c=void 0,l={unversionedId:"reference-guide/import-data/overview",id:"reference-guide/import-data/overview",title:"Import data",description:"There are three main methods for importing data into Memgraph:",source:"@site/docs/reference-guide/import-data/overview.md",sourceDirName:"reference-guide/import-data",slug:"/reference-guide/import-data/overview",permalink:"/docs/memgraph/next/reference-guide/import-data/overview",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/import-data/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Import data",sidebar_label:"Import data overview"},sidebar:"memgraph",previous:{title:"Data types",permalink:"/docs/memgraph/next/reference-guide/data-types"},next:{title:"LOAD CSV Cypher clause",permalink:"/docs/memgraph/next/reference-guide/import-data/load-csv-clause"}},u={},m=[],s={toc:m};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are three main methods for importing data into Memgraph:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/reference-guide/import-data/csv-import-tool"},"CSV Import Tool")),":\nMemgraph includes the CSV import tool which allows you to import nodes and\nrelationships from multiple CSV files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/reference-guide/import-data/load-csv-clause"},"LOAD CSV Clause")),": You\ncan also use the Cypher clause ",(0,a.kt)("inlineCode",{parentName:"li"},"LOAD CSV")," to load data from CSV files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/reference-guide/import-data/cypherl"},"Importing Cypher queries")),": If\nyour data is saved in the form of Cypher queries (we call this ",(0,a.kt)("inlineCode",{parentName:"li"},".cypherl"),"\nformat) then this is the right approach for you.")))}d.isMDXComponent=!0}}]);