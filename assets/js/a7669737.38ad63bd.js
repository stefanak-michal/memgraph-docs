"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6587],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),g=p(n),c=r,u=g["".concat(l,".").concat(c)]||g[c]||d[c]||i;return n?a.createElement(u,o(o({ref:t},h),{},{components:n})):a.createElement(u,o({ref:t},h))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20134:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return h},default:function(){return g}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"graph-algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},l=void 0,p={unversionedId:"reference-guide/graph-algorithms",id:"version-2.1.1/reference-guide/graph-algorithms",title:"Graph algorithms",description:"Filtering Variable Length Paths",source:"@site/memgraph_versioned_docs/version-2.1.1/reference-guide/graph-algorithms.md",sourceDirName:"reference-guide",slug:"/reference-guide/graph-algorithms",permalink:"/docs/memgraph/reference-guide/graph-algorithms",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/reference-guide/graph-algorithms.md",tags:[],version:"2.1.1",frontMatter:{id:"graph-algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},sidebar:"memgraph",previous:{title:"Configuration",permalink:"/docs/memgraph/reference-guide/configuration"},next:{title:"Import data overview",permalink:"/docs/memgraph/reference-guide/import-data/overview"}},h=[{value:"Filtering Variable Length Paths",id:"filtering-variable-length-paths",children:[],level:2},{value:"Breadth First Search",id:"breadth-first-search",children:[],level:2},{value:"Weighted Shortest Path",id:"weighted-shortest-path",children:[],level:2}],d={toc:h};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"filtering-variable-length-paths"},"Filtering Variable Length Paths"),(0,i.kt)("p",null,"Cypher supports only simple filtering when matching variable length paths.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[edge_list:Type * {x: 42}]-(m);\n")),(0,i.kt)("p",null,"This will produce only those paths whose edges have the required ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\nproperty value. Edges that compose the produced paths are stored in a symbol\nnamed ",(0,i.kt)("inlineCode",{parentName:"p"},"edge_list"),". Naturally, the user could have specified any other symbol\nname."),(0,i.kt)("p",null,"Memgraph extends openCypher with a syntax for arbitrary filter expressions\nduring path matching. The next example filters edges which have property ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"\nbetween ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[edge_list * (edge, node | 0 < edge.x < 10)]-(m);\n")),(0,i.kt)("p",null,"Here we introduce a lambda function with parentheses, where the first two\narguments, ",(0,i.kt)("inlineCode",{parentName:"p"},"edge")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"node"),", correspond to each edge and node during path\nmatching. ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," is the destination node we are moving to across the current\n",(0,i.kt)("inlineCode",{parentName:"p"},"edge"),". The last ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," value will be the same value as ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),". Following the\npipe (",(0,i.kt)("inlineCode",{parentName:"p"},"|"),") character is an arbitrary expression which must produce a boolean\nvalue.  If ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", matching continues, otherwise the path is discarded."),(0,i.kt)("p",null,"The previous example can be written using the ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[edge_list *]-(m) WHERE all(edge IN edge_list WHERE 0 < edge.x < 10);\n")),(0,i.kt)("p",null,"However, filtering using a lambda function is more efficient because paths\nmay be discarded earlier in the traversal. Furthermore, it provides more\nflexibility for deciding what kind of paths are matched due to more expressive\nfiltering capabilities. Therefore, filtering through lambda functions should\nbe preferred whenever possible."),(0,i.kt)("h2",{id:"breadth-first-search"},"Breadth First Search"),(0,i.kt)("p",null,"A typical graph use-case is searching for the shortest path between nodes.\nThe openCypher standard does not define this feature, so Memgraph provides\na custom implementation, based on the edge expansion syntax."),(0,i.kt)("p",null,"Finding the shortest path between nodes can be done using breadth-first\nexpansion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 723})-[edge_list:Type *bfs..10]-(b {id: 882}) RETURN *;\n")),(0,i.kt)("p",null,"The above query will find all paths of length up to 10 between nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),".\nThe edge type and maximum path length are used in the same way like in variable\nlength expansion."),(0,i.kt)("p",null,"To find only the shortest path, simply append ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT 1")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"RETURN")," clause."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 723})-[edge_list:Type *bfs..10]-(b {id: 882}) RETURN * LIMIT 1;\n")),(0,i.kt)("p",null,"Breadth-first expansion allows an arbitrary expression filter that determines\nif an expansion is allowed. Following is an example in which expansion is\nallowed only over edges whose ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," property is greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"12")," and nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"\nwhose property is less than ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 723})-[*bfs..10 (e, n | e.x > 12 AND n.y < 3)]-() RETURN *;\n")),(0,i.kt)("p",null,"The filter is defined as a lambda function over ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", which denote the edge\nand node being expanded over in the breadth first search. Note that if the user\nomits the edge list symbol (",(0,i.kt)("inlineCode",{parentName:"p"},"edge_list")," in previous examples) it will not be included\nin the result."),(0,i.kt)("p",null,"There are a few benefits of the breadth-first expansion approach, as opposed to\na specialized ",(0,i.kt)("inlineCode",{parentName:"p"},"shortestPath")," function. For one, it is possible to inject\nexpressions that filter on nodes and edges along the path itself, not just the final\ndestination node. Furthermore, it's possible to find multiple paths to multiple destination\nnodes regardless of their length. Also, it is possible to simply go through a node's\nneighbourhood in breadth-first manner."),(0,i.kt)("p",null,"Currently, it isn't possible to get all shortest paths to a single node using\nMemgraph's breadth-first expansion."),(0,i.kt)("h2",{id:"weighted-shortest-path"},"Weighted Shortest Path"),(0,i.kt)("p",null,"Another standard use-case in a graph is searching for the weighted shortest\npath between nodes. The openCypher standard does not define this feature, so\nMemgraph provides a custom implementation, based on the edge expansion syntax."),(0,i.kt)("p",null,"Finding the weighted shortest path between nodes is done using the weighted\nshortest path expansion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 723})-[\n        edge_list *wShortest 10 (e, n | e.weight) total_weight\n    ]-(b {id: 882})\nRETURN *;\n")),(0,i.kt)("p",null,"The above query will find the shortest path of length up to 10 nodes between\nnodes ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),"  and ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),". The length restriction parameter is optional."),(0,i.kt)("p",null,"Weighted Shortest Path expansion allows an arbitrary expression that determines\nthe weight for the current expansion. Total weight of a path is calculated as\nthe sum of all weights on the path between two nodes. Following is an example in\nwhich the weight between nodes is defined as the product of edge weights\n(instead of sum), assuming all weights are greater than '1':"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 723})-[\n        edge_list *wShortest 10 (e, n | log(e.weight)) total_weight\n    ]-(b {id: 882})\nRETURN exp(total_weight);\n")),(0,i.kt)("p",null,"Weighted Shortest Path expansions also allows an arbitrary expression filter\nthat determines if an expansion is allowed. Following is an example in which\nexpansion is allowed only over edges whose ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," property is greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"12"),"\nand nodes whose ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," property is less than ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 723})-[\n        edge_list *wShortest 10 (e, n | e.weight) total_weight (e, n | e.x > 12 AND n.y < 3)\n    ]-(b {id: 882})\nRETURN exp(total_weight);\n")),(0,i.kt)("p",null,"Both weight and filter expression are defined as lambda functions over ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", which denote the edge and the node being expanded over in the weighted\nshortest path search."))}g.isMDXComponent=!0}}]);