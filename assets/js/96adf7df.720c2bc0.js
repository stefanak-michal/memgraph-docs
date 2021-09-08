"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54817],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),l=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(m,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62211:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},m=void 0,l={unversionedId:"import-data/overview",id:"version-1.6.1/import-data/overview",isDocsHomePage:!1,title:"Import data",description:"There are three main methods for importing data into Memgraph:",source:"@site/memgraph_versioned_docs/version-1.6.1/import-data/overview.md",sourceDirName:"import-data",slug:"/import-data",permalink:"/memgraph/import-data",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/import-data/overview.md",tags:[],version:"1.6.1",frontMatter:{id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},sidebar:"version-1.6.1/memgraph",previous:{title:"PHP",permalink:"/memgraph/connect-to-memgraph/methods/building-applications/php"},next:{title:"CSV Import Tool",permalink:"/memgraph/import-data/csv-import-tool"}},c=[],s={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are three main methods for importing data into Memgraph:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/import-data/csv-import-tool"},"CSV Import Tool")),": Memgraph includes the CSV Import Tool which allows you to import nodes and relationships from multiple CSV files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/import-data/load-csv-clause"},"LOAD CSV Clause")),": You can also use the Cypher clause ",(0,a.kt)("inlineCode",{parentName:"li"},"LOAD CSV")," to load data from CSV files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/import-data/cypherl"},"Importing Cypher queries")),": If your data is saved in the form of Cypher queries (we call this ",(0,a.kt)("inlineCode",{parentName:"li"},".cypherl")," format) then this is the right approach for you.")))}u.isMDXComponent=!0}}]);