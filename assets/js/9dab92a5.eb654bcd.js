(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3122],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),m=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=m(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(t),d=a,g=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return t?n.createElement(g,u(u({ref:r},s),{},{components:t})):n.createElement(g,u({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=c;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var m=2;m<o;m++)u[m]=t[m];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65683:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),u=["components"],i={id:"overview",title:"Query modules overview",sidebar_label:"Overview",slug:"/reference-guide/query-modules"},l=void 0,m={unversionedId:"reference-guide/query-modules/overview",id:"reference-guide/query-modules/overview",isDocsHomePage:!1,title:"Query modules overview",description:"Memgraph supports extending the query language with user-written procedures in C, C++, Python, and Rust.",source:"@site/docs/reference-guide/query-modules/overview.md",sourceDirName:"reference-guide/query-modules",slug:"/reference-guide/query-modules",permalink:"/memgraph/next/reference-guide/query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/query-modules/overview.md",version:"current",frontMatter:{id:"overview",title:"Query modules overview",sidebar_label:"Overview",slug:"/reference-guide/query-modules"},sidebar:"memgraph",previous:{title:"Indexing",permalink:"/memgraph/next/reference-guide/indexing"},next:{title:"Available modules",permalink:"/memgraph/next/reference-guide/query-modules/available-query-modules"}},s=[],p={toc:s};function c(e){var r=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Memgraph supports extending the query language with user-written procedures in ",(0,o.kt)("strong",{parentName:"p"},"C"),", ",(0,o.kt)("strong",{parentName:"p"},"C++"),", ",(0,o.kt)("strong",{parentName:"p"},"Python"),", and ",(0,o.kt)("strong",{parentName:"p"},"Rust"),".\nThese procedures are grouped into modules - ",(0,o.kt)("strong",{parentName:"p"},"Query modules"),", which can then be loaded on startup or later on.\nTo learn more about query modules take a look at the following guides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/next/reference-guide/query-modules/available-query-modules"},"Implemented query modules - MAGE"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/next/reference-guide/query-modules/load-call-query-modules"},"Load and call query modules"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/next/reference-guide/query-modules/implement-query-modules"},"Implement custom query modules")))),(0,o.kt)("p",null,"You can also check out detailed descriptions of the query modules API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/next/reference-guide/query-modules/api/python-api"},"Python API"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/next/reference-guide/query-modules/api/c-api"},"C API")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Available Query Modules")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The open-source repository ",(0,o.kt)("strong",{parentName:"p"},"MAGE (Memgraph Advanced Graph Extensions)")," contains all currently implemented query modules. For more information on all the graph algorithms that are available and installation instructions, check out the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/mage"},"MAGE documentation"))," page."))))}c.isMDXComponent=!0}}]);