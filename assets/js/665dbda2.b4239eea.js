"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78869],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53463:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"replication",title:"How to set up replication on a small cluster",sidebar_label:"Replication"},s=void 0,c={unversionedId:"database-functionalities/replication",id:"version-1.4.0/database-functionalities/replication",isDocsHomePage:!1,title:"How to set up replication on a small cluster",description:"This article is a part of a series intended to showcase Memgraph's features",source:"@site/memgraph_versioned_docs/version-1.4.0/database-functionalities/replication.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/replication",permalink:"/memgraph/1.4.0/database-functionalities/replication",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/database-functionalities/replication.md",tags:[],version:"1.4.0",frontMatter:{id:"replication",title:"How to set up replication on a small cluster",sidebar_label:"Replication"},sidebar:"version-1.4.0/memgraph",previous:{title:"TensorFlow Op",permalink:"/memgraph/1.4.0/database-functionalities/tensorflow-setup"},next:{title:"Backup",permalink:"/memgraph/1.4.0/reference-guide/backup"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Cluster topology",id:"cluster-topology",children:[]},{value:"Configuring the cluster",id:"configuring-the-cluster",children:[]},{value:"Where to next?",id:"where-to-next",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is a part of a series intended to showcase Memgraph's features\nand bring the user up to speed on developing with Memgraph."),(0,o.kt)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.4.0/database-functionalities"},"database functionalities section"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This example demonstrates how to create a simple cluster of nodes running\nMemgraph instances, and set up replication. We'll demonstrate the use and\nbehavior of the available synchronization modes."),(0,o.kt)("h2",{id:"cluster-topology"},"Cluster topology"),(0,o.kt)("p",null,"The cluster consists of four nodes, a single main and three replicas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the main node, containing the original data to be replicated to other nodes,"),(0,o.kt)("li",{parentName:"ul"},"a node that will be replicated to using the sync mode,"),(0,o.kt)("li",{parentName:"ul"},"a node that will be replicated to using the async mode,"),(0,o.kt)("li",{parentName:"ul"},"a node that will be replicated to using the semi-sync mode.")),(0,o.kt)("h2",{id:"configuring-the-cluster"},"Configuring the cluster"),(0,o.kt)("p",null,"We'll use Docker to set up and run the cluster on your local machine, so make\nsure you have it installed and ready, and grab your Memgraph docker image.\nLook ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.4.0/getting-started/installation"},"here")," for instructions.\nWe assume you have already set up a client for running queries like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole")," installed.\nYou can also use any of the supported drivers like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgclient"},"mgclient")," or any of the Neo4j drivers."),(0,o.kt)("p",null,"We fire up the terminal, and for each Memgraph instance (node)  we have to start, we'll\nrun:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run --rm memgraph\n")),(0,o.kt)("p",null,"The above commands will start a Memgraph node, and assign it its own IP address. "),(0,o.kt)("p",null,"Now, to set up the cluster, we'll have to start an mg_client or mgconsole\ninstance for every running Memgraph node, and connect to it. To do this, we\nhave to figure out their IP addresses. Running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,o.kt)("p",null,'will list all the running docker processes, along with their "CONTAINER ID" and\n"NAME". Running'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id\n")),(0,o.kt)("p",null,'where "container_name_or_id" is either the "CONTAINER ID" or "NAME" listed by\n',(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),", we can get the IP addresses of all the nodes. Once we have them, we\ncan start setting up the replication. Let's say the ip addresses are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"main:                      172.17.0.2"),(0,o.kt)("li",{parentName:"ul"},"sync replica:              172.17.0.3"),(0,o.kt)("li",{parentName:"ul"},"async replica:             172.17.0.4"),(0,o.kt)("li",{parentName:"ul"},"semi-sync replica:         172.17.0.5 .")),(0,o.kt)("p",null,"Let's assume we're using mgconsole to connect to and query the nodes. Firstly,\nwe have to set up the replicas. We connect to a replica by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole --host REPLICA_IP_ADDRESS --use-ssl=false\n")),(0,o.kt)("p",null,'where REPLICA_IP_ADDRESS is the address we found in the previous step. Once\nwe\'re connected to a replica, we set its replication role to "REPLICA" by\nissuing'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SET REPLICATION ROLE TO REPLICA WITH PORT 10000;\n")),(0,o.kt)("p",null,"Note that the port 10000 is arbitrary, and any available port number may be used\ninstead. We repeat the process for all replicas."),(0,o.kt)("p",null,"Now, it's time to set up the main. Again, we connect to the main using\nmgconsole:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole --host 172.17.0.2 --use-ssl=false\n")),(0,o.kt)("p",null,"Then, for every replica, we issue the query that registers it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'REGISTER REPLICA r1 SYNC TO "172.17.0.3:10000";\nREGISTER REPLICA r2 ASYNC TO "172.17.0.4:10000";\nREGISTER REPLICA r3 SYNC WITH TIMEOUT 1 TO "172.17.0.5:10000";\n')),(0,o.kt)("p",null,"Now we can create some nodes and edges on the main, and observe them replicate\nto the replicas. Firstly, we switch to the mgconsole instance connected to the\nmain, and then issue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (n:N {p: "This is going to be replicated!"});\n')),(0,o.kt)("p",null,"After that, we can switch to any replica and try to match this node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:N) RETURN n;\n")),(0,o.kt)("p",null,"Lo and behold, we get:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'+---------------------------------------------+\n| n                                           |\n+---------------------------------------------+\n| (:N {p: "This is going to be replicated!"}) |\n+---------------------------------------------+\n')),(0,o.kt)("p",null,"Now, go on and have fun with more complex graphs! Happy hacking!"),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about replication in Memgraph, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.4.0/reference-guide/replication"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.4.0/tutorials/tutorials"},"Tutorials")),"."))}d.isMDXComponent=!0}}]);