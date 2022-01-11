"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7122],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(n),g=r,c=u["".concat(m,".").concat(g)]||u[g]||s[g]||l;return n?a.createElement(c,o(o({ref:e},d),{},{components:n})):a.createElement(c,o({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74705:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(85030),i=["components"],m={id:"overview",title:"MAGE - Memgraph Advanced Graph Extensions \ud83d\udd2e",sidebar_label:"Getting started",slug:"/"},p=void 0,d={unversionedId:"overview",id:"overview",title:"MAGE - Memgraph Advanced Graph Extensions \ud83d\udd2e",description:"MAGE, also known as Memgraph Advanced Graph Extensions, is an",source:"@site/mage/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/mage/",editUrl:"https://github.com/memgraph/docs/tree/master/mage/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"MAGE - Memgraph Advanced Graph Extensions \ud83d\udd2e",sidebar_label:"Getting started",slug:"/"},sidebar:"mage",next:{title:"Installation overview",permalink:"/docs/mage/installation"}},s=[{value:"MAGE query modules",id:"mage-query-modules",children:[],level:2},{value:"Memgraph compatibility",id:"memgraph-compatibility",children:[],level:2},{value:"Spellbook \ud83d\udcd6 - Currently available modules",id:"spellbook----currently-available-modules",children:[],level:2}],u={toc:s};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MAGE"),", also known as ",(0,l.kt)("strong",{parentName:"p"},"Memgraph Advanced Graph Extensions"),", is an\nopen-source repository that contains ",(0,l.kt)("strong",{parentName:"p"},"graph algorithms")," and ",(0,l.kt)("strong",{parentName:"p"},"modules")," in the\nform of query modules written by the team behind Memgraph and its users. You can\nfind and contribute implementations of various algorithms in multiple\nprogramming languages, all runnable inside Memgraph. This project aims to give\neveryone the tools they need to tackle the most interesting and challenging\n",(0,l.kt)("strong",{parentName:"p"},"graph analytics")," problems."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"GitHub repository")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can find the official GitHub repository here: ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mage"},"MAGE on\nGitHub")),"."))),(0,l.kt)("h2",{id:"mage-query-modules"},"MAGE query modules"),(0,l.kt)("p",null,"Memgraph introduces the concept of ",(0,l.kt)("strong",{parentName:"p"},"query modules"),", user-defined procedures\nthat extend the ",(0,l.kt)("strong",{parentName:"p"},"Cypher query language"),". These procedures are grouped into\nmodules that can be loaded into Memgraph. You can find more information on query\nmodules in the official ",(0,l.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/database-functionalities/query-modules/built-in-query-modules"},"Memgraph\ndocumentation"),"."),(0,l.kt)("h2",{id:"memgraph-compatibility"},"Memgraph compatibility"),(0,l.kt)("p",null,"With changes in Memgraph API, MAGE started to track version numbers. Check out\nthe table below which will reveal MAGE compatibility with Memgraph versions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"MAGE version"),(0,l.kt)("th",{parentName:"tr",align:null},"Memgraph version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">= 1.0"),(0,l.kt)("td",{parentName:"tr",align:null},">= 2.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"^0"),(0,l.kt)("td",{parentName:"tr",align:null},">= 1.4.0 <= 1.6.1")))),(0,l.kt)("h2",{id:"spellbook----currently-available-modules"},"Spellbook \ud83d\udcd6 - Currently available modules"),(0,l.kt)(o.ZP,{mdxType:"MageSpells"}))}g.isMDXComponent=!0},85030:function(t,e,n){n.d(e,{ZP:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={toc:[]};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Algorithms"),(0,l.kt)("th",{parentName:"tr",align:null},"Lang"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/betweenness-centrality"},"betweenness_centrality")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"The betweenness centrality of a node is defined as the sum of the of all-pairs shortest paths that pass through the node divided by the number of all-pairs shortest paths in the graph. The algorithm has O(nm) time complexity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/biconnected-components"},"biconnected_components")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for calculating maximal biconnected subgraph. A biconnected subgraph is a subgraph with a property that if any vertex were to be removed, the graph will remain connected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/bipartite-matching"},"bipartite_matching")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for calculating maximum bipartite matching, where matching is a set of nodes chosen in such a way that no two edges share an endpoint.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/bridges"},"bridges")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A bridge is an edge, which when deleted, increases the number of connected components. The goal of this algorithm is to detect edges that are bridges in a graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/community-detection-online"},"community_detection_online")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A dynamic community detection algorithm suitable for large-scale graphs based upon label propagation. Runs in O(m) time and has O(mn) space complexity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/cycles"},"cycles")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for detecting cycles on graphs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/distance-calculator"},"distance_calculator")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Module for finding the geographical distance between two points defined with 'lng' and 'lat' coordinates.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/graph-analyzer"},"graph_analyzer")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"This Graph Analyzer query module offers insights about the stored graph or a subgraph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/graph-coloring"},"graph_coloring")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for assigning labels to the graph elements subject to certain constraints. In this form, it is a way of coloring the graph vertices such that no two adjacent vertices are of the same color.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/json-util"},"json_util")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module for loading JSON from a local file or remote address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node2vec"},"node2vec")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for calculating node embeddings on static graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node2vec-online"},"node2vec_online")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for calculating node embeddings as new edges arrive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node-similarity"},"node_similarity")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that contains similarity measures for calculating the similarity between two nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/nxalg"},"nxalg")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that provides NetworkX integration with Memgraph and implements many NetworkX algorithms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/pagerank"},"pagerank")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm that yields the influence measurement based on the recursive information about the connected nodes influence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/pagerank-online"},"pagerank_online")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A dynamic algorithm made for calculating PageRank in a graph streaming scenario.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rust_example"),(0,l.kt)("td",{parentName:"tr",align:null},"Rust"),(0,l.kt)("td",{parentName:"tr",align:null},"Example of a basic module with input parameters forwarding, made in Rust.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/set-cover"},"set_cover")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"The algorithm for finding minimum cost subcollection of sets that covers all elements of a universe.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/tsp"},"tsp")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for finding the shortest possible route that visits each vertex exactly once.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/union-find"},"union_find")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module with an algorithm that enables the user to check whether the given nodes belong to the same connected component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/uuid-generator"},"uuid_generator")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that generates a new universally unique identifier (UUID).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/vrp"},"vrp")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for finding the shortest route possible between the central depot and places to be visited. The algorithm can be solved with multiple vehicles that represent a visiting fleet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/weakly-connected-components"},"weakly_connected_components")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that finds weakly connected components in a graph.")))))}m.isMDXComponent=!0}}]);