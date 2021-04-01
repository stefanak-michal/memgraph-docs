(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{297:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),o=(a(0),a(324)),i={id:"storage",title:"Storage",sidebar_label:"Storage"},l={unversionedId:"concepts/storage",id:"version-1.3.0/concepts/storage",isDocsHomePage:!1,title:"Storage",description:"Durability and Data Recovery",source:"@site/memgraph_versioned_docs/version-1.3.0/concepts/storage.md",slug:"/concepts/storage",permalink:"/memgraph/1.3.0/concepts/storage",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/concepts/storage.md",version:"1.3.0",sidebar_label:"Storage",sidebar:"version-1.3.0/memgraph",previous:{title:"Concepts",permalink:"/memgraph/1.3.0/concepts"},next:{title:"Graph algorithms",permalink:"/memgraph/1.3.0/concepts/graph-algorithms"}},p=[{value:"Durability and Data Recovery",id:"durability-and-data-recovery",children:[]},{value:"Storable Data Types",id:"storable-data-types",children:[{value:"Node Labels &amp; Edge Types",id:"node-labels--edge-types",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Properties on edges",id:"properties-on-edges",children:[]},{value:"Storage Statistics",id:"storage-statistics",children:[]}]}],s={toc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"durability-and-data-recovery"},"Durability and Data Recovery"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Memgraph")," uses two mechanisms to ensure the durability of the stored data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"write-ahead logging (WAL) and"),Object(o.b)("li",{parentName:"ul"},"taking periodic snapshots.")),Object(o.b)("p",null,"Write-ahead logging works by logging all database modifications to a file.\nThis ensures that all operations are done atomically and provides a trace of\nsteps needed to reconstruct the database state."),Object(o.b)("p",null,"Snapshots are taken periodically during the entire runtime of ",Object(o.b)("em",{parentName:"p"},"Memgraph"),". When\na snapshot is triggered, the whole data storage is written to disk. The\nsnapshot file provides a quicker way to restore the database state."),Object(o.b)("p",null,"Database recovery is done on startup from the most recently found snapshot\nfile. Since the snapshot may be older than the most recent update logged in\nthe WAL file, the recovery process will apply the remaining state changes\nfound in the said WAL file."),Object(o.b)("p",null,"NOTE: Snapshot and WAL files are not (currently) compatible between ",Object(o.b)("em",{parentName:"p"},"Memgraph"),"\nversions."),Object(o.b)("p",null,"Behaviour of the above mechanisms can be tweaked in the configuration file,\nusually found in ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),"."),Object(o.b)("p",null,"In addition to the above mentioned data durability and recovery, a snapshot\nfile may be generated using ",Object(o.b)("em",{parentName:"p"},"Memgraph's")," import tools. For more information,\ntake a look at the ",Object(o.b)("a",{parentName:"p",href:"/memgraph/1.3.0/database-functionalities/import-data"},"Import data"),"\nguide."),Object(o.b)("h2",{id:"storable-data-types"},"Storable Data Types"),Object(o.b)("p",null,"Since ",Object(o.b)("em",{parentName:"p"},"Memgraph")," is a ",Object(o.b)("em",{parentName:"p"},"graph")," database management system, data is stored in\nthe form of graph elements: nodes and edges. Each graph element can also\ncontain various types of data. This chapter describes which data types are\nsupported in ",Object(o.b)("em",{parentName:"p"},"Memgraph"),"."),Object(o.b)("h3",{id:"node-labels--edge-types"},"Node Labels & Edge Types"),Object(o.b)("p",null,"Each node can have any number of labels. A label is a text value, which can be\nused to ",Object(o.b)("em",{parentName:"p"},"label")," or group nodes according to users' desires. A user can change\nlabels at any time. Similarly to labels, each edge can have a type,\nrepresented as text. Unlike nodes, which can have multiple labels or none at\nall, edges ",Object(o.b)("em",{parentName:"p"},"must")," have exactly one edge type. Another difference to labels, is\nthat the edge types are set upon creation and never modified again."),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("p",null,"Nodes and edges can store various properties. These are like mappings or\ntables containing property names and their accompanying values. Property names\nare represented as text, while values can be of different types. Each property\nname can store a single value, it is not possible to have multiple properties\nwith the same name on a single graph element. Naturally, the same property\nnames can be found across multiple graph elements. Also, there are no\nrestrictions on the number of properties that can be stored in a single graph\nelement. The only restriction is that the values must be of the supported\ntypes. Following is a table of supported data types."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"Null")),Object(o.b)("td",{parentName:"tr",align:null},"Denotes that the property has no value. This is the same as if the property does not exist.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"String")),Object(o.b)("td",{parentName:"tr",align:null},"A character string, i.e. text.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"Boolean")),Object(o.b)("td",{parentName:"tr",align:null},"A boolean value, either ",Object(o.b)("inlineCode",{parentName:"td"},"true")," or ",Object(o.b)("inlineCode",{parentName:"td"},"false"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"Integer")),Object(o.b)("td",{parentName:"tr",align:null},"An integer number.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"Float")),Object(o.b)("td",{parentName:"tr",align:null},"A floating-point number, i.e. a real number.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"List")),Object(o.b)("td",{parentName:"tr",align:null},"A list containing any number of property values of any supported type. It can be used to store multiple values under a single property name.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"Map")),Object(o.b)("td",{parentName:"tr",align:null},"A mapping of string keys to values of any supported type.")))),Object(o.b)("p",null," Note that even though it's possible to store ",Object(o.b)("inlineCode",{parentName:"p"},"List")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," property values, it is not possible to modify them. It is however possible to replace them completely. So, the following queries are legal:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Node {property: [1, 2, 3]});\nCREATE (:Node {property: {key: "value"}});\n')),Object(o.b)("p",null,"However, these queries are not:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Node) SET n.property[0] = 0;\nMATCH (n:Node) SET n.property.key = "other value";\n')),Object(o.b)("h3",{id:"properties-on-edges"},"Properties on edges"),Object(o.b)("p",null,"Although openCypher supports properties on edges, they are often not used. If\nyou have a use-case that doesn't use properties on edges you can specify a flag\nin the Memgraph configuration file which will disable the usage of properties\non edges."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"--storage-properties-on-edges=false\n")),Object(o.b)("p",null,"The benefit of supplying this flag to Memgraph is reduced memory usage."),Object(o.b)("p",null,"The durability system is designed to handle a mixed usage of properties on\nedges. If, for example, you start Memgraph with properties on edges enabled\n(the default setting), add some data to the database and then shut it down, you\nwill be able to recover your data in Memgraph with properties on edges\ndisabled. The data will be recovered under one condition, though, and that is\nthat you can't have any properties on edges in your data that will be used\nfor recovery."),Object(o.b)("h3",{id:"storage-statistics"},"Storage Statistics"),Object(o.b)("p",null,"A user can retrieve information and statistics from the storage of a running\nMemgraph instance. This is done with the following query."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"SHOW STORAGE INFO;\n")),Object(o.b)("p",null,"For example, the results are:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"storage info"),Object(o.b)("th",{parentName:"tr",align:null},"value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"average_degree")),Object(o.b)("td",{parentName:"tr",align:null},"2.872567")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"disk_usage")),Object(o.b)("td",{parentName:"tr",align:null},"38028")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"edge_count")),Object(o.b)("td",{parentName:"tr",align:null},"90674")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"memory_usage")),Object(o.b)("td",{parentName:"tr",align:null},"88842240")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"vertex_count")),Object(o.b)("td",{parentName:"tr",align:null},"63131")))),Object(o.b)("p",null,"All of the ",Object(o.b)("inlineCode",{parentName:"p"},"*_usage")," results are expressing in bytes, unless explicitly stated\notherwise."))}b.isMDXComponent=!0},324:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=b(a),u=n,m=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);