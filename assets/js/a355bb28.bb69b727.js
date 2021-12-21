"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67297],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),g=i,h=m["".concat(s,".").concat(g)]||m[g]||p[g]||o;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72134:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],l={id:"node2vec-online-algorithm",title:"Dynamic node2vec",sidebar_label:"Dynamic node2vec"},s=void 0,c={unversionedId:"algorithms/dynamic-graph-analytics/node2vec-online-algorithm",id:"algorithms/dynamic-graph-analytics/node2vec-online-algorithm",title:"Dynamic node2vec",description:"Description",source:"@site/mage/algorithms/dynamic-graph-analytics/node2vec-online-algorithm.md",sourceDirName:"algorithms/dynamic-graph-analytics",slug:"/algorithms/dynamic-graph-analytics/node2vec-online-algorithm",permalink:"/docs/mage/algorithms/dynamic-graph-analytics/node2vec-online-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/dynamic-graph-analytics/node2vec-online-algorithm.md",tags:[],version:"current",frontMatter:{id:"node2vec-online-algorithm",title:"Dynamic node2vec",sidebar_label:"Dynamic node2vec"},sidebar:"mage",previous:{title:"Union Find",permalink:"/docs/mage/algorithms/traditional-graph-analytics/union-find-algorithm"},next:{title:"Dynamic PageRank",permalink:"/docs/mage/algorithms/dynamic-graph-analytics/pagerank-online-algorithm"}},d=[{value:"Description",id:"description",children:[{value:"Why Dynamic node2vec",id:"why-dynamic-node2vec",children:[],level:3}],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3},{value:"Blog posts",id:"blog-posts",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Dynamic Node2Vec")," is a ",(0,o.kt)("strong",{parentName:"p"},"random walk based")," method that creates embeddings\nfor every new node added to the graph. For every new edge, there is a\nrecalculation of probabilities (weights) that are used in walk sampling. A goal\nof the method is to enforce that the embedding of node ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," is similar to the\nembedding of nodes with the ability to reach node ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," across edges that appeared\none before the other."),(0,o.kt)("img",{src:"https://i.imgur.com/J6womJf.png",alt:"drawing"}),(0,o.kt)("h3",{id:"why-dynamic-node2vec"},"Why Dynamic node2vec"),(0,o.kt)("p",null,"Many methods, like ",(0,o.kt)("a",{parentName:"p",href:"https://snap.stanford.edu/node2vec/"},(0,o.kt)("strong",{parentName:"a"},"node2vec")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1403.6652"},(0,o.kt)("strong",{parentName:"a"},"DeepWalk")),", focus on computing the\nembedding for static graphs which has its qualities but also some big drawbacks."),(0,o.kt)("p",null,"Networks in ",(0,o.kt)("strong",{parentName:"p"},"practical applications")," are ",(0,o.kt)("strong",{parentName:"p"},"dynamic")," and evolve constantly\nover time. For example, new links are formed (when people make new friends on\nsocial networks) and old links can disappear. Moreover, new nodes can be\nintroduced into the graph (e.g., users can join the social network) and create\nnew links to existing nodes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Naively applying one of the static")," embedding algorithms leads to\nunsatisfactory performance due to the following challenges:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Stability"),": the embedding of graphs at consecutive time steps can differ\nsubstantially even though the graphs do not change much."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Growing Graphs"),": All existing approaches assume a fixed number of nodes in\nlearning graph embeddings and thus cannot handle growing graphs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scalability"),": Learning embeddings independently for each snapshot leads to\nrunning time linear in the number of snapshots. As learning a single embedding\nis computationally expensive, the naive approach does not scale to dynamic\nnetworks with many snapshots")),(0,o.kt)("p",null,"Dynamic Node2Vec is created by ",(0,o.kt)("a",{parentName:"p",href:"https://ferencberes.github.io/"},"F.Beres et al"),'\nin the "',(0,o.kt)("a",{parentName:"p",href:"https://appliednetsci.springeropen.com/articles/10.1007/s41109-019-0169-5"},"Node embeddings in dynamic\ngraphs"),'".'),(0,o.kt)("h2",{id:"materials"},"Materials"),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node2vec_online.py"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node2Vec_Online-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Node2Vec\nOnline"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/query-modules/python/node2vec-online"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node2Vec_Online-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white",alt:"Node2Vec\nOnline"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Dynamic Node2Vec")," is implemented as part of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,o.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to check it out in\nthe link above. \u261d\ufe0f"),(0,o.kt)("h3",{id:"blog-posts"},"Blog posts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/online-node2vec-recommendation-system"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Recommendation_System_Using_Online_Node2Vec-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white",alt:"Dynamic\nNode2Vec"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Our little magician Memgraph MAGE has recently received one more spell - the\nOnline Node2Vec algorithm. Since he is still too scared to use it, you, as a\nbrave spirit, will step up and use it on a real challenge to show MAGE how\nit\u2019s done. This challenge includes building an Online Recommendation System\nusing k-means clustering and the newborn spell - Online Node2Vec algorithm."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/dynamic-node2vec-on-streaming-data"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Understanding_how_Dynamic_Node2Vec_Works_on_Streaming_Data-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white",alt:"Understanding how Dynamic Node2Vec Works on Streaming\nData"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Many methods, like node2vec and deepwalk, focus on computing the embedding for\nstatic graphs which is great but also has a big drawback. Networks in\npractical applications are dynamic and evolve constantly over time. New links\nare formed, and old ones can disappear. Moreover, new nodes can be introduced\ninto the graph (e.g., users can join the social network) and create new links\ntoward existing nodes.")),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/applications/social-media-application"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge",alt:"Social\nnetworks"}))),(0,o.kt)("p",null,"Dynamic Node2Vec can be used to find communities in social networks like\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com"},"Twitter"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.facebook.com/"},"Facebook"),", and so\non. In order to find communities, we first need to apply dynamic node2vec and\nthen use an unsupervised machine learning algorithm, i.e.\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/K-means_clustering"},"k-means")," which will find us\nclusters among node embeddings."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Link_prediction-Aplication-8A477F?style=for-the-badge",alt:"Link\nprediction"}))),(0,o.kt)("p",null,"We can use dynamic node2vec in the case of link prediction. To do so, after\nobtaining node embeddings we can predict new links depending on the similarity\nof the node embeddings."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node_classification-Aplication-8A477F?style=for-the-badge",alt:"Node\nclassification"}))),(0,o.kt)("p",null,"Furthermore, we can use dynamic node2vec for the node classification task. Node\nfeatures (embeddings) are input to a one-vs-rest logistic regression. We train\nour model only on the subset of labels and test it on the rest of them. Our\nmodel here is a one-vs-rest logistic regression. You can check out the following\n",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1705.02801.pdf"},"paper")," for more references."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Graph_classification-Aplication-8A477F?style=for-the-badge",alt:"Graph\nclassification"}))),(0,o.kt)("p",null,"For graph classification, we can create a virtual node that is connected to all\nthe nodes in the graph. After running dynamic node2vec, the embedding of the\nvirtual node will represent an embedding of the entire graph which we can then\ncompare to embeddings of other graphs."))}m.isMDXComponent=!0}}]);