"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4749],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(o,".").concat(d)]||s[d]||m[d]||p;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<p;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},32767:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),l=["components"],i={id:"mgp_property",title:"mgp_property",sidebar_label:"mgp_property"},o=void 0,u={unversionedId:"reference-guide/query-modules/api/c-api/classes/mgp_property",id:"reference-guide/query-modules/api/c-api/classes/mgp_property",title:"mgp_property",description:"Reference to a named property value.",source:"@site/docs/reference-guide/query-modules/api/c-api/classes/mgp_property.md",sourceDirName:"reference-guide/query-modules/api/c-api/classes",slug:"/reference-guide/query-modules/api/c-api/classes/mgp_property",permalink:"/docs/memgraph/next/reference-guide/query-modules/api/c-api/classes/mgp_property",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/query-modules/api/c-api/classes/mgp_property.md",tags:[],version:"current",frontMatter:{id:"mgp_property",title:"mgp_property",sidebar_label:"mgp_property"},sidebar:"memgraph",previous:{title:"mgp_local_time_parameters",permalink:"/docs/memgraph/next/reference-guide/query-modules/api/c-api/classes/mgp_local_time_parameters"},next:{title:"mgp_vertex_id",permalink:"/docs/memgraph/next/reference-guide/query-modules/api/c-api/classes/mgp_vertex_id"}},c=[{value:"Public Attributes",id:"public-attributes",children:[],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable name",id:"variable-name",children:[],level:3},{value:"variable value",id:"variable-value",children:[],level:3}],level:2}],m={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Reference to a named property value."),(0,p.kt)("h2",{id:"public-attributes"},"Public Attributes"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null}),(0,p.kt)("th",{parentName:"tr",align:null},"Name"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"const char *"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},(0,p.kt)("a",{parentName:"strong",href:"#variable-name"},"name"))," ",(0,p.kt)("br",null),"Name (key) of a property as a NULL terminated string.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"struct mgp_value *"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},(0,p.kt)("a",{parentName:"strong",href:"#variable-value"},"value"))," ",(0,p.kt)("br",null),"Value of the referenced property.")))),(0,p.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,p.kt)("h3",{id:"variable-name"},"variable name"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * name;\n")),(0,p.kt)("p",null,"Name (key) of a property as a NULL terminated string."),(0,p.kt)("h3",{id:"variable-value"},"variable value"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"struct mgp_value * value;\n")),(0,p.kt)("p",null,"Value of the referenced property."))}s.isMDXComponent=!0}}]);