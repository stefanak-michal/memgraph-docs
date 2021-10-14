"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18685],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3480:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"inspecting-queries",title:"Inspecting queries",sidebar_label:"Inspecting queries"},s=void 0,p={unversionedId:"database-functionalities/inspecting-queries",id:"version-2.0.0/database-functionalities/inspecting-queries",isDocsHomePage:!1,title:"Inspecting queries",description:"Before a Cypher query is executed, it is converted into an internal form",source:"@site/memgraph_versioned_docs/version-2.0.0/database-functionalities/inspecting-queries.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/inspecting-queries",permalink:"/docs/memgraph/2.0.0/database-functionalities/inspecting-queries",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/database-functionalities/inspecting-queries.md",tags:[],version:"2.0.0",frontMatter:{id:"inspecting-queries",title:"Inspecting queries",sidebar_label:"Inspecting queries"},sidebar:"version-2.0.0/memgraph",previous:{title:"Uniqueness constraint",permalink:"/docs/memgraph/2.0.0/database-functionalities/constraints/uniqueness-constraint"},next:{title:"Memory control",permalink:"/docs/memgraph/2.0.0/database-functionalities/memory-control"}},c=[{value:"Where to next?",id:"where-to-next",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before a Cypher query is executed, it is converted into an internal form\nsuitable for execution, known as a ",(0,o.kt)("em",{parentName:"p"},"plan"),". A plan is a tree-like data structure\ndescribing a pipeline of operations which will be performed on the database in\norder to yield the results for a given query. Every node within a plan is known\nas a ",(0,o.kt)("em",{parentName:"p"},"logical operator")," and describes a particular operation."),(0,o.kt)("p",null,"Because a plan represents a pipeline, the logical operators are iteratively\nexecuted as data passes from one logical operator to the other. Every logical\noperator ",(0,o.kt)("em",{parentName:"p"},"pulls")," data from the logical operator(s) preceding it, processes it\nand passes it onto the logical operator next in the pipeline for further\nprocessing."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," operator, it is possible for the user to inspect the\nproduced plan and gain insight into the execution of a query. Currently, the\nvarious logical operators aren't fully documented as their behavior is subject\nto change. However, the behavior of most of them can be deduced from their name.\nIn the future, additional information might be added to the output of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," operator."),(0,o.kt)("p",null,"As an example, let's inspect the plan produced for a simple query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"EXPLAIN MATCH (n) RETURN n;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+----------------+\n| QUERY PLAN     |\n+----------------+\n|  * Produce {n} |\n|  * ScanAll (n) |\n|  * Once        |\n+----------------+\n")),(0,o.kt)("p",null,"The output of the ",(0,o.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," query is a representation of the produced plan. Every\nlogical operator within the plan starts with an asterisk character (",(0,o.kt)("inlineCode",{parentName:"p"},"*"),") and is\nfollowed by its name (and sometimes additional information). The execution of\nthe query proceeds iteratively (generating one entry of the result set at a\ntime), with data flowing from the bottom-most logical operator(s) (the start of\nthe pipeline) to the top-most logical operator(s) (the end of the pipeline)."),(0,o.kt)("p",null,"In the example above, the resulting plan is a pipeline of 3 logical operators.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Once")," is the identity logical operator which does nothing and is always found\nat the start of the pipeline; ",(0,o.kt)("inlineCode",{parentName:"p"},"ScanAll")," is a logical operator which iteratively\nproduces all of the nodes in the graph; and ",(0,o.kt)("inlineCode",{parentName:"p"},"Produce")," is a logical operator\nwhich takes data produced by another logical operator and produces data for the\nquery's result set."),(0,o.kt)("p",null,"A slightly more complicated example would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"EXPLAIN MATCH (n :Node)-[:Edge]-(m :Node) WHERE n.prop = 42 RETURN *;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------------------------------+\n| QUERY PLAN                     |\n+--------------------------------+\n|  * Produce {m, n}              |\n|  * Filter                      |\n|  * Expand (m)-[anon1:Edge]-(n) |\n|  * ScanAllByLabel (n :Node)    |\n|  * ScanAllByLabel (m :Node)    |\n|  * Once                        |\n+--------------------------------+\n")),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," logical operator is used to filter the matched\nnodes because of the ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE n.prop = 42")," construct. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Expand")," logical\noperator is used to find an edge between two nodes, in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"n"),"\nwhich were matched previously using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ScanAllByLabel")," logical operator (a\nvariant of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ScanAll")," logical operator mentioned previously)."),(0,o.kt)("p",null,"The execution of the query proceeds iteratively as follows. First, two vertices\nof type ",(0,o.kt)("inlineCode",{parentName:"p"},":Node")," are found as the result of the two scans. Then, we try to find a\npath that consists of the two vertices and an edge between them. If a path is\nfound, it is further filtered based on a property of one of the vertices.\nFinally, if the path satisfied the filter, its two vertices are added to the\nquery's result set."),(0,o.kt)("p",null,"A simple example showcasing the fully general tree structure of the plan could\nbe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"EXPLAIN MERGE (n) RETURN n;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------------------+\n| QUERY PLAN       |\n+------------------+\n|  * Produce {n}   |\n|  * Accumulate    |\n|  * Merge         |\n|  |\\ On Match     |\n|  | * ScanAll (n) |\n|  | * Once        |\n|  |\\ On Create    |\n|  | * CreateNode  |\n|  | * Once        |\n|  * Once          |\n+------------------+\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Merge")," logical operator (constructed as a result of the ",(0,o.kt)("inlineCode",{parentName:"p"},"MERGE")," construct)\ncan take input from up to 3 places. The ",(0,o.kt)("inlineCode",{parentName:"p"},"On Match")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"On Create"),' branches are\n"pulled from" only if a match was found or if a new vertex has to be created,\nrespectively.'),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/tutorials"},"Tutorials")),"."))}d.isMDXComponent=!0}}]);