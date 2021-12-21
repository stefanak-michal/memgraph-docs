"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41915],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44604:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause"},s=void 0,p={unversionedId:"import-data/load-csv-clause",id:"version-1.6.0/import-data/load-csv-clause",title:"LOAD CSV Cypher clause",description:"The LOAD CSV clause enables you to load and use data from a CSV file of your",source:"@site/memgraph_versioned_docs/version-1.6.0/import-data/load-csv-clause.md",sourceDirName:"import-data",slug:"/import-data/load-csv-clause",permalink:"/docs/memgraph/1.6.0/import-data/load-csv-clause",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/import-data/load-csv-clause.md",tags:[],version:"1.6.0",frontMatter:{id:"load-csv-clause",title:"LOAD CSV Cypher clause",sidebar_label:"LOAD CSV Cypher clause"},sidebar:"version-1.6.0/memgraph",previous:{title:"CSV Import Tool",permalink:"/docs/memgraph/1.6.0/import-data/csv-import-tool"},next:{title:"Importing Cypher queries",permalink:"/docs/memgraph/1.6.0/import-data/cypherl"}},u=[],c={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause enables you to load and use data from a CSV file of your\nchoosing in a row-based manner, within a query. We support the Excel CSV dialect,\nas it's the most commonly used one."),(0,o.kt)("p",null,"The syntax of the clause is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"LOAD CSV FROM <csv-file-path> ( WITH | NO ) HEADER [IGNORE BAD] [DELIMITER <delimiter-string>] [QUOTE <quote-string>] AS <variable-name>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<csv-file-path")," is a string holding the path to the CSV file. There are no\nrestrictions on where in your filesystem the file can be located, as long as\nthe path is valid (i.e. the file exists).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"( WITH | NO ) HEADER ")," flag specifies whether the CSV file is to be\nparsed as though it has or hasn't got a header.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"IGNORE BAD")," flag specifies whether rows containing errors should be ignored or\nnot. If it's set, the parser attempts to return the first valid row from the CSV\nfile. If it isn't set, an exception will be thrown on first invalid row\nencountered.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DELIMITER <delimiter-string>")," option enables you to specify the CSV delimiter\ncharacter. If it isn't set, the default delimiter character ",(0,o.kt)("inlineCode",{parentName:"p"},",")," is assumed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"QUOTE <quote-string>")," option enables you to specify the CSV quote character.\nIf it isn't set, the default quote character ",(0,o.kt)("inlineCode",{parentName:"p"},'"')," is assumed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<variable-name>")," is a symbolic name representing the variable to which the\ncontents of the parsed row will be bound to, enabling access to the row contents\nlater in the query."))),(0,o.kt)("p",null,"The clause reads row by row from a CSV file, and binds the contents of the\nparsed row to the variable you specified."),(0,o.kt)("p",null,"It's important to note that the parser parses the values as strings. It's up to\nthe user to convert the parsed row values to the appropriate type. This can be\ndone using the built-in conversion functions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ToInteger"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ToFloat"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"ToBoolean")," etc. Consult the documentation on the available conversion functions."),(0,o.kt)("p",null,"Depending on how you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"HEADER")," option (",(0,o.kt)("inlineCode",{parentName:"p"},"WITH")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NO"),"), a row will\nbe parsed as either a map or a list."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"WITH HEADER")," option is set, the very first line in the file will be\nparsed as the header, and any remaining rows will be parsed as regular rows.\nThe value bound to the row variable will be a map of the form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'{ ( "header_field" : "row_value" )? ( , "header_field" : "row_value" )* }\n')),(0,o.kt)("p",null,"To access a given field, you can use the property lookup syntax. Let's assume\nthat the CSV file contents are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"x|y|z\n1|2|3\n4|5|6\n")),(0,o.kt)("p",null,"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "xyz.csv" WITH HEADER DELIMITER "|" AS row\nCREATE (n:A {x: ToInteger(row.x), y: ToInteger(row.y), z: ToInteger(row.z)}) ;\n')),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"NO HEADER")," option is set, then each row is parsed as a list of values.\nThe contents of the row can be accessed using the list index syntax. Note that\nin this mode, there are no restrictions on the number of values a row contains.\nThis isn't recommended, as the user must manually handle the varying number of\nvalues in a row."),(0,o.kt)("p",null,"Let's assume that the CSV file contents are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"1|2|3\n4|5|6\n")),(0,o.kt)("p",null,"The following query will load row by row from the file, and create a new node\nfor each row with properties based on the parsed row values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "xyz.csv" NO HEADER DELIMITER "|" AS row\nCREATE (n:A {x: ToInteger(row[0]), y: ToInteger(row[1]), z: ToInteger(row[2])}) ;\n')),(0,o.kt)("p",null,"The clause can't stand on its own, meaning there has to be at least one more\nclause in the query, in addition to it. In other words, the following query will\nthrow an exception:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "file.csv" WITH HEADER AS row ;\n')),(0,o.kt)("p",null,"On the other hand, the following query is valid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MERGE (n:A) LOAD CSV FROM "file.csv" WITH HEADER AS row ;\n')),(0,o.kt)("p",null,"Note that the row variable doesn't have to be used in any subsequent clause."),(0,o.kt)("p",null,"Also, it's important to note how the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," result exhaustion works. Let's\nassume the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nLOAD CSV FROM "file.csv" WITH HEADER as row\nSET n.p = row ;\n')),(0,o.kt)("p",null,"Let's say the ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' clause finds five nodes, whereas the "file.csv" has\nonly 2 rows. Then only the first two nodes returned by the ',(0,o.kt)("inlineCode",{parentName:"p"},"MATCH (n)")," will have\ntheir properties set, using the two rows from the file.\nSimilarly, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' clause finds two nodes, whereas the "file.csv" has\nfive rows, the two nodes returned by ',(0,o.kt)("inlineCode",{parentName:"p"},"MATCH (n)"),' will have their properties\nset with values from the first two rows of the file.\nIn general, the clause that exhausts its results sooner will dictate how many\ntimes the "loop" will be executed.'),(0,o.kt)("p",null,"Finally, note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clause can be used at most once per query.\nTrying to use multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"LOAD CSV")," clauses within a single query will throw an exception.\nIn other words, queries such as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'LOAD CSV FROM "x.csv" WITH HEADER as x\nLOAD CSV FROM "y.csv" WITH HEADER as y\nCREATE (n:A { p1 : x, p2 : y });\n')),(0,o.kt)("p",null,"are invalid."))}h.isMDXComponent=!0}}]);