"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[962],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return g}});var a=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var m=a.createContext({}),c=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,m=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(r),g=o,d=p["".concat(m,".").concat(g)]||p[g]||u[g]||n;return r?a.createElement(d,i(i({ref:e},s),{},{components:r})):a.createElement(d,i({ref:e},s))}));function g(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=p;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},53272:function(t,e,r){var a=r(67294),o=r(85350);e.Z=function(t){var e=t.className,r=t.alt,n=t.lightImageSrc,i=t.darkImageSrc,l=(0,o.Z)().isDarkTheme;return a.createElement("img",{className:e,alt:r,src:l?i:n})}},19461:function(t,e,r){r.d(e,{Z:function(){return i}});var a=r(67294),o={connectButton:"connectButton_2SLc",connectButton__imgActive:"connectButton__imgActive_3K6i",connectButton__img:"connectButton__img_1287"},n=r(53272);function i(t){var e=t.title,r=t.url,i=t.img,l=t.imgActive,m=t.imgDark,c=t.imgDarkActive;return a.createElement("a",{href:r,className:o.connectButton,style:o},a.createElement(n.Z,{className:o.connectButton__img,lightImageSrc:i,darkImageSrc:m}),a.createElement(n.Z,{lightImageSrc:l,darkImageSrc:c,alt:e,className:o.connectButton__imgActive}))}},72819:function(t,e,r){r.d(e,{Z:function(){return i}});var a=r(67294),o="mgContainer_2F1c",n="mgContainer__small_1ljA";function i(t){var e=t.size,r=void 0===e?"default":e,i=t.children,l=null;return"small"===r&&(l=n),a.createElement("div",{className:o+" "+l},i)}},95702:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return g},toc:function(){return d},default:function(){return f}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=r(72819),l=r(78350),m=r(44996),c=r(19461),s=["components"],u={id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},p=void 0,g={unversionedId:"import-data/overview",id:"import-data/overview",title:"Import data",description:"export default function ConnectToMemgraph() {",source:"@site/docs/import-data/overview.mdx",sourceDirName:"import-data",slug:"/import-data",permalink:"/docs/memgraph/next/import-data",editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/overview.mdx",tags:[],version:"current",frontMatter:{id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},sidebar:"memgraph",previous:{title:"PHP",permalink:"/docs/memgraph/next/connect-to-memgraph/methods/building-applications/php"},next:{title:"LOAD CSV Cypher clause",permalink:"/docs/memgraph/next/import-data/load-csv-clause"}},d=[],h={toc:d},k=function(){var t="img/import-data/",e={title:"LOADCSVClause#",img:(0,m.Z)(t+"LOADcsvclause-unselected.svg"),imgActive:(0,m.Z)(t+"LOADcsvclause-selected.svg"),imgDark:(0,m.Z)(t+"dark/LOADcsvclause-unselected-dm.svg"),imgDarkActive:(0,m.Z)(t+"dark/LOADcsvclause-selected-dm.svg"),url:(0,m.Z)("memgraph/import-data/load-csv-clause")},r=[{title:"MySQL",img:(0,m.Z)(t+"mysql-unselected.svg"),imgActive:(0,m.Z)(t+"mysql-selected.svg"),imgDark:(0,m.Z)(t+"dark/mysql-unselected-dm.svg"),imgDarkActive:(0,m.Z)(t+"dark/mysql-selected-dm.svg"),url:(0,m.Z)("memgraph/import-data/migrate/mysql")},{title:"PostgreSQL",img:(0,m.Z)(t+"postgresql-unselected.svg"),imgActive:(0,m.Z)(t+"postgresql-selected.svg"),imgDark:(0,m.Z)(t+"dark/postgresql-unselected-dm.svg"),imgDarkActive:(0,m.Z)(t+"dark/postgresql-selected-dm.svg"),url:(0,m.Z)("memgraph/import-data/migrate/postgresql")}],a={title:"cypherl",img:(0,m.Z)(t+"cypherqueries-unselected.svg"),imgActive:(0,m.Z)(t+"cypherqueries-selected.svg"),imgDark:(0,m.Z)(t+"dark/cypherqueries-unselected-dm.svg"),imgDarkActive:(0,m.Z)(t+"dark/cypherqueries-selected-dm.svg"),url:(0,m.Z)("memgraph/import-data/cypherl")};return(0,n.kt)(i.Z,{size:"small"},(0,n.kt)("div",{className:l.Z.connectToMemgraph},(0,n.kt)("section",null,(0,n.kt)("p",null,"There are a few methods for importing data into Memgraph and they cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#csv"},"How to import CSV files into Memgraph?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#kafka"},"How to import streaming data from Kafka into Memgraph?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#migrate"},"How to migrate data from a relational database?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#queries"},"How to import data in the form of Cypher queries?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#application"},"How to import data directly from an application/program?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#csv-tool"},"How to create a snapshot from CSV files?"))))),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"csv"},"How to import CSV files into Memgraph?"),(0,n.kt)("p",null,"The easiest option for importing data into Memgraph is the"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/load-csv-clause")},"LOAD CSV Clause"))," ","which can be invoked straight from a running Memgraph instance and is used as a standard Cypher clause."),(0,n.kt)(c.Z,{title:e.title,url:e.url,img:e.img,imgActive:e.imgActive,imgDark:e.imgDark,imgDarkActive:e.imgDarkActive})),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"kafka"},"How to import streaming data from Kafka into Memgraph?"),(0,n.kt)("p",null,"Memgraph comes with full streaming support, and you can connect directly to a Kafka stream. Check out"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/kafka")},"this guide")," ","on how to connect to a Kafka stream and take a look at the examples with different serialization mechanisms:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/kafka/json")},"JSON"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/kafka/avro")},"Avro"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/kafka/protobuf")},"Protobuf"))))),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"migrate"},"How to migrate data from a relational database?"),(0,n.kt)("p",null,"You can migrate data from a"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/migrate/mysql")},"MySQL")," ","or"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/migrate/postgresql")},"PostgreSQL")," ","database using the"," ",(0,n.kt)("a",{href:"https://github.com/memgraph/mgmigrate"},"mgmigrate")," tool."),(0,n.kt)("div",{className:l.Z.connectToMemgraph__grid},r.map((function(t,e){return(0,n.kt)(c.Z,{key:e,url:t.url,title:t.title,img:t.img,imgActive:t.imgActive,imgDark:t.imgDark,imgDarkActive:t.imgDarkActive})})))),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"queries"},"How to import data from Cypher queries?"),(0,n.kt)("p",null,"If you have data in the form of Cypher queries (",(0,n.kt)("code",null,"CREATE")," ","and ",(0,n.kt)("code",null,"MERGE")," clauses) you can import it by using the"," ",(0,n.kt)("b",null,"mgconsole")," tool or ",(0,n.kt)("b",null,"Memgraph Lab"),". We call this format",(0,n.kt)("code",null,".cypherl")," and you can find an example of how to import such data ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/cypherl")},"here"),"."),(0,n.kt)(c.Z,{title:a.title,url:a.url,img:a.img,imgActive:a.imgActive,imgDark:a.imgDark,imgDarkActive:a.imgDarkActive})),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"application"},"How to import data directly from an application/program?"),(0,n.kt)("p",null,"Memgraph offers a wide range of drivers that can be used to connect directly to the platform. You can find a list of all the supported connection methods"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/connect-to-memgraph")},"here"),".")),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"csv-tool"},"How to create a snapshot from CSV files?"),(0,n.kt)("p",null,"The"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/csv-import-tool")},"CSV Import Tool"))," ","allows you to import nodes and relationships from multiple CSV files at once. The import is done while Memgraph is not running, so it can load the data the next time it starts. The tool is fully compatible with the"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://neo4j.com/docs/operations-manual/current/tools/import/"},"Neo4j CSV format")),". If you already have a pipeline set-up for Neo4j, you should only replace"," ",(0,n.kt)("code",null,"neo4j-admin import")," with ",(0,n.kt)("code",null,"mg_import_csv"),". Keep in mind that the CSV Import Tool creates one snapshot from the supplied CSV files. Memgraph will overwrite any present data with the newly created snapshot. This means that additional imports need to be done with the"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/load-csv-clause")},"LOAD CSV Clause")," if you want to preserve already imported data.")),(0,n.kt)("section",null,(0,n.kt)("h2",null,"Where to next?"),(0,n.kt)("p",null,"To learn more about the ",(0,n.kt)("b",null,"Cypher")," language, visit the"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("cypher-manual")},"Cypher manual"))," ","or"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://playground.memgraph.com/"},"Memgraph Playground"))," ","for interactive guides. For real-world examples of how to use Memgraph, we strongly suggest going through one of the available"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("memgraph/tutorials")},"Tutorials")),". Details on what can be stored in Memgraph can be found in the article about ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("memgraph/concepts/storage")},"Data storage")),"."))))};function f(t){var e=t.components,r=(0,o.Z)(t,s);return(0,n.kt)(k,(0,a.Z)({},h,r,{components:e,mdxType:"MDXLayout"}))}f.isMDXComponent=!0},78350:function(t,e){e.Z={connectToMemgraph:"connectToMemgraph_1O8F",connectToMemgraph__grid:"connectToMemgraph__grid_3kGe"}}}]);