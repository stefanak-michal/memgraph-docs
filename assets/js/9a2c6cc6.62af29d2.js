(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44680],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42393:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"existence-constraint",title:"Existence constraint",sidebar_label:"Existence constraint"},c=void 0,l={unversionedId:"database-functionalities/constraints/existence-constraint",id:"version-1.5.0/database-functionalities/constraints/existence-constraint",isDocsHomePage:!1,title:"Existence constraint",description:"Existence constraint enforces that each vertex that has a specific label",source:"@site/memgraph_versioned_docs/version-1.5.0/database-functionalities/constraints/existence-constraint.md",sourceDirName:"database-functionalities/constraints",slug:"/database-functionalities/constraints/existence-constraint",permalink:"/memgraph/1.5.0/database-functionalities/constraints/existence-constraint",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/database-functionalities/constraints/existence-constraint.md",version:"1.5.0",frontMatter:{id:"existence-constraint",title:"Existence constraint",sidebar_label:"Existence constraint"},sidebar:"version-1.5.0/memgraph",previous:{title:"Memory control",permalink:"/memgraph/1.5.0/database-functionalities/memory-control"},next:{title:"Uniqueness constraint",permalink:"/memgraph/1.5.0/database-functionalities/constraints/uniqueness-constraint"}},p=[{value:"Where to next?",id:"where-to-next",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Existence constraint enforces that each vertex that has a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"label"),"\nalso must have the specified ",(0,o.kt)("inlineCode",{parentName:"p"},"property"),". Only one label and property can be\nsupplied at a time.  This constraint can be enforced using the following\nlanguage construct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:label) ASSERT exists (n.property);\n")),(0,o.kt)("p",null,"For example, suppose you are keeping track of basic employee info in your\ndatabase. Obviously, each employee should have a first name and last name. You\ncan enforce this by issuing the following queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT exists (n.first_name);\nCREATE CONSTRAINT ON (n:Employee) ASSERT exists (n.last_name);\n")),(0,o.kt)("p",null,"You can confirm that your constraint was successfully created by issuing the\nfollowing query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW CONSTRAINT INFO;\n")),(0,o.kt)("p",null,"You should get a result similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| exists          | Employee        | first_name      |\n| exists          | Employee        | last_name       |\n+-----------------+-----------------+-----------------+\n")),(0,o.kt)("p",null,"Trying to modify the database in a way that violates the constraint will\nyield an error."),(0,o.kt)("p",null,"Constraints can also be dropped using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DROP")," keyword. For example,\ndropping the previously created constraints can be done by the following\nquery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP CONSTRAINT ON (n:Employee) ASSERT exists (n.first_name);\nDROP CONSTRAINT ON (n:Employee) ASSERT exists (n.last_name);\n")),(0,o.kt)("p",null,"Now, ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields an empty set."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.5.0/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.5.0/tutorials/tutorials"},"Tutorials")),"."))}m.isMDXComponent=!0}}]);