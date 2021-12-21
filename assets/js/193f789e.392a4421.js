"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18278],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(t),d=r,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(87462),r=t(67294),o=t(72389),i=t(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(63616),m=t(86010),u="tabItem_1uMI";function p(e){var n,t,o,i=e.lazy,p=e.block,c=e.defaultValue,d=e.values,h=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,s.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(n=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),w=N.tabGroupChoices,y=N.setTabGroupChoices,x=(0,r.useState)(b),M=x[0],D=x[1],T=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=w[h];null!=O&&O!==M&&v.some((function(e){return e.value===O}))&&D(O)}var E=function(e){var n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==M&&(C(n),D(a),null!=h&&y(h,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":p},g)},v.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:M===n?0:-1,"aria-selected":M===n,key:n,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:E,onClick:E},o,{className:(0,m.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":M===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===M}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==M})}))))}function c(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},5050:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=t(26396),l=t(58215),s=["components"],m={id:"docker-installation",title:"Install Memgraph on Linux with Docker",sidebar_label:"Docker \ud83d\udc33",slug:"/install-memgraph-on-linux-docker"},u=void 0,p={unversionedId:"installation/linux/docker-installation",id:"version-2.0.0/installation/linux/docker-installation",title:"Install Memgraph on Linux with Docker",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.0.0/installation/linux/docker-installation.md",sourceDirName:"installation/linux",slug:"/install-memgraph-on-linux-docker",permalink:"/docs/memgraph/2.0.0/install-memgraph-on-linux-docker",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/installation/linux/docker-installation.md",tags:[],version:"2.0.0",frontMatter:{id:"docker-installation",title:"Install Memgraph on Linux with Docker",sidebar_label:"Docker \ud83d\udc33",slug:"/install-memgraph-on-linux-docker"},sidebar:"version-2.0.0/memgraph",previous:{title:"Installation troubleshooting",permalink:"/docs/memgraph/2.0.0/macos-installation-troubleshooting"},next:{title:"Ubuntu",permalink:"/docs/memgraph/2.0.0/install-memgraph-on-ubuntu"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Installation guide",id:"installation-guide",children:[],level:2},{value:"Starting Memgraph",id:"starting-memgraph",children:[],level:2},{value:"Stopping Memgraph",id:"stopping-memgraph",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Named volumes",id:"named-volumes",children:[{value:"Accessing configuration files and logs",id:"accessing-configuration-files-and-logs",children:[],level:3},{value:"Reusing volumes between Memgraph versions",id:"reusing-volumes-between-memgraph-versions",children:[],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2},{value:"Getting help",id:"getting-help",children:[],level:2}],d={toc:c};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\nMemgraph on Linux with Docker."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you proceed with the installation guide, make sure that you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installed ",(0,o.kt)("strong",{parentName:"li"},"Docker"),". Instructions on how to install Docker can be found on\nthe ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),".")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Memgraph's Docker image was built with ",(0,o.kt)("strong",{parentName:"p"},"Docker version ",(0,o.kt)("inlineCode",{parentName:"strong"},"1.12"))," and\nshould be compatible with all newer versions."))),(0,o.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,o.kt)("p",null,"You can either manually download the Memgraph Docker image or use the convenient\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker pull memgraph/memgraph-platform")," command, which we recommend."),(0,o.kt)(i.Z,{groupId:"docker-method",defaultValue:"pull",values:[{label:"Pull Docker image",value:"pull"},{label:"Download Docker image manually",value:"download"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"pull",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and load the ",(0,o.kt)("strong",{parentName:"li"},"Memgraph Docker image")," with the following command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"}," docker pull memgraph/memgraph-platform\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create a new tag for the image so it can be called as ",(0,o.kt)("inlineCode",{parentName:"li"},"memgraph")," instead of\n",(0,o.kt)("inlineCode",{parentName:"li"},"memgraph/memgraph-platform"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker image tag memgraph/memgraph-platform memgraph\n"))),(0,o.kt)(l.Z,{value:"download",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the latest ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Docker image")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download/"},"official download\ncenter"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you installed Docker correctly, you can import the image using the\nfollowing command:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker load -i /path-to/memgraph-<version>-docker.tar.gz\n")))),(0,o.kt)("h2",{id:"starting-memgraph"},"Starting Memgraph"),(0,o.kt)("p",null,"To start Memgraph, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 memgraph\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docker Volumes")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Docker containers don\u2019t persist data by default (all changes are lost when the\ncontainer is stopped). You need to use local volumes to store the data\npermanently, which is why Memgraph is started with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," flag."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph\n")),(0,o.kt)("p",{parentName:"div"},"More information on Docker Volumes can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"here"),"."))),(0,o.kt)("p",null,"If successful, you should see a message similar to the following :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,o.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"section below"),". At this point, Memgraph is ready for you\nto ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.0.0/connect-to-memgraph"},"submit queries"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The username and password for connecting to the database are empty by default."))),(0,o.kt)("h2",{id:"stopping-memgraph"},"Stopping Memgraph"),(0,o.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_NAME\n")),(0,o.kt)("p",null,"You can find the name of the container (",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The Memgraph configuration is available in Docker's named volume ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc"),". On\nLinux systems, it should be in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". Keep in mind that this way\nof specifying configuration options is only valid if Memgraph was started ",(0,o.kt)("a",{parentName:"p",href:"#named-volumes"},"using\nvolumes"),"."),(0,o.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" memgraph\n')),(0,o.kt)("p",null,"To learn about all the configuration options, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.0.0/reference-guide/configuration"},"Reference\nguide"),"."),(0,o.kt)("h2",{id:"named-volumes"},"Named volumes"),(0,o.kt)("h3",{id:"accessing-configuration-files-and-logs"},"Accessing configuration files and logs"),(0,o.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" \\\n  -v mg_lib:/var/lib/memgraph \\\n  -v mg_log:/var/log/memgraph \\\n  -v mg_etc:/etc/memgraph \\\n  memgraph\n')),(0,o.kt)("p",null,"The volume ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc")," contains the configuration file while the logs will be saved\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_log"),". The location of the volume directories depends on your specific\nsetup but can usually be found in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/"),"."),(0,o.kt)("h3",{id:"reusing-volumes-between-memgraph-versions"},"Reusing volumes between Memgraph versions"),(0,o.kt)("p",null,"If it happens that the named volumes are reused between different Memgraph\nversions, Docker will overwrite a folder within the container with existing data\nfrom the host machine. If a new file is introduced, or two versions of Memgraph\nare not compatible, some features might not work, or Memgraph might not be able\nto work correctly. We strongly advise you to use different named volumes for\ndifferent Memgraph versions or to remove the existing volume from the host with\nthe following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker volume rm <volume_name>\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"If you need more information on working with Docker, check out ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/how-to-work-with-docker"},"this\nguide")),".",(0,o.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/connect-to-memgraph"},"Querying"))," guide or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,o.kt)("br",null),"\nVisit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/connect-to-memgraph/methods/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/linux-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if we\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/help-center"},"Getting help"))," page."))}h.isMDXComponent=!0}}]);