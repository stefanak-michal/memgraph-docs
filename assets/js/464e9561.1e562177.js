"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25698],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),u=o,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67477:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=["components"],i={id:"load-json",title:"Loading from JSON format",sidebar_label:"JSON",pagination_prev:"import-data/overview"},s=void 0,m={unversionedId:"import-data/json/load-json",id:"version-2.1.1/import-data/json/load-json",title:"Loading from JSON format",description:"A JSON file is a file that stores simple data structures and objects in",source:"@site/memgraph_versioned_docs/version-2.1.1/import-data/json/load-json.md",sourceDirName:"import-data/json",slug:"/import-data/json/load-json",permalink:"/docs/memgraph/2.1.1/import-data/json/load-json",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/import-data/json/load-json.md",tags:[],version:"2.1.1",frontMatter:{id:"load-json",title:"Loading from JSON format",sidebar_label:"JSON",pagination_prev:"import-data/overview"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/2.1.1/import-data"},next:{title:"Tutorials overview",permalink:"/docs/memgraph/2.1.1/tutorials"}},p={},d=[{value:"Examples",id:"examples",level:2},{value:"Load JSON from a local file",id:"load-json-from-a-local-file",level:3},{value:"Load JSON from a remote address",id:"load-json-from-a-remote-address",level:3}],c={toc:d};function u(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A JSON file is a file that stores simple data structures and objects in\nJavaScript Object Notation format, which is a standard data interchange format.\nThe data you want to import to the database is often saved in JSON format, and\nyou might want to import parts of that data as graph objects - nodes or\nrelationships."),(0,r.kt)("p",null,"Below, you can find two examples of how to use the load JSON methods depending\non the data source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#load-json-from-a-local-file"},"Load JSON from a local file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#load-json-from-a-remote-address"},"Load JSON from a remote address"))),(0,r.kt)("p",null,"The above methods are procedures of query module implemented in MAGE (Memgraph Advanced\nGraph Extensions) and you can read more about them in the ",(0,r.kt)("a",{parentName:"p",href:"/mage/query-modules/python/json-util"},"MAGE\ndocumentation"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To be able to call JSON load procedures, you need to install MAGE and load\nquery modules. To learn how to do that, check out the ",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-query-module"},"Run a query module")," how-to guide.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"load-json-from-a-local-file"},"Load JSON from a local file"),(0,r.kt)("p",null,"Let's import a simple JSON file into Memgraph."),(0,r.kt)("p",null,"Create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json")," with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "first_name": "Jessica",\n  "last_name": "Rabbit",\n  "pets": ["dog", "cat", "bird"]\n}\n')),(0,r.kt)("p",null,"Next, let's say you want to create a node with the label ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"first_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"last_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pets")," as properties. You can run the following\nquery:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL json_util.load_from_path("path/to/data.json")\nYIELD objects\nUNWIND objects AS o\nCREATE (:Person {first_name: o.first_name, last_name: o.last_name, pets: o.pets});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"After you execute the above query, the graph in Memgraph should look like this:"),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(76063).Z}))),(0,r.kt)("h3",{id:"load-json-from-a-remote-address"},"Load JSON from a remote address"),(0,r.kt)("p",null,"Similarly, you can import JSON files from a remote address."),(0,r.kt)("p",null,"For example, at ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://download.memgraph.com/asset/mage/data.json"'),", you can\nfind the following ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "first_name": "James",\n  "last_name": "Bond",\n  "pets": ["dog", "cat", "fish"]\n}\n')),(0,r.kt)("p",null,"Next, let's say you want to create a node with the label ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"first_name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"last_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pets")," as properties from the ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json")," file.\nYou can run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL json_util.load_from_url("https://download.memgraph.com/asset/mage/data.json")\nYIELD objects\nUNWIND objects AS o\nCREATE (:Person {first_name: o.first_name, last_name: o.last_name, pets: o.pets});\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"After you run the above query, the graph in Memgraph should look like this:"),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(53589).Z}))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To load JSON files from another local or remote location, just replace the\nargument of the procedure with the appropriate path or URL. If you want to\ncreate a different kind of graph, you need to change the query accordingly. To\nlearn more about querying, check out the ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."))))}u.isMDXComponent=!0},76063:function(e,t,a){t.Z=a.p+"assets/images/load_json_from_path-cd0c47fff320681902646cd494e63ef4.png"},53589:function(e,t,a){t.Z=a.p+"assets/images/load_json_from_url-9fa43d2bb5e1f494536f12e3c6eb6550.png"}}]);