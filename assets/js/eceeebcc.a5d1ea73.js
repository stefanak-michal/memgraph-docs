"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25644],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=r.createContext({}),s=function(e){var t=r.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(h.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,h=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,c=d["".concat(h,".").concat(u)]||d[u]||m[u]||o;return a?r.createElement(c,i(i({ref:t},p),{},{components:a})):r.createElement(c,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71411:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return h},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"memgraph-faq",title:"Memgraph - Frequently asked questions",sidebar_label:"Memgraph",slug:"/faq/memgraph"},h=void 0,s={unversionedId:"faq/memgraph-faq",id:"faq/memgraph-faq",title:"Memgraph - Frequently asked questions",description:"About Memgraph",source:"@site/help-center/faq/memgraph-faq.md",sourceDirName:"faq",slug:"/faq/memgraph",permalink:"/docs/help-center/faq/memgraph",editUrl:"https://github.com/memgraph/docs/tree/master/help-center/faq/memgraph-faq.md",tags:[],version:"current",frontMatter:{id:"memgraph-faq",title:"Memgraph - Frequently asked questions",sidebar_label:"Memgraph",slug:"/faq/memgraph"},sidebar:"hel_center",previous:{title:"Help Center",permalink:"/docs/help-center/"},next:{title:"Memgraph Lab",permalink:"/docs/help-center/faq/memgraph-lab"}},p=[{value:"About Memgraph",id:"about-memgraph",children:[{value:"What is Memgraph?",id:"what-is-memgraph",children:[],level:3},{value:"What is the difference between Memgraph and Memgraph Platform?",id:"what-is-the-difference-between-memgraph-and-memgraph-platform",children:[],level:3}],level:2},{value:"Installation &amp; upgrade",id:"installation--upgrade",children:[{value:"How to install Memgraph on Windows?",id:"how-to-install-memgraph-on-windows",children:[],level:3},{value:"How to install Memgraph on macOS?",id:"how-to-install-memgraph-on-macos",children:[],level:3},{value:"Can I only use Memgraph Lab without Memgraph?",id:"can-i-only-use-memgraph-lab-without-memgraph",children:[],level:3},{value:"How do you upgrade?",id:"how-do-you-upgrade",children:[],level:3}],level:2},{value:"openCypher language",id:"opencypher-language",children:[{value:"How do you interface with the system?",id:"how-do-you-interface-with-the-system",children:[],level:3},{value:"What are the Cypher implementation differences compared to Neo4j?",id:"what-are-the-cypher-implementation-differences-compared-to-neo4j",children:[],level:3},{value:"Can you implement custom Cypher procedures?",id:"can-you-implement-custom-cypher-procedures",children:[],level:3},{value:"How to change the directory where query modules are stored?",id:"how-to-change-the-directory-where-query-modules-are-stored",children:[],level:3}],level:2},{value:"Memgraph &amp; cloud",id:"memgraph--cloud",children:[{value:"Does Memgraph offer a cloud graph database as a service?",id:"does-memgraph-offer-a-cloud-graph-database-as-a-service",children:[],level:3},{value:"Can Memgraph be deployed in the cloud?",id:"can-memgraph-be-deployed-in-the-cloud",children:[],level:3},{value:"How far have you scaled your system?",id:"how-far-have-you-scaled-your-system",children:[],level:3}],level:2},{value:"Memory usage",id:"memory-usage",children:[{value:"What does the hardware footprint look like?",id:"what-does-the-hardware-footprint-look-like",children:[],level:3},{value:"Does being in-memory mean that Memgraph will lose all data upon system failure or restart?",id:"does-being-in-memory-mean-that-memgraph-will-lose-all-data-upon-system-failure-or-restart",children:[],level:3},{value:"Can you change the memory limit for Memgraph?",id:"can-you-change-the-memory-limit-for-memgraph",children:[],level:3},{value:"Why is my Memgraph instance relatively slow?",id:"why-is-my-memgraph-instance-relatively-slow",children:[],level:3}],level:2},{value:"Logging",id:"logging",children:[{value:"Can you change the log level in Memgraph?",id:"can-you-change-the-log-level-in-memgraph",children:[],level:3},{value:"How to change the directory where log files are stored?",id:"how-to-change-the-directory-where-log-files-are-stored",children:[],level:3}],level:2},{value:"Data durability &amp; persistence",id:"data-durability--persistence",children:[{value:"How does Memgraph ensure durability? How does Memgraph persist data?",id:"how-does-memgraph-ensure-durability-how-does-memgraph-persist-data",children:[],level:3},{value:"How to change the directory where snapshots are stored?",id:"how-to-change-the-directory-where-snapshots-are-stored",children:[],level:3}],level:2},{value:"Other",id:"other",children:[{value:"Do you support Tinkerpop API stacks?",id:"do-you-support-tinkerpop-api-stacks",children:[],level:3}],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-memgraph"},"About Memgraph"),(0,o.kt)("h3",{id:"what-is-memgraph"},"What is Memgraph?"),(0,o.kt)("p",null,"Memgraph is a ",(0,o.kt)("strong",{parentName:"p"},"streaming graph application platform")," that helps you wrangle\nyour streaming data, build sophisticated models that you can query in real-time,\nand develop applications you never thought possible in days, not months.\nMemgraph is powered by an in-memory graph database built to\nhandle real-time use-cases at enterprise scale. Memgraph supports\nstrongly-consistent ACID transactions and uses the standardized Cypher query\nlanguage for structuring, manipulating, and exploring data."),(0,o.kt)("h3",{id:"what-is-the-difference-between-memgraph-and-memgraph-platform"},"What is the difference between Memgraph and Memgraph Platform?"),(0,o.kt)("p",null,"There are three official Docker images for Memgraph:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memgraph/memgraph")," - the most basic MemgraphDB instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memgraph/memgraph-mage")," - the image contains a MemgraphDB instance together\nwith all the newest ",(0,o.kt)("a",{parentName:"li",href:"/mage"},"MAGE")," modules and graph algorithms."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memgraph/memgraph-platform")," - the image contains MemgraphDB, Memgraph Lab,\nmgconsole and MAGE. Once started, mgconsole will be opened in the terminal,\nwhile Memgraph Lab is available at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"),".")),(0,o.kt)("h2",{id:"installation--upgrade"},"Installation & upgrade"),(0,o.kt)("h3",{id:"how-to-install-memgraph-on-windows"},"How to install Memgraph on Windows?"),(0,o.kt)("p",null,"Memgraph cannot be installed natively on Windows devices but can be installed\nusing ",(0,o.kt)("strong",{parentName:"p"},"Docker")," or through the ",(0,o.kt)("strong",{parentName:"p"},"Windows Subsystem for Linux (WSL)"),". Docker is\nan open platform for developing, shipping, and running applications. Docker\nenables us to run Memgraph virtually on any system without having to worry about\ncompatibility issues. You don't have to be familiar with Docker to try out\nMemgraph. Just ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"install Docker")," and head\nover to our ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/install-memgraph-on-windows-docker"},"installation instructions for\nWindows"),"."),(0,o.kt)("h3",{id:"how-to-install-memgraph-on-macos"},"How to install Memgraph on macOS?"),(0,o.kt)("p",null,"Memgraph cannot be installed natively on macOS devices but can be installed\nusing ",(0,o.kt)("strong",{parentName:"p"},"Docker"),". Docker is an open platform for developing, shipping, and\nrunning applications. Docker enables us to run Memgraph virtually on any system\nwithout having to worry about compatibility issues. You don't have to be\nfamiliar with Docker to try out Memgraph. Just ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"install\nDocker")," and head over to our ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/install-memgraph-on-macos-docker"},"installation\ninstructions for macOS"),"."),(0,o.kt)("h3",{id:"can-i-only-use-memgraph-lab-without-memgraph"},"Can I only use Memgraph Lab without Memgraph?"),(0,o.kt)("p",null,"Memgraph Lab is a visual interface for exploring and interacting with data\nstored in Memgraph. This means that Memgraph Lab needs a running Memgraph\ninstance in the background to be able to connect to it. After you have\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/installation"},"installed")," and started Memgraph, you can head over to\nMemgraph Lab and start querying your graph."),(0,o.kt)("h3",{id:"how-do-you-upgrade"},"How do you upgrade?"),(0,o.kt)("p",null,"To do software upgrades, the whole cluster has to go down. Before that data has\nto be migrated to a cluster with the newer version of Memgraph. At the moment,\nwe offer no downtime upgrades, but that\u2019s a feature which is high on our\npriority list. What we do offer is support when the upgrade is needed."),(0,o.kt)("h2",{id:"opencypher-language"},"openCypher language"),(0,o.kt)("h3",{id:"how-do-you-interface-with-the-system"},"How do you interface with the system?"),(0,o.kt)("p",null,"Memgraph supports the ",(0,o.kt)("a",{parentName:"p",href:"http://www.opencypher.org"},"openCypher")," query language to\nquery the database instance. It\u2019s a declarative query language designed to query\ngraphs. Communication between clients and the database is done via the ",(0,o.kt)("a",{parentName:"p",href:"https://boltprotocol.org"},"Bolt\nprotocol"),". Check out ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/connect-to-memgraph/drivers"},"the list of supported programming\nlanguages"),"."),(0,o.kt)("h3",{id:"what-are-the-cypher-implementation-differences-compared-to-neo4j"},"What are the Cypher implementation differences compared to Neo4j?"),(0,o.kt)("p",null,"Although we tried to implement openCypher query language as closely to the\nlanguage reference as possible, we made some changes that can enhance the user\nexperience. You can find the differences listed in the ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual/differences"},"Cypher\nmanual"),"."),(0,o.kt)("h3",{id:"can-you-implement-custom-cypher-procedures"},"Can you implement custom Cypher procedures?"),(0,o.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup.\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/how-to-guides/query-modules/implement-query-modules"},"Query modules can be\nimplemented"),"\nusing the Python API or C API."),(0,o.kt)("h3",{id:"how-to-change-the-directory-where-query-modules-are-stored"},"How to change the directory where query modules are stored?"),(0,o.kt)("p",null,"You can change the directory where query modules are stored by using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag. For more information about using configuration\nflags, check out the Reference guide](/memgraph/reference-guide/configuration)."),(0,o.kt)("h2",{id:"memgraph--cloud"},"Memgraph & cloud"),(0,o.kt)("h3",{id:"does-memgraph-offer-a-cloud-graph-database-as-a-service"},"Does Memgraph offer a cloud graph database as a service?"),(0,o.kt)("p",null,"Yes, we offer fully-managed Memgraph on our cloud infrastructure as a service.\nFor more details please visit our ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.memgraph.com/"},"cloud pages"),". In\naddition, ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," is a testing\nenvironment where you can play with various graph datasets."),(0,o.kt)("h3",{id:"can-memgraph-be-deployed-in-the-cloud"},"Can Memgraph be deployed in the cloud?"),(0,o.kt)("p",null,"Yes, Memgraph can be deployed in the cloud. Memgraph is designed to be portable,\nbut currently available only on the x86_64 architecture. All standard Linux\ndistributions like CentOS, Debian, Ubuntu, RedHat are supported. Memgraph is\nalso available on Docker. For any other platforms, please drop us an email at\n",(0,o.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"tech@memgraph.com")," or get in touch with our team on\nour ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.memgraph.com/"},"Forum"),"."),(0,o.kt)("h3",{id:"how-far-have-you-scaled-your-system"},"How far have you scaled your system?"),(0,o.kt)("p",null,"It depends on the dataset and the queries, in other words, the workload. On a\nsingle machine, Memgraph scales up to the size of the main memory. In a\ndistributed system, the graph is automatically repartitioned in the background\nto improve query execution time and scalability."),(0,o.kt)("h2",{id:"memory-usage"},"Memory usage"),(0,o.kt)("h3",{id:"what-does-the-hardware-footprint-look-like"},"What does the hardware footprint look like?"),(0,o.kt)("p",null,"Memgraph uses ~50GB to store 100M nodes and 100M edges with one label and one\nproperty per each node and an edge type and one property per edge."),(0,o.kt)("h3",{id:"does-being-in-memory-mean-that-memgraph-will-lose-all-data-upon-system-failure-or-restart"},"Does being in-memory mean that Memgraph will lose all data upon system failure or restart?"),(0,o.kt)("p",null,"No. Memgraph uses RAM as the primary storage for data. However, Memgraph\ncontinuously backs up data to disk with transaction logs and periodic snapshots.\nOn restart, Memgraph uses the snapshot and log files to recover its state to\nwhat it was before shutting down."),(0,o.kt)("h3",{id:"can-you-change-the-memory-limit-for-memgraph"},"Can you change the memory limit for Memgraph?"),(0,o.kt)("p",null,"You can change the memory limit by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--memory-limit")," flag. If you want\nto allocate 2GB for Memgraph then you would use ",(0,o.kt)("inlineCode",{parentName:"p"},"--memory-limit=2000"),". For more\ninformation about using configuration flags, check out the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration"},"Reference\nguide"),"."),(0,o.kt)("h3",{id:"why-is-my-memgraph-instance-relatively-slow"},"Why is my Memgraph instance relatively slow?"),(0,o.kt)("p",null,"Label indexing is not enabled by default in Memgraph, i.e., Memgraph will not\nautomatically index labeled data. Therefore, it is up to the user to perform the\nindexing explicitly. Visit the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/indexing"},"Reference\nguide")," to find out more about creating\nindexes."),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("h3",{id:"can-you-change-the-log-level-in-memgraph"},"Can you change the log level in Memgraph?"),(0,o.kt)("p",null,"You can change the log level easily by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--log-level")," flag. The allowed\nvalues are ",(0,o.kt)("inlineCode",{parentName:"p"},"TRACE")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"WARNING")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR")," , and ",(0,o.kt)("inlineCode",{parentName:"p"},"CRITICAL")," .\nFor more information about using configuration flags, check out the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration"},"Reference\nguide"),"."),(0,o.kt)("h3",{id:"how-to-change-the-directory-where-log-files-are-stored"},"How to change the directory where log files are stored?"),(0,o.kt)("p",null,"You can change the directory where log files are stored by using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--log-file")," flag. For more information about using configuration flags, check\nout the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration"},"Reference guide"),"."),(0,o.kt)("h2",{id:"data-durability--persistence"},"Data durability & persistence"),(0,o.kt)("h3",{id:"how-does-memgraph-ensure-durability-how-does-memgraph-persist-data"},"How does Memgraph ensure durability? How does Memgraph persist data?"),(0,o.kt)("p",null,"Memgraph uses two mechanisms to ensure data durability:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"write-ahead logs")," (WAL) and"),(0,o.kt)("li",{parentName:"ul"},"periodic ",(0,o.kt)("strong",{parentName:"li"},"snapshots"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Snapshots")," are taken periodically during the entire runtime of Memgraph. When\na snapshot is triggered, the whole data storage is written to the disk.\n",(0,o.kt)("strong",{parentName:"p"},"Write-ahead logs")," save all database modifications that happened to a file."),(0,o.kt)("h3",{id:"how-to-change-the-directory-where-snapshots-are-stored"},"How to change the directory where snapshots are stored?"),(0,o.kt)("p",null,"You can change the directory where snapshots are stored by using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--data-directory")," flag. For more information about using configuration flags,\ncheck out the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration"},"Reference guide"),"."),(0,o.kt)("h2",{id:"other"},"Other"),(0,o.kt)("h3",{id:"do-you-support-tinkerpop-api-stacks"},"Do you support Tinkerpop API stacks?"),(0,o.kt)("p",null,"Memgraph doesn\u2019t support the Tinkerpop API stack because Tinkerpop is highly\ndependent on the Java stack. Memgraph is implemented in C/C++/Assembly with\nopenCypher and the Bolt protocol as an interface. We have considered Tinkerpop\nintegration, but at the moment it\u2019s not one of our highest priorities."))}d.isMDXComponent=!0}}]);