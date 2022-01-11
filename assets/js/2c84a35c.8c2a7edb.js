"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4418],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3081:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"java",title:"Java quick start",sidebar_label:"Java"},s=void 0,p={unversionedId:"connect-to-memgraph/drivers/java",id:"connect-to-memgraph/drivers/java",title:"Java quick start",description:"At the end of this guide, you will have created a simple Java console **`Hello,",source:"@site/docs/connect-to-memgraph/drivers/java.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/java",permalink:"/docs/memgraph/next/connect-to-memgraph/drivers/java",editUrl:"https://github.com/memgraph/docs/tree/master/docs/connect-to-memgraph/drivers/java.md",tags:[],version:"current",frontMatter:{id:"java",title:"Java quick start",sidebar_label:"Java"},sidebar:"memgraph",previous:{title:"C#",permalink:"/docs/memgraph/next/connect-to-memgraph/drivers/c-sharp"},next:{title:"Go",permalink:"/docs/memgraph/next/connect-to-memgraph/drivers/go"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Basic Setup",id:"basic-setup",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of this guide, you will have created a simple Java console ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Hello,\nWorld!"))," program that connects to the Memgraph database and executes simple\nqueries."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"For this guide you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/next/installation"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,o.kt)("li",{parentName:"ul"},"Java 8 or 11 installed.")),(0,o.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,o.kt)("p",null,"We'll be using Eclipse IDE 2020-09 on Windows 10 to connect a simple Java\nconsole application to a running Memgraph instance using ",(0,o.kt)("strong",{parentName:"p"},"Maven"),". If you're\nusing a different IDE, the steps might be slightly different, but the code is\nprobably the same or very similar.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Open ",(0,o.kt)("strong",{parentName:"p"},"Eclipse")," and create a new ",(0,o.kt)("strong",{parentName:"p"},"Maven project"),".",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"2.")," Select\nthe ",(0,o.kt)("strong",{parentName:"p"},"Create a simple project")," option.",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"3.")," For the ",(0,o.kt)("strong",{parentName:"p"},"Group Id")," field\nput ",(0,o.kt)("inlineCode",{parentName:"p"},"com.memgraph.app")," and for ",(0,o.kt)("strong",{parentName:"p"},"Artifact Id")," put ",(0,o.kt)("inlineCode",{parentName:"p"},"my-app")," . Afterwards, click\nthe ",(0,o.kt)("strong",{parentName:"p"},"Finish")," button.",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"4.")," Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file and add the\nfollowing dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"<dependencies>\n    <dependency>\n      <groupId>org.neo4j.driver</groupId>\n      <artifactId>neo4j-java-driver</artifactId>\n      <version>4.1.1</version>\n    </dependency>\n  </dependencies>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," Create the ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld.java")," program and copy the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.neo4j.driver.AuthTokens;\nimport org.neo4j.driver.Driver;\nimport org.neo4j.driver.GraphDatabase;\nimport org.neo4j.driver.Session;\nimport org.neo4j.driver.Result;\nimport org.neo4j.driver.Transaction;\nimport org.neo4j.driver.TransactionWork;\n\nimport static org.neo4j.driver.Values.parameters;\n\npublic class HelloWorld implements AutoCloseable\n{\n    private final Driver driver;\n\n    public HelloWorld( String uri, String user, String password )\n    {\n        driver = GraphDatabase.driver( uri, AuthTokens.basic( user, password ) );\n    }\n\n    public void close() throws Exception\n    {\n        driver.close();\n    }\n\n    public void printGreeting( final String message )\n    {\n        try ( Session session = driver.session() )\n        {\n            String greeting = session.writeTransaction( new TransactionWork<String>()\n            {\n                @Override\n                public String execute( Transaction tx )\n                {\n                    Result result = tx.run( "CREATE (a:Greeting) " +\n                                                     "SET a.message = $message " +\n                                                     "RETURN \'Node \' + id(a) + \': \' + a.message",\n                            parameters( "message", message ) );\n                    return result.single().get( 0 ).asString();\n                }\n            } );\n            System.out.println( greeting );\n        }\n    }\n\n    public static void main( String... args ) throws Exception\n    {\n        try ( HelloWorld greeter = new HelloWorld( "bolt://localhost:7687", "", "" ) )\n        {\n            greeter.printGreeting( "Hello, World!" );\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Once you run the program, you should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/how-to-guides"},"How-to guides")),"\nsection to get an overview of all the functionalities Memgraph offers."))}m.isMDXComponent=!0}}]);