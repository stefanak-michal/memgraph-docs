"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97736],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),g=o,d=s["".concat(c,".").concat(g)]||s[g]||m[g]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},12195:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/"},c=void 0,u={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"How to Connect to Memgraph Cloud",source:"@site/cloud/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/memgraph-cloud/",editUrl:"https://github.com/memgraph/docs/tree/master/cloud/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/"},sidebar:"cloud"},p=[{value:"How to Connect to Memgraph Cloud",id:"how-to-connect-to-memgraph-cloud",children:[],level:2}],m={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-connect-to-memgraph-cloud"},"How to Connect to Memgraph Cloud"),(0,a.kt)("p",null,"To query Memgraph from the graphical user interface, please download and\ninstall ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/download#tools"},"Memgraph Lab"),"."),(0,a.kt)("p",null,"To query Memgraph from the terminal please use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"Memgraph\nConsole"),"."),(0,a.kt)("p",null,"To query Memgraph from your application please use one of the following client\nlibraries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mgclient"},"Memgraph C Client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://memgraph.github.io/pymgclient"},"Memgraph Python Client"))))}s.isMDXComponent=!0}}]);