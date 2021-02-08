(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),r=a(7),i=(a(0),a(198)),o={id:"other-features",title:"Other features",sidebar_label:"Other features"},l={unversionedId:"other-features",id:"other-features",isDocsHomePage:!1,title:"Other features",description:"The following sections describe some of the other supported features.",source:"@site/cypher-manual/other-features.md",slug:"/other-features",permalink:"/cypher-manual/other-features",editUrl:"https://github.com/memgraph/docs/tree/main/cypher-manual/other-features.md",version:"current",sidebar_label:"Other features",sidebar:"cypher_manual",previous:{title:"WITH clause",permalink:"/cypher-manual/clauses/with"},next:{title:"Differences",permalink:"/cypher-manual/differences"}},s=[{value:"String operators",id:"string-operators",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"CASE",id:"case",children:[]},{value:"Inspecting and profiling queries",id:"inspecting-and-profiling-queries",children:[]}],p={toc:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"The following sections describe some of the other supported features."),Object(i.a)("h2",{id:"string-operators"},"String operators"),Object(i.a)("p",null,"Apart from comparison and concatenation operators openCypher provides special\nstring operators for easier matching of substrings:"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",{parentName:"tr",align:null},"Operator"),Object(i.a)("th",{parentName:"tr",align:null},"Description"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},Object(i.a)("inlineCode",{parentName:"td"},"a STARTS WITH b")),Object(i.a)("td",{parentName:"tr",align:null},"Returns true if prefix of string a is equal to string b.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},Object(i.a)("inlineCode",{parentName:"td"},"a ENDS WITH b")),Object(i.a)("td",{parentName:"tr",align:null},"Returns true if suffix of string a is equal to string b.")),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},Object(i.a)("inlineCode",{parentName:"td"},"a CONTAINS b")),Object(i.a)("td",{parentName:"tr",align:null},"Returns true if some substring of string a is equal to string b.")))),Object(i.a)("h2",{id:"parameters"},"Parameters"),Object(i.a)("p",null,"When automating the queries for Memgraph, it comes in handy to change only\nsome parts of the query. Usually, these parts are values which are used for\nfiltering results or similar, while the rest of the query remains the same."),Object(i.a)("p",null,"Parameters allow reusing the same query, but with different parameter values.\nThe syntax uses the ",Object(i.a)("inlineCode",{parentName:"p"},"$")," symbol to designate a parameter name. We don't allow\nold Cypher parameter syntax using curly braces. For example, you can parameterize\nfiltering a node property:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1 {property: $propertyValue}) RETURN node1;\n")),Object(i.a)("p",null,"You can use parameters instead of any literal in the query, but not instead of\nproperty maps even though that is allowed in standard openCypher. Following\nexample is illegal in Memgraph:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1 $propertyValue) RETURN node1;\n")),Object(i.a)("p",null,"To use parameters with Python driver use following syntax:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-python"},"session.run('CREATE (alice:Person {name: $name, age: $ageValue}',\n            name='Alice', ageValue=22)).consume()\n")),Object(i.a)("p",null,"To use parameters which names are integers you will need to wrap parameters in\na dictionary and convert them to strings before running a query:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-python"},"session.run('CREATE (alice:Person {name: $0, age: $1}',\n            {'0': \"Alice\", '1': 22})).consume()\n")),Object(i.a)("p",null,"To use parameters with some other driver please consult appropriate\ndocumentation."),Object(i.a)("h2",{id:"case"},"CASE"),Object(i.a)("p",null,"Conditional expressions can be expressed in openCypher language by simple and\ngeneric form of ",Object(i.a)("inlineCode",{parentName:"p"},"CASE")," expression. A simple form is used to compare an expression\nagainst multiple predicates. For the first matched predicate result of the\nexpression provided after the ",Object(i.a)("inlineCode",{parentName:"p"},"THEN")," keyword is returned.  If no expression is\nmatched value following ",Object(i.a)("inlineCode",{parentName:"p"},"ELSE")," is returned is provided, or ",Object(i.a)("inlineCode",{parentName:"p"},"null")," if ",Object(i.a)("inlineCode",{parentName:"p"},"ELSE")," is not\nused:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nRETURN CASE n.currency WHEN "DOLLAR" THEN "$" WHEN "EURO" THEN "\u20ac" ELSE "UNKNOWN" END\n')),Object(i.a)("p",null,"In generic form, you don't need to provide an expression whose value is compared to\npredicates, but you can list multiple predicates and the first one that evaluates\nto true is matched:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nRETURN CASE WHEN n.height < 30 THEN "short" WHEN n.height > 300 THEN "tall" END\n')),Object(i.a)("h2",{id:"inspecting-and-profiling-queries"},"Inspecting and profiling queries"),Object(i.a)("p",null,"The ",Object(i.a)("inlineCode",{parentName:"p"},"EXPLAIN")," and ",Object(i.a)("inlineCode",{parentName:"p"},"PROFILE")," operators can be used to inspect and profile a\nparticular Cypher query in order to see its internal representation and the\nway it behaves during execution."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"EXPLAIN MATCH (n) RETURN n;\n")),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"PROFILE MATCH (n) RETURN n;\n")),Object(i.a)("p",null,"For a detailed look at using ",Object(i.a)("inlineCode",{parentName:"p"},"EXPLAIN")," and ",Object(i.a)("inlineCode",{parentName:"p"},"PROFILE"),", take a look at the guides:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",{parentName:"li",href:"../memgraph/database-functionalities/inspecting-queries"},"Inspecting queries")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",{parentName:"li",href:"../memgraph/database-functionalities/profiling-queries"},"Profiling queries"))))}c.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?r.a.createElement(b,l(l({ref:t},p),{},{components:a})):r.a.createElement(b,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);