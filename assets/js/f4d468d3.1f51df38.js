"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98241],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65099:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"c-sharp",title:"C# quick start",sidebar_label:"C#"},l=void 0,p={unversionedId:"connect-to-memgraph/methods/building-applications/c-sharp",id:"version-2.1.0/connect-to-memgraph/methods/building-applications/c-sharp",title:"C# quick start",description:"At the end of this guide, you will have created a simple .NET console Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/memgraph_versioned_docs/version-2.1.0/connect-to-memgraph/methods/building-applications/c-sharp.md",sourceDirName:"connect-to-memgraph/methods/building-applications",slug:"/connect-to-memgraph/methods/building-applications/c-sharp",permalink:"/docs/memgraph/2.1.0/connect-to-memgraph/methods/building-applications/c-sharp",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/connect-to-memgraph/methods/building-applications/c-sharp.md",tags:[],version:"2.1.0",frontMatter:{id:"c-sharp",title:"C# quick start",sidebar_label:"C#"},sidebar:"version-2.1.0/memgraph",previous:{title:"Rust",permalink:"/docs/memgraph/2.1.0/connect-to-memgraph/methods/building-applications/rust"},next:{title:"Java",permalink:"/docs/memgraph/2.1.0/connect-to-memgraph/methods/building-applications/java"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Driver",id:"driver",level:2},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Alternative Setup",id:"alternative-setup",level:2},{value:"Where to next?",id:"where-to-next",level:2}],m={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of this guide, you will have created a simple .NET console ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"For this guide you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look at the ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.0/installation"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model.")),(0,o.kt)("h2",{id:"driver"},"Driver"),(0,o.kt)("p",null,"Please note that the code samples in this guide utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"Neo4j.Driver.Simple")," package which implements a blocking interface around the 'main' driver. It should be used as a tool for getting started quickly. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Neo4j.Driver")," package contains the official and complete driver for real-world projects.\nThe driver documentation can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neo4j/neo4j-dotnet-driver"},"Neo4j .NET Driver"),"."),(0,o.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,o.kt)("p",null,"We'll be using Visual Studio 2019 on Windows 10 to connect a simple .NET console application to a running Memgraph instance.\nIf you're using a different IDE, the steps might be slightly different, but the code is probably the same or very similar.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Open ",(0,o.kt)("strong",{parentName:"p"},"Visual Studio")," and create a new project.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"2.")," Find and select the ",(0,o.kt)("strong",{parentName:"p"},"Console App (.NET Core)")," template by using the search box.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"3.")," Name your project ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"MemgraphApp")),", choose an appropriate location for it, and click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"4.")," Select the ",(0,o.kt)("strong",{parentName:"p"},"Tools > NuGet Package Manager > Package Manager Console")," menu command.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"5.")," Once the console opens, check that the ",(0,o.kt)("strong",{parentName:"p"},"Default project")," drop-down list shows the project into which you want to install the package.\nIf you have a single project in the solution, it is already selected.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"6.")," Enter the command ",(0,o.kt)("strong",{parentName:"p"},"Install-Package Neo4j.Driver.Simple"),"."),(0,o.kt)("p",null,"Now, you should have the newest version of the driver installed and can proceed to copy the following code into the ",(0,o.kt)("strong",{parentName:"p"},"Program.cs")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},'using System;\nusing System.Linq;\nusing Neo4j.Driver;\n\nnamespace MemgraphApp\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            string message = "Hello, World!";\n\n            using var _driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.None);\n            using var session = _driver.Session();\n\n            var greeting = session.WriteTransaction(tx =>\n            {\n                var result = tx.Run("CREATE (n:FirstNode) " +\n                                    "SET n.message = $message " +\n                                    "RETURN \'Node \'  + id(n) + \': \' + n.message",\n                    new { message });\n                return result.Single()[0].As<string>();\n            });\n            Console.WriteLine(greeting);\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Once you run the program, you should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,o.kt)("h2",{id:"alternative-setup"},"Alternative Setup"),(0,o.kt)("p",null,"If you want to try out more complex operations, feel free to use the refactored code below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c#"},'using System;\nusing System.Linq;\nusing Neo4j.Driver;\n\nnamespace MemgraphApp\n{\n    public class Program : IDisposable\n    {\n        private readonly IDriver _driver;\n\n        public Program(string uri, string user, string password)\n        {\n            _driver = GraphDatabase.Driver(uri, AuthTokens.Basic(user, password));\n        }\n\n        public void PrintGreeting(string message)\n        {\n            using (var session = _driver.Session())\n            {\n                var greeting = session.WriteTransaction(tx =>\n                {\n                    var result = tx.Run("CREATE (n:FirstNode) " +\n                                        "SET n.message = $message " +\n                                        "RETURN \'Node \'  + id(n) + \': \' + n.message",\n                        new { message });\n                    return result.Single()[0].As<string>();\n                });\n                Console.WriteLine(greeting);\n            }\n        }\n\n        public void Dispose()\n        {\n            _driver?.Dispose();\n        }\n\n        public static void Main()\n        {\n            using (var greeter = new Program("bolt://localhost:7687", "", ""))\n            {\n                greeter.PrintGreeting("Hello, World!");\n            }\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."))}g.isMDXComponent=!0}}]);