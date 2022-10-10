"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7143],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),v=n,h=d["".concat(s,".").concat(v)]||d[v]||u[v]||l;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6242:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),o=["components"],i={sidebar_position:3},s="How to interact with Ever wallet",p={unversionedId:"develop/web-frontend/interact-ever-wallet",id:"develop/web-frontend/interact-ever-wallet",title:"How to interact with Ever wallet",description:"Introduction",source:"@site/../../src/develop/web-frontend/interact-ever-wallet.md",sourceDirName:"develop/web-frontend",slug:"/develop/web-frontend/interact-ever-wallet",permalink:"/develop/web-frontend/interact-ever-wallet",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/web-frontend/interact-ever-wallet.md",tags:[],version:"current",lastUpdatedAt:1665362588,formattedLastUpdatedAt:"Oct 10, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Build the Web Frontend",permalink:"/develop/web-frontend"},next:{title:"Nodes and Clients",permalink:"/develop/nodes-clients"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Why Ever wallet",id:"why-ever-wallet",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Everscale wallet API",id:"everscale-wallet-api",level:2},{value:"Everscale inpage provider",id:"everscale-inpage-provider",level:2},{value:"Everscale standalone client",id:"everscale-standalone-client",level:2}],d={toc:u};function v(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-interact-with-ever-wallet"},"How to interact with Ever wallet"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Welcome to Ever wallet\u2019s Developer Guide. "),(0,l.kt)("p",null,"Ever wallet enables user interaction and experience with Everscale ecosystem's dApps. It is currently available as a browser extension and as a mobile app on both Android and iOS devices. "),(0,l.kt)("p",null,"The purpose of this documentation is to illustrate how to integrate Ever wallet, initiate transactions and build dApps with Everscale. "),(0,l.kt)("h2",{id:"why-ever-wallet"},"Why Ever wallet"),(0,l.kt)("p",null,"Ever wallet was created by ",(0,l.kt)("a",{parentName:"p",href:"https://broxus.com"},"Broxus developers")," to supply users with a secure and innovative wallet perfectly suited to navigate through multiple services powered by the Everscale network. "),(0,l.kt)("p",null,"It is equipped with the most up-to-date features and easy to comprehend documentation for developers that are looking to build their dApps on the Everscale blockchain. "),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"To develop for Everscale, install Ever wallet in any Chromium and Firefox browser of your choice. "),(0,l.kt)("p",null,"After Ever wallet is installed (make sure you back up your Seed Phrase), you should find that new browser tabs have a  window.__ever object available in the developer console. This is the way your website will interact with Everscale blockchain. "),(0,l.kt)("p",null,"Before proceeding with the documentation, please follow ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/@andyshpak/login-with-blockchain-everscale-815cb7bb6d01"},(0,l.kt)("strong",{parentName:"a"},"this link"))," in order to get familiar with how to use the Everscale blockchain and Ever wallet for user authorization without creating a transaction on the network."),(0,l.kt)("p",null,"Afterwards, please follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EverscaleGuild/everscale-tutor-web"},(0,l.kt)("strong",{parentName:"a"},"this link"))," in order to get familiar with how to interact with the contract from Ever wallet. "),(0,l.kt)("p",null,"After having studied the material above, please proceed with the ",(0,l.kt)("strong",{parentName:"p"},"Ever wallet API, Everscale Inpage Provider, and Everscale standalone client")," documentation."),(0,l.kt)("h2",{id:"everscale-wallet-api"},"Everscale wallet API"),(0,l.kt)("p",null,"Everscale Wallet API facilitates automatic interaction with the Everscale Blockchain and simplifies the management and transaction processes for Everscale assets.",(0,l.kt)("br",{parentName:"p"}),"\n","The API includes a built-in lite EVER node, support for Ever and TIP-3.1 tokens, a variety of different wallet contracts and REST API to make usage as convenient as possible.",(0,l.kt)("br",{parentName:"p"}),"\n","On the security front, the wallet API also has formidable features, most notably in its support for multi-sig operations."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/develop/tutorial/ton-wallet-api"},(0,l.kt)("strong",{parentName:"a"},"Everscale Wallet API using guide"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/broxus/ton-wallet-api"},(0,l.kt)("strong",{parentName:"a"},"Everscale Wallet API GitHub repository"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://api.flatqube.io/v1/swagger.yaml"},(0,l.kt)("strong",{parentName:"a"},"Swagger"))," ")),(0,l.kt)("h2",{id:"everscale-inpage-provider"},"Everscale inpage provider"),(0,l.kt)("p",null,"Web3-like interface to the Everscale blockchain."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Provider working with extensions.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Used for sending transactions. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Used for frontend. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/broxus/everscale-inpage-provider"},(0,l.kt)("strong",{parentName:"a"},"Installation guide")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://broxus.github.io/everscale-inpage-provider/index.html"},(0,l.kt)("strong",{parentName:"a"},"Inpage provider documentation"))))),(0,l.kt)("p",null,"Also, please follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EverscaleGuild/everscale-tutor-web"},(0,l.kt)("strong",{parentName:"a"},"this link"))," for documentation of an example of Inpage Provider usage as well as wallet connection to DApps. "),(0,l.kt)("h2",{id:"everscale-standalone-client"},"Everscale standalone client"),(0,l.kt)("p",null,"It is advisable to be used in conjunction with Everscale Inpage Provider.\nUsed to get data from smart contracts, and subscriptions to state changes.",(0,l.kt)("br",{parentName:"p"}),"\n","Does not support Send in contracts.       "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/broxus/everscale-standalone-client"},(0,l.kt)("strong",{parentName:"a"},"Installation guide"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://broxus.github.io/everscale-standalone-client/index.html"},(0,l.kt)("strong",{parentName:"a"},"Standalone client documentation")))),(0,l.kt)("p",null,"For a deeper dive into the Everscale network, please find below links to instruments and services that will be of use while interacting with the Everscale blockchain via Ever wallet. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.everscale.network/integrate/products-api"},"APIs of Everscale services")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/use/getting-started/how-to-get-ever"},"How to get EVERs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/tonos-cli#tonos-cli"},"TONOS-CLI")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.everos.dev/everdev/"},"EVERDEV")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ever-sdk"},"Ever SDK")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://everos.dev/"},"Ever OS"))))}v.isMDXComponent=!0}}]);