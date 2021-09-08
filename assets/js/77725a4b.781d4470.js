"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75114],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,c=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(c,i(i({ref:t},h),{},{components:r})):a.createElement(c,i({ref:t},h))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50347:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return h},default:function(){return d}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"faq",title:"Frequently asked questions",sidebar_label:"FAQ"},p=void 0,l={unversionedId:"getting-help/faq",id:"version-1.5.0/getting-help/faq",isDocsHomePage:!1,title:"Frequently asked questions",description:"What is Memgraph?",source:"@site/memgraph_versioned_docs/version-1.5.0/getting-help/faq.md",sourceDirName:"getting-help",slug:"/getting-help/faq",permalink:"/memgraph/1.5.0/getting-help/faq",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/getting-help/faq.md",tags:[],version:"1.5.0",frontMatter:{id:"faq",title:"Frequently asked questions",sidebar_label:"FAQ"},sidebar:"version-1.5.0/memgraph",previous:{title:"Getting help",permalink:"/memgraph/1.5.0/getting-help/getting-help"}},h=[{value:"What is Memgraph?",id:"what-is-memgraph",children:[]},{value:"Does being in-memory mean that Memgraph will lose all data upon system failure or restart?",id:"does-being-in-memory-mean-that-memgraph-will-lose-all-data-upon-system-failure-or-restart",children:[]},{value:"How far have you scaled your system?",id:"how-far-have-you-scaled-your-system",children:[]},{value:"Can Memgraph be deployed in the cloud?",id:"can-memgraph-be-deployed-in-the-cloud",children:[]},{value:"What does the hardware footprint look like?",id:"what-does-the-hardware-footprint-look-like",children:[]},{value:"Does Memgraph offer a cloud graph database as a service?",id:"does-memgraph-offer-a-cloud-graph-database-as-a-service",children:[]},{value:"Do you support Tinkerpop API stacks?",id:"do-you-support-tinkerpop-api-stacks",children:[]},{value:"How do you interface with the system?",id:"how-do-you-interface-with-the-system",children:[]},{value:"How do you upgrade?",id:"how-do-you-upgrade",children:[]},{value:"Can you implement custom Cypher procedures?",id:"can-you-implement-custom-cypher-procedures",children:[]},{value:"Why is my Memgraph instance relatively slow?",id:"why-is-my-memgraph-instance-relatively-slow",children:[]},{value:"What are the Cypher implementation differences compared to Neo4j?",id:"what-are-the-cypher-implementation-differences-compared-to-neo4j",children:[]}],u={toc:h};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"what-is-memgraph"},"What is Memgraph?"),(0,o.kt)("p",null,"Memgraph is a native fully distributed in-memory graph database built to handle\nreal-time use-cases at enterprise scale. Memgraph supports strongly-consistent\nACID transactions; and uses the standardized openCypher query language for\nstructuring, manipulating, and exploring data."),(0,o.kt)("h3",{id:"does-being-in-memory-mean-that-memgraph-will-lose-all-data-upon-system-failure-or-restart"},"Does being in-memory mean that Memgraph will lose all data upon system failure or restart?"),(0,o.kt)("p",null,"No. Memgraph uses RAM as the primary storage for data. However, Memgraph\ncontinuously backs up data to disk with transaction logs and periodic\nsnapshots. On restart, Memgraph uses the snapshot and log files to recover its\nstate to what it was before shutting down."),(0,o.kt)("h3",{id:"how-far-have-you-scaled-your-system"},"How far have you scaled your system?"),(0,o.kt)("p",null,"It depends on the dataset and the queries, in other words, the workload. On a\nsingle machine, Memgraph scales up to the size of the main memory. In a\ndistributed system, the graph is automatically repartitioned in the background\nto improve query execution time and scalability."),(0,o.kt)("h3",{id:"can-memgraph-be-deployed-in-the-cloud"},"Can Memgraph be deployed in the cloud?"),(0,o.kt)("p",null,"Yes, Memgraph can be deployed in the cloud. Memgraph is designed to be\nportable, but currently available only on the x86_64 architecture. All standard\nLinux distributions like CentOS, Debian, Ubuntu, RedHat are supported. Memgraph\nis also available on Docker. For any other platforms, please drop us an email\nat ",(0,o.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"tech@memgraph.com")," or get in touch with our team\non our ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.memgraph.com/"},"Forum"),"."),(0,o.kt)("h3",{id:"what-does-the-hardware-footprint-look-like"},"What does the hardware footprint look like?"),(0,o.kt)("p",null,"Memgraph uses ~50GB to store 100M nodes and 100M edges with one label and one\nproperty per each node and an edge type and one property per edge."),(0,o.kt)("h3",{id:"does-memgraph-offer-a-cloud-graph-database-as-a-service"},"Does Memgraph offer a cloud graph database as a service?"),(0,o.kt)("p",null,"Yes, we offer fully-managed Memgraph on our cloud infrastructure as a service.\nFor more details please visit our ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.memgraph.com/"},"cloud pages"),".\nIn addition, ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," is a\ntesting environment where you can play with various graph datasets."),(0,o.kt)("h3",{id:"do-you-support-tinkerpop-api-stacks"},"Do you support Tinkerpop API stacks?"),(0,o.kt)("p",null,"Memgraph doesn\u2019t support the Tinkerpop API stack because Tinkerpop is highly\ndependent on the Java stack. Memgraph is implemented in C/C++/Assembly with\nopenCypher and the Bolt protocol as an interface. We have considered Tinkerpop\nintegration, but at the moment it\u2019s not one of our highest priorities."),(0,o.kt)("h3",{id:"how-do-you-interface-with-the-system"},"How do you interface with the system?"),(0,o.kt)("p",null,"Memgraph supports the ",(0,o.kt)("a",{parentName:"p",href:"http://www.opencypher.org"},"openCypher")," query language to\nquery the database instance. It\u2019s a declarative query language designed to\nquery graphs. Communication between clients and the database is done via the\n",(0,o.kt)("a",{parentName:"p",href:"https://boltprotocol.org"},"Bolt protocol"),". For the list of supported\nprogramming languages please take a look\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/getting-started/connecting-applications"},"here"),"."),(0,o.kt)("h3",{id:"how-do-you-upgrade"},"How do you upgrade?"),(0,o.kt)("p",null,"To do software upgrades the whole cluster has to go down. Before that data has\nto be migrated to a cluster with the newer version of Memgraph. At the moment,\nwe offer no downtime upgrades, but that\u2019s a feature which is high on our\npriority list. What we do offer is support when the upgrade is needed."),(0,o.kt)("h3",{id:"can-you-implement-custom-cypher-procedures"},"Can you implement custom Cypher procedures?"),(0,o.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup.\nQuery modules can be implemented by using the Python API or C API.\nTake a look at our guide ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"),"."),(0,o.kt)("h3",{id:"why-is-my-memgraph-instance-relatively-slow"},"Why is my Memgraph instance relatively slow?"),(0,o.kt)("p",null,"Label indexing is not enabled by default in Memgraph, i.e., Memgraph will not\nautomatically index labeled data. Therefore, it is up to the user to perform the\nindexing explicitly. Visit the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/reference-guide/indexing"},"Reference guide"),"\nto find out more about creating indexes."),(0,o.kt)("h3",{id:"what-are-the-cypher-implementation-differences-compared-to-neo4j"},"What are the Cypher implementation differences compared to Neo4j?"),(0,o.kt)("p",null,"Although we try to implement openCypher query language as closely to the\nlanguage reference as possible, we had to make some changes to enhance the\nuser experience. You can find the differences listed in the ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual/differences"},"Cypher manual"),"."))}d.isMDXComponent=!0}}]);