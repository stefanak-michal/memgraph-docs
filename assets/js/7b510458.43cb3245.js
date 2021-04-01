(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(324)),i={id:"existence-constraint",title:"Existence constraint",sidebar_label:"Existence constraint"},s={unversionedId:"database-functionalities/constraints/existence-constraint",id:"version-1.3.0/database-functionalities/constraints/existence-constraint",isDocsHomePage:!1,title:"Existence constraint",description:"Existence constraint enforces that each vertex that has a specific label",source:"@site/memgraph_versioned_docs/version-1.3.0/database-functionalities/constraints/existence-constraint.md",slug:"/database-functionalities/constraints/existence-constraint",permalink:"/memgraph/1.3.0/database-functionalities/constraints/existence-constraint",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/database-functionalities/constraints/existence-constraint.md",version:"1.3.0",sidebar_label:"Existence constraint",sidebar:"version-1.3.0/memgraph",previous:{title:"Making a backup",permalink:"/memgraph/1.3.0/reference-guide/backup"},next:{title:"Uniqueness constraint",permalink:"/memgraph/1.3.0/database-functionalities/constraints/uniqueness-constraint"}},c=[{value:"Where to next?",id:"where-to-next",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Existence constraint enforces that each vertex that has a specific ",Object(o.b)("inlineCode",{parentName:"p"},"label"),"\nalso must have the specified ",Object(o.b)("inlineCode",{parentName:"p"},"property"),". Only one label and property can be\nsupplied at a time.  This constraint can be enforced using the following\nlanguage construct:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:label) ASSERT exists (n.property);\n")),Object(o.b)("p",null,"For example, suppose you are keeping track of basic employee info in your\ndatabase. Obviously, each employee should have a first name and last name. You\ncan enforce this by issuing the following queries:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT exists (n.first_name);\nCREATE CONSTRAINT ON (n:Employee) ASSERT exists (n.last_name);\n")),Object(o.b)("p",null,"You can confirm that your constraint was successfully created by issuing the\nfollowing query:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"SHOW CONSTRAINT INFO;\n")),Object(o.b)("p",null,"You should get a result similar to this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| exists          | Employee        | first_name      |\n| exists          | Employee        | last_name       |\n+-----------------+-----------------+-----------------+\n")),Object(o.b)("p",null,"Trying to modify the database in a way that violates the constraint will\nyield an error."),Object(o.b)("p",null,"Constraints can also be dropped using the ",Object(o.b)("inlineCode",{parentName:"p"},"DROP")," keyword. For example,\ndropping the previously created constraints can be done by the following\nquery:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"DROP CONSTRAINT ON (n:Employee) ASSERT exists (n.first_name);\nDROP CONSTRAINT ON (n:Employee) ASSERT exists (n.last_name);\n")),Object(o.b)("p",null,"Now, ",Object(o.b)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields an empty set."),Object(o.b)("h2",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"To learn more about Memgraph's functionalities, visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/1.3.0/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/1.3.0/tutorials/tutorials"},"Tutorials")),"."))}p.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);