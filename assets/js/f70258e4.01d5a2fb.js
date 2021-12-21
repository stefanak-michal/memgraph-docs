"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2191],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return g}});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var p=n.createContext({}),l=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),h=l(a),g=i,u=h["".concat(p,".").concat(g)]||h[g]||m[g]||r;return a?n.createElement(u,o(o({ref:e},c),{},{components:a})):n.createElement(u,o({ref:e},c))}));function g(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},31405:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"bipartite-matching-algorithm",title:"Bipartite Matching",sidebar_label:"Bipartite Matching"},p=void 0,l={unversionedId:"algorithms/traditional-graph-analytics/bipartite-matching-algorithm",id:"algorithms/traditional-graph-analytics/bipartite-matching-algorithm",title:"Bipartite Matching",description:"Description",source:"@site/mage/algorithms/traditional-graph-analytics/bipartite-matching.md",sourceDirName:"algorithms/traditional-graph-analytics",slug:"/algorithms/traditional-graph-analytics/bipartite-matching-algorithm",permalink:"/docs/mage/algorithms/traditional-graph-analytics/bipartite-matching-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/traditional-graph-analytics/bipartite-matching.md",tags:[],version:"current",frontMatter:{id:"bipartite-matching-algorithm",title:"Bipartite Matching",sidebar_label:"Bipartite Matching"},sidebar:"mage",previous:{title:"Biconnected Components",permalink:"/docs/mage/algorithms/traditional-graph-analytics/biconnected-components-algorithm"},next:{title:"Bridge Detection",permalink:"/docs/mage/algorithms/traditional-graph-analytics/bridges-algorithm"}},c=[{value:"Description",id:"description",children:[],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],m={toc:c};function h(t){var e=t.components,a=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"A bipartite graph is a graph in which we can divide vertices into ",(0,r.kt)("strong",{parentName:"p"},"two\nindependent sets"),", such that every edge connects vertices between these sets.\nNo connection can be established within the set."),(0,r.kt)("p",null,"Matching in bipartite graphs (",(0,r.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/maximum-bipartite-matching"},(0,r.kt)("strong",{parentName:"a"},"bipartite\nmatching")),") is\ndescribed as a set of edges that are picked in a way to ",(0,r.kt)("strong",{parentName:"p"},"not share an\nendpoint"),". Furthermore, maximum matching is such matching of maximum\ncardinality of the chosen edge set. The algorithm runs in ",(0,r.kt)("strong",{parentName:"p"},"O(|V|","*","|E|)")," time,\nwhere V represents a set of nodes and E represents a set of edges."),(0,r.kt)("p",null,"This little tool can become extremely handful when calculating assignments\nbetween entities. Assigning stuff between two sets of entities is done in a\nlarge number of industries, and therefore having a method to find it can make\nthe developing process easier."),(0,r.kt)("img",{src:"https://i.imgur.com/eoBab7K.png",alt:"drawing"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Example of maximum matching between two sets of nodes in the bipartite graph")),(0,r.kt)("h2",{id:"materials"},"Materials"),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/bipartite_matching_module/bipartite_matching_module.cpp"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Bipartite_Matching-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Bipartite\nMatching"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/query-modules/cpp/bipartite-matching"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Bipartite_Matching-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white",alt:"Bipartite\nMatching"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bipartite matching")," is implemented as part of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,r.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to check it out in\nthe link above. \u261d\ufe0f"),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/applications/transportation-application"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Transportation-Application-8A477F?style=for-the-badge",alt:"Transportation"}))),(0,r.kt)("p",null,"To optimize transportation in nowadays successful and widely used applications\nlike ",(0,r.kt)("a",{parentName:"p",href:"https://www.uber.com/"},"Uber"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.lyft.com/"},"Lyft")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://bolt.eu/en/"},"Bolt"),", a crucial moment is assigning drivers with\npotential passengers. To minimize the overall waiting time, the process\ncalculates that assignment by finding optimal matching with a bipartite graph."))}h.isMDXComponent=!0}}]);