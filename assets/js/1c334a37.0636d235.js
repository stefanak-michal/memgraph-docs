(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52918],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93964:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],s={id:"uniqueness-constraint",title:"Uniqueness constraint",sidebar_label:"Uniqueness constraint"},l=void 0,u={unversionedId:"database-functionalities/constraints/uniqueness-constraint",id:"database-functionalities/constraints/uniqueness-constraint",isDocsHomePage:!1,title:"Uniqueness constraint",description:"Uniqueness constraint enforces that each label, property_set pair is unique.",source:"@site/docs/database-functionalities/constraints/uniqueness-constraint.md",sourceDirName:"database-functionalities/constraints",slug:"/database-functionalities/constraints/uniqueness-constraint",permalink:"/memgraph/next/database-functionalities/constraints/uniqueness-constraint",editUrl:"https://github.com/memgraph/docs/tree/master/docs/database-functionalities/constraints/uniqueness-constraint.md",version:"current",frontMatter:{id:"uniqueness-constraint",title:"Uniqueness constraint",sidebar_label:"Uniqueness constraint"},sidebar:"memgraph",previous:{title:"Existence constraint",permalink:"/memgraph/next/database-functionalities/constraints/existence-constraint"},next:{title:"Inspecting queries",permalink:"/memgraph/next/database-functionalities/inspecting-queries"}},c=[{value:"Where to next?",id:"where-to-next",children:[]}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Uniqueness constraint enforces that each ",(0,i.kt)("inlineCode",{parentName:"p"},"label, property_set")," pair is unique.\nThis constraint can be enforced using the following language construct:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:label) ASSERT n.property1, n.property2, ..., IS UNIQUE;\n")),(0,i.kt)("p",null,"For example, suppose you are keeping track of basic employee info in your\ndatabase. Obviously, each employee should have a unique e-mail address. You can\nenforce this by issuing the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\n")),(0,i.kt)("p",null,"You can confirm that your constraint was successfully created by issuing the\nfollowing query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW CONSTRAINT INFO;\n")),(0,i.kt)("p",null,"You should get a result similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n+-----------------+-----------------+-----------------+\n")),(0,i.kt)("p",null,"Trying to modify the database in a way that violates the constraint will yield\nan error ",(0,i.kt)("inlineCode",{parentName:"p"},"Unable to commit due to unique constraint violation on\n:Employee(email)"),"."),(0,i.kt)("p",null,"Naturally, you can also specify multiple properties when creating uniqueness\nconstraints. For example, we might want to enforce that all employees have a\nunique ",(0,i.kt)("inlineCode",{parentName:"p"},"(name, surname)")," pair (obviously, this would be a bad decision in real\nlife). This can be achieved by the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),(0,i.kt)("p",null,"At this point, ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields the following result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+-----------------+-----------------+-----------------+\n| constraint type | label           | properties      |\n+-----------------+-----------------+-----------------+\n| unique          | Employee        | email           |\n| unique          | Employee        | name, surname   |\n+-----------------+-----------------+-----------------+\n")),(0,i.kt)("p",null,"Constraints can also be dropped using the ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP")," keyword. For example,\ndropping the previously created constraints can be done by the following\nquery:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;\nDROP CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;\n")),(0,i.kt)("p",null,"Now, ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW CONSTRAINT INFO;")," yields an empty set."),(0,i.kt)("h3",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/next/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/next/tutorials"},"Tutorials")),"."))}m.isMDXComponent=!0}}]);