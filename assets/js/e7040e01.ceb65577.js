"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[122],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),o=a(72389),l=a(79443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(63616),p=a(86010),m="tabItem_1uMI";function u(e){var t,a,o,l=e.lazy,u=e.block,d=e.defaultValue,c=e.values,h=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=c?c:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),_=b.tabGroupChoices,y=b.setTabGroupChoices,T=(0,r.useState)(N),w=T[0],I=T[1],S=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=_[h];null!=E&&E!==w&&k.some((function(e){return e.value===E}))&&I(E)}var D=function(e){var t=e.currentTarget,a=S.indexOf(t),n=k[a].value;n!==w&&(x(t),I(n),null!=h&&y(h,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=S.indexOf(e.currentTarget)+1;a=S[n]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;a=S[r]||S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},v)},k.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return S.push(e)},onKeyDown:C,onFocus:D,onClick:D},o,{className:(0,p.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},99624:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(26396),i=a(58215),s=["components"],p={id:"csv-import-tool",title:"CSV Import Tool",sidebar_label:"CSV Import Tool"},m=void 0,u={unversionedId:"import-data/csv-import-tool",id:"version-2.1.0/import-data/csv-import-tool",title:"CSV Import Tool",description:"CSV is a universal and very versatile data format used to store large quantities",source:"@site/memgraph_versioned_docs/version-2.1.0/import-data/csv-import-tool.md",sourceDirName:"import-data",slug:"/import-data/csv-import-tool",permalink:"/docs/memgraph/2.1.0/import-data/csv-import-tool",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/import-data/csv-import-tool.md",tags:[],version:"2.1.0",frontMatter:{id:"csv-import-tool",title:"CSV Import Tool",sidebar_label:"CSV Import Tool"},sidebar:"version-2.1.0/memgraph",previous:{title:"LOAD CSV Cypher clause",permalink:"/docs/memgraph/2.1.0/import-data/load-csv-clause"},next:{title:"Kafka streams overview",permalink:"/docs/memgraph/2.1.0/import-data/kafka"}},d=[{value:"How to use the CSV Import Tool?",id:"how-to-use-the-csv-import-tool",children:[],level:3},{value:"Examples",id:"examples",children:[{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",children:[],level:3},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",children:[],level:3}],level:2}],c={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CSV is a universal and very versatile data format used to store large quantities\nof data.  Each Memgraph database instance has a CSV import tool installed called\n",(0,o.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),".  The CSV import tool should be used for initial bulk ingestion\nof data into the database.  Upon ingestion, the CSV importer creates a snapshot\nthat will be used by the database to recover its state on its next startup."),(0,o.kt)("p",null,"If you are already familiar with the Neo4j bulk import tool, then using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," tool should be easy.  The CSV import tool is fully compatible\nwith the ",(0,o.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/operations-manual/current/tools/import/"},"Neo4j CSV\nformat"),".  If you\nalready have a pipeline set-up for Neo4j, you should only replace ",(0,o.kt)("inlineCode",{parentName:"p"},"neo4j-admin\nimport")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more detailed information about the CSV Import Tool, check our ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/import-data/csv-import-tool"},"Reference\nguide"),"."))),(0,o.kt)("h3",{id:"how-to-use-the-csv-import-tool"},"How to use the CSV Import Tool?"),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you installed Memgraph through Docker Hub, the name of the Docker image\n",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph")," should be replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform")," if you didn't\nchange the image tag."))),(0,o.kt)("p",null,"If you installed Memgraph using Docker, you will need to run the importer using\nthe following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -v mg_lib:/var/lib/memgraph -v mg_import:/import-data --entrypoint=mg_import_csv memgraph\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is an incomplete command as it's missing the files that need to be\nimported. It will result with a ",(0,o.kt)("inlineCode",{parentName:"p"},"The --nodes flag is required!")," error. You can\nfind a complete example ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"below"),"."))),(0,o.kt)("p",null,"For information on other options, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --entrypoint=mg_import_csv memgraph --help\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("p",null,"The import tool is run from the console, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," command.\nThe tool should be run as user ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph"),", using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo -u memgraph mg_import_csv\n")),(0,o.kt)("p",null,"For information on other options, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --help\n")))),(0,o.kt)("p",null,"Below, you can find two examples of how to use the CSV Import Tool depending on\nthe complexity of your data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and\nrelationships"))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is also important to note that importing CSV data using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," command should be a one-time operation before running Memgraph.\nIn other words, this tool should not be used to import data into an already\nrunning Memgraph instance."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,o.kt)("p",null,"Let's import a simple dataset."),(0,o.kt)(l.Z,{groupId:"files",defaultValue:"pn",values:[{label:"1. people_nodes.csv",value:"pn"},{label:"2. people_relationships.csv",value:"pr"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"pn",mdxType:"TabItem"},(0,o.kt)("p",null,"Store the following in ",(0,o.kt)("inlineCode",{parentName:"p"},"people_nodes.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(PERSON_ID),name:string,:LABEL\n100,Daniel,Person\n101,Alex,Person\n102,Sarah,Person\n103,Mia,Person\n104,Lucy,Person\n"))),(0,o.kt)(i.Z,{value:"pr",mdxType:"TabItem"},(0,o.kt)("p",null,"Let's add relationships between people in ",(0,o.kt)("inlineCode",{parentName:"p"},"people_relationships.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE\n100,102,IS_FRIENDS_WITH\n103,101,IS_FRIENDS_WITH\n102,103,IS_FRIENDS_WITH\n101,104,IS_FRIENDS_WITH\n104,100,IS_FRIENDS_WITH\n101,102,IS_FRIENDS_WITH\n100,103,IS_FRIENDS_WITH\n")))),(0,o.kt)("p",null,"Now, you can import the dataset using the CSV Import Tool."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your existing snapshot and WAL data will be considered\nobsolete, and Memgraph will load the new dataset."))),(0,o.kt)("p",null,"Use the following command:"),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"If using Docker, things are a bit more complicated. First you need to copy the\nCSV files where the Docker image can see them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container create --user memgraph --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp people_nodes.csv mg_import_helper:/import-data\ndocker cp people_relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,o.kt)("p",null,"Then, run the importer with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/people_nodes.csv \\\n  --relationships /import-data/people_relationships.csv\n")),(0,o.kt)("p",null,"Next time you run Memgraph, the dataset will be loaded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 7687:7687 -v mg_lib:/var/lib/memgraph memgraph\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes people_nodes.csv --relationships people_relationships.csv\n")),(0,o.kt)("p",null,"Next time you run Memgraph, the dataset will be loaded."))),(0,o.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,o.kt)("p",null,"The previous example is showcasing a simple graph with one node type and one\nrelationship type. If we have more complex graphs, the procedure is similar.\nLet's define the following dataset:"),(0,o.kt)(l.Z,{groupId:"files",defaultValue:"pn",values:[{label:"1. people_nodes.csv",value:"pn"},{label:"2. people_relationships.csv",value:"pr"},{label:"3. restaurants_nodes.csv",value:"rn"},{label:"4. restaurants_relationships.csv",value:"rr"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"pn",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following to ",(0,o.kt)("inlineCode",{parentName:"p"},"people_nodes.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(PERSON_ID),name:string,age:int,city:string,:LABEL\n100,Daniel,30,London,Person\n101,Alex,15,Paris,Person\n102,Sarah,17,London,Person\n103,Mia,25,Zagreb,Person\n104,Lucy,21,Paris,Person\n105,Adam,23,New York,Person\n"))),(0,o.kt)(i.Z,{value:"pr",mdxType:"TabItem"},(0,o.kt)("p",null,"Let's define the relationships between people in ",(0,o.kt)("inlineCode",{parentName:"p"},"people_relationships.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE, met_in:int\n100,102,IS_FRIENDS_WITH,2014\n103,105,IS_FRIENDS_WITH,2021\n102,103,IS_FRIENDS_WITH,2005\n101,104,IS_FRIENDS_WITH,2005\n104,100,IS_FRIENDS_WITH,2018\n105,102,IS_FRIENDS_WITH,2017\n100,103,IS_FRIENDS_WITH,2001\n"))),(0,o.kt)(i.Z,{value:"rn",mdxType:"TabItem"},(0,o.kt)("p",null,"Let's introduce another node type, restaurants, in ",(0,o.kt)("inlineCode",{parentName:"p"},"restaurants_nodes.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(REST_ID),name:string,menu:string[],:LABEL\n200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie,Restaurant\n201,KFC,Fried Chicken;Fries;Chicken Bucket,Restaurant\n202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long,Restaurant\n203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust,Restaurant\n"))),(0,o.kt)(i.Z,{value:"rr",mdxType:"TabItem"},(0,o.kt)("p",null,"Let's define the relationships between people and restaurants in\n",(0,o.kt)("inlineCode",{parentName:"p"},"restaurants_relationships.csv"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(REST_ID),:TYPE, liked:boolean\n100,200,ATE_AT,true\n103,201,ATE_AT,false\n104,200,ATE_AT,true\n101,202,ATE_AT,false\n101,203,ATE_AT,false\n101,200,ATE_AT,true\n102,201,ATE_AT,true\n")))),(0,o.kt)("p",null,"After preparing the files above, you can import the dataset using the CSV Import\ntool."),(0,o.kt)(l.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"If using Docker, things are a bit more complicated. First, you need to copy the\nCSV files where the Docker container can see them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker container create --user memgraph --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp people_nodes.csv mg_import_helper:/import-data\ndocker cp people_relationships.csv mg_import_helper:/import-data\ndocker cp restaurants_nodes.csv mg_import_helper:/import-data\ndocker cp restaurants_relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,o.kt)("p",null,"Then, run the importer with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/people_nodes.csv \\\n  --nodes /import-data/restaurants_nodes.csv \\\n  --relationships /import-data/people_relationships.csv \\\n  --relationships /import-data/restaurants_relationships.csv\n")),(0,o.kt)("p",null,"Next time you run Memgraph, the dataset will be loaded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 7687:7687 -v mg_lib:/var/lib/memgraph memgraph\n"))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes people_nodes.csv --nodes restaurants_nodes.csv --relationships people_relationships.csv --relationships restaurants_relationships.csv\n")),(0,o.kt)("p",null,"The next time you run Memgraph, the dataset will be loaded."))))}h.isMDXComponent=!0}}]);