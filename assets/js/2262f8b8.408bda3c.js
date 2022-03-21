"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68035],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51443:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"backup",title:"Backup",sidebar_label:"Backup"},l=void 0,s={unversionedId:"reference-guide/backup",id:"version-2.2.0/reference-guide/backup",title:"Backup",description:"While running, Memgraph generates a couple of different files in its data",source:"@site/memgraph_versioned_docs/version-2.2.0/reference-guide/backup.md",sourceDirName:"reference-guide",slug:"/reference-guide/backup",permalink:"/docs/memgraph/2.2.0/reference-guide/backup",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/reference-guide/backup.md",tags:[],version:"2.2.0",frontMatter:{id:"backup",title:"Backup",sidebar_label:"Backup"},sidebar:"memgraph",previous:{title:"How-to guides overview",permalink:"/docs/memgraph/2.2.0/how-to-guides"},next:{title:"Manage Kafka streams",permalink:"/docs/memgraph/2.2.0/how-to-guides/streams/kafka/kafka-streams"}},u={},p=[{value:"Creating a snapshot",id:"creating-a-snapshot",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While running, Memgraph generates a couple of different files in its data\ndirectory. The directory includes multiple different subdirectories, one of\nthem being the storage directory which contains the durability files. In that\ndirectory, Memgraph periodically generates snapshots and WAL files that\ncontain Memgraph's data in a recoverable format."),(0,o.kt)("p",null,"Making a backup of a Memgraph instance would consist of simply copying the\ndata directory. This is impossible without additional help because\nthe durability files can be deleted when an event is triggered\n(the number of snapshots exceeded the maximum allowed number)."),(0,o.kt)("p",null,"To disable this behavior, you can use the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-opencypher"},"LOCK DATA DIRECTORY;\n")),(0,o.kt)("p",null,"Now, the deletion of every file contained in the data directory is delayed\nuntil you unlock it again. You can safely copy the data directory or\na single snapshot to another location without worrying that it will be\ndeleted during that process."),(0,o.kt)("p",null,"To allow the deletion of the files, run the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-opencypher"},"UNLOCK DATA DIRECTORY;\n")),(0,o.kt)("p",null,"Memgraph will delete the files which should have been deleted before\nand allow any future deletion of the files contained in the data\ndirectory."),(0,o.kt)("h3",{id:"creating-a-snapshot"},"Creating a snapshot"),(0,o.kt)("p",null,"Snapshot is created periodically based on the time defined with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--storage-snapshot-interval-sec")," config. If you want to generate a snapshot\ninstantly for the current database state, you can use the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-opencypher"},"CREATE SNAPSHOT;\n")))}f.isMDXComponent=!0}}]);