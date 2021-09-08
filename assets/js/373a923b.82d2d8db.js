"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88929],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||a;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},31583:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"work-with-docker",title:"How to work with Docker?",sidebar_label:"Work with Docker"},s=void 0,u={unversionedId:"database-functionalities/work-with-docker",id:"version-1.3.0/database-functionalities/work-with-docker",isDocsHomePage:!1,title:"How to work with Docker?",description:"Set up a Development Environment with Docker",source:"@site/memgraph_versioned_docs/version-1.3.0/database-functionalities/work-with-docker.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/work-with-docker",permalink:"/memgraph/1.3.0/database-functionalities/work-with-docker",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/database-functionalities/work-with-docker.md",tags:[],version:"1.3.0",frontMatter:{id:"work-with-docker",title:"How to work with Docker?",sidebar_label:"Work with Docker"}},m=[{value:"Set up a Development Environment with Docker",id:"set-up-a-development-environment-with-docker",children:[{value:"Why Docker?",id:"why-docker",children:[]},{value:"Setting up Memgraph with Docker",id:"setting-up-memgraph-with-docker",children:[]},{value:"Importing custom data",id:"importing-custom-data",children:[]},{value:"Accessing custom query modules",id:"accessing-custom-query-modules",children:[]},{value:"Running query modules",id:"running-query-modules",children:[]},{value:"Where to next?",id:"where-to-next",children:[]}]}],p={toc:m};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"set-up-a-development-environment-with-docker"},"Set up a Development Environment with Docker"),(0,a.kt)("p",null,"This guide serves as an explanation of how to use Docker with Memgraph and setting up your development environment."),(0,a.kt)("p",null,"Memgraph supports custom, user-written Cypher procedures. It is easy to extend built-in features by creating your own query modules. To access those query modules, we need to take a few extra steps while using Docker and this guide will show you how to work with them."),(0,a.kt)("h3",{id:"why-docker"},"Why Docker?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," is a service that uses OS-level virtualization to deliver software in packages that are called ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/resources/what-container"},"containers"),". We at Memgraph chose Docker because of its many useful features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flexibility"),(0,a.kt)("li",{parentName:"ul"},"Lightweight - efficient in terms of system resources"),(0,a.kt)("li",{parentName:"ul"},"Portable - you can build locally or deploy to the cloud"),(0,a.kt)("li",{parentName:"ul"},"Runs on all platforms - Windows, Linux and, macOS"),(0,a.kt)("li",{parentName:"ul"},"Deploy in Kubernetes")),(0,a.kt)("h3",{id:"setting-up-memgraph-with-docker"},"Setting up Memgraph with Docker"),(0,a.kt)("p",null,"To start implementing and testing custom query modules in Memgraph, it is necessary to set up a Docker container first. "),(0,a.kt)("p",null,"The Memgraph Docker image can be downloaded ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/download"},"here"),". "),(0,a.kt)("p",null,"After successfully ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"installing Docker"),", import the Memgraph Docker image with the following command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker load -i /path/to/memgraph-<version>-docker.tar.gz")),(0,a.kt)("p",null,"To start Memgraph, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  memgraph\n")),(0,a.kt)("p",null,"At this point, Memgraph is ready for you to ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/getting-started/querying"},"submit queries"),"."),(0,a.kt)("p",null,"For an explanation of how to write custom query modules, follow our ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/database-functionalities/query-modules/implement-query-modules"},"how-to guide"),"."),(0,a.kt)("h3",{id:"importing-custom-data"},"Importing custom data"),(0,a.kt)("p",null,"If you wish to test and run your procedures on a custom dataset, first you need to populate the database. We will be using the CSV Import Tool which creates a snapshot that will be used by the database to recover its state on its next startup. Make sure that your Memgraph container is stopped and run the importer using the following command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph")),(0,a.kt)("p",null,"You can pass CSV files containing nodes and relationships with ",(0,a.kt)("inlineCode",{parentName:"p"},"--nodes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--relationships")," flags respectively. Multiple files can be specified by repeating either of the flags. At least one node needs to be specified, but relationships are not required. For more information on how to structure your CSV file, please refer to our ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/database-functionalities/import-data#csv-import-tool"},"Import tool guide"),"."),(0,a.kt)("p",null,"To import the snapshot, you will need to copy your files where Docker can see them by creating another container and filling it with your data: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker container create --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp nodes.csv mg_import_helper:/import-data\ndocker cp relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,a.kt)("p",null,"To run the importer, we need to slightly modify the first command by adding the flags for nodes and relationships:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\ndocker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/nodes.csv \\\n  --relationships /import-data/relationships.csv\n")),(0,a.kt)("p",null,"Next time you start Memgraph, your dataset will be ready for use!"),(0,a.kt)("h3",{id:"accessing-custom-query-modules"},"Accessing custom query modules"),(0,a.kt)("p",null,"Before running our custom procedures, we need to configure Memgraph to know where to fetch query modules. By default, Memgraph will search for query modules in the ",(0,a.kt)("inlineCode",{parentName:"p"},"usr/lib/memgraph/query-modules")," directory. If you wish to change the directory in which Memgraph searches for query modules, you can do it in one of the following ways: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"change the ",(0,a.kt)("inlineCode",{parentName:"li"},"--query-modules-directory")," flag in the main ",(0,a.kt)("a",{parentName:"li",href:"/memgraph/1.3.0/reference-guide/configuration"},"configuration")," file located at ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/memgraph/memgraph.conf")," or"),(0,a.kt)("li",{parentName:"ul"},"supply it as a command-line parameter")),(0,a.kt)("p",null,"When supplying the path for our query module, first we need to mount the volume containing it. ",(0,a.kt)("strong",{parentName:"p"},"Mounting")," is a process by which the operating system makes files and directories on a storage device available for users to access via the computer's file system. In our case, we are allowing an isolated environment of the Docker container to access data located in our computer's file system. There are two types of mounts in Docker: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"volume")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/bind-mounts/"},"bind mounting"),". The graphic below shows the differences between the two mounting techniques:"),(0,a.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/docker.png",alt:"Docker",style:{height:360}}),(0,a.kt)("p",null,"In context of Memgraph, we will use volume mounting meaning we are going to put our files in a container and mount that container to the Docker area. Bind mounts are dependant on the file system of the host machine therefore if we move the file elsewhere, we need to re-mount. With volume binding, we have placed the files inside the Docker area and Memgraph will always have access to it no matter where they exist in our file system. "),(0,a.kt)("p",null,"The following command should be used to successfully mount a volume containing your custom query module: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  -v $(pwd)/modules:/modules \\\n  --query-modules-directory=/modules\n")),(0,a.kt)("p",null,"We've added two flags to the original command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-v $(pwd)/modules:/modules ")," - flag for mounting the volume ",(0,a.kt)("inlineCode",{parentName:"li"},"modules")," and "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--query-modules-directory=/modules")," - flag used to change the place where Memgraph searches for modules.")),(0,a.kt)("p",null,"Now that we have access to our query modules, we can go on and run them."),(0,a.kt)("h3",{id:"running-query-modules"},"Running query modules"),(0,a.kt)("p",null,"There are three ways to execute queries and procedures in Memgraph:"),(0,a.kt)("p",null,"NOTE: ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_client")," is a deprecated tool still coming within the Memgraph package. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole")," will replace ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_client")," in the future. If possible, please use ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," instead."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using the command-line tool, ",(0,a.kt)("inlineCode",{parentName:"li"},"mg_client"),", which comes with Memgraph, (",(0,a.kt)("a",{parentName:"li",href:"/memgraph/1.3.0/getting-started/querying"},"Querying"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/memgraph/1.3.0/getting-started/connecting-applications"},"programmatically")," by using the Bolt protocol,"),(0,a.kt)("li",{parentName:"ul"},"from ",(0,a.kt)("strong",{parentName:"li"},"Memgraph Lab"),", a visual user interface that can be downloaded ",(0,a.kt)("a",{parentName:"li",href:"https://memgraph.com/download"},"here"),".")),(0,a.kt)("p",null,"If you've decided to use the command-line tool, you will need to run the following command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docker run -it --entrypoint=mg_client memgraph --host HOST --use-ssl=False")," "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," part of the command should be replaced with valid IP - most likely it being ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),".   If you are a macOS or Linux user and are having issues with connecting, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/getting-started/installation/docker-installation#note-for-docker-users"},"Note for Docker users"),"."),(0,a.kt)("p",null,"NOTE: If ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," refuses to connect, try putting ",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal")," instead. "),(0,a.kt)("p",null,"After running the command, you should get a command prompt similar to this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Type :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nConnected to 'memgraph://127.0.0.1:7687'\nmemgraph>\n")),(0,a.kt)("p",null,"Query modules are loaded on start, but you can also load them by executing the following procedure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-openCyoher"},"CALL mg.load_all();\n")),(0,a.kt)("p",null,"Each time you change a query module don't forget to reload it.\nThe syntax for calling the procedures is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-openCyoher"},'CALL example.procedure("string-argument") YIELD *;\n')),(0,a.kt)("p",null,"Each procedure returns either zero or more records, where each record contains named fields. The ",(0,a.kt)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. Custom procedures may be called standalone or as part of a larger query. This is useful if we want the procedure to work on data the query is producing. "),(0,a.kt)("p",null,"With this, your developing environment is ready and you are able to easily implement and run your own query modules. Check out our ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/reference-guide/query-modules"},"Reference Guide")," to see which Query Modules are included in Memgraph. "),(0,a.kt)("h3",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/tutorials/tutorials"},"Tutorials")),"."))}c.isMDXComponent=!0}}]);