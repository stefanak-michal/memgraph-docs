"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1372],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),g=a,s=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return n?r.createElement(s,i(i({ref:t},u),{},{components:n})):r.createElement(s,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"overview",title:"Memgraph",sidebar_label:"Overview",slug:"/overview-page"},p=void 0,m={unversionedId:"overview",id:"overview",title:"Memgraph",description:"Memgraph is a graph analytics platform based on an ACID-compliant high-performance",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview-page",permalink:"/docs/memgraph/next/overview-page",editUrl:"https://github.com/memgraph/docs/tree/master/docs/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Memgraph",sidebar_label:"Overview",slug:"/overview-page"}},u=[{value:"Memgraph features",id:"memgraph-features",children:[],level:2},{value:"NetworkX",id:"networkx",children:[],level:2},{value:"Machine learning",id:"machine-learning",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Memgraph is a graph analytics platform based on an ACID-compliant high-performance\ntransactional in-memory graph database featuring highly concurrent\ndata structures, multi-version concurrency control, and asynchronous IO."),(0,l.kt)("h2",{id:"memgraph-features"},"Memgraph features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Supported feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Community"),(0,l.kt)("th",{parentName:"tr",align:null},"Enterprise"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hybrid In","\u2011","Memory / On","\u2011","Disk Storage Engine"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACID Transactions"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Optimized for Low Latency and High","\u2011","Throughput"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Development, Testing, and Evaluation Use"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Production use"),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/memgraph/next/database-functionalities/replication"},"Replication")),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/memgraph/next/reference-guide/query-modules"},"Custom Cypher procedures")),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage"},"Custom graph algorithms")),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/memgraph/next/import-data"},"Importing data")),(0,l.kt)("td",{parentName:"tr",align:null},"+"),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/memgraph/next/database-functionalities/manage-users-using-ldap"},"Authentication")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/memgraph/next/database-functionalities/manage-user-privileges"},"Advanced Password Policies")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/memgraph/next/reference-guide/security"},"Fine","\u2011","Grained Access Control")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/memgraph/next/reference-guide/auth-module"},"Auth Module")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/memgraph/next/reference-guide/audit-log"},"Full Activity Auditing")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"+")))),(0,l.kt)("h2",{id:"networkx"},"NetworkX"),(0,l.kt)("p",null,"Memgraph includes a set of Python query modules based on the ",(0,l.kt)("a",{parentName:"p",href:"https://networkx.github.io/"},"NetworkX")," library of algorithms.\nYou can find more information about all the available algorithms in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/memgraph/next/database-functionalities/networkx"},"NetworkX guide"),"."),(0,l.kt)("h2",{id:"machine-learning"},"Machine learning"),(0,l.kt)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow,\nallowing natural data transfer between Memgraph and TensorFlow at any point of the model.\nIf you are interested in using Memgraph for machine learning purposes  take a look at:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/memgraph/next/database-functionalities/tensorflow-setup"},"TensorFlow op setup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/memgraph/next/reference-guide/tensorflow"},"TensorFlow op reference"))))}c.isMDXComponent=!0}}]);