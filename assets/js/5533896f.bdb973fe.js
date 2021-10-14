"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26204],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(67294),o=n(79443);var r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var m=function(e){var t,n=e.lazy,o=e.block,m=e.defaultValue,p=e.values,c=e.groupId,u=e.className,d=a.Children.toArray(e.children),h=null!=p?p:d.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=m?m:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,f=r(),k=f.tabGroupChoices,v=f.setTabGroupChoices,w=(0,a.useState)(g),N=w[0],b=w[1],y=[];if(null!=c){var M=k[c];null!=M&&M!==N&&h.some((function(e){return e.value===M}))&&b(M)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),a=h[n].value;b(a),null!=c&&(v(c,a),setTimeout((function(){var e,n,a,o,r,i,l,m;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,i=window,l=i.innerHeight,m=i.innerWidth,n>=0&&r<=m&&o<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},u)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:D,onFocus:C,onClick:C},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},4792:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],m={id:"docker-installation",title:"Install Memgraph on Windows with Docker",sidebar_label:"Docker \ud83d\udc33",slug:"/install-memgraph-on-windows-docker"},p=void 0,c={unversionedId:"installation/windows/docker-installation",id:"version-2.0.1/installation/windows/docker-installation",isDocsHomePage:!1,title:"Install Memgraph on Windows with Docker",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.0.1/installation/windows/docker-installation.md",sourceDirName:"installation/windows",slug:"/install-memgraph-on-windows-docker",permalink:"/docs/memgraph/install-memgraph-on-windows-docker",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.1/installation/windows/docker-installation.md",tags:[],version:"2.0.1",frontMatter:{id:"docker-installation",title:"Install Memgraph on Windows with Docker",sidebar_label:"Docker \ud83d\udc33",slug:"/install-memgraph-on-windows-docker"},sidebar:"version-2.0.1/memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/installation"},next:{title:"Windows Subsystem for Linux",permalink:"/docs/memgraph/install-memgraph-on-windows-wsl"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation guide",id:"installation-guide",children:[]},{value:"Starting Memgraph",id:"starting-memgraph",children:[]},{value:"Stopping Memgraph",id:"stopping-memgraph",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Named volumes",id:"named-volumes",children:[{value:"Accessing configuration files and logs",id:"accessing-configuration-files-and-logs",children:[]},{value:"Reusing volumes between Memgraph versions",id:"reusing-volumes-between-memgraph-versions",children:[]}]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\nMemgraph on Windows with Docker."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you proceed with the installation guide make sure that you have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installed ",(0,r.kt)("strong",{parentName:"li"},"Windows Subsystem for Linux (WSL)"),". For detailed instructions, refer to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Microsoft documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"Installed ",(0,r.kt)("strong",{parentName:"li"},"Docker Desktop"),". Instructions on how to install Docker can be found on the\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),".")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Memgraph's Docker image was built with ",(0,r.kt)("strong",{parentName:"p"},"Docker version ",(0,r.kt)("inlineCode",{parentName:"strong"},"1.12"))," and\nshould be compatible with all newer versions."))),(0,r.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,r.kt)("p",null,"You can either manually download the ",(0,r.kt)("a",{parentName:"p",href:"https://download.memgraph.com/memgraph/v1.6.1/docker/memgraph-1.6.1-community-docker.tar.gz"},"Memgraph Docker image")," or use the convenient\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker pull memgraph/memgraph-platform")," command, which we recommend."),(0,r.kt)(i.Z,{groupId:"docker-method",defaultValue:"pull",values:[{label:"Pull Docker image",value:"pull"},{label:"Download Docker image manually",value:"download"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"pull",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download and load the ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Docker image")," with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"}," docker pull memgraph/memgraph-platform\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Create a new tag for the image so it can be called as ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph")," instead of\n",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker image tag memgraph/memgraph-platform memgraph\n"))),(0,r.kt)(l.Z,{value:"download",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download the latest ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Docker image")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download/"},"official download\ncenter"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," If you installed Docker correctly, you can import the image using the\nfollowing command in the ",(0,r.kt)("strong",{parentName:"p"},"Comand Prompt (CMD)")," or ",(0,r.kt)("strong",{parentName:"p"},"PowerShell"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker load -i /path-to/memgraph-<version>-docker.tar.gz\n")))),(0,r.kt)("h2",{id:"starting-memgraph"},"Starting Memgraph"),(0,r.kt)("p",null,"To start Memgraph, use the following command in the ",(0,r.kt)("strong",{parentName:"p"},"Comand Prompt (CMD)")," or\n",(0,r.kt)("strong",{parentName:"p"},"PowerShell"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 memgraph\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docker Volumes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Docker containers don\u2019t persist data by default (all changes are lost when the\ncontainer is stopped). You need to use local volumes to store the data\npermanently, which is why Memgraph is started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," flag."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph`\n")),(0,r.kt)("p",{parentName:"div"},"More information on Docker Volumes can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"here"),"."))),(0,r.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,r.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"section below"),". At this point, Memgraph is ready for you to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/connect-to-memgraph"},"submit Cypher\nqueries"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The username and password for connecting to the database are empty by default."))),(0,r.kt)("h2",{id:"stopping-memgraph"},"Stopping Memgraph"),(0,r.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_NAME\n")),(0,r.kt)("p",null,"You can find the name of the container (",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The Memgraph configuration is available in Docker's named volume ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_etc"),". On\nLinux systems, it should be in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". Keep in mind that this way\nof specifying configuration options is only valid if Memgraph was started ",(0,r.kt)("a",{parentName:"p",href:"#named-volumes"},"using\nvolumes"),"."),(0,r.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" memgraph\n')),(0,r.kt)("p",null,"To learn about all the configuration options, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Reference\nguide"),"."),(0,r.kt)("h2",{id:"named-volumes"},"Named volumes"),(0,r.kt)("h3",{id:"accessing-configuration-files-and-logs"},"Accessing configuration files and logs"),(0,r.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph through ",(0,r.kt)("strong",{parentName:"p"},"PowerShell"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" `\n  -v mg_lib:/var/lib/memgraph `\n  -v mg_log:/var/log/memgraph `\n  -v mg_etc:/etc/memgraph `\n  memgraph\n')),(0,r.kt)("p",null,"The volume ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_etc")," contains the configuration file while the logs will be saved\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_log"),". The location of the volume directories depends on your specific\nsetup but can usually be found in\n",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\docker-desktop-data\\version-pack-data\\community\\docker\\volumes\\"),"."),(0,r.kt)("h3",{id:"reusing-volumes-between-memgraph-versions"},"Reusing volumes between Memgraph versions"),(0,r.kt)("p",null,"If it happens that the named volumes are reused between different Memgraph\nversions, Docker will overwrite a folder within the container with existing data\nfrom the host machine. If a new file is introduced, or two versions of Memgraph\nare not compatible, some features might not work, or Memgraph might not be able\nto work correctly. We strongly advise you to use different named volumes for\ndifferent Memgraph versions or to remove the existing volume from the host with\nthe following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker volume rm <volume_name>\n")),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"If you need more information on working with Docker, check out ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-work-with-docker"},"this\nguide")),".",(0,r.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph"},"Querying"))," guide or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,r.kt)("br",null),"\nVisit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph/methods/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/windows-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if we\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/help-center"},"Getting help"))," page."))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);