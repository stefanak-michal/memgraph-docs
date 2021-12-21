"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9734],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),m=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=m(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=m(t),d=o,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var m=2;m<a;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},65376:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return l},default:function(){return s}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"overview",title:"Import data",sidebar_label:"Import data overview"},c=void 0,m={unversionedId:"reference-guide/import-data/overview",id:"version-2.0.1/reference-guide/import-data/overview",title:"Import data",description:"There are three main methods for importing data into Memgraph:",source:"@site/memgraph_versioned_docs/version-2.0.1/reference-guide/import-data/overview.md",sourceDirName:"reference-guide/import-data",slug:"/reference-guide/import-data/overview",permalink:"/docs/memgraph/2.0.1/reference-guide/import-data/overview",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.1/reference-guide/import-data/overview.md",tags:[],version:"2.0.1",frontMatter:{id:"overview",title:"Import data",sidebar_label:"Import data overview"},sidebar:"version-2.0.1/memgraph",previous:{title:"Graph algorithms",permalink:"/docs/memgraph/2.0.1/reference-guide/graph-algorithms"},next:{title:"CSV Import Tool",permalink:"/docs/memgraph/2.0.1/reference-guide/import-data/csv-import-tool"}},l=[],u={toc:l};function s(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are three main methods for importing data into Memgraph:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/reference-guide/import-data/csv-import-tool"},"CSV Import Tool")),":\nMemgraph includes the CSV Import Tool which allows you to import nodes and\nrelationships from multiple CSV files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.1/reference-guide/import-data/load-csv-clause"},"LOAD CSV Clause")),": You\ncan also use the Cypher clause ",(0,a.kt)("inlineCode",{parentName:"li"},"LOAD CSV")," to load data from CSV files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.1/reference-guide/import-data/cypherl"},"Importing Cypher queries")),": If\nyour data is saved in the form of Cypher queries (we call this ",(0,a.kt)("inlineCode",{parentName:"li"},".cypherl"),"\nformat) then this is the right approach for you.")))}s.isMDXComponent=!0}}]);