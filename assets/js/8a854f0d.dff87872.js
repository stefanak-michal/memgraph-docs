"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3322],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,p=h["".concat(l,".").concat(d)]||h[d]||m[d]||o;return r?n.createElement(p,i(i({ref:t},c),{},{components:r})):n.createElement(p,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},36030:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return h},default:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(46723),s=r(93537),l=["components"],u={id:"auth",title:"Auth module errors",sidebar_label:"Auth module"},c=void 0,m={unversionedId:"memgraph/auth",id:"memgraph/auth",title:"Auth module errors",description:"Errors",source:"@site/errors/memgraph/auth.md",sourceDirName:"memgraph",slug:"/memgraph/auth",permalink:"/docs/errors/memgraph/auth",editUrl:"https://github.com/memgraph/docs/tree/master/errors/memgraph/auth.md",tags:[],version:"current",frontMatter:{id:"auth",title:"Auth module errors",sidebar_label:"Auth module"},sidebar:"errors",previous:{title:"Errors overview",permalink:"/docs/errors/"},next:{title:"CSV Import Tool",permalink:"/docs/errors/memgraph/csv-import-tool"}},h=[{value:"Errors",id:"errors",children:[],level:2},{value:"The user already exists as a role",id:"error-1",children:[],level:2},{value:"The user doesn&#39;t exist",id:"error-2",children:[],level:2},{value:"The role already exists as a user",id:"error-3",children:[],level:2},{value:"The role doesn&#39;t exist",id:"error-4",children:[],level:2},{value:"Couldn&#39;t authenticate user",id:"error-5",children:[],level:2}],d={toc:h};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{mdxType:"Help"}),(0,o.kt)("h2",{id:"errors"},"Errors"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#error-1"},"Couldn't authenticate user '{}' using the auth module because the user\nalready exists as a role. For more details, visit: memgr.ph/auth.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#error-2"},"Couldn't authenticate user '{}' using the auth module because the user\ndoesn't exist. For more details, visit: memgr.ph/auth.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#error-3"},"Couldn't authenticate user '{}' using the auth module because the user's\nrole '{}' already exists as a user. For more details, visit:\nmemgr.ph/auth.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#error-4"},"Couldn't authenticate user '{}' using the auth module because the user's\nrole '{}' doesn't exist. For more details, visit: memgr.ph/auth.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#error-2"},"Couldn't authenticate user '{}' because the user doesn't exist. For more\ndetails, visit: memgr.ph/auth.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#error-5"},"Couldn't authenticate user '{}'. For more details, visit:\nmemgr.ph/auth."))),(0,o.kt)("h2",{id:"error-1"},"The user already exists as a role"),(0,o.kt)("p",null,"A user and a role can't share the same name. Please change the name of the user\nor the role."),(0,o.kt)("h2",{id:"error-2"},"The user doesn't exist"),(0,o.kt)("p",null,"By using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--auth-module-create-user")," flag, you can specify if a missing user\nshould be created. Otherwise, the user can't be created and this error will be\nthrown."),(0,o.kt)("h2",{id:"error-3"},"The role already exists as a user"),(0,o.kt)("p",null,"A user and a role can't share the same name. Please change the name of the user\nor the role."),(0,o.kt)("h2",{id:"error-4"},"The role doesn't exist"),(0,o.kt)("p",null,"By using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--auth-module-create-user")," flag, you can specify if a missing role\nshould be created. Otherwise, the role can't be created and this error will be\nthrown."),(0,o.kt)("h2",{id:"error-5"},"Couldn't authenticate user"),(0,o.kt)("p",null,"The specified password was most probably wrong. Please check the credentials\nagain."),(0,o.kt)(s.ZP,{mdxType:"SubmitError"}))}p.isMDXComponent=!0},46723:function(e,t,r){r.d(t,{ZP:function(){return l}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={toc:[]};function l(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are having trouble dealing with an error, please let us know on the ",(0,o.kt)("a",{href:"https://discourse.memgraph.com",target:"_blank"},"Community Forum"),"."))))}l.isMDXComponent=!0},93537:function(e,t,r){r.d(t,{ZP:function(){return l}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={toc:[]};function l(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you weren't able to find the error, please submit it through a ",(0,o.kt)("a",{href:"https://support.memgraph.com",target:"_blank"},"Support Ticket")," so we can look into it and get back to you."))))}l.isMDXComponent=!0}}]);