(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),o=(n(0),n(324)),i={id:"backpacking-through-europe",title:"Backpacking through Europe",sidebar_label:"Backpacking through Europe"},s={unversionedId:"tutorials/backpacking-through-europe",id:"version-1.3.0/tutorials/backpacking-through-europe",isDocsHomePage:!1,title:"Backpacking through Europe",description:"This article is a part of a series intended to show users how to use Memgraph",source:"@site/memgraph_versioned_docs/version-1.3.0/tutorials/backpacking-through-europe.md",slug:"/tutorials/backpacking-through-europe",permalink:"/memgraph/1.3.0/tutorials/backpacking-through-europe",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/tutorials/backpacking-through-europe.md",version:"1.3.0",sidebar_label:"Backpacking through Europe",sidebar:"version-1.3.0/memgraph",previous:{title:"Analyzing TED Talks",permalink:"/memgraph/1.3.0/tutorials/analyzing-ted-talks"},next:{title:"Exploring the European road network",permalink:"/memgraph/1.3.0/tutorials/exploring-the-european-road-network"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[]},{value:"Example queries",id:"example-queries",children:[]}],p={toc:c};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article is a part of a series intended to show users how to use Memgraph\non real-world data and, by doing so, retrieve some interesting and useful\ninformation."),Object(o.b)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",Object(o.b)("a",{parentName:"p",href:"/memgraph/1.3.0/tutorials/tutorials"},"tutorial overview section"),"."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Backpacking is a form of low-cost independent travel. It includes the use of\npublic transportation, inexpensive hostels and is often longer in duration\nthan conventional vacations.\nThis article explores the European Backpackers Index from 2018.\nThe dataset contains tourist prices and other data for 56 of the most popular\nEuropean cities. Here we showcase how Memgraph's graph traversal algorithms can\nbe used to make a real-time travelling recommendation system."),Object(o.b)("h2",{id:"data-model"},"Data model"),Object(o.b)("p",null,"The European Backpacker Index (2018) contains information for 56 cities from\n36 European countries.\nTwo cities are connected via the ",Object(o.b)("inlineCode",{parentName:"p"},":CloseTo")," edge if they are from the same\nor from the neighboring countries. Every edge has an ",Object(o.b)("inlineCode",{parentName:"p"},"eu_border")," property to\nindicate whether the EU border needs to be crossed to reach the other city.\nThe index lists the cheapest and most attractive hostel from each city.\nThe hostel name can be accessed via the ",Object(o.b)("inlineCode",{parentName:"p"},"cheapest_hostel")," parameter, and its\nwebsite is stored in ",Object(o.b)("inlineCode",{parentName:"p"},"hostel_url"),".\nThe city nodes also contain parameters for tourist information such as\n",Object(o.b)("inlineCode",{parentName:"p"},"local_currency"),", ",Object(o.b)("inlineCode",{parentName:"p"},"local_currency_code"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"total_USD"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"total_USD")," is the sum of the most common tourist expenses,\nsuch as ",Object(o.b)("inlineCode",{parentName:"p"},"cost_per_night_USD"),", ",Object(o.b)("inlineCode",{parentName:"p"},"attractions_USD"),", ",Object(o.b)("inlineCode",{parentName:"p"},"drinks_USD"),", ",Object(o.b)("inlineCode",{parentName:"p"},"meals_USD"),", and\n",Object(o.b)("inlineCode",{parentName:"p"},"transportation_USD"),".\nThe country nodes are connected with the ",Object(o.b)("inlineCode",{parentName:"p"},":Borders")," edge if they are\nneighboring countries. This edge also has the ",Object(o.b)("inlineCode",{parentName:"p"},"eu_border")," property.\nEvery city node is connected to its parent country node via the ",Object(o.b)("inlineCode",{parentName:"p"},":Inside"),"\nedge."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Backpacking",src:n(446).default})),Object(o.b)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),Object(o.b)("p",null,"You have two options for exploring this dataset.\nIf you just want to take a look at the dataset and try out a few queries, open\n",Object(o.b)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and continue with\nthe tutorial there. Note that you will not be able to execute ",Object(o.b)("inlineCode",{parentName:"p"},"write")," operations."),Object(o.b)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",Object(o.b)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and navigate\nto the ",Object(o.b)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",Object(o.b)("inlineCode",{parentName:"p"},"Backpacking through Europe")," and continue with the tutorial."),Object(o.b)("h2",{id:"example-queries"},"Example queries"),Object(o.b)("p",null,"1) Let's list the top 10 cities with the cheapest hostels by cost per night\nfrom the European Backpacker Index."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:City)\nRETURN n.name, n.cheapest_hostel, n.cost_per_night_USD, n.hostel_url\nORDER BY n.cost_per_night_USD LIMIT 10;\n")),Object(o.b)("p",null,"2) Say we want to visit Croatia. Which cities does Backpackers Index recommend?\nLet's sort them by total costs."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH (c:City)-[:Inside]->(:Country {name: "Croatia"})\nRETURN c.name, c.cheapest_hostel, c.total_USD\nORDER BY c.total_USD;\n')),Object(o.b)("p",null,"3) What if we want to visit multiple cities in a single country and want to know\nwhich country has the most cities in the index?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country)<-[:Inside]-(m:City)\nRETURN n.name AS CountryName, COUNT(m) AS HostelCount\nORDER BY HostelCount DESC, CountryName LIMIT 10;\n")),Object(o.b)("p",null,"Now, let's start backpacking. This is where Memgraph's graph traversal\ncapabilities come into play."),Object(o.b)("p",null,"4) We're on a trip from Spain to Russia and want to cross the least amount of\nborders. This is a great job for the breadth-first search (BFS) algorithm."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (n:Country {name: "Spain"})\n          -[r:Borders * bfs]-\n          (m:Country {name: "Russia"})\nUNWIND (nodes(p)) AS rows\nRETURN rows.name;\n')),Object(o.b)("p",null,"5) What if we're interested in going from Bratislava to Madrid with the least\namount of stops? Also, we can't be bothered to switch currencies and want to\npay with Euro everywhere along the trip."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Bratislava"})\n          -[:CloseTo * bfs (e, v | v.local_currency = "Euro")]-\n          (:City {name: "Madrid"})\nUNWIND (nodes(p)) AS rows\nRETURN rows.name;\n')),Object(o.b)("p",null,"Here we can see how to use the ",Object(o.b)("em",{parentName:"p"},"filter lambda")," to filter paths where the\nlocal currency in the city vertex ",Object(o.b)("inlineCode",{parentName:"p"},"v")," is the Euro.\n",Object(o.b)("inlineCode",{parentName:"p"},"nodes(p)")," returns the path as a list, and ",Object(o.b)("inlineCode",{parentName:"p"},"UNWIND")," unpacks the list\ninto individual rows."),Object(o.b)("p",null,"6) This time we're going from Brussels to Athens on a budget.\nWe're interested in the route with the cheapest stays.\nBut there's a problem, we've lost our passport!\nLuckily, we're a European Union citizen and can travel freely within the EU.\nLet's find the cheapest route from Brussels to Athens with no EU border crossings.\nThis is a good use case for the Dijkstra's shortest path algorithm."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Brussels"})\n          -[:CloseTo * wShortest(e, v | v.cost_per_night_USD) total_cost (e, v | e.eu_border=FALSE)]-\n          (:City {name: "Athens"})\nWITH extract(city in nodes(p) | city.name) AS trip, total_cost\nRETURN trip, total_cost;\n')),Object(o.b)("p",null,"Here we used the ",Object(o.b)("em",{parentName:"p"},"weight lambda")," to specify the cost of expanding to the\nspecified vertex using the given edge (",Object(o.b)("inlineCode",{parentName:"p"},"v.cost_per_night_USD"),"), and the\n",Object(o.b)("em",{parentName:"p"},"total cost")," symbol to calculate the cost of the trip.\nThis can be done using an edge property like in the\n",Object(o.b)("a",{parentName:"p",href:"/memgraph/1.3.0/tutorials/exploring-the-european-road-network"},"Exploring the European Road Network"),"\ntutorial.\nHere we use ",Object(o.b)("inlineCode",{parentName:"p"},"cost_per_night")," property of the city vertex ",Object(o.b)("inlineCode",{parentName:"p"},"v")," as our weight.\nFinally, we use the ",Object(o.b)("em",{parentName:"p"},"filter lambda")," to only consider paths with no EU border\ncrossings. The ",Object(o.b)("inlineCode",{parentName:"p"},"extract")," function is used to only show the city names.\nTo get the full city information, we would simply return ",Object(o.b)("inlineCode",{parentName:"p"},"nodes(p)"),"."),Object(o.b)("p",null,"7) We're on a trip with our friends from Madrid to Belgrade, but want to visit\nVienna along the way. We want to party it up on the first part of our trip and\nare only interested in the cost of staying and drinks.\nAfter that, we plan on sightseeing and are interested in the cost of attractions\nfrom Vienna to Belgrade. What is our cheapest option?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Madrid"})\n          -[:CloseTo * wShortest(e, v | v.cost_per_night_USD + v.drinks_USD) cost1]-\n          (:City {name: "Vienna"})\n          -[:CloseTo * wShortest(e, v | v.cost_per_night_USD + v.attractions_USD) cost2]-\n          (:City {name: "Belgrade"})\nWITH extract(city in nodes(p) | city.name) AS trip, cost1, cost2\nRETURN trip, cost1 + cost2 AS total_cost;\n')),Object(o.b)("p",null,"8) We're on a trip from Paris to Zagreb and want to visit at least 3 cities,\nbut no more than 5 (excluding the starting location ","\u2014"," Paris).\nLet's list our top 10 options sorted by the total trip cost and number of\ncities in the path."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'MATCH path = (n:City {name: "Paris"})-[:CloseTo *3..5]-(m:City {name: "Zagreb"}) \nWITH nodes(path) AS trip\nWITH extract(city in trip | [city, trip]) AS lst\nUNWIND lst AS rows\nWITH rows[0] AS city, extract(city in rows[1] | city.name) AS trip\nRETURN trip,\n       toInteger(sum(city.total_USD)) AS trip_cost_USD,\n       count(trip) AS city_count\nORDER BY trip_cost_USD, city_count DESC LIMIT 10;\n')),Object(o.b)("p",null,"Here we can see the usage of the variable length paths.\nBy using the ",Object(o.b)("inlineCode",{parentName:"p"},"*")," ",Object(o.b)("em",{parentName:"p"},"(asterisk)")," symbol, we can traverse from one node to another\nby following any number of connections.\nWe then use the extract function to get a list of (city, trip) tuples.\nThe city is used to calculate the total cost of the trip using the sum function.\nFinally, we sort our results by price first, and then by city count."),Object(o.b)("p",null,"To learn more about these algorithms, we suggest you check out their Wikipedia\npages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"Breadth-first search")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"},"Dijkstra's algorithm"))))}l.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),b=a,d=h["".concat(i,".").concat(b)]||h[b]||u[b]||o;return n?r.a.createElement(d,s(s({ref:t},p),{},{components:n})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},446:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/backpacking_metagraph-50976049aa85a582ed0afc3e921187f2.png"}}]);