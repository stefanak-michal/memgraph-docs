"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77942],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20205:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"overview",title:"Getting started with Cypher",sidebar_label:"Getting started",slug:"/"},s=void 0,d={unversionedId:"overview",id:"overview",title:"Getting started with Cypher",description:"Cypher is the most widely adopted, fully-specified, and open query language",source:"@site/cypher-manual/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/cypher-manual/",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Getting started with Cypher",sidebar_label:"Getting started",slug:"/"},sidebar:"cypher_manual",next:{title:"What are graph databases?",permalink:"/docs/cypher-manual/what-are-graph-databases"}},p=[{value:"Quick start",id:"quick-start",children:[],level:2},{value:"What are graph databases?",id:"what-are-graph-databases",children:[],level:2},{value:"Cypher query language",id:"cypher-query-language",children:[],level:2},{value:"Working with Memgraph",id:"working-with-memgraph",children:[],level:2},{value:"Import data",id:"import-data",children:[],level:2},{value:"Connecting nodes",id:"connecting-nodes",children:[],level:2},{value:"Reading existing data",id:"reading-existing-data",children:[],level:2},{value:"Updating nodes and relationships",id:"updating-nodes-and-relationships",children:[],level:2},{value:"Deleting nodes and relationships",id:"deleting-nodes-and-relationships",children:[],level:2},{value:"Clauses",id:"clauses",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2}],h={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cypher")," is the most widely adopted, fully-specified, and open query language\nfor property graph databases. It provides an intuitive way to work with property\ngraphs."),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"If you are new to the ",(0,o.kt)("strong",{parentName:"p"},"Cypher")," query language, take a look at what you can do\nwith a few simple commands. You will use our sandbox that we have already filled\nwith sample data. There is no need for you to install anything at this point.\nSimply open Game of Thrones Deaths dataset on ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/game-of-thrones-deaths"},(0,o.kt)("strong",{parentName:"a"},"Memgraph\nplayground")),".\nYou will find some predefine queries there that will help you to get a glimpse\nof what you can accomplish with Cypher. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Playground supports only read operations. If you'd like to modify the dataset,\nyou will need to ",(0,o.kt)("a",{parentName:"p",href:"../memgraph/installation"},"install and run Memgraph")," on your\ncomputer."))),(0,o.kt)("h2",{id:"what-are-graph-databases"},"What are graph databases?"),(0,o.kt)("p",null,"Is this your first encounter with graph databases? If so, get familiar with\n",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/what-are-graph-databases"},"graph database terminology")," before you dip dive into them."),(0,o.kt)("h2",{id:"cypher-query-language"},"Cypher query language"),(0,o.kt)("p",null,"Now that you know what graph databases are let's see how you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/cypher-query-language"},"Cypher\nquery language")," to get the job done."),(0,o.kt)("h2",{id:"working-with-memgraph"},"Working with Memgraph"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/working-with-memgraph"},"Memgraph")," has everything you need to start working\nwith your data and streams."),(0,o.kt)("h2",{id:"import-data"},"Import data"),(0,o.kt)("p",null,"You can easily ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/import-data"},"Import data")," or add new data to Memgraph."),(0,o.kt)("h2",{id:"connecting-nodes"},"Connecting nodes"),(0,o.kt)("p",null,"Memgraph is all about connections. Learn how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/connecting-nodes"},"connect\nnodes")," with relationships. "),(0,o.kt)("h2",{id:"reading-existing-data"},"Reading existing data"),(0,o.kt)("p",null,"When you have nodes and relationships, you will surely want to ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/reading-existing-data"},"read the\nexisting data")," and learn how you traverse\nrelationships."),(0,o.kt)("h2",{id:"updating-nodes-and-relationships"},"Updating nodes and relationships"),(0,o.kt)("p",null,"Things change over time. The same is true for your data. Learn how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/updating-nodes-and-relationships"},"update\nnodes and relationships")," with already\nexisting data. You can even create some new data along the way."),(0,o.kt)("h2",{id:"deleting-nodes-and-relationships"},"Deleting nodes and relationships"),(0,o.kt)("p",null,"Sometimes you will no longer need parts of the data. You can easily ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/deleting-nodes-and-relationships"},"deled nodes\nand relationships"),". You can even delete all\nof your data, but be careful with this if you don't have a backup!"),(0,o.kt)("h2",{id:"clauses"},"Clauses"),(0,o.kt)("p",null,"Maybe ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses"},"clauses")," are the reason why you are here. We have\ncreated a list of all Cypher clauses that Memgraph supports."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,"Sometimes clauses are now enough to get the data you are looking for. Don't\nworry, Memgraph has a lot o built-in ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/functions"},"functions")," that will help\nyou to get the right data."))}u.isMDXComponent=!0}}]);