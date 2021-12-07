"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88533],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||l[d]||a;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48535:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return f},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},c=void 0,u={unversionedId:"database-functionalities/constraints/constraints",id:"version-2.1.0/database-functionalities/constraints/constraints",isDocsHomePage:!1,title:"constraints",description:"How to Enforce Constraints",source:"@site/memgraph_versioned_docs/version-2.1.0/database-functionalities/constraints/constraints.md",sourceDirName:"database-functionalities/constraints",slug:"/database-functionalities/constraints/constraints",permalink:"/docs/memgraph/2.1.0/database-functionalities/constraints/constraints",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/database-functionalities/constraints/constraints.md",tags:[],version:"2.1.0",frontMatter:{}},f=[{value:"How to Enforce Constraints",id:"how-to-enforce-constraints",children:[],level:2}],l={toc:f};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-enforce-constraints"},"How to Enforce Constraints"),(0,a.kt)("p",null,'Memgraph strives to allow users the power to enforce certain constraints across their graph data model. The specifics of those constraints are laid out in these guides:\n{% page-ref page="./existence-constraint.md" %}\n{% page-ref page="./uniqueness-constraint.md" %}'))}p.isMDXComponent=!0}}]);