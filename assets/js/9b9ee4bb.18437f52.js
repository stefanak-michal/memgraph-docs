(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57156],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(67294),o=n(79443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var m=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,m=e.values,p=e.groupId,d=e.className,h=a(),g=h.tabGroupChoices,k=h.setTabGroupChoices,f=(0,r.useState)(o),w=f[0],y=f[1],v=r.Children.toArray(e.children),b=[];if(null!=p){var N=g[p];null!=N&&N!==w&&m.some((function(e){return e.value===N}))&&y(N)}var x=function(e){var t=e.currentTarget,n=b.indexOf(t),r=m[n].value;y(r),null!=p&&(k(p,r),setTimeout((function(){var e,n,r,o,a,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case c:var r=b.indexOf(e.target)+1;n=b[r]||b[0];break;case u:var o=b.indexOf(e.target)-1;n=b[o]||b[b.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},81353:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return h}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],u={id:"work-with-docker",title:"How to work with Docker?",sidebar_label:"Work with Docker",slug:"/how-to-work-with-docker"},c=void 0,m={unversionedId:"database-functionalities/work-with-docker",id:"database-functionalities/work-with-docker",isDocsHomePage:!1,title:"How to work with Docker?",description:"This guide serves as an explanation of how to use Docker with Memgraph and",source:"@site/docs/database-functionalities/work-with-docker.md",sourceDirName:"database-functionalities",slug:"/how-to-work-with-docker",permalink:"/memgraph/next/how-to-work-with-docker",editUrl:"https://github.com/memgraph/docs/tree/master/docs/database-functionalities/work-with-docker.md",version:"current",frontMatter:{id:"work-with-docker",title:"How to work with Docker?",sidebar_label:"Work with Docker",slug:"/how-to-work-with-docker"}},p=[{value:"Why Docker?",id:"why-docker",children:[]},{value:"Setting up Memgraph with Docker",id:"setting-up-memgraph-with-docker",children:[]},{value:"Find the IP address of a Docker Container",id:"docker-container-ip-address",children:[]},{value:"Importing data",id:"importing-data",children:[]},{value:"Accessing query modules",id:"accessing-query-modules",children:[]},{value:"Running query modules",id:"running-query-modules",children:[]},{value:"Where to next?",id:"where-to-next",children:[]}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide serves as an explanation of how to use Docker with Memgraph and\nsetting up your development environment."),(0,a.kt)("p",null,"Memgraph supports custom, user-written Cypher procedures. It is easy to extend\nbuilt-in features by creating your own query modules. To access those query\nmodules, we need to take a few extra steps while using Docker and this guide\nwill show you how to work with them."),(0,a.kt)("h2",{id:"why-docker"},"Why Docker?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," is a service that uses OS-level virtualization\nto deliver software in packages that are called\n",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/resources/what-container"},"containers"),". We at Memgraph\nchose Docker because of its many useful features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flexibility"),(0,a.kt)("li",{parentName:"ul"},"Lightweight - efficient in terms of system resources"),(0,a.kt)("li",{parentName:"ul"},"Portable - you can build locally or deploy to the cloud"),(0,a.kt)("li",{parentName:"ul"},"Runs on all platforms - Windows, Linux and, macOS"),(0,a.kt)("li",{parentName:"ul"},"Deploy in Kubernetes")),(0,a.kt)("h2",{id:"setting-up-memgraph-with-docker"},"Setting up Memgraph with Docker"),(0,a.kt)("p",null,"To start implementing and testing custom query modules in Memgraph, it is\nnecessary to set up a Docker container first."),(0,a.kt)("p",null,"The Memgraph Docker image can be downloaded\n",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/download"},"here"),"."),(0,a.kt)("p",null,"After successfully ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"installing Docker"),",\nimport the Memgraph Docker image with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker load -i /path/to/memgraph-<version>-docker.tar.gz\n")),(0,a.kt)("p",null,"To start Memgraph, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph \\\n  -v mg_log:/var/log/memgraph \\\n  -v mg_etc:/etc/memgraph \\\n  memgraph\n")),(0,a.kt)("p",null,"At this point, Memgraph is ready for you to ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/next/connect-to-memgraph"},"submit\nqueries"),"."),(0,a.kt)("p",null,"For an explanation of how to write custom query modules, follow our ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/next/database-functionalities/query-modules/implement-query-modules"},"how-to\nguide"),"."),(0,a.kt)("h2",{id:"docker-container-ip-address"},"Find the IP address of a Docker Container"),(0,a.kt)("p",null,"Although unlikely, some users might experience minor difficulties after the\nDocker installation. Instead of running on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),", a Docker container for\nMemgraph may be running on a custom IP address. Fortunately, that IP address can\nbe found as follows:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Determine the ID of the Memgraph Container by issuing the command ",(0,a.kt)("inlineCode",{parentName:"p"},"docker\nps"),". The user should get an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'CONTAINER ID    IMAGE       COMMAND                  CREATED\n9397623cd87e    memgraph    "/usr/lib/memgraph/m\u2026"   2 seconds ago\n')),(0,a.kt)("p",null,"At this point, it is important to remember the container ID of the Memgraph\nImage. In our case, that is ",(0,a.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Use the this ID to retrieve the IP address of the Container:"),(0,a.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n"))),(0,a.kt)(l.Z,{value:"macos",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n"))),(0,a.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'docker inspect -f "{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}" 9397623cd87e\n')))),(0,a.kt)("p",null,"The command above will yield the IP address that should be used when connecting\nto Memgraph via ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Lab")," or ",(0,a.kt)("strong",{parentName:"p"},"mgconsole")," as described in\nthe ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/next/connect-to-memgraph"},"querying")," section. Just replace\n",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," from the following command with the appropriate IP address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph --host HOST --use-ssl=False\n")),(0,a.kt)("h2",{id:"importing-data"},"Importing data"),(0,a.kt)("p",null,"If you wish to test and run your procedures on a custom dataset, first you need\nto populate the database. We will be using the CSV Import Tool which creates a\nsnapshot that will be used by the database to recover its state on its next\nstartup. Make sure that your Memgraph container is stopped and run the importer\nusing the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph\n")),(0,a.kt)("p",null,"You can pass CSV files containing nodes and relationships with ",(0,a.kt)("inlineCode",{parentName:"p"},"--nodes")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"--relationships")," flags respectively. Multiple files can be specified by\nrepeating either of the flags. At least one node needs to be specified, but\nrelationships are not required. For more information on how to structure your\nCSV file, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/next/import-data"},"Import tool\nguide"),"."),(0,a.kt)("p",null,"To import the snapshot, you will need to copy your files where Docker can see\nthem by creating another container and filling it with your data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker container create --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp nodes.csv mg_import_helper:/import-data\ndocker cp relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,a.kt)("p",null,"To run the importer, we need to slightly modify the first command by adding the\nflags for nodes and relationships:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/nodes.csv \\\n  --relationships /import-data/relationships.csv\n")),(0,a.kt)("p",null,"Next time you start Memgraph, your dataset will be ready for use!"),(0,a.kt)("h2",{id:"accessing-query-modules"},"Accessing query modules"),(0,a.kt)("p",null,"Before running our custom procedures, we need to configure Memgraph to know\nwhere to fetch query modules. By default, Memgraph will search for query modules\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"usr/lib/memgraph/query-modules")," directory. If you wish to change the\ndirectory in which Memgraph searches for query modules, you can do it in one of\nthe following ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"change the ",(0,a.kt)("inlineCode",{parentName:"li"},"--query-modules-directory")," flag in the main\n",(0,a.kt)("a",{parentName:"li",href:"/memgraph/next/reference-guide/configuration"},"configuration")," file located at\n",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/memgraph/memgraph.conf")," or"),(0,a.kt)("li",{parentName:"ul"},"supply it as a command-line parameter")),(0,a.kt)("p",null,"When supplying the path for our query module, first we need to mount the volume\ncontaining it. ",(0,a.kt)("strong",{parentName:"p"},"Mounting")," is a process by which the operating system makes\nfiles and directories on a storage device available for users to access via the\ncomputer's file system. In our case, we are allowing an isolated environment of\nthe Docker container to access data located in our computer's file system. There\nare two types of mounts in Docker:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"volume")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/bind-mounts/"},"bind\nmounting"),". The graphic below shows\nthe differences between the two mounting techniques:"),(0,a.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/docker.png",alt:"Docker",style:{height:360}}),(0,a.kt)("p",null,"In context of Memgraph, we will use volume mounting meaning we are going to put\nour files in a container and mount that container to the Docker area. Bind\nmounts are dependant on the file system of the host machine therefore if we move\nthe file elsewhere, we need to re-mount. With volume binding, we have placed the\nfiles inside the Docker area and Memgraph will always have access to it no\nmatter where they exist in our file system."),(0,a.kt)("p",null,"The following command should be used to successfully mount a volume containing\nyour custom query module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  -v $(pwd)/modules:/modules \\\n  --query-modules-directory=/modules\n")),(0,a.kt)("p",null,"We've added two flags to the original command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/modules:/modules ")," - flag for mounting the volume ",(0,a.kt)("inlineCode",{parentName:"li"},"modules")," and"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--query-modules-directory=/modules")," - flag used to change the place where\nMemgraph searches for modules.")),(0,a.kt)("p",null,"Now that we have access to our query modules, we can go on and run them."),(0,a.kt)("h2",{id:"running-query-modules"},"Running query modules"),(0,a.kt)("p",null,"There are three ways to execute queries and procedures in Memgraph:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using the command-line tool, ",(0,a.kt)("inlineCode",{parentName:"li"},"mgconsole"),", which comes with Memgraph,\n(",(0,a.kt)("a",{parentName:"li",href:"/memgraph/next/connect-to-memgraph"},"Querying"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/memgraph/next/connect-to-memgraph/methods/drivers"},"programmatically"),"\nby using the Bolt protocol,"),(0,a.kt)("li",{parentName:"ul"},"from ",(0,a.kt)("strong",{parentName:"li"},"Memgraph Lab"),", a visual user interface that can be downloaded\n",(0,a.kt)("a",{parentName:"li",href:"https://memgraph.com/download"},"here"),".")),(0,a.kt)("p",null,"If you've decided to use the command-line tool, you will need to run the\nfollowing command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run -it --entrypoint=mgconsole memgraph --host HOST --use-ssl=False")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," part of the command should be replaced with valid IP - most likely it\nbeing ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),".   If you are a macOS or Linux user and are having issues with\nconnecting, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"#docker-container-ip-address"},"Note for Docker\nusers"),"."),(0,a.kt)("p",null,"NOTE: If ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," refuses to connect, try putting ",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal"),"\ninstead."),(0,a.kt)("p",null,"After running the command, you should get a command prompt similar to this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Type :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nConnected to 'memgraph://127.0.0.1:7687'\nmemgraph>\n")),(0,a.kt)("p",null,"Query modules are loaded on start, but you can also load them by executing the\nfollowing procedure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,a.kt)("p",null,"Each time you change a query module don't forget to reload it. The syntax for\ncalling the procedures is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL example.procedure("string-argument") YIELD *;\n')),(0,a.kt)("p",null,"Each procedure returns either zero or more records, where each record contains\nnamed fields. The ",(0,a.kt)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in.\nCustom procedures may be called standalone or as part of a larger query. This is\nuseful if we want the procedure to work on data the query is producing."),(0,a.kt)("p",null,"With this, your developing environment is ready and you are able to easily\nimplement and run your own query modules. Check out our ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/next/reference-guide/query-modules"},"Reference\nGuide")," to see which Query\nModules are included in Memgraph."),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/next/reference-guide"},"Reference\nguide")),". For real-world examples of how to\nuse Memgraph, we strongly suggest going through one of the available\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/next/tutorials"},"Tutorials")),"."))}h.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);