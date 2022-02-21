"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83624],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return g}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=m(a),g=n,c=u["".concat(p,".").concat(g)]||u[g]||h[g]||o;return a?r.createElement(c,i(i({ref:e},s),{},{components:a})):r.createElement(c,i({ref:e},s))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13548:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"overview",title:"Tutorials",sidebar_label:"Tutorials overview",slug:"/tutorials"},p=void 0,m={unversionedId:"tutorials/overview",id:"version-2.1.1/tutorials/overview",title:"Tutorials",description:"Articles within the tutorials section serve as real-world examples of using",source:"@site/memgraph_versioned_docs/version-2.1.1/tutorials/overview.md",sourceDirName:"tutorials",slug:"/tutorials",permalink:"/docs/memgraph/2.1.1/tutorials",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/tutorials/overview.md",tags:[],version:"2.1.1",frontMatter:{id:"overview",title:"Tutorials",sidebar_label:"Tutorials overview",slug:"/tutorials"},sidebar:"memgraph",previous:{title:"JSON",permalink:"/docs/memgraph/2.1.1/import-data/json/load-json"},next:{title:"Analyzing TED Talks",permalink:"/docs/memgraph/2.1.1/tutorials/analyzing-ted-talks"}},s=[{value:"Cypher and graph analytics tutorials",id:"cypher-and-graph-analytics-tutorials",children:[],level:2},{value:"Building applications and other tutorials",id:"building-applications-and-other-tutorials",children:[],level:2}],h={toc:s};function u(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Articles within the tutorials section serve as real-world examples of using\nMemgraph."),(0,o.kt)("h2",{id:"cypher-and-graph-analytics-tutorials"},"Cypher and graph analytics tutorials"),(0,o.kt)("p",null,"These articles tend to provide the user with a reasonably-sized dataset and some\nexample queries that showcase how to use Memgraph on that particular dataset. We\nencourage all Memgraph users to go through at least one of the tutorials as they\ncan also serve as a verification that Memgraph is successfully installed on your\nsystem."),(0,o.kt)("p",null,"So far we have covered the following topics with basic tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/analyzing-ted-talks"},"Analyzing TED Talks"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/ted-talks"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/backpacking-through-europe"},"Backpacking Through Europe"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/europe-backpacking"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/exploring-the-european-road-network"},"Exploring the European Road\nNetwork"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/europe-roads"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/football-transfers"},"Football Transfers"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/football-transfers"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/got-deaths"},"Game of Thrones deaths"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/game-of-thrones-deaths"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/graphing-the-premier-league"},"Graphing the Premier League"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/football-premier-league"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/movie-recommendation"},"Movie Recommendation System"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/marvel-universe"},"Marvel Comic Universe Social Network"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/marvel-comics"},"Try it on\nPlayground!"))),(0,o.kt)("p",null,"If you are looking for more complex tutorials that include the usage of database\nfunctionalities such as query modules, then take a look at these:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/understanding-music-with-modules"},"Understanding music (with modules)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials/social-network-analysis"},"Social Network Analysis with NetworkX")))),(0,o.kt)("h2",{id:"building-applications-and-other-tutorials"},"Building applications and other tutorials"),(0,o.kt)("p",null,"These articles demonstrate how to build real-world applications that use graph\nanalytics and how to perform complex network analysis with Memgraph. Each one\nfocuses on a specific problem."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Article"),(0,o.kt)("th",{parentName:"tr",align:null},"GitHub code"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Streaming data"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/reddit-network-explorer"},"Visualizing and Analyzing Reddit In Real-Time with Kafka and Memgraph")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/reddit-network-explorer/"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2611\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/slack-influence-bot"},"Analyzing Interactions in a Slack Communication Network")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/slack-influence-bot/"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2611\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/spotify-song-recommender"},"How to build a Spotify Recommendation Engine using Kafka and Memgraph")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/spotify-song-recommender"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2611\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/how-to-visualize-a-social-network-in-python-with-a-graph-database"},"How to Visualize a Social Network in Python with a Graph Database: Flask + Docker + D3.js")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/sng-demo"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/how-to-develop-a-credit-card-fraud-detection-application-using-memgraph-flask-and-d3js"},"How to Develop a Credit Card Fraud Detection Application using Memgraph, Flask, and D3.js")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/card-fraud"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/visualize-the-bitclout-network-using-d3js"},"Building a BitClout Social Network Visualization App With Memgraph and D3.js")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/bitclout-visualizing-hodlers/tree/main/bitclout-demo"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/identifying-essential-proteins"},"Identifying Essential Proteins using Betweenness Centrality & Memgraph MAGE")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/protein-explorer"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/how-to-build-a-flight-network-analysis-graph-asp-net-application-with-memgraph-c-sharp-and-d3-js"},"How to Build a Flight Network Analysis Graph-Based ASP.NET Application with Memgraph, C#, and D3.js")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/MemFlights"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})))),(0,o.kt)("p",null,"We have also covered the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/optimizing_telco_networks_with_graph_coloring_and_memgraph_mage"},"Optimizing Telco Networks With Graph Coloring & Memgraph\nMAGE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/exploring-the-hebrew-bible-person-relationships"},"Exploring Interpersonal Relationships in the\nBible")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/modeling_visualizing_navigating_a_transportation_network_with_memgraph"},"Modeling, Visualizing, and Navigating a Transportation Network with\nMemgraph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/influencers-among-computer-scientists"},"Influencers among computer\nscientists")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/air-traffic-routing-with-memgraph"},"Air Traffic Routing with\nMemgraph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/building-a-recommendation-system-using-memgraph"},"Building a Recommendation System using\nMemgraph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/how-to-implement-custom-json-utility-procedures-with-memgraph-mage-and-python"},"How to Implement Custom JSON Utility Procedures With Memgraph MAGE and\nPython")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/community_detection_with_memgraph_and_python_networkx"},"Running Community Detection with Memgraph and Python\nNetworkX")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/how-to-write-custom-cypher-procedures-with-networkx-and-memgraph"},"How to Write Custom Cypher Procedures with NetworkX and\nMemgraph"))))}u.isMDXComponent=!0}}]);