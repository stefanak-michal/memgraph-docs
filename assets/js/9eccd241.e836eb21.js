"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35442],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.createContext({}),m=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return l.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=m(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?l.createElement(g,i(i({ref:e},p),{},{components:n})):l.createElement(g,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30094:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var l=n(87462),a=n(63366),r=(n(67294),n(3905)),i=(n(44996),["components"]),o={id:"overview",title:"Install Memgraph",sidebar_label:"Install Memgraph overview",slug:"/installation"},s=void 0,m={unversionedId:"installation/overview",id:"version-2.1.1/installation/overview",title:"Install Memgraph",description:"Install Memgraph Platform and get the complete streaming graph application",source:"@site/memgraph_versioned_docs/version-2.1.1/installation/overview.md",sourceDirName:"installation",slug:"/installation",permalink:"/docs/memgraph/2.1.1/installation",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/installation/overview.md",tags:[],version:"2.1.1",frontMatter:{id:"overview",title:"Install Memgraph",sidebar_label:"Install Memgraph overview",slug:"/installation"},sidebar:"memgraph",previous:{title:"Getting started",permalink:"/docs/memgraph/2.1.1/"},next:{title:"Install Memgraph Platform (recommended)",permalink:"/docs/memgraph/2.1.1/install-memgraph-on-windows-docker"}},p=[{value:"Windows",id:"windows",children:[],level:2},{value:"macOS",id:"macos",children:[],level:2},{value:"Linux",id:"linux",children:[],level:2}],u={toc:p};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Install ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," and get the complete streaming graph application\nplatform that includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memgraph DB")," - the database that holds your data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memgraph Lab")," - visual user interface for running queries and visualizing\ngraph data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mgconsole")," - command-line interface for running queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,r.kt)("p",null,"Scroll down to the operating system of your choosing and install ",(0,r.kt)("strong",{parentName:"p"},"Memgraph\nPlatform")," with Docker. If you only need to install a database instance, install\nMemgraph DB with Docker or some other available installation option."),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"column"},(0,r.kt)("a",{style:{paddingRight:"60px",paddingLeft:"20px"}},(0,r.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png",alt:"windows",title:"windows",width:"80"}))),(0,r.kt)("div",{class:"column",style:{paddingRight:"60px"}},(0,r.kt)("p",null,(0,r.kt)("b",null,"Install Memgraph Platform (recommended)")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-on-windows-docker"},(0,r.kt)("b",null,"Docker"))))),(0,r.kt)("div",{class:"column"},(0,r.kt)("p",null,(0,r.kt)("b",null,"Install Memgraph DB")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-db-on-windows-docker"},(0,r.kt)("b",null,"Docker"))),(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-on-windows-wsl"},(0,r.kt)("b",null,"Windows Subsystem for Linux (WSL)")))))),(0,r.kt)("h2",{id:"macos"},"macOS"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"column"},(0,r.kt)("a",{style:{paddingRight:"60px",paddingLeft:"20px"}},(0,r.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/1024px-MacOS_logo.svg.png",alt:"macos",title:"macos",width:"80"}))),(0,r.kt)("div",{class:"column",style:{paddingRight:"60px"}},(0,r.kt)("p",null,(0,r.kt)("b",null,"Install Memgraph Platform (recommended)")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-on-macos-docker"},(0,r.kt)("b",null,"Docker"))))),(0,r.kt)("div",{class:"column"},(0,r.kt)("p",null,(0,r.kt)("b",null,"Install Memgraph DB")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-db-on-macos-docker"},(0,r.kt)("b",null,"Docker")))))),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"column"},(0,r.kt)("a",{style:{paddingRight:"60px",paddingLeft:"20px"}},(0,r.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg",alt:"linux",title:"linux",width:"80"}))),(0,r.kt)("div",{class:"column"},(0,r.kt)("p",null,(0,r.kt)("b",null,"Install Memgraph Platform (recommended)")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-on-linux-docker"},(0,r.kt)("b",null,"Docker"))))),(0,r.kt)("div",{class:"column",style:{paddingLeft:"60px"}},(0,r.kt)("p",null,(0,r.kt)("b",null,"Install Memgraph DB")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-db-on-linux-docker"},(0,r.kt)("b",null,"Docker"))),(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-on-ubuntu"},(0,r.kt)("b",null,"Ubuntu"))),(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-on-debian"},(0,r.kt)("b",null,"Debian"))),(0,r.kt)("li",null,(0,r.kt)("a",{href:"install-memgraph-from-rpm"},(0,r.kt)("b",null,"RPM package")))))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Newer versions of Memgraph are currently ",(0,r.kt)("strong",{parentName:"p"},"not backward compatible")," with older\nversions. That is why you won't be able to load storage snapshots between\ndifferent versions."))))}c.isMDXComponent=!0}}]);