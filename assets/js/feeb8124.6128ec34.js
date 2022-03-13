"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69303],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95102:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],u={id:"networkx",title:"How to use the NetworkX library with Memgraph",sidebar_label:"Utilize the NetworkX library"},c=void 0,l={unversionedId:"how-to-guides/networkx",id:"how-to-guides/networkx",title:"How to use the NetworkX library with Memgraph",description:"NetworkX is a Python package for the creation, manipulation, and study of the structure,",source:"@site/docs/how-to-guides/networkx.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/networkx",permalink:"/docs/memgraph/next/how-to-guides/networkx",editUrl:"https://github.com/memgraph/docs/tree/master/docs/how-to-guides/networkx.md",tags:[],version:"current",frontMatter:{id:"networkx",title:"How to use the NetworkX library with Memgraph",sidebar_label:"Utilize the NetworkX library"},sidebar:"memgraph",previous:{title:"Uniqueness constraint",permalink:"/docs/memgraph/next/how-to-guides/constraints/uniqueness-constraint"},next:{title:"Query modules overview",permalink:"/docs/memgraph/next/how-to-guides/query-modules"}},s={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NetworkX is a Python package for the creation, manipulation, and study of the structure,\ndynamics, and functions of complex networks. Memgraph currently provides three query modules\nthat utilize the NetworkX library:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/mage/query-modules/python/nxalg"},"NetworkX Algorithms"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/mage/query-modules/python/graph-analyzer"},"Graph Analyzer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/mage/query-modules/cpp/weakly-connected-components"},"Weakly Connected Components")))),(0,a.kt)("p",null,"You can also take a look at our open-source project ",(0,a.kt)("a",{parentName:"p",href:"/mage"},"MAGE")," which you can utilize to implement even more NetworkX functionalities inside Memgraph."))}d.isMDXComponent=!0}}]);