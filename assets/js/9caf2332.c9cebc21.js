"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9126],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2948:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},s="Validator Elections",c={unversionedId:"validate/run-validator/validator-elections",id:"validate/run-validator/validator-elections",title:"Validator Elections",description:"After having studied how to run a validator node, please follow the description below in order to understand how a validator is elected. It explains in detail the election process using an electoral contract.",source:"@site/../../src/validate/run-validator/validator-elections.md",sourceDirName:"validate/run-validator",slug:"/validate/run-validator/validator-elections",permalink:"/validate/run-validator/validator-elections",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/run-validator/validator-elections.md",tags:[],version:"current",lastUpdatedAt:1665362588,formattedLastUpdatedAt:"Oct 10, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Run Testnet Node",permalink:"/validate/run-validator/run-testnet-node"},next:{title:"Update Validator",permalink:"/validate/run-validator/update-validator"}},d={},u=[],p={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validator-elections"},"Validator Elections"),(0,o.kt)("p",null,"After having studied how to run a validator node, please follow the description below in order to understand how a validator is elected. It explains in detail the election process using an electoral contract. "),(0,o.kt)("p",null,"The election mechanism works as follows:"),(0,o.kt)("p",null,"Firstly, it should be noted that elections of validators take place every 18 hours in respect to the current network configuration."),(0,o.kt)("p",null,"Each period consists of 3 phases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The election is open, the elector's smart contract accepts new stakes, and previous validators can return their stakes from the elector's smart contract.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The election is over and the smart contract determines the group of validators for the next phase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A new group of validators starts working. The stakes of the former group of validators are temporarily frozen."))),(0,o.kt)("p",null,"The electoral smart contract operates according to the following rules:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The following parameters are taken from the network configuration: a) Min and Max number of validators; b) Min and Max stake size; c) Maximum difference between the first (maximum) and last (minimum) validator stakes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The maximum group of validators is selected, starting from the largest stake (and moving further in the stake descending order. In the case that the amounts of stakes coincide, then the time of the validator serving in the network is considered), which has a difference between the largest and smallest stakes no more than max_factor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For the next stake, the sum of all the stakes is calculated in such a way as to comply with the max_factor rule. For this, the largest stake (or stakes) is trimmed in order to meet the max_factor rules. If the resulting sum of all the stakes has become larger, then the elector's smart contract tries to select the next stakes, in the descending stakes order, according to the max_factor rule.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"As soon as the total stake calculated according to the above mentioned procedure stops growing, that is, the maximum amount of stakes is found, then this stake is considered to have passed the elections - then, all past elections, and validators will begin to validate for the next election period, and the trimmed parts of the stakes (if any) are immediately returned to wallets from which they were sent."))),(0,o.kt)("p",null,"Please follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everscale.network/validate/run-validator/update-validator"},(0,o.kt)("strong",{parentName:"a"},"this page"))," in order to find out how a Validator is Updated."))}m.isMDXComponent=!0}}]);