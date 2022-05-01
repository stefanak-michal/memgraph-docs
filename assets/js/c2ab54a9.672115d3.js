"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32751],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(n),d=o,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var h=2;h<r;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26621:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"marvel-universe",title:"Marvel Comic Universe social network",sidebar_label:"Marvel Comic Universe social network",slug:"/tutorials/marvel-universe"},l=void 0,h={unversionedId:"tutorials/exploring-datasets/marvel-universe",id:"tutorials/exploring-datasets/marvel-universe",title:"Marvel Comic Universe social network",description:"This article is a part of a series intended to show how to use Memgraph on",source:"@site/docs/tutorials/exploring-datasets/marvel-universe.md",sourceDirName:"tutorials/exploring-datasets",slug:"/tutorials/marvel-universe",permalink:"/docs/memgraph/next/tutorials/marvel-universe",editUrl:"https://github.com/memgraph/docs/tree/master/docs/tutorials/exploring-datasets/marvel-universe.md",tags:[],version:"current",frontMatter:{id:"marvel-universe",title:"Marvel Comic Universe social network",sidebar_label:"Marvel Comic Universe social network",slug:"/tutorials/marvel-universe"},sidebar:"memgraph",previous:{title:"Graphing the Premier League",permalink:"/docs/memgraph/next/tutorials/graphing-the-premier-league"},next:{title:"Movie recommendation system",permalink:"/docs/memgraph/next/tutorials/movie-recommendation"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Data model",id:"data-model",level:2},{value:"Exploring the dataset",id:"exploring-the-dataset",level:2},{value:"Example queries using Cypher",id:"example-queries-using-cypher",level:2},{value:"Nifty things you could do",id:"nifty-things-you-could-do",level:2}],c={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article is a part of a series intended to show how to use Memgraph on\nreal-world data to retrieve some interesting and useful information."),(0,r.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/tutorials"},"tutorial overview section"),"."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Spandex. Muscles. Big egos. Bad hair. No, we're not talking about your high\nschool thrash metal band. We're talking about one of the largest fictional\nsocial networks that is the Marvel Comic Universe! Here we'll teach you how to\nnavigate this complex and confusing assembly of heroes and villains. If you've\never wanted to know who's Spider-Man's best super-buddy, or wanted to find all\nthe comic issues where Hulk, Wolverine, Thor, and Black Panther appear together,\nlook no further and fire up that Memgraph copy of yours!"),(0,r.kt)("h2",{id:"data-model"},"Data model"),(0,r.kt)("p",null,"Although the MCU is chock-full of heroes, the real hero here is Russ Chappell,\nwho painstakingly gathered the MCU data for the ",(0,r.kt)("a",{parentName:"p",href:"http://www.chronologyproject.com"},"Marvel Chronology\nProject"),'. In addition, R. Alberich, J.\nMiro-Julia, and F. Rossello, three data scientists, scraped the Chronology\nProject database, processed the data and put it into a format that can be easily\nimported into any data-processing framework available today. Their aim was to\ninvestigate whether this fictional "social network" has a structure similar to a\nreal-life social network. You can find their interesting findings in the paper\nthat was the culmination of their work, linked\n',(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/cond-mat/0202174.pdf"},"here"),". The data they used, on the\nother hand, can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/csanhueza/the-marvel-universe-social-network"},"here"),".\nWe've used a slightly modified version of this data to create a graph database\nsnapshot ready for use."),(0,r.kt)("p",null,"Now, the data we'll be using in our queries can be classified as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'nodes, labeled as "Hero", "Comic", or "ComicSeries"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'a "Hero" node has a "name" attribute corresponding to both a hero\'s moniker\nand her/his real name (e.g. "SPIDER-MAN/PETER PARKER")'),(0,r.kt)("li",{parentName:"ul"},'a "Comic" node has a "name" attribute corresponding to the comic series name\nand the issue/volume number if it\'s included (e.g. "Astonishing Tales Vol. 2\n12")'),(0,r.kt)("li",{parentName:"ul"},'a "ComicSeries" node has a "title" attribute corresponding to the title of\nthe series a given comic is a part of, e.g. the "Comic" node "AVENGERS VOL.\n3 17" is part of the "AVENGERS VOL. 3" series. In addition, each\n"ComicSeries" node has a "publishYear" attribute, which is a list of years\nin which the series was published.'))),(0,r.kt)("li",{parentName:"ul"},'edges, of type "AppearedIn", "AppearedInSameComic", or "IsPartOfSeries"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'edges connecting a "Hero" node to the "Comic" node it appears in are of type\n"AppearedIn"'),(0,r.kt)("li",{parentName:"ul"},'edges connecting two "Hero" nodes that appeared in the same comic are of\ntype "AppearedInSameComic"'),(0,r.kt)("li",{parentName:"ul"},'edges connecting a "Comic" node and its corresponding "ComicSeries" node,\nrepresenting the inclusion relationship between a particular comic issue and\nthe series it\'s part of, are of type "IsPartOfSeries"')))),(0,r.kt)("p",null,"A visual scheme of our graph database is given below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MCU",src:n(83485).Z,width:"3606",height:"2290"})),(0,r.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,r.kt)("p",null,"You have two options for exploring this dataset. If you just want to take a look\nat the dataset and try out a few queries, open ",(0,r.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/marvel-comics"},"Memgraph\nPlayground")," and continue\nwith the tutorial there. Note that you will not be able to execute ",(0,r.kt)("inlineCode",{parentName:"p"},"write"),"\noperations."),(0,r.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download#memgraph-platform"},"Memgraph Platform"),". Once you\nhave it up and running, open Memgraph Lab web application within the browser on\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,r.kt)("inlineCode",{parentName:"a"},"localhost:3000"))," and navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Datasets")," in the\nsidebar. From there, choose the dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"Marvel Comic Universe social network"),"\nand continue with the tutorial."),(0,r.kt)("h2",{id:"example-queries-using-cypher"},"Example queries using Cypher"),(0,r.kt)("p",null,"In the queries below, we are, as usual, using ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher")," to query\nMemgraph via the console."),(0,r.kt)("p",null,"Here are some queries you might find interesting:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1",".")," List all the comic series present in the database, along with the number\nof comics it contains:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (series:ComicSeries)-[:IsPartOfSeries]-(comic:Comic)\nRETURN series.title AS title, count(comic)\nORDER BY title;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2","."),' List all heroes that have "SPIDER" in their name:'),(0,r.kt)("p",null,"If you take a peek at the Hero nodes, you'll find that their names, while\naccurate in most cases, can be a bit mangled. We didn't have time to check and\nupdate all the names that were already present. We swear! Super-busy! But, no\nworries, we'll show you how to get a list of potential heroes you might be\nlooking for. One of the most flexible ways is to use regex matching (represented\nby the regex-matching operator \"=~\")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (hero:Hero)\nWHERE hero.name =~ ".*SPIDER.*"\nRETURN hero.name AS potential_spider_dude\nORDER BY potential_spider_dude;\n')),(0,r.kt)("p",null,"The other option is to use the CONTAINS operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (hero:Hero)\nWHERE hero.name CONTAINS "SPIDER"\nRETURN hero.name AS potential_spider_dude\nORDER BY potential_spider_dude;\n')),(0,r.kt)("p",null,"We recommend you search for your heroes of interest this way, which might save\nyou some time!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3",".")," List all the comic issues where Spider-Man (Peter Parker) and Venom\n(Eddie Brock) appear together:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:Hero {name: "SPIDER-MAN/PETER PARKER"})\n      -[:AppearedIn]->(c:Comic)\n      <-[:AppearedIn]-(:Hero {name: "VENOM/EDDIE BROCK"})\nRETURN c.name AS spidey_and_venom_comic\nORDER BY spidey_and_venom_comic;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4",".")," List all the comic series in which Spider-Man/Peter Parker appears:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:Hero {name: "SPIDER-MAN/PETER PARKER"})\n      -[:AppearedIn]->(c:Comic)\n      -[:IsPartOfSeries]-(s:ComicSeries)\nRETURN DISTINCT s.title AS series\nORDER BY series;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5",".")," List 10 heroes with whom Spider-Man (Peter Parker) appeared most\nfrequently together:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:Hero {name: "SPIDER-MAN/PETER PARKER"})\n      -[:AppearedIn]->(c:Comic)\n      <-[:AppearedIn]-(h:Hero)\nRETURN DISTINCT h AS spidey_friend, count(h) AS friend_count\nORDER BY friend_count DESC\nLIMIT 10;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6",".")," Find if there's a connection between Peter Parker/Spider-Man and Beef:"),(0,r.kt)("p",null,'"Who the hell is Beef?", you might ask. Well, let\'s just run a\nbreadth-first-search starting from good ol\' Spider-Man, with the constraint that\nwe stay within the "radius" of maximum 10 hops from him, and see whether there\'s\na way Spidey can reach Beef. According to the six degrees of separation\nphilosophy, we should be able to find him on some path of maximally six hops\naway, but we relax that strategy a bit just to be sure.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:Hero {name: "SPIDER-MAN/PETER PARKER"})\n          -[*bfs 1..10]-(b:Hero {name: "BEEF"})\nRETURN p;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7",".")," List the 10 most popular heroes and comic series in the MCU:"),(0,r.kt)("p",null,'Quickly, name the five most popular heroes in the MCU! Alright, how did your\nbrain decide what to give as the answer? We\'re assuming that you have no clue,\nbut it vaguely has to do with the number and quality of connections each of\nthose heroes have in your brain. However, how to explain the concept of\n"popular" to our database engine?'),(0,r.kt)("p",null,'Well, our philosophy is as follows - a popular hero is the one who\'s "known" by\nmore other heroes, or in terms of our MCU graph, a hero that the other heroes\nhave more connections (edges) to than some other hero is deemed "more popular".\nWe\'ll apply analogous reasoning to define the "most popular" comic book series\nas well. This philosophy is the one underlying Google\'s search engine, and the\nalgorithm embodying it is PageRank, so it would be convenient if we could make\nuse of it.'),(0,r.kt)("p",null,"However, the query engine doesn't support PageRank out-of-the-box, so we have to\ncome up with a way to plug in PageRank to our database. That's precisely the\npurpose of ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules"},"query modules"),"!"),(0,r.kt)("p",null,"Long story short, the query module system enables us to write C or Python\nmodules that can access the data stored in our graph database, do some\nprocessing, and return the results of this processing to the query engine, so we\ncan perform further queries on them. In this particular case, the PageRank\nalgorithm is implemented as a Python module, and can be found in the query\nmodule directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query-modules/"),', along with its description\nand the examples of usage. What you as a user must know is that the pagerank\nprocedure automatically takes the MCU graph as an argument, and returns a record\nof pairs of nodes and the corresponding rank values (rank is a number\nrepresenting the "popularity" of a given node).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank.pagerank() YIELD node, rank\nWITH node, rank\nWHERE node:Hero\nRETURN node.name AS most_popular_heroes\nORDER BY rank DESC\nLIMIT 10;\n")),(0,r.kt)("p",null,"How do the results of this query match with your own list? Not bad, right?"),(0,r.kt)("p",null,"Now, let's figure out the most popular comic series:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank.pagerank() YIELD node, rank\nWITH node, rank\nWHERE node:ComicSeries\nRETURN node.title AS most_popular_comic_series\nORDER BY rank DESC\nLIMIT 10;\n")),(0,r.kt)("p",null,"Or we can do it without query modules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (hero:Hero)-[r]-()\nRETURN hero.name, count(r) AS relationships\nORDER BY relationships DESC\nLIMIT 10;\n")),(0,r.kt)("p",null,"And that, folks, is all there is to it, so go and try out some graph magic of\nyour own!"),(0,r.kt)("p",null,"If you're interested in the PageRank algorithm, we recommend you start\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PageRank"},"here"),"."),(0,r.kt)("h2",{id:"nifty-things-you-could-do"},"Nifty things you could do"),(0,r.kt)("p",null,"While the thing we've shown you how to do might be fun for a while, there are\nloads of cool things you could do to improve the fun-factor. Here's a very short\nlist of things we think you could pull off:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'we have loads of Hero nodes, so even the Hobgoblin or Magneto are deemed\n"heroes", but if you were the mayor of the Marvel Comic Universe Town, you\nwouldn\'t give those guys medals of honor, would you? It would be pretty cool\nif we could classify the MCU entities into "Hero" and "Villain" categories.\nThen you could ask the query engine to give you a list of Spidey\'s\narch-nemeses in addition to Spidey\'s best hero buddies.'),(0,r.kt)("li",{parentName:"ul"},'similar to the previous idea, it would be insanely cool if someone would add\nmore attributes to the heroes like "Superpower", "Level", "Affiliation",\n"Signature moves" etc. If you had that, you could perhaps make a simple\nPokemon-like game where you\'d randomly pick a team of villains and choose a\nteam of heroes to fight them.'),(0,r.kt)("li",{parentName:"ul"},"you could write your own query module that could run more sophisticated\nanalyses on the social network like closeness centrality, Louvain modularity\netc.")),(0,r.kt)("p",null,"Now go and use your graph database superpowers for the greater good! Although\nthe comic universe is full of heroes, there's always room for one more!"))}d.isMDXComponent=!0},83485:function(e,t,n){t.Z=n.p+"assets/images/mcu_metagraph-ba0f79c25baef96d54156de232957952.png"}}]);