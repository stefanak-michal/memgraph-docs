"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35993],{3905:function(e,t,o){o.d(t,{Zo:function(){return m},kt:function(){return h}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(o),h=n,d=p["".concat(c,".").concat(h)]||p[h]||s[h]||a;return o?r.createElement(d,i(i({ref:t},m),{},{components:o})):r.createElement(d,i({ref:t},m))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},11466:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),i=["components"],l={id:"memory-control",title:"How to control memory usage",sidebar_label:"Control memory usage"},c=void 0,u={unversionedId:"how-to-guides/memory-control",id:"how-to-guides/memory-control",title:"How to control memory usage",description:"Memgraph provides some useful tools which allow you to limit, inspect, and free allocated memory.",source:"@site/docs/how-to-guides/memory-control.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/memory-control",permalink:"/docs/memgraph/next/how-to-guides/memory-control",editUrl:"https://github.com/memgraph/docs/tree/master/docs/how-to-guides/memory-control.md",tags:[],version:"current",frontMatter:{id:"memory-control",title:"How to control memory usage",sidebar_label:"Control memory usage"},sidebar:"memgraph",previous:{title:"Profile queries",permalink:"/docs/memgraph/next/how-to-guides/profiling-queries"},next:{title:"Utilize the NetworkX library",permalink:"/docs/memgraph/next/how-to-guides/networkx"}},m=[{value:"Configuration option <code>--memory-limit</code>",id:"configuration-option---memory-limit",children:[],level:3},{value:"Controlling the memory usage of each query",id:"controlling-the-memory-usage-of-each-query",children:[],level:3},{value:"Controlling the memory usage of each procedure",id:"controlling-the-memory-usage-of-each-procedure",children:[],level:3},{value:"Cleaning up unused memory",id:"cleaning-up-unused-memory",children:[],level:3}],s={toc:m};function p(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Memgraph provides some useful tools which allow you to limit, inspect, and free allocated memory."),(0,a.kt)("h3",{id:"configuration-option---memory-limit"},"Configuration option ",(0,a.kt)("inlineCode",{parentName:"h3"},"--memory-limit")),(0,a.kt)("p",null,"Through your config file, you can set the maximum amount of memory (in MiB) that a Memgraph instance can allocate during its runtime. If the memory limit is exceeded, only the queries which do not require additional memory are allowed. If the memory limit is exceeded while a query is running, the query is aborted making its transaction invalid."),(0,a.kt)("p",null,"If the flag is set to 0, it will use the default values which are currently set to 90% of the total memory if the system does not have swap memory, and 100% of the total memory if the system has swap memory."),(0,a.kt)("h3",{id:"controlling-the-memory-usage-of-each-query"},"Controlling the memory usage of each query"),(0,a.kt)("p",null,"Each Cypher query can contain a clause of the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"QUERY MEMORY ( UNLIMITED | LIMIT num ( KB | MB) )\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," format is used, you can specify the amount of memory that query can allocate for its execution.\nOnly one clause of this type can be present in a Cypher query and it can go only at the end of it. The limit is applied to the entire query."),(0,a.kt)("h3",{id:"controlling-the-memory-usage-of-each-procedure"},"Controlling the memory usage of each procedure"),(0,a.kt)("p",null,"Each procedure call can contain a clause of the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"PROCEDURE MEMORY ( UNLIMITED | LIMIT num ( KB | MB) )\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," format is used, you can specify the amount of memory that the called procedure can allocate for its execution. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"UNLIMITED")," format is used, no memory restrictions are imposed on the procedure call. Not specifying the clause will set the memory limit to a default value."),(0,a.kt)("p",null,"Each procedure call can have only one clause of this type and it needs to go at the end of the call clause. If a query contains multiple procedure calls, each call can have its own limit specified."),(0,a.kt)("h3",{id:"cleaning-up-unused-memory"},"Cleaning up unused memory"),(0,a.kt)("p",null,"Memgraph has a garbage collector which deallocates unused objects, freeing the memory. The rate of the garbage collection can be specified with the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--storage-gc-cycle-sec"),"."),(0,a.kt)("p",null,"Memgraph also contains the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"FREE MEMORY\n")),(0,a.kt)("p",null,"This query tries to clean up as much unused memory as possible without affecting currently running transactions."))}p.isMDXComponent=!0}}]);