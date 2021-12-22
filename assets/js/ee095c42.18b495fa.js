"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33566],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74077:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={id:"indexing",title:"Indexing",sidebar_label:"Indexing"},s=void 0,p={unversionedId:"concepts/indexing",id:"concepts/indexing",title:"Indexing",description:"Introduction",source:"@site/docs/concepts/indexing.md",sourceDirName:"concepts",slug:"/concepts/indexing",permalink:"/docs/memgraph/next/concepts/indexing",editUrl:"https://github.com/memgraph/docs/tree/master/docs/concepts/indexing.md",tags:[],version:"current",frontMatter:{id:"indexing",title:"Indexing",sidebar_label:"Indexing"},sidebar:"memgraph",previous:{title:"Graph algorithms",permalink:"/docs/memgraph/next/concepts/graph-algorithms"},next:{title:"Replication",permalink:"/docs/memgraph/next/concepts/replication"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Index types",id:"index-types",children:[],level:2},{value:"Underlying implementation",id:"underlying-implementation",children:[],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A database index is a data structure used to improve the speed of data retrieval\nwithin a database at the cost of additional writes and storage space for\nmaintaining the index data structure."),(0,i.kt)("p",null,"If you have a deep understanding of your data model and use-case, you can decide\nwhich data to index and significantly improve the efficiency of data retrieval."),(0,i.kt)("h2",{id:"index-types"},"Index types"),(0,i.kt)("p",null,"At Memgraph, we support two types of indexes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"label index"),(0,i.kt)("li",{parentName:"ul"},"label-property index")),(0,i.kt)("p",null,"Memgraph will NOT automatically index labeled data. If you want to optimize\nqueries that fetch nodes by label you need to perform the indexing. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person;\n")),(0,i.kt)("p",null,"Retrieving nodes using this query is now much more efficient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n;\n")),(0,i.kt)("p",null,"You can also create indexes on data with a specific combination of label and\nproperty, hence the name label-property index. "),(0,i.kt)("p",null,"For example, if you are storing information about people and you often retrieve\ntheir age, it might be beneficial to create an index on nodes labeled as\n",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," with a property named ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," by using the following language construct:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(age);\n")),(0,i.kt)("p",null,"After creating that index, queries will be more efficient because Memgraph's\nquery engine will not have to fetch each ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," node and check whether the\nproperty exists. Even if all nodes labeled as ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," have an ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," property,\ncreating an index can still be beneficial because entries within the index are\nsorted by property value. By creating a label-property index, queries similar to\nthis one will be more efficient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person {age: 42}) RETURN n;\n")),(0,i.kt)("p",null,"Indexing is also beneficial for simple queries that filter data with a ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE"),"\nclause:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;\n")),(0,i.kt)("p",null,"Bear in mind that ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," filters could contain arbitrarily complex\nexpressions and index based retrieval might not be used. Nevertheless, we are\ncontinually improving our index usage recognition algorithms."),(0,i.kt)("p",null,"Filtering based on less than or greater than comparisons will also use index\nbased retrieval:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:PERSON and n.age < 18 RETURN n;\n")),(0,i.kt)("p",null,"Information about available indexes can be retrieved using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW INDEX INFO;\n")),(0,i.kt)("p",null,"This query will return all the labels and label-property pairs that Memgraph\ncurrently indexes."),(0,i.kt)("p",null,"You can delete created indexes by using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Label(property);\n")),(0,i.kt)("p",null,"This query instructs all active transactions to abort as soon as possible. Once\nall transaction have finished, it will drop the index."),(0,i.kt)("h2",{id:"underlying-implementation"},"Underlying implementation"),(0,i.kt)("p",null,"The central part of our index data structure is a highly-concurrent skip list.\nSkip lists are probabilistic data structures that allow fast search within an\nordered sequence of elements. The structure itself is built in layers where the\nbottom layer is an ordinary linked list that preserves the order. Each higher\nlevel can be imagined as a highway for layers below."),(0,i.kt)("p",null,"The implementation details behind skip list operations are well documented\nin the literature and are out of scope for this article. Nevertheless, we\nbelieve that it is important for more advanced users to understand the following\nimplications of this data structure (",(0,i.kt)("inlineCode",{parentName:"p"},"n")," denotes the current number of elements\nin a skip list):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Average insertion time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"Average deletion time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"Average search time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"Average memory consumption is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(n)"))))}u.isMDXComponent=!0}}]);