"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1862],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},29612:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],p={id:"reading-and-writing",title:"Reading and writing",sidebar_label:"Reading and writing",slug:"/reading-and-writing"},l=void 0,d={unversionedId:"getting-started/reading-and-writing",id:"getting-started/reading-and-writing",title:"Reading and writing",description:"OpenCypher supports combining multiple reads and writes using the",source:"@site/cypher-manual/getting-started/reading-and-writing.md",sourceDirName:"getting-started",slug:"/reading-and-writing",permalink:"/docs/cypher-manual/reading-and-writing",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/getting-started/reading-and-writing.md",tags:[],version:"current",frontMatter:{id:"reading-and-writing",title:"Reading and writing",sidebar_label:"Reading and writing",slug:"/reading-and-writing"},sidebar:"cypher_manual",previous:{title:"Writing new data",permalink:"/docs/cypher-manual/writing-new-data"},next:{title:"Functions",permalink:"/docs/cypher-manual/functions"}},s=[{value:"WITH",id:"with",children:[],level:2},{value:"MERGE",id:"merge",children:[],level:2}],c={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OpenCypher supports combining multiple reads and writes using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"WITH")," clause. In addition to combining, the ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," clause is provided which\nmay create patterns if they do not exist."),(0,i.kt)("h2",{id:"with"},"WITH"),(0,i.kt)("p",null,"The write part of the query cannot be simply followed by another read part. In\norder to combine them, ",(0,i.kt)("inlineCode",{parentName:"p"},"WITH")," clause must be used. The names this clause\nestablishes are transferred from one part to another."),(0,i.kt)("p",null,"For example, creating a node and finding all nodes with the same property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (node {property: 42}) WITH node.property AS propValue\nMATCH (n {property: propValue}) RETURN n;\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," is not visible after ",(0,i.kt)("inlineCode",{parentName:"p"},"WITH"),", since only ",(0,i.kt)("inlineCode",{parentName:"p"},"node.property"),"\nwas carried over."),(0,i.kt)("p",null,"This clause behaves very much like ",(0,i.kt)("inlineCode",{parentName:"p"},"RETURN"),", so you should refer to features\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"RETURN"),"."),(0,i.kt)("h2",{id:"merge"},"MERGE"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," clause is used to ensure that a pattern you are looking for exists\nin the database. This means that if the pattern is not found, it will be\ncreated. In a way, this clause is like a combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,i.kt)("p",null,"Example. Ensure that a person has at least one friend."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) MERGE (n)-[:FriendOf]->(m);\n")),(0,i.kt)("p",null,"The clause also provides additional features for updating the values depending\non whether the pattern was created or matched. This is achieved with ",(0,i.kt)("inlineCode",{parentName:"p"},"ON\nCREATE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ON MATCH")," sub clauses."),(0,i.kt)("p",null,"Example. Set a different properties depending on what ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE")," did."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n :Person) MERGE (n)-[:FriendOf]->(m)\nON CREATE SET m.prop = "created" ON MATCH SET m.prop = "existed";\n')),(0,i.kt)("p",null,"For more details, click ",(0,i.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/merge"},"this\nlink"),"."))}u.isMDXComponent=!0}}]);