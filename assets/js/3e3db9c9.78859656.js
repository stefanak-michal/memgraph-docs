"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1757],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50451:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"quick-start",title:"Quick start guide to Style script",sidebar_label:"Quick start"},s=void 0,c={unversionedId:"style-script/quick-start",id:"style-script/quick-start",title:"Quick start guide to Style script",description:"This guide will show you how to easily get started with style script. For",source:"@site/lab/style-script/quick-start.md",sourceDirName:"style-script",slug:"/style-script/quick-start",permalink:"/docs/memgraph-lab/style-script/quick-start",editUrl:"https://github.com/memgraph/docs/tree/master/lab/style-script/quick-start.md",tags:[],version:"current",frontMatter:{id:"quick-start",title:"Quick start guide to Style script",sidebar_label:"Quick start"},sidebar:"lab",previous:{title:"Linux",permalink:"/docs/memgraph-lab/installation/linux"},next:{title:"Reference guide",permalink:"/docs/memgraph-lab/style-script/reference-guide"}},p=[{value:"Graph example",id:"graph-example",children:[],level:2},{value:"Setting graph labels",id:"setting-graph-labels",children:[],level:2},{value:"Setting node images",id:"setting-node-images",children:[],level:2},{value:"Highlighting interesting nodes",id:"highlighting-interesting-nodes",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will show you how to easily get started with style script. For\ncomplete list available features consult\n",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/reference-guide"},"style script reference"),"."),(0,i.kt)("h2",{id:"graph-example"},"Graph example"),(0,i.kt)("p",null,"In this guide, we will use an example graph with European countries and cities.\nThe data can be found ",(0,i.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/tutorials-overview/backpacking-through-europe"},"here"),".\nCountries have the label ",(0,i.kt)("inlineCode",{parentName:"p"},"Country"),", while cities have the label ",(0,i.kt)("inlineCode",{parentName:"p"},"City"),". All\nnodes have the property ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),". Cities have many additional properties,\nincluding ",(0,i.kt)("inlineCode",{parentName:"p"},"country")," (containing country) and ",(0,i.kt)("inlineCode",{parentName:"p"},"drinks_USD")," (average drink price)."),(0,i.kt)("h2",{id:"setting-graph-labels"},"Setting graph labels"),(0,i.kt)("p",null,"We want to label country nodes with country names, and city nodes with city,\nnames and containing country names. To achieve that we can use to directives.\nThe first one selects countries and the second one selects cities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@NodeStyle HasLabel?(node, "Country") {\n  label: Format(Property(node, "name"))\n}\n\n@NodeStyle HasLabel?(node, "City") {\n    label: Format(Format("{cityName}, {countryName}"),\n                  Property(node, "name"),\n                  Property(node, "country_name"))\n}\n')),(0,i.kt)("p",null,"The content inside the curly braces is ignored, but can be helpful for clarity."),(0,i.kt)("h2",{id:"setting-node-images"},"Setting node images"),(0,i.kt)("p",null,"It would be nice to display flags in the country nodes. This can be achieved\nusing URLs of flag images. There is a website that hosts many world flags so we\ncan use images from ",(0,i.kt)("a",{parentName:"p",href:"https://cdn.countryflags.com"},"there"),". Their API expects a\ncountry name as a part of URL path so we will make the following directive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@NodeStyle HasLabel?(node, "Country") {\n  image-url: Format("https://cdn.countryflags.com/thumbs/{}/flag-800.png",\n                    LowerCase(Proeprty(node, "name")))\n}\n')),(0,i.kt)("p",null,"Unfortunately, this won't work for all countries. Flags for England and Scotland\ncannot be found on the website because they aren't real countries. So we can\nget around that by providing custom directives below the general one above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@NodeStyle Equals?(Property(node, "name"), "England") {\n   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png"\n}\n\n@NodeStyle Equals?(Property(node, "name"), "Scotland") {\n  image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png"\n }\n')),(0,i.kt)("p",null,"Also, URLs for a country name with whitespace inside them don't so we also have\nto provide custom URLs for the Czech Republic and Bosnia and Herzegovina."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@NodeStyle Equals?(Property(node, "name"), "Bosnia and Herzegovina") {\n   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png"\n }\n\n @NodeStyle Equals?(Property(node, "name"), "Czech Republic") {\n   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png"\n }\n')),(0,i.kt)("p",null,"Now all the country nodes have their flags displayed."),(0,i.kt)("h2",{id:"highlighting-interesting-nodes"},"Highlighting interesting nodes"),(0,i.kt)("p",null,"We can highlight nodes with low drink price in the following way. We want to\nuse a beer image and a bigger size along with a red shadow."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'@NodeStyle And()\n     HasLabel?(node, "City"),\n     Less?(Property(node, "drinks_USD"), 5)) {\n  size: 50\n  image-url: "https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg"\n  shadow-color: red\n }\n')))}d.isMDXComponent=!0}}]);