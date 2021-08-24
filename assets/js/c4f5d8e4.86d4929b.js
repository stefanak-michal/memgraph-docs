"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64195],{53272:function(e,t,a){var r=a(67294),l=a(85350);t.Z=function(e){var t=e.className,a=e.alt,n=e.lightImageSrc,m=e.darkImageSrc,o=(0,l.Z)().isDarkTheme;return r.createElement("img",{className:t,alt:a,src:o?m:n})}},18475:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),l="mgContainer_K0l8",n="mgContainer__small_11YL";function m(e){var t=e.size,a=void 0===t?"default":t,m=e.children,o=null;return"small"===a&&(o=n),r.createElement("div",{className:l+" "+o},m)}},82594:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var r=a(67294),l=a(80095),n=a(52263),m="heroContainer_1_Ci",o="heroInner_Fzo-",i="heroImg_2inh",s="heroCodeSnippet_UqXD",u=a(44996),c=a(18475);function d(){return r.createElement("div",{className:m},r.createElement(c.Z,null,r.createElement("div",{className:o},r.createElement("div",null,r.createElement("h1",null,"Memgraph Documentation & User Guides"),r.createElement("p",null,"Explore our guides, samples and references to analyze your data with Memgraph")),r.createElement("div",null,r.createElement("div",{className:i},r.createElement("div",{className:s},r.createElement("pre",null,"\n docker pull memgraph/memgraph\n docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph \\\n  -v mg_log:/var/log/memgraph \\\n  -v mg_etc:/etc/memgraph \\\n  memgraph/memgraph \n                                ")),r.createElement("img",{src:(0,u.Z)("img/hero-img-desktop.svg")}))))))}var h="homeCallouts_79Cg",g="homeCallouts__item_22H0",p="calloutBox_29q2",v="calloutBox__title_3de6",_="calloutBox__subtitle_1bEJ",E="linkRightArrow_nkiT";function f(e){var t=e.urlText,a=e.url;return r.createElement("a",{href:a,className:E},r.createElement("span",null,t)," ",r.createElement("i",{className:"fa fa-arrow-right"},"\xa0"))}function y(e){var t=e.title,a=e.subtitle,l=e.url,n=e.urlText;return r.createElement("div",{className:p},r.createElement("div",{className:v},t),r.createElement("div",{className:_},a),r.createElement(f,{url:l,urlText:n}))}function b(){var e=[{title:"Run a real-time graph streaming platform",subtitle:"Download and install Memgraph locally and start exploring your data.",urlText:"Get Started with Memgraph",url:(0,u.Z)("/memgraph/getting-started")},{title:"Run Memgraph in the cloud",subtitle:"Explore your data in the cloud through our fully-managed service.",urlText:"Get Started with Cloud",url:"https://memgraph.com/product/cloud"},{title:"Import your data",subtitle:"Import data into Memgraph using streaming data sources, CSV files, or Cypher commands.",urlText:"Gather all your data in one place",url:(0,u.Z)("/memgraph/import-data")},{title:"Connect to Memgraph",subtitle:"Connect to Memgraph with your preferred programming language, via CLI console or the Memgraph Lab GUI.",urlText:"Start exploring your data",url:(0,u.Z)("connect-to-memgraph")},{title:"Query, analyze & visualize the data",subtitle:"Use Memgraph Lab to visualize, query, and interact with your data.",urlText:"Get Started with Memgraph Lab",url:(0,u.Z)("/memgraph-lab")},{title:"Cypher Manual",subtitle:"Start learning the Cypher query language and analyze your data.",urlText:"Start learning Cypher",url:(0,u.Z)("/cypher-manual")}];return r.createElement(c.Z,null,r.createElement("div",{className:h},e.map((function(e,t){return r.createElement("div",{key:t,className:g},r.createElement(y,{title:e.title,subtitle:e.subtitle,url:e.url,urlText:e.urlText}))}))))}var x="homeEcosystem_23aa",w="homeEcosystem__menu__border_2XfR",k="homeEcosystem__menu_15tM",N="homeEcosystem__menu__selected_13fX",Z="homeEcosystem__content_37Zm",C="homeEcosystem__content__inner_1Quk",M="homeEcosystem__content__url_3grb";function I(){var e={Memgraph:{description:"Memgraph is a modern graph analytics platform engineered from the ground up to deliver\nreal-time performance for both transactional and analytical graph workloads at scale.\n",url:"https://memgraph.com/product",urlText:"Learn more"},Lab:{description:"Memgraph Lab is a visual user interface that connects your local Memgraph instance or Cloud account. You can use Lab to import, explore and visualize your data as well as execute and optimize Cypher queries.",url:"https://memgraph.com/product/lab",urlText:"Learn more"},Cloud:{description:"A fully-managed, cloud-hosted graph database-as-a-service supported by the engineering team behind Memgraph. We take the day-to-day hassle of management operations out of your hands so you can focus on building your business.",url:"https://memgraph.com/product/cloud",urlText:"Learn more"},Playground:{description:"Memgraph Playground is a web platform that contains a lot of helpful tutorials and examples on how complex data can be explored using the Cypher query language. You don\u2019t need to install Memgraph, just follow the tutorial and play around with the predefined queries.",url:"https://playground.memgraph.com",urlText:"Visit Playground"},MAGE:{description:"MAGE (Memgraph Advanced Graph Extensions) is an open-source repository that contains all available query modules written by the team behind Memgraph and its users. You can find and contribute implementations of various algorithms in multiple programming languages, all runnable inside Memgraph.",url:(0,u.Z)("/mage"),urlText:"Get Started"}},t=Object.keys(e),a=r.useState(t[0]),l=a[0],n=a[1];return r.createElement("div",{className:x},r.createElement(c.Z,null,r.createElement("h2",null,"The Memgraph Ecosystem"),r.createElement("div",{className:k},t.map((function(e,t){var a=e===l?N:"";return r.createElement("div",{key:t,className:a,onClick:function(){return n(e)}},e)}))),r.createElement("div",{className:w},"\xa0")),r.createElement("div",{className:Z},r.createElement(c.Z,null,r.createElement("div",{className:C},r.createElement("div",null,r.createElement("div",null,e[l].description),r.createElement("a",{className:M,href:e[l].url},e[l].urlText," ",r.createElement("i",{className:"fa fa-arrow-right"}))),r.createElement("div",null,r.createElement("img",{src:(0,u.Z)("img/memgraph-image.svg")}))))))}var T="homeLearnWithUs_3OF_",G="homeLearnWithUs__bg_2IxZ",S="homeLearnWithUs__subtitle_2w7I",L="homeLearnWithUs__items_1_7D",D="calloutImgBox_3aHx",q="calloutImgBox__img_1m3k",U="calloutImgBox__title_FCmJ",W="calloutImgBox__subtitle_-h9C";function z(e){var t=e.title,a=e.subtitle,l=e.url,n=e.img;return r.createElement("a",{href:l,className:D},r.createElement("div",{className:q},r.createElement("img",{src:n,alt:t})),r.createElement("div",{className:U},t),r.createElement("div",{className:W},a))}function B(){var e=[{title:"Playground",description:"No downloads, installations, or registration required. Just choose a tutorial and try out Memgraph in your browser.",url:"https://playground.memgraph.com/",img:(0,u.Z)("img/tutorial-playground.svg")},{title:"Tutorials",description:"Select one of the many available tutorials and give it a go locally.",url:(0,u.Z)("/memgraph/tutorials"),img:(0,u.Z)("img/tutorials-tut-img.svg")},{title:"Code with Buda",description:"Watch as Memgraph\u2019s CTO demonstrates how to use some of the most complex and powerful features.",url:"https://www.youtube.com/playlist?list=PL7Eotag2rRhaYDrSNcltkbtj0S3yC7h-u",img:(0,u.Z)("img/codewbuda-img.svg")}];return r.createElement("div",{className:T},r.createElement("div",{className:G},r.createElement("img",{src:(0,u.Z)("img/PatternBG.svg")})),r.createElement(c.Z,null,r.createElement("h2",null,"Learn With Us"),r.createElement("div",{className:S},r.createElement("p",null,"Get to know Memgraph by following one of our tutorials. We have prepared a lot of hands-on examples in the form of tutorials and live streams.")),r.createElement("div",{className:L},r.createElement("div",null,"\xa0"),e.map((function(e,t){return r.createElement("div",{key:t},r.createElement(z,{title:e.title,subtitle:e.description,url:e.url,img:e.img}))})))))}var A={homeGetInvolved:"homeGetInvolved_2wwb",homeGetInvolved__inner:"homeGetInvolved__inner_3qwW",homeGetInvolved__items:"homeGetInvolved__items_3Qbd"},P=a(53272);function F(){var e=[{title:"Developer Forum",urlText:"Join",url:"https://discourse.memgraph.com/",img:(0,u.Z)("img/dev-forum.svg"),imgDark:(0,u.Z)("img/dev-forum-dark-mode.svg")},{title:"Stack Overflow",urlText:"Ask Away",url:"https://stackoverflow.com/questions/tagged/memgraphdb",img:(0,u.Z)("img/stack-overflow.svg"),imgDark:(0,u.Z)("img/stack-overflow-dark-mode.svg")},{title:"GitHub",urlText:"Explore",url:"https://github.com/memgraph",img:(0,u.Z)("img/github.svg"),imgDark:(0,u.Z)("img/github-dark-mode.svg")}];return r.createElement(c.Z,null,r.createElement("div",{className:A.homeGetInvolved},r.createElement("div",{className:A.homeGetInvolved__inner},r.createElement("div",{className:A.homeGetInvolved__items},e.map((function(e,t){return r.createElement("div",{key:t},r.createElement("div",{className:A.homeGetInvolved__items__img},r.createElement(P.Z,{lightImageSrc:e.img,darkImageSrc:e.imgDark,alt:e.title})),r.createElement("div",null,r.createElement("div",null,e.title),r.createElement("a",{href:e.url},e.urlText)))}))),r.createElement("div",null,r.createElement("h2",null,"Get Involved"),r.createElement("p",null,"We are always happy to hear from our community and help with any problems or obstacles. Don\u2019t hesitate to reach out to us with questions and comments using one of the available channels.")))))}var R=function(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).customFields,a=void 0===t?{}:t,m=e.tagline;return r.createElement(l.Z,{permalink:"/",title:m,description:a.description},r.createElement("main",null,r.createElement(d,{title:"Memgraph Documentation & User Guides"}),r.createElement(b,null),r.createElement(I,null),r.createElement(B,null),r.createElement(F,null)))}}}]);