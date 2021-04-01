(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{270:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(324)),l={id:"audit-log",title:"Audit log (Enterprise)",sidebar_label:"Audit log (Enterprise)"},o={unversionedId:"reference-guide/audit-log",id:"version-1.3.0/reference-guide/audit-log",isDocsHomePage:!1,title:"Audit log (Enterprise)",description:"Memgraph supports all query audit logging. When enabled, the audit log contains",source:"@site/memgraph_versioned_docs/version-1.3.0/reference-guide/audit-log.md",slug:"/reference-guide/audit-log",permalink:"/memgraph/1.3.0/reference-guide/audit-log",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/reference-guide/audit-log.md",version:"1.3.0",sidebar_label:"Audit log (Enterprise)",sidebar:"version-1.3.0/memgraph",previous:{title:"LDAP Security (Enterprise)",permalink:"/memgraph/1.3.0/reference-guide/ldap-security"},next:{title:"Replication (Enterprise)",permalink:"/memgraph/1.3.0/reference-guide/replication"}},c=[{value:"Format",id:"format",children:[]},{value:"Example",id:"example",children:[]},{value:"Parsing the log",id:"parsing-the-log",children:[]},{value:"Flags",id:"flags",children:[]}],u={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains\nrecords of all queries executed on the database.  Each executed query is one\nentry (one line) in the audit log. The audit log itself is a CSV file."),Object(i.b)("p",null,"All audit logs are written to\n",Object(i.b)("inlineCode",{parentName:"p"},"<MEMGRAPH_DURABILITY_DIRECTORY>/audit/audit.log"),".  The log is rotated using\n",Object(i.b)("inlineCode",{parentName:"p"},"logrotate"),", so entries in the ",Object(i.b)("inlineCode",{parentName:"p"},"audit.log")," file are always the newest entries.\nEntries in ",Object(i.b)("inlineCode",{parentName:"p"},"audit.log.1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"audit.log.2.gz"),", etc.  are older entries. The\ndefault log rotation configuration can be found in ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/logrotate.d/memgraph"),".\nBy default, the log is rotated every day and a full year of entries is\npreserved. You can modify the values to your own needs and preferences."),Object(i.b)("h2",{id:"format"},"Format"),Object(i.b)("p",null,"The audit log contains the following information formatted into a CSV file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-plaintext"},"<timestamp>,<address>,<username>,<query>,<params>\n")),Object(i.b)("p",null,"For each query, the supplied query parameters are also logged. The query is\nescaped and quoted so that commas in queries don't affect the correctness of\nthe CSV. The parameters are encoded as JSON objects and are then escaped and\nquoted."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"This is an example of the audit log:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-plaintext"},'1551376833.225395,127.0.0.1,admin,"MATCH (n) DETACH DELETE n","{}"\n1551376833.257825,127.0.0.1,admin,"CREATE (n {name: $name})","{\\"name\\":\\"alice\\"}"\n1551376833.273546,127.0.0.1,admin,"MATCH (n), (m) CREATE (n)-[:e {when: $when}]->(m)","{\\"when\\":42}"\n1551376833.300955,127.0.0.1,admin,"MATCH (n), (m) SET n.value = m.value","{}"\n')),Object(i.b)("p",null,"We can see that all of the queries were executed from the loopback address and\nwere executed by the user ",Object(i.b)("inlineCode",{parentName:"p"},"admin"),".  The executed queries are:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Query"),Object(i.b)("th",{parentName:"tr",align:null},"Parameters"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MATCH (n) DETACH DELETE n"),Object(i.b)("td",{parentName:"tr",align:null},"{}")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"CREATE (n {name: $name})"),Object(i.b)("td",{parentName:"tr",align:null},'{"name": "alice"}')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MATCH (n), (m) CREATE (n)-","[:e {when: $when}]","->(m)"),Object(i.b)("td",{parentName:"tr",align:null},'{"when": 42}')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"MATCH (n), (m) SET n.value = m.value"),Object(i.b)("td",{parentName:"tr",align:null},"{}")))),Object(i.b)("h2",{id:"parsing-the-log"},"Parsing the log"),Object(i.b)("p",null,"If you wish to parse the log, the following Python snippet shows how to extract\ndata from the audit log:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"import csv\nimport json\n\nwith open(\"audit.log\") as f:\n    reader = csv.reader(f, delimiter=',', doublequote=False,\n                        escapechar='\\\\', lineterminator='\\n',\n                        quotechar='\"', quoting=csv.QUOTE_MINIMAL,\n                        skipinitialspace=False, strict=True)\n    for line in reader:\n        timestamp, address, username, query, params = line\n        params = json.loads(params)\n        # Rest of your code that processes the logs.\n")),Object(i.b)("h2",{id:"flags"},"Flags"),Object(i.b)("p",null,"This section contains the list of flags that are used to configure audit\nlogging in Memgraph."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Flag"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--audit-enabled")),Object(i.b)("td",{parentName:"tr",align:null},"Enables audit logging.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--audit-buffer-size")),Object(i.b)("td",{parentName:"tr",align:null},"Controls the in-memory buffer size used for audit logs.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"--audit-buffer-flush-interval-ms")),Object(i.b)("td",{parentName:"tr",align:null},"Controls the time interval (in milliseconds) used for flushing the in-memory buffer to disk.")))))}d.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=d(n),s=a,m=b["".concat(l,".").concat(s)]||b[s]||p[s]||i;return n?r.a.createElement(m,o(o({ref:t},u),{},{components:n})):r.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);