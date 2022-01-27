"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82695],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41698:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],o={id:"where",title:"WHERE clause",sidebar_label:"WHERE"},p=void 0,s={unversionedId:"clauses/where",id:"clauses/where",title:"WHERE clause",description:"WHERE isn't usually considered a standalone clause but rather a part of the MATCH, OPTIONAL MATCH and WITH clauses.",source:"@site/cypher-manual/clauses/where.md",sourceDirName:"clauses",slug:"/clauses/where",permalink:"/docs/cypher-manual/clauses/where",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/where.md",tags:[],version:"current",frontMatter:{id:"where",title:"WHERE clause",sidebar_label:"WHERE"},sidebar:"cypher_manual",previous:{title:"UNWIND",permalink:"/docs/cypher-manual/clauses/unwind"},next:{title:"WITH",permalink:"/docs/cypher-manual/clauses/with"}},c=[{value:"Data Set",id:"data-set",children:[],level:2},{value:"1. Basic Usage",id:"1-basic-usage",children:[{value:"1.1 Boolean Operators",id:"11-boolean-operators",children:[],level:3},{value:"1.2 Inequality Operators Operators",id:"12-inequality-operators-operators",children:[],level:3},{value:"1.3 Filter with node labels",id:"13-filter-with-node-labels",children:[],level:3},{value:"1.4 Filter with node properties",id:"14-filter-with-node-properties",children:[],level:3},{value:"1.5 Filter with relationship properties",id:"15-filter-with-relationship-properties",children:[],level:3},{value:"1.6 Check if property is not null",id:"16-check-if-property-is-not-null",children:[],level:3}],level:2},{value:"2. String matching",id:"2-string-matching",children:[],level:2},{value:"3. Regular expressions",id:"3-regular-expressions",children:[],level:2},{value:"Data set Queries",id:"data-set-queries",children:[],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," isn't usually considered a standalone clause but rather a part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONAL MATCH")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH")," clauses."),(0,l.kt)("p",null,"The difference when using ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," with these clauses is that it only filter the results in the case of the ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH")," clause, while it adds constraints to the patterns described in the case of ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONAL MATCH"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," is part of the directly preceding ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONAL MATCH")," clause and should always be used like that to avoid problems with performance or results."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-basic-usage"},"Basic usage"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#11-boolean-operators"},"Boolean Operators")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#12-inequality-operators-operators"},"Inequality Operators Operators")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#13-filter-with-node-labels"},"Filter with node labels")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#14-filter-with-node-properties"},"Filter with node properties")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#15-filter-with-relationship-properties"},"Filter with relationship properties")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#16-check-if-property-is-not-null"},"Check if property is not null")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-string-matching"},"String matching")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-regular-expressions"},"Regular Expressions"))),(0,l.kt)("h2",{id:"data-set"},"Data Set"),(0,l.kt)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",(0,l.kt)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),(0,l.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),(0,l.kt)("h2",{id:"1-basic-usage"},"1. Basic Usage"),(0,l.kt)("h3",{id:"11-boolean-operators"},"1.1 Boolean Operators"),(0,l.kt)("p",null,"Standard boolean operators like ",(0,l.kt)("inlineCode",{parentName:"p"},"NOT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"AND"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"OR")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"XOR")," can be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country)\nWHERE c.language = 'English' AND  c.continent = 'Europe'\nRETURN c.name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+----------------+\n| c.name         |\n+----------------+\n| United Kingdom |\n+----------------+\n")),(0,l.kt)("h3",{id:"12-inequality-operators-operators"},"1.2 Inequality Operators Operators"),(0,l.kt)("p",null,"Standard inequality operators like ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,l.kt)("inlineCode",{parentName:"p"},">")," and ",(0,l.kt)("inlineCode",{parentName:"p"},">=")," can be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country)\nWHERE (c.population > 80000000)\nRETURN c.name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+---------+\n| c.name  |\n+---------+\n| Germany |\n+---------+\n")),(0,l.kt)("h3",{id:"13-filter-with-node-labels"},"1.3 Filter with node labels"),(0,l.kt)("p",null,"Nodes can be filtered by their label using the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause instead of specifying it directly in the ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c)\nWHERE c:Country\nRETURN c.name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+----------------+\n| c.name         |\n+----------------+\n| Germany        |\n| France         |\n| United Kingdom |\n+----------------+\n")),(0,l.kt)("h3",{id:"14-filter-with-node-properties"},"1.4 Filter with node properties"),(0,l.kt)("p",null,"Just as labels, node properties can be used in the WHERE clause to filter nodes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country)\nWHERE c.population < 70000000\nRETURN c.name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+----------------+\n| c.name         |\n+----------------+\n| France         |\n| United Kingdom |\n+----------------+\n")),(0,l.kt)("h3",{id:"15-filter-with-relationship-properties"},"1.5 Filter with relationship properties"),(0,l.kt)("p",null,"Just as with node properties, relationship properties can be used as filters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Country {name: 'United Kingdom'})-[r]-(p)\nWHERE r.date_of_start = 2014\nRETURN p;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+---------------------------+\n| p                         |\n+---------------------------+\n| (:Person {name: "Harry"}) |\n| (:Person {name: "Anna"})  |\n+---------------------------+\n')),(0,l.kt)("h3",{id:"16-check-if-property-is-not-null"},"1.6 Check if property is not null"),(0,l.kt)("p",null,"To check if a node or relationship property exists use the ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NOT NULL")," option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country)\nWHERE c.name = 'United Kingdom' AND c.population IS NOT NULL\nRETURN c.name, c.population;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+----------------+----------------+\n| c.name         | c.population   |\n+----------------+----------------+\n| United Kingdom | 66000000       |\n+----------------+----------------+\n")),(0,l.kt)("h2",{id:"2-string-matching"},"2. String matching"),(0,l.kt)("p",null,"Apart from comparison and concatenation operators Cypher provides special\nstring operators for easier matching of substrings:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a STARTS WITH b")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the prefix of string a is equal to string b.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a ENDS WITH b")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the suffix of string a is equal to string b.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a CONTAINS b")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if some substring of string a is equal to string b.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country)\nWHERE c.name STARTS WITH 'G' AND NOT c.name CONTAINS 't'\nRETURN c.name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+---------+\n| c.name  |\n+---------+\n| Germany |\n+---------+\n")),(0,l.kt)("h2",{id:"3-regular-expressions"},"3. Regular expressions"),(0,l.kt)("p",null,"Inside ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause, you can use regular expressions for text filtering. To\nuse a regular expression, you need to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"=~")," operator."),(0,l.kt)("p",null,"For example, finding all ",(0,l.kt)("inlineCode",{parentName:"p"},"Person")," nodes which have a name ending with ",(0,l.kt)("inlineCode",{parentName:"p"},"a"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n :Person) WHERE n.name =~ ".*a$" RETURN n;\n')),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+--------------------------+\n| n                        |\n+--------------------------+\n| (:Person {name: "Anna"}) |\n+--------------------------+\n')),(0,l.kt)("p",null,"The regular expression syntax is based on the modified ECMAScript regular\nexpression grammar. The ECMAScript grammar can be found\n",(0,l.kt)("a",{parentName:"p",href:"http://ecma-international.org/ecma-262/5.1/#sec-15.10"},"here"),", while the\nmodifications are described in ",(0,l.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/regex/ecmascript"},"this\ndocument"),"."),(0,l.kt)("h2",{id:"data-set-queries"},"Data set Queries"),(0,l.kt)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}d.isMDXComponent=!0}}]);