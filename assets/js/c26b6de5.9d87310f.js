(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22198],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return t?r.createElement(d,i(i({ref:n},c),{},{components:t})):r.createElement(d,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){"use strict";var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},55064:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(67294),a=t(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,p=e.values,m=e.groupId,h=e.className,d=o(),g=d.tabGroupChoices,f=d.setTabGroupChoices,k=(0,r.useState)(a),b=k[0],y=k[1],v=r.Children.toArray(e.children),w=[];if(null!=m){var N=g[m];null!=N&&N!==b&&p.some((function(e){return e.value===N}))&&y(N)}var x=function(e){var n=e.currentTarget,t=w.indexOf(n),r=p[t].value;y(r),null!=m&&(f(m,r),setTimeout((function(){var e,t,r,a,o,i,l,u;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,t>=0&&o<=u&&a<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},C=function(e){var n,t;switch(e.keyCode){case c:var r=w.indexOf(e.target)+1;t=w[r]||w[0];break;case u:var a=w.indexOf(e.target)-1;t=w[a]||w[w.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},h)},p.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":b===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},t)}))),n?(0,r.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},79443:function(e,n,t){"use strict";var r=(0,t(67294).createContext)(void 0);n.Z=r},51491:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i=t(55064),l=t(58215),s=["components"],u={id:"linux-installation-troubleshooting",title:"Troubleshooting installation on Linux",sidebar_label:"Installation troubleshooting",slug:"/linux-installation-troubleshooting"},c=void 0,p={unversionedId:"installation/linux/linux-installation-troubleshooting",id:"version-1.6.1/installation/linux/linux-installation-troubleshooting",isDocsHomePage:!1,title:"Troubleshooting installation on Linux",description:"<Tabs",source:"@site/memgraph_versioned_docs/version-1.6.1/installation/linux/linux-installation-troubleshooting.md",sourceDirName:"installation/linux",slug:"/linux-installation-troubleshooting",permalink:"/memgraph/linux-installation-troubleshooting",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/installation/linux/linux-installation-troubleshooting.md",version:"1.6.1",frontMatter:{id:"linux-installation-troubleshooting",title:"Troubleshooting installation on Linux",sidebar_label:"Installation troubleshooting",slug:"/linux-installation-troubleshooting"},sidebar:"version-1.6.1/memgraph",previous:{title:"RPM package",permalink:"/memgraph/install-memgraph-from-rpm"},next:{title:"Docker \ud83d\udc33",permalink:"/memgraph/install-memgraph-on-macos-docker"}},m=[{value:"Issues when connecting to Memgraph",id:"issues-when-connecting-to-memgraph",children:[]},{value:"Find the IP address of a Docker Container",id:"find-the-ip-address-of-a-docker-container",children:[]},{value:"Unable to install the Memgraph package with <code>dpkg</code>",id:"unable-to-install-the-memgraph-package-with-dpkg",children:[]},{value:"Multiple notes when starting Memgraph",id:"multiple-notes-when-starting-memgraph",children:[]}],h={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Ubuntu/Debian",value:"debian"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("h2",{id:"issues-when-connecting-to-memgraph"},"Issues when connecting to Memgraph"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run memgraph\n")),(0,o.kt)("p",null,"While this command will start a Memgraph instance, not publishing the port will\ncause problems when trying to connect to the database via ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," or\n",(0,o.kt)("strong",{parentName:"p"},"mgconsole"),". To avoid this, you should publish the\ncontainer's port to the host using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," flag and by specifying the port:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 memgraph\n")),(0,o.kt)("h2",{id:"find-the-ip-address-of-a-docker-container"},"Find the IP address of a Docker Container"),(0,o.kt)("p",null,"Although unlikely, some users might experience minor difficulties after the\nDocker installation. Instead of running on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", a Docker container for\nMemgraph may be running on a custom IP address. Fortunately, that IP address can\nbe found as follows:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Determine the ID of the Memgraph Container by issuing the\ncommand ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". The user should get an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'CONTAINER ID    IMAGE       COMMAND                  CREATED\n9397623cd87e    memgraph    "/usr/lib/memgraph/m\u2026"   2 seconds ago\n')),(0,o.kt)("p",null,"At this point, it is important to remember the container ID of the Memgraph\nImage. In our case, that is ",(0,o.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Use the this ID to retrieve the IP address of the Container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n")),(0,o.kt)("p",null,"The command above will yield the IP address that should be used when connecting\nto Memgraph via ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," or ",(0,o.kt)("strong",{parentName:"p"},"mgconsole")," as described in\nthe ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/connect-to-memgraph"},"querying")," section. Just replace\n",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," from the following command with the appropriate IP address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph --host HOST --use-ssl=False\n"))),(0,o.kt)(l.Z,{value:"debian",mdxType:"TabItem"},(0,o.kt)("h2",{id:"unable-to-install-the-memgraph-package-with-dpkg"},"Unable to install the Memgraph package with ",(0,o.kt)("inlineCode",{parentName:"h2"},"dpkg")),(0,o.kt)("p",null,"While running the following ",(0,o.kt)("inlineCode",{parentName:"p"},"dpkg")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dpkg -i /path/to/memgraph_<version>.deb\n")),(0,o.kt)("p",null,"you may encounter errors that resemble the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"dpkg: error processing package memgraph (--install): dependency problems -\nleaving unconfigured Errors were encountered while processing: memgraph\n")),(0,o.kt)("p",null,"These errors indicate that you don\u2019t have all of the necessary dependencies\ninstalled. To install the missing dependencies and finish the installation,\nissue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get install -f\n")),(0,o.kt)("h2",{id:"multiple-notes-when-starting-memgraph"},"Multiple notes when starting Memgraph"),(0,o.kt)("p",null,"When you start a Memgraph instance, you may see the following list of notes in\nyour terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph v1.4.0-community\n\nNOTE: Please install networkx to be able to use graph_analyzer module. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use Memgraph NetworkX wrappers. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx, numpy, scipy to be able to use proxied NetworkX algorithms. E.g., CALL nxalg.pagerank(...).\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use wcc module.\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n")),(0,o.kt)("p",null,"If you wish to work with built-in NetworkX modules in Memgraph, you need to\ninstall the following Python libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://numpy.org/"},"NumPy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.scipy.org/"},"SciPy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://networkx.org/"},"NetworkX"))),(0,o.kt)("p",null,"For more information on how to install Python libraries in Linux, follow ",(0,o.kt)("a",{parentName:"p",href:"https://packaging.python.org/tutorials/installing-packages/"},"this\nguide"),".\nIf you are not interested in working with query modules that depend on these\nlibraries, you can ignore the warnings."))))}d.isMDXComponent=!0},86010:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);