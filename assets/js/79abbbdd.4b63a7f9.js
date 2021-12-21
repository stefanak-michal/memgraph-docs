"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83886],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72055:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"debian-installation",title:"Install Memgraph on Debian",sidebar_label:"Debian",slug:"/install-memgraph-on-debian"},s=void 0,p={unversionedId:"installation/linux/debian-installation",id:"version-2.0.0/installation/linux/debian-installation",title:"Install Memgraph on Debian",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.0.0/installation/linux/debian-installation.md",sourceDirName:"installation/linux",slug:"/install-memgraph-on-debian",permalink:"/docs/memgraph/2.0.0/install-memgraph-on-debian",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/installation/linux/debian-installation.md",tags:[],version:"2.0.0",frontMatter:{id:"debian-installation",title:"Install Memgraph on Debian",sidebar_label:"Debian",slug:"/install-memgraph-on-debian"},sidebar:"version-2.0.0/memgraph",previous:{title:"Ubuntu",permalink:"/docs/memgraph/2.0.0/install-memgraph-on-ubuntu"},next:{title:"RPM package",permalink:"/docs/memgraph/2.0.0/install-memgraph-from-rpm"}},m=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation guide",id:"installation-guide",children:[{value:"Stopping Memgraph",id:"stopping-memgraph",children:[],level:3},{value:"Configuration",id:"configuration",children:[],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2},{value:"Getting help",id:"getting-help",children:[],level:2}],c={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\nMemgraph on Debian."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you proceed with the installation guide make sure that you have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloaded the latest ",(0,i.kt)("strong",{parentName:"li"},"Memgraph Debian Package")," which can be ",(0,i.kt)("a",{parentName:"li",href:"https://memgraph.com/download/"},"found\nhere"),".")),(0,i.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,i.kt)("p",null,"After downloading Memgraph as a Debian package, install it by running the\nfollowing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"sudo dpkg -i /path-to/memgraph_<version>.deb\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Why use sudo?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In order to perform some actions on your operating system\nlike installing new software, you may need ",(0,i.kt)("strong",{parentName:"p"},"superuser")," privileges (commonly\ncalled ",(0,i.kt)("strong",{parentName:"p"},"root"),").\xa0"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Potential installation error")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You could get errors while installing\nthe package with the above command if you don't have all of Memgraph's\ndependencies installed. The issues mostly look like the following:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"dpkg: error processing package memgraph (--install):\n dependency problems - leaving unconfigured\nErrors were encountered while processing:\n memgraph\n")),(0,i.kt)("p",{parentName:"div"},"To install missing dependencies and finish the installation of the Memgraph\npackage, just issue the following command:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get install -f\n")),(0,i.kt)("p",{parentName:"div"},"The above command will install all missing dependencies and will finish\nconfiguring the Memgraph package."))),(0,i.kt)("p",null,"On successful installation, Memgraph should already be running. To confirm it,\nyou can start it explicitly as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"sudo systemctl start memgraph\n")),(0,i.kt)("p",null,"To verify that Memgraph is running, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"sudo journalctl --unit memgraph\n")),(0,i.kt)("p",null,"If successful, you should receive an output similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph vX.X.X-community\n")),(0,i.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,i.kt)("a",{parentName:"p",href:"#configuration"},"section below"),". At this point, Memgraph is ready for you\nto ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/2.0.0/connect-to-memgraph"},"submit queries"),"."),(0,i.kt)("h3",{id:"stopping-memgraph"},"Stopping Memgraph"),(0,i.kt)("p",null,"To shut down the Memgraph server, issue the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"sudo systemctl stop memgraph\n")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The Memgraph configuration is available in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),". If the\nconfiguration file is altered, Memgraph needs to be restarted. To learn about\nall the configuration options, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/2.0.0/reference-guide/configuration"},"Reference\nguide"),"."),(0,i.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"To learn how to query the database, take a look at the\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/connect-to-memgraph"},"Querying"))," guide or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,i.kt)("br",null),"\nVisit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/connect-to-memgraph/methods/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/linux-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if we\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/help-center"},"Getting help"))," page."))}u.isMDXComponent=!0}}]);