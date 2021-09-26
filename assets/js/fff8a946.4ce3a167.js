"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36155],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return p}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=n.createContext({}),d=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(m.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),p=o,h=u["".concat(m,".").concat(p)]||u[p]||c[p]||a;return t?n.createElement(h,i(i({ref:r},s),{},{components:t})):n.createElement(h,i({ref:r},s))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var m in r)hasOwnProperty.call(r,m)&&(l[m]=r[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87716:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=t(46723),l=t(93537),m=["components"],d={id:"modules",title:"Module errors",sidebar_label:"Modules"},s=void 0,c={unversionedId:"memgraph/modules",id:"memgraph/modules",isDocsHomePage:!1,title:"Module errors",description:"Errors",source:"@site/errors/memgraph/modules.md",sourceDirName:"memgraph",slug:"/memgraph/modules",permalink:"/docs/errors/memgraph/modules",editUrl:"https://github.com/memgraph/docs/tree/master/errors/memgraph/modules.md",tags:[],version:"current",frontMatter:{id:"modules",title:"Module errors",sidebar_label:"Modules"},sidebar:"errors",previous:{title:"Memory (RAM)",permalink:"/docs/errors/memgraph/memory"},next:{title:"Ports",permalink:"/docs/errors/memgraph/ports"}},u=[{value:"Errors",id:"errors",children:[]},{value:"Warnings",id:"warnings",children:[]},{value:"Errors when loading or closing modules",id:"error-1",children:[]},{value:"Unable to overwrite an already loaded module",id:"error-2",children:[]},{value:"Module directory {} doesn&#39;t exist",id:"error-3",children:[]},{value:"Unknown query module file",id:"warning-1",children:[]}],p={toc:u};function h(e){var r=e.components,t=(0,o.Z)(e,m);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"Help"}),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-1"},"Unable to load module {}; {}. For more details, visit\nmemgr.ph/modules.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-1"},"Failed to close module {}; {}. For more details, visit\nmemgr.ph/modules.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-2"},"Unable to overwrite an already loaded module {}. For more details, visit\nmemgr.ph/modules.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-3"},"Module directory {} doesn't exist. For more details, visit\nmemgr.ph/modules."))),(0,a.kt)("h2",{id:"warnings"},"Warnings"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#warning-1"},"Unknown query module file {}. For more details, visit:\nmemgr.ph/load-query-modules."))),(0,a.kt)("h2",{id:"error-1"},"Errors when loading or closing modules"),(0,a.kt)("p",null,"When Memgraph is loading/closing modules, an error can occur if:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The file could not be found: check if the file has been deleted."),(0,a.kt)("li",{parentName:"ol"},"The file is not readable: make the file readable for the user ",(0,a.kt)("inlineCode",{parentName:"li"},"memgraph"),"."),(0,a.kt)("li",{parentName:"ol"},"The file had the wrong format: check if the file has the expected format."),(0,a.kt)("li",{parentName:"ol"},"The file caused errors during loading.")),(0,a.kt)("h2",{id:"error-2"},"Unable to overwrite an already loaded module"),(0,a.kt)("p",null,"Module names need to be distinct. Try to rename your module and load it again\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"CALL mg.load_all();"),"."),(0,a.kt)("h2",{id:"error-3"},"Module directory {} doesn't exist"),(0,a.kt)("p",null,"Make sure that Memgraph is searching for the modules in the right directory. The\nMemgraph configuration is available in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf")," and you can\nspecify the directory with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag. The default\ndirectory is ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query-modules"),". If the configuration file is\naltered, Memgraph needs to be restarted.  To learn about all the configuration\noptions, check out the ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration"},"Reference guide"),"."),(0,a.kt)("h2",{id:"warning-1"},"Unknown query module file"),(0,a.kt)("p",null,"Query modules can be implemented using the Python or C API provided by Memgraph.\nModules written in languages other than Python need to be compiled to a shared\nlibrary so that they can be loaded when Memgraph starts. This means that you can\nwrite the procedures in any programming language which can work with C and can\nbe compiled to the ELF shared library format."),(0,a.kt)(l.ZP,{mdxType:"SubmitError"}))}h.isMDXComponent=!0},46723:function(e,r,t){t.d(r,{ZP:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={toc:[]};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are having trouble dealing with an error, please let us know on the ",(0,a.kt)("a",{href:"https://discourse.memgraph.com",target:"_blank"},"Community Forum"),"."))))}m.isMDXComponent=!0},93537:function(e,r,t){t.d(r,{ZP:function(){return m}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={toc:[]};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you weren't able to find the error, please submit it through a ",(0,a.kt)("a",{href:"https://support.memgraph.com",target:"_blank"},"Support Ticket")," so we can look into it and get back to you."))))}m.isMDXComponent=!0}}]);