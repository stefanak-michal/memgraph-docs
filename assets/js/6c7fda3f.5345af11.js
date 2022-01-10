"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7021],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return c}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=s(t),c=o,g=d["".concat(l,".").concat(c)]||d[c]||p[c]||a;return t?n.createElement(g,i(i({ref:r},m),{},{components:t})):n.createElement(g,i({ref:r},m))}));function c(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},68410:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],u={id:"overview",title:"Query modules overview",sidebar_label:"Query modules overview",slug:"/reference-guide/query-modules"},l=void 0,s={unversionedId:"reference-guide/query-modules/overview",id:"version-2.1.1/reference-guide/query-modules/overview",title:"Query modules overview",description:"Memgraph supports extending the query language with user-written procedures in",source:"@site/memgraph_versioned_docs/version-2.1.1/reference-guide/query-modules/overview.md",sourceDirName:"reference-guide/query-modules",slug:"/reference-guide/query-modules",permalink:"/docs/memgraph/reference-guide/query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/reference-guide/query-modules/overview.md",tags:[],version:"2.1.1",frontMatter:{id:"overview",title:"Query modules overview",sidebar_label:"Query modules overview",slug:"/reference-guide/query-modules"},sidebar:"version-2.1.1/memgraph",previous:{title:"Metadata",permalink:"/docs/memgraph/reference-guide/metadata"},next:{title:"Available modules",permalink:"/docs/memgraph/reference-guide/query-modules/available-query-modules"}},m=[],p={toc:m};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Memgraph supports extending the query language with user-written procedures in\n",(0,a.kt)("strong",{parentName:"p"},"C"),", ",(0,a.kt)("strong",{parentName:"p"},"C++"),", ",(0,a.kt)("strong",{parentName:"p"},"Python"),", and ",(0,a.kt)("strong",{parentName:"p"},"Rust"),". These procedures are grouped into\nmodules - ",(0,a.kt)("strong",{parentName:"p"},"Query modules"),", which can then be loaded on startup or later on. To\nlearn more about query modules take a look at the following guides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/available-query-modules"},"Implemented query modules -\nMAGE"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/load-call-query-modules"},"Load and call query\nmodules"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/database-functionalities/query-modules/implement-query-modules"},"Implement custom query\nmodules")))),(0,a.kt)("p",null,"You can also check out detailed descriptions of the query modules API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/api/python-api"},"Python API"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/api/c-api"},"C API")))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Available Query Modules")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The open-source repository ",(0,a.kt)("strong",{parentName:"p"},"MAGE (Memgraph\nAdvanced Graph Extensions)")," contains all currently implemented query modules.\nFor more information on all the graph algorithms that are available and\ninstallation instructions, check out the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/mage"},"MAGE documentation"))," page."))))}d.isMDXComponent=!0}}]);