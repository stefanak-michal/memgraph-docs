"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23535],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2604:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"uniqueness-constraint",title:"Uniqueness constraint",sidebar_label:"Uniqueness constraint"},l=void 0,u={unversionedId:"database-functionalities/constraints/uniqueness-constraint",id:"version-2.0.0/database-functionalities/constraints/uniqueness-constraint",title:"Uniqueness constraint",description:"Uniqueness constraint enforces that each label, property_set pair is unique.",source:"@site/memgraph_versioned_docs/version-2.0.0/database-functionalities/constraints/uniqueness-constraint.md",sourceDirName:"database-functionalities/constraints",slug:"/database-functionalities/constraints/uniqueness-constraint",permalink:"/docs/memgraph/2.0.0/database-functionalities/constraints/uniqueness-constraint",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/database-functionalities/constraints/uniqueness-constraint.md",tags:[],version:"2.0.0",frontMatter:{id:"uniqueness-constraint",title:"Uniqueness constraint",sidebar_label:"Uniqueness constraint"},sidebar:"version-2.0.0/memgraph",previous:{title:"Existence constraint",permalink:"/docs/memgraph/2.0.0/database-functionalities/constraints/existence-constraint"},next:{title:"Inspecting queries",permalink:"/docs/memgraph/2.0.0/database-functionalities/inspecting-queries"}},c=[{value:"Where to next?",id:"where-to-next",children:[],level:3}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Uniqueness constraint enforces that each ",(0,o.kt)("inlineCode",{parentName:"p"},"label, property_set")," pair is unique.\nThis constraint can be enforced using the following language construct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:label) ASSERT n.property1, n.property2, ..., IS UNIQUE;\n")),(0,o.kt)("p",null,"For example, suppose you are keeping track of basic employee info in your\ndatabase. Obviously, each employee should have a unique e-mail address. You can\nenforce this by issuing the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\n")),(0,o.kt)("p",null,"You can confirm that your constraint was successfully created by issuing the\nfollowing query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW CONSTRAINT INFO;\n")),(0,o.kt)("p",null,"You should get a result similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n+-----------------+-----------------+-----------------+\n")),(0,o.kt)("p",null,"Trying to modify the database in a way that violates the constraint will yield\nan error ",(0,o.kt)("inlineCode",{parentName:"p"},"Unable to commit due to unique constraint violation on\n:Employee(email)"),"."),(0,o.kt)("p",null,"Naturally, you can also specify multiple properties when creating uniqueness\nconstraints. For example, we might want to enforce that all employees have a\nunique ",(0,o.kt)("inlineCode",{parentName:"p"},"(name, surname)")," pair (obviously, this would be a bad decision in real\nlife). This can be achieved by the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),(0,o.kt)("p",null,"At this point, ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields the following result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n| unique          | Employee        | name, surname   |\n+-----------------+-----------------+-----------------+\n")),(0,o.kt)("p",null,"Constraints can also be dropped using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DROP")," keyword. For example,\ndropping the previously created constraints can be done by the following\nquery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\nDROP CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),(0,o.kt)("p",null,"Now, ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields an empty set."),(0,o.kt)("h3",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/tutorials"},"Tutorials")),"."))}m.isMDXComponent=!0}}]);