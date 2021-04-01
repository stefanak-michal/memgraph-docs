(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(8),o=(r(0),r(253)),i={id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},l={unversionedId:"concepts/telemetry",id:"concepts/telemetry",isDocsHomePage:!1,title:"Telemetry",description:"Telemetry is an automated process by which data is collected at a remote point. We at Memgraph use telemetry data for the soul purpose of improving our products by focusing on areas that we belive are important to users. Telemetry is completely optional and can be fully disabled before starting the database.",source:"@site/docs/concepts/telemetry.md",slug:"/concepts/telemetry",permalink:"/memgraph/next/concepts/telemetry",editUrl:"https://github.com/memgraph/docs/tree/master/docs/concepts/telemetry.md",version:"current",sidebar_label:"Telemetry",sidebar:"memgraph",previous:{title:"Replication",permalink:"/memgraph/next/concepts/replication"},next:{title:"Upcoming features",permalink:"/memgraph/next/upcoming-features"}},c=[{value:"What kind of data is collected?",id:"what-kind-of-data-is-collected",children:[]},{value:"Why we collect this data?",id:"why-we-collect-this-data",children:[]},{value:"How to disable telemetry?",id:"how-to-disable-telemetry",children:[]},{value:"Additional remarks",id:"additional-remarks",children:[]}],s={toc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Telemetry is an automated process by which data is collected at a remote point. We at Memgraph use telemetry data for the soul purpose of improving our products by focusing on areas that we belive are important to users. Telemetry is ",Object(o.b)("strong",{parentName:"p"},"completely optional")," and can be ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"#how-to-disable-telemetry"},"fully disabled"))," before starting the database."),Object(o.b)("h2",{id:"what-kind-of-data-is-collected"},"What kind of data is collected?"),Object(o.b)("p",null,"While a Memgraph database instance is running and an open internet connection is available, the following data will be sent to and stored on our servers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Information about the host machine"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"CPU model"),Object(o.b)("li",{parentName:"ul"},"Memory information"),Object(o.b)("li",{parentName:"ul"},"Host OS"),Object(o.b)("li",{parentName:"ul"},"Kernel information"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Database runtime information"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"CPU usage"),Object(o.b)("li",{parentName:"ul"},"Memory usage"),Object(o.b)("li",{parentName:"ul"},"The number of vertices and edges stored in the database"),Object(o.b)("li",{parentName:"ul"},"Event counters (for example number of failed queries or ScanAll operator calls)"),Object(o.b)("li",{parentName:"ul"},"Query module calls*")))),Object(o.b)("p",null,"*",Object(o.b)("strong",{parentName:"p"},"Only the names")," of the query module and procedure are recorded."),Object(o.b)("p",null,"No personal information is sent in the process of collecting telemetry data. Each database generates a unique identifier by which we can group data coming from the same database instance. This unique identifier is in no way connected to other personal information about the user."),Object(o.b)("h2",{id:"why-we-collect-this-data"},"Why we collect this data?"),Object(o.b)("p",null,"Telemetry data is used by Memgraph's developers for the purpose of developing new functionalities and the general maintenance of our products. By analyzing the host machine environment and runtime information, we can further optimize our products to better suit specific user needs."),Object(o.b)("p",null,"For example, if there is a considerable number of users who regularly call  NetworkX query modules, we would invest more resources in the development of similar new features and extending the support for implemented ones."),Object(o.b)("p",null,"As is often the case, we need to prioritize certain goals over others. A data-driven understanding of product usage will help us prioritize features that are more likely to benefit a larger subset of our users."),Object(o.b)("h2",{id:"how-to-disable-telemetry"},"How to disable telemetry?"),Object(o.b)("p",null,"Telemetry is ",Object(o.b)("strong",{parentName:"p"},"completely optional")," and can be fully disabled when starting the database. There are two ways to disable Memgraph's telemetry features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In ",Object(o.b)("inlineCode",{parentName:"li"},"/etc/memgraph/memgraph.conf")," change the line ",Object(o.b)("inlineCode",{parentName:"li"},"--telemetry-enabled=true")," to ",Object(o.b)("inlineCode",{parentName:"li"},"--telemetry-enabled=false"))),Object(o.b)("p",null,"The second approach is more Docker friendly:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Include ",Object(o.b)("inlineCode",{parentName:"li"},"--telemetry-enabled=false")," as a command-line argument when starting the database")),Object(o.b)("h2",{id:"additional-remarks"},"Additional remarks"),Object(o.b)("p",null,"We fully understand the need for user privacy which is why we made the telemetry feature completely optional and provided this article to cultivate transparent communication with the developer community. Your feedback is very much appriciated, and telemtry data is only a way of receving such feedback.\nIf you wish to get in touch with us, you can always send us an email to ",Object(o.b)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"tech@memgraph.com")," or leave a post on our ",Object(o.b)("a",{parentName:"p",href:"https://discourse.memgraph.com/"},"Forum"),"."))}u.isMDXComponent=!0},253:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?n.a.createElement(b,l(l({ref:t},s),{},{components:r})):n.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);