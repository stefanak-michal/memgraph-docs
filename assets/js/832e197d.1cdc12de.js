"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85739],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3107:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"overview",title:"How-to guides overview",sidebar_label:"How-to guides overview",slug:"/how-to-guides"},l=void 0,u={unversionedId:"how-to-guides/overview",id:"version-2.1.1/how-to-guides/overview",title:"How-to guides overview",description:"Articles within this section serve as a cookbook for getting things done as fast",source:"@site/memgraph_versioned_docs/version-2.1.1/how-to-guides/overview.md",sourceDirName:"how-to-guides",slug:"/how-to-guides",permalink:"/docs/memgraph/2.1.1/how-to-guides",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/how-to-guides/overview.md",tags:[],version:"2.1.1",frontMatter:{id:"overview",title:"How-to guides overview",sidebar_label:"How-to guides overview",slug:"/how-to-guides"},sidebar:"memgraph",previous:{title:"Understanding music (with query modules)",permalink:"/docs/memgraph/2.1.1/tutorials/understanding-music-with-modules"},next:{title:"Backup",permalink:"/docs/memgraph/2.1.1/reference-guide/backup"}},p={},m=[{value:"Streams",id:"streams",level:2},{value:"Inspect and profile Cypher queries",id:"inspect-and-profile-cypher-queries",level:2},{value:"Query modules",id:"query-modules",level:2},{value:"Replication",id:"replication",level:2},{value:"Backup",id:"backup",level:2},{value:"User privileges",id:"user-privileges",level:2},{value:"Authentication and authorization",id:"authentication-and-authorization",level:2},{value:"Triggers",id:"triggers",level:2}],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Articles within this section serve as a cookbook for getting things done as fast\nas possible. These articles tend to provide a step-by-step guide on using\ncertain Memgraph features or solving a particular problem."),(0,o.kt)("h2",{id:"streams"},"Streams"),(0,o.kt)("p",null,"Memgraph can connect to existing ",(0,o.kt)("strong",{parentName:"p"},"Kafka"),", ",(0,o.kt)("strong",{parentName:"p"},"Pulsar")," and ",(0,o.kt)("strong",{parentName:"p"},"Redpanda")," streams.\nThe streams use user-defined transformations to produce Cypher queries based on\nthe received messages. To learn more about streams and transformations take a\nlook at the following pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kafka"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/streams/kafka/kafka-streams"},"Managing Kafka\nstreams")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/streams/kafka/implement-transformation-module"},"Implement transformation\nmodules")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pulsar"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/streams/pulsar/pulsar-streams"},"Managing Pulsar\nstreams")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/streams/pulsar/implement-transformation-module"},"Implement transformation\nmodules"))))),(0,o.kt)("h2",{id:"inspect-and-profile-cypher-queries"},"Inspect and profile Cypher queries"),(0,o.kt)("p",null,"Memgraph also enables you to inspect and profile the execution of a query and\nget a detailed report on how the query's plan behaved. Take a look at the\nguides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/inspecting-queries"},"Inspecting queries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/profiling-queries"},"Profiling queries"))),(0,o.kt)("h2",{id:"query-modules"},(0,o.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.1.1/reference-guide/query-modules"},"Query modules")),(0,o.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on\nstartup or later on. To learn more about query modules take a look at the\nfollowing guides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/query-modules"},"Query modules basics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/query-modules/implement-query-modules"},"Implement custom query\nmodules"))),(0,o.kt)("h2",{id:"replication"},"Replication"),(0,o.kt)("p",null,"Memgraph supports replication and the following guide demonstrates how to create\na simple cluster of nodes running Memgraph instances:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/replication"},"Replication"))),(0,o.kt)("h2",{id:"backup"},"Backup"),(0,o.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup\nof the files containing its data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/reference-guide/backup"},"Backup"))),(0,o.kt)("h2",{id:"user-privileges"},"User privileges"),(0,o.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set\nof privileges to users or groups of users. To learn more visit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/manage-user-privileges"},"User privileges (Enterprise)"))),(0,o.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,o.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a\ncustom-built external auth module. To learn more visit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/how-to-guides/manage-users-using-ldap"},"Authentication and authorization (Enterprise)"))),(0,o.kt)("h2",{id:"triggers"},"Triggers"),(0,o.kt)("p",null,"Memgraph supports running openCypher statements after a certain event happens\nduring transaction execution, i.e. triggers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/reference-guide/triggers"},"Triggers"))))}d.isMDXComponent=!0}}]);