"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67535],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=r,h=g["".concat(m,".").concat(u)]||g[u]||c[u]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45262:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return g}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"docker-installation",title:"Install Memgraph Platform on Linux with Docker",sidebar_label:"Install Memgraph Platform (recommended)",slug:"/install-memgraph-on-linux-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},m=void 0,p={unversionedId:"installation/linux/docker-installation",id:"version-2.1.1/installation/linux/docker-installation",title:"Install Memgraph Platform on Linux with Docker",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.1.1/installation/linux/docker-installation.md",sourceDirName:"installation/linux",slug:"/install-memgraph-on-linux-docker",permalink:"/docs/memgraph/install-memgraph-on-linux-docker",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/installation/linux/docker-installation.md",tags:[],version:"2.1.1",frontMatter:{id:"docker-installation",title:"Install Memgraph Platform on Linux with Docker",sidebar_label:"Install Memgraph Platform (recommended)",slug:"/install-memgraph-on-linux-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/connect-to-memgraph"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Install Memgraph Platform",id:"installation-guide",children:[],level:2},{value:"Start Memgraph Platform",id:"starting-memgraph-platform",children:[],level:2},{value:"Stop Memgraph Platform",id:"stopping-memgraph-platform",children:[],level:2},{value:"Configuration file and logs",id:"named-volumes",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2},{value:"Getting help",id:"getting-help",children:[],level:2}],c={toc:s};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\n",(0,o.kt)("strong",{parentName:"p"},"Memgraph")," on Linux with Docker."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Memgraph Platform")," contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memgraph DB")," - the database that holds your data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memgraph Lab")," - visual user interface for running queries and visualizing\ngraph data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mgconsole")," - command-line interface for running queries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Newer versions of Memgraph are currently ",(0,o.kt)("strong",{parentName:"p"},"not backward compatible")," with older\nversions. That is why you won't be able to load storage snapshots between\ndifferent versions."))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Desktop")," - Memgraph Platform can be installed only with Docker.",(0,o.kt)("br",null),"\nInstructions on how to install Docker can be found on the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker\nwebsite"),".")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Memgraph's Docker image was built with ",(0,o.kt)("strong",{parentName:"p"},"Docker version ",(0,o.kt)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions."))),(0,o.kt)("h2",{id:"installation-guide"},"Install Memgraph Platform"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Open a terminal."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Download and load the ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Platform Docker image")," with the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"}," docker pull memgraph/memgraph-platform\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Create a new tag for the image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker image tag memgraph/memgraph-platform memgraph\n")),(0,o.kt)("h2",{id:"starting-memgraph-platform"},"Start Memgraph Platform"),(0,o.kt)("p",null,"To start Memgraph, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,o.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,o.kt)("p",null,"Command-line tool ",(0,o.kt)("strong",{parentName:"p"},"mgconsole")," is open in the terminal, and the visual user\ninterface ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," is available at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,o.kt)("p",null,"User either ",(0,o.kt)("strong",{parentName:"p"},"mgconsole"),", ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," or various ",(0,o.kt)("strong",{parentName:"p"},"drivers")," to ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/connect-to-memgraph"},(0,o.kt)("strong",{parentName:"a"},"connect to\nMemgraph DB")),"."),(0,o.kt)("h2",{id:"stopping-memgraph-platform"},"Stop Memgraph Platform"),(0,o.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_NAME\n")),(0,o.kt)("p",null,"You can find the name of the container (",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running the following command in a new terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,o.kt)("h2",{id:"named-volumes"},"Configuration file and logs"),(0,o.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" \\\n  -v mg_lib:/var/lib/memgraph \\\n  -v mg_log:/var/log/memgraph \\\n  -v mg_etc:/etc/memgraph \\\n  memgraph/memgraph-platform\n')),(0,o.kt)("p",null,"The configuration file is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc")," volume. The exact location of\nthe file depends on your specific setup, but usually it is\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". "),(0,o.kt)("p",null,"The logs will be saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_log")," volume, and the directories can usually be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/"),". "),(0,o.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" memgraph/memgraph-platform\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When working with Memgraph Platform, you should pass configuration flags inside\nof environmental variables."),(0,o.kt)("p",{parentName:"div"},"For example, you can start the Memgraph DB image with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run memgraph\n--bolt-port=7687"),", but you should start Memgraph Platform with ",(0,o.kt)("inlineCode",{parentName:"p"},'docker run -e MEMGRAPH="--bolt-port=7687"\nmemgraph/memgraph-platform'),"."))),(0,o.kt)("p",null,"To learn about all the configuration options, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Reference\nguide"),"."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"If you need more information on working with Docker, check out our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-work-with-docker"},"guide on how\nto work with Docker")),".",(0,o.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph"},"querying"))," guide or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,o.kt)("br",null),"\nVisit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/linux-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if we\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/help-center"},"Help Center"))," page."))}g.isMDXComponent=!0}}]);