"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26445],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),s=m(n),p=a,d=s["".concat(l,".").concat(p)]||s[p]||u[p]||i;return n?r.createElement(d,o(o({ref:t},g),{},{components:n})):r.createElement(d,o({ref:t},g))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(52263),a=n(13919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,m=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var g=n.startsWith(t)?n:t+n.replace(/^\//,"");return m?e+g:g}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},82924:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},85350:function(e,t,n){var r=n(67294),a=n(82924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},53272:function(e,t,n){var r=n(67294),a=n(85350);t.Z=function(e){var t=e.className,n=e.alt,i=e.lightImageSrc,o=e.darkImageSrc,c=(0,a.Z)().isDarkTheme;return r.createElement("img",{className:t,alt:n,src:c?o:i})}},19575:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a={connectButton:"connectButton_2SLc",connectButton__imgActive:"connectButton__imgActive_3K6i",connectButton__img:"connectButton__img_1287"},i=n(53272);function o(e){var t=e.title,n=e.url,o=e.img,c=e.imgActive,l=e.imgDark,m=e.imgDarkActive;return r.createElement("a",{href:n,className:a.connectButton,style:a},r.createElement(i.Z,{className:a.connectButton__img,lightImageSrc:o,darkImageSrc:l}),r.createElement(i.Z,{lightImageSrc:c,darkImageSrc:m,alt:t,className:a.connectButton__imgActive}))}},47295:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="mgContainer_2F1c",i="mgContainer__small_1ljA";function o(e){var t=e.size,n=void 0===t?"default":t,o=e.children,c=null;return"small"===n&&(c=i),r.createElement("div",{className:a+" "+c},o)}},92496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(47295),c=n(45255),l=n(44996),m=n(19575),g=["components"],u={id:"overview",title:"Connect to Memgraph",sidebar_label:"Connection methods",slug:"/connect-to-memgraph"},s=void 0,p={unversionedId:"connect-to-memgraph/overview",id:"connect-to-memgraph/overview",isDocsHomePage:!1,title:"Connect to Memgraph",description:"export default function ConnectToMemgraph() {",source:"@site/docs/connect-to-memgraph/overview.mdx",sourceDirName:"connect-to-memgraph",slug:"/connect-to-memgraph",permalink:"/docs/memgraph/next/connect-to-memgraph",editUrl:"https://github.com/memgraph/docs/tree/master/docs/connect-to-memgraph/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"Connect to Memgraph",sidebar_label:"Connection methods",slug:"/connect-to-memgraph"},sidebar:"memgraph",previous:{title:"Installation troubleshooting",permalink:"/docs/memgraph/next/linux-installation-troubleshooting"},next:{title:"mgconsole",permalink:"/docs/memgraph/next/connect-to-memgraph/methods/mgconsole"}},d=[],h={toc:d},v=function(){var e="img/connect-page/",t=[{title:"Python",img:(0,l.Z)(e+"python-unselected.png"),imgActive:(0,l.Z)(e+"python-selected.png"),imgDark:(0,l.Z)(e+"python-unselected.png"),imgDarkActive:(0,l.Z)(e+"python-selected.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/methods/building-applications/python")},{title:"C#",img:(0,l.Z)(e+"csharp-unselected.png"),imgActive:(0,l.Z)(e+"csharp-selected.png"),imgDark:(0,l.Z)(e+"csharp-unselected.png"),imgDarkActive:(0,l.Z)(e+"csharp-selected.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/methods/building-applications/c-sharp")},{title:"Rust",img:(0,l.Z)(e+"rust-unselected.png"),imgActive:(0,l.Z)(e+"rust-selected.png"),imgDark:(0,l.Z)(e+"dark/rust-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"dark/rust-selected-dm.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/methods/building-applications/rust")},{title:"Java",img:(0,l.Z)(e+"java-unselected.png"),imgActive:(0,l.Z)(e+"java-selected.png"),imgDark:(0,l.Z)(e+"dark/java-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"dark/java-selected-dm.svg"),url:(0,l.Z)("memgraph/connect-to-memgraph/methods/building-applications/java")},{title:"GoLang",img:(0,l.Z)(e+"golang-unselected.png"),imgActive:(0,l.Z)(e+"golang-selected.png"),imgDark:(0,l.Z)(e+"dark/golang-unselected-dm.png"),imgDarkActive:(0,l.Z)(e+"dark/golang-selected-dm.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/methods/building-applications/go")},{title:"PHP",img:(0,l.Z)(e+"php-unselected.png"),imgActive:(0,l.Z)(e+"php-selected.png"),imgDark:(0,l.Z)(e+"dark/php-unselected-dm.png"),imgDarkActive:(0,l.Z)(e+"dark/php-selected-dm.png"),url:(0,l.Z)("memgraph/connect-to-memgraph/methods/building-applications/php")},{title:"Ruby",img:(0,l.Z)(e+"ruby-unselected.png"),imgActive:(0,l.Z)(e+"ruby-selected.png"),imgDark:(0,l.Z)(e+"dark/ruby-unselected-dm.png"),imgDarkActive:(0,l.Z)(e+"dark/ruby-selected-dm.svg"),url:"https://github.com/neo4jrb/neo4j"},{title:"JavaScript",img:(0,l.Z)(e+"JS-unselected.png"),imgActive:(0,l.Z)(e+"JS-selected.svg"),imgDark:(0,l.Z)(e+"JS-unselected.png"),imgDarkActive:(0,l.Z)(e+"dark/JS-selected-dm.svg"),url:(0,l.Z)("memgraph/connect-to-memgraph/methods/building-applications/javascript")},{title:"Haskell",img:(0,l.Z)(e+"haskell-unselected.svg"),imgActive:(0,l.Z)(e+"haskell-selected.svg"),imgDark:(0,l.Z)(e+"dark/haskell-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"haskell-selected.svg"),url:"https://github.com/zmactep/hasbolt"}],n={title:"MemgraphLab",img:(0,l.Z)(e+"lab-unselected.svg"),imgActive:(0,l.Z)(e+"lab-selected.svg"),imgDark:(0,l.Z)(e+"dark/lab-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"dark/lab-selected-dm.svg"),url:(0,l.Z)("memgraph-lab/")},r={title:"mgconsole",img:(0,l.Z)(e+"mgconsole-unselected.svg"),imgActive:(0,l.Z)(e+"mgconsole-selected.svg"),imgDark:(0,l.Z)(e+"dark/mgconsole-unselected-dm.svg"),imgDarkActive:(0,l.Z)(e+"dark/mgconsole-selected-dm.svg"),url:(0,l.Z)("memgraph/connect-to-memgraph/methods/mgconsole")};return(0,i.kt)(o.Z,{size:"small"},(0,i.kt)("div",{className:c.Z.connectToMemgraph},(0,i.kt)("section",null,(0,i.kt)("p",null,"Memgraph supports the ",(0,i.kt)("b",null,(0,i.kt)("a",{href:"https://www.opencypher.org"},"openCypher"))," query language which has been developed by ",(0,i.kt)("b",null,(0,i.kt)("a",{href:"https://neo4j.com"},"Neo4j")),". It is a declarative language developed specifically for interaction with graph databases, which is currently going through a vendor-independent standardization process. There are multiple ways of executing openCypher queries against Memgraph and you can learn more about them below.")),(0,i.kt)("section",null,(0,i.kt)("h2",null,"Connect via Driver"),(0,i.kt)("p",null,"Connect to Memgraph from your favorite programming language. We support a wide range of drivers."),(0,i.kt)("div",{className:c.Z.connectToMemgraph__grid},t.map((function(e,t){return(0,i.kt)(m.Z,{key:t,url:e.url,title:e.title,img:e.img,imgActive:e.imgActive,imgDark:e.imgDark,imgDarkActive:e.imgDarkActive})})))),(0,i.kt)("section",null,(0,i.kt)("h2",null,"Connect via Memgraph Lab"),(0,i.kt)("p",null,"Memgraph Lab is an interactive application for querying and visualizing your graphs."),(0,i.kt)(m.Z,{title:n.title,url:n.url,img:n.img,imgActive:n.imgActive,imgDark:n.imgDark,imgDarkActive:n.imgDarkActive})),(0,i.kt)("section",null,(0,i.kt)("h2",null,"Connect via mgconsole"),(0,i.kt)("p",null,"A command-line interface for querying Memgraph."),(0,i.kt)(m.Z,{title:r.title,url:r.url,img:r.img,imgActive:r.imgActive,imgDark:r.imgDark,imgDarkActive:r.imgDarkActive})),(0,i.kt)("section",null,(0,i.kt)("h2",null,"Where to next?"),(0,i.kt)("p",null,"To learn more about the ",(0,i.kt)("b",null,"Cypher")," language, visit the ",(0,i.kt)("b",null,(0,i.kt)("a",{href:(0,l.Z)("cypher-manual")},"Cypher manual"))," or ",(0,i.kt)("b",null,(0,i.kt)("a",{href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive guides. For real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,i.kt)("b",null,(0,i.kt)("a",{href:(0,l.Z)("memgraph/tutorials")},"Tutorials")),". Details on what can be stored in Memgraph can be found in the article about ",(0,i.kt)("b",null,(0,i.kt)("a",{href:(0,l.Z)("memgraph/concepts/storage")},"Data storage")),"."))))};function f(e){var t=e.components,n=(0,a.Z)(e,g);return(0,i.kt)(v,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}))}f.isMDXComponent=!0},45255:function(e,t){t.Z={connectToMemgraph:"connectToMemgraph_y18K",connectToMemgraph__grid:"connectToMemgraph__grid_2WPe"}}}]);