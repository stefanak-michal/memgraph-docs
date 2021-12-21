"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89150],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57126:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"load-csv",title:"LOAD CSV clause",sidebar_label:"LOAD CSV"},s=void 0,c={unversionedId:"clauses/load-csv",id:"clauses/load-csv",title:"LOAD CSV clause",description:"The LOAD CSV clause enables you to load and use data from a CSV file of your",source:"@site/cypher-manual/clauses/load-csv.md",sourceDirName:"clauses",slug:"/clauses/load-csv",permalink:"/docs/cypher-manual/clauses/load-csv",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/load-csv.md",tags:[],version:"current",frontMatter:{id:"load-csv",title:"LOAD CSV clause",sidebar_label:"LOAD CSV"},sidebar:"cypher_manual",previous:{title:"DELETE",permalink:"/docs/cypher-manual/clauses/delete"},next:{title:"MATCH",permalink:"/docs/cypher-manual/clauses/match"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause enables you to load and use data from a CSV file of your\nchoosing in a row-based manner within a query. We support the Excel CSV dialect,\nas it's the most commonly used one."),(0,o.kt)("p",null,"The syntax of the clause is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"LOAD CSV FROM <csv-file-path> ( WITH | NO ) HEADER [IGNORE BAD] [DELIMITER <delimiter-string>] [QUOTE <quote-string>] AS <variable-name>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<csv-file-path>")," is a string holding the path to the CSV file. There are no\nrestrictions on where in your filesystem the file can be located, as long as\nthe path is valid (i.e., the file exists).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"( WITH | NO ) HEADER ")," flag specifies whether the CSV file is to be parsed as\nthough it has or hasn't got a header.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"IGNORE BAD")," flag specifies whether rows containing errors should be ignored\nor not. If it's set, the parser attempts to return the first valid row from\nthe CSV file. If it isn't set, an exception will be thrown on the first\ninvalid row encountered.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DELIMITER <delimiter-string>")," option enables you to specify the CSV delimiter\ncharacter. If it isn't set, the default delimiter character ",(0,o.kt)("inlineCode",{parentName:"p"},",")," is assumed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"QUOTE <quote-string>")," option enables you to specify the CSV quote character.\nIf it isn't set, the default quote character ",(0,o.kt)("inlineCode",{parentName:"p"},'"')," is assumed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<variable-name>")," is a symbolic name representing the variable to which the\ncontents of the parsed row will be bound to, enabling access to the row\ncontents later in the query."))),(0,o.kt)("p",null,"The clause reads row by row from a CSV file and binds the contents of the parsed\nrow to the variable you specified."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's important to note that the parser parses the values as strings.\nIt's up to the user to convert the parsed row values to the appropriate type.\nThis can be done using the built-in conversion functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ToInteger"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"ToFloat"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ToBoolean")," etc. Consult the ",(0,o.kt)("a",{parentName:"p",href:"/docs/cypher-manual/functions"},"documentation")," on the\navailable conversion functions."))))}m.isMDXComponent=!0}}]);