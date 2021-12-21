"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4163],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(h,l(l({ref:t},m),{},{components:r})):n.createElement(h,l({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},14854:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},s=void 0,c={unversionedId:"concepts/telemetry",id:"version-2.1.0/concepts/telemetry",title:"Telemetry",description:"Telemetry is an automated process by which data is collected at a remote point. We at Memgraph use telemetry data for the soul purpose of improving our products by focusing on areas that we belive are important to users. Telemetry is completely optional and can be fully disabled before starting the database.",source:"@site/memgraph_versioned_docs/version-2.1.0/concepts/telemetry.md",sourceDirName:"concepts",slug:"/concepts/telemetry",permalink:"/docs/memgraph/2.1.0/concepts/telemetry",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/concepts/telemetry.md",tags:[],version:"2.1.0",frontMatter:{id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"version-2.1.0/memgraph",previous:{title:"Replication",permalink:"/docs/memgraph/2.1.0/concepts/replication"},next:{title:"Changelog",permalink:"/docs/memgraph/2.1.0/changelog"}},m=[{value:"What kind of data is collected?",id:"what-kind-of-data-is-collected",children:[],level:2},{value:"Why we collect this data?",id:"why-we-collect-this-data",children:[],level:2},{value:"How to disable telemetry?",id:"how-to-disable-telemetry",children:[],level:2},{value:"Additional remarks",id:"additional-remarks",children:[],level:2}],u={toc:m};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Telemetry is an automated process by which data is collected at a remote point. We at Memgraph use telemetry data for the soul purpose of improving our products by focusing on areas that we belive are important to users. Telemetry is ",(0,o.kt)("strong",{parentName:"p"},"completely optional")," and can be ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#how-to-disable-telemetry"},"fully disabled"))," before starting the database."),(0,o.kt)("h2",{id:"what-kind-of-data-is-collected"},"What kind of data is collected?"),(0,o.kt)("p",null,"While a Memgraph database instance is running and an open internet connection is available, the following data will be sent to and stored on our servers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Information about the host machine"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CPU model"),(0,o.kt)("li",{parentName:"ul"},"Memory information"),(0,o.kt)("li",{parentName:"ul"},"Host OS"),(0,o.kt)("li",{parentName:"ul"},"Kernel information"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database runtime information"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CPU usage"),(0,o.kt)("li",{parentName:"ul"},"Memory usage"),(0,o.kt)("li",{parentName:"ul"},"The number of vertices and edges stored in the database"),(0,o.kt)("li",{parentName:"ul"},"Event counters (for example number of failed queries or ScanAll operator calls)"),(0,o.kt)("li",{parentName:"ul"},"Query module calls*")))),(0,o.kt)("p",null,"*",(0,o.kt)("strong",{parentName:"p"},"Only the names")," of the query module and procedure are recorded."),(0,o.kt)("p",null,"No personal information is sent in the process of collecting telemetry data. Each database generates a unique identifier by which we can group data coming from the same database instance. This unique identifier is in no way connected to other personal information about the user."),(0,o.kt)("h2",{id:"why-we-collect-this-data"},"Why we collect this data?"),(0,o.kt)("p",null,"Telemetry data is used by Memgraph's developers for the purpose of developing new functionalities and the general maintenance of our products. By analyzing the host machine environment and runtime information, we can further optimize our products to better suit specific user needs."),(0,o.kt)("p",null,"For example, if there is a considerable number of users who regularly call  NetworkX query modules, we would invest more resources in the development of similar new features and extending the support for implemented ones."),(0,o.kt)("p",null,"As is often the case, we need to prioritize certain goals over others. A data-driven understanding of product usage will help us prioritize features that are more likely to benefit a larger subset of our users."),(0,o.kt)("h2",{id:"how-to-disable-telemetry"},"How to disable telemetry?"),(0,o.kt)("p",null,"Telemetry is ",(0,o.kt)("strong",{parentName:"p"},"completely optional")," and can be fully disabled when starting the database. There are two ways to disable Memgraph's telemetry features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/memgraph/memgraph.conf")," change the line ",(0,o.kt)("inlineCode",{parentName:"li"},"--telemetry-enabled=true")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"--telemetry-enabled=false"))),(0,o.kt)("p",null,"The second approach is more Docker friendly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Include ",(0,o.kt)("inlineCode",{parentName:"li"},"--telemetry-enabled=false")," as a command-line argument when starting the database")),(0,o.kt)("h2",{id:"additional-remarks"},"Additional remarks"),(0,o.kt)("p",null,"We fully understand the need for user privacy which is why we made the telemetry feature completely optional and provided this article to cultivate transparent communication with the developer community. Your feedback is very much appriciated, and telemtry data is only a way of receving such feedback.\nIf you wish to get in touch with us, you can always send us an email to ",(0,o.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"tech@memgraph.com")," or leave a post on our ",(0,o.kt)("a",{parentName:"p",href:"https://discourse.memgraph.com/"},"Forum"),"."))}p.isMDXComponent=!0}}]);