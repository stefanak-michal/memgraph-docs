"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74192],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11387:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"node-classification-algorithm",title:"Node Classification",sidebar_label:"Node Classification"},l=void 0,c={unversionedId:"algorithms/machine-learning-graph-analytics/node-classification-algorithm",id:"algorithms/machine-learning-graph-analytics/node-classification-algorithm",title:"Node Classification",description:"Description",source:"@site/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm.md",sourceDirName:"algorithms/machine-learning-graph-analytics",slug:"/algorithms/machine-learning-graph-analytics/node-classification-algorithm",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm.md",tags:[],version:"current",frontMatter:{id:"node-classification-algorithm",title:"Node Classification",sidebar_label:"Node Classification"},sidebar:"mage",previous:{title:"Link Prediction",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm"},next:{title:"Node2Vec",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/node2vec-algorithm"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Materials",id:"materials",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Use cases",id:"use-cases",level:2}],d={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Prediction can be done at the node level. The basis of such prediction systems are features extracted from graph entities."),(0,i.kt)("p",null,"Extracting a feature can be a complicated problem, and it can be based on different graph attributes \u2014 node properties, node adjacency, or the structure of the neighborhood."),(0,i.kt)("p",null,"Traditional methods of extracting knowledge from nodes include measures of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Centrality"},"centrality"),", importance, or feature structure such as ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graphlets"},"graphlets"),"."),(0,i.kt)("p",null,"Somewhat more advanced methods are extracting the ",(0,i.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/graph-embeddings-the-summary-cc6075aba007"},"embedding")," of individual nodes, and then a prediction algorithm that takes knowledge from the embeddings themselves. The most popular such tool is ",(0,i.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/node2vec-algorithm"},"Node2Vec"),"."),(0,i.kt)("p",null,"However, these methods are only a few. Today's graph machine learning is being developed and among them, we distinguish many different models such as:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://snap.stanford.edu/graphsage/"},"GraphSAGE")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/deepwalk-its-behavior-and-how-to-implement-it-b5aac0290a15"},"DeepWalk")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://towardsdatascience.com/understanding-graph-convolutional-networks-for-node-classification-a2bfdb7aba7b"},"Graph convolutional networks")," (GCN)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1710.10903"},"Graph Attention Network")," (GAT)")),(0,i.kt)("p",null,"and many, many more. This task has become quite popular and is used in many industries where knowledge is stored in the form of a graph structure."),(0,i.kt)("img",{src:"https://i.imgur.com/hbWDz7q.png",alt:"drawing"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Previously labeled nodes can be used to determine the class of unclassified ones")),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white",alt:"Node Classification"})),(0,i.kt)("p",null,"Unfortunately, ",(0,i.kt)("strong",{parentName:"p"},"Node Classification")," is yet not implemented within the project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,i.kt)("strong",{parentName:"a"},"MAGE")),". Be sure to raise the issue on the GitHub repo and ping us to speed up the development. \u261d\ufe0f"),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/finance"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge",alt:"Finance"}))),(0,i.kt)("p",null,"Classifying nodes based on previously labeled data can help investigators to find out fraudsters in finance systems. Since fraudsters can often act very quickly with their tricks, applying a streaming-based node classification can help up building a real-time fraud detection system."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/computer-security"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Computer_Security-Application-8A477F?style=for-the-badge",alt:"Computer Security"}))),(0,i.kt)("p",null,"Fraudsters usually behave differently than common users. This way a system can be observed and once an unusual behavior is spotted it can immediately be revealed. This can help build a bulletproof computer security system."))}u.isMDXComponent=!0}}]);