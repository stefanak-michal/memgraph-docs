(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4751],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,h=g["".concat(s,".").concat(m)]||g[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5620:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"This article outlines the basic steps necessary to query a running Memgraph database instance from Memgraph Lab.",source:"@site/lab/getting-started.md",sourceDirName:".",slug:"/",permalink:"/memgraph-lab/",editUrl:"https://github.com/memgraph/docs/tree/master/lab/getting-started.md",version:"current",sidebar_label:"Getting started",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/"},sidebar:"lab",next:{title:"Installing Memgraph Lab on macOS",permalink:"/memgraph-lab/installation/osx-installation"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Connecting to the database",id:"connecting-to-the-database",children:[]},{value:"Executing queries",id:"executing-queries",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],p={toc:s};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article outlines the basic steps necessary to query a running Memgraph database instance from ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you proceed with the guide, make sure that you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installed the latest version of ",(0,o.kt)("strong",{parentName:"li"},"Memgraph Lab")," which you can get from the official ",(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/download#Lab-download"},"download page"),"."),(0,o.kt)("li",{parentName:"ul"},"A running Memgraph database instance. Instructions on how to do setup Memgraph can be ",(0,o.kt)("a",{parentName:"li",href:"../memgraph/getting-started/installation"},"found here"),".")),(0,o.kt)("h2",{id:"connecting-to-the-database"},"Connecting to the database"),(0,o.kt)("p",null,"Make sure that Memgraph is running and open Memgraph Lab.\nIf you are starting with a fresh database instance, you don't have to change any of the options."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Leave the ",(0,o.kt)("inlineCode",{parentName:"li"},"Username")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Password")," fields ",(0,o.kt)("strong",{parentName:"li"},"empty"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," field can be either ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"localhost")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"127.0.0.1"))," or ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"0.0.0.0")),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Port")," field should be ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"7687")),". Every Memgraph instance is listening on this port by default."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Encrypted")," option should be ",(0,o.kt)("strong",{parentName:"li"},"disabled")," by default.")),(0,o.kt)("p",null,"If you fail to connect, make sure that your database instance is up and running.\nIf the ",(0,o.kt)("inlineCode",{parentName:"p"},"Host")," address is wrong, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/how-to-work-with-docker#docker-container-ip-address"},"Docker note")," in the installation guide."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Memgraph Lab",src:n(5386).Z})),(0,o.kt)("h2",{id:"executing-queries"},"Executing queries"),(0,o.kt)("p",null,"Now, you can execute Cypher queries on Memgraph.\nOpen the ",(0,o.kt)("strong",{parentName:"p"},"Query")," tab, located in the left sidebar, copy the following query and press the ",(0,o.kt)("strong",{parentName:"p"},"Run query")," button:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,o.kt)("p",null,'The query above will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',(0,o.kt)("em",{parentName:"p"},"likes"),' "Memgraph".'),(0,o.kt)("p",null,"To find created nodes and relationships, execute the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about the ",(0,o.kt)("strong",{parentName:"p"},"Cypher")," language, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../cypher-manual"},"Cypher manual"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive guides.\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../memgraph/tutorials/tutorials"},"Tutorials")),".\nDetails on what can be stored in Memgraph can be found in the article about ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../memgraph/concepts/storage"},"Data storage")),"."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../memgraph/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}u.isMDXComponent=!0},5386:function(e,t,n){"use strict";t.Z=n.p+"assets/images/memgraph_lab_login-23fd7d60fb5e434953703ffefa7521f0.png"}}]);