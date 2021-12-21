"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94150],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31103:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"wsl-installation",title:"Install Memgraph on Windows with WSL",sidebar_label:"Windows Subsystem for Linux",slug:"/install-memgraph-on-windows-wsl"},s=void 0,p={unversionedId:"installation/windows/wsl-installation",id:"version-2.0.0/installation/windows/wsl-installation",title:"Install Memgraph on Windows with WSL",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.0.0/installation/windows/wsl-installation.md",sourceDirName:"installation/windows",slug:"/install-memgraph-on-windows-wsl",permalink:"/docs/memgraph/2.0.0/install-memgraph-on-windows-wsl",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/installation/windows/wsl-installation.md",tags:[],version:"2.0.0",frontMatter:{id:"wsl-installation",title:"Install Memgraph on Windows with WSL",sidebar_label:"Windows Subsystem for Linux",slug:"/install-memgraph-on-windows-wsl"},sidebar:"version-2.0.0/memgraph",previous:{title:"Docker \ud83d\udc33",permalink:"/docs/memgraph/2.0.0/install-memgraph-on-windows-docker"},next:{title:"Installation troubleshooting",permalink:"/docs/memgraph/2.0.0/windows-installation-troubleshooting"}},m=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation guide",id:"installation-guide",children:[{value:"Configuration",id:"configuration",children:[],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2},{value:"Getting help",id:"getting-help",children:[],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\nMemgraph on Windows with the Windows Subsystem for Linux."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you proceed with the installation guide make sure that you have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloaded the latest ",(0,i.kt)("strong",{parentName:"li"},"Memgraph Debian Package")," which can be ",(0,i.kt)("a",{parentName:"li",href:"https://memgraph.com/download/"},"found\nhere"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Windows Subsystem for Linux")," installed. You can find instructions on how to\ninstall it ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Ubuntu app")," or ",(0,i.kt)("strong",{parentName:"li"},"Debian app")," from the ",(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/p/debian/9msvkqc78pk6?activetab=pivot:overviewtab"},"Microsoft\nStore"),".")),(0,i.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,i.kt)("p",null,"After downloading Memgraph as a Debian package and starting your Debian/Ubuntu\napplication, install Memgraph by running the following command in the Debian\nterminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"sudo dpkg -i /mnt/<drive>/Users/<windows username>/Downloads/memgraph_<version>.deb\n")),(0,i.kt)("p",null,"Start the Memgraph server by issuing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo runuser -l memgraph -c '/usr/lib/memgraph/memgraph'\n")),(0,i.kt)("p",null,"If Memgraph has been installed correctly, you will see something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"You are running Memgraph vX.X.X-community\n")),(0,i.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,i.kt)("a",{parentName:"p",href:"#configuration"},"section below"),". At this point, Memgraph is ready for you\nto ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/2.0.0/connect-to-memgraph"},"submit queries"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Potential installation error You could get errors while installing the package\nwith the above commands if you don't have all of Memgraph's dependencies\ninstalled. The issues mostly look like the following:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"dpkg: error processing package memgraph (--install):\n dependency problems - leaving unconfigured\nErrors were encountered while processing:\n memgraph\n")),(0,i.kt)("p",{parentName:"div"},"To install missing dependencies and finish the installation of the Memgraph\npackage, just issue the following command:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install -f\n")),(0,i.kt)("p",{parentName:"div"},"The above command will install all missing dependencies and will finish\nconfiguring the Memgraph package."))),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The Memgraph configuration is available in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),". If the\nMemgraph configuration is altered, Memgraph needs to be restarted."),(0,i.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"To learn how to query the database, take a look at the\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/connect-to-memgraph"},"Querying"))," guide or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,i.kt)("br",null),"\nVisit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/connect-to-memgraph/methods/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/windows-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see\nif we have already covered the topic. For more information on the installation\nprocess and for additional questions, visit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/help-center"},"Getting help")),"\npage."))}u.isMDXComponent=!0}}]);