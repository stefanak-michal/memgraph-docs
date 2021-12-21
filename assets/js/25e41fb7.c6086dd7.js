"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29788],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),g=i,h=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return t?r.createElement(h,a(a({ref:n},c),{},{components:t})):r.createElement(h,a({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34844:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"power-grids-application",title:"Power Grids",sidebar_label:"Power Grids"},p=void 0,l={unversionedId:"applications/power-grids-application",id:"applications/power-grids-application",title:"Power Grids",description:"Introduction",source:"@site/mage/applications/power-grids-application.md",sourceDirName:"applications",slug:"/applications/power-grids-application",permalink:"/docs/mage/applications/power-grids-application",editUrl:"https://github.com/memgraph/docs/tree/master/mage/applications/power-grids-application.md",tags:[],version:"current",frontMatter:{id:"power-grids-application",title:"Power Grids",sidebar_label:"Power Grids"},sidebar:"mage",previous:{title:"Knowledge Graphs",permalink:"/docs/mage/applications/knowledge-graph-application"},next:{title:"Process Engineering",permalink:"/docs/mage/applications/process-engineering-application"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Applying graphs",id:"applying-graphs",children:[{value:"Minimum spanning tree designed for power grids",id:"minimum-spanning-tree-designed-for-power-grids",children:[],level:3},{value:"Finding shortest paths",id:"finding-shortest-paths",children:[],level:3},{value:"Handling failures in power grids",id:"handling-failures-in-power-grids",children:[],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],d={toc:c};function u(e){var n=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The utility industry is undergoing a transformational period driven by\ntechnological and competitive forces, as well as changing customer expectations\nand growing regulatory constraints. As these forces accelerate, electric power\ndistributors must tap new technologies to expand opportunities to improve\noperational efficiencies, reduce costs and maximize customer satisfaction. "),(0,o.kt)("p",null,"Similar to its impact on other major industries, advanced analytics have the\npotential to unlock novel groundbreaking opportunities in the power grid sector.\nAs power grid technologies evolve in conjunction with measurement and\ncommunication technologies, this results in an unprecedented amount of\nheterogeneous and deeply interconnected data from diverse sources. The effective\ncombination and utilization of this electrical data with external data sources\n(e.g. weather), has the potential to revolutionize electrical grid operations by\nenhancing observability of system-wide conditions, the behavior of end-users,\nand energy availability."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"memgraph-graph-algorithm-applications-power-grids",src:t(57306).Z})),(0,o.kt)("h2",{id:"applying-graphs"},"Applying graphs"),(0,o.kt)("h3",{id:"minimum-spanning-tree-designed-for-power-grids"},"Minimum spanning tree designed for power grids"),(0,o.kt)("p",null,"In the case of a network failure, a smart grid should be able to automatically\nreconfigure itself and continue energy distribution without additional\ndisruptions. The generation of minimum spanning trees could overcome potential\npoints of failure by enabling smart grids to heal themselves and propose new\nconfigurations within the network. While such an algorithm would require\nsignificant resources, Memgraph, with its in-memory implementation, ensures\nreal-time computation. "),(0,o.kt)("h3",{id:"finding-shortest-paths"},"Finding shortest paths"),(0,o.kt)("p",null,"This type of network analysis is crucial to infrastructure managers. It helps\nuncover vulnerabilities and bottlenecks, model the impact incidents and outages\nmay have on the network, and carry out critical contingency planning. By\nexamining the power grid as a graph, this task is transformed into a simple graph\nproblem which can be tackled in a myriad of ways. "),(0,o.kt)("h3",{id:"handling-failures-in-power-grids"},"Handling failures in power grids"),(0,o.kt)("p",null,"Because of their size and locations, power grids are prone to multiple failures\nthroughout the year. Individual elements can experience technical problems due\nto their age or weather effects which means that the grid needs to have certain\nredundancies in place. "),(0,o.kt)("p",null,"By examining the grid through a graph, we can simulate the behavior in case of a\ncritical failure. The graph should provide enough information to predict\npotential shortcomings. We can also simulate new elements such as transformers\nor high voltage transmission lines to find the most appropriate locations."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"This text is a ",(0,o.kt)("strong",{parentName:"p"},"summary")," of one area that fits perfectly with the application\nof graphs. Therefore, we would like to have you with us when ",(0,o.kt)("strong",{parentName:"p"},"implementing"),"\nsome of these solutions. Share ",(0,o.kt)("strong",{parentName:"p"},"opinions"),", ",(0,o.kt)("strong",{parentName:"p"},"experiences")," and ",(0,o.kt)("strong",{parentName:"p"},"problems"),"\nyou encounter when working with ",(0,o.kt)("strong",{parentName:"p"},"Memgraph")," on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord\nserver"),". We are here for you and we will help you\nalong the way."))}u.isMDXComponent=!0},57306:function(e,n,t){n.Z=t.p+"assets/images/memgraph-graph-algorithm-applications-power-grids-b93d9c7eaf52f040013bdf765e481384.png"}}]);