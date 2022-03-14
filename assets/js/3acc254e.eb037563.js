"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80199],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return u}});var l=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=l.createContext({}),s=function(e){var t=l.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(o),u=n,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return o?l.createElement(h,i(i({ref:t},c),{},{components:o})):l.createElement(h,i({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var s=2;s<r;s++)i[s]=o[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,o)}m.displayName="MDXCreateElement"},39666:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var l=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],a={id:"gss-nodestyle-directive",title:"Graph Style Script @NodeStyle directive properties",sidebar_label:"NodeStyle directive properties"},d=void 0,s={unversionedId:"style-script/gss-nodestyle-directive",id:"style-script/gss-nodestyle-directive",title:"Graph Style Script @NodeStyle directive properties",description:"@NodeStyle",source:"@site/lab/style-script/gss-nodestyle-directive.md",sourceDirName:"style-script",slug:"/style-script/gss-nodestyle-directive",permalink:"/docs/memgraph-lab/style-script/gss-nodestyle-directive",editUrl:"https://github.com/memgraph/docs/tree/master/lab/style-script/gss-nodestyle-directive.md",tags:[],version:"current",frontMatter:{id:"gss-nodestyle-directive",title:"Graph Style Script @NodeStyle directive properties",sidebar_label:"NodeStyle directive properties"},sidebar:"lab",previous:{title:"GSS functions",permalink:"/docs/memgraph-lab/style-script/gss-functions"},next:{title:"EdgeStyle directive properties",permalink:"/docs/memgraph-lab/style-script/gss-edgestyle-directive"}},c={},p=[{value:"<code>@NodeStyle</code>",id:"nodestyle",level:2},{value:"<code>border-color</code>: <code>Color</code>",id:"border-color-color",level:3},{value:"<code>border-color-hover</code>: <code>Color</code>",id:"border-color-hover-color",level:3},{value:"<code>border-color-selected</code>: <code>Color</code>",id:"border-color-selected-color",level:3},{value:"<code>border-width</code>: <code>Number</code>",id:"border-width-number",level:3},{value:"<code>border-width-selected</code>: <code>Number</code>",id:"border-width-selected-number",level:3},{value:"<code>color</code>: <code>Color</code>",id:"color-color",level:3},{value:"<code>color-hover</code>: <code>Color</code>",id:"color-hover-color",level:3},{value:"<code>color-selected</code>: <code>Color</code>",id:"color-selected-color",level:3},{value:"<code>font-background-color</code>: <code>Color</code>",id:"font-background-color-color",level:3},{value:"<code>font-color</code>: <code>Color</code>",id:"font-color-color",level:3},{value:"<code>font-family</code>: <code>String</code>",id:"font-family-string",level:3},{value:"<code>font-size</code>: <code>Number</code>",id:"font-size-number",level:3},{value:"<code>image-url</code>: <code>String</code>",id:"image-url-string",level:3},{value:"<code>image-url-selected</code>: <code>String</code>",id:"image-url-selected-string",level:3},{value:"<code>label</code>: <code>String</code>",id:"label-string",level:3},{value:"<code>shadow-color</code>: <code>Color</code>",id:"shadow-color-color",level:3},{value:"<code>shadow-size</code>: <code>Number</code>",id:"shadow-size-number",level:3},{value:"<code>shadow-offset-x</code>: <code>Number</code>",id:"shadow-offset-x-number",level:3},{value:"<code>shadow-offset-y</code>: <code>Number</code>",id:"shadow-offset-y-number",level:3},{value:"<code>shape</code>: <code>String</code>",id:"shape-string",level:3},{value:"<code>size</code>: <code>Number</code>",id:"size-number",level:3}],m={toc:p};function u(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"nodestyle"},(0,r.kt)("inlineCode",{parentName:"h2"},"@NodeStyle")),(0,r.kt)("p",null,"Here is the list of all properties that can be defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"@NodeStyle"),"\ndirective, along with their expected types."),(0,r.kt)("h3",{id:"border-color-color"},(0,r.kt)("inlineCode",{parentName:"h3"},"border-color"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Color")),(0,r.kt)("p",null,"Sets a border color."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"border-color: #FF0000")," sets the border color to red."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"border-color: limegreen")," sets the border color to lime green.")),(0,r.kt)("h3",{id:"border-color-hover-color"},(0,r.kt)("inlineCode",{parentName:"h3"},"border-color-hover"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Color")),(0,r.kt)("p",null,"Sets a border color that is applied on mouse hover event."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"border-color-hover: #FF0000")," sets the border color to red on mouse hover\nevent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"border-color-hover: limegreen")," sets the border color to lime green on mouse\nhover event.")),(0,r.kt)("h3",{id:"border-color-selected-color"},(0,r.kt)("inlineCode",{parentName:"h3"},"border-color-selected"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Color")),(0,r.kt)("p",null,"Sets a border color that is applied on mouse select event."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"border-color-selected: #FF0000")," sets the border color to red on mouse select\nevent."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"border-color-selected: limegreen")," sets the border color to lime green on\nmouse select event.")),(0,r.kt)("h3",{id:"border-width-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"border-width"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Number")),(0,r.kt)("p",null,"Sets the border width."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"border-width: 2")," sets the border width to 2 pixels.")),(0,r.kt)("h3",{id:"border-width-selected-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"border-width-selected"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Number")),(0,r.kt)("p",null,"Sets the border width that is applied on mouse select event."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"border-width-selected: 10")," sets the border width to 10 pixels on mouse select\nevent.")),(0,r.kt)("h3",{id:"color-color"},(0,r.kt)("inlineCode",{parentName:"h3"},"color"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Color")),(0,r.kt)("p",null,"Sets the background color of an element."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color: #FF0000")," sets the background color of the element to red."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color: limegreen")," sets the background color of the element to lime green.")),(0,r.kt)("h3",{id:"color-hover-color"},(0,r.kt)("inlineCode",{parentName:"h3"},"color-hover"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Color")),(0,r.kt)("p",null,"Sets the background color of an element on mouse hover event."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color-hover: #FF0000")," sets the background color of the element to red on\nmouse hover event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color-hover: limegreen")," sets the background color of the element to lime\ngreen on mouse hover event.")),(0,r.kt)("h3",{id:"color-selected-color"},(0,r.kt)("inlineCode",{parentName:"h3"},"color-selected"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Color")),(0,r.kt)("p",null,"Sets the background color of an element on mouse select event."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color-selected: #FF0000")," sets the background color of the element to red on\nmouse select event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"color-selected:limegreen")," sets the background color of the element to lime\ngreen on mouse select event.")),(0,r.kt)("h3",{id:"font-background-color-color"},(0,r.kt)("inlineCode",{parentName:"h3"},"font-background-color"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Color")),(0,r.kt)("p",null,"Sets the background color of the element's label (text). Text can be defined\nwith property ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"font-background-color: #FF0000")," sets the text background color to red."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"font-background-color: limegreen")," sets the text background color to lime\ngreen.")),(0,r.kt)("h3",{id:"font-color-color"},(0,r.kt)("inlineCode",{parentName:"h3"},"font-color"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Color")),(0,r.kt)("p",null,"Sets the color of the element's label (text). Text can be defined with property\n",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"font-color: #FF0000")," sets the text color to red."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"font-color: limegreen")," sets the text color to lime green.")),(0,r.kt)("h3",{id:"font-family-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"font-family"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"String")),(0,r.kt)("p",null,"Sets a font family for the element's label (text). Text can be defined with\nproperty ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'font-family: "sans-serif"')," sets the text family font to sans-serif."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'font-family: "cursive"')," sets the text family font to cursive.")),(0,r.kt)("h3",{id:"font-size-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"font-size"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Number")),(0,r.kt)("p",null,"Sets the size of the element's text. Text can be defined with property ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"font-size: 10")," sets the size of the font to 10 pixels.")),(0,r.kt)("h3",{id:"image-url-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"image-url"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"String")),(0,r.kt)("p",null,"Sets the element's background to be an image from the image URL. It will\noverride the value defined with the property ",(0,r.kt)("inlineCode",{parentName:"p"},"color"),"."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'image-url: "https://download.memgraph.com/asset/images/memgraph-logo.png"'),"\nsets the element's background to be an image of the Memgraph logo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'image-url: Property(node, "profile_image")')," sets the element's background to\nbe an image from the URL that is fetched from the ",(0,r.kt)("inlineCode",{parentName:"li"},"node")," property\n",(0,r.kt)("inlineCode",{parentName:"li"},'"profile_image"'),".")),(0,r.kt)("h3",{id:"image-url-selected-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"image-url-selected"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"String")),(0,r.kt)("p",null,"Sets the element's background to be an image from the image URL on mouse select\nevent. It will override the value defined with the property ",(0,r.kt)("inlineCode",{parentName:"p"},"color-selected"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'image-url-selected:\n"https://download.memgraph.com/asset/images/memgraph-logo-5f60e83d.jpeg"')," sets\nthe element's background to be an image of the Memgraph logo.")),(0,r.kt)("p",null,"Check property ",(0,r.kt)("inlineCode",{parentName:"p"},"image-url")," for more details and examples."),(0,r.kt)("h3",{id:"label-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"label"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"String")),(0,r.kt)("p",null,"Sets the element's text label. The text is shown below the element (node or\nrelationship)."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'label: "Text"'),' sets the text "Text" as a label for every single element.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'label: Property(node, "name")')," sets the text for the element's label\ndynamically by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"node")," property ",(0,r.kt)("inlineCode",{parentName:"li"},'"name"'),".")),(0,r.kt)("h3",{id:"shadow-color-color"},(0,r.kt)("inlineCode",{parentName:"h3"},"shadow-color"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Color")),(0,r.kt)("p",null,"Sets the color for the element's shadow."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shadow-color: #FF0000")," sets the shadow color to red."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shadow-color: limegreen")," sets the shadow color to lime green.")),(0,r.kt)("h3",{id:"shadow-size-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"shadow-size"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Number")),(0,r.kt)("p",null,"Sets the blur size of the element's shadow. If the value is 0, the shadow will\nbe a solid color defined by the property ",(0,r.kt)("inlineCode",{parentName:"p"},"shadow-color"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shadow-size: 5")," indicates that the shadow will be diffused across 5 pixels.")),(0,r.kt)("h3",{id:"shadow-offset-x-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"shadow-offset-x"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Number")),(0,r.kt)("p",null,"Sets the horizontal offset of the element's shadow. A positive value puts the\nshadow on the right side of the element, a negative value puts the shadow on the\nleft side of the element."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shadow-offset-x: 0")," indicates that the shadow is exactly behind the element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shadow-offset-x: 20")," indicates that the shadow starts 20 pixels to the right.")),(0,r.kt)("h3",{id:"shadow-offset-y-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"shadow-offset-y"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Number")),(0,r.kt)("p",null,"Sets the vertical offset of the element's shadow. A positive value puts the\nshadow below the element, a negative value puts the shadow above the element."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shadow-offset-y: 0")," indicates that the shadow is exactly behind the element."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shadow-offset-y: 20")," indicates that the shadow starts 20 pixels below the\nelement position.")),(0,r.kt)("h3",{id:"shape-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"shape"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"String")),(0,r.kt)("p",null,"Sets the shape of the element. The default shape for the node is ",(0,r.kt)("inlineCode",{parentName:"p"},'"dot"'),".\nPossible values are: ",(0,r.kt)("inlineCode",{parentName:"p"},'"dot"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"square"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"diamond"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"triangle"'),",\n",(0,r.kt)("inlineCode",{parentName:"p"},'"triangleDown"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"star"')),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'shape: "square"')," indicates that the shape of the element will be a square.")),(0,r.kt)("h3",{id:"size-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"size"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Number")),(0,r.kt)("p",null,"Sets the size of the element."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"size: 10")," indicates that the radius of the element will be 10 pixels.")))}u.isMDXComponent=!0}}]);