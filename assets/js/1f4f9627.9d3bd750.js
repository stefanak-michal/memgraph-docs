"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19228],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,g=s["".concat(m,".").concat(d)]||s[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},90602:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"docker-hub",title:"Pull the MAGE image from Docker Hub",sidebar_label:"Docker Hub (recommended)"},m=void 0,c={unversionedId:"installation/docker-hub",id:"installation/docker-hub",title:"Pull the MAGE image from Docker Hub",description:"MAGE has prepared a Docker image on [Docker",source:"@site/mage/installation/docker-hub.md",sourceDirName:"installation",slug:"/installation/docker-hub",permalink:"/docs/mage/installation/docker-hub",editUrl:"https://github.com/memgraph/docs/tree/master/mage/installation/docker-hub.md",tags:[],version:"current",frontMatter:{id:"docker-hub",title:"Pull the MAGE image from Docker Hub",sidebar_label:"Docker Hub (recommended)"},sidebar:"mage",previous:{title:"Installation overview",permalink:"/docs/mage/installation"},next:{title:"Docker build",permalink:"/docs/mage/installation/docker-build"}},p={},u=[{value:"Installing MAGE",id:"installing-mage",level:2}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"MAGE has prepared a Docker image on ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/memgraph/memgraph-mage"},(0,o.kt)("strong",{parentName:"a"},"Docker\nHub"))," \ud83d\udc33 ready to be\npulled from\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/memgraph/memgraph-mage"},"memgraph/memgraph-mage"),"."),(0,o.kt)("h2",{id:"installing-mage"},"Installing MAGE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," This is the only command you will need to make it run in your\nenvironment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 7687:7687 memgraph/memgraph-mage:latest\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can download a specific version of MAGE. For example, if you want to\ndownload version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.1"),", you should run the following command:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 7687:7687 memgraph/memgraph-mage:1.1\n")),(0,o.kt)("p",{parentName:"div"},"You can also download a MAGE image equipped for development inside of Docker\ncontainers:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 7687:7687 memgraph/memgraph-mage:1.1-dev\n")),(0,o.kt)("p",{parentName:"div"},"By running this command, you will get an image with the following tools\ninstalled: Python3, Rust, Clang, Make, and CMake. This way, you can copy files\nto the container, build them inside and import query modules in Memgraph."),(0,o.kt)("p",{parentName:"div"},"If you want to develop your own query modules, be sure to check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage#developing-mage-with-docker"},"Development\nprocess for MAGE with\nDocker"),"."))))}d.isMDXComponent=!0}}]);