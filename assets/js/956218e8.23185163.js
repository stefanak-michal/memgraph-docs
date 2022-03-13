"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91964],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return d}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=m(i),d=n,u=h["".concat(l,".").concat(d)]||h[d]||c[d]||r;return i?a.createElement(u,o(o({ref:t},p),{},{components:i})):a.createElement(u,o({ref:t},p))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var m=2;m<r;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},39858:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var a=i(87462),n=i(63366),r=(i(67294),i(3905)),o=["components"],s={id:"node-similarity-algorithm",title:"Node Similarity",sidebar_label:"Node Similarity"},l=void 0,m={unversionedId:"algorithms/traditional-graph-analytics/node-similarity-algorithm",id:"algorithms/traditional-graph-analytics/node-similarity-algorithm",title:"Node Similarity",description:"Description",source:"@site/mage/algorithms/traditional-graph-analytics/node-similarity-algorithm.md",sourceDirName:"algorithms/traditional-graph-analytics",slug:"/algorithms/traditional-graph-analytics/node-similarity-algorithm",permalink:"/docs/mage/algorithms/traditional-graph-analytics/node-similarity-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/traditional-graph-analytics/node-similarity-algorithm.md",tags:[],version:"current",frontMatter:{id:"node-similarity-algorithm",title:"Node Similarity",sidebar_label:"Node Similarity"},sidebar:"mage",previous:{title:"Maximum Flow",permalink:"/docs/mage/algorithms/traditional-graph-analytics/maximum-flow-algorithm"},next:{title:"PageRank",permalink:"/docs/mage/algorithms/traditional-graph-analytics/pagerank-algorithm"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Use cases",id:"use-cases",level:2}],h={toc:c};function d(e){var t=e.components,i=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The notion of\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Similarity_(network_science)"},"similarity")," can be\ndescribed in several different ways, but within graph theory, it encompasses\nseveral generally accepted definitions. The similarity of graph nodes is based\non a comparison of adjacent nodes or the neighborhood structure. These are\ntraditional definitions that take into account only the layout of the graph. If\nwe extend the definition of a node with additional properties, then it is\npossible to define comparisons based on these properties as well, but this is\nnot the topic of the methods mentioned here."),(0,r.kt)("p",null,"The result of this type of algorithm is always a pair of nodes and an assigned\nvalue indicating the match measure between them. We will mention only the most\npopular measures based on neighborhood nodes with their brief explanations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cosine_similarity"},(0,r.kt)("strong",{parentName:"a"},"Cosine similarity"))," - the\ncosine of the angle by which the product is defined as the cardinality of the\ncommon neighbors of the two nodes, and the denominator is the root of the\nproduct of the node degrees"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Jaccard_index"},(0,r.kt)("strong",{parentName:"a"},"Jaccard similarity"))," - a\nfrequently used measure in different models of computer science includes the\nratio of the number of common neighbors through the total"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/blog/similarity-in-graphs-jaccard-versus-the-overlap-coefficient-2/"},(0,r.kt)("strong",{parentName:"a"},"Overlap\nsimilarity")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"defined as the ratio of the cross-section of a neighborhood to the less than\nthe number of neighbors of two nodes. Overlap similarity works best in the\ncase of a small number of adjacent nodes")))),(0,r.kt)("img",{src:"https://i.imgur.com/DKggKtB.png",alt:"drawing",width:"600"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example of a graph where nodes share a neighborhood. This information is used\nto calculate similarity.")),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node_similarity.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node_Similarity-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Node\nSimilarity"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/query-modules/python/node-similarity"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node_Similarity-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white",alt:"Node\nSimilarity"}))),(0,r.kt)("p",null,"Node similarity is implemented as part of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,r.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to check it out in\nthe link above. \u261d\ufe0f"),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,"The similarity of the nodes can be used in a diverse range of use cases. The\nreason for this is easy adaptability but also the natural pattern recognition\napplication. Nodes with a high degree of similarity to those targeted or labeled\nare more likely to have attributes equal to them."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/finance"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge",alt:"Finance"}))),(0,r.kt)("p",null,"One such example is the financial industry where scams happen on a daily basis.\nThe pattern of behavior is often a common item of various fraudsters. Also,\nfraudsters are mostly tied to other fraudsters, so a ",(0,r.kt)("strong",{parentName:"p"},"node similarity")," measure\ncan help detect suspects similar to previously detected ones."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/knowledge-graph"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge",alt:"Knowledge\ngraph"}))),(0,r.kt)("p",null,"Knowledge graph entities are most often structured in a way that similar domain\nentities are strongly connected together. This way we can estimate the strength\nof a relation between important entities in a graph."))}d.isMDXComponent=!0}}]);