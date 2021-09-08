"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55474],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35651:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"indexing",title:"Indexing",sidebar_label:"Indexing"},s=void 0,p={unversionedId:"concepts/indexing",id:"version-1.6.1/concepts/indexing",isDocsHomePage:!1,title:"Indexing",description:"Introduction",source:"@site/memgraph_versioned_docs/version-1.6.1/concepts/indexing.md",sourceDirName:"concepts",slug:"/concepts/indexing",permalink:"/memgraph/concepts/indexing",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/concepts/indexing.md",tags:[],version:"1.6.1",frontMatter:{id:"indexing",title:"Indexing",sidebar_label:"Indexing"},sidebar:"version-1.6.1/memgraph",previous:{title:"Graph algorithms",permalink:"/memgraph/concepts/graph-algorithms"},next:{title:"Replication",permalink:"/memgraph/concepts/replication"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Index Types",id:"index-types",children:[]},{value:"Underlying Implementation",id:"underlying-implementation",children:[]}],d={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A database index is a data structure used to improve the speed of data retrieval\nwithin a database at the cost of additional writes and storage space for\nmaintaining the index data structure."),(0,i.kt)("p",null,"Armed with deep understanding of their data model and use-case, users can decide\nwhich data to index and, by doing so, significantly improve their data retrieval\nefficiency"),(0,i.kt)("h2",{id:"index-types"},"Index Types"),(0,i.kt)("p",null,"At Memgraph, we support two types of indexes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"label index"),(0,i.kt)("li",{parentName:"ul"},"label-property index")),(0,i.kt)("p",null,"Label indexing is NOT enabled by default in Memgraph, i.e., Memgraph will not\nautomatically index labeled data. Therefore, it is up to the user to perform\nthe indexing explicitly. By doing so, one can optimize queries that fetch\nnodes by label:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n: Label) ... RETURN n;\n")),(0,i.kt)("p",null,"Indexes can also be created on data with a specific combination of label and\nproperty, hence the name label-property index. This operation needs to be\nspecified by the user and should be used with a specific data model and\nuse-case in mind."),(0,i.kt)("p",null,"For example, suppose we are storing information about certain people in our\ndatabase and we are often interested in retrieving their age. In that case,\nit might be beneficial to create an index on nodes labeled as ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," which\nhave a property named ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),". We can do so by using the following language\nconstruct:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(age);\n")),(0,i.kt)("p",null,"After the creation of that index, those queries will be more efficient due to\nthe fact that Memgraph's query engine will not have to fetch each ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," node\nand check whether the property exists. Moreover, even if all nodes labeled as\n",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," had an ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," property, creating such index might still prove to be\nbeneficial. The main reason is that entries within that index are kept sorted\nby property value. Queries such as the following are therefore more efficient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person {age: 42}) RETURN n;\n")),(0,i.kt)("p",null,"Index based retrieval can also be invoked on queries with ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," statements.\nFor instance, the following query will have the same effect as the previous\none:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;\n")),(0,i.kt)("p",null,"Naturally, indexes will also be used when filtering based on less than or\ngreater than comparisons. For example, filtering all minors (persons\nunder 18 years of age under Croatian law) using the following query will use\nindex based retrieval:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:PERSON and n.age < 18 RETURN n;\n")),(0,i.kt)("p",null,"Bear in mind that ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," filters could contain arbitrarily complex expressions\nand index based retrieval might not be used. Nevertheless, we are continually\nimproving our index usage recognition algorithms."),(0,i.kt)("p",null,"Information about available indexes can be retrieved by using the following\nsyntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW INDEX INFO;\n")),(0,i.kt)("p",null,"The results of this query will be all of the labels and label-property pairs\nthat Memgraph currently indexes."),(0,i.kt)("p",null,"Created indexes can also be deleted by using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Label(property);\n")),(0,i.kt)("p",null,"Dropping an index will instruct all active transactions to abort as soon as\npossible, and it will wait for them to finish. Once all transaction have\nfinished, it will drop the index."),(0,i.kt)("h2",{id:"underlying-implementation"},"Underlying Implementation"),(0,i.kt)("p",null,"The central part of our index data structure is a highly-concurrent skip list.\nSkip lists are probabilistic data structures that allow fast search within an\nordered sequence of elements. The structure itself is built in layers where the\nbottom layer is an ordinary linked list that preserves the order. Each higher\nlevel can be imagined as a highway for layers below."),(0,i.kt)("p",null,"The implementation details behind skip list operations are well documented\nin the literature and are out of scope for this article. Nevertheless, we\nbelieve that it is important for more advanced users to understand the following\nimplications of this data structure (",(0,i.kt)("inlineCode",{parentName:"p"},"n")," denotes the current number of elements\nin a skip list):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Average insertion time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"Average deletion time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"Average search time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"Average memory consumption is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(n)"))))}u.isMDXComponent=!0}}]);