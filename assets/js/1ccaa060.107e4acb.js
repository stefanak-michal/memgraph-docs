"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24304],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55217:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"installation",title:"Install Memgraph",sidebar_label:"Installation overview",slug:"/getting-started/installation"},s=void 0,p={unversionedId:"getting-started/installation/installation",id:"version-1.3.0/getting-started/installation/installation",title:"Install Memgraph",description:"This article briefly outlines the basic steps necessary to install and run Memgraph.",source:"@site/memgraph_versioned_docs/version-1.3.0/getting-started/installation/installation.md",sourceDirName:"getting-started/installation",slug:"/getting-started/installation",permalink:"/docs/memgraph/1.3.0/getting-started/installation",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/getting-started/installation/installation.md",tags:[],version:"1.3.0",frontMatter:{id:"installation",title:"Install Memgraph",sidebar_label:"Installation overview",slug:"/getting-started/installation"},sidebar:"version-1.3.0/memgraph",previous:{title:"Where to start?",permalink:"/docs/memgraph/1.3.0/getting-started"},next:{title:"Docker (Windows, Linux, macOS)",permalink:"/docs/memgraph/1.3.0/getting-started/installation/docker-installation"}},c=[{value:"Memgraph Cloud",id:"memgraph-cloud",children:[],level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run Memgraph."),(0,i.kt)("p",null,"Memgraph is available to ",(0,i.kt)("a",{parentName:"p",href:"https://memgraph.com/download/"},"download as a binary")," in the following formats:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.3.0/getting-started/installation/docker-installation"},"Docker (Windows, Linux, macOS)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.3.0/getting-started/installation/debian-installation"},"Debian package"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.3.0/getting-started/installation/rpm-installation"},"RPM package")))),(0,i.kt)("p",null,"We recommend using Docker because it simplifies the installation process and offers a lot of flexibility to new users."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Newer versions of Memgraph are currently not backward compatible with older versions. This is mainly noticeable by being unable to load storage snapshots between different versions."))),(0,i.kt)("h3",{id:"memgraph-cloud"},"Memgraph Cloud"),(0,i.kt)("p",null,"If you don't want to install Memgraph locally, you can try out ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://memgraph.com/product/cloud"},"Memgraph Cloud"))," for free. "),(0,i.kt)("p",null,"Memgraph cloud is the easiest way to run Memgraph in the cloud. With a fully-managed, cloud-hosted graph database-as-a-service supported by the engineering team behind Memgraph."))}d.isMDXComponent=!0}}]);