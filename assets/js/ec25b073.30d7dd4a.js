"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4217],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),g=r,d=h["".concat(l,".").concat(g)]||h[g]||m[g]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34507:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"betweenness-centrality-algorithm",title:"Betweenness Centrality",sidebar_label:"Betweenness Centrality"},l=void 0,p={unversionedId:"algorithms/traditional-graph-analytics/betweenness-centrality-algorithm",id:"algorithms/traditional-graph-analytics/betweenness-centrality-algorithm",isDocsHomePage:!1,title:"Betweenness Centrality",description:"Description",source:"@site/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm.md",sourceDirName:"algorithms/traditional-graph-analytics",slug:"/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm",permalink:"/docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm.md",tags:[],version:"current",frontMatter:{id:"betweenness-centrality-algorithm",title:"Betweenness Centrality",sidebar_label:"Betweenness Centrality"},sidebar:"mage",previous:{title:"Build from source on Linux",permalink:"/docs/mage/installation/source"},next:{title:"Biconnected Components",permalink:"/docs/mage/algorithms/traditional-graph-analytics/biconnected-components-algorithm"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3},{value:"Blog posts",id:"blog-posts",children:[],level:3},{value:"Playground",id:"playground",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Centrality analysis provides information about the node\u2019s importance for an\ninformation flow or connectivity of the network. ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Betweenness_centrality"},"Betweenness\ncentrality")," is one of the\nmost used centrality metrics. Betweenness centrality measures the extent to\nwhich a node lies on paths between other nodes in the graph. Thus, nodes with\nhigh ",(0,i.kt)("strong",{parentName:"p"},"betweenness")," may have considerable influence within a network under\ntheir control over information passing between others. The calculation of\nbetweenness centrality is not standardized, and there are many ways to solve it."),(0,i.kt)("p",null,"It is defined as the ",(0,i.kt)("strong",{parentName:"p"},"number of shortest paths"),' in the graph that passes\nthrough the node divided by the total number of shortest paths. The implemented\nalgorithm is described in the paper "',(0,i.kt)("a",{parentName:"p",href:"http://snap.stanford.edu/class/cs224w-readings/brandes01centrality.pdf"},"A Faster Algorithm for Betweenness\nCentrality"),'"\nby Ulrik Brandes of the ',(0,i.kt)("a",{parentName:"p",href:"https://www.uni-konstanz.de/en/"},"University of\nKonstanz"),"."),(0,i.kt)("img",{src:"https://i.imgur.com/6R2xdb8.png",alt:"drawing",width:"600"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A larger circle means larger betweenness centrality. The middle one has the\nlargest amount of shortest paths flowing through it.")),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/betweenness_centrality_module/betweenness_centrality_module.cpp"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Betweenness_Centrality-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Betweenness\nCentrality"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mage/query-modules/cpp/betweenness-centrality"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Betweenness_Centrality-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white",alt:"Betweenness\nCentrality"}))),(0,i.kt)("p",null,"Betweenness Centrality is implemented as part of the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,i.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to check it out in\nthe link above. \u261d\ufe0f"),(0,i.kt)("h3",{id:"blog-posts"},"Blog posts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/identifying-essential-proteins"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Identifying_Essential_Proteins_using_Betweenness_Centrality-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white",alt:"Betweenness\nCentrality"}))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"In recent years, researchers have proved that essential proteins often have a\ncorrelation with disease genes. Therefore, the identification of essential\nproteins is the foundation for disease diagnosis and treatment. Drug design\nmethods heavily rely on detecting essential proteins to find drug targets."))),(0,i.kt)("h3",{id:"playground"},"Playground"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/lesson/game-of-thrones-deaths-introductions-3-mage"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/MAGE_introduction-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKOSURBVFiFtdexaxVBEAbw35mXBxoQMa2FRdAUKZJSSGNjpWChqIUoiJg6nUnhQ0T0DxBs7LUwRMEIKqigBmIgVqJWFglRlPRCcC1uI+e9y8vtJQ4svDezO/Ptt7szc0IImgwMYyGO4aZ+dmkgWZYN4yWexfEy6tKl4c5X0SnoOlHXxQSGcAOTGOiybzd4LxBo4xseYwbfcboRgF7BNwOB85gv2I/hB/YmAagTvALECBZxtmSfwdVUAO9wM4GtafzCR7RKtoe4nQrgLR5hPAHEfvTF3y2cxXy8E4dSAQxiCstYwlgCkL7IxGK8E+0tL2E883dx54MFfQt3MJfIxC+MVNm7ElEhybzCT1zZsIUQ1vEBe8rrNpMQwhqu43llsup12zEeaW/F/218wcm6DFS8jn+SVXnSE1wr6ZYi7Zdj8KepwXuBKJ7Tvk0WjWEuHknyzrcCAYexopQi/+cogiAvp7WTzA6CuIGFjVfwu+6t/h9SO8/v4O7PyI/98IZix0DgOF5gFqObzDmIA39fwU6BkL+Wz5jAXSyV7Nfw4B9daUJjEHHnn8VcL0/by2IBUycRlUBMJwJ4gYmSbkreDd2qCl4JIC4ckReQ/QkAZiPtrYJuEK/jqOycy07a8pK5KC+hfQkARuVpeznufLDWuoKDIXmzMC9vHjYK0K5EJsYj7a/rzC+W44tYCCEcCSHcDyGsZ1m2O16slSzLprsySIWEEN5E9mpJq/B7Desl+zl8xQn5x0d/CKHTy2GWZR1cwNFaCArUDcj79mMF3XuxSGnQlifdgejgVAQxK29CV9Ff8US7QDQJXvkMIxOT8mo1VGFP+jTbamTRQZIU+sZ7UXUJR0MIn5KdpSIuMbHtz/M/1FmUO4eoWSUAAAAASUVORK5CYII=&logoColor=white",alt:"Betweenness\nCentrality"}))),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mage/applications/social-media-application"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge",alt:"Social\nnetworks"}))),(0,i.kt)("p",null,"The metric of ",(0,i.kt)("strong",{parentName:"p"},"betweenness centrality")," can be used on a ",(0,i.kt)("strong",{parentName:"p"},"macro")," and\n",(0,i.kt)("strong",{parentName:"p"},"micro")," scale in social networks. On a macro scale, a high measure will\nindicate the position of power (due to the large flow of information). On the\nother hand, on a micro-scale, a high measure represents the strength of a\nrelationship with a narrow circle of friends."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mage/applications/bioinformatics-application"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Bioinformatics-Application-8A477F?style=for-the-badge",alt:"Bioinformatics"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.ebi.ac.uk/training/online/courses/network-analysis-of-protein-interaction-data-an-introduction/protein-protein-interaction-networks/"},(0,i.kt)("strong",{parentName:"a"},"Protein-protein interaction\nnetworks")),"\nwere created to get a better insight into how proteins interact with each other."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mage/applications/transportation-application"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Transportation-Application-8A477F?style=for-the-badge",alt:"Transportation"}))),(0,i.kt)("p",null,"Maybe the most important usage of this algorithm is ",(0,i.kt)("strong",{parentName:"p"},"transportation"),". In a\n",(0,i.kt)("a",{parentName:"p",href:"https://www.hindawi.com/journals/jat/2019/9024745/"},"complex and urban transportation\nnetwork"),", centrality\nmeasurement can reveal the main bottlenecks and congestions within the system.\nSuch can help to organize the infrastructure of a big city, as well as the\namount spent in optimizing such routes."))}h.isMDXComponent=!0}}]);