"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26445],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},g=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,d=u["".concat(l,".").concat(p)]||u[p]||s[p]||i;return n?r.createElement(d,c(c({ref:t},g),{},{components:n})):r.createElement(d,c({ref:t},g))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var m=2;m<i;m++)c[m]=n[m];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53272:function(e,t,n){var r=n(67294),a=n(85350);t.Z=function(e){var t=e.className,n=e.alt,i=e.lightImageSrc,c=e.darkImageSrc,o=(0,a.Z)().isDarkTheme;return r.createElement("img",{className:t,alt:n,src:o?c:i})}},19461:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a={connectButton:"connectButton_2SLc",connectButton__imgActive:"connectButton__imgActive_3K6i",connectButton__img:"connectButton__img_1287"},i=n(53272);function c(e){var t=e.title,n=e.url,c=e.img,o=e.imgActive,l=e.imgDark,m=e.imgDarkActive;return r.createElement("a",{href:n,className:a.connectButton,style:a},r.createElement(i.Z,{className:a.connectButton__img,lightImageSrc:c,darkImageSrc:l}),r.createElement(i.Z,{lightImageSrc:o,darkImageSrc:m,alt:t,className:a.connectButton__imgActive}))}},72819:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="mgContainer_2F1c",i="mgContainer__small_1ljA";function c(e){var t=e.size,n=void 0===t?"default":t,c=e.children,o=null;return"small"===n&&(o=i),r.createElement("div",{className:a+" "+o},c)}},92496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),c=n(72819),o=n(45255),l=n(44996),m=n(19461),g=["components"],s={id:"overview",title:"Connect to Memgraph",sidebar_label:"Connection methods overview",slug:"/connect-to-memgraph"},u=void 0,p={unversionedId:"connect-to-memgraph/overview",id:"connect-to-memgraph/overview",title:"Connect to Memgraph",description:"export default function ConnectToMemgraph() {",source:"@site/docs/connect-to-memgraph/overview.mdx",sourceDirName:"connect-to-memgraph",slug:"/connect-to-memgraph",permalink:"/docs/memgraph/next/connect-to-memgraph",editUrl:"https://github.com/memgraph/docs/tree/master/docs/connect-to-memgraph/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"Connect to Memgraph",sidebar_label:"Connection methods overview",slug:"/connect-to-memgraph"},sidebar:"memgraph",previous:{title:"Installation troubleshooting",permalink:"/docs/memgraph/next/linux-installation-troubleshooting"},next:{title:"mgconsole",permalink:"/docs/memgraph/next/connect-to-memgraph/mgconsole"}},d=[],h={toc:d},v=function(){var e="img/connect-page/",t=[{title:"Python",img:(0,l.Z)(e+"python-unselected.png"),imgActive:(0,l.Z)(e+"python-selected.png"),imgDark:(0,l.Z)(e+"python-unselected.png"),imgDarkActive:(0,l.Z)(e+"python-selected.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/drivers/python")},{title:"C#",img:(0,l.Z)(e+"csharp-unselected.png"),imgActive:(0,l.Z)(e+"csharp-selected.png"),imgDark:(0,l.Z)(e+"csharp-unselected.png"),imgDarkActive:(0,l.Z)(e+"csharp-selected.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/drivers/c-sharp")},{title:"Rust",img:(0,l.Z)(e+"rust-unselected.png"),imgActive:(0,l.Z)(e+"rust-selected.png"),imgDark:(0,l.Z)(e+"dark/rust-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"dark/rust-selected-dm.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/drivers/rust")},{title:"Java",img:(0,l.Z)(e+"java-unselected.png"),imgActive:(0,l.Z)(e+"java-selected.png"),imgDark:(0,l.Z)(e+"dark/java-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"dark/java-selected-dm.svg"),url:(0,l.Z)("memgraph/connect-to-memgraph/drivers/java")},{title:"GoLang",img:(0,l.Z)(e+"golang-unselected.png"),imgActive:(0,l.Z)(e+"golang-selected.png"),imgDark:(0,l.Z)(e+"dark/golang-unselected-dm.png"),imgDarkActive:(0,l.Z)(e+"dark/golang-selected-dm.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/drivers/go")},{title:"PHP",img:(0,l.Z)(e+"php-unselected.png"),imgActive:(0,l.Z)(e+"php-selected.png"),imgDark:(0,l.Z)(e+"dark/php-unselected-dm.png"),imgDarkActive:(0,l.Z)(e+"dark/php-selected-dm.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/drivers/php")},{title:"Ruby",img:(0,l.Z)(e+"ruby-unselected.png"),imgActive:(0,l.Z)(e+"ruby-selected.png"),imgDark:(0,l.Z)(e+"dark/ruby-unselected-dm.png"),imgDarkActive:(0,l.Z)(e+"dark/ruby-selected-dm.svg"),url:"https://github.com/neo4jrb/neo4j"},{title:"JavaScript",img:(0,l.Z)(e+"JS-unselected.png"),imgActive:(0,l.Z)(e+"JS-selected.svg"),imgDark:(0,l.Z)(e+"JS-unselected.png"),imgDarkActive:(0,l.Z)(e+"dark/JS-selected-dm.svg"),url:(0,l.Z)("memgraph/connect-to-memgraph/drivers/javascript")},{title:"Haskell",img:(0,l.Z)(e+"haskell-unselected.svg"),imgActive:(0,l.Z)(e+"haskell-selected.svg"),imgDark:(0,l.Z)(e+"dark/haskell-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"haskell-selected.svg"),url:"https://github.com/zmactep/hasbolt"}],n={title:"MemgraphLab",img:(0,l.Z)(e+"lab-unselected.svg"),imgActive:(0,l.Z)(e+"lab-selected.svg"),imgDark:(0,l.Z)(e+"dark/lab-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"dark/lab-selected-dm.svg"),url:(0,l.Z)("memgraph-lab/")},r={title:"mgconsole",img:(0,l.Z)(e+"mgconsole-unselected.svg"),imgActive:(0,l.Z)(e+"mgconsole-selected.svg"),imgDark:(0,l.Z)(e+"dark/mgconsole-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"dark/mgconsole-selected-dm.svg"),url:(0,l.Z)("memgraph/connect-to-memgraph/mgconsole")};return(0,i.kt)(c.Z,{size:"small"},(0,i.kt)("div",{className:o.Z.connectToMemgraph},(0,i.kt)("section",null,(0,i.kt)("p",null,"Memgraph supports the ",(0,i.kt)("b",null,(0,i.kt)("a",{href:"https://www.opencypher.org"},"openCypher"))," query language which has been developed by ",(0,i.kt)("b",null,(0,i.kt)("a",{href:"https://neo4j.com"},"Neo4j")),". It is a declarative language developed specifically for interaction with graph databases, which is currently going through a vendor-independent standardization process. There are multiple ways of executing openCypher queries against Memgraph and you can learn more about them below.")),(0,i.kt)("section",null,(0,i.kt)("h2",null,"Connect via Memgraph Lab"),(0,i.kt)("p",null,"Memgraph Lab is a lightweight and intuitive ",(0,i.kt)("b",null,"visual user interface")," that enables you to execute Cypher queries and visualize graph data."),(0,i.kt)(m.Z,{title:n.title,url:n.url,img:n.img,imgActive:n.imgActive,imgDark:n.imgDark,imgDarkActive:n.imgDarkActive})),(0,i.kt)("section",null,(0,i.kt)("h2",null,"Connect via mgconsole"),(0,i.kt)("p",null,"A ",(0,i.kt)("b",null,"command-line interface")," for querying Memgraph."),(0,i.kt)(m.Z,{title:r.title,url:r.url,img:r.img,imgActive:r.imgActive,imgDark:r.imgDark,imgDarkActive:r.imgDarkActive})),(0,i.kt)("section",null,(0,i.kt)("h2",null,"Connect via Driver"),(0,i.kt)("p",null,"Connect to Memgraph from your favorite programming language. We support a wide range of drivers."),(0,i.kt)("div",{className:o.Z.connectToMemgraph__grid},t.map((function(e,t){return(0,i.kt)(m.Z,{key:t,url:e.url,title:e.title,img:e.img,imgActive:e.imgActive,imgDark:e.imgDark,imgDarkActive:e.imgDarkActive})})))),(0,i.kt)("section",null,(0,i.kt)("h2",null,"Where to next?"),(0,i.kt)("p",null,"To learn more about the ",(0,i.kt)("b",null,"Cypher")," language, visit the ",(0,i.kt)("b",null,(0,i.kt)("a",{href:(0,l.Z)("cypher-manual")},"Cypher manual"))," or ",(0,i.kt)("b",null,(0,i.kt)("a",{href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive guides. For real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,i.kt)("b",null,(0,i.kt)("a",{href:(0,l.Z)("memgraph/tutorials")},"Tutorials")),". Details on what can be stored in Memgraph can be found in the article about ",(0,i.kt)("b",null,(0,i.kt)("a",{href:(0,l.Z)("memgraph/concepts/storage")},"Data storage")),"."))))};function k(e){var t=e.components,n=(0,a.Z)(e,g);return(0,i.kt)(v,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}))}k.isMDXComponent=!0},45255:function(e,t){t.Z={connectToMemgraph:"connectToMemgraph_y18K",connectToMemgraph__grid:"connectToMemgraph__grid_2WPe"}}}]);