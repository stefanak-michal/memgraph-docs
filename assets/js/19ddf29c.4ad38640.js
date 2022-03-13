"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[483],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},81317:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"getting-started",title:"Getting started with GQLAlchemy",sidebar_label:"Getting started",slug:"/"},c=void 0,s={unversionedId:"getting-started",id:"getting-started",title:"Getting started with GQLAlchemy",description:"GQLAlchemy",source:"@site/gqlalchemy/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/gqlalchemy/",editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting started with GQLAlchemy",sidebar_label:"Getting started",slug:"/"},sidebar:"gqlalchemy",next:{title:"Installation",permalink:"/docs/gqlalchemy/installation"}},u={},h=[{value:"Quick start",id:"quick-start",level:2},{value:"1. Install GQLAlchemy",id:"1-install-gqlalchemy",level:3},{value:"2. Learn how to use the OGM",id:"2-learn-how-to-use-the-ogm",level:3},{value:"3. Learn how to use the query builder",id:"3-learn-how-to-use-the-query-builder",level:3}],p={toc:h};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-GQLAlchemy-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"GQLAlchemy"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GQLAlchemy")," is a fully open-source Python library that aims to be the go-to\n",(0,o.kt)("strong",{parentName:"p"},"Object Graph Mapper")," (OGM) -- a link between Graph Database objects and Python\nobjects."),(0,o.kt)("p",null,"An Object Graph Mapper or OGM provides a developer-friendly workflow that allows\nfor writing object-oriented notation to communicate to a graph database. Instead\nof writing Cypher queries, you will be able to write object-oriented code, which\nthe OGM will automatically translate into Cypher queries."),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("h3",{id:"1-install-gqlalchemy"},"1. Install GQLAlchemy"),(0,o.kt)("p",null,"Either install GQLAlchemy through ",(0,o.kt)("a",{parentName:"p",href:"/docs/gqlalchemy/installation#pip"},"pip")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/gqlalchemy/installation#source"},"build it from\nsource"),"."),(0,o.kt)("h3",{id:"2-learn-how-to-use-the-ogm"},"2. Learn how to use the OGM"),(0,o.kt)("p",null,"With the help of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/gqlalchemy/how-to-guides/ogm/map-nodes-and-relationships"},"OGM\nguide")," you can learn how to map Python classes to graph objects, save them into the database and load them from the database."),(0,o.kt)("h3",{id:"3-learn-how-to-use-the-query-builder"},"3. Learn how to use the query builder"),(0,o.kt)("p",null,"There is no need to learn the Cypher query language when you can use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/gqlalchemy/how-to-guides/query-builder/create-nodes-relationships"},"query\nbuilder")," in GQLAlchemy to perform\nthe same tasks."))}d.isMDXComponent=!0}}]);