"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8746],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4530:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],s={sidebar_position:4,title:"Blocks"},i=void 0,c={unversionedId:"Bitlayer Scan APIs/Blocks",id:"Bitlayer Scan APIs/Blocks",title:"Blocks",description:"Get Block Rewards by BlockNo",source:"@site/docs/Bitlayer Scan APIs/Blocks.mdx",sourceDirName:"Bitlayer Scan APIs",slug:"/Bitlayer Scan APIs/Blocks",permalink:"/APIs/docs/Bitlayer Scan APIs/Blocks",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Blocks"},sidebar:"docs",previous:{title:"Transactions",permalink:"/APIs/docs/Bitlayer Scan APIs/Transactions"},next:{title:"Logs",permalink:"/APIs/docs/Bitlayer Scan APIs/Logs"}},p={},u=[{value:"Get Block Rewards by BlockNo",id:"get-block-rewards-by-blockno",level:2},{value:"Get Block Number by Timestamp",id:"get-block-number-by-timestamp",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},d=m("Tabs"),b=m("TabItem"),k={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-block-rewards-by-blockno"},"Get Block Rewards by BlockNo"),(0,o.kt)("p",null,"The status field returns 0 for failed transactions\uff0c1 for successful transactions and 2 for pending transactions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"https://api-testnet.bitlayer.org/scan/api?module=block&action=getblockreward&blockNum=426364\n")),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(b,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},"Query Parameters",(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"blockno"),(0,o.kt)("td",{parentName:"tr",align:null},"the ",(0,o.kt)("inlineCode",{parentName:"td"},"integer")," block number to check block rewards for eg. 12697906"))))),(0,o.kt)(b,{value:"response",label:"Response",mdxType:"TabItem"},"Sample Response (Returned 'isError' values: 0=Ok, 1=Rejected/Cancelled)")),(0,o.kt)("h2",{id:"get-block-number-by-timestamp"},"Get Block Number by Timestamp"),(0,o.kt)("p",null,"[Parameters]"," timestamp format: Unix timestamp (supports Unix timestamps in seconds), closest value: 'before' or 'after'"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"https://api-testnet.bitlayer.org/scan/api?module=block&action=getblocknobytime&timestamp=1601510400&closest=before\n")),(0,o.kt)(d,{mdxType:"Tabs"},(0,o.kt)(b,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},"Query Parameters",(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,o.kt)("td",{parentName:"tr",align:null},"the ",(0,o.kt)("inlineCode",{parentName:"td"},"integer")," representing the Unix timestamp in seconds")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"closest"),(0,o.kt)("td",{parentName:"tr",align:null},"the closest available block to the provided timestamp, either ",(0,o.kt)("inlineCode",{parentName:"td"},"before")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"after")))))),(0,o.kt)(b,{value:"response",label:"Response",mdxType:"TabItem"},"Sample Response (Returned 'isError' values: 0=Ok, 1=Rejected/Cancelled)")))}f.isMDXComponent=!0}}]);