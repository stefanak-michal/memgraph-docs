"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66378],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,d=h["".concat(s,".").concat(c)]||h[c]||u[c]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},11223:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"install-memgraph-windows-10",title:"Install MemgraphDB and Memgraph Lab on Windows 10",sidebar_label:"Install MemgraphDB and Memgraph Lab on Windows 10"},s=void 0,p={unversionedId:"tutorials/install-memgraph-windows-10",id:"version-2.1.1/tutorials/install-memgraph-windows-10",title:"Install MemgraphDB and Memgraph Lab on Windows 10",description:"In this tutorial, you will install both MemgraphDB and Memgraph Lab on Windows 10.",source:"@site/memgraph_versioned_docs/version-2.1.1/tutorials/install-memgraph-on-windows-10.md",sourceDirName:"tutorials",slug:"/tutorials/install-memgraph-windows-10",permalink:"/docs/memgraph/2.1.1/tutorials/install-memgraph-windows-10",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/tutorials/install-memgraph-on-windows-10.md",tags:[],version:"2.1.1",frontMatter:{id:"install-memgraph-windows-10",title:"Install MemgraphDB and Memgraph Lab on Windows 10",sidebar_label:"Install MemgraphDB and Memgraph Lab on Windows 10"},sidebar:"memgraph",previous:{title:"Graphing the Premier League",permalink:"/docs/memgraph/2.1.1/tutorials/graphing-the-premier-league"},next:{title:"Marvel Comic Universe social network",permalink:"/docs/memgraph/2.1.1/tutorials/marvel-universe"}},m={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1 - Enable Windows Subsystem for Linux",id:"step-1---enable-windows-subsystem-for-linux",level:2},{value:"Step 2 - Installing Memgraph",id:"step-2-installing-memgraph",level:2},{value:"Step 3 - Installing Memgraph Lab and connecting to Memgraph",id:"step-3---installing-memgraph-lab-and-connecting-to-memgraph",level:2},{value:"Step 4 - Testing the Memgraph Lab&#39;s connection to Memgraph",id:"step-4---testing-the-memgraph-labs-connection-to-memgraph",level:2},{value:"Where to next?",id:"where-to-next",level:2}],h={toc:u};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, you will install both MemgraphDB and Memgraph Lab on Windows 10.\nYou will then test each installation by running a few basic queries to make\nsure that everything is working correctly."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can install MemgraphDB and Memgraph Lab as separate components or you can\nuse the ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Platform")," Docker image. Memgraph Platform contains\nMemgraphDB, Memgraph Lab, mgconsole and MAGE. It is the recommended installation\noption, and it isn't part of this tutorial."),(0,o.kt)("p",{parentName:"div"},"If you want to install Memgraph Platform, please follow the ",(0,o.kt)("a",{parentName:"p",href:"../install-memgraph-on-windows-docker"},"Memgraph Platform installation guide"),"."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/product/"},"MemgraphDB")," is a native, in-memory graph\ndatabase built for real-time business-critical applications. Memgraph supports\nstrongly-consistent ACID transactions and uses the ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual/"},"Cypher query\nlanguage")," for structuring, manipulating, and exploring data."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab/"},"Memgraph Lab")," is a lightweight and intuitive\nCypher and ",(0,o.kt)("a",{parentName:"p",href:"https://boltprotocol.org/"},"Bolt")," compatible integrated development\nenvironment (IDE). It's designed to help you import data, develop, debug, and\nprofile database queries and visualize query results."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"For a seamless installation of MemgraphDB and Memgraph Lab on Windows 10, ensure\nthat you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A computer running Windows 10 (64-bit version) with Windows subsystem for\nLinux"),(0,o.kt)("li",{parentName:"ul"},"Administrative rights to your Windows PC and an internet connection."),(0,o.kt)("li",{parentName:"ul"},"Basic knowledge of working with the command line.")),(0,o.kt)("h2",{id:"step-1---enable-windows-subsystem-for-linux"},"Step 1 - Enable Windows Subsystem for Linux"),(0,o.kt)("p",null,"First, you need to enable the Windows subsystem (WSL) for Linux by following the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Microsoft\ninstructions"),"."),(0,o.kt)("p",null,"After you install WSL the next step is to install Ubuntu Linux distribution. To\ninstall it do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Windows PowerShell"),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("inlineCode",{parentName:"li"},"wsl --install -d Ubuntu")," command"),(0,o.kt)("li",{parentName:"ol"},"Enter the username and password for your new Linux user")),(0,o.kt)("p",null,"If everything works properly, you will get the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nocopy"},"Enter new UNIX username: james\nNew password:\nRetype new password:\npasswd: password updated successfully\nInstallation successful!\n")),(0,o.kt)("p",null,"Congratulations! You have successfully installed the Debian distribution of\nLinux on your Windows machine. You are now ready to install Memgraph."),(0,o.kt)("h2",{id:"step-2-installing-memgraph"},"Step 2 - Installing Memgraph"),(0,o.kt)("p",null,"You must know your exact Ubuntu version so that you can download the right\nMemgraph package. To find out the version, run the following command in the\nUbuntu shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"lsb_release -d\n")),(0,o.kt)("p",null,"Your output will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nocopy"},"Description:    Ubuntu 20.04 LTS\n")),(0,o.kt)("p",null,"Therefore, the Linux distribution is Ubuntu 20.04."),(0,o.kt)("p",null,"Now you can go to Memgraph's ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download/#memgraph"},"download"),"\npage and download the installation package for your Linux distribution (in this\nexample, Ubuntu 20.04)."),(0,o.kt)("p",null,"Once the download is complete, open your Ubuntu shell and run the following\ncommand to start the installation process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -i /path/to/memgraph_<version>.deb\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"replace ",(0,o.kt)("inlineCode",{parentName:"li"},"/path/to")," with path to where you downloaded your installation\npackage."),(0,o.kt)("li",{parentName:"ul"},"replace ",(0,o.kt)("inlineCode",{parentName:"li"},"_version")," with the version of the package that you are installing\n(usually the name of the installation package you downloaded).")),(0,o.kt)("p",null,"For example, if user Arthur downloads version ",(0,o.kt)("inlineCode",{parentName:"p"},"2.1.1-1_amd64")," to default Windows\ndownload folder, the file will be located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/c/Users/Arthur/Downloads"),",\nand the command would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -i /mnt/c/Users/Arthur/Downloads/memgraph_2.1.1-1_amd64.deb\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you see any error related to missing dependency packages, you might have to\nrun the following commands before installing Memgraph:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get -f install\n")))),(0,o.kt)("p",null,"Normally, you would start Memgraph using ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd"),", but unfortunately, this is\nnot an option in WSL. You can bypass this inconvenience by using the command\n",(0,o.kt)("inlineCode",{parentName:"p"},"runuser"),", which allows you to run commands with a substitute user and group ID.\nStart the Memgraph server by issuing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo runuser -l memgraph -c '/usr/lib/memgraph/memgraph'\n")),(0,o.kt)("p",null,"If Memgraph has been installed correctly, you will see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nocopy"},"You are running Memgraph v2.1.1\n")),(0,o.kt)("p",null,"Awesome! Now you have a running Memgraph instance on your Windows machine."),(0,o.kt)("h2",{id:"step-3---installing-memgraph-lab-and-connecting-to-memgraph"},"Step 3 - Installing Memgraph Lab and connecting to Memgraph"),(0,o.kt)("p",null,"Start by downloading ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download/#memgraph-lab"},"Memgraph Lab"),"\nfor Windows."),(0,o.kt)("p",null,"The downloaded package will be a ",(0,o.kt)("inlineCode",{parentName:"p"},".exe")," installer and can be easily run just\nlike other Windows installers."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before connecting, ensure that the Memgraph server is running as explained in\n",(0,o.kt)("a",{parentName:"p",href:"#step-2-installing-memgraph"},"Step 2"),". You won't be able to connect if the\nserver is not already running!"))),(0,o.kt)("p",null,"Double click on the installer to start the installation process."),(0,o.kt)("p",null,"Once the installation is completed, Memgraph Lab will launch, and you will be\npresented with the Home screen. Click ",(0,o.kt)("strong",{parentName:"p"},"Connect now")," to connect to your\nMemgraph instance."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Connect to MemgraphDB",src:n(15083).Z,width:"960",height:"561"})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also click ",(0,o.kt)("strong",{parentName:"p"},"Connect Manually"),' to connect to Memgraph. Manual\nconnection is usually used when you want to connect to a remote instance of\nMemgraph, and not a local one. Using the default values of the "Host" and "Port"\ntext fields, and leaving the "Username" and "Password" fields blank, will also\nconnect you to your running Memgraph instance.'))),(0,o.kt)("p",null,"Once connected, you'll be presented with Memgraph Lab's user interface."),(0,o.kt)("p",null,"Now that you have Memgraph Lab installed and connected to Memgraph, you will run\na few basic queries to make sure everything works properly."),(0,o.kt)("h2",{id:"step-4---testing-the-memgraph-labs-connection-to-memgraph"},"Step 4 - Testing the Memgraph Lab's connection to Memgraph"),(0,o.kt)("p",null,"You can test the Memgraph Lab's connection to Memgraph by running your first\nquery. You will use the Cypher query to create a simple graph that has two nodes\nand one relationship."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"memgraph-lab-run-match-query-result",src:n(88266).Z,width:"1757",height:"589"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"First, click the ",(0,o.kt)("strong",{parentName:"p"},"Query")," in the sidebar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, enter this first query at the query editor which is located at the top\nof the screen:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,o.kt)("p",{parentName:"li"},"The query above creates 2 nodes and a relationship between them.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Lastly, click "Run" or press ',(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + Enter")," to execute the query."))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"memgraph-lab-run-query",src:n(12659).Z,width:"960",height:"520"})),(0,o.kt)("p",null,"If no error message appeared, that means your query was executed successfully."),(0,o.kt)("p",null,"You can retrieve the nodes and relationships you've just created by executing\nthe following Cypher query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x)\nRETURN u, r, x;\n")),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Data")," tab your result should look similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"memgraph-lab-run-match-query-data",src:n(32831).Z,width:"960",height:"520"})),(0,o.kt)("p",null,"If you switch to the ",(0,o.kt)("strong",{parentName:"p"},"Graph")," tab you will see something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"memgraph-lab-run-match-query-graph",src:n(32066).Z,width:"960",height:"520"})),(0,o.kt)("p",null,"Now you have the Memgraph Lab working correctly on your system. Memgraph Lab's\nvisual presentation of query results is one of its best features."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"In this tutorial, you installed MemgraphDB and Memgraph Lab on Windows 10 using\nWindows Subsystem for Linux. You tested the Memgraph Lab's connection to\nMemgraphDB by executing Cypher queries."),(0,o.kt)("p",null,"To learn how to query the database, take a look at the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph"},"querying"))," guide or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,o.kt)("br",null),"\nVisit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."))}c.isMDXComponent=!0},15083:function(e,t,n){t.Z=n.p+"assets/images/memgraph-lab-connect-now-12fd11e6f07120eb9176585c8d8275a5.png"},32831:function(e,t,n){t.Z=n.p+"assets/images/memgraph-lab-run-match-query-data-6a43a07ad56bb5aa1c0c78b47ace16af.png"},32066:function(e,t,n){t.Z=n.p+"assets/images/memgraph-lab-run-match-query-graph-31cef5974801287143fdedd01661fd37.png"},88266:function(e,t,n){t.Z=n.p+"assets/images/memgraph-lab-run-match-query-result-fe26f9437f7cc9868e4d7aa8e12bcddb.png"},12659:function(e,t,n){t.Z=n.p+"assets/images/memgraph-lab-run-query-ae0bc32694bfa32e48deb63ff7ab9ce3.png"}}]);