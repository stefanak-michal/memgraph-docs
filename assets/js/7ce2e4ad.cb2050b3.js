"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2210],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52220:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"map-nodes-and-relationships",title:"How to map nodes and relationships",sidebar_label:"Map nodes and relationships"},p=void 0,l={unversionedId:"how-to-guides/ogm/map-nodes-and-relationships",id:"how-to-guides/ogm/map-nodes-and-relationships",title:"How to map nodes and relationships",description:"This guide will teach you how to map Python classes to nodes and relationships",source:"@site/gqlalchemy/how-to-guides/ogm/map-nodes-and-relationships.md",sourceDirName:"how-to-guides/ogm",slug:"/how-to-guides/ogm/map-nodes-and-relationships",permalink:"/docs/gqlalchemy/how-to-guides/ogm/map-nodes-and-relationships",editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/how-to-guides/ogm/map-nodes-and-relationships.md",tags:[],version:"current",frontMatter:{id:"map-nodes-and-relationships",title:"How to map nodes and relationships",sidebar_label:"Map nodes and relationships"},sidebar:"gqlalchemy",previous:{title:"How-to guides overview",permalink:"/docs/gqlalchemy/how-to-guides"},next:{title:"Save nodes and relationships",permalink:"/docs/gqlalchemy/how-to-guides/ogm/save-nodes-and-relationships"}},d=[],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will teach you how to map Python classes to nodes and relationships\nin a graph database. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Make sure you have a running Memgraph instance. If you're not sure how to run\nMemgraph, check out the Memgraph ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/#quick-start"},"Quick start"),".")),(0,o.kt)("p",null,"First, do all necessary imports and create an instance of the database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from gqlalchemy import Memgraph, Node, Relationship, Field\nfrom datetime import datetime\n")),(0,o.kt)("p",null,"After that, you instantiate Memgraph and create a class representing your nodes\nand relationships. You are creating ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Streamer")," node, where every\n",(0,o.kt)("inlineCode",{parentName:"p"},"Streamer")," is also a ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),", but not every ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Streamer"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"db = Memgraph()\n\nclass User(Node):\n    id: str = Field(index=True, exist=True, unique=True, db=db)\n\nclass Streamer(User):\n    id: str = Field(index=True, exist=True, unique=True, db=db)\n    username: Optional[str] = Field(index=True, exist=True, unique=True, db=db)\n    url: Optional[str] = Field()\n    followers: Optional[int] = Field()\n    createdAt: Optional[str] = Field()\n    totalViewCount: Optional[int] = Field()\n    description: Optional[str]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Node")," is a Python class that maps to a graph object in Memgraph. ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"Streamer")," are classes which inherit from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," and they map to a label in\ngraph database. Class ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," maps to a singe ",(0,o.kt)("inlineCode",{parentName:"p"},":User")," label, while class\n",(0,o.kt)("inlineCode",{parentName:"p"},"Streamer")," maps to multiple label ",(0,o.kt)("inlineCode",{parentName:"p"},":Streamer:User"),", since it also inherits the\n",(0,o.kt)("inlineCode",{parentName:"p"},"User")," class. If you create a node with the label ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),", that node has a\nproperty ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", which is indexed and a unique string. With the help of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Field()")," we are defining those constraints on the properties and defining to\nwhich database that property will be saved. Notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"description"),"\nproperty has no ",(0,o.kt)("inlineCode",{parentName:"p"},"Field()")," function. That means that ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," won't be saved\nto the database."),(0,o.kt)("p",null,"In a similar way, you can create a relationship:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class ChatsWith(Relationship, type="CHATS_WITH"):\n    lastChatted: Optional[datetime.datetime] = Field() \n')),(0,o.kt)("p",null,"Now you have created a relationship of type ",(0,o.kt)("inlineCode",{parentName:"p"},"CHATS_WITH"),". This relationship has\nproperty ",(0,o.kt)("inlineCode",{parentName:"p"},"lastChatted"),", which is optional. If you want to create a relationship\nwithout any properties, you can do that with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class ChatsWith(Relationship, type="CHATS_WITH"):\n    pass\n')),(0,o.kt)("p",null,"Hopefully this guide has taught you how to map nodes and relationships. If you\nhave any more questions, join our community and ping us on\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord"),"."))}c.isMDXComponent=!0}}]);