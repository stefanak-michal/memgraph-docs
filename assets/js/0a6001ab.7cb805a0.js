"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92564],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53908:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(46723),m=r(93537),c=["components"],p={id:"memory",title:"Memory (RAM) errors",sidebar_label:"Memory (RAM)"},l=void 0,s={unversionedId:"memgraph/memory",id:"memgraph/memory",isDocsHomePage:!1,title:"Memory (RAM) errors",description:"Warnings",source:"@site/errors/memgraph/memory.md",sourceDirName:"memgraph",slug:"/memgraph/memory",permalink:"/docs/errors/memgraph/memory",editUrl:"https://github.com/memgraph/docs/tree/master/errors/memgraph/memory.md",tags:[],version:"current",frontMatter:{id:"memory",title:"Memory (RAM) errors",sidebar_label:"Memory (RAM)"},sidebar:"errors",previous:{title:"Durability",permalink:"/docs/errors/memgraph/durability"},next:{title:"Modules",permalink:"/docs/errors/memgraph/modules"}},u=[{value:"Warnings",id:"warnings",children:[]},{value:"Running out of available RAM",id:"error-1",children:[]}],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"Help"}),(0,a.kt)("h2",{id:"warnings"},"Warnings"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-1"},"Running out of available RAM, only {} MB left. For more details, visit\nmemgr.ph/ram."))),(0,a.kt)("h2",{id:"error-1"},"Running out of available RAM"),(0,a.kt)("p",null,"This is a warning that can be disabled in the Memgraph configuration. The\nMemgraph configuration is available in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf")," and you can\ndisable the warning with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--memory-warning-threshold")," flag. The default\nvalue is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),". If the configuration file is altered, Memgraph needs to be\nrestarted.  To learn about all the configuration options, check out the\n",(0,a.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration"},"Reference guide"),"."),(0,a.kt)(m.ZP,{mdxType:"SubmitError"}))}f.isMDXComponent=!0},46723:function(e,t,r){r.d(t,{ZP:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],m={toc:[]};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are having trouble dealing with an error, please let us know on the ",(0,a.kt)("a",{href:"https://discourse.memgraph.com",target:"_blank"},"Community Forum"),"."))))}c.isMDXComponent=!0},93537:function(e,t,r){r.d(t,{ZP:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],m={toc:[]};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you weren't able to find the error, please submit it through a ",(0,a.kt)("a",{href:"https://support.memgraph.com",target:"_blank"},"Support Ticket")," so we can look into it and get back to you."))))}c.isMDXComponent=!0}}]);