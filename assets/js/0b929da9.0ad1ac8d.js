(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[974],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25057:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),l=["components"],i={id:"remove",title:"REMOVE clause",sidebar_label:"REMOVE"},p=void 0,u={unversionedId:"clauses/remove",id:"clauses/remove",isDocsHomePage:!1,title:"REMOVE clause",description:"The REMOVE clause is used to remove labels and properties from nodes and edges.",source:"@site/cypher-manual/clauses/remove.md",sourceDirName:"clauses",slug:"/clauses/remove",permalink:"/cypher-manual/clauses/remove",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/remove.md",version:"current",frontMatter:{id:"remove",title:"REMOVE clause",sidebar_label:"REMOVE"},sidebar:"cypher_manual",previous:{title:"OPTIONAL MATCH",permalink:"/cypher-manual/clauses/optional-match"},next:{title:"RETURN",permalink:"/cypher-manual/clauses/return"}},c=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Removing a property",id:"1-removing-a-property",children:[]},{value:"2. Removing a label",id:"2-removing-a-label",children:[]},{value:"Data set Queries",id:"data-set-queries",children:[]}],s={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"REMOVE")," clause is used to remove labels and properties from nodes and edges."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-removing-a-property"},"Removing a property")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-removing-a-label"},"Removing a label"))),(0,o.kt)("h2",{id:"data-set"},"Data Set"),(0,o.kt)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",(0,o.kt)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),(0,o.kt)("h2",{id:"1-removing-a-property"},"1. Removing a property"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"REMOVE")," clause can be used to remove a property from a node or relationship."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country { name: 'United Kingdom' })\nREMOVE n.name\nRETURN n;\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'+-----------------------------------------------------------------------------+\n| n                                                                           |\n+-----------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "English", population: 66000000}) |\n+-----------------------------------------------------------------------------+\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"REMOVE")," clause can't be used to remove all properties from a node or relationship. Instead, take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"SET")," clause."),(0,o.kt)("h2",{id:"2-removing-a-label"},"2. Removing a label"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"REMOVE")," clause can be used to remove a label from a node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country { name: 'United Kingdom' })\nREMOVE n:Country\nRETURN n;\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'+--------------------------------------------------------------------------------------------+\n| n                                                                                          |\n+--------------------------------------------------------------------------------------------+\n| ({continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+--------------------------------------------------------------------------------------------+\n')),(0,o.kt)("p",null,"Let's add the label ",(0,o.kt)("inlineCode",{parentName:"p"},"Country")," back to the node with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"United Kingdom")," and the additional label ",(0,o.kt)("inlineCode",{parentName:"p"},"Kingdom"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n { name: 'United Kingdom' })\nSET n:Country:Kingdom;\n")),(0,o.kt)("p",null,"You can now remove multiple labels from a node at the same time. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'+--------------------------------------------------------------------------------------------+\n| n                                                                                          |\n+--------------------------------------------------------------------------------------------+\n| ({continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+--------------------------------------------------------------------------------------------+\n')),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------+\n| c2   |\n+------+\n| Null |\n+------+\n")),(0,o.kt)("h2",{id:"data-set-queries"},"Data set Queries"),(0,o.kt)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}m.isMDXComponent=!0}}]);