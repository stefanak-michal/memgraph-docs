"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17122],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,h=p["".concat(m,".").concat(g)]||p[g]||d[g]||l;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},74705:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return p}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(85030),i=["components"],m={id:"overview",title:"MAGE - Memgraph Advanced Graph Extensions \ud83d\udd2e",sidebar_label:"Getting started",slug:"/"},u=void 0,s={unversionedId:"overview",id:"overview",title:"MAGE - Memgraph Advanced Graph Extensions \ud83d\udd2e",description:"Memgraph Advanced Graph Extensions, MAGE to friends, is an open-source",source:"@site/mage/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/mage/",editUrl:"https://github.com/memgraph/docs/tree/master/mage/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"MAGE - Memgraph Advanced Graph Extensions \ud83d\udd2e",sidebar_label:"Getting started",slug:"/"},sidebar:"mage",next:{title:"Installation overview",permalink:"/docs/mage/installation"}},d={},p=[{value:"Quick start",id:"quick-start",level:2},{value:"1. Install MAGE",id:"1-install-mage",level:3},{value:"2. Load query modules",id:"2-load-query-modules",level:3},{value:"3. Call procedures",id:"3-call-procedures",level:3},{value:"What to do next?",id:"what-to-do-next",level:2},{value:"Browse the spellbook of query modules",id:"browse-the-spellbook-of-query-modules",level:3},{value:"Create query modules",id:"create-query-modules",level:3},{value:"Learn about algorithms and their usage",id:"learn-about-algorithms-and-their-usage",level:3},{value:"Contribute",id:"contribute",level:3},{value:"Browse through the Changelog",id:"browse-through-the-changelog",level:3}],g={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Memgraph Advanced Graph Extensions"),", ",(0,l.kt)("strong",{parentName:"p"},"MAGE")," to friends, is an open-source\nrepository that contains ",(0,l.kt)("strong",{parentName:"p"},"graph algorithms")," and ",(0,l.kt)("strong",{parentName:"p"},"modules")," written by the\nteam behind Memgraph and its users in the form of ",(0,l.kt)("strong",{parentName:"p"},"query modules"),". The project\naims to give everyone the tools they need to tackle the most interesting and\nchallenging ",(0,l.kt)("strong",{parentName:"p"},"graph analytics")," problems."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/database-functionalities/query-modules/built-in-query-modules"},(0,l.kt)("strong",{parentName:"a"},"Query\nmodule")),"\nis a concept introduced by Memgraph and it refers to user-defined procedures,\ngrouped into modules that extend the ",(0,l.kt)("strong",{parentName:"p"},"Cypher query language"),". Procedures are\nimplementations of various algorithms in multiple programming languages and they\nare all runnable inside Memgraph."),(0,l.kt)("h2",{id:"quick-start"},"Quick start"),(0,l.kt)("p",null,"Start utilizing the power of MAGE with these simple steps."),(0,l.kt)("h3",{id:"1-install-mage"},"1. Install MAGE"),(0,l.kt)("p",null,"Install MAGE using a prepared image from the ",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/installation/docker-hub"},"Docker Hub")," or by ",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/installation/docker-build"},"building a Docker\nimage")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},"official MAGE GitHub\nrepository"),". On Linux, you can also ",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/installation/source"},"install\nMAGE from source")," but be aware you will also need to install additional\ndependencies."),(0,l.kt)("h3",{id:"2-load-query-modules"},"2. Load query modules"),(0,l.kt)("p",null,"To use certain procedures, first, you need to ",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/usage/loading-modules"},"load the query modules")," to the\nappropriate directory. "),(0,l.kt)("h3",{id:"3-call-procedures"},"3. Call procedures"),(0,l.kt)("p",null,"You are ready to ",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/usage/calling-procedures"},"call procedures")," within queries and tackle that graph analytics\nproblem that's been keeping you awake. "),(0,l.kt)("h2",{id:"what-to-do-next"},"What to do next?"),(0,l.kt)("h3",{id:"browse-the-spellbook-of-query-modules"},"Browse the spellbook of query modules"),(0,l.kt)("p",null,"The spellbook has been written to help you utilize all the ",(0,l.kt)("a",{parentName:"p",href:"/mage/query-modules/available-queries"},"currently\navailable query modules"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Spellbook")," \ud83d\udcd6"),(0,l.kt)(o.ZP,{mdxType:"MageSpells"})),(0,l.kt)("h3",{id:"create-query-modules"},"Create query modules"),(0,l.kt)("p",null,"If you need some assistance in creating and running your own Python and C++\nquery modules ",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/how-to-guides/create-a-new-module-cpp"},"How-to guides")," are here for you. "),(0,l.kt)("h3",{id:"learn-about-algorithms-and-their-usage"},"Learn about algorithms and their usage"),(0,l.kt)("p",null,"There are so many\n",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm"},"algorithms"),"\nto benefit from. Browse through them and see how they can be applied in ",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/bioinformatics"},"use\ncases")," from various fields, such as bioinformatics or\ntransportation. "),(0,l.kt)("h3",{id:"contribute"},"Contribute"),(0,l.kt)("p",null,"Make MAGE even better by ",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/contributing"},"contributing")," your own algorithm implementations and ideas or reporting pesky bugs. "),(0,l.kt)("h3",{id:"browse-through-the-changelog"},"Browse through the Changelog"),(0,l.kt)("p",null,"Want to know what's new in MAGE? Take a look at ",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/changelog"},"Changelog"),"\nto see a list of new features."))}h.isMDXComponent=!0},85030:function(e,t,a){a.d(t,{ZP:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={toc:[]};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Algorithms"),(0,l.kt)("th",{parentName:"tr",align:null},"Lang"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/betweenness-centrality"},"betweenness_centrality")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"The betweenness centrality of a node is defined as the sum of the of all-pairs shortest paths that pass through the node divided by the number of all-pairs shortest paths in the graph. The algorithm has O(nm) time complexity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/biconnected-components"},"biconnected_components")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for calculating maximal biconnected subgraph. A biconnected subgraph is a subgraph with a property that if any vertex were to be removed, the graph will remain connected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/bipartite-matching"},"bipartite_matching")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for calculating maximum bipartite matching, where matching is a set of nodes chosen in such a way that no two edges share an endpoint.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/bridges"},"bridges")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A bridge is an edge, which when deleted, increases the number of connected components. The goal of this algorithm is to detect edges that are bridges in a graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/community-detection-online"},"community_detection_online")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A dynamic community detection algorithm suitable for large-scale graphs based upon label propagation. Runs in O(m) time and has O(mn) space complexity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/cycles"},"cycles")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for detecting cycles on graphs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/distance-calculator"},"distance_calculator")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Module for finding the geographical distance between two points defined with 'lng' and 'lat' coordinates.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/graph-analyzer"},"graph_analyzer")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"This Graph Analyzer query module offers insights about the stored graph or a subgraph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/graph-coloring"},"graph_coloring")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for assigning labels to the graph elements subject to certain constraints. In this form, it is a way of coloring the graph vertices such that no two adjacent vertices are of the same color.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/json-util"},"json_util")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module for loading JSON from a local file or remote address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/max-flow"},"max_flow")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for finding a flow through a graph such that it is the maximum possible flow.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node2vec"},"node2vec")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for calculating node embeddings on static graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node2vec-online"},"node2vec_online")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for calculating node embeddings as new edges arrive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node-similarity"},"node_similarity")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that contains similarity measures for calculating the similarity between two nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/nxalg"},"nxalg")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that provides NetworkX integration with Memgraph and implements many NetworkX algorithms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/pagerank"},"pagerank")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm that yields the influence measurement based on the recursive information about the connected nodes influence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/pagerank-online"},"pagerank_online")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A dynamic algorithm made for calculating PageRank in a graph streaming scenario.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rust_example"),(0,l.kt)("td",{parentName:"tr",align:null},"Rust"),(0,l.kt)("td",{parentName:"tr",align:null},"Example of a basic module with input parameters forwarding, made in Rust.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/set-cover"},"set_cover")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"The algorithm for finding minimum cost subcollection of sets that covers all elements of a universe.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/tsp"},"tsp")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for finding the shortest possible route that visits each vertex exactly once.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/union-find"},"union_find")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module with an algorithm that enables the user to check whether the given nodes belong to the same connected component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/uuid-generator"},"uuid_generator")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that generates a new universally unique identifier (UUID).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/vrp"},"vrp")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for finding the shortest route possible between the central depot and places to be visited. The algorithm can be solved with multiple vehicles that represent a visiting fleet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/weakly-connected-components"},"weakly_connected_components")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that finds weakly connected components in a graph.")))))}m.isMDXComponent=!0}}]);