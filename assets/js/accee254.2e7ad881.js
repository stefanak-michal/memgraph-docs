"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9344],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,m=u["".concat(d,".").concat(g)]||u[g]||c[g]||l;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},18012:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],o={id:"writing-new-data",title:"Writing new data",sidebar_label:"Writing new data",slug:"/writing-new-data"},d=void 0,p={unversionedId:"getting-started/writing-new-data",id:"getting-started/writing-new-data",title:"Writing new data",description:"For adding new data, you can use the following clauses.",source:"@site/cypher-manual/getting-started/writing-new-data.md",sourceDirName:"getting-started",slug:"/writing-new-data",permalink:"/docs/cypher-manual/writing-new-data",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/getting-started/writing-new-data.md",tags:[],version:"current",frontMatter:{id:"writing-new-data",title:"Writing new data",sidebar_label:"Writing new data",slug:"/writing-new-data"},sidebar:"cypher_manual",previous:{title:"Reading existing data",permalink:"/docs/cypher-manual/reading-existing-data"},next:{title:"Reading and writing",permalink:"/docs/cypher-manual/reading-and-writing"}},s=[{value:"CREATE",id:"create",children:[],level:2},{value:"SET",id:"set",children:[],level:2},{value:"DELETE",id:"delete",children:[],level:2},{value:"REMOVE",id:"remove",children:[],level:2}],c={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For adding new data, you can use the following clauses."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE"),", for creating new nodes and edges."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SET"),", for adding new or updating existing labels and properties."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DELETE"),", for deleting nodes and edges."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"REMOVE"),", for removing labels and properties.")),(0,l.kt)("p",null,"You can still use the ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," clause to produce results after writing, but it\nis not mandatory."),(0,l.kt)("p",null,"Details on which kind of data can be stored in ",(0,l.kt)("em",{parentName:"p"},"Memgraph")," can be found in\n",(0,l.kt)("a",{parentName:"p",href:"/memgraph/concepts/storage"},"Data Storage")," chapter."),(0,l.kt)("h2",{id:"create"},"CREATE"),(0,l.kt)("p",null,"This clause is used to add new nodes and edges to the database. The creation\nis done by providing a pattern, similarly to ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause."),(0,l.kt)("p",null,"For example, to create 2 new nodes connected with a new edge, use this query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (node2)-[:edge_type]->(node2);\n")),(0,l.kt)("p",null,"Labels and properties can be set during creation using the same syntax as in\n",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," patterns. For example, creating a node with a label and a\nproperty:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (node :Label {property: "my property value"});\n')),(0,l.kt)("p",null,"Additional information on ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE")," is\n",(0,l.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/create"},"here"),"."),(0,l.kt)("h2",{id:"set"},"SET"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SET")," clause is used to update labels and properties of already existing\ndata."),(0,l.kt)("p",null,"Example. Incrementing everyone's age by 1."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) SET n.age = n.age + 1;\n")),(0,l.kt)("p",null,"Click\n",(0,l.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/set"},"here"),"\nfor a more detailed explanation on what can be done with ",(0,l.kt)("inlineCode",{parentName:"p"},"SET"),"."),(0,l.kt)("h2",{id:"delete"},"DELETE"),(0,l.kt)("p",null,"This clause is used to delete nodes and edges from the database."),(0,l.kt)("p",null,"Example. Removing all edges of a single type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH ()-[edge :type]-() DELETE edge;\n")),(0,l.kt)("p",null,"When testing the database, you want to often have a clean start by deleting\nevery node and edge in the database. It is reasonable that deleting each node\nshould delete all edges coming into or out of that node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) DELETE node;\n")),(0,l.kt)("p",null,"But, openCypher prevents accidental deletion of edges. Therefore, the above\nquery will report an error. Instead, you need to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"DETACH")," keyword,\nwhich will remove edges from a node you are deleting. The following should\nwork and ",(0,l.kt)("em",{parentName:"p"},"delete everything")," in the database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) DETACH DELETE node;\n")),(0,l.kt)("p",null,"More examples are\n",(0,l.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/delete"},"here"),"."),(0,l.kt)("h2",{id:"remove"},"REMOVE"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"REMOVE")," clause is used to remove labels and properties from nodes and\nedges."),(0,l.kt)("p",null,"Example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :WrongLabel) REMOVE n :WrongLabel, n.property;\n")))}u.isMDXComponent=!0}}]);