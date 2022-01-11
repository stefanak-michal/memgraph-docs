"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2367],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40913:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"rust",title:"Rust quick start",sidebar_label:"Rust"},s=void 0,c={unversionedId:"connect-to-memgraph/drivers/rust",id:"version-2.1.1/connect-to-memgraph/drivers/rust",title:"Rust quick start",description:"At the end of this guide, you will have created a simple Rust **`Hello,",source:"@site/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/rust.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/rust",permalink:"/docs/memgraph/connect-to-memgraph/drivers/rust",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/rust.md",tags:[],version:"2.1.1",frontMatter:{id:"rust",title:"Rust quick start",sidebar_label:"Rust"},sidebar:"memgraph",previous:{title:"Python",permalink:"/docs/memgraph/connect-to-memgraph/drivers/python"},next:{title:"C#",permalink:"/docs/memgraph/connect-to-memgraph/drivers/c-sharp"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Basic setup",id:"basic-setup",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of this guide, you will have created a simple Rust ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Hello,\nWorld!"))," program that connects to the Memgraph database and executes simple\nqueries."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/installation"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker")," installed and running. Instructions on how to setup Docker can be\nfound on the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/memgraph/rsmgclient"},(0,o.kt)("strong",{parentName:"a"},"rsmgclient driver")),". A\nMemgraph database adapter for the Rust programming language. ",(0,o.kt)("strong",{parentName:"li"},"(if you are not\nusing Docker)"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," We recommend using Docker because it simplifies installing the driver\ndependencies. If you don't wish to use Docker, you will need to install the\n",(0,o.kt)("strong",{parentName:"p"},"rsmgclient driver")," locally."))),(0,o.kt)("h2",{id:"basic-setup"},"Basic setup"),(0,o.kt)("p",null,"We'll be using a ",(0,o.kt)("strong",{parentName:"p"},"Dockerized Rust program")," to demonstrate how to connect to a\nrunning Memgraph database instance. If you don't wish to use Docker, the steps\nmight be slightly different, but the code is most likley the same or very\nsimilar.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Create a new Rust project with the name ",(0,o.kt)("strong",{parentName:"p"},"memgraph_rust")," by running the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo new memgraph_rust --bin\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Add the following line to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," file under the line\n",(0,o.kt)("inlineCode",{parentName:"p"},"[dependencies]")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'rsmgclient = "0.1.1"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," To create the actual program, add the following code to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main.rs"),"\nfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use rsmgclient::{ConnectParams, Connection, SSLMode};\n\nfn main(){\n    // Parameters for connecting to database.\n    let connect_params = ConnectParams {\n        host: Some(String::from("172.17.0.2")),\n        sslmode: SSLMode::Disable,\n        ..Default::default()\n    };\n\n    // Make a connection to the database.\n    let mut connection = match Connection::connect(&connect_params) {\n        Ok(c) => c,\n        Err(err) => panic!("{}", err)\n    };\n\n    // Execute a query.\n    let query = "CREATE (u:User {name: \'Alice\'})-[:Likes]->(m:Software {name: \'Memgraph\'}) RETURN u, m";\n    match connection.execute(query, None) {\n        Ok(columns) => println!("Columns: {}", columns.join(", ")),\n        Err(err) => panic!("{}", err)\n    };\n\n    // Fetch all query results.\n    match connection.fetchall() {\n        Ok(records) => {\n            for value in &records[0].values {\n                println!("{}", value);\n            }\n        },\n        Err(err) => panic!("{}", err)\n    };\n\n    // Commit any pending transaction to the database.\n    match connection.commit() {\n        Ok(()) => {},\n        Err(err) => panic!("{}", err)\n    };\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Create a new file in the project root directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/memgraph_rust")," and name\nit ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," . Add the following code to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# Set base image (host OS)\nFROM rust:1.42\n\n# Install CMake\nRUN apt-get update && \\\n  apt-get --yes install cmake\n\n# Install mgclient\nRUN apt-get install -y git cmake make gcc g++ libssl-dev && \\\n  git clone https://github.com/memgraph/mgclient.git /mgclient && \\\n  cd mgclient && \\\n  git checkout 5ae69ea4774e9b525a2be0c9fc25fb83490f13bb && \\\n  mkdir build && \\\n  cd build && \\\n  cmake .. && \\\n  make && \\\n  make install\n\n# Set the working directory in the container\nWORKDIR /code\n\n# Copy the dependencies file to the working directory\nCOPY Cargo.toml .\n\n# Copy the content of the local src directory to the working directory\nRUN mkdir src\nCOPY src/ ./src\n\n# Generate binary using the Rust compiler\nRUN cargo build\n\n# Command to run on container start\nCMD [ "cargo", "run" ]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," Don't forget to change the host address in your code.",(0,o.kt)("br",null)," Find the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CONTAINER ID"))," with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," and use it in the following command to\nretrieve the address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER ID\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," To run the application, first, you need to create a Docker image with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t memgraph_rust .\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7.")," Now, you can start the application with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run memgraph_rust\n")),(0,o.kt)("p",null,"You should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Columns: u, m\n(:User {'name': 'Alice'})\n(:Software {'name': 'Memgraph'})\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-guides"},"How-to guides")),"\nsection to get an overview of all the functionalities Memgraph offers."))}u.isMDXComponent=!0}}]);