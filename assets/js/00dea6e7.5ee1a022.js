"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1915],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22826:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"indexing",title:"Indexing",sidebar_label:"Indexing"},p=void 0,c={unversionedId:"reference-guide/indexing",id:"reference-guide/indexing",title:"Indexing",description:"An index stores additional information on certain types of data, so that",source:"@site/docs/reference-guide/indexing.md",sourceDirName:"reference-guide",slug:"/reference-guide/indexing",permalink:"/docs/memgraph/next/reference-guide/indexing",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/indexing.md",tags:[],version:"current",frontMatter:{id:"indexing",title:"Indexing",sidebar_label:"Indexing"},sidebar:"memgraph",previous:{title:"Cypher queries (.cypherl format)",permalink:"/docs/memgraph/next/reference-guide/import-data/cypherl"},next:{title:"Isolation levels",permalink:"/docs/memgraph/next/reference-guide/isolation-levels"}},s=[],d={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An index stores additional information on certain types of data, so that\nretrieving said data becomes more efficient. Downsides of indexing are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"requiring extra storage for each index and"),(0,i.kt)("li",{parentName:"ul"},"slowing down writes to the database.")),(0,i.kt)("p",null,"Carefully choosing which data to index can tremendously improve data retrieval\nefficiency, and thus make index downsides negligible."),(0,i.kt)("p",null,"Indexing can be applied to data with a specific label or a combination of label and\nproperty. They are not automatically created, instead a user needs to create\nthem explicitly. Creation is done using a special\n",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE INDEX ON :Label(property)")," language construct."),(0,i.kt)("p",null,"For example, to index nodes which are labeled as ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," and have a property\nnamed ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(age);\n")),(0,i.kt)("p",null,"After the index is created, retrieving those nodes will become more efficient.\nFor example, the following query will retrieve all nodes which have an ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),"\nproperty, instead of fetching each ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," node and checking whether the\nproperty exists."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person {age: 42}) RETURN n;\n")),(0,i.kt)("p",null,"Using index based retrieval also works when filtering labels and properties\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE"),". For example, the same effect as in the previous example can be\ndone with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;\n")),(0,i.kt)("p",null,"Since the filter inside ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," can contain any kind of an expression, the\nexpression can be complicated enough so that the index does not get used. We\nare continuously improving the recognition of index usage opportunities from a\n",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," expression. If there is any suspicion that an index may not be used,\nwe recommend putting properties and labels inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH")," pattern."),(0,i.kt)("p",null,"Information about available indexes can be retrieved by using the following\nsyntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW INDEX INFO;\n")),(0,i.kt)("p",null,"The results of this query will be all of the labels and label-property pairs\nthat Memgraph currently indexes."),(0,i.kt)("p",null,"Created indexes can also be deleted by using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Label(property);\n")))}u.isMDXComponent=!0}}]);