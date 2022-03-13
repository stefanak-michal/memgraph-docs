"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63444],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72048:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={id:"pulsar-streams",title:"How to manage Pulsar streams",sidebar_label:"Manage Pulsar streams"},l=void 0,m={unversionedId:"how-to-guides/streams/pulsar/pulsar-streams",id:"version-2.1.1/how-to-guides/streams/pulsar/pulsar-streams",title:"How to manage Pulsar streams",description:"If you are not familiar with Pulsar, then please check out their",source:"@site/memgraph_versioned_docs/version-2.1.1/how-to-guides/streams/pulsar/pulsar-streams.md",sourceDirName:"how-to-guides/streams/pulsar",slug:"/how-to-guides/streams/pulsar/pulsar-streams",permalink:"/docs/memgraph/2.1.1/how-to-guides/streams/pulsar/pulsar-streams",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/how-to-guides/streams/pulsar/pulsar-streams.md",tags:[],version:"2.1.1",frontMatter:{id:"pulsar-streams",title:"How to manage Pulsar streams",sidebar_label:"Manage Pulsar streams"},sidebar:"memgraph",previous:{title:"Implement transformation modules",permalink:"/docs/memgraph/2.1.1/how-to-guides/streams/kafka/implement-transformation-module"},next:{title:"Implement transformation modules",permalink:"/docs/memgraph/2.1.1/how-to-guides/streams/pulsar/implement-transformation-module"}},p={},c=[{value:"Configuring Memgraph",id:"configuring-memgraph",level:2},{value:"Creating the stream",id:"creating-the-stream",level:2},{value:"Check if the stream is working",id:"check-if-the-stream-is-working",level:2},{value:"Start the stream",id:"start-the-stream",level:2},{value:"Acknowledging messages",id:"acknowledging-messages",level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"If you are not familiar with Pulsar, then please check out their\n",(0,s.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"site")," to get a better understanding. In the\ndocumentation, we assume that a Pulsar cluster is available on the 6650 port of\nthe local machine (",(0,s.kt)("inlineCode",{parentName:"p"},"127.0.0.1:6650"),"). Please adjust your setup accordingly."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For detailed technical information on streaming support, check out the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/reference-guide/streams"},"reference guide"),"."))),(0,s.kt)("h2",{id:"configuring-memgraph"},"Configuring Memgraph"),(0,s.kt)("p",null,"You need to provide a service URL so Memgraph can locate the Pulsar cluster. The\nservice URL can be set using the configuration flag ",(0,s.kt)("inlineCode",{parentName:"p"},"--pulsar-service-url"),"."),(0,s.kt)("h2",{id:"creating-the-stream"},"Creating the stream"),(0,s.kt)("p",null,"The very first step is to make sure at least one transformation module is loaded\ninto Memgraph. If you are not sure how to define them, check out the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/how-to-guides/streams/pulsar/implement-transformation-module"},"transformation module\nguide"),".\nWe will use ",(0,s.kt)("inlineCode",{parentName:"p"},"transformation.my_pulsar_transformation")," from that example, but we\nare going to alias it as ",(0,s.kt)("inlineCode",{parentName:"p"},"my.pulsar_transform")," to make the size of result tables\nslimmer. For the topic name, we are going to use ",(0,s.kt)("inlineCode",{parentName:"p"},"topic1"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE PULSAR STREAM myStream\nTOPICS topic1\nTRANSFORM my.pulsar_transform;\n")),(0,s.kt)("p",null,"Check the created stream:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,s.kt)("p",null,"The result should be similar to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-----------------------+-----------------------+----------------------+-----------------------+-----------------------+-----------------------+-----------------------+\n| name                  | type                  | batch_interval       | batch_size            | transformation_name   | owner                 | is running            |\n+-----------------------+-----------------------+----------------------+-----------------------+-----------------------+-----------------------+-----------------------+\n| "myStream"            | "pulsar"              | 100                  | 1000                  | "my.pulsar_transform" | Null                  | false                 |\n+-----------------------+-----------------------+----------------------+-----------------------+-----------------------+-----------------------+-----------------------+\n')),(0,s.kt)("p",null,"The result contains the most important information about the existing streams,\ne.g., its name, topics it is subscribed to, etc."),(0,s.kt)("h2",{id:"check-if-the-stream-is-working"},"Check if the stream is working"),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," only works for single non-partitioned topic consumers. The next\nexamples will fail if your Pulsar stream source consumes multiple topics or from\na partitioned topic."))),(0,s.kt)("p",null,"Maybe at first, you don't want to run the stream in the background but see the\nactual result of the transformation. This can be handy when implementing a\ntransformation. To achieve that, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query. This query\nwill consume the message from the last acknowledged message but won't\nacknowledge the next message. That means you are free to play around with it,\nand there won't be any permanent effects. For a freshly created stream, there is\nprobably no acknowledged message, so the ",(0,s.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query will wait for new\nmessages. By default, the query will wait ",(0,s.kt)("inlineCode",{parentName:"p"},"30000")," milliseconds ( ",(0,s.kt)("inlineCode",{parentName:"p"},"30")," seconds)\nand after that, it will throw a timeout exception. To give us some more time,\nuse a larger timeout, e.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},"60000")," milliseconds ( ",(0,s.kt)("inlineCode",{parentName:"p"},"60")," seconds):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream TIMEOUT 60000;\n")),(0,s.kt)("p",null,"If you started the query, let's send some messages to the topic. You should see\na similar output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-----------------------------------------------------------------------------------------------------------------+\n| query                                                         | parameters                                      |\n+-----------------------------------------------------------------------------------------------------------------+\n| "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"       | {payload: "Example message 1", topic: "topic1"} |\n+--------------------------------------------------------------------------------------+---------------------------\n')),(0,s.kt)("p",null,"If you want to consume more batches, you can also increase the batch limit:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;\n")),(0,s.kt)("p",null,"As a result, you should see multiple messages (probably 3) in the output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+---------------------------------------------------------------+--------------------------------------------------+\n| query                                                         | parameters                                       |\n+---------------------------------------------------------------+--------------------------------------------------+\n| "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"       | {payload: "Memgraph <3 Pulsar", topic: "topic1"} |\n| "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"       | {payload: "Example message 2", topic: "topic1"}  |\n| "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"       | {payload: "Example message 3", topic: "topic1"}  |\n+---------------------------------------------------------------+--------------------------------------------------+\n')),(0,s.kt)("h2",{id:"start-the-stream"},"Start the stream"),(0,s.kt)("p",null,"As we just demonstrated that the stream is working, we can start to ingest data\ninto the database by starting the stream and sending some messages to the topic."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"START STREAM myStream;\n")),(0,s.kt)("p",null,"After sending a few messages to the topic, the created vertices can be checked\nby executing ",(0,s.kt)("inlineCode",{parentName:"p"},"MATCH (n: MESSAGE) RETURN n"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------------------------------------+\n| n                                                        |\n+----------------------------------------------------------+\n| (:MESSAGE {payload: "first message", topic: "topic1"})   |\n| (:MESSAGE {payload: "another message", topic: "topic1"}) |\n| (:MESSAGE {payload: "it is working!", topic: "topic1"})  |\n+----------------------------------------------------------+\n')),(0,s.kt)("h2",{id:"acknowledging-messages"},"Acknowledging messages"),(0,s.kt)("p",null,"After each message is processed, the stream will acknowledge them. If the stream\nis stopped using the ",(0,s.kt)("inlineCode",{parentName:"p"},"STOP STREAM myStream")," query (or by shutting Memgraph\ndown), next time the stream is started, it will continue processing the message\nfrom the last acknowledged message."))}d.isMDXComponent=!0}}]);