"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41557],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return c}});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=p(e.components);return r.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=p(t),c=n,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return t?r.createElement(h,i(i({ref:a},s),{},{components:t})):r.createElement(h,i({ref:a},s))}));function c(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var m={};for(var l in a)hasOwnProperty.call(a,l)&&(m[l]=a[l]);m.originalType=e,m.mdxType="string"==typeof e?e:n,i[1]=m;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78762:function(e,a,t){t.r(a),t.d(a,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return u}});var r=t(87462),n=t(63366),o=(t(67294),t(3905)),i=["components"],m={id:"overview",title:"Importing data from Kafka streams",sidebar_label:"Kafka streams overview",slug:"/import-data/kafka",pagination_prev:"import-data/overview"},l=void 0,p={unversionedId:"import-data/kafka/overview",id:"version-2.2.0/import-data/kafka/overview",title:"Importing data from Kafka streams",description:"Memgraph can natively ingest streaming data from upstream sources using [Apache",source:"@site/memgraph_versioned_docs/version-2.2.0/import-data/kafka/overview.md",sourceDirName:"import-data/kafka",slug:"/import-data/kafka",permalink:"/docs/memgraph/import-data/kafka",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/import-data/kafka/overview.md",tags:[],version:"2.2.0",frontMatter:{id:"overview",title:"Importing data from Kafka streams",sidebar_label:"Kafka streams overview",slug:"/import-data/kafka",pagination_prev:"import-data/overview"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/import-data"},next:{title:"JSON",permalink:"/docs/memgraph/import-data/kafka/json"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Importing data",id:"importing-data",level:2},{value:"1. Start Memgraph",id:"1-start-memgraph",level:3},{value:"2. Define the transformation module",id:"2-define-the-transformation-module",level:3},{value:"3. Create a stream in Memgraph",id:"3-create-a-stream-in-memgraph",level:3},{value:"4. Start ingesting data from the stream",id:"4-start-ingesting-data-from-the-stream",level:3},{value:"Logs",id:"logs",level:2},{value:"What next?",id:"what-next",level:2}],d={toc:u};function c(e){var a=e.components,m=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,m,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Memgraph can natively ingest streaming data from upstream sources using ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache\nKafka")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.confluent.io"},"Confluent\nPlatform"),". To import data using streams, you must:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start Memgraph and connect to it"),(0,o.kt)("li",{parentName:"ol"},"Define a transformation module"),(0,o.kt)("li",{parentName:"ol"},"Create the stream in Memgraph"),(0,o.kt)("li",{parentName:"ol"},"Start ingesting data from the stream")),(0,o.kt)("img",{src:t(54889).Z}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In order to create a Kafka pipeline, you must have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a working Kafka stream"),(0,o.kt)("li",{parentName:"ul"},"access to a running Memgraph instance.")),(0,o.kt)("h2",{id:"importing-data"},"Importing data"),(0,o.kt)("p",null,"When importing data, we should be aware of all the different nodes and\nrelationships our stream contains. The best practice is to have a dedicated\ntopic for each message type in order to parse the data more efficiently. Each\ntopic requires a separate procedure within a single transformation module to\nhandle the conversion. Once we create a stream in Memgraph and start ingesting\ndata, we are all set to analyze it."),(0,o.kt)("h3",{id:"1-start-memgraph"},"1. Start Memgraph"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/next/installation"},"Start Memgraph")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/next/connect-to-memgraph"},"establish a\nconnection")," to the\ndatabase."),(0,o.kt)("p",null,"If you are starting Memgraph using a Docker image and would like to access\nconfiguration files or logs, be sure to run the image with the following\nvolumes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v mg_log:/var/log/memgraph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-v mg_etc:/etc/memgraph"))),(0,o.kt)("h3",{id:"2-define-the-transformation-module"},"2. Define the transformation module"),(0,o.kt)("p",null,"A transformation module is a user-defined program that receives data from Kafka\nand returns processed data in the form of Cypher queries. The most common\nformats received from Kafka are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/import-data/kafka/json"},"JSON"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/import-data/kafka/avro"},"Avro"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/import-data/kafka/protobuf"},"Protobuf")),".")),(0,o.kt)("p",null,"Transformation modules can be written in either ",(0,o.kt)("strong",{parentName:"p"},"Python")," or ",(0,o.kt)("strong",{parentName:"p"},"C"),". Take a look\nat the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/streams/kafka/implement-transformation-module#python-api"},"Python API\nguide"),"\nfor an example of how to implement transformation modules in Python."),(0,o.kt)("p",null,"When started, Memgraph will automatically attempt to load the query modules from\nall ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py")," files it finds in the default\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. You can point to a different\ndirectory by changing or extending the ",(0,o.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the\nmain configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or define it within a\ncommand-line parameter when using Docker."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please remember that if you are using Memgraph Platform image, you should pass\nconfiguration flags within MEMGRAPH environmental variable (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'docker run -e MEMGRAPH="--bolt-port=7687" memgraph/memgraph-platform'),") and if you are using\nany other image, you should pass them as arguments after the image name (e.g.,\n",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-mage --bolt-port=7687 --query-modules-directory=path/path"),")."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Transfer a transformation module into a Docker container"),"If you are using Docker to run Memgraph, you will need to copy the transformation module file from your local directory into the Docker container where Memgraph can access it.",(0,o.kt)("p",null," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Open a new terminal and find the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Copy a file from your current directory to the container with the\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker cp ./trans_module.py <CONTAINER ID>:/usr/lib/memgraph/query_modules/trans_module.py\n")),(0,o.kt)("p",null,"The file is now inside your Docker container.")),(0,o.kt)("p",null,"If the transformation module has been added to the directory while the Memgraph\ninstance was already running, you need to load it manually by using the\nfollowing query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load('<transformation_name>');\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all;\n")),(0,o.kt)("p",null,"If you want to check if your module has properly loaded in Memgraph run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,o.kt)("p",null,"You should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'+-------------------------------------------------------+\n| name                                                  |\n+-------------------------------------------------------+\n| "transformation_name.my_transformation_module"        |\n+-------------------------------------------------------+\n')),(0,o.kt)("h3",{id:"3-create-a-stream-in-memgraph"},"3. Create a stream in Memgraph"),(0,o.kt)("p",null,"First, make sure Kafka and Memgraph are running, and there is a topic available.\nThen, make sure the transformation module is loaded"),(0,o.kt)("p",null,"Create the stream in Memgraph with the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE KAFKA STREAM <stream_name>\nTOPICS <topic1>[, <topic2>, ...]\nTRANSFORM <transformation_module.transformation_procedure>\n[BOOTSTRAP_SERVERS <bootstrap servers>];\n")),(0,o.kt)("p",null,"You need to create one stream for each topic and procedure you have."),(0,o.kt)("p",null,"For more options and information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE .. STREAM")," query check out\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams"},"reference guide"),"."),(0,o.kt)("h3",{id:"4-start-ingesting-data-from-the-stream"},"4. Start ingesting data from the stream"),(0,o.kt)("p",null,"The previous query only created the streams. To start streaming data, execute\nthe following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM <stream_name>;\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"START ALL STREAMS;\n")),(0,o.kt)("p",null,"Your data should be slowly arriving in your Memgraph instance. To check if\neverything is working, run the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM <stream_name>\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,o.kt)("p",null,"You can also check the node counter in ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," (",(0,o.kt)("strong",{parentName:"p"},"Overview tab"),") to\nsee if new nodes and relationships are arriving."),(0,o.kt)("p",null,"For all the other stream commands, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams"},"the reference\nguide"),"."),(0,o.kt)("h2",{id:"logs"},"Logs"),(0,o.kt)("p",null,"Errors and notifications regarding streams are contained in Memgraph's log files\nwhich can be found at ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph/memgraph_<date>.log")," Look for the name\nof your stream in the log file to find the error. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"grep")," command\nto search for the stream in the log file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grep '<stream_name>' /var/log/memgraph/memgraph_<date>.log\n")),(0,o.kt)("h2",{id:"what-next"},"What next?"),(0,o.kt)("p",null,"Take a look at the tutorial we made to help you ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/graph-stream-processing-with-kafka"},"connect Memgraph and\nKafka"),". Learn more about the\nquery power of ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher language"),", or check out ",(0,o.kt)("a",{parentName:"p",href:"/mage"},"MAGE")," -\nan open-source repository that contains graph algorithms and modules that can\nhelp you tackle the most interesting and challenging graph analytics problems.\nIf you are using ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab"),", a visual user interface for running queries\nand visualizing graph data, you might be interested in the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-lab/style-script/quick-start"},"Style script\nlanguage")," that will help you bedazzle\nyour graphs. Above all, enjoy your graph database!"))}c.isMDXComponent=!0},54889:function(e,a,t){a.Z=t.p+"assets/images/kafka-overview-4774e9a423387407d8ba09f2a83ca88a.png"}}]);