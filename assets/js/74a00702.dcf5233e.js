"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88905],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=c,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:c,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),c=n(63366),a=(n(67294),n(3905)),o=["components"],l={sidebar_label:"connection",title:"gqlalchemy.connection"},i=void 0,u={unversionedId:"reference/connection",id:"reference/connection",title:"gqlalchemy.connection",description:"Connection Objects",source:"@site/gqlalchemy/reference/connection.md",sourceDirName:"reference",slug:"/reference/connection",permalink:"/docs/gqlalchemy/reference/connection",editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/reference/connection.md",tags:[],version:"current",frontMatter:{sidebar_label:"connection",title:"gqlalchemy.connection"},sidebar:"gqlalchemy",previous:{title:"Reference",permalink:"/docs/gqlalchemy/reference"},next:{title:"disk_storage",permalink:"/docs/gqlalchemy/reference/disk_storage"}},s=[{value:"Connection Objects",id:"connection-objects",children:[{value:"execute",id:"execute",children:[],level:4},{value:"execute_and_fetch",id:"execute_and_fetch",children:[],level:4},{value:"is_active",id:"is_active",children:[],level:4},{value:"create",id:"create",children:[],level:4}],level:2},{value:"MemgraphConnection Objects",id:"memgraphconnection-objects",children:[{value:"execute",id:"execute-1",children:[],level:4},{value:"execute_and_fetch",id:"execute_and_fetch-1",children:[],level:4},{value:"is_active",id:"is_active-1",children:[],level:4}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,c.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"connection-objects"},"Connection Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Connection(ABC)\n")),(0,a.kt)("h4",{id:"execute"},"execute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef execute(query: str) -> None\n")),(0,a.kt)("p",null,"Executes Cypher query without returning any results."),(0,a.kt)("h4",{id:"execute_and_fetch"},"execute","_","and","_","fetch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef execute_and_fetch(query: str) -> Iterator[Dict[str, Any]]\n")),(0,a.kt)("p",null,"Executes Cypher query and returns iterator of results."),(0,a.kt)("h4",{id:"is_active"},"is","_","active"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef is_active() -> bool\n")),(0,a.kt)("p",null,"Returns True if connection is active and can be used"),(0,a.kt)("h4",{id:"create"},"create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@staticmethod\ndef create(**kwargs) -> "Connection"\n')),(0,a.kt)("p",null,"Creates an instance of a connection."),(0,a.kt)("h2",{id:"memgraphconnection-objects"},"MemgraphConnection Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class MemgraphConnection(Connection)\n")),(0,a.kt)("h4",{id:"execute-1"},"execute"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def execute(query: str) -> None\n")),(0,a.kt)("p",null,"Executes Cypher query without returning any results."),(0,a.kt)("h4",{id:"execute_and_fetch-1"},"execute","_","and","_","fetch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def execute_and_fetch(query: str) -> Iterator[Dict[str, Any]]\n")),(0,a.kt)("p",null,"Executes Cypher query and returns iterator of results."),(0,a.kt)("h4",{id:"is_active-1"},"is","_","active"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def is_active() -> bool\n")),(0,a.kt)("p",null,"Returns True if connection is active and can be used"))}d.isMDXComponent=!0}}]);