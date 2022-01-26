"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64310],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17888:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"replication",title:"Replication",sidebar_label:"Replication"},c=void 0,s={unversionedId:"reference-guide/replication",id:"reference-guide/replication",title:"Replication",description:"User facing setup",source:"@site/docs/reference-guide/replication.md",sourceDirName:"reference-guide",slug:"/reference-guide/replication",permalink:"/docs/memgraph/next/reference-guide/replication",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/replication.md",tags:[],version:"current",frontMatter:{id:"replication",title:"Replication",sidebar_label:"Replication"},sidebar:"memgraph",previous:{title:"Python API",permalink:"/docs/memgraph/next/reference-guide/query-modules/api/python-api"},next:{title:"Runtime settings",permalink:"/docs/memgraph/next/reference-guide/runtime-settings"}},p=[{value:"User facing setup",id:"user-facing-setup",children:[{value:"How to set up a Memgraph cluster with replication?",id:"how-to-set-up-a-memgraph-cluster-with-replication",children:[],level:3},{value:"How to see the current replication status?",id:"how-to-see-the-current-replication-status",children:[],level:3},{value:"How to promote a new main?",id:"how-to-promote-a-new-main",children:[],level:3}],level:2},{value:"Limitations and potential features",id:"limitations-and-potential-features",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"user-facing-setup"},"User facing setup"),(0,i.kt)("h3",{id:"how-to-set-up-a-memgraph-cluster-with-replication"},"How to set up a Memgraph cluster with replication?"),(0,i.kt)("p",null,"Replication configuration is done primarily through Memgraph Cypher commands. This\nallows the cluster to be dynamically rearranged (promoting a new main, addition\nof a new replica, etc.)."),(0,i.kt)("p",null,"Each Memgraph instance when first started will be a main. You have to change\nthe role of all replica nodes using the following query before you\ncan enable replication on the main:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"SET REPLICATION ROLE TO (MAIN|REPLICA) [WITH PORT <port_number>];\n")),(0,i.kt)("p",null,'Note that the "WITH PORT <port_number>" part of the query sets the replication port,\nbut it applies only to the replica. In other words, if you try to set the\nreplication port as the main, the query will fail.\nAfter you have set your replica instance to the correct operating role, you can\nenable replication in the main instance by issuing the following Memgraph Cypher\ncommand:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"REGISTER REPLICA name (SYNC|ASYNC) [WITH TIMEOUT 0.5] TO <socket_address>;\n")),(0,i.kt)("p",null,"The socket address must be a string of the following form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},'"IP_ADDRESS:PORT_NUMBER"\n')),(0,i.kt)("p",null,"where IP_ADDRESS is a valid IP address, and PORT_NUMBER is a valid port number,\nboth given in decimal notation.\nNote that in this case they must be separated by a single colon.\nAlternatively, one can give the socket address as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},'"IP_ADDRESS"\n')),(0,i.kt)("p",null,"where IP_ADDRESS must be a valid IP address, and the port number will be\nassumed to be the default one (we specify it to be 10000)."),(0,i.kt)("p",null,"Each Memgraph instance will remember what the configuration was set to and will\nautomatically resume with its role when restarted."),(0,i.kt)("h3",{id:"how-to-see-the-current-replication-status"},"How to see the current replication status?"),(0,i.kt)("p",null,"To see the replication ROLE of the current Memgraph instance, you can issue the\nfollowing query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"SHOW REPLICATION ROLE;\n")),(0,i.kt)("p",null,"To see the replicas of the current Memgraph instance, you can issue the\nfollowing query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"SHOW REPLICAS;\n")),(0,i.kt)("p",null,"To delete a replica, issue the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"DROP REPLICA <name>;\n")),(0,i.kt)("h3",{id:"how-to-promote-a-new-main"},"How to promote a new main?"),(0,i.kt)("p",null,"When you have an already set-up cluster, to promote a new main, just set the\nreplica that you want to be a main to the main role."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"SET REPLICATION ROLE TO MAIN;  # on desired replica\n")),(0,i.kt)("p",null,"After the command is issued, if the original main is still alive, it won't be\nable to replicate its data to the replica (the new main) anymore and will enter\nan error state. You must ensure that at any given point in time there aren't\ntwo mains in the cluster."),(0,i.kt)("h2",{id:"limitations-and-potential-features"},"Limitations and potential features"),(0,i.kt)("p",null,"Currently, we do not support chained replicas, i.e. a replica can't have its\nown replica. When this feature becomes available, the user will be able to\nconfigure scenarios such as the following one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"main -[asynchronous]-> replica 1 -[semi-synchronous]-> replica 2\n")),(0,i.kt)("p",null,"To configure the above scenario, the user will be able to issue the following\ncommands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},'SET REPLICATION ROLE TO REPLICA WITH PORT <port1>;  # on replica 1\nSET REPLICATION ROLE TO REPLICA WITH PORT <port2>;  # on replica 2\n\nREGISTER REPLICA replica1 ASYNC TO "replica1_ip_address:port1";  # on main\nREGISTER REPLICA replica2 SYNC WITH TIMEOUT 0.5\n  TO "replica2_ip_address:port2";  # on replica 1\n')),(0,i.kt)("p",null,"In addition, we do not yet support advanced recovery mechanisms. For example,\nif a main crashes, a suitable replica will take its place as the new main. If\nthe crashed main goes back online, it will not be able to reclaim its previous\nrole, but will be forced to be a replica of the new main.\nIn the upcoming releases, we might be adding more advanced recovery mechanisms.\nHowever, users are able to set up their own recovery policies using the basic\nrecovery mechanisms we currently provide, that can cover a wide range of\nreal-life scenarios."),(0,i.kt)("p",null,"Also, we do not yet support the replication of authentication configurations,\nrendering access control replication unavailable."),(0,i.kt)("p",null,"The query and authentication modules, as well as audit logs are not replicated."))}m.isMDXComponent=!0}}]);