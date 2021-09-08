"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70011],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(h,o(o({ref:n},d),{},{components:t})):a.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35991:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"merge",title:"MERGE clause",sidebar_label:"MERGE"},p=void 0,s={unversionedId:"clauses/merge",id:"clauses/merge",isDocsHomePage:!1,title:"MERGE clause",description:"The MERGE clause is used to ensure that a pattern you are looking for exists in the database. This means that if the pattern is not found, it will be created. In a way, this clause is like a combination of MATCH and CREATE.",source:"@site/cypher-manual/clauses/merge.md",sourceDirName:"clauses",slug:"/clauses/merge",permalink:"/cypher-manual/clauses/merge",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/merge.md",tags:[],version:"current",frontMatter:{id:"merge",title:"MERGE clause",sidebar_label:"MERGE"},sidebar:"cypher_manual",previous:{title:"MATCH",permalink:"/cypher-manual/clauses/match"},next:{title:"OPTIONAL MATCH",permalink:"/cypher-manual/clauses/optional-match"}},d=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Merging nodes",id:"1-merging-nodes",children:[{value:"1.1 Merging nodes with labels",id:"11-merging-nodes-with-labels",children:[]},{value:"1.2 Merging nodes with properties",id:"12-merging-nodes-with-properties",children:[]},{value:"1.3 Merging nodes with labels and properties",id:"13-merging-nodes-with-labels-and-properties",children:[]},{value:"1.4 Merging nodes with existing node properties",id:"14-merging-nodes-with-existing-node-properties",children:[]}]},{value:"2. Merging relationships",id:"2-merging-relationships",children:[{value:"2.1 Merging relationships",id:"21-merging-relationships",children:[]},{value:"2.2 Merging on undirected relationships",id:"22-merging-on-undirected-relationships",children:[]}]},{value:"3. Merging with <code>ON CREATE</code> and <code>ON MATCH</code>",id:"3-merging-with-on-create-and-on-match",children:[{value:"3.1 Merging with <code>ON CREATE</code>",id:"31-merging-with-on-create",children:[]},{value:"3.2 Merging with <code>ON MATCH</code>",id:"32-merging-with-on-match",children:[]},{value:"3.3 Merging with <code>ON CREATE</code> and <code>ON MATCH</code>",id:"33-merging-with-on-create-and-on-match",children:[]}]},{value:"Data set Queries",id:"data-set-queries",children:[]}],c={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," clause is used to ensure that a pattern you are looking for exists in the database. This means that if the pattern is not found, it will be created. In a way, this clause is like a combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-merging-nodes"},"Merging nodes"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#11-merging-nodes-with-labels"},"Merging nodes with labels")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#12-merging-nodes-with-properties"},"Merging nodes with properties")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#13-merging-nodes-with-labels-and-properties"},"Merging nodes with labels and properties")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#14-merging-nodes-with-existing-node-properties"},"Merging nodes with existing node properties")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-merging-relationships"},"Merging relationships"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#21-merging-relationships"},"Merging relationships")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#22-merging-on-undirected-relationships"},"Merging on undirected relationships")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3-merging-with-on-create-and-on-match"},"Merging with ON CREATE and ON MATCH"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#31-merging-with-on-create"},"Merging with ON CREATE")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#32-merging-with-on-match"},"Merging with ON MATCH")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#33-merging-with-on-create-and-on-match"},"Merging with ON CREATE and ON MATCH"))))),(0,i.kt)("h2",{id:"data-set"},"Data Set"),(0,i.kt)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",(0,i.kt)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),(0,i.kt)("h2",{id:"1-merging-nodes"},"1. Merging nodes"),(0,i.kt)("h3",{id:"11-merging-nodes-with-labels"},"1.1 Merging nodes with labels"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," is used on a node with a label that doesn't exist in the database, the node is created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (city:City)\nRETURN city;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+---------+\n| city    |\n+---------+\n| (:City) |\n+---------+\n")),(0,i.kt)("h3",{id:"12-merging-nodes-with-properties"},"1.2 Merging nodes with properties"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," is used on a node with properties that don't match any existing node, that node is created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (city { name: 'London' })\nRETURN city;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+--------------------+\n| city               |\n+--------------------+\n| ({name: "London"}) |\n+--------------------+\n')),(0,i.kt)("h3",{id:"13-merging-nodes-with-labels-and-properties"},"1.3 Merging nodes with labels and properties"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," is used on a node with labels and properties that don't match any existing node, that node is created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (city:City { name: 'London' })\nRETURN city;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+--------------------------+\n| city                     |\n+--------------------------+\n| (:City {name: "London"}) |\n+--------------------------+\n')),(0,i.kt)("h3",{id:"14-merging-nodes-with-existing-node-properties"},"1.4 Merging nodes with existing node properties"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," is used with properties on an existing node, a new node is created for each unique value of that property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person)\nMERGE (h:Human { name: p.name })\nRETURN h.name;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+--------+\n| h.name |\n+--------+\n| John   |\n| Harry  |\n| Anna   |\n+--------+\n")),(0,i.kt)("h2",{id:"2-merging-relationships"},"2. Merging relationships"),(0,i.kt)("h3",{id:"21-merging-relationships"},"2.1 Merging relationships"),(0,i.kt)("p",null,"Just as with nodes, ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," can be used to match or create relationships."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1:Person { name: 'John' }), (p2:Person { name: 'Anna' })\nMERGE (p1)-[r:RELATED]->(p2)\nRETURN r;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+-----------+\n| r         |\n+-----------+\n| [RELATED] |\n+-----------+\n")),(0,i.kt)("p",null,"Multiple relationships can be matched or created with ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," in the same query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1:Person { name: 'John' }), (p2:Person { name: 'Anna' })\nMERGE (p1)-[r1:RELATED_TO]->(p2)-[r2:RELATED_TO]->(p1)\nRETURN r1, r2;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+--------------+--------------+\n| r1           | r2           |\n+--------------+--------------+\n| [RELATED_TO] | [RELATED_TO] |\n+--------------+--------------+\n")),(0,i.kt)("h3",{id:"22-merging-on-undirected-relationships"},"2.2 Merging on undirected relationships"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," is used on an undirected relationship, the direction will be chosen at random."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1:Person { name: 'John' }), (p2:Person { name: 'Anna' })\nMERGE path=((p1)-[r:WORKS_WITH]-(p2))\nRETURN path;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+-----------------------------------------------------------------+\n| p                                                               |\n+-----------------------------------------------------------------+\n| (:Person {name: "John"})-[WORKS_WITH]->(:Person {name: "Anna"}) |\n+-----------------------------------------------------------------+\n')),(0,i.kt)("p",null,"In this example, a path is returned to show the direction of the relationships."),(0,i.kt)("h2",{id:"3-merging-with-on-create-and-on-match"},"3. Merging with ",(0,i.kt)("inlineCode",{parentName:"h2"},"ON CREATE")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"ON MATCH")),(0,i.kt)("h3",{id:"31-merging-with-on-create"},"3.1 Merging with ",(0,i.kt)("inlineCode",{parentName:"h3"},"ON CREATE")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ON CREATE")," part of a ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," clause will only be executed if the node needs to be created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (p:Person { name: 'Lucille' })\nON CREATE SET p.date_of_creation = timestamp()\nRETURN p.name, p.date_of_creation;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+--------------------+--------------------+\n| p.name             | p.date_of_creation |\n+--------------------+--------------------+\n| Lucille            | 1605080852685      |\n+--------------------+--------------------+\n")),(0,i.kt)("h3",{id:"32-merging-with-on-match"},"3.2 Merging with ",(0,i.kt)("inlineCode",{parentName:"h3"},"ON MATCH")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ON MATCH")," part of a ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," clause will only be executed if the node is found."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (p:Person { name: 'John' })\nON MATCH SET p.found = TRUE\nRETURN p.name, p.found;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+---------+---------+\n| p.name  | p.found |\n+---------+---------+\n| John    | true    |\n+---------+---------+\n")),(0,i.kt)("h3",{id:"33-merging-with-on-create-and-on-match"},"3.3 Merging with ",(0,i.kt)("inlineCode",{parentName:"h3"},"ON CREATE")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"ON MATCH")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," clause can be used with both the ",(0,i.kt)("inlineCode",{parentName:"p"},"ON CREATE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ON MATCH")," options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (p:Person { name: 'Angela' })\nON CREATE SET p.notFound = TRUE\nON MATCH SET p.found = TRUE\nRETURN p.name, p.notFound, p.found;\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+------------+------------+------------+\n| p.name     | p.notFound | p.found    |\n+------------+------------+------------+\n| Angela     | true       | Null       |\n+------------+------------+------------+\n")),(0,i.kt)("h2",{id:"data-set-queries"},"Data set Queries"),(0,i.kt)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}u.isMDXComponent=!0}}]);