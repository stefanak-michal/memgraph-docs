(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{326:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||b[d]||r;return n?i.a.createElement(u,s(s({ref:t},c),{},{components:n})):i.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(326)),o={id:"wsl-installation",title:"Install Memgraph with WSL",sidebar_label:"Windows Subsystem for Linux"},s={unversionedId:"getting-started/installation/wsl-installation",id:"version-1.4.0/getting-started/installation/wsl-installation",isDocsHomePage:!1,title:"Install Memgraph with WSL",description:"This article briefly outlines the basic steps necessary to install the Memgraph Debian package on Windows Subsystem for Linux.",source:"@site/memgraph_versioned_docs/version-1.4.0/getting-started/installation/wsl-installation.md",slug:"/getting-started/installation/wsl-installation",permalink:"/memgraph/getting-started/installation/wsl-installation",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/getting-started/installation/wsl-installation.md",version:"1.4.0",sidebar_label:"Windows Subsystem for Linux",sidebar:"version-1.4.0/memgraph",previous:{title:"Install Memgraph with Docker",permalink:"/memgraph/getting-started/installation/docker-installation"},next:{title:"Install Memgraph for Debian",permalink:"/memgraph/getting-started/installation/debian-installation"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation guide",id:"installation-guide",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This article briefly outlines the basic steps necessary to install the Memgraph Debian package on Windows Subsystem for Linux."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"Before you proceed with the installation guide make sure that you have:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Downloaded the latest ",Object(r.b)("strong",{parentName:"li"},"Memgraph Debian Package")," which can be ",Object(r.b)("a",{parentName:"li",href:"https://memgraph.com/download/"},"found here"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Windows Subsystem for Linux")," installed. You can find instructions on how to install it ",Object(r.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"here"),"."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("strong",{parentName:"li"},"Debian app")," from the ",Object(r.b)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/p/debian/9msvkqc78pk6?activetab=pivot:overviewtab"},"Microsoft Store"),".")),Object(r.b)("h2",{id:"installation-guide"},"Installation guide"),Object(r.b)("p",null,"After downloading Memgraph as a Debian package and starting your Debian app, install Memgraph by running the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"sudo dpkg -i /path/to/memgraph_<version>.deb\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Where is the download directory?")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Usually, you can find the download directory in this location ",Object(r.b)("inlineCode",{parentName:"p"},"/mnt/<drive>/Users/<username>")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Why use sudo?")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"In order to perform some actions on your operating system like installing new software, you may need ",Object(r.b)("strong",{parentName:"p"},"superuser")," privileges (commonly called ",Object(r.b)("strong",{parentName:"p"},"root"),").\xa0"))),Object(r.b)("p",null,"Normally, you would start Memgraph using ",Object(r.b)("inlineCode",{parentName:"p"},"systemd"),", but unfortunately, this is not an option in WSL.\nWe can bypass this inconvenience by using the command ",Object(r.b)("inlineCode",{parentName:"p"},"runuser")," which allows us to run commands with a substitute user and group ID."),Object(r.b)("p",null,"Start the Memgraph server by issuing the following command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"sudo runuser -l memgraph -c '/usr/lib/memgraph/memgraph'\n")),Object(r.b)("p",null,"If Memgraph has been installed correctly, you will see something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"You are running Memgraph v1.4.0-community\n")),Object(r.b)("p",null,"At this point, Memgraph is ready for you to ",Object(r.b)("a",{parentName:"p",href:"/memgraph/getting-started/querying/querying"},"submit queries"),"."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Potential installation error")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You could get errors while installing the package with the above commands if you\ndon't have all of Memgraph's dependencies installed. The issues mostly look\nlike the following:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre"},"dpkg: error processing package memgraph (--install):\n dependency problems - leaving unconfigured\nErrors were encountered while processing:\n memgraph\n")),Object(r.b)("p",{parentName:"div"},"To install missing dependencies and finish the installation of the Memgraph\npackage, just issue the following command:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre"},"sudo apt-get install -f\n")),Object(r.b)("p",{parentName:"div"},"The above command will install all missing dependencies and will finish\nconfiguring the Memgraph package."))),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"The Memgraph configuration is available in ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),".\nIf the Memgraph configuration is altered, Memgraph needs to be restarted."),Object(r.b)("h2",{id:"where-to-next"},"Where to next?"),Object(r.b)("p",null,"To learn how to query the database, take a look at the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"/memgraph/getting-started/querying/querying"},"Querying"))," guide or ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive tutorials.",Object(r.b)("br",null),"\nVisit the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"/memgraph/getting-started/connecting-applications"},"Building applications"))," page if you need to\nconnect to the database programmatically."),Object(r.b)("h2",{id:"getting-help"},"Getting help"),Object(r.b)("p",null,"Visit the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"/memgraph/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}p.isMDXComponent=!0}}]);