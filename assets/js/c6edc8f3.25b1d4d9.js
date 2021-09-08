"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4043],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(m,".").concat(d)]||u[d]||c[d]||s;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},39205:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={id:"kafka-streams",title:"Managing Kafka streams",sidebar_label:"Managing Kafka streams"},m=void 0,p={unversionedId:"database-functionalities/streams/kafka-streams",id:"version-1.6.0/database-functionalities/streams/kafka-streams",isDocsHomePage:!1,title:"Managing Kafka streams",description:"To connect Memgraph to a Kafka stream, we obviously need an existing stream.",source:"@site/memgraph_versioned_docs/version-1.6.0/database-functionalities/streams/kafka-streams.md",sourceDirName:"database-functionalities/streams",slug:"/database-functionalities/streams/kafka-streams",permalink:"/memgraph/1.6.0/database-functionalities/streams/kafka-streams",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/database-functionalities/streams/kafka-streams.md",tags:[],version:"1.6.0",frontMatter:{id:"kafka-streams",title:"Managing Kafka streams",sidebar_label:"Managing Kafka streams"},sidebar:"version-1.6.0/memgraph",previous:{title:"Backup",permalink:"/memgraph/1.6.0/reference-guide/backup"},next:{title:"Implement transformation modules",permalink:"/memgraph/1.6.0/database-functionalities/streams/implement-transformation-module"}},l=[{value:"Configuring Memgraph",id:"configuring-memgraph",children:[]},{value:"Creating the stream",id:"creating-the-stream",children:[]},{value:"Check if the stream is working",id:"check-if-the-stream-is-working",children:[]},{value:"Start the stream",id:"start-the-stream",children:[]},{value:"Committed offsets",id:"committed-offsets",children:[]}],c={toc:l};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"To connect Memgraph to a Kafka stream, we obviously need an existing stream.\nAs Kafka itself is quite a complex system, we don't aim to teach you about\nit. If you are not familiar with Kafka, then please check out their ",(0,s.kt)("a",{parentName:"p",href:"https://kafka.apache.org/quickstart"},"quickstart\nguide")," to get familiar. In the\nfollowing, we assume that a Kafka server is available on the 9092 port of\nthe local machine (",(0,s.kt)("inlineCode",{parentName:"p"},"localhost:9092"),") as the default configuration of the Kafka\nquick start guide."),(0,s.kt)("h2",{id:"configuring-memgraph"},"Configuring Memgraph"),(0,s.kt)("p",null,"As Memgraph can connect to only one Kafka cluster at once, the list of\nbootstrap servers can be set by the ",(0,s.kt)("inlineCode",{parentName:"p"},"--kafka-bootstrap-servers"),"\nconfiguration option. It has to be set to ",(0,s.kt)("inlineCode",{parentName:"p"},"localhost:9092")," (or to an\narbitrary address where a Kafka cluster is available)."),(0,s.kt)("h2",{id:"creating-the-stream"},"Creating the stream"),(0,s.kt)("p",null,"The very first step is to make sure at least one transformation is loaded into\nMemgraph. If you are not sure how to define them, you can find an example\nmodule\n",(0,s.kt)("a",{parentName:"p",href:"/memgraph/1.6.0/database-functionalities/streams/implement-transformation-module"},"here"),".\nWe are going to use ",(0,s.kt)("inlineCode",{parentName:"p"},"transformation.my_transformation")," from that example, but\nwith the shorter ",(0,s.kt)("inlineCode",{parentName:"p"},"my.transform")," name to make the size of result tables slimmer.\nFor the topic name, we are going to use the topic from the Kafka quick start,\n",(0,s.kt)("inlineCode",{parentName:"p"},"quickstart-events"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE STREAM myStream\nTOPICS quickstart-events\nTRANSFORM my.transform;\n")),(0,s.kt)("p",null,"Check the created stream:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,s.kt)("p",null,"The result should be like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-----------------------+-----------------------+-----------------------+-----------------------+-----------------------+-----------------------+-----------------------+\n| name                  | topics                | consumer_group        | batch_interval        | batch_size            | transformation_name   | is running            |\n+-----------------------+-----------------------+-----------------------+-----------------------+-----------------------+-----------------------+-----------------------+\n| "myStream"            | ["quickstart-events"] | "mg_consumer"         | Null                  | Null                  | "my.transform"        | false                 |\n+-----------------------+-----------------------+-----------------------+-----------------------+-----------------------+-----------------------+-----------------------+\n\n')),(0,s.kt)("p",null,"The result contains the most important information about the existing streams,\ne.g., its name, topics it is subscribed to, etc."),(0,s.kt)("h2",{id:"check-if-the-stream-is-working"},"Check if the stream is working"),(0,s.kt)("p",null,"Maybe at first, you don't want to run the stream in the background but see the\nactual result of the transformation. This can be handy when implementing a\ntransformation. To achieve that, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query. This query\nwill consume the message from the last committed offset but won't commit the\noffsets. That means you are free to play around with it, and there won't be any\npermanent effects. For a freshly created stream. There is probably no committed\noffset, so the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query will wait for new messages. By default, the\nquery will wait ",(0,s.kt)("inlineCode",{parentName:"p"},"30000")," milliseconds (",(0,s.kt)("inlineCode",{parentName:"p"},"30")," seconds) and after that, it will\nthrow a timeout exception. To give us some more time, use a larger timeout,\ne.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},"60000")," milliseconds (",(0,s.kt)("inlineCode",{parentName:"p"},"60")," seconds):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream TIMEOUT 60000;\n")),(0,s.kt)("p",null,"If you started the query, let's send some messages to the topic in the same way\nas described in the Kafka quick start guide. You should see a similar output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n| query                                                                                | parameters                                                                           |\n+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Example message 1", timestamp: 1625757014009, topic: "quickstart-events"} |\n+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n')),(0,s.kt)("p",null,"If you want to consume more batches, you can also increase the batch limit:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;\n")),(0,s.kt)("p",null,"As a result, you should see multiple messages (probably 3) in the output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n| query                                                                                | parameters                                                                           |\n+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Memgraph <3 Kafka", timestamp: 1625757026942, topic: "quickstart-events"} |\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Example message 2", timestamp: 1625757112493, topic: "quickstart-events"} |\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Example message 3", timestamp: 1625757118408, topic: "quickstart-events"} |\n+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n')),(0,s.kt)("h2",{id:"start-the-stream"},"Start the stream"),(0,s.kt)("p",null,"As we just demonstrated that the stream is working, we can start to ingest data\ninto the database by starting the stream and sending some messages to the topic."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"START STREAM myStream;\n")),(0,s.kt)("p",null,"After sending a few messages to the topic, the created vertices can be checked\nby executing ",(0,s.kt)("inlineCode",{parentName:"p"},"MATCH (n: MESSAGE) RETURN n"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-----------------------------------------------------------------------------------------------+\n| n                                                                                             |\n+-----------------------------------------------------------------------------------------------+\n| (:MESSAGE {payload: "first message", timestamp: 1625757438919, topic: "quickstart-events"})   |\n| (:MESSAGE {payload: "another message", timestamp: 1625757441665, topic: "quickstart-events"}) |\n| (:MESSAGE {payload: "it is working!", timestamp: 1625757444175, topic: "quickstart-events"})  |\n+-----------------------------------------------------------------------------------------------+\n')),(0,s.kt)("h2",{id:"committed-offsets"},"Committed offsets"),(0,s.kt)("p",null,"As our stream processed at least one message after starting it, it will commit\nthe message offset to the Kafka cluster. That means if the stream is stopped\nby stopping it with the ",(0,s.kt)("inlineCode",{parentName:"p"},"STOP STREAM myStream")," query (or by shutting Memgraph\ndown), the last committed offset will be retrieved from the Kafka cluster after\nrestarting the stream."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"NOTE: As the committed offsets are stored for the consumer groups on the Kafka\ncluster, if a new stream is created using the same consumer group, it might\ncontinue consuming the message from the same offset where the previous stream\nstopped. You can mitigate this by using different consumer group names or\nresetting the committed offset via Kafka admin client."))),(0,s.kt)("p",null,"Previously, we mentioned that the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query doesn't modify the\ncommitted offsets, which means using ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," on a stream that already\nhas some offsets committed can result in executing the transformation on the\nsame message multiple times. To demonstrate that, first, let's stop the stream:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP STREAM myStream;\n")),(0,s.kt)("p",null,"And then send a few messages to the topic, e.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},"message A"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"message B")," and\n",(0,s.kt)("inlineCode",{parentName:"p"},"message C"),". Then run the same query as before:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream TIMEOUT 60000;\n")),(0,s.kt)("p",null,"Running this query multiple times should emit the same results:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+--------------------------------------------------------------------------------+--------------------------------------------------------------------------------+\n| query                                                                          | parameters                                                                     |\n+--------------------------------------------------------------------------------+--------------------------------------------------------------------------------+\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})" | {payload: "message A", timestamp: 1625758319964, topic: "quickstart-events"}   |\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})" | {payload: "message B", timestamp: 1625758321735, topic: "quickstart-events"}   |\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})" | {payload: "message C", timestamp: 1625758323795, topic: "quickstart-events"}   |\n+--------------------------------------------------------------------------------+--------------------------------------------------------------------------------+\n')))}u.isMDXComponent=!0}}]);