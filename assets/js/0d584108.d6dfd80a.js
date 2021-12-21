"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49404],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=i,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"runtime-settings",title:"Runtime settings",sidebar_label:"Runtime settings"},l=void 0,c={unversionedId:"reference-guide/runtime-settings",id:"version-2.0.0/reference-guide/runtime-settings",title:"Runtime settings",description:"Memgraph contains settings that can be modified during runtime.",source:"@site/memgraph_versioned_docs/version-2.0.0/reference-guide/runtime-settings.md",sourceDirName:"reference-guide",slug:"/reference-guide/runtime-settings",permalink:"/docs/memgraph/2.0.0/reference-guide/runtime-settings",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/reference-guide/runtime-settings.md",tags:[],version:"2.0.0",frontMatter:{id:"runtime-settings",title:"Runtime settings",sidebar_label:"Runtime settings"},sidebar:"version-2.0.0/memgraph",previous:{title:"Configuration",permalink:"/docs/memgraph/2.0.0/reference-guide/configuration"},next:{title:"Graph algorithms",permalink:"/docs/memgraph/2.0.0/reference-guide/graph-algorithms"}},u=[{value:"Settings",id:"settings",children:[],level:2},{value:"Checking and modifying settings",id:"checking-and-modifying-settings",children:[],level:2}],p={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Memgraph contains settings that can be modified during runtime.\nAll the settings are persisted between multiple runs."),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"organization.name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the organization using the instance of Memgraph (used for verifying the license key).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enterprise.license"),(0,a.kt)("td",{parentName:"tr",align:null},"License key for Memgraph Enterprise")))),(0,a.kt)("h2",{id:"checking-and-modifying-settings"},"Checking and modifying settings"),(0,a.kt)("p",null,"All settings can be fetched by calling the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-opencypher"},"SHOW DATABASE SETTINGS;\n")),(0,a.kt)("p",null,"To check the value of a single setting you can use a slightly different query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-opencypher"},"SHOW DATABASE SETTING 'setting.name';\n")),(0,a.kt)("p",null,"If you want to change a value for a specific setting, following query should be used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-opencypher"},"SET DATABASE SETTING 'setting.name' TO 'some-string-value';\n")))}g.isMDXComponent=!0}}]);