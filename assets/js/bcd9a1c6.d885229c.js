"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68712],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),m=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),g=a,d=u["".concat(c,".").concat(g)]||u[g]||p[g]||o;return n?i.createElement(d,r(r({ref:t},s),{},{components:n})):i.createElement(d,r({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18493:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"community-detection-online-algorithm",title:"Dynamic Community Detection",sidebar_label:"Dynamic Community Detection"},c=void 0,m={unversionedId:"algorithms/dynamic-graph-analytics/community-detection-online-algorithm",id:"algorithms/dynamic-graph-analytics/community-detection-online-algorithm",title:"Dynamic Community Detection",description:"Description",source:"@site/mage/algorithms/dynamic-graph-analytics/community-detection-online-algorithm.md",sourceDirName:"algorithms/dynamic-graph-analytics",slug:"/algorithms/dynamic-graph-analytics/community-detection-online-algorithm",permalink:"/docs/mage/algorithms/dynamic-graph-analytics/community-detection-online-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/dynamic-graph-analytics/community-detection-online-algorithm.md",tags:[],version:"current",frontMatter:{id:"community-detection-online-algorithm",title:"Dynamic Community Detection",sidebar_label:"Dynamic Community Detection"},sidebar:"mage",previous:{title:"Dynamic PageRank",permalink:"/docs/mage/algorithms/dynamic-graph-analytics/pagerank-online-algorithm"},next:{title:"Graph Neural Networks (GNN)",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm"}},s=[{value:"Description",id:"description",children:[],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3},{value:"Blog posts",id:"blog-posts",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"To address the hidden relations among the nodes in the graph, especially those\nnot connected directly, ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Community_structure"},"community\ndetection")," can provide help.\nThis familiar graph analytics method is being solved in various different ways.\nHowever, demand for scale and speed has increased over the years and therefore\nled to the construction of ",(0,o.kt)("strong",{parentName:"p"},"dynamic community detection")," algorithms.  To\nleverage the needs for scalability and speed, community detection lends itself\nwell to dynamic operations for two reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Complexity: algorithms often have high time complexity that scales with the\nnumber of nodes in the network"),(0,o.kt)("li",{parentName:"ul"},"Locality: community changes tend to be local in scope after partial updates.")),(0,o.kt)("p",null,"Academic research of temporal graphs yielded ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1305.2006"},"LabelRankT: Incremental Community\nDetection in Dynamic Networks via Label\nPropagation")," (Xie et al.)."),(0,o.kt)("img",{src:"https://i.imgur.com/NiQi7NW.png",alt:"drawing"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Illustration of how a dynamic community detection algorithm adapts to local\nchanges")),(0,o.kt)("h2",{id:"materials"},"Materials"),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/community_detection_module/community_detection_online_module.cpp"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Dynamic_Community_Detection-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Dynamic Community\nDetection"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/query-modules/cpp/community-detection-online"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Dynamic_Community_Detection-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white",alt:"Dynamic Community\nDetection"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Dynamic Community Detection")," is implemented as part of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,o.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to check it out in the\nlink above. \u261d\ufe0f"),(0,o.kt)("h3",{id:"blog-posts"},"Blog posts"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/labelrankt-community-detection-in-dynamic-environment"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/LabelRankT_%E2%80%93_Community_Detection_in_Dynamic_Environment-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white",alt:"Dynamic Community\nDetection"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"If you\u2019re doing graph analytics, the chances are that you have run community\ndetection on the dataset. Algorithms take more time to run on large graphs,\nand handling the volume of work that comes along with a large and frequently\nupdated dataset is an engineering problem. It makes sense to wonder if it\u2019s\npossible to leverage the small size of an average update to deliver a\nperformance boost. We at Memgraph recognize your challenges. In this article,\nyou will learn about the merits of online community detection methods and get\nacquainted with the LabelRankT algorithm by Xie et al., now available in MAGE\n1.1."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/monitoring-dynamic-contact-network-with-online-community-detection"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Monitoring_a_Dynamic_Contact_Network_with_Online_Community_Detection-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white",alt:"Monitoring a Dynamic Contact Network with Online Community Detection\n"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As MAGE wants to use his knowledge to help people, in this tutorial you will\nlearn with him how to build a utility that monitors a dynamic contact network.\nThe utility will a) use the detected communities to show rumor-spreading\nclusters and b) track the average cluster size.")),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"Graphs that describe real-life networks often contain community structures. This\ninsight applies to use cases such as customer segmentation, contact tracing,\nmedical diagnostics, and quantification of environmental hazards in public\nhealth."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/applications/drug-discovery-application"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Medical-Application-8A477F?style=for-the-badge",alt:"Medical"}))),(0,o.kt)("p",null,"Tracking the evolution of communities across time provides a way to monitor\nentities such as viruses or rumors in real-time as they spread. With the\nCOVID-19 pandemic being a top global concern, this problem is in search of a\nsolution. One way to tackle it would be to pinpoint the main transmission focal\npoints by using dynamic community detection."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/applications/retail-application"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge",alt:"Retail"}))),(0,o.kt)("p",null,"With new items being sold every day, using dynamic community detection one can\nquickly follow the trends that are being formed and submit recommendations based\non trends within a community. This approach enables the seller to adapt more\nflexibly to unexpected events."))}u.isMDXComponent=!0}}]);