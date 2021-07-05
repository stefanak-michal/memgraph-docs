(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3506],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var s=2;s<a;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75417:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),u=["components"],i={},l=void 0,s={unversionedId:"database-functionalities/query-modules/query-modules",id:"version-1.4.0/database-functionalities/query-modules/query-modules",isDocsHomePage:!1,title:"query-modules",description:"Query modules",source:"@site/memgraph_versioned_docs/version-1.4.0/database-functionalities/query-modules/query-modules.md",sourceDirName:"database-functionalities/query-modules",slug:"/database-functionalities/query-modules/query-modules",permalink:"/memgraph/1.4.0/database-functionalities/query-modules/query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/database-functionalities/query-modules/query-modules.md",version:"1.4.0",frontMatter:{}},c=[{value:"Query modules",id:"query-modules",children:[{value:"Where to next?",id:"where-to-next",children:[]}]}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"query-modules"},"Query modules"),(0,a.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on startup or later on.\nTo learn more about query modules take a look at the following guides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/query-modules/built-in-query-modules"},"Built-in query modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/query-modules/load-call-query-modules"},"Load and call query modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"))),(0,a.kt)("h3",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"To learn more about the ",(0,a.kt)("strong",{parentName:"p"},"query modules"),", visit the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../../reference-guide"},"Reference guide")),".\nFor real-world examples of how to use query modules, we strongly suggest going through one of the available ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/1.4.0/tutorials/tutorials"},"Tutorials"))," that utilize them."))}d.isMDXComponent=!0}}]);