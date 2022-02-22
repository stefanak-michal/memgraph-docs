"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4064],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return t?a.createElement(y,o(o({ref:n},u),{},{components:t})):a.createElement(y,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1086:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={id:"cypher-query-language",title:"Cypher query language",sidebar_label:"Cypher query language"},l=void 0,p={unversionedId:"cypher-query-language",id:"cypher-query-language",title:"Cypher query language",description:"What is Cypher?",source:"@site/cypher-manual/cypher-query-language.md",sourceDirName:".",slug:"/cypher-query-language",permalink:"/docs/cypher-manual/cypher-query-language",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/cypher-query-language.md",tags:[],version:"current",frontMatter:{id:"cypher-query-language",title:"Cypher query language",sidebar_label:"Cypher query language"},sidebar:"cypher_manual",previous:{title:"What are graph databases",permalink:"/docs/cypher-manual/what-are-graph-databases"},next:{title:"Differences in Cypher implementations",permalink:"/docs/cypher-manual/differences"}},u=[{value:"What is Cypher?",id:"what-is-cypher",children:[],level:2},{value:"Cypher styling and syntax",id:"cypher-styling-and-syntax",children:[{value:"Comments",id:"comments",children:[],level:3},{value:"Naming convention",id:"naming-convention",children:[],level:3},{value:"Indentations and line breaks",id:"indentations-and-line-breaks",children:[],level:3},{value:"Quotes",id:"quotes",children:[],level:3}],level:2}],c={toc:u};function m(e){var n=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-cypher"},"What is Cypher?"),(0,i.kt)("p",null,"Cypher is a declarative query language specifically designed to handle querying\ngraph data efficiently. With Cypher, you express what to retrieve but not how to\nretrieve it. This allows you to focus on the problem domain instead of worrying\nabout the syntax."),(0,i.kt)("p",null,"Cypher was designed to be easy to learn but very powerful when it comes to graph\nanalytics. This means that you can use Cypher to write complex queries\nrelatively easily. "),(0,i.kt)("p",null,"You can think of Cypher as mapping English language sentence structure to\npatterns in a graph. In most cases, the nouns are nodes of the graph, the verbs\nare the relationships in the graph, and the adjectives and adverbs are the\nproperties."),(0,i.kt)("p",null,"In the following image, you can see one such example. We have a graph that\nconsists of two nodes and one relationship:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(41015).Z,width:"825",height:"150"})),(0,i.kt)("p",null,"We can interpret this graph by using the said method of mapping patterns to\nlanguage structures: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nocopy"},"A person named Harry is married to a person named Anna.\n")),(0,i.kt)("h2",{id:"cypher-styling-and-syntax"},"Cypher styling and syntax"),(0,i.kt)("p",null,"Same as other languages, Cypher has its own set of syntax rules and styling\nrecommendations. And as always, it is sensible to add comments to code as you\nwrite it."),(0,i.kt)("h3",{id:"comments"},"Comments"),(0,i.kt)("p",null,"To specify a comment in Cypher, place the characters ",(0,i.kt)("inlineCode",{parentName:"p"},"//")," before the line you\nwant to be a comment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"// This is a Cypher comment\nCREATE (p1:Person {name: 'Harry'}), (p2:Person  name: 'Anna'})\nCREATE (p1)-[r:MARRIED_TO]->(p2)\nRETURN r;\n")),(0,i.kt)("h3",{id:"naming-convention"},"Naming convention"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Node labels")," should be written using CamelCase and start with an upper-case\nletter. Node labels are case-sensitive. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nocopy"},"(:Country)\n(:City)\n(:CapitalCity)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Property keys"),", ",(0,i.kt)("strong",{parentName:"p"},"variables"),", ",(0,i.kt)("strong",{parentName:"p"},"parameters"),", ",(0,i.kt)("strong",{parentName:"p"},"aliases"),", and ",(0,i.kt)("strong",{parentName:"p"},"functions"),"\nare camelCase and begin with a lower-case letter. These components are\ncase-sensitive. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"dateOfBirth // Property key\nlargestCountry // Variable\nsize() // Function\ncountryOne // Alias\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Relationship types")," are styled upper-case and use the underscore character\n",(0,i.kt)("inlineCode",{parentName:"p"},"_")," to separate multiple words. Relationship types are case-sensitive and you\ncannot use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," character in a relationship type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"[:LIVES_IN]\n(:BORDERS_WITH)\n")),(0,i.kt)("p",null,"Aside from clauses, there is a number of ",(0,i.kt)("strong",{parentName:"p"},"keywords")," that should be styled with\ncapital letters even though they are not case sensitive. These include:\n",(0,i.kt)("inlineCode",{parentName:"p"},"DISTINCT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"IN"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"STARTS WITH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTAINS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"NOT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AND"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"OR")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AS"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country)\nWHERE c.name CONTAINS 'United' AND c.population > 9000000\nRETURN c AS Country;\n")),(0,i.kt)("h3",{id:"indentations-and-line-breaks"},"Indentations and line breaks"),(0,i.kt)("p",null,"Sometimes it's helpful to separate new clauses with an indent. Even though they\nare in a new line, subqueries should be indented to ensure readability. If there\nare multiple subqueries, they can be further grouped with curly brackets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"//Indent 2 spaces on lines with ON CREATE or ON MATCH subqueries\nMATCH (p:Person {name: 'Helga'})\nMERGE (c:Country {name: 'UK'})\nMERGE (p)-[l:LIVES_IN]->(c)\n  ON CREATE SET l.movedIn = date({year: 2020})\n  ON MATCH SET l.modified = date()\nRETURN p, l, c;\n\n//Indent 2 spaces with braces for subqueries\nMATCH (p:Person)\nWHERE EXISTS {\n  MATCH (p)--\x3e(c:Country)\n  WHERE c.name = 'UK'\n}\nRETURN p;\n")),(0,i.kt)("p",null,"An exception to this rule would be a one-line subquery where you don't need to\nuse a new line or an indent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person)\nWHERE EXISTS {MATCH (p)--\x3e(c:Country {name: 'UK'})}\nRETURN p;\n")),(0,i.kt)("h3",{id:"quotes"},"Quotes"),(0,i.kt)("p",null,"When it comes to quotes, a simple rule is to use whichever provides the fewest\nescaped characters in the string. If escaped characters are not needed, or their\nnumber is the same for single and double quotes, then single quotes should be\nfavored. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'// Bad syntax\nRETURN \'Memgraph\\\'s mission is: \', "A very famous quote is: \\"Astra inclinant, sed non obligant.\\""\n\n// Recommended syntax\nRETURN "Memgraph\'s mission is: ", \'A very famous quote is: "Astra inclinant, sed non obligant."\'\n')))}m.isMDXComponent=!0},41015:function(e,n){n.Z="data:image/png;base64,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"}}]);