"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3829],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:0},s="Overview",c={unversionedId:"develop/nodes-clients/overview",id:"develop/nodes-clients/overview",title:"Overview",description:"Introduction",source:"@site/../../src/develop/nodes-clients/overview.md",sourceDirName:"develop/nodes-clients",slug:"/develop/nodes-clients/overview",permalink:"/develop/nodes-clients/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/nodes-clients/overview.md",tags:[],version:"current",lastUpdatedAt:1658793840,formattedLastUpdatedAt:"7/26/2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Nodes and Clients",permalink:"/develop/nodes-clients"},next:{title:"Evercloud",permalink:"/develop/nodes-clients/evercloud"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Solutions for configuring and running nodes",id:"solutions-for-configuring-and-running-nodes",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Before you start developing or integrating anything into Everscale, we would like to tell you about the tools and environment that you will use in your work."),(0,a.kt)("p",null,"First of all, it is worth noting that Everscale is really a decentralized blockchain, not only from a technical point of view, but also from a management side, so the key tools and approaches to development may differ from different teams, technical contributors on the network."),(0,a.kt)("p",null,"At the moment, there are two active companies of technical contributors in Everscale network:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://everx.dev/about"},"EverX")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://broxus.com/"},"Broxus")),(0,a.kt)("p",null,"And it is their solutions and tools that you will use when developing, while you will have every opportunity to write your own solutions as well, if necessary or desired."),(0,a.kt)("h2",{id:"solutions-for-configuring-and-running-nodes"},"Solutions for configuring and running nodes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/nodes-clients/evernode-ds"},"Evernode DS"),"(by EverX) - Client Node with GraphQL API that allows you to collect a large amount of data about the network.\n*Suitable for integration by exchanges and other platforms.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/nodes-clients/evercloud"},"Ever Cloud")," (by EverX) - provides Everscale developers with services on top of scalable blockchain infrastructure, so that developers can focus on business logic instead of infrastructure maintenance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/nodes-clients/ton-wallet-api"},"TON Wallet API"),"(by Broxus) - a non-validating node with a built-in wallet for convenient integration with exchanges and other projects.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/nodes-clients/ton-kafka"},"TON Kafka Producer"),"(by Broxus) - a non-validating node that writes blockchain data to Kafka. It can be used for further work with data in the required format and location. This node is lighter than Evernote DS.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/nodes-clients/ton-inderxer"},"TON Indexer"),"(by Broxus) - the solution is in the form of RUST libraries for building your own variation of the Everscale node. For example, with the help of this solution, nodes TON Wallet API, TON Kafka Producer and a number of other nodes are made."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}f.isMDXComponent=!0}}]);