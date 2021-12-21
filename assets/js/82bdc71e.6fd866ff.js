"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47100],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),l=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53415:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"json",title:"Import JSON data",sidebar_label:"JSON"},m=void 0,l={unversionedId:"import-data/kafka/json",id:"version-2.0.1/import-data/kafka/json",title:"Import JSON data",description:"JSON (JavaScript Object Notation) is an",source:"@site/memgraph_versioned_docs/version-2.0.1/import-data/kafka/json.md",sourceDirName:"import-data/kafka",slug:"/import-data/kafka/json",permalink:"/docs/memgraph/2.0.1/import-data/kafka/json",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.1/import-data/kafka/json.md",tags:[],version:"2.0.1",frontMatter:{id:"json",title:"Import JSON data",sidebar_label:"JSON"},sidebar:"version-2.0.1/memgraph",previous:{title:"Avro",permalink:"/docs/memgraph/2.0.1/import-data/kafka/avro"},next:{title:"Protobuf",permalink:"/docs/memgraph/2.0.1/import-data/kafka/protobuf"}},p=[{value:"Example",id:"example",children:[{value:"Transformation modules",id:"transformation-modules",children:[],level:3},{value:"Creating the streams",id:"creating-the-streams",children:[],level:3}],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],c={toc:p};function u(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," (JavaScript Object Notation) is an\nopen standard file format and data interchange format that uses human-readable\ntext to store and transmit data objects consisting of attribute-value pairs and\narrays (or other serializable values). It is a common data format with a diverse\nrange of functionality in data interchange, including communication of web\napplications with servers."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's assume we have the following schemas coming out of their respective topics\n",(0,o.kt)("inlineCode",{parentName:"p"},"JsonStreamProfile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonStreamCompany"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonStreamWork")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'profile = {\n        "name": str,\n        "age" : int\n        "mail": str,\n        "address" : str,\n    }\n\ncompany = {\n        "name" : str,\n        "address" : str,\n    }\n\nworks_at = {\n            "person"  : str,\n            "company" : str,\n        }\n')),(0,o.kt)("p",null,"We can use the schemas to build the following graph:"),(0,o.kt)("img",{src:n(30122).Z,height:"300px"}),(0,o.kt)("h3",{id:"transformation-modules"},"Transformation modules"),(0,o.kt)("p",null,"Before consuming data from the stream, we need to implement a transformation\nmodule that will consume JSON messages from Kafka and output Cypher queries. In\norder to create a transformation module, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Python module"),(0,o.kt)("li",{parentName:"ol"},"Save it into the Memgraph's query modules directory (default:\n",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/memgraph/query_modules"),")"),(0,o.kt)("li",{parentName:"ol"},"Load it into Memgraph either on startup (automatically) or by running the\n",(0,o.kt)("inlineCode",{parentName:"li"},"CALL mg.load_all")," query")),(0,o.kt)("p",null,"Each procedure in the transformation module is responsible for one type of data\nin the stream. The procedure ",(0,o.kt)("inlineCode",{parentName:"p"},"profile_transformation")," can be found below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@mgp.transformation\ndef profile_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        message_json = json.loads(message.payload())\n        result_queries.append(mgp.Record (\n                query=f\'\'\'CREATE (p: Profile {{ id: {message_json["id"]}, name: "{message_json["name"]}", age: ToInteger({message_json["age"]})\n                address: "{message_json["address"]}", mail: "{message_json["mail"]}" }})\'\'\' ,\n                parameters=None\n            ))\n\n    return result_queries\n')),(0,o.kt)("h3",{id:"creating-the-streams"},"Creating the streams"),(0,o.kt)("p",null,"To import data into Memgraph, we need to create a stream for each topic and\napply our transformation module on incoming data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE STREAM JsonStreamProfile TOPICS json-stream-profiles  TRANSFORM transformation.profile_transformation;\nCREATE STREAM JsonStreamCompany TOPICS json-stream-companies  TRANSFORM transformation.company_transformation;\nCREATE STREAM JsonStreamWork TOPICS json-stream-work TRANSFORM transformation.works_at_transformation;\n")),(0,o.kt)("p",null,"To start the streams, execute the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"START ALL STREAMS;\n")),(0,o.kt)("p",null,"Run the following query to check if all the streams were started correctly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,o.kt)("p",null,"You can also check the node counter in ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," (",(0,o.kt)("strong",{parentName:"p"},"Overview tab"),") to\nsee if new nodes and relationships are arriving."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Check out the example-streaming-app on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub")," to see how Memgraph\ncan be connected to a Kafka stream."))}u.isMDXComponent=!0},30122:function(e,t,n){t.Z=n.p+"assets/images/kafka-graph-e4e8c68495826bbe558fbeadb1abc14d.png"}}]);