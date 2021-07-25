(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83495],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return g},kt:function(){return u}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},g=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),c=l(r),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return r?n.createElement(h,i(i({ref:e},g),{},{components:r})):n.createElement(h,i({ref:e},g))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=c;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},20981:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return g},default:function(){return c}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],p={id:"getting-started",title:"Where to start?",sidebar_label:"Where to start?",slug:"/getting-started"},s=void 0,l={unversionedId:"getting-started/getting-started",id:"version-1.3.0/getting-started/getting-started",isDocsHomePage:!1,title:"Where to start?",description:"We recommend exploring some of these topics to get acquainted with Memgraph:",source:"@site/memgraph_versioned_docs/version-1.3.0/getting-started/getting-started.md",sourceDirName:"getting-started",slug:"/getting-started",permalink:"/memgraph/1.3.0/getting-started",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/getting-started/getting-started.md",version:"1.3.0",frontMatter:{id:"getting-started",title:"Where to start?",sidebar_label:"Where to start?",slug:"/getting-started"},sidebar:"version-1.3.0/memgraph",previous:{title:"Overview",permalink:"/memgraph/1.3.0/overview"},next:{title:"Installation overview",permalink:"/memgraph/1.3.0/getting-started/installation"}},g=[{value:"Getting help",id:"getting-help",children:[]}],m={toc:g};function c(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We recommend exploring some of these topics to get acquainted with Memgraph:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/installation"},"Install Memgraph"))," or try out ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://memgraph.com/product/cloud"},"Memgraph Cloud"))),(0,o.kt)("li",{parentName:"ul"},"Learn how to ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/querying"},"query the database"))),(0,o.kt)("li",{parentName:"ul"},"Play with the Cypher language in ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))),(0,o.kt)("li",{parentName:"ul"},"Build an application with Memgraph in one of our supported languages and frameworks",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/connecting-applications/python"},"Python"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/connecting-applications/rust"},"Rust"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/connecting-applications/c-sharp"},"C#"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/connecting-applications/java"},"Java"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/connecting-applications/go"},"Go"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-started/connecting-applications/javascript"},"JavaScript")))))),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discourse.memgraph.com/"},"Memgraph Forum"))," - The Memgraph community forum is the best place to get fast and accurate answers from both our team and other Memgraph developers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://stackoverflow.com/questions/tagged/memgraphdb"},"StackOverflow"))," - You can always post a question on StackOverflow with the tag ",(0,o.kt)("strong",{parentName:"p"},"memgraphdb"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://airtable.com/shrcmWpvn74kudboV"},"Support Page"))," - You can create a support ticket if you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"need to report a bug or a technical issue"),(0,o.kt)("li",{parentName:"ul"},"have a feature request or suggestion for us"),(0,o.kt)("li",{parentName:"ul"},"need information that is not present in our documentation"),(0,o.kt)("li",{parentName:"ul"},"have any other kind of technical inquiry.")),(0,o.kt)("p",null,"You can also always email us at ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:tech@memgraph.com"},"tech@memgraph.com")),"."))}c.isMDXComponent=!0}}]);