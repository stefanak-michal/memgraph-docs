"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27384],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},901:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"import-data",title:"Import data",sidebar_label:"Import data"},p=void 0,s={unversionedId:"import-data",id:"import-data",title:"Import data",description:"For adding new data, you can use the following clauses.",source:"@site/cypher-manual/import-data.md",sourceDirName:".",slug:"/import-data",permalink:"/docs/cypher-manual/import-data",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/import-data.md",tags:[],version:"current",frontMatter:{id:"import-data",title:"Import data",sidebar_label:"Import data"},sidebar:"cypher_manual",previous:{title:"Working with Memgraph",permalink:"/docs/cypher-manual/working-with-memgraph"},next:{title:"Connecting nodes",permalink:"/docs/cypher-manual/connecting-nodes"}},d=[{value:"CREATE",id:"create",children:[],level:2},{value:"WITH",id:"with",children:[],level:2},{value:"MERGE",id:"merge",children:[],level:2},{value:"Import existing data from CSV",id:"import-existing-data-from-csv",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For adding new data, you can use the following clauses."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CREATE"),", for creating new nodes and relationships."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SET"),", for adding new or updating existing labels and properties.")),(0,o.kt)("p",null,"You can still use the ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," clause to produce results after writing, but it\nis not mandatory."),(0,o.kt)("p",null,"Details on which kind of data can be stored in Memgraph can be found in the\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/concepts/storage"},"Storage")," chapter."),(0,o.kt)("h2",{id:"create"},"CREATE"),(0,o.kt)("p",null,"This clause is used to add new nodes and relationships to the database. The creation is\ndone by providing a pattern, similarly to ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH")," clause."),(0,o.kt)("p",null,"For example, use this query to create two new nodes connected with a new relationship."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (node2)-[:RELATIONSHIP_TYPE]->(node2);\n")),(0,o.kt)("p",null,"Labels and properties can be set during creation using the same syntax as in\n",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH")," patterns. For example, creating a node with a label and a property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (node:Label {property: 'my property value'});\n")),(0,o.kt)("p",null,"Additional information on ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE")," is available ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/create"},"here"),"."),(0,o.kt)("h2",{id:"with"},"WITH"),(0,o.kt)("p",null,"The write part of the query cannot be simply followed by another read part. To\ncombine them, the ",(0,o.kt)("inlineCode",{parentName:"p"},"WITH")," clause must be used. The names this clause establishes\nare transferred from one part to another."),(0,o.kt)("p",null,"For example, creating a node and finding all nodes with the same property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (node {property: 42}) WITH node.property AS propValue\nMATCH (n {property: propValue}) RETURN n;\n")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," is not visible after ",(0,o.kt)("inlineCode",{parentName:"p"},"WITH"),", since only ",(0,o.kt)("inlineCode",{parentName:"p"},"node.property")," was\ncarried over."),(0,o.kt)("p",null,"This clause behaves very much like ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN"),", so you should refer to features of\n",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN"),"."),(0,o.kt)("h2",{id:"merge"},"MERGE"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MERGE")," clause is used to ensure that a pattern you are looking for exists\nin the database. This means that it will be created if the pattern is not found.\nIn a way, this clause is like a combination of ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,o.kt)("p",null,"For example, ensure that a person has at least one friend:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) MERGE (n)-[:FRIENDS_WITH]->(m);\n")),(0,o.kt)("p",null,"The clause also provides additional features for updating the values depending\non whether the pattern was created or matched. This is achieved with ",(0,o.kt)("inlineCode",{parentName:"p"},"ON CREATE"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"ON MATCH")," sub clauses."),(0,o.kt)("p",null,"For example, set different properties depending on what ",(0,o.kt)("inlineCode",{parentName:"p"},"MERGE")," did:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Person) MERGE (n)-[:FRIENDS_WITH]->(m)\nON CREATE SET m.prop = "created" ON MATCH SET m.prop = "existed";\n')),(0,o.kt)("p",null,"For more details, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/merge"},"this guide"),"."),(0,o.kt)("h2",{id:"import-existing-data-from-csv"},"Import existing data from CSV"),(0,o.kt)("p",null,"Using CSV files is just one of the ways to ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data"},"import your\ndata")," into Memgraph. The ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause enables\nyou to ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/load-csv-clause"},"load and use data")," from a\nCSV file. Memgraph supports the Excel CSV dialect, as it's the most commonly\nused one. For the syntax of the clause, please check the ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/load-csv"},"LOAD\nCSV")," page in the Cypher manual."))}u.isMDXComponent=!0}}]);