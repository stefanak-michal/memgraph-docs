"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40369],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21600:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"wsl-installation",title:"Install Memgraph DB on Windows with WSL",sidebar_label:"Windows Subsystem for Linux",slug:"/install-memgraph-on-windows-wsl",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},s=void 0,p={unversionedId:"installation/windows/wsl-installation",id:"installation/windows/wsl-installation",title:"Install Memgraph DB on Windows with WSL",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/docs/installation/windows/wsl-installation.md",sourceDirName:"installation/windows",slug:"/install-memgraph-on-windows-wsl",permalink:"/docs/memgraph/next/install-memgraph-on-windows-wsl",editUrl:"https://github.com/memgraph/docs/tree/master/docs/installation/windows/wsl-installation.md",tags:[],version:"current",frontMatter:{id:"wsl-installation",title:"Install Memgraph DB on Windows with WSL",sidebar_label:"Windows Subsystem for Linux",slug:"/install-memgraph-on-windows-wsl",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/next/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/next/connect-to-memgraph"}},m={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation guide",id:"installation-guide",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Where to next?",id:"where-to-next",level:2},{value:"Getting help",id:"getting-help",level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\nMemgraph on Windows with the Windows Subsystem for Linux."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Newer versions of Memgraph are currently ",(0,o.kt)("strong",{parentName:"p"},"not backward compatible")," with older\nversions. That is why you won't be able to load storage snapshots between\ndifferent versions."))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you proceed with the installation guide make sure that you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The latest ",(0,o.kt)("strong",{parentName:"li"},"Memgraph Ubuntu package")," which can be downloaded from the\n",(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/download/"},"Memgraph download hub"),"."),(0,o.kt)("li",{parentName:"ul"},"Installed ",(0,o.kt)("strong",{parentName:"li"},"Windows Subsystem for Linux (WSL)"),". For detailed instructions,\nrefer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"Microsoft\ndocumentation"),".")),(0,o.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Start WSL by running the following command from ",(0,o.kt)("strong",{parentName:"p"},"PowerShell"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"wsl\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Install Memgraph DB using the latest Memgraph Ubuntu package and by running the\nfollowing command in the Ubuntu terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo dpkg -i /mnt/<drive>/Users/<windows username>/Downloads/memgraph_<version>.deb\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Start the Memgraph server by issuing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo runuser -l memgraph -c '/usr/lib/memgraph/memgraph'\n")),(0,o.kt)("p",null,"If successful, you should receive an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You are running Memgraph vX.X.X\n")),(0,o.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"Configuration section"),".",(0,o.kt)("br",null),"\nAt this point, Memgraph is ready for you\nto ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/connect-to-memgraph"},"submit queries"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Potential installation error You could get errors while installing the package\nwith the above commands if you don't have all of Memgraph's dependencies\ninstalled. The issues mostly look like the following:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"dpkg: error processing package memgraph (--install):\n dependency problems - leaving unconfigured\nErrors were encountered while processing:\n memgraph\n")),(0,o.kt)("p",{parentName:"div"},"To install missing dependencies and finish the installation of the Memgraph\npackage, just issue the following command:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install -f\n")),(0,o.kt)("p",{parentName:"div"},"The above command will install all missing dependencies and will finish\nconfiguring the Memgraph package."))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The Memgraph configuration file is available at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),". If the\nconfiguration file is altered, Memgraph needs to be restarted. "),(0,o.kt)("p",null,"To learn about\nall the configuration options, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/configuration"},"Reference\nguide"),"."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn how to query the database, take a look at the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/connect-to-memgraph"},"querying"))," guide or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,o.kt)("br",null),"\nVisit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/connect-to-memgraph/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/windows-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see\nif we have already covered the topic. For more information on the installation\nprocess and for additional questions, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/help-center"},"Help Center")),"\npage."))}d.isMDXComponent=!0}}]);