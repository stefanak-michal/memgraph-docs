"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11422],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"union-find-algorithm",title:"Union Find",sidebar_label:"Union Find"},s=void 0,c={unversionedId:"algorithms/traditional-graph-analytics/union-find-algorithm",id:"algorithms/traditional-graph-analytics/union-find-algorithm",title:"Union Find",description:"Description",source:"@site/mage/algorithms/traditional-graph-analytics/union-find.md",sourceDirName:"algorithms/traditional-graph-analytics",slug:"/algorithms/traditional-graph-analytics/union-find-algorithm",permalink:"/docs/mage/algorithms/traditional-graph-analytics/union-find-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/traditional-graph-analytics/union-find.md",tags:[],version:"current",frontMatter:{id:"union-find-algorithm",title:"Union Find",sidebar_label:"Union Find"},sidebar:"mage",previous:{title:"PageRank",permalink:"/docs/mage/algorithms/traditional-graph-analytics/pagerank-algorithm"},next:{title:"Dynamic node2vec",permalink:"/docs/mage/algorithms/dynamic-graph-analytics/node2vec-online-algorithm"}},p=[{value:"Description",id:"description",children:[],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This is yet another important graph analytics algorithm. By using a\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Disjoint-set_data_structure"},(0,a.kt)("strong",{parentName:"a"},"disjoint-set"))," -\na data structure that keeps track of non-overlapping sets, the algorithm enables\nthe user to quickly check whether a pair of given nodes is in the same or\ndifferent ",(0,a.kt)("strong",{parentName:"p"},"connected component"),". The benefit of having this structure is that\na check on a pair of nodes is effectively executed in O(1) time."),(0,a.kt)("p",null,'The implementation of the disjoint-set data structure and its operations uses\nthe union by rank and path splitting optimizations described in "Worst-case\nAnalysis of Set Union Algorithms", developed by ',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Robert_Tarjan"},"Robert\nTarjan")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Jan_van_Leeuwen"},"Jan van\nLeeuwen"),"."),(0,a.kt)("img",{src:"https://i.imgur.com/R6BuXzs.png",alt:"drawing"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Structure of the disjoint set on the right side, and graph example on the\nleft. When checking the components, the algorithm only checks the shallow tree\non the left")),(0,a.kt)("h2",{id:"materials"},"Materials"),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/union_find.py"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Union_Find-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Union\nFind"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/mage/query-modules/python/union-find"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Union_Find-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white",alt:"Union\nFind"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Union Find")," is implemented as part of the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,a.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to check it out in\nthe link above. \u261d\ufe0f"),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/mage/applications/social-media-application"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge",alt:"Social\nnetworks"}))),(0,a.kt)("p",null,"Social graphs are often enormous in size. Searching through them and determining\nwhether something is in the same component might take a lot of time. By\norganizing such structures in disjoint sets, and using the union-find algorithm,\nit is possible to determine this connectivity extremely efficiently."))}u.isMDXComponent=!0}}]);