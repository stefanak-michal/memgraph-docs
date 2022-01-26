"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18602],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7066:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"analyzing-ted-talks",title:"Analyzing TED Talks",sidebar_label:"Analyzing TED Talks"},s=void 0,p={unversionedId:"tutorials/analyzing-ted-talks",id:"tutorials/analyzing-ted-talks",title:"Analyzing TED Talks",description:"This article is a part of a series intended to show how to use Memgraph on",source:"@site/docs/tutorials/analyzing-ted-talks.md",sourceDirName:"tutorials",slug:"/tutorials/analyzing-ted-talks",permalink:"/docs/memgraph/next/tutorials/analyzing-ted-talks",editUrl:"https://github.com/memgraph/docs/tree/master/docs/tutorials/analyzing-ted-talks.md",tags:[],version:"current",frontMatter:{id:"analyzing-ted-talks",title:"Analyzing TED Talks",sidebar_label:"Analyzing TED Talks"},sidebar:"memgraph",previous:{title:"Tutorials overview",permalink:"/docs/memgraph/next/tutorials"},next:{title:"Backpacking through Europe",permalink:"/docs/memgraph/next/tutorials/backpacking-through-europe"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Data Model",id:"data-model",children:[],level:2},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[],level:2},{value:"Example queries using Cypher",id:"example-queries-using-cypher",children:[],level:2}],m={toc:u};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is a part of a series intended to show how to use Memgraph on\nreal-world data to retrieve some interesting and useful information."),(0,o.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/tutorials"},"tutorial overview section"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.ted.com/"},"TED")," is a nonprofit organization devoted to spreading\nideas, usually in the form of short, powerful talks. Today, TED talks are\ninfluential videos from expert speakers on almost all topics ","\u2014"," from\nscience to business to global issues. Here we present a small dataset which\nconsists of 97 talks, show how to model this data as a graph and demonstrate a\nfew example queries."),(0,o.kt)("h2",{id:"data-model"},"Data Model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each TED talk has a main speaker, so we identify two types of nodes ","\u2014",(0,o.kt)("inlineCode",{parentName:"li"},"Talk")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Speaker"),"."),(0,o.kt)("li",{parentName:"ul"},"We add an edge of type ",(0,o.kt)("inlineCode",{parentName:"li"},"Gave")," pointing to a ",(0,o.kt)("inlineCode",{parentName:"li"},"Talk")," from its main ",(0,o.kt)("inlineCode",{parentName:"li"},"Speaker"),"."),(0,o.kt)("li",{parentName:"ul"},"Each speaker has a name so we can add property ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Speaker")," node."),(0,o.kt)("li",{parentName:"ul"},"We'll add properties ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"title")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"description")," to node ",(0,o.kt)("inlineCode",{parentName:"li"},"Talk"),"."),(0,o.kt)("li",{parentName:"ul"},"Each talk is given in a specific TED event, so we can create node ",(0,o.kt)("inlineCode",{parentName:"li"},"Event")," with\nproperty ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," and relationship ",(0,o.kt)("inlineCode",{parentName:"li"},"InEvent")," between talk and event."),(0,o.kt)("li",{parentName:"ul"},"Talks are tagged with keywords to facilitate searching, hence we add node\n",(0,o.kt)("inlineCode",{parentName:"li"},"Tag")," with property ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," and relationship ",(0,o.kt)("inlineCode",{parentName:"li"},"HasTag")," between talk and tag."),(0,o.kt)("li",{parentName:"ul"},"Users give ratings to each talk by selecting up to three predefined string\nvalues. Therefore we add node ",(0,o.kt)("inlineCode",{parentName:"li"},"Rating")," with these values as property ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),"\nand relationship",(0,o.kt)("inlineCode",{parentName:"li"},"HasRating")," with property ",(0,o.kt)("inlineCode",{parentName:"li"},"user_count")," between talk and rating\nnodes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TED",src:n(82342).Z})),(0,o.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,o.kt)("p",null,"You have two options for exploring this dataset. If you just want to take a look\nat the dataset and try out a few queries, open ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/ted-talks"},"Memgraph\nPlayground")," and continue with\nthe tutorial there. Note that you will not be able to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"write"),"\noperations."),(0,o.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and\nnavigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",(0,o.kt)("inlineCode",{parentName:"p"},"TED talks")," and continue with the tutorial."),(0,o.kt)("h2",{id:"example-queries-using-cypher"},"Example queries using Cypher"),(0,o.kt)("p",null,"In the queries below, we are using ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher")," to query Memgraph\nvia the console."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1",".")," Find all talks given by specific speaker:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Speaker {name: "Hans Rosling"})-[:Gave]->(m:Talk)\nRETURN m.title;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2",".")," Find the top 20 speakers with most talks given:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Speaker)-[:Gave]->(m)\nRETURN n.name, count(m) AS talksGiven\nORDER BY talksGiven\nDESC LIMIT 20;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3",".")," Find talks related by tag to specific talk and count them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Talk {name: "Michael Green: Why we should build wooden skyscrapers"})\n      -[:HasTag]->(t:Tag)<-[:HasTag]-(m:Talk)\nWITH *\nORDER BY m.name\nRETURN t.name, collect(m.name) AS names, count(m) AS talksCount\nORDER BY talksCount DESC;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4",".")," Find 20 most frequently used tags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (t:Tag)<-[:HasTag]-(n:Talk)\nRETURN t.name AS tag, count(n) AS talksCount\nORDER BY talksCount DESC, tag\nLIMIT 20;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5","."),' Find 20 talks most rated as "Funny". If you want to query by other\nratings, possible values are: Obnoxious, Jaw-dropping, OK, Persuasive,\nBeautiful, Confusing, Longwinded, Unconvincing, Fascinating, Ingenious,\nCourageous, Funny, Informative and Inspiring.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (r:Rating {name: "Funny"})<-[e:HasRating]-(m:Talk)\nRETURN m.name, e.user_count\nORDER BY e.user_count DESC\nLIMIT 20;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6",".")," Find inspiring talks and their speakers from the field of technology:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Talk)-[:HasTag]->(m:Tag {name: "technology"})\nMATCH (n)-[r:HasRating]->(p:Rating {name: "Inspiring"})\nMATCH (n)<-[:Gave]-(s:Speaker)\nWHERE r.user_count > 1000\nRETURN n.title, s.name, r.user_count\nORDER BY r.user_count DESC;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7",".")," Now let's see one real-world example ","\u2014"," how to make a real-time\nrecommendation. If you've just watched a talk from a certain speaker (e.g.\nHans Rosling) you might be interested in finding more talks from the same\nspeaker on a similar topic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Speaker {name: "Hans Rosling"})-[:Gave]->(m:Talk)\nMATCH (t:Talk {title: "New insights on poverty"})\n      -[:HasTag]->(tag:Tag)<-[:HasTag]-(m)\nWITH *\nORDER BY tag.name\nRETURN m.title AS title, collect(tag.name) AS names, count(tag) AS tagCount\nORDER BY tagCount DESC, title;\n')),(0,o.kt)("p",null,"The following few queries are focused on extracting information about TED\nevents."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8",".")," Find how many talks were given per event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Event)<-[:InEvent]-(t:Talk)\nRETURN n.name AS event, count(t) AS talksCount\nORDER BY talksCount DESC, event\nLIMIT 20;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"9",".")," Find the most popular tags in the specific event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Event {name:"TED2006"})<-[:InEvent]-(t:Talk)-[:HasTag]->(tag:Tag)\nRETURN tag.name AS tag, count(t) AS talksCount\nORDER BY talksCount DESC, tag\nLIMIT 20;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"10",".")," Discover which speakers participated in more than 2 events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Speaker)-[:Gave]->(t:Talk)-[:InEvent]->(e:Event)\nWITH n, count(e) AS eventsCount\nWHERE eventsCount > 2\nRETURN n.name AS speaker, eventsCount\nORDER BY eventsCount DESC, speaker;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"11",".")," For each speaker search for other speakers that participated in same\nevents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Speaker)-[:Gave]->()-[:InEvent]->(e:Event)<-[:InEvent]-()<-[:Gave]-(m:Speaker)\nWHERE n.name != m.name\nWITH DISTINCT n, m\nORDER BY m.name\nRETURN n.name AS speaker, collect(m.name) AS others\nORDER BY speaker;\n")))}c.isMDXComponent=!0},82342:function(e,t,n){t.Z=n.p+"assets/images/TED_metagraph-cfc7ffadb73736228f2e33e6b44133c2.png"}}]);