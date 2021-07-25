(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82564],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=p(t),h=a,d=g["".concat(l,".").concat(h)]||g[h]||s[h]||i;return t?n.createElement(d,o(o({ref:r},c),{},{components:t})):n.createElement(d,o({ref:r},c))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},43456:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var n=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],u={id:"reference-guide",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},l=void 0,p={unversionedId:"reference-guide/reference-guide",id:"version-1.4.0/reference-guide/reference-guide",isDocsHomePage:!1,title:"Reference guide overview",description:"Memgraph supports most of the commonly used constructs of the language. The",source:"@site/memgraph_versioned_docs/version-1.4.0/reference-guide/reference-guide.md",sourceDirName:"reference-guide",slug:"/reference-guide",permalink:"/memgraph/1.4.0/reference-guide",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/reference-guide/reference-guide.md",version:"1.4.0",frontMatter:{id:"reference-guide",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},sidebar:"version-1.4.0/memgraph",previous:{title:"Authentication and authorization (Enterprise)",permalink:"/memgraph/1.4.0/database-functionalities/manage-users-using-ldap"},next:{title:"Memgraph configuration",permalink:"/memgraph/1.4.0/reference-guide/configuration"}},c=[{value:"Cypher query language",id:"cypher-query-language",children:[]},{value:"Configuration settings",id:"configuration-settings",children:[]},{value:"Indexing",id:"indexing",children:[]},{value:"Built-in graph algorithms",id:"built-in-graph-algorithms",children:[]},{value:"Query modules",id:"query-modules",children:[]},{value:"NetworkX",id:"networkx",children:[]},{value:"Machine learning",id:"machine-learning",children:[]},{value:"Replication",id:"replication",children:[]},{value:"Backup",id:"backup",children:[]},{value:"User privileges",id:"user-privileges",children:[]},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[]},{value:"Audit log",id:"audit-log",children:[]}],s={toc:c};function g(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Memgraph")," supports most of the commonly used constructs of the language. The\nreference guide contains the details of implemented features. Additionally,\nnot yet supported features of the language are listed."),(0,i.kt)("h2",{id:"cypher-query-language"},(0,i.kt)("a",{parentName:"h2",href:"/cypher-manual"},"Cypher query language")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cypher")," is a declarative graph query language that allows for expressive and efficient data querying in a property graph. It aims to be intuitive and easy to learn while\nproviding a powerful interface for working with graph-based data. "),(0,i.kt)("h2",{id:"configuration-settings"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/configuration"},"Configuration settings")),(0,i.kt)("p",null,"Memgraph can be configured by editing the Memgraph configuration file or by including another configuration file. "),(0,i.kt)("h2",{id:"indexing"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/indexing"},"Indexing")),(0,i.kt)("p",null,"An index stores additional information on certain types of data, so that retrieving said data becomes more efficient."),(0,i.kt)("h2",{id:"built-in-graph-algorithms"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/graph-algorithms"},"Built-in graph algorithms")),(0,i.kt)("p",null,"Memgraph comes with custom-built algorithms that are implemented using C++: ",(0,i.kt)("strong",{parentName:"p"},"Filtering variable-length paths"),", ",(0,i.kt)("strong",{parentName:"p"},"Breadth-first search"),", and ",(0,i.kt)("strong",{parentName:"p"},"Weighted shortest path"),"."),(0,i.kt)("h2",{id:"query-modules"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/query-modules"},"Query modules")),(0,i.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on startup or later on."),(0,i.kt)("h2",{id:"networkx"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/networkx"},"NetworkX")),(0,i.kt)("p",null,"Memgraph includes a set of Python query modules based on the ",(0,i.kt)("a",{parentName:"p",href:"https://networkx.github.io/"},"NetworkX")," library of algorithms.\nYou can find more information about all the available algorithms in the ",(0,i.kt)("a",{parentName:"p",href:"/memgraph/1.4.0/reference-guide/networkx"},"NetxorkX reference guide"),"."),(0,i.kt)("h2",{id:"machine-learning"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/tensorflow"},"Machine learning")),(0,i.kt)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow,\nallowing natural data transfer between Memgraph and TensorFlow at any point of the model."),(0,i.kt)("h2",{id:"replication"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/replication"},"Replication")),(0,i.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data.\nMemgraph supports replication and allows you to create a cluster of nodes running Memgraph instances. "),(0,i.kt)("h2",{id:"backup"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/backup"},"Backup")),(0,i.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data."),(0,i.kt)("h2",{id:"user-privileges"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/security"},"User privileges")),(0,i.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users."),(0,i.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,i.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a custom-built external auth module.\nTo learn more visit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.4.0/reference-guide/auth-module"},"Auth module"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.4.0/reference-guide/ldap-security"},"LDAP security")))),(0,i.kt)("h2",{id:"audit-log"},(0,i.kt)("a",{parentName:"h2",href:"/memgraph/1.4.0/reference-guide/audit-log"},"Audit log")),(0,i.kt)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains records of all queries executed on the database."))}g.isMDXComponent=!0}}]);