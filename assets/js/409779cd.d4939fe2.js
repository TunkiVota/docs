"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3167],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,v=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2049:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:2,title:"Evernode Dapp Server"},c="Evernode DApp Server (DS)",l={unversionedId:"develop/nodes-clients/evernode-ds",id:"develop/nodes-clients/evernode-ds",title:"Evernode Dapp Server",description:"Client Node with GraphQL API that allows you to collect a large amount of data about the network.",source:"@site/../../src/develop/nodes-clients/evernode-ds.md",sourceDirName:"develop/nodes-clients",slug:"/develop/nodes-clients/evernode-ds",permalink:"/develop/nodes-clients/evernode-ds",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/nodes-clients/evernode-ds.md",tags:[],version:"current",lastUpdatedAt:1665362588,formattedLastUpdatedAt:"Oct 10, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Evernode Dapp Server"},sidebar:"tutorialSidebar",previous:{title:"Evercloud",permalink:"/develop/nodes-clients/evercloud"},next:{title:"TON Kafka Producer",permalink:"/develop/nodes-clients/ton-kafka"}},p={},d=[],u={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"evernode-dapp-server-ds"},"Evernode DApp Server (DS)"),(0,a.kt)("p",null,"Client Node with GraphQL API that allows you to collect a large amount of data about the network.\n*Suitable for integration by exchanges and other platforms."),(0,a.kt)("p",null,"Evernode DS is a set of services enabling you to work with Everscale blockchain."),(0,a.kt)("p",null,"The core element of Evernode DS is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-node"},"Everscale node written in Rust")," focused on performance and safety.",(0,a.kt)("br",{parentName:"p"}),"\n","Evernode DS provides a set of services serving EVER SDK endpoint: scalable multi-model database ",(0,a.kt)("a",{parentName:"p",href:"https://www.arangodb.com/documentation/"},"ArangoDB")," with the information about all blockchain entities (like accounts, blocks, transactions, etc.) stored over time, distributed high-throughput, low-latency streaming platform ",(0,a.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/"},"Kafka"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-q-server"},"Everscale GraphQL Server")," (aka Q-Server) for serving GraphQL queries to the database and ",(0,a.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/"},"Nginx")," web-server."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-ds#what-is-evernode-dapp-server"},"This repository")," contains instructions on how to build and configure your own free instance of Evernode Platform to connect your application to Everscale. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"You can try to ",(0,a.kt)("a",{parentName:"strong",href:"/validate/run-validator/run-mainnet-node"},"run a core network node")," yourself ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/tonlabs/evernode-ds#what-is-evernode-dapp-server"},"using the Evernode DS solution.")))))}f.isMDXComponent=!0}}]);