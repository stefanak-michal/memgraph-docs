(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9464],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2848:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"tsp",title:"The tsp module",sidebar_label:"tsp"},l={unversionedId:"query-modules/python/tsp",id:"query-modules/python/tsp",isDocsHomePage:!1,title:"The tsp module",description:"solve(context, points, method)",source:"@site/mage/query-modules/python/tsp.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/tsp",permalink:"/mage/query-modules/python/tsp",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/tsp.md",version:"current",sidebar_label:"tsp",frontMatter:{id:"tsp",title:"The tsp module",sidebar_label:"tsp"},sidebar:"mage",previous:{title:"The set_cover module",permalink:"/mage/query-modules/python/set-cover"},next:{title:"How to contribute to MAGE?",permalink:"/mage/contributing"}},s=[{value:"<code>solve(context, points, method)</code>",id:"solvecontext-points-method",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"solvecontext-points-method"},(0,i.kt)("inlineCode",{parentName:"h2"},"solve(context, points, method)")),(0,i.kt)("p",null,"The tsp_module solver returns 2 fields whose elements at indexes are correlated"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sources")," - elements from 1st to n-1th element"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"destinations")," - elements from 2nd to nth element")),(0,i.kt)("p",null,"The pairs of them represent individual edges between 2 nodes in the graph."),(0,i.kt)("p",null,"The required argument is the list of cities one wants to find the path from. The\noptional argument ",(0,i.kt)("inlineCode",{parentName:"p"},"method")," is by default 'greedy'. Other arguments that can be\nspecified are '2-approx' and '1.5-approx'"),(0,i.kt)("p",null,"The procedure can be invoked in openCypher using the following calls:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Point)\nWITH collect(n) as points\nCALL tsp_module.solve(points) YIELD sources, destinations;\n")))}u.isMDXComponent=!0}}]);