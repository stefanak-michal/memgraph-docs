"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7364],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,g=m["".concat(l,".").concat(u)]||m[u]||h[u]||i;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96331:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"gnn-algorithm",title:"Graph Neural Networks (GNN)",sidebar_label:"Graph Neural Networks (GNN)"},l=void 0,p={unversionedId:"algorithms/machine-learning-graph-analytics/gnn-algorithm",id:"algorithms/machine-learning-graph-analytics/gnn-algorithm",title:"Graph Neural Networks (GNN)",description:"Description",source:"@site/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm.md",sourceDirName:"algorithms/machine-learning-graph-analytics",slug:"/algorithms/machine-learning-graph-analytics/gnn-algorithm",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm.md",tags:[],version:"current",frontMatter:{id:"gnn-algorithm",title:"Graph Neural Networks (GNN)",sidebar_label:"Graph Neural Networks (GNN)"},sidebar:"mage",previous:{title:"Dynamic Community Detection",permalink:"/docs/mage/algorithms/dynamic-graph-analytics/community-detection-online-algorithm"},next:{title:"Graph Classification",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],h={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Machine_learning"},"Machine learning")," methods are based on data. Because of everyday encounters with data that are audio, visual, or textual such as images, video, text, and speech - the machine learning methods that study such structures are making tremendous progress today."),(0,i.kt)("p",null,"Connection-based data can be displayed as graphs. Such structures are much ",(0,i.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/machine-learning-on-graphs-part-1-9ec3b0bd6abc"},"more complex than images")," and text due to multiple levels of connectivity in the structure itself which is completely irregular and unpredictable. With the development of neural networks organized in the structure of graphs, the field of ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.03675"},"graph machine learning")," is improving."),(0,i.kt)("p",null,"Applying the same principle used, for example, in images (convolutions) to graphs would be a mistake. Such principles are based on grid structures, while on graphs of arbitrary sizes, complex topologies, and random connections applying the same strategy would result in a disaster."),(0,i.kt)("p",null,"All convolutional network graph methods are based on ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Belief_propagation"},"message propagation"),". Such messages carry information through a network composed of nodes and edges of the graph, while each node entity carries its computational unit. The task of each node is to process the information and pass it on to the neighbors."),(0,i.kt)("p",null,"Various possibilities have been developed that enable machine learning with graph neural networks. Starting with the graph of convolutional networks published in \u201c",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1312.6203"},"Spectral Networks and Deep Locally Connected Networks on Graphs"),"\u201d (Bruna et al, 2014)."),(0,i.kt)("p",null,"Today's most popular models are ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1706.02216"},"GraphSAGE"),", ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1609.02907"},"Graph Convolutional Networks (GCN)"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1710.10903"},"Graph Attention Networks (GAT)")," and ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2006.10637"},"Temporal Graph Networks (TGN)")," - important for dynamic networks."),(0,i.kt)("img",{src:"https://i.imgur.com/nUI6x82.png",alt:"drawing"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The above network shows the computation graph of message propagation in GNNs.")),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white",alt:"Graph Neural Networks"})),(0,i.kt)("p",null,"Unfortunately, ",(0,i.kt)("strong",{parentName:"p"},"GNNs")," are yet not implemented within the project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,i.kt)("strong",{parentName:"a"},"MAGE")),". Be sure to raise the issue on the GitHub repo and ping us to speed up the development. \u261d\ufe0f"),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/bioinformatics"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Bioinformatics-Application-8A477F?style=for-the-badge",alt:"Bioinformatics"}))),(0,i.kt)("p",null,"Having only a structure model of one element in research can prevent researchers to spent many hours investigating and observing the properties of these structures. Based on a graph structure, properties such as whether is something is toxic or not can be determined just from the model."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/social-media"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Social_Networks-Application-8A477F?style=for-the-badge",alt:"Social Networks"}))),(0,i.kt)("p",null,"One of the most obvious tasks of ",(0,i.kt)("strong",{parentName:"p"},"Graph Neural Networks")," is predicting new friendships/followers on social networks, finding communities and hubs. This concept is based on sharing the same entities on the graph, whether they are friends, interests, or things you follow."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/knowledge-graph"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Knowledge_graphs-Application-8A477F?style=for-the-badge",alt:"Knowledge graph"}))),(0,i.kt)("p",null,"Knowledge graphs can be both complex and extremely large. Exploring and splitting the graph into logical units is a difficult task. Therefore, using ",(0,i.kt)("strong",{parentName:"p"},"Graph neural networks")," and mapping the vectors, this way it would enable easier domain exploration since each knowledge node would be mapped to the same place in vector-space."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/finance"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge",alt:"Finance"}))),(0,i.kt)("p",null,"Classifying nodes based on previously labeled data can help investigators to find out fraudsters in finance systems. Since fraudsters can often act very quickly with their tricks, applying a streaming-based node classification can help up building a real-time fraud detection system."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/computer-security"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Computer_Security-Application-8A477F?style=for-the-badge",alt:"Computer Security"}))),(0,i.kt)("p",null,"Fraudsters usually behave differently than common users. This way a system can be observed and once an unusual behavior is spotted it can immediately be revealed. This can help build a bulletproof computer security system."))}m.isMDXComponent=!0}}]);