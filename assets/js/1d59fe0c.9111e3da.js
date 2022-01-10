"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7749],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47521:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),s=["components"],o={id:"clauses",title:"Cypher clauses overview",sidebar_label:"Clauses overview",slug:"/clauses"},i=void 0,c={unversionedId:"clauses/clauses",id:"clauses/clauses",title:"Cypher clauses overview",description:"The Cypher language enables users to perform standard database operations by using the following clauses:",source:"@site/cypher-manual/clauses/clauses.md",sourceDirName:"clauses",slug:"/clauses",permalink:"/docs/cypher-manual/clauses",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/clauses.md",tags:[],version:"current",frontMatter:{id:"clauses",title:"Cypher clauses overview",sidebar_label:"Clauses overview",slug:"/clauses"},sidebar:"cypher_manual",previous:{title:"Functions",permalink:"/docs/cypher-manual/functions"},next:{title:"CREATE",permalink:"/docs/cypher-manual/clauses/create"}},u=[],p={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Cypher")," language enables users to perform standard database operations by using the following clauses:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/match"},(0,l.kt)("inlineCode",{parentName:"a"},"MATCH")),", which searches for patterns;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/where"},(0,l.kt)("inlineCode",{parentName:"a"},"WHERE")),", for filtering the matched data;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/return"},(0,l.kt)("inlineCode",{parentName:"a"},"RETURN")),", for defining what will be presented to the user in the result set;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/union"},(0,l.kt)("inlineCode",{parentName:"a"},"UNION"))," and ",(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/union"},(0,l.kt)("inlineCode",{parentName:"a"},"UNION ALL"))," for combining results from multiple queries;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/create"},(0,l.kt)("inlineCode",{parentName:"a"},"CREATE")),", for creating new nodes and edges;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/set"},(0,l.kt)("inlineCode",{parentName:"a"},"SET")),", for adding new or updating existing labels and properties;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/delete"},(0,l.kt)("inlineCode",{parentName:"a"},"DELETE")),", for deleting nodes and edges;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/remove"},(0,l.kt)("inlineCode",{parentName:"a"},"REMOVE")),", for removing labels and properties;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/merge"},(0,l.kt)("inlineCode",{parentName:"a"},"MERGE")),", for creating patterns if they do not exist;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/with"},(0,l.kt)("inlineCode",{parentName:"a"},"WITH")),", for combining multiple reads and writes."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cypher-manual/clauses/load-csv"},(0,l.kt)("inlineCode",{parentName:"a"},"LOAD CSV")),", for loading CSV data")))}m.isMDXComponent=!0}}]);