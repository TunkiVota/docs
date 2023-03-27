"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9267],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,v=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(v,o(o({ref:t},p),{},{components:a})):r.createElement(v,o({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),o=a(2466),s=a(6550),i=a(1980),c=a(7392),p=a(12);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=v({queryString:a,groupId:r}),[u,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=i??u;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==s&&(u(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},n.createElement(f,(0,r.Z)({},e,t)),n.createElement(b,(0,r.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},7360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),o=a(5162);const s={sidebar_position:2,description:"Get started by creating a new DApp using EverDev"},i="Deploy smart contracts with EverDev",c={unversionedId:"develop/tutorial/everdev-sc",id:"develop/tutorial/everdev-sc",title:"Deploy smart contracts with EverDev",description:"Get started by creating a new DApp using EverDev",source:"@site/../../src/develop/tutorial/everdev-sc.md",sourceDirName:"develop/tutorial",slug:"/develop/tutorial/everdev-sc",permalink:"/develop/tutorial/everdev-sc",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutorial/everdev-sc.md",tags:[],version:"current",lastUpdatedAt:1679926729,formattedLastUpdatedAt:"Mar 27, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Get started by creating a new DApp using EverDev"},sidebar:"tutorialSidebar",previous:{title:"Deploy smart contracts with Locklift",permalink:"/develop/tutorial/locklift-sc"},next:{title:"EVER SDK Quick Start",permalink:"/develop/tutorial/ever-sdk-start"}},p={},u=[{value:"What you can learn",id:"what-you-can-learn",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Generate a new project",id:"generate-a-new-project",level:2},{value:"Configure Giver",id:"configure-giver",level:3},{value:"Generate a new smart-contract",id:"generate-a-new-smart-contract",level:2},{value:"Compile smart-contract",id:"compile-smart-contract",level:2},{value:"Deploy smart-contract",id:"deploy-smart-contract",level:2},{value:"Generate the key pair for deploy contract",id:"generate-the-key-pair-for-deploy-contract",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Address smart-contract",id:"address-smart-contract",level:2},{value:"Interact with smart-contract",id:"interact-with-smart-contract",level:2},{value:"Full docs",id:"full-docs",level:2}],d={toc:u},m="wrapper";function v(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-smart-contracts-with-everdev"},"Deploy smart contracts with EverDev"),(0,n.kt)("p",null,"This guide is designed for developers interested in smart-contracts programming, irrespective of their prior experience in blockchain development.",(0,n.kt)("br",{parentName:"p"}),"\n","Thanks to our well structured step by step guidance, developers will gradually learn all the information needed to start deploying and interacting with smart-contracts. "),(0,n.kt)("p",null,"In the interest of developers, Everscale network puts at their disposal smart-contracts programming using developer-friendly languages: ",(0,n.kt)("strong",{parentName:"p"},"Solidity")," and ",(0,n.kt)("strong",{parentName:"p"},"C++"),"."),(0,n.kt)("p",null,"It should be noted that for developers experienced with Python or other languages such as C, C++, JavaScript, and C#, starting programming smart-contracts will be of maximum ease due to syntax similarity.",(0,n.kt)("br",{parentName:"p"}),"\n","Familiarity with the mentioned programming languages will help developers make sense of differences in smart-contract languages."),(0,n.kt)("p",null,"Before proceeding with the launch of your Dapp, let us first go through an overview explaining what technical information needed for up-to-date smart-contracts programming we prepared for our developers."),(0,n.kt)("h2",{id:"what-you-can-learn"},"What you can learn"),(0,n.kt)("p",null,"Experienced developers with advanced knowledge of Solidity programming language and solid understanding of Ethereum blockchain design, are advised to consult our ",(0,n.kt)("a",{parentName:"p",href:"../../learn/"},"Learn section")," where all necessary technical information is provided in a comprehensive way. "),(0,n.kt)("p",null,"For those with no prior knowledge of smart contracts, as well as for intermediaries and advanced developers who strive to learn new things in the blockchain industry, we recommend you to consult our ",(0,n.kt)("a",{parentName:"p",href:"/develop/debots/getting-started"},"DeBots page"),".",(0,n.kt)("br",{parentName:"p"}),"\n","DeBots, in essence, is an intuitive, no prior knowledge required interface for smart contracts on the Everscale blockchain."),(0,n.kt)("p",null,"Having studied the information provided above, now, let's start our DApp launch."),(0,n.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js >= 14.x installed"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager (NVM)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows"},"NVM-windows")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/#download-and-install"},"Docker >= 19.x installed and running"))),(0,n.kt)("h2",{id:"generate-a-new-project"},"Generate a new project"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir my-project && cd $_\nnpm init --force\nnpm install --save everdev\n")),(0,n.kt)("h3",{id:"configure-giver"},"Configure Giver"),(0,n.kt)("p",null,"Giver wallet that will sponsor ",(0,n.kt)("strong",{parentName:"p"},"EVER")," for deploy operation."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Configure shared private key:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer add giver 172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3\n")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Set Local Blockchain ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-se"},"SE (Startup Edition)")," as the default network:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Startup ",(0,n.kt)("inlineCode",{parentName:"strong"},"SE")," at this step, you may have to wait until the docker image is downloaded:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev se start\n")),(0,n.kt)("p",null,"A local network explorer is available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost"},"localhost")," check it."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Setup giver:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"address=0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\nnpx everdev network giver se $address --signer giver\n"))),(0,n.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Setup endpoint:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev network add devnet https://devnet-sandbox.evercloud.dev\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Setup giver:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"address=0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\nnpx everdev network giver devnet $address --signer giver\n")))),(0,n.kt)("h2",{id:"generate-a-new-smart-contract"},"Generate a new smart-contract"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol create App\n")),(0,n.kt)("p",null,"You got ",(0,n.kt)("inlineCode",{parentName:"p"},"App.sol"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.35.0;\npragma AbiHeader expire;\n\n// This is class that describes you smart contract.\ncontract App {\n    // Contract can have an instance variables.\n    // In this example instance variable `timestamp`\n    // is used to store the time of `constructor`\n    // or `touch` function call.\n    uint32 public timestamp;\n\n    // Contract can have a `constructor`. \n    // The function that will be called when contract will be deployed to the blockchain.\n    // In this example constructor adds current time to the instance variable.\n    // All contracts need call `tvm.accept()` for succeeded deploy.\n    constructor() public {\n        // Check that contract's public key is set\n        require(tvm.pubkey() != 0, 101);\n        // Check that message has signature (msg.pubkey() is not zero) and\n        // message is signed with the owner's private key\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        // The current smart contract agrees to buy some gas to finish the\n        // current transaction. This actions required to process external\n        // messages, which bring no value (hence no gas) with themselves.\n        tvm.accept();\n\n        timestamp = now;\n    }\n\n    function renderHelloWorld () public pure returns (string) {\n        return 'helloWorld';\n    }\n\n    // Updates variable `timestamp` with current blockchain time.\n    function touch() external {\n        // Each function that accepts external message must check that\n        // message is correctly signed.\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        // Tells to the TVM that we accept this message.\n        tvm.accept();\n        // Update timestamp\n        timestamp = now;\n    }\n\n    function sendValue(address dest, uint128 amount, bool bounce) public view {\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        tvm.accept();\n        // It allows to make a transfer with arbitrary settings\n        dest.transfer(amount, bounce, 0);\n    }\n}\n")),(0,n.kt)("p",null,"For more about ",(0,n.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.10/structure-of-a-contract.html"},"Solidity")," and specific of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},"Everscale Solidity")),(0,n.kt)("h2",{id:"compile-smart-contract"},"Compile smart-contract"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol compile App.sol\n")),(0,n.kt)("p",null,"You get:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"App.abi.json")," \u2014 ",(0,n.kt)("strong",{parentName:"li"},"ABI")," ",(0,n.kt)("inlineCode",{parentName:"li"},"*.abi.json")," file \u2014 a file that describes the contract interface, the methods and parameters used to interact with it, for detail see ",(0,n.kt)("a",{parentName:"li",href:"https://docs.ton.dev/86757ecb2/p/40ba94-abi-specification-v2"},"ABI Specification V2"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"App.tvc")," \u2014 ",(0,n.kt)("strong",{parentName:"li"},"TVC")," ",(0,n.kt)("inlineCode",{parentName:"li"},"*.tvc")," file \u2014 the compiled smart contract file. Used only when generating contract address and deploying contract code to the blockchain.")),(0,n.kt)("h2",{id:"deploy-smart-contract"},"Deploy smart-contract"),(0,n.kt)("h3",{id:"generate-the-key-pair-for-deploy-contract"},"Generate the key pair for deploy contract"),(0,n.kt)("p",null,"Key pair file \u2014 used to calculate contract's address. In ",(0,n.kt)("inlineCode",{parentName:"p"},"--sign")," parameter the corresponding seed phrase may be used instead of it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer generate coder\nnpx everdev signer default coder\n")),(0,n.kt)("h3",{id:"deploy"},"Deploy"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," ",(0,n.kt)("strong",{parentName:"p"},"EVER")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"1000000000")," ",(0,n.kt)("strong",{parentName:"p"},"nano EVER"))),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract deploy --network se --value 1000000000 App\n"))),(0,n.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract deploy --network devnet --value 1000000000 App\n")))),(0,n.kt)("h2",{id:"address-smart-contract"},"Address smart-contract"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Address of smart-contract is calculated from ",(0,n.kt)("inlineCode",{parentName:"strong"},"TVC")," and signer (",(0,n.kt)("inlineCode",{parentName:"strong"},"coder"),") public:")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract info --network se --signer coder App\n"))),(0,n.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract info --network devnet --signer coder App\n")))),(0,n.kt)("h2",{id:"interact-with-smart-contract"},"Interact with smart-contract"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Read:")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run-local --network se App renderHelloWorld\nnpx everdev contract run-local --network se App timestamp\n"))),(0,n.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run-local --network devnet App renderHelloWorld\nnpx everdev contract run-local --network devnet App timestamp\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Write:")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run --network se --signer coder App touch\n"))),(0,n.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run --network devnet --signer coder App touch\n")))),(0,n.kt)("p",null,"For more details see: ",(0,n.kt)("a",{parentName:"p",href:"/develop/tools/overview"},"Get started with Development Tools"),"."),(0,n.kt)("h2",{id:"full-docs"},"Full docs"),(0,n.kt)("p",null,"See extended quick start guide for Everdev at ",(0,n.kt)("a",{parentName:"p",href:"https://docs.everos.dev/everdev/guides/quick-start"},"https://docs.everos.dev/everdev/guides/quick-start")),(0,n.kt)("p",null,"Full EverDev documenation is available at ",(0,n.kt)("a",{parentName:"p",href:"https://docs.everos.dev/everdev/"},"https://docs.everos.dev/everdev/")))}v.isMDXComponent=!0}}]);