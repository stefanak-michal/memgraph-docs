"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1308],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(m,".").concat(d)]||u[d]||c[d]||s;return a?n.createElement(h,i(i({ref:t},l),{},{components:a})):n.createElement(h,i({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54800:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={id:"kafka-streams",title:"Managing Kafka streams",sidebar_label:"Managing Kafka streams"},m=void 0,p={unversionedId:"database-functionalities/streams/kafka/kafka-streams",id:"version-2.1.1/database-functionalities/streams/kafka/kafka-streams",isDocsHomePage:!1,title:"Managing Kafka streams",description:"If you are not familiar with Kafka, then please check out their [quickstart",source:"@site/memgraph_versioned_docs/version-2.1.1/database-functionalities/streams/kafka/kafka-streams.md",sourceDirName:"database-functionalities/streams/kafka",slug:"/database-functionalities/streams/kafka/kafka-streams",permalink:"/docs/memgraph/database-functionalities/streams/kafka/kafka-streams",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/database-functionalities/streams/kafka/kafka-streams.md",tags:[],version:"2.1.1",frontMatter:{id:"kafka-streams",title:"Managing Kafka streams",sidebar_label:"Managing Kafka streams"},sidebar:"version-2.1.1/memgraph",previous:{title:"Backup",permalink:"/docs/memgraph/reference-guide/backup"},next:{title:"Implement transformation modules",permalink:"/docs/memgraph/database-functionalities/streams/kafka/implement-transformation-module"}},l=[{value:"Configuring Memgraph",id:"configuring-memgraph",children:[],level:2},{value:"Creating the stream",id:"creating-the-stream",children:[],level:2},{value:"Check if the stream is working",id:"check-if-the-stream-is-working",children:[],level:2},{value:"Start the stream",id:"start-the-stream",children:[],level:2},{value:"Committed offsets",id:"committed-offsets",children:[],level:2}],c={toc:l};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you are not familiar with Kafka, then please check out their ",(0,s.kt)("a",{parentName:"p",href:"https://kafka.apache.org/quickstart"},"quickstart\nguide")," to get familiar. In the\ndocumentation, we assume that a Kafka server is available on the 9092 port of\nthe local machine (",(0,s.kt)("inlineCode",{parentName:"p"},"localhost:9092"),") as the default configuration of the Kafka\nquick start guide. Please adjust your setup accordingly."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Check out the ",(0,s.kt)("strong",{parentName:"p"},"example-streaming-app")," on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub")," to see how Memgraph\ncan be connected to a Kafka stream."))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For detailed technical information on streaming support, check out the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams"},"reference guide"),"."))),(0,s.kt)("h2",{id:"configuring-memgraph"},"Configuring Memgraph"),(0,s.kt)("p",null,"The list of default bootstrap servers can be set by the\n",(0,s.kt)("inlineCode",{parentName:"p"},"--kafka-bootstrap-servers")," configuration option. It has to be set explicitly.\nMorever, the user can overwrite the default list of brokers passed to\n",(0,s.kt)("inlineCode",{parentName:"p"},"--kafka-bootstrap-servers")," by setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"BOOTSTRAP_SERVERS <brokers>")," option\non a ",(0,s.kt)("inlineCode",{parentName:"p"},"CREATE STREAM")," clause."),(0,s.kt)("h2",{id:"creating-the-stream"},"Creating the stream"),(0,s.kt)("p",null,"The very first step is to make sure at least one transformation module is loaded\ninto Memgraph. If you are not sure how to define them, check out the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/memgraph/database-functionalities/streams/kafka/implement-transformation-module"},"transformation module\nguide"),".\nWe are going to use ",(0,s.kt)("inlineCode",{parentName:"p"},"transformation.my_transformation")," from that example, but we\nare going to alias it as ",(0,s.kt)("inlineCode",{parentName:"p"},"my.transform")," to make the size of result tables\nslimmer. For the topic name, we are going to use the topic from the Kafka quick\nstart, ",(0,s.kt)("inlineCode",{parentName:"p"},"quickstart-events"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE STREAM myStream\nTOPICS quickstart-events\nTRANSFORM my.transform;\n")),(0,s.kt)("p",null,"Check the created stream:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,s.kt)("p",null,"The result should be similar to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------+----------------------+---------------------+---------------------+----------------------+----------------------+----------------------+\n| name                 | type                 | batch_interval      | batch_size          | transformation_name  | owner                | is running           |\n+----------------------+----------------------+---------------------+---------------------+----------------------+----------------------+----------------------+\n| "myStream"           | "kafka"              | 100                 | 1000                | "my.kafka_transform" | Null                 | false                |\n+----------------------+----------------------+---------------------+---------------------+----------------------+----------------------+----------------------+\n')),(0,s.kt)("p",null,"The result contains the most important information about the existing streams,\ne.g., its name, topics it is subscribed to, etc."),(0,s.kt)("h2",{id:"check-if-the-stream-is-working"},"Check if the stream is working"),(0,s.kt)("p",null,"Maybe at first, you don't want to run the stream in the background but see the\nactual result of the transformation. This can be handy when implementing a\ntransformation. To achieve that, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query. This query\nwill consume the message from the last committed offset but won't commit the\noffsets. That means you are free to play around with it, and there won't be any\npermanent effects. For a freshly created stream there is probably no committed offset, so the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query will wait for new messages. By default, the\nquery will wait ",(0,s.kt)("inlineCode",{parentName:"p"},"30000")," milliseconds (",(0,s.kt)("inlineCode",{parentName:"p"},"30")," seconds) and after that, it will\nthrow a timeout exception. To give us some more time, use a larger timeout,\ne.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},"60000")," milliseconds (",(0,s.kt)("inlineCode",{parentName:"p"},"60")," seconds):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream TIMEOUT 60000;\n")),(0,s.kt)("p",null,"If you started the query, let's send some messages to the topic in the same way\nas described in the Kafka quick start guide. You should see a similar output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n| query                                                                                | parameters                                                                           |\n+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Example message 1", timestamp: 1625757014009, topic: "quickstart-events"} |\n+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n')),(0,s.kt)("p",null,"If you want to consume more batches, you can also increase the batch limit:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;\n")),(0,s.kt)("p",null,"As a result, you should see multiple messages (probably 3) in the output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n| query                                                                                | parameters                                                                           |\n+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Memgraph <3 Kafka", timestamp: 1625757026942, topic: "quickstart-events"} |\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Example message 2", timestamp: 1625757112493, topic: "quickstart-events"} |\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Example message 3", timestamp: 1625757118408, topic: "quickstart-events"} |\n+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+\n')),(0,s.kt)("h2",{id:"start-the-stream"},"Start the stream"),(0,s.kt)("p",null,"As we just demonstrated that the stream is working, we can start to ingest data\ninto the database by starting the stream and sending some messages to the topic."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"START STREAM myStream;\n")),(0,s.kt)("p",null,"After sending a few messages to the topic, the created vertices can be checked\nby executing ",(0,s.kt)("inlineCode",{parentName:"p"},"MATCH (n: MESSAGE) RETURN n"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-----------------------------------------------------------------------------------------------+\n| n                                                                                             |\n+-----------------------------------------------------------------------------------------------+\n| (:MESSAGE {payload: "first message", timestamp: 1625757438919, topic: "quickstart-events"})   |\n| (:MESSAGE {payload: "another message", timestamp: 1625757441665, topic: "quickstart-events"}) |\n| (:MESSAGE {payload: "it is working!", timestamp: 1625757444175, topic: "quickstart-events"})  |\n+-----------------------------------------------------------------------------------------------+\n')),(0,s.kt)("h2",{id:"committed-offsets"},"Committed offsets"),(0,s.kt)("p",null,"As our stream processed at least one message after starting it, it will commit\nthe message offset to the Kafka cluster. That means if the stream is stopped\nby stopping it with the ",(0,s.kt)("inlineCode",{parentName:"p"},"STOP STREAM myStream")," query (or by shutting Memgraph\ndown), the last committed offset will be retrieved from the Kafka cluster after\nrestarting the stream."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"NOTE: As the committed offsets are stored for the consumer groups on the Kafka\ncluster, if a new stream is created using the same consumer group, it might\ncontinue consuming the message from the same offset where the previous stream\nstopped. You can mitigate this by using different consumer group names or\nresetting the committed offset via Kafka admin client."))),(0,s.kt)("p",null,"Previously, we mentioned that the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query doesn't modify the\ncommitted offsets, which means using ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," on a stream that already\nhas some offsets committed can result in executing the transformation on the\nsame message multiple times. To demonstrate that, first, let's stop the stream:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP STREAM myStream;\n")),(0,s.kt)("p",null,"And then send a few messages to the topic, e.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},"message A"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"message B")," and\n",(0,s.kt)("inlineCode",{parentName:"p"},"message C"),". Then run the same query as before:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream TIMEOUT 60000;\n")),(0,s.kt)("p",null,"Running this query multiple times should emit the same results:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+--------------------------------------------------------------------------------+--------------------------------------------------------------------------------+\n| query                                                                          | parameters                                                                     |\n+--------------------------------------------------------------------------------+--------------------------------------------------------------------------------+\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})" | {payload: "message A", timestamp: 1625758319964, topic: "quickstart-events"}   |\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})" | {payload: "message B", timestamp: 1625758321735, topic: "quickstart-events"}   |\n| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})" | {payload: "message C", timestamp: 1625758323795, topic: "quickstart-events"}   |\n+--------------------------------------------------------------------------------+--------------------------------------------------------------------------------+\n')))}u.isMDXComponent=!0}}]);