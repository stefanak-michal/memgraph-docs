"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1537],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4221:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={id:"mgp_label",title:"mgp_label",sidebar_label:"mgp_label"},c=void 0,u={unversionedId:"reference-guide/query-modules/api/c-api/classes/mgp_label",id:"version-2.0.1/reference-guide/query-modules/api/c-api/classes/mgp_label",title:"mgp_label",description:"Label of a vertex.",source:"@site/memgraph_versioned_docs/version-2.0.1/reference-guide/query-modules/api/c-api/classes/mgp_label.md",sourceDirName:"reference-guide/query-modules/api/c-api/classes",slug:"/reference-guide/query-modules/api/c-api/classes/mgp_label",permalink:"/docs/memgraph/2.0.1/reference-guide/query-modules/api/c-api/classes/mgp_label",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.1/reference-guide/query-modules/api/c-api/classes/mgp_label.md",tags:[],version:"2.0.1",frontMatter:{id:"mgp_label",title:"mgp_label",sidebar_label:"mgp_label"},sidebar:"version-2.0.1/memgraph",previous:{title:"mgp_edge_type",permalink:"/docs/memgraph/2.0.1/reference-guide/query-modules/api/c-api/classes/mgp_edge_type"},next:{title:"mgp_local_date_time_parameters",permalink:"/docs/memgraph/2.0.1/reference-guide/query-modules/api/c-api/classes/mgp_local_date_time_parameters"}},p=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable name",id:"variable-name",children:[],level:3}],level:2}],s={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Label of a vertex."),(0,l.kt)("h2",{id:"public-attributes"},"Public Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const char *"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("a",{parentName:"strong",href:"#variable-name"},"name"))," ",(0,l.kt)("br",null),"Name of the label as a NULL terminated character string.")))),(0,l.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,l.kt)("h3",{id:"variable-name"},"variable name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * name;\n")),(0,l.kt)("p",null,"Name of the label as a NULL terminated character string."))}m.isMDXComponent=!0}}]);