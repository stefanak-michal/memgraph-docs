"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5232],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69603:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"other-features",title:"Other features",sidebar_label:"Other features"},s=void 0,p={unversionedId:"other-features",id:"other-features",title:"Other features",description:"The following sections describe some of the other supported features.",source:"@site/cypher-manual/other-features.md",sourceDirName:".",slug:"/other-features",permalink:"/docs/cypher-manual/other-features",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/other-features.md",tags:[],version:"current",frontMatter:{id:"other-features",title:"Other features",sidebar_label:"Other features"},sidebar:"cypher_manual",previous:{title:"Query modules",permalink:"/docs/cypher-manual/query-modules"},next:{title:"Differences overview",permalink:"/docs/cypher-manual/differences"}},u=[{value:"String operators",id:"string-operators",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"CASE",id:"case",children:[],level:2},{value:"Inspecting and profiling queries",id:"inspecting-and-profiling-queries",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following sections describe some of the other supported features."),(0,i.kt)("h2",{id:"string-operators"},"String operators"),(0,i.kt)("p",null,"Apart from comparison and concatenation operators openCypher provides special\nstring operators for easier matching of substrings:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Operator"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"a STARTS WITH b")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns true if prefix of string a is equal to string b.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"a ENDS WITH b")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns true if suffix of string a is equal to string b.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"a CONTAINS b")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns true if some substring of string a is equal to string b.")))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"When automating the queries for Memgraph, it comes in handy to change only\nsome parts of the query. Usually, these parts are values which are used for\nfiltering results or similar, while the rest of the query remains the same."),(0,i.kt)("p",null,"Parameters allow reusing the same query, but with different parameter values.\nThe syntax uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," symbol to designate a parameter name. We don't allow\nold Cypher parameter syntax using curly braces. For example, you can parameterize\nfiltering a node property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1 {property: $propertyValue}) RETURN node1;\n")),(0,i.kt)("p",null,"You can use parameters instead of any literal in the query. Using parameters as\nproperty maps is partially supported in ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),", but not in ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH")," nor\n",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," clause.\nFor example, the following query is illegal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n $propertyMap) RETURN n;\n")),(0,i.kt)("p",null,"but this is supported:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (n $propertyMap) RETURN n;\n")),(0,i.kt)("p",null,"To use parameters with Python driver use following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"session.run('CREATE (alice:Person {name: $name, age: $ageValue}',\n            name='Alice', ageValue=22)).consume()\n")),(0,i.kt)("p",null,"To use parameters which names are integers you will need to wrap parameters in\na dictionary and convert them to strings before running a query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"session.run('CREATE (alice:Person {name: $0, age: $1}',\n            {'0': \"Alice\", '1': 22})).consume()\n")),(0,i.kt)("p",null,"To use parameters with some other driver please consult appropriate\ndocumentation."),(0,i.kt)("h2",{id:"case"},"CASE"),(0,i.kt)("p",null,"Conditional expressions can be expressed in openCypher language by simple and\ngeneric form of ",(0,i.kt)("inlineCode",{parentName:"p"},"CASE")," expression. A simple form is used to compare an expression\nagainst multiple predicates. For the first matched predicate result of the\nexpression provided after the ",(0,i.kt)("inlineCode",{parentName:"p"},"THEN")," keyword is returned.  If no expression is\nmatched value following ",(0,i.kt)("inlineCode",{parentName:"p"},"ELSE")," is returned is provided, or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if ",(0,i.kt)("inlineCode",{parentName:"p"},"ELSE")," is not\nused:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nRETURN CASE n.currency WHEN "DOLLAR" THEN "$" WHEN "EURO" THEN "\u20ac" ELSE "UNKNOWN" END\n')),(0,i.kt)("p",null,"In generic form, you don't need to provide an expression whose value is compared to\npredicates, but you can list multiple predicates and the first one that evaluates\nto true is matched:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nRETURN CASE WHEN n.height < 30 THEN "short" WHEN n.height > 300 THEN "tall" END\n')),(0,i.kt)("h2",{id:"inspecting-and-profiling-queries"},"Inspecting and profiling queries"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PROFILE")," operators can be used to inspect and profile a\nparticular Cypher query in order to see its internal representation and the\nway it behaves during execution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"EXPLAIN MATCH (n) RETURN n;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"PROFILE MATCH (n) RETURN n;\n")),(0,i.kt)("p",null,"For a detailed look at using ",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PROFILE"),", take a look at the guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/database-functionalities/inspecting-queries"},"Inspecting queries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/database-functionalities/profiling-queries"},"Profiling queries"))))}m.isMDXComponent=!0}}]);