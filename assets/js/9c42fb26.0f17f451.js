(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7942],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,f=m["".concat(s,".").concat(g)]||m[g]||c[g]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},474:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),l={id:"overview",title:"Cypher manual",sidebar_label:"Overview",slug:"/"},o={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Cypher manual",description:"Cypher is the most widely adopted, fully-specified, and open query language for property graph databases.",source:"@site/cypher-manual/overview.md",sourceDirName:".",slug:"/",permalink:"/cypher-manual/",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/overview.md",version:"current",sidebar_label:"Overview",frontMatter:{id:"overview",title:"Cypher manual",sidebar_label:"Overview",slug:"/"},sidebar:"cypher_manual",next:{title:"Reading existing data",permalink:"/cypher-manual/reading-existing-data"}},s=[{value:"Getting started",id:"getting-started",children:[]},{value:"Clauses",id:"clauses",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Other features",id:"other-features",children:[]},{value:"Differences",id:"differences",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cypher")," is the most widely adopted, fully-specified, and open query language for property graph databases.\nIt provides an intuitive way to work with property graphs."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Take a look at the following guides if you are new to the ",(0,i.kt)("strong",{parentName:"p"},"Cypher")," query language:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/reading-existing-data"},"Reading existing data"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/writing-new-data"},"Writing new data"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/reading-and-writing"},"Reading and writing")))),(0,i.kt)("h2",{id:"clauses"},"Clauses"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Cypher")," language enables users to perform standard database operations by using the following clauses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/match"},"MATCH")),", which searches for patterns;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/where"},"WHERE")),", for filtering the matched data;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/return"},"RETURN")),", for defining what will be presented to the user in the result set;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/union"},"UNION"))," and ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/union"},"UNION ALL"))," for combining results from multiple queries;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/create"},"CREATE")),", for creating new nodes and edges;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/set"},"SET")),", for adding new or updating existing labels and properties;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/delete"},"DELETE")),", for deleting nodes and edges;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/remove"},"REMOVE")),", for removing labels and properties;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/merge"},"MERGE")),", for creating patterns if they do not exist;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/clauses/with"},"WITH")),", for combining multiple reads and writes.")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cypher")," supports a large number of functions. The list can be found here: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/functions"},"Cypher functions")))),(0,i.kt)("h2",{id:"other-features"},"Other features"),(0,i.kt)("p",null,"The following sections describe some of the other supported features in Memgraph:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/other-features#string-operators"},"String operators"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/other-features#parameters"},"Parameters"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/other-features#case"},"CASE expression"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/other-features#inspecting-and-profiling-queries"},"Inspecting and profiling queries")))),(0,i.kt)("h2",{id:"differences"},"Differences"),(0,i.kt)("p",null,"Although we try to implement openCypher query language as closely to the\nlanguage reference as possible, we had to make some changes to enhance the\nuser experience. You can find the differences in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual/differences"},"this article")),"."))}u.isMDXComponent=!0}}]);