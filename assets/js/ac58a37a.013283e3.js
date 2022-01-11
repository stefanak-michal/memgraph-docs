"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9820],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,g=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17586:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"connect-to-memgraph",title:"Connect to Memgraph",sidebar_label:"Connect to Memgraph"},p=void 0,s={unversionedId:"connect-to-memgraph",id:"connect-to-memgraph",title:"Connect to Memgraph",description:"Prerequisites",source:"@site/lab/connect-to-memgraph.md",sourceDirName:".",slug:"/connect-to-memgraph",permalink:"/docs/memgraph-lab/connect-to-memgraph",editUrl:"https://github.com/memgraph/docs/tree/master/lab/connect-to-memgraph.md",tags:[],version:"current",frontMatter:{id:"connect-to-memgraph",title:"Connect to Memgraph",sidebar_label:"Connect to Memgraph"},sidebar:"lab",previous:{title:"Linux",permalink:"/docs/memgraph-lab/installation/linux"},next:{title:"Quick start",permalink:"/docs/memgraph-lab/style-script/quick-start"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Connecting to Memgraph",id:"connecting-to-memgraph",children:[],level:2},{value:"Executing queries",id:"executing-queries",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2},{value:"Getting help",id:"getting-help",children:[],level:2}],u={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you proceed with the guide, make sure that you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("strong",{parentName:"li"},"Memgraph")," instance. Instructions on how to do set up Memgraph can\nbe ",(0,o.kt)("a",{parentName:"li",href:"/memgraph/installation"},"found here"),"."),(0,o.kt)("li",{parentName:"ul"},"Downloaded and installed ",(0,o.kt)("strong",{parentName:"li"},"Memgraph Lab"),". Instruction on how to install Memgraph\nLab can ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph-lab/installation/overview"},"be found here"),".")),(0,o.kt)("h2",{id:"connecting-to-memgraph"},"Connecting to Memgraph"),(0,o.kt)("p",null,"Make sure that Memgraph is running and open Memgraph Lab. If you are starting\nwith a fresh database instance, you don't have to change any of the options."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Leave the ",(0,o.kt)("inlineCode",{parentName:"li"},"Username")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Password")," fields ",(0,o.kt)("strong",{parentName:"li"},"empty"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Host")," field can be either ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"localhost")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"127.0.0.1"))," or\n",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"0.0.0.0")),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Port")," field should be ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"7687")),". Every Memgraph instance is listening\non this port by default."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Encrypted")," option should be ",(0,o.kt)("strong",{parentName:"li"},"disabled")," and display ",(0,o.kt)("inlineCode",{parentName:"li"},"SSL Off")," by\ndefault.")),(0,o.kt)("p",null,"If you fail to connect, make sure that your database instance is up and running.\nIf the ",(0,o.kt)("inlineCode",{parentName:"p"},"Host")," address is wrong, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/how-to-work-with-docker#docker-container-ip-address"},"Docker\nnote")," in the\ninstallation guide."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Memgraph Lab",src:n(55971).Z})),(0,o.kt)("h2",{id:"executing-queries"},"Executing queries"),(0,o.kt)("p",null,"Now, you can execute Cypher queries on Memgraph. Open the ",(0,o.kt)("strong",{parentName:"p"},"Query")," tab, located\nin the left sidebar, copy the following query and press the ",(0,o.kt)("strong",{parentName:"p"},"Run query"),"\nbutton:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,o.kt)("p",null,'The query above will create 2 nodes in the database, one labeled "User" with\nname "Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',(0,o.kt)("em",{parentName:"p"},"likes"),' "Memgraph".'),(0,o.kt)("p",null,"To find created nodes and relationships, execute the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about the ",(0,o.kt)("strong",{parentName:"p"},"Cypher")," language, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/cypher-manual"},"Cypher\nmanual"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive guides. For\nreal-world examples of how to use Memgraph, we strongly suggest going through\none of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/tutorials"},"Tutorials")),". Details on what can\nbe stored in Memgraph can be found in the article about ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/concepts/storage"},"Data\nstorage")),"."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/help-center"},"Getting help"))," page in case you run into any kind of\nproblem, or you have additional questions."))}m.isMDXComponent=!0},55971:function(e,t,n){t.Z=n.p+"assets/images/memgraph-lab-login-930b088a513d1537d3aa6ffba7eee260.png"}}]);