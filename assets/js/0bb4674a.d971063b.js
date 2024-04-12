"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(n),k=r,f=d["".concat(s,".").concat(k)]||d[k]||p[k]||o;return n?a.createElement(f,l(l({ref:e},c),{},{components:n})):a.createElement(f,l({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5779:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:1},s="Testnet User Guide",u={unversionedId:"Build/TestnetUserGuide",id:"Build/TestnetUserGuide",title:"Testnet User Guide",description:"How to Connect a Wallet to Bitlayer Testnet",source:"@site/docs/Build/TestnetUserGuide.md",sourceDirName:"Build",slug:"/Build/TestnetUserGuide",permalink:"/APIs/docs/Build/TestnetUserGuide",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Build",permalink:"/APIs/docs/category/build"},next:{title:"Getting Started",permalink:"/APIs/docs/Build/QuickStart"}},c={},p=[{value:"How to Connect a Wallet to Bitlayer Testnet",id:"how-to-connect-a-wallet-to-bitlayer-testnet",level:2},{value:"Setup: MetaMask Wallet",id:"setup-metamask-wallet",level:3},{value:"Add the Bitlayer Testnet configurations to your wallet",id:"add-the-bitlayer-testnet-configurations-to-your-wallet",level:3},{value:"You can also add the Bitlayer Testnet manually",id:"you-can-also-add-the-bitlayer-testnet-manually",level:3},{value:"Faucet: Request testnet tokens on Bitlayer Testnet to power your first transactions",id:"faucet-request-testnet-tokens-on-bitlayer-testnet-to-power-your-first-transactions",level:3},{value:"Token Contract Information",id:"token-contract-information",level:4},{value:"Transfer Tokens",id:"transfer-tokens",level:3}],d={toc:p};function k(t){var e=t.components,i=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testnet-user-guide"},"Testnet User Guide"),(0,o.kt)("h2",{id:"how-to-connect-a-wallet-to-bitlayer-testnet"},"How to Connect a Wallet to Bitlayer Testnet"),(0,o.kt)("p",null,"Here is the suggested workflow to explore the Bitlayer Testnet:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a MetaMask wallet. Other types of wallets, including Particle, Unisat, Xverse, are also accepted."),(0,o.kt)("li",{parentName:"ol"},"Add the Bitlayer Testnet configurations to your wallet"),(0,o.kt)("li",{parentName:"ol"},"Using a Bitcoin Faucet to power your first transactions"),(0,o.kt)("li",{parentName:"ol"},"Request test tokens in the Bitlayer Testnet to power your first transactions")),(0,o.kt)("h3",{id:"setup-metamask-wallet"},"Setup: MetaMask Wallet"),(0,o.kt)("p",null,"Wallets can connect to various blockchains, with MetaMask, Unisat, Xverse, etc. can connect to Bitlayer. Metamask is a great wallet that you can use. This article is a guide that assumes you have a Metamask wallet.\nIf you need to help doing this, here is an official guide to set up a MetaMask wallet account below: Getting started with MetaMask."),(0,o.kt)("h3",{id:"add-the-bitlayer-testnet-configurations-to-your-wallet"},"Add the Bitlayer Testnet configurations to your wallet"),(0,o.kt)("p",null,"Once you have a MetaMask wallet, you can start using the Bitlayer testnet and explore new DApps, interacting with contracts like Satswap.\nThe first thing you need to do is add the Bitlayer network testnet to your wallet. "),(0,o.kt)("h3",{id:"you-can-also-add-the-bitlayer-testnet-manually"},"You can also add the Bitlayer Testnet manually"),(0,o.kt)("p",null,"Once Metamask is open, click the Ethereum Mainnet button and click the Add network button to set up the Bitlayer testnet."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"addnetwork",src:n(9854).Z,width:"1191",height:"771"})),(0,o.kt)("p",null,"At the bottom of the existing list, click \u201cAdd more networks manually\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"addmanually",src:n(9121).Z,width:"1280",height:"746"})),(0,o.kt)("p",null,'Fill out the network information as follows. Once the data is entered correctly, please click the "save" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"save",src:n(8466).Z,width:"1321",height:"865"})),(0,o.kt)("p",null,"You can copy/paste the following configuration details into the corresponding field in your wallet."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Network"),(0,o.kt)("td",{parentName:"tr",align:null},"Bitlayer Testnet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RPC URL"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://testnet-rpc.bitlayer.org"},"https://testnet-rpc.bitlayer.org"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Chain ID"),(0,o.kt)("td",{parentName:"tr",align:null},"200810")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Currency symbol"),(0,o.kt)("td",{parentName:"tr",align:null},"BTC")))),(0,o.kt)("p",null,"After saving the network configuration, you should now have the Bitlayer Testnet selected!"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"success",src:n(8751).Z,width:"1245",height:"685"})),(0,o.kt)("h3",{id:"faucet-request-testnet-tokens-on-bitlayer-testnet-to-power-your-first-transactions"},"Faucet: Request testnet tokens on Bitlayer Testnet to power your first transactions"),(0,o.kt)("p",null,"Bitlayer is an EVM-compatible blockchain, and can enable applications and developers from the existing Ethereum ecosystem to migrate to Bitlayer at low cost, eliminating the need for substantial modifications or rewrites."),(0,o.kt)("p",null,"If you want to interact with the Dapps on Bitlayer Testnet, your first stop is going to be to a \u201cfaucet\u201d to fill up your \u201ctank\u201d. "),(0,o.kt)("p",null,"Here is a faucet directly distributes Bitlayer Testnet tokens: ",(0,o.kt)("a",{parentName:"p",href:"https://www.bitlayer.org/faucet"},"https://www.bitlayer.org/faucet")),(0,o.kt)("p",null,"It may take a few seconds for them to appear, but you can check the status by looking for a transaction for your address in ",(0,o.kt)("a",{parentName:"p",href:"https://testnet-scan.bitlayer.org"},"Bitlayer Explorer"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"alt text",src:n(1952).Z,width:"1898",height:"878"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pace Yourself!")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can obtain Bitlayer Testnet tokens every 24 hours for development.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"And the testnet token has no financial value and cannot be traded at a real price.")),(0,o.kt)("h4",{id:"token-contract-information"},"Token Contract Information"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Token"),(0,o.kt)("th",{parentName:"tr",align:null},"Contract Address"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BRC"),(0,o.kt)("td",{parentName:"tr",align:null},"0xf4340cf5f3891a3827713b33f769b501a0b5b122")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"USDC"),(0,o.kt)("td",{parentName:"tr",align:null},"0x209ba92b5cc962673a30998ed7a223109d0be5e8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"USDT"),(0,o.kt)("td",{parentName:"tr",align:null},"0xab40fe1dae842b209599269b8dafb0c54a743438")))),(0,o.kt)("h3",{id:"transfer-tokens"},"Transfer Tokens"),(0,o.kt)("p",null,"You can use your wallet\u2019s normal function for transferring tokens within the Bitlayer Testnet \u2014 no additional configurations are needed. The following are the conventional steps:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),": Open your wallet and switch to Bitlayer Testnet"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": Click the Send button in the middle and type the address you want to transfer to in the text box."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),": Select the token in the Asset box and type the amount of token that you want to transfer."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4"),": Click the Next button and then click the Confirm button to send out the transaction."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5"),": After sending, you can find the transaction in the Activity tab in your wallet."))}k.isMDXComponent=!0},8751:function(t,e,n){e.Z=n.p+"assets/images/Success-7127f8db2cec19ec561aa5abfc71b232.png"},9121:function(t,e,n){e.Z=n.p+"assets/images/addmanually-89a305cef4d892212e87a861ef70e82e.png"},9854:function(t,e,n){e.Z=n.p+"assets/images/addnetwork-6e431bc774334143ad6dfc5cc6a15623.png"},1952:function(t,e,n){e.Z=n.p+"assets/images/faucet-f921fea2f765c02b01dc542378cce996.png"},8466:function(t,e,n){e.Z=n.p+"assets/images/save-2ff827657c6991130001f1af813ece49.png"}}]);