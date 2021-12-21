"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29740],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24815:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"overview",title:"Install Memgraph",sidebar_label:"Install Memgraph overview",slug:"/installation"},s=void 0,m={unversionedId:"installation/overview",id:"installation/overview",title:"Install Memgraph",description:"Windows",source:"@site/docs/installation/overview.md",sourceDirName:"installation",slug:"/installation",permalink:"/docs/memgraph/next/installation",editUrl:"https://github.com/memgraph/docs/tree/master/docs/installation/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Install Memgraph",sidebar_label:"Install Memgraph overview",slug:"/installation"},sidebar:"memgraph",previous:{title:"Getting started",permalink:"/docs/memgraph/next/getting-started"},next:{title:"Docker \ud83d\udc33",permalink:"/docs/memgraph/next/install-memgraph-on-windows-docker"}},p=[{value:"Windows",id:"windows",children:[],level:2},{value:"macOS",id:"macos",children:[],level:2},{value:"Linux",id:"linux",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"left"},(0,o.kt)("a",{href:"#windows",style:{paddingRight:"70px"}},(0,o.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png",alt:"windows",title:"windows",width:"80"})),(0,o.kt)("a",{href:"#macos",style:{paddingRight:"70px"}},(0,o.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/1024px-MacOS_logo.svg.png",alt:"macos",title:"macos",width:"80"})),(0,o.kt)("a",{href:"#linux"},(0,o.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg",alt:"linux",title:"linux",width:"80"}))),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("p",null,"You can choose to install Memgraph with Docker or through the Windows Subsystem\nfor Linux (WSL):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/install-memgraph-on-windows-docker"},"Docker \ud83d\udc33"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/install-memgraph-on-windows-wsl"},"Windows Subsystem for Linux\n(WSL)")))),(0,o.kt)("h2",{id:"macos"},"macOS"),(0,o.kt)("p",null,"To install Memgraph on macOS, you will need to have Docker installed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/install-memgraph-on-macos-docker"},"Docker \ud83d\udc33")))),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("p",null,"Memgraph is available for multiple Linux distributions and in the form of Docker\nimages.",(0,o.kt)("br",null)," You can choose one of the following installation methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/install-memgraph-on-linux-docker"},"Docker \ud83d\udc33"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/install-memgraph-on-debian"},"Ubuntu"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/install-memgraph-on-debian"},"Debian"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/install-memgraph-from-rpm"},"RPM package")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Newer versions of Memgraph are currently not backward compatible with older\nversions. This is mainly noticeable by being unable to load storage snapshots\nbetween different versions."))))}d.isMDXComponent=!0}}]);