(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53148],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,g=m["".concat(u,".").concat(c)]||m[c]||p[c]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41741:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l=["components"],o={id:"audit-log",title:"Audit log (Enterprise)",sidebar_label:"Audit log (Enterprise)"},u=void 0,d={unversionedId:"reference-guide/audit-log",id:"version-1.6.0/reference-guide/audit-log",isDocsHomePage:!1,title:"Audit log (Enterprise)",description:"Memgraph supports all query audit logging. When enabled, the audit log contains",source:"@site/memgraph_versioned_docs/version-1.6.0/reference-guide/audit-log.md",sourceDirName:"reference-guide",slug:"/reference-guide/audit-log",permalink:"/memgraph/1.6.0/reference-guide/audit-log",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/reference-guide/audit-log.md",version:"1.6.0",frontMatter:{id:"audit-log",title:"Audit log (Enterprise)",sidebar_label:"Audit log (Enterprise)"},sidebar:"version-1.6.0/memgraph",previous:{title:"TensorFlow Op",permalink:"/memgraph/1.6.0/reference-guide/tensorflow"},next:{title:"Auth module (Enterprise)",permalink:"/memgraph/1.6.0/reference-guide/auth-module"}},s=[{value:"Format",id:"format",children:[]},{value:"Example",id:"example",children:[]},{value:"Parsing the log",id:"parsing-the-log",children:[]},{value:"Flags",id:"flags",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains\nrecords of all queries executed on the database.  Each executed query is one\nentry (one line) in the audit log. The audit log itself is a CSV file."),(0,i.kt)("p",null,"All audit logs are written to\n",(0,i.kt)("inlineCode",{parentName:"p"},"<MEMGRAPH_DURABILITY_DIRECTORY>/audit/audit.log"),".  The log is rotated using\n",(0,i.kt)("inlineCode",{parentName:"p"},"logrotate"),", so entries in the ",(0,i.kt)("inlineCode",{parentName:"p"},"audit.log")," file are always the newest entries.\nEntries in ",(0,i.kt)("inlineCode",{parentName:"p"},"audit.log.1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"audit.log.2.gz"),", etc.  are older entries. The\ndefault log rotation configuration can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/logrotate.d/memgraph"),".\nBy default, the log is rotated every day and a full year of entries is\npreserved. You can modify the values to your own needs and preferences."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("p",null,"The audit log contains the following information formatted into a CSV file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"<timestamp>,<address>,<username>,<query>,<params>\n")),(0,i.kt)("p",null,"For each query, the supplied query parameters are also logged. The query is\nescaped and quoted so that commas in queries don't affect the correctness of\nthe CSV. The parameters are encoded as JSON objects and are then escaped and\nquoted."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This is an example of the audit log:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},'1551376833.225395,127.0.0.1,admin,"MATCH (n) DETACH DELETE n","{}"\n1551376833.257825,127.0.0.1,admin,"CREATE (n {name: $name})","{\\"name\\":\\"alice\\"}"\n1551376833.273546,127.0.0.1,admin,"MATCH (n), (m) CREATE (n)-[:e {when: $when}]->(m)","{\\"when\\":42}"\n1551376833.300955,127.0.0.1,admin,"MATCH (n), (m) SET n.value = m.value","{}"\n')),(0,i.kt)("p",null,"We can see that all of the queries were executed from the loopback address and\nwere executed by the user ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),".  The executed queries are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Query"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MATCH (n) DETACH DELETE n"),(0,i.kt)("td",{parentName:"tr",align:null},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CREATE (n {name: $name})"),(0,i.kt)("td",{parentName:"tr",align:null},'{"name": "alice"}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MATCH (n), (m) CREATE (n)-","[:e {when: $when}]","->(m)"),(0,i.kt)("td",{parentName:"tr",align:null},'{"when": 42}')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MATCH (n), (m) SET n.value = m.value"),(0,i.kt)("td",{parentName:"tr",align:null},"{}")))),(0,i.kt)("h2",{id:"parsing-the-log"},"Parsing the log"),(0,i.kt)("p",null,"If you wish to parse the log, the following Python snippet shows how to extract\ndata from the audit log:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import csv\nimport json\n\nwith open(\"audit.log\") as f:\n    reader = csv.reader(f, delimiter=',', doublequote=False,\n                        escapechar='\\\\', lineterminator='\\n',\n                        quotechar='\"', quoting=csv.QUOTE_MINIMAL,\n                        skipinitialspace=False, strict=True)\n    for line in reader:\n        timestamp, address, username, query, params = line\n        params = json.loads(params)\n        # Rest of your code that processes the logs.\n")),(0,i.kt)("h2",{id:"flags"},"Flags"),(0,i.kt)("p",null,"This section contains the list of flags that are used to configure audit\nlogging in Memgraph."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--audit-enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Enables audit logging.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--audit-buffer-size")),(0,i.kt)("td",{parentName:"tr",align:null},"Controls the in-memory buffer size used for audit logs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--audit-buffer-flush-interval-ms")),(0,i.kt)("td",{parentName:"tr",align:null},"Controls the time interval (in milliseconds) used for flushing the in-memory buffer to disk.")))))}m.isMDXComponent=!0}}]);