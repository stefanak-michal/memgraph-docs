"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7714],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),h=o,m=g["".concat(l,".").concat(h)]||g[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},37537:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"process-engineering",title:"Process Engineering",sidebar_label:"Process Engineering"},l=void 0,c={unversionedId:"use-cases/process-engineering",id:"use-cases/process-engineering",title:"Process Engineering",description:"Introduction",source:"@site/mage/use-cases/process-engineering.md",sourceDirName:"use-cases",slug:"/use-cases/process-engineering",permalink:"/docs/mage/use-cases/process-engineering",editUrl:"https://github.com/memgraph/docs/tree/master/mage/use-cases/process-engineering.md",tags:[],version:"current",frontMatter:{id:"process-engineering",title:"Process Engineering",sidebar_label:"Process Engineering"},sidebar:"mage",previous:{title:"Power Grids",permalink:"/docs/mage/use-cases/power-grids"},next:{title:"Retail",permalink:"/docs/mage/use-cases/retail"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Applying graphs",id:"applying-graphs",children:[{value:"Factory modelling",id:"factory-modelling",children:[],level:3},{value:"Knowledge graphs",id:"knowledge-graphs",children:[],level:3},{value:"Process automation",id:"process-automation",children:[],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],u={toc:p};function g(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Like any branch of engineering, ",(0,a.kt)("strong",{parentName:"p"},"manufacturing")," is subject to\n",(0,a.kt)("strong",{parentName:"p"},"optimization"),". With increasing ",(0,a.kt)("strong",{parentName:"p"},"digitization"),", modeling of plants is\npossible before their construction. One of the optimizations is already present\nwhen choosing the structure of the model itself. By choosing a ",(0,a.kt)("strong",{parentName:"p"},"graph")," as such\na structure, we encompass an enormous number of different plants whose structure\nsignificantly resembles a graph."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"memgraph-graph-algorithm-applications-process-engineering",src:n(73619).Z})),(0,a.kt)("h2",{id:"applying-graphs"},"Applying graphs"),(0,a.kt)("h3",{id:"factory-modelling"},"Factory modelling"),(0,a.kt)("p",null,"Every factory strives to ",(0,a.kt)("strong",{parentName:"p"},"optimize")," its plant. Through graphs, it is\npossible to create a ",(0,a.kt)("strong",{parentName:"p"},"state network")," that simulates a particular plant. By\nanalyzing such plants and eliminating potential risks before construction\nitself, it is possible to save millions of dollars."),(0,a.kt)("p",null,"For example, measures of centrality can detect which ",(0,a.kt)("strong",{parentName:"p"},"units are most likely to\nfail"),". Strengthening such units prevents the possibility of plant\nunavailability."),(0,a.kt)("h3",{id:"knowledge-graphs"},"Knowledge graphs"),(0,a.kt)("p",null,"Modeling knowledge with graphs within companies with large factory plants can\nlead to a variety of indirect benefits. With the structure of the graph, it is\npossible to show how the domain areas relate to each other. Also, it can enable\nworkers to more easily understand the ",(0,a.kt)("strong",{parentName:"p"},"working structures")," of their\ncolleagues. It can also give ",(0,a.kt)("strong",{parentName:"p"},"field researchers")," a concise description of the\narea, after which they could make a more focused decision to continue their\nresearch."),(0,a.kt)("h3",{id:"process-automation"},"Process automation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Monitoring experiments")," and ",(0,a.kt)("strong",{parentName:"p"},"processes")," can give a headache to one who\nanalyzes such data. Therefore, by organizing such experiments into graphs, it is\npossible to make a detailed analysis that would not be possible in relational\nsystems due to the ",(0,a.kt)("strong",{parentName:"p"},"high structure")," of the data and the numerous table joins."),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"This text is a ",(0,a.kt)("strong",{parentName:"p"},"summary")," of one area that fits perfectly with the application\nof graphs. Therefore, we would like to have you with us when ",(0,a.kt)("strong",{parentName:"p"},"implementing"),"\nsome of these solutions. Share ",(0,a.kt)("strong",{parentName:"p"},"opinions"),", ",(0,a.kt)("strong",{parentName:"p"},"experiences")," and ",(0,a.kt)("strong",{parentName:"p"},"problems"),"\nyou encounter when working with ",(0,a.kt)("strong",{parentName:"p"},"Memgraph")," on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord\nserver"),". We are here for you and we will help you\nalong the way."))}g.isMDXComponent=!0},73619:function(e,t,n){t.Z=n.p+"assets/images/memgraph-graph-algorithm-applications-process-engineering-10c6e0a1e2f58ffc72812e32d19b7858.jpg"}}]);