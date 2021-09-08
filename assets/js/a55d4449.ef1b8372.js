"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24290],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){var o=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(67294),r=t(79443);var a=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var n,t=e.lazy,r=e.block,u=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=o.Children.toArray(e.children),h=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(n=d.find((function(e){return e.props.default})))?void 0:n.props.value,f=a(),k=f.tabGroupChoices,w=f.setTabGroupChoices,b=(0,o.useState)(g),y=b[0],v=b[1],N=[];if(null!=p){var C=k[p];null!=C&&C!==y&&h.some((function(e){return e.value===C}))&&v(C)}var T=function(e){var n=e.currentTarget,t=N.indexOf(n),o=h[t].value;v(o),null!=p&&(w(p,o),setTimeout((function(){var e,t,o,r,a,i,l,u;(e=n.getBoundingClientRect(),t=e.top,o=e.left,r=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,t>=0&&a<=u&&r<=l&&o>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=N.indexOf(e.target)+1;t=N[o]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;t=N[r]||N[N.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},h.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:T,onClick:T},null!=t?t:n)}))),t?(0,o.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},d.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},79443:function(e,n,t){var o=(0,t(67294).createContext)(void 0);n.Z=o},9375:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=t(55064),l=t(58215),s=["components"],u={id:"windows-installation-troubleshooting",title:"Troubleshooting installation on Windows",sidebar_label:"Installation troubleshooting",slug:"/windows-installation-troubleshooting"},c=void 0,p={unversionedId:"installation/windows/windows-installation-troubleshooting",id:"version-1.5.0/installation/windows/windows-installation-troubleshooting",isDocsHomePage:!1,title:"Troubleshooting installation on Windows",description:"<Tabs",source:"@site/memgraph_versioned_docs/version-1.5.0/installation/windows/windows-installation-troubleshooting.md",sourceDirName:"installation/windows",slug:"/windows-installation-troubleshooting",permalink:"/memgraph/1.5.0/windows-installation-troubleshooting",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/installation/windows/windows-installation-troubleshooting.md",tags:[],version:"1.5.0",frontMatter:{id:"windows-installation-troubleshooting",title:"Troubleshooting installation on Windows",sidebar_label:"Installation troubleshooting",slug:"/windows-installation-troubleshooting"},sidebar:"version-1.5.0/memgraph",previous:{title:"Windows Subsystem for Linux",permalink:"/memgraph/1.5.0/install-memgraph-on-windows-wsl"},next:{title:"Tutorials overview",permalink:"/memgraph/1.5.0/tutorials/tutorials"}},m=[{value:"Issues when connecting to Memgraph",id:"issues-when-connecting-to-memgraph",children:[]},{value:"Issues with connecting <strong>mgconsole</strong> to the database",id:"issues-with-connecting-mgconsole-to-the-database",children:[]},{value:"Find the IP address of a Docker Container",id:"find-the-ip-address-of-a-docker-container",children:[]},{value:"Accessing files from your Windows system",id:"accessing-files-from-your-windows-system",children:[]},{value:"Unable to install the Memgraph package with <code>dpkg</code>",id:"unable-to-install-the-memgraph-package-with-dpkg",children:[]},{value:"Multiple notes when starting Memgraph",id:"multiple-notes-when-starting-memgraph",children:[]}],d={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{groupId:"operating-systems",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Windows Subsystem for Linux (WSL)",value:"wsl"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("h2",{id:"issues-when-connecting-to-memgraph"},"Issues when connecting to Memgraph"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run memgraph\n")),(0,a.kt)("p",null,"While this command will start a Memgraph instance, not publishing the port will\ncause problems when trying to connect to the database via ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Lab")," or\n",(0,a.kt)("strong",{parentName:"p"},"mgconsole"),". To avoid this, you should publish the\ncontainer's port to the host using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," flag and by specifying the port:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 memgraph\n")),(0,a.kt)("h2",{id:"issues-with-connecting-mgconsole-to-the-database"},"Issues with connecting ",(0,a.kt)("strong",{parentName:"h2"},"mgconsole")," to the database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph --host HOST --use-ssl=False\n")),(0,a.kt)("p",null,"Although unlikely, sometimes there are issues with connecting ",(0,a.kt)("strong",{parentName:"p"},"mgconsole")," to\nthe Docker Container\u2019s IP address because it is running on a custom IP rather\nthan ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),". This problem is most often accompanied with the following\nerror:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Connection failure: Couldn't connect to 127.0.0.1:7687!\n")),(0,a.kt)("p",null,"To fix this issue, just replace ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," from the first command with\n",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal"),". To find out more about networking in Docker, take a\nlook at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/networking/"},"this guide"),"."),(0,a.kt)("h2",{id:"find-the-ip-address-of-a-docker-container"},"Find the IP address of a Docker Container"),(0,a.kt)("p",null,"Although unlikely, some users might experience minor difficulties after the\nDocker installation. Instead of running on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),", a Docker container for\nMemgraph may be running on a custom IP address. Fortunately, that IP address can\nbe found as follows:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Determine the ID of the Memgraph Container by issuing the\ncommand ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps"),". The user should get an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'CONTAINER ID    IMAGE       COMMAND                  CREATED\n9397623cd87e    memgraph    "/usr/lib/memgraph/m\u2026"   2 seconds ago\n')),(0,a.kt)("p",null,"At this point, it is important to remember the container ID of the Memgraph\nImage. In our case, that is ",(0,a.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Use the this ID to retrieve the IP address of the Container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n")),(0,a.kt)("p",null,"The command above will yield the IP address that should be used when connecting\nto Memgraph via ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Lab")," or ",(0,a.kt)("strong",{parentName:"p"},"mgconsole")," as described in\nthe ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/getting-started/querying"},"querying")," section. Just replace\n",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," from the following command with the appropriate IP address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph --host HOST --use-ssl=False\n"))),(0,a.kt)(l.Z,{value:"wsl",mdxType:"TabItem"},(0,a.kt)("h2",{id:"accessing-files-from-your-windows-system"},"Accessing files from your Windows system"),(0,a.kt)("p",null,"Usually, you can find the Windows users directories in this location:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/mnt/<drive>/Users/<username>\n")),(0,a.kt)("h2",{id:"unable-to-install-the-memgraph-package-with-dpkg"},"Unable to install the Memgraph package with ",(0,a.kt)("inlineCode",{parentName:"h2"},"dpkg")),(0,a.kt)("p",null,"While running the following ",(0,a.kt)("inlineCode",{parentName:"p"},"dpkg")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dpkg -i /path/to/memgraph_<version>.deb\n")),(0,a.kt)("p",null,"you may encounter errors that resemble the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"dpkg: error processing package memgraph (--install): dependency problems -\nleaving unconfigured Errors were encountered while processing: memgraph\n")),(0,a.kt)("p",null,"These errors indicate that you don\u2019t have all of the necessary dependencies\ninstalled. To install the missing dependencies and finish the installation,\nissue the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get install -f\n")),(0,a.kt)("h2",{id:"multiple-notes-when-starting-memgraph"},"Multiple notes when starting Memgraph"),(0,a.kt)("p",null,"When you start a Memgraph instance, you may see the following list of notes in\nyour terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph v1.4.0-community\n\nNOTE: Please install networkx to be able to use graph_analyzer module. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use Memgraph NetworkX wrappers. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx, numpy, scipy to be able to use proxied NetworkX algorithms. E.g., CALL nxalg.pagerank(...).\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use wcc module.\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n")),(0,a.kt)("p",null,"If you wish to work with built-in NetworkX modules in Memgraph, you need to\ninstall the following Python libraries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://numpy.org/"},"NumPy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.scipy.org/"},"SciPy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://networkx.org/"},"NetworkX"))),(0,a.kt)("p",null,"For more information on how to install Python libraries in WSL, follow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/python/web-frameworks#install-python-pip-and-venv"},"this\nguide"),".\nIf you are not interested in working with query modules that depend on these\nlibraries, you can ignore the warnings."))))}h.isMDXComponent=!0},86010:function(e,n,t){function o(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);