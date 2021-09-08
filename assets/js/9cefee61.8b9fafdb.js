"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76506],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11213:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"debian-installation",title:"Install Memgraph for Debian",sidebar_label:"Debian GNU/Linux"},s=void 0,p={unversionedId:"getting-started/installation/debian-installation",id:"version-1.3.0/getting-started/installation/debian-installation",isDocsHomePage:!1,title:"Install Memgraph for Debian",description:"This article briefly outlines the basic steps necessary to install the Memgraph Debian package.",source:"@site/memgraph_versioned_docs/version-1.3.0/getting-started/installation/debian-installation.md",sourceDirName:"getting-started/installation",slug:"/getting-started/installation/debian-installation",permalink:"/memgraph/1.3.0/getting-started/installation/debian-installation",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/getting-started/installation/debian-installation.md",tags:[],version:"1.3.0",frontMatter:{id:"debian-installation",title:"Install Memgraph for Debian",sidebar_label:"Debian GNU/Linux"},sidebar:"version-1.3.0/memgraph",previous:{title:"Docker (Windows, Linux, macOS)",permalink:"/memgraph/1.3.0/getting-started/installation/docker-installation"},next:{title:"RPM package",permalink:"/memgraph/1.3.0/getting-started/installation/rpm-installation"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation guide",id:"installation-guide",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Stopping Memgraph",id:"stopping-memgraph",children:[]}]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],g={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article briefly outlines the basic steps necessary to install the Memgraph Debian package."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you proceed with the installation guide make sure that you have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloaded the latest ",(0,i.kt)("strong",{parentName:"li"},"Memgraph Debian Package")," which can be ",(0,i.kt)("a",{parentName:"li",href:"https://memgraph.com/download/"},"found here"),".")),(0,i.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,i.kt)("p",null,"After downloading Memgraph as a Debian package, install it by running the\nfollowing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dpkg -i /path/to/memgraph_<version>.deb\n")),(0,i.kt)("p",null,"You could get errors while installing the package with the above command if you\ndon't have all of Memgraph's dependencies installed. The issues mostly look\nlike the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dpkg: error processing package memgraph (--install):\n dependency problems - leaving unconfigured\nErrors were encountered while processing:\n memgraph\n")),(0,i.kt)("p",null,"To install missing dependencies and finish the installation of the Memgraph\npackage, just issue the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apt-get install -f\n")),(0,i.kt)("p",null,"The above command will install all missing dependencies and will finish\nconfiguring the Memgraph package."),(0,i.kt)("p",null,"On successful installation, Memgraph should already be running. To\nconfirm it, you can start it explicitly as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl start memgraph\n")),(0,i.kt)("p",null,"To verify that Memgraph is running, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"journalctl --unit memgraph\n")),(0,i.kt)("p",null,"If successful, you should receive an output similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Nov 23 13:40:13 hostname memgraph[14654]: BoltS server is fully armed and operational\nNov 23 13:40:13 hostname memgraph[14654]: BoltS listening on 0.0.0.0 at 7687\n")),(0,i.kt)("p",null,"At this point, Memgraph is ready for you to ",(0,i.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/getting-started/querying"},"submit queries"),"."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The Memgraph configuration is available in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),".\nIf the Memgraph configuration is altered, Memgraph needs to be restarted."),(0,i.kt)("h3",{id:"stopping-memgraph"},"Stopping Memgraph"),(0,i.kt)("p",null,"To shut down the Memgraph server, issue the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl stop memgraph\n")),(0,i.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"To learn how to query the database, take a look at the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/querying"},"Querying"))," guide or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive tutorials.",(0,i.kt)("br",null),"\nVisit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/connecting-applications"},"Building applications"))," page if you need to\nconnect to the database programmatically."),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}c.isMDXComponent=!0}}]);