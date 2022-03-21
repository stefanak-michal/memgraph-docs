"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91516],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2244:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={id:"enabling-enterprise",title:"Enabling Memgraph Enterprise",sidebar_label:"Enabling Memgraph Enterprise"},l=void 0,s={unversionedId:"reference-guide/enabling-enterprise",id:"version-2.2.1/reference-guide/enabling-enterprise",title:"Enabling Memgraph Enterprise",description:"Adding a license key",source:"@site/memgraph_versioned_docs/version-2.2.1/reference-guide/enabling-enterprise.md",sourceDirName:"reference-guide",slug:"/reference-guide/enabling-enterprise",permalink:"/docs/memgraph/reference-guide/enabling-enterprise",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.1/reference-guide/enabling-enterprise.md",tags:[],version:"2.2.1",frontMatter:{id:"enabling-enterprise",title:"Enabling Memgraph Enterprise",sidebar_label:"Enabling Memgraph Enterprise"},sidebar:"memgraph",previous:{title:"User management",permalink:"/docs/memgraph/reference-guide/users"},next:{title:"Audit log",permalink:"/docs/memgraph/reference-guide/audit-log"}},p={},u=[{value:"Adding a license key",id:"adding-a-license-key",level:2}],d={toc:u};function f(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"adding-a-license-key"},"Adding a license key"),(0,o.kt)("p",null,"Some of Memgraph's features are only available in Enterprise Edition. They are\npresent in the same binary but protected by a license key."),(0,o.kt)("p",null,"If you're interested in Memgraph Enterprise, you need to fill out the following\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSddH_XV000h58MhwJwwrUu2L3uTkejEDPqvstl6eMou_AW-yw/viewform"},"form")," where one of the fields is the organization name."),(0,o.kt)("p",null,"After getting your license key, using the ",(0,o.kt)("a",{parentName:"p",href:"runtime-settings"},"runtime setting"),"\nyou set the ",(0,o.kt)("inlineCode",{parentName:"p"},"organization.name")," to the same organization name you used for the\nlicense key, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"enterprise.license")," to the license key you received."))}f.isMDXComponent=!0}}]);