"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68251],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=a.createContext({}),l=function(e){var t=a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(h.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,h=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,m=u["".concat(h,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11427:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return h},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"graph-algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},h=void 0,l={unversionedId:"under-the-hood/graph-algorithms",id:"under-the-hood/graph-algorithms",title:"Graph algorithms",description:"Introduction",source:"@site/docs/under-the-hood/graph-algorithms.md",sourceDirName:"under-the-hood",slug:"/under-the-hood/graph-algorithms",permalink:"/docs/memgraph/next/under-the-hood/graph-algorithms",editUrl:"https://github.com/memgraph/docs/tree/master/docs/under-the-hood/graph-algorithms.md",tags:[],version:"current",frontMatter:{id:"graph-algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},sidebar:"memgraph",previous:{title:"Storage",permalink:"/docs/memgraph/next/under-the-hood/storage"},next:{title:"Indexing",permalink:"/docs/memgraph/next/under-the-hood/indexing"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Breadth-first search",id:"breadth-first-search",children:[],level:2},{value:"Weighted Shortest Path",id:"weighted-shortest-path",children:[{value:"Dijkstra&#39;s algorithm",id:"dijkstras-algorithm",children:[{value:"Upper Bound Implications",id:"upper-bound-implications",children:[],level:4}],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],d={toc:p};function u(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'A graph is a mathematical structure used to describe a set of objects in which\ncertain pairs of objects are "related" in some sense. Generally, we consider\nthose objects as abstractions named ',(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," (also called ",(0,i.kt)("inlineCode",{parentName:"p"},"vertices"),") and the\nrelations between them as an abstractions named ",(0,i.kt)("inlineCode",{parentName:"p"},"relationships")," (also called\n",(0,i.kt)("inlineCode",{parentName:"p"},"edges"),")."),(0,i.kt)("p",null,"It turns out that a lot of real-world problems can be successfully modeled using\ngraphs. Some natural examples would contain railway networks between cities,\ncomputer networks, piping systems and Memgraph itself."),(0,i.kt)("p",null,"This article outlines some of the most important graph algorithms that are\ninternally used by Memgraph you could significantly benefit from. Please keep in\nmind that this article does not contain an in-depth analysis of algorithms and\ntheir implementation details since those are well documented in the appropriate\nliterature and, in our opinion, go well out of scope of user documentation. What\nthis article does contain is the relevant information for using Memgraph\neffectively and efficiently."),(0,i.kt)("p",null,"This article outlines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#breadth-first-search"},"Breadth-first search (BFS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#weighted-shortest-path"},"Weighted shortest path (WSP)"))),(0,i.kt)("p",null,"Memgraph has a lot more graph algorithms to offer besides these two and they are\nall a part of ",(0,i.kt)("a",{parentName:"p",href:"/mage"},"MAGE"),"."),(0,i.kt)("h2",{id:"breadth-first-search"},"Breadth-first search"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"Breadth-first search")," is a\nway of traversing a graph data structure. The traversal starts from a single\nnode (usually referred to as source node) and, during the traversal, breadth is\nprioritized over depth, hence the name of the algorithm. More precisely, when we\nvisit some node, we can safely assume that we have already visited all nodes\nthat are fewer relationships away from a source node. An interesting side-effect\nof traversing a graph in BFS order is the fact that, when we visit a particular\nnode, we can easily find a path from the source node to the newly visited node\nwith the least number of relationships. Since in this context we disregard the\nrelationship weights, we can say that BFS is a solution to an unweighted\nshortest path problem."),(0,i.kt)("p",null,"The algorithm itself proceeds as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep around a set of nodes that are equidistant from the source node.\nInitially, this set contains only the source node."),(0,i.kt)("li",{parentName:"ul"},"Expand to all not yet visited nodes that are a single relationship away from\nthat set. Note that the set of those nodes is also equidistant from the\nsource node."),(0,i.kt)("li",{parentName:"ul"},"Replace the set with a set of nodes obtained in the previous step."),(0,i.kt)("li",{parentName:"ul"},"Terminate the algorithm when the set is empty.")),(0,i.kt)("p",null,"The order of visited nodes is nicely visualized in the following animation from\nWikipedia. Note that each row contains nodes that are equidistant from the\nsource and thus represents one of the sets mentioned above."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif",alt:null})),(0,i.kt)("p",null,"The standard BFS implementation skews from the above description by relying on a\nFIFO (first in, first out) queue data structure. Nevertheless, the functionality\nis equivalent and its runtime is bounded by ",(0,i.kt)("inlineCode",{parentName:"p"},"O(|V| + |E|)")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," denotes the\nset of nodes and ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," denotes the set of relationships. Therefore, it provides a\nmore efficient way of finding unweighted shortest paths than running ",(0,i.kt)("a",{parentName:"p",href:"#weighted-shortest-path"},"Dijkstra's\nalgorithm")," on a graph with relationship weights equal\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("h2",{id:"weighted-shortest-path"},"Weighted Shortest Path"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graph_theory"},"graph theory"),", weighted shortest\npath problem is the problem of finding a path between two nodes in a graph such\nthat the sum of the weights of relationships connecting nodes on the path is\nminimized."),(0,i.kt)("h3",{id:"dijkstras-algorithm"},"Dijkstra's algorithm"),(0,i.kt)("p",null,"One of the most important algorithms for finding weighted shortest paths is\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"},"Dijkstra's algorithm"),'.\nOur implementation uses a modified version of this algorithm that can handle\nlength restriction. The length restriction parameter is optional and when it\'s\nnot set it could increase the complexity of the algorithm. It is important to\nnote that the term "length" in this context denotes the number of traversed\nrelationships and not the sum of their weights.'),(0,i.kt)("p",null,"The algorithm itself is based on a couple of greedy observations and could be\nexpressed in natural language as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep around a set of already visited nodes along with their corresponding\nshortest paths from source node. Initially, this set contains only the\nsource node with the shortest distance of ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},"Find an relationship that goes from a visited node to an unvisited one such\nthat the shortest path from source to the visited node increased by the\nweight of that relationship is minimized. Traverse that relationship and add\na newly visited node with appropriate distance to the set of already visited\nnodes."),(0,i.kt)("li",{parentName:"ul"},"Repeat the process until the destination node is visited.")),(0,i.kt)("p",null,"The described algorithm is nicely visualized in the following animation from\nWikipedia. Note that relationship weights correspond to the Euclidean distance\nbetween nodes which represent points on a plane."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/DijkstraDemo.gif",alt:null})),(0,i.kt)("p",null,"Using appropriate data structures the worst-case performance of our\nimplementation can be expressed as  ",(0,i.kt)("inlineCode",{parentName:"p"},"O(|E| + |V|log|V|)")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," denotes\nthe set of relationships and ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," denotes the set of nodes."),(0,i.kt)("p",null,"A sample query that finds a shortest path between two nodes looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 723})-[edge_list *wShortest 10 (e, n | e.weight) total_weight]-(b {id: 882}) RETURN *;\n")),(0,i.kt)("p",null,"This query has an upper bound length restriction set to ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),". This means that no\npath that traverses more than ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," relationships will be considered as a valid\nresult."),(0,i.kt)("h4",{id:"upper-bound-implications"},"Upper Bound Implications"),(0,i.kt)("p",null,"Since the upper bound parameter is optional, we can have different results based\non this parameter."),(0,i.kt)("p",null,"Consider the following graph and sample queries."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(79387).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 0})-[edge_list *wShortest 3 (e, n | e.weight) total_weight]-(b {id: 5}) RETURN *;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 0})-[edge_list *wShortest   (e, n | e.weight) total_weight]-(b {id: 5}) RETURN *;\n")),(0,i.kt)("p",null,"The first query will try to find the weighted shortest path between nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," with the restriction on the path length set to ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),", and the second query\nwill try to find the weighted shortest path with no restriction on the path\nlength."),(0,i.kt)("p",null,"The expected result for the first query is ",(0,i.kt)("inlineCode",{parentName:"p"},"0 -> 1 -> 4 -> 5")," with the total\ncost of ",(0,i.kt)("inlineCode",{parentName:"p"},"12"),", while the expected result for the second query is\n",(0,i.kt)("inlineCode",{parentName:"p"},"0 -> 2 -> 3 -> 4 -> 5")," with the total cost of ",(0,i.kt)("inlineCode",{parentName:"p"},"11"),". Obviously, the second\nquery can find the true shortest path because it has no restrictions on the\nlength."),(0,i.kt)("p",null,"To handle cases when the length restriction is set, weighted shortest path\nalgorithm uses both node and distance as the state. This causes the search\nspace to increase by the factor of the given upper bound. On the other hand, not\nsetting the upper bound parameter, the search space might contain the whole\ngraph."),(0,i.kt)("p",null,"Because of this, one should always try to narrow down the upper bound limit to\nbe as precise as possible in order to have a more performant query."),(0,i.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"For some real-world application of WSP we encourage you to visit our article\n",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/tutorials/exploring-the-european-road-network"},"Exploring the European road network"),"\nwhich was specially crafted to showcase our graph algorithms."))}u.isMDXComponent=!0},79387:function(e,t,n){t.Z=n.p+"assets/images/graph-d4e892234a5b20494c646218176a0f9e.png"}}]);