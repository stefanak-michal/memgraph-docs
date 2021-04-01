(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(324)),i={id:"python",title:"Python quick start",sidebar_label:"Python"},c={unversionedId:"getting-started/connecting-applications/python",id:"version-1.3.0/getting-started/connecting-applications/python",isDocsHomePage:!1,title:"Python quick start",description:"At the end of this guide, you will have created a simple Python Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/memgraph_versioned_docs/version-1.3.0/getting-started/connecting-applications/python.md",slug:"/getting-started/connecting-applications/python",permalink:"/memgraph/1.3.0/getting-started/connecting-applications/python",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/getting-started/connecting-applications/python.md",version:"1.3.0",sidebar_label:"Python",sidebar:"version-1.3.0/memgraph",previous:{title:"Building applications",permalink:"/memgraph/1.3.0/getting-started/connecting-applications"},next:{title:"Rust quick start",permalink:"/memgraph/1.3.0/getting-started/connecting-applications/rust"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic setup",id:"basic-setup",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At the end of this guide, you will have created a simple Python ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"To follow this guide, you will need:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to setup Memgraph, take a look at the ",Object(o.b)("a",{parentName:"li",href:"/memgraph/1.3.0/getting-started/installation"},"Installation guide"),"."),Object(o.b)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Docker")," installed and running. Instructions on how to setup Docker can be found on the ",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("a",{parentName:"li",href:"https://github.com/memgraph/pymgclient"},Object(o.b)("strong",{parentName:"a"},"pymgclient driver")),". A Memgraph database adapter for the Python programming language. ",Object(o.b)("strong",{parentName:"li"},"(if you are not using Docker)"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"NOTE:")," We recommend using Docker because it simplifies installing the driver dependencies. If you don't wish to use Docker, you will need to install the ",Object(o.b)("strong",{parentName:"p"},"pymgclient driver")," locally."))),Object(o.b)("h2",{id:"basic-setup"},"Basic setup"),Object(o.b)("p",null,"We'll be using a ",Object(o.b)("strong",{parentName:"p"},"Dockerized Python program")," to demonstrate how to connect to a running Memgraph database instance.\nIf you don't wish to use Docker, the steps might be slightly different, but the code is most likely the same or very similar.",Object(o.b)("br",null),"  "),Object(o.b)("p",null,"Let's jump in and connect a simple program to Memgraph."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.")," Create a new directory for your program, for example ",Object(o.b)("inlineCode",{parentName:"p"},"/memgraph_python")," and position yourself in it.",Object(o.b)("br",null),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"2.")," Create a ",Object(o.b)("inlineCode",{parentName:"p"},"requirements.txt")," file which will contain a list of items to be installed using ",Object(o.b)("strong",{parentName:"p"},"pip"),". Leave it empty for the purposes of this guide.",Object(o.b)("br",null),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"3.")," Create a new file in the project root directory ",Object(o.b)("inlineCode",{parentName:"p"},"/memgraph_python")," and name it  ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),". Add the following code to it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Dockerfile"},'# Set base image (host OS)\nFROM python:3.8\n\n# Install CMake\nRUN apt-get update && \\\n  apt-get --yes install cmake\n\n# Install mgclient\nRUN apt-get install -y git cmake make gcc g++ libssl-dev && \\\n  git clone https://github.com/memgraph/mgclient.git /mgclient && \\\n  cd mgclient && \\\n  git checkout dd5dcaaed5d7c8b275fbfd5d2ecbfc5006fa5826 && \\\n  mkdir build && \\\n  cd build && \\\n  cmake .. && \\\n  make && \\\n  make install\n\n# Install pymgclient\nRUN git clone https://github.com/memgraph/pymgclient /pymgclient && \\\n  cd pymgclient && \\\n  python3 setup.py build && \\\n  python3 setup.py install\n\n# Set the working directory in the container\nWORKDIR /code\n\n# Copy the dependencies file to the working directory\nCOPY requirements.txt .\n\n# Install dependencies\nRUN pip install -r requirements.txt\n\n# Copy the content of the local src directory to the working directory\nCOPY src/ .\n\n# Command to run on container start\nCMD [ "python", "./program.py" ]\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"4.")," Create a directory for your source code, for example, ",Object(o.b)("inlineCode",{parentName:"p"},"/src")," and position yourself in it.",Object(o.b)("br",null),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"5.")," To make the actual program, create a new Python script. Name it ",Object(o.b)("inlineCode",{parentName:"p"},"program.py")," and add the following code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Python"},'import mgclient\n\n# Make a connection to the database\nconnection = mgclient.connect(host=\'172.17.0.2\', port=7687)\n\n# Create a cursor for query execution\ncursor = connection.cursor()\n\n# Delete all nodes and relationships\nquery = "MATCH (n) DETACH DELETE n"\n\n# Execute the query\ncursor.execute(query)\n\n# Create a node with the label FirstNode and message property with the value "Hello, World!"\nquery = """CREATE (n:FirstNode)\n           SET n.message = \'{message}\'\n           RETURN \'Node \'  + id(n) + \': \' + n.message""".format(message="Hello, World!")\n\n# Execute the query\ncursor.execute(query)\n\n# Fetch one row of query results\nrow = cursor.fetchone()\n\n# Print the first member in row\nprint(row[0])\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"6.")," Don't forget to change the host address in your code.\nFind the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"CONTAINER ID"))," with ",Object(o.b)("inlineCode",{parentName:"p"},"docker ps")," and use it in the following command to retrieve the address:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER ID\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"7.")," To run the application, first, you need to create a Docker image with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker build -t memgraph_python .\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"8.")," Now, you can run the application with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker run memgraph_python\n")),Object(o.b)("p",null,"You should see an output similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),Object(o.b)("h2",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/1.3.0/tutorials/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/1.3.0/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."),Object(o.b)("h2",{id:"getting-help"},"Getting help"),Object(o.b)("p",null,"Visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}s.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||o;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);