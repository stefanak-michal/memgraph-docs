"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[804],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=o,g=h["".concat(l,".").concat(m)]||h[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54242:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"node2vec-algorithm",title:"Node2Vec",sidebar_label:"Node2Vec"},l=void 0,c={unversionedId:"algorithms/machine-learning-graph-analytics/node2vec-algorithm",id:"algorithms/machine-learning-graph-analytics/node2vec-algorithm",title:"Node2Vec",description:"Description",source:"@site/mage/algorithms/machine-learning-graph-analytics/node2vec.md",sourceDirName:"algorithms/machine-learning-graph-analytics",slug:"/algorithms/machine-learning-graph-analytics/node2vec-algorithm",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/node2vec-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/machine-learning-graph-analytics/node2vec.md",tags:[],version:"current",frontMatter:{id:"node2vec-algorithm",title:"Node2Vec",sidebar_label:"Node2Vec"},sidebar:"mage",previous:{title:"Node Classification",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm"},next:{title:"Graph Clustering",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/graph-clustering-algorithm"}},p=[{value:"Description",id:"description",children:[],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3},{value:"Blog posts",id:"blog-posts",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/node-embeddings-for-beginners-554ab1625d98"},"Embedding")," methods serve to map graph entities into ",(0,r.kt)("strong",{parentName:"p"},"n-dimensional vectors"),". The goal of such an approach is to map closely related entities to vectors with a ",(0,r.kt)("strong",{parentName:"p"},"high degree of similarity")," according to the chosen method of similarity estimation."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://snap.stanford.edu/node2vec/"},"Node2Vec")," stands out as the most popular method. It is based on random walks. The point of this method is mapping nodes that are most likely to be within a common random walk to the same place in n-dimensional space. The method was developed by ",(0,r.kt)("a",{parentName:"p",href:"https://aditya-grover.github.io/"},"Aditya Grover")," and ",(0,r.kt)("a",{parentName:"p",href:"https://cs.stanford.edu/people/jure/"},"Jure Leskovec"),', professors at Stanford University in their paper "',(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1607.00653"},"node2vec: Scalable Feature Learning for Networks"),'"'),(0,r.kt)("p",null,"The optimization of the mapped vectors themselves is done by a well-known machine learning method such as gradient descent. In the end, the result obtained can be used for node classification or link prediction, both truly popular."),(0,r.kt)("img",{src:"https://i.imgur.com/HXHXLwZ.png",alt:"drawing"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Illustration of how graph embeddings can be mapped to 2D space. Boundaries between classes are more visible than in a graph.")),(0,r.kt)("h2",{id:"materials"},"Materials"),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node2vec.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node2Vec-Implementation-FB6E00?logo=github&style=for-the-badge",alt:"Node2Vec"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/query-modules/python/node2vec"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node2Vec-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white",alt:"Node2Vec"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Node2Vec")," is implemented within project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,r.kt)("strong",{parentName:"a"},"MAGE")),". Be sure to check it out in the link above. \u261d\ufe0f"),(0,r.kt)("h3",{id:"blog-posts"},"Blog posts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/link-prediction-with-node2vec-in-physics-collaboration-network"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Link_prediction_with_Node2Vec_in_Physics_Collaboration_Network-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white",alt:"Link prediction with Node2Vec in Physics Collaboration\nNetwork"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As already mentioned, link prediction refers to the task of predicting missing\nlinks or links that are likely to occur in the future. In this tutorial, we\nwill make use the of MAGE spell called node2vec. Also, we will use Memgraph to\nstore data, and gqlalchemy to connect from a Python application. The dataset\nwill be similar to the one used in this paper: Graph Embedding Techniques,\nApplications, and Performance: A Survey.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/how-node2vec-works"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/How_Node2Vec_Works_%E2%80%93_A_Random_Walk--Based_Node_Embedding_Method-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white",alt:"How Node2Vec Works \u2013 A Random Walk-Based Node Embedding\nMethod"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For node2vec, the paper authors came up with the brilliant idea: We define a\nflexible notion of a node\u2019s network neighborhood and design a biased random\nwalk procedure, which efficiently explores diverse neighborhoods.")),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,"Node2Vec is such a versatile method that it is easily integrated into various solutions. The biggest bonus of having such a method is the ability to use it in downstream prediction/classification tasks."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/retail"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge",alt:"Retail"}))),(0,r.kt)("p",null,"In the network of users and products, node2vec can be used to extract the deeply hidden insight about customers' shopping behavior. This way it can enable targeted advertisements and other recommendations to the user."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/knowledge-graph"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Knowledge_graphs-Application-8A477F?style=for-the-badge",alt:"Knowledge graph"}))),(0,r.kt)("p",null,"Knowledge graphs can be both complex and extremely large. Exploring and splitting the graph into logical units is a difficult task. Therefore, using node2vec and mapping the vectors, this way it would enable easier domain exploration since each knowledge node would be mapped to the same place in vector-space."))}h.isMDXComponent=!0}}]);