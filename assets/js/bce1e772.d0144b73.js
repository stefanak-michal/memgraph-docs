"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7931],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82111:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"docker-installation",title:"Install Memgraph with Docker",sidebar_label:"Docker (Windows, Linux, macOS)"},s=void 0,p={unversionedId:"getting-started/installation/docker-installation",id:"version-1.3.0/getting-started/installation/docker-installation",isDocsHomePage:!1,title:"Install Memgraph with Docker",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-1.3.0/getting-started/installation/docker-installation.md",sourceDirName:"getting-started/installation",slug:"/getting-started/installation/docker-installation",permalink:"/memgraph/1.3.0/getting-started/installation/docker-installation",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/getting-started/installation/docker-installation.md",tags:[],version:"1.3.0",frontMatter:{id:"docker-installation",title:"Install Memgraph with Docker",sidebar_label:"Docker (Windows, Linux, macOS)"},sidebar:"version-1.3.0/memgraph",previous:{title:"Installation overview",permalink:"/memgraph/1.3.0/getting-started/installation"},next:{title:"Debian GNU/Linux",permalink:"/memgraph/1.3.0/getting-started/installation/debian-installation"}},m=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation guide",id:"installation-guide",children:[{value:"Stopping the database instance",id:"stopping-the-database-instance",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Named volumes",id:"named-volumes",children:[]},{value:"Note for Docker users",id:"note-for-docker-users",children:[]}]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\nMemgraph with Docker."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you proceed with the installation guide make sure that you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installed ",(0,o.kt)("strong",{parentName:"li"},"Docker"),". Instructions on how to do this can be found on the\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),"."),(0,o.kt)("li",{parentName:"ul"},"Downloaded the latest ",(0,o.kt)("strong",{parentName:"li"},"Memgraph Docker Image")," which can be ",(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/download/"},"found here"),".")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Memgraph's Docker image was built with ",(0,o.kt)("strong",{parentName:"p"},"Docker version ",(0,o.kt)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions."))),(0,o.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,o.kt)("p",null,"If you installed Docker and downloaded the latest Memgraph  Docker image, import the\nimage using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker load -i /path/to/memgraph-<version>-docker.tar.gz\n")),(0,o.kt)("p",null,"To start Memgraph, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -p 7687:7687 memgraph\n")),(0,o.kt)("p",null,"If successful, you should see a message similar to the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"You are running Memgraph v1.3.0-community\n")),(0,o.kt)("p",null,"At this point, Memgraph is ready for you to ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/getting-started/querying"},"submit queries"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The username and password for connecting to the database are empty by default."))),(0,o.kt)("h3",{id:"stopping-the-database-instance"},"Stopping the database instance"),(0,o.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop CONTAINER_NAME\n")),(0,o.kt)("p",null,"You can find the name of the container (",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The Memgraph configuration is available in Docker's named volume ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc"),". On\nLinux systems, it should be in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),"."),(0,o.kt)("h3",{id:"named-volumes"},"Named volumes"),(0,o.kt)("p",null,"If it happens that the named volumes are reused between different Memgraph\nversions, Docker will overwrite a folder within the container with existing\ndata from the host machine. If a new file is introduced, or two versions of\nMemgraph are not compatible, some features might not work or Memgraph might\nnot be able to work correctly. We strongly advise you to use different\nnamed volumes for different Memgraph versions, or to remove the existing volume\nfrom the host with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker volume rm <volume_name>\n")),(0,o.kt)("h3",{id:"note-for-docker-users"},"Note for Docker users"),(0,o.kt)("p",null,"Although unlikely, some OS X/macOS users might experience minor difficulties\nafter the Docker installation. Instead of running on\n",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", a Docker container for Memgraph may be running on a custom IP\naddress. Fortunately, that IP address can be found as follows:"),(0,o.kt)("p",null,"1) Determine the container ID of the Memgraph container"),(0,o.kt)("p",null,"By issuing the command ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," the user should get an output similar to the\nfollowing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE               COMMAND                  CREATED        ...\n9397623cd87e        memgraph            "/usr/lib/memgraph/m\u2026"   2 seconds ago  ...\n')),(0,o.kt)("p",null,"At this point, it is important to remember the container ID of the Memgraph\nimage.  In our case, that is ",(0,o.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),"."),(0,o.kt)("p",null,"2) Use the container ID to retrieve an IP of the container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n")),(0,o.kt)("p",null,"The command above should yield the IP that should be used when\nconnecting to Memgraph and instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," when firing up the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_client"),"\nwith Docker, as described in the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/getting-started/querying"},"querying")," section."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"If you need more information on working with Docker, check out ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/database-functionalities/work-with-docker"},"this guide")),".",(0,o.kt)("br",null),"\nTo learn how to query the database, take a look at the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/querying"},"Querying"))," guide or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive tutorials.",(0,o.kt)("br",null),"\nVisit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/connecting-applications"},"Building applications"))," page if you need to\nconnect to the database programmatically. "),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}c.isMDXComponent=!0}}]);