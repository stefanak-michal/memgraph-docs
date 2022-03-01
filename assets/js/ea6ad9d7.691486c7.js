"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65685],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52317:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"overview",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},s=void 0,u={unversionedId:"reference-guide/overview",id:"reference-guide/overview",title:"Reference guide overview",description:"The Memgraph reference guide contains the details of implemented features.",source:"@site/docs/reference-guide/overview.md",sourceDirName:"reference-guide",slug:"/reference-guide",permalink:"/docs/memgraph/next/reference-guide",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},sidebar:"memgraph",previous:{title:"Manage user privileges",permalink:"/docs/memgraph/next/how-to-guides/manage-user-privileges"},next:{title:"Backup",permalink:"/docs/memgraph/next/reference-guide/backup"}},p=[{value:"Backup",id:"backup",children:[],level:2},{value:"Built-in graph algorithms",id:"built-in-graph-algorithms",children:[],level:2},{value:"Configuration settings",id:"configuration-settings",children:[],level:2},{value:"Cypher query language",id:"cypher-query-language",children:[],level:2},{value:"Import data",id:"import-data",children:[],level:2},{value:"Indexing",id:"indexing",children:[],level:2},{value:"Inspecting and optimizing queries",id:"inspecting-and-optimizing-queries",children:[],level:2},{value:"Isolation levels",id:"isolation-levels",children:[],level:2},{value:"Metadata",id:"metadata",children:[],level:2},{value:"Monitoring server",id:"monitoring-server",children:[],level:2},{value:"Query modules",id:"query-modules",children:[],level:2},{value:"Replication",id:"replication",children:[],level:2},{value:"Server stats",id:"server-stats",children:[],level:2},{value:"Streams",id:"streams",children:[],level:2},{value:"Temporal types",id:"temporal-types",children:[],level:2},{value:"Triggers",id:"triggers",children:[],level:2},{value:"Enterprise features",id:"enterprise-features",children:[{value:"Audit log",id:"audit-log",children:[],level:3},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[],level:3},{value:"Runtime settings",id:"runtime-settings",children:[],level:3},{value:"Security - user privileges",id:"security---user-privileges",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Memgraph")," reference guide contains the details of implemented features."),(0,i.kt)("h2",{id:"backup"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/backup"},"Backup")),(0,i.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup\nof the files containing its data."),(0,i.kt)("h2",{id:"built-in-graph-algorithms"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/graph-algorithms"},"Built-in graph algorithms")),(0,i.kt)("p",null,"Memgraph comes with custom-built algorithms that are implemented using C++:\n",(0,i.kt)("strong",{parentName:"p"},"Filtering variable-length paths"),", ",(0,i.kt)("strong",{parentName:"p"},"Breadth-first search"),", and ",(0,i.kt)("strong",{parentName:"p"},"Weighted\nshortest path"),"."),(0,i.kt)("h2",{id:"configuration-settings"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/configuration"},"Configuration settings")),(0,i.kt)("p",null,"Memgraph can be configured by editing the Memgraph configuration file or by\nincluding another configuration file."),(0,i.kt)("h2",{id:"cypher-query-language"},(0,i.kt)("a",{parentName:"h2",href:"/cypher-manual"},"Cypher query language")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cypher")," is a declarative graph query language that allows for expressive and\nefficient data querying in a property graph. It aims to be intuitive and easy to\nlearn while providing a powerful interface for working with graph-based data."),(0,i.kt)("h2",{id:"import-data"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/import-data/overview"},"Import data")),(0,i.kt)("p",null,"Memgraph offers painless import of data from CSV files or Cypher queries within\na .cypherl format file."),(0,i.kt)("h2",{id:"indexing"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/indexing"},"Indexing")),(0,i.kt)("p",null,"An index stores additional information on certain types of data, so that\nretrieving said data becomes more efficient."),(0,i.kt)("h2",{id:"inspecting-and-optimizing-queries"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/inspecting-queries"},"Inspecting and optimizing queries")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/inspecting-queries"},"Inspect the plan"),"\nfor executing a query, a pipeline of operations which will be performed on the\ndatabase in order to yield the results for a given query, to gain insight into\nthe execution of a query or ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/profiling-queries"},"get a detailed\nreport")," on how the\nquery's plan behaved."),(0,i.kt)("h2",{id:"isolation-levels"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/isolation-levels"},"Isolation levels")),(0,i.kt)("p",null,"Isolation is a property that defines how or when the changes made by one\noperation become visible to other users or systems. Check available options for\nMemgraph."),(0,i.kt)("h2",{id:"metadata"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/metadata"},"Metadata")),(0,i.kt)("p",null,"Bolt protocol specifies additional data (metadata) that can be sent along with\nthe requested results. Find out how to access it."),(0,i.kt)("h2",{id:"monitoring-server"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/monitoring-server"},"Monitoring server")),(0,i.kt)("p",null,"Receive logs and runtime information from Memgraph in real-time via WebSocket connection."),(0,i.kt)("h2",{id:"query-modules"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/query-modules"},"Query modules")),(0,i.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on\nstartup or later on. To learn more about query modules take a look at the\nfollowing guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/next/reference-guide/query-modules/available-query-modules"},"Available query\nmodules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/next/reference-guide/query-modules/load-call-query-modules"},"Load and call query\nmodules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/next/how-to-guides/query-modules/implement-query-modules"},"Implement custom query\nmodules"))),(0,i.kt)("h2",{id:"replication"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/replication"},"Replication")),(0,i.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup\nof the files containing its data. Memgraph supports replication and allows you\nto create a cluster of nodes running Memgraph instances."),(0,i.kt)("h2",{id:"server-stats"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/server-stats"},"Server stats")),(0,i.kt)("p",null,"Get information about the running instance. "),(0,i.kt)("h2",{id:"streams"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/streams"},"Streams")),(0,i.kt)("p",null,"Memgraph can connect to existing ",(0,i.kt)("strong",{parentName:"p"},"Kafka"),", ",(0,i.kt)("strong",{parentName:"p"},"Pulsar")," and ",(0,i.kt)("strong",{parentName:"p"},"Redpanda")," streams.\nThe streams are using user-defined transformations to produce Cypher queries\nbased on the received messages. To learn more about streams and transformations\ntake a look at the following pages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/next/reference-guide/streams"},"Streams overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/next/reference-guide/streams/transformation-modules"},"Transformation\nmodules"))),(0,i.kt)("h2",{id:"temporal-types"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/temporal-types"},"Temporal types")),(0,i.kt)("p",null,"Temporal data types store and manipulate time. To learn more, take a look at the\noverview page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/next/reference-guide/temporal-types"},"Temporal types"))),(0,i.kt)("h2",{id:"triggers"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/triggers"},"Triggers")),(0,i.kt)("p",null,"Memgraph enables running openCypher statements after a certain event happens\nduring transaction execution, i.e., triggers."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"enterprise-features"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/next/reference-guide/enabling-enterprise"},"Enterprise features")),(0,i.kt)("p",null,"Features available for the Enterprise edition of Memgraph."),(0,i.kt)("h3",{id:"audit-log"},(0,i.kt)("a",{parentName:"h3",href:"/docs/memgraph/next/reference-guide/audit-log"},"Audit log")),(0,i.kt)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains\nrecords of all queries executed on the database."),(0,i.kt)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,i.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a\ncustom-built external auth module. To learn more, visit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/reference-guide/auth-module"},"Auth module"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/reference-guide/ldap-security"},"LDAP security")))),(0,i.kt)("h3",{id:"runtime-settings"},(0,i.kt)("a",{parentName:"h3",href:"/docs/memgraph/next/reference-guide/runtime-settings"},"Runtime settings")),(0,i.kt)("p",null,"Check the settings that can be modified during runtime. "),(0,i.kt)("h3",{id:"security---user-privileges"},(0,i.kt)("a",{parentName:"h3",href:"/docs/memgraph/next/reference-guide/security"},"Security - user privileges")),(0,i.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set\nof privileges to users or groups of users."))}m.isMDXComponent=!0}}]);