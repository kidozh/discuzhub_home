(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[60],{4852:function(t){"use strict";t.exports=Object.assign},4058:function(t,e,n){"use strict";var r=n(4836),i=n(5263);e.__esModule=!0;var o={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};e.IntlContextConsumer=e.IntlContextProvider=e.changeLocale=e.navigate=e.withIntl=e.Link=void 0;var a=n(8557);Object.keys(a).forEach((function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(o,t)||(e[t]=a[t]))}));var c=i(n(9029));e.Link=c.default,e.navigate=c.navigate,e.changeLocale=c.changeLocale;var l=r(n(9982));e.withIntl=l.default;var u=n(6971);e.IntlContextProvider=u.IntlContextProvider,e.IntlContextConsumer=u.IntlContextConsumer},9029:function(t,e,n){"use strict";var r=n(4836);e.__esModule=!0,e.changeLocale=e.navigate=e.default=void 0;var i=r(n(434)),o=r(n(7071)),a=r(n(7294)),c=r(n(5697)),l=n(4854),u=n(6971),s=function(t){var e=t.to,n=t.language,r=t.children,c=t.onClick,s=(0,o.default)(t,["to","language","children","onClick"]);return a.default.createElement(u.IntlContextConsumer,null,(function(t){var o=n||t.language,u=t.routed||n?"/"+o+e:""+e;return a.default.createElement(l.Link,(0,i.default)({},s,{to:u,onClick:function(t){n&&localStorage.setItem("gatsby-intl-language",n),c&&c(t)}}),r)}))};s.propTypes={children:c.default.node.isRequired,to:c.default.string,language:c.default.string},s.defaultProps={to:""};var g=s;e.default=g;e.navigate=function(t,e){if("undefined"!=typeof window){var n=window.___gatsbyIntl,r=n.language,i=n.routed?"/"+r+t:""+t;(0,l.navigate)(i,e)}};e.changeLocale=function(t,e){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,r="/"+t+(e||function(t){if(!n)return t;var e=t.indexOf("/",1);return t.substring(e)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",t),(0,l.navigate)(r)}}},9982:function(t,e,n){"use strict";var r=n(4836);e.__esModule=!0,e.default=void 0;var i=r(n(7294)),o=n(8557);e.default=function(t){return function(e){return console.warn("withIntl is deprecated. Please use injectIntl instead."),i.default.createElement((0,o.injectIntl)(t),e)}}},3239:function(t,e,n){"use strict";n.d(e,{Z:function(){return At}});var r,i,o,a,c=n(7294),l=n(5697),u=n.n(l),s=n(3524),g=n.n(s),p=n(9590),d=n.n(p),f=n(4852),m=n.n(f),I="bodyAttributes",b="htmlAttributes",C="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},h=(Object.keys(y).map((function(t){return y[t]})),"charset"),A="cssText",v="href",Z="http-equiv",w="innerHTML",M="itemprop",T="name",O="property",j="rel",z="src",k="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",S="defer",N="encodeSpecialCharacters",E="onChangeClientState",W="titleTemplate",G=Object.keys(x).reduce((function(t,e){return t[x[e]]=e,t}),{}),Y=[y.NOSCRIPT,y.SCRIPT,y.STYLE],R="data-react-helmet",P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},X=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},J=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},H=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},_=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(t){var e=q(t,y.TITLE),n=q(t,W);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=q(t,L);return e||r||void 0},F=function(t){return q(t,E)||function(){}},Q=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return B({},t,e)}),{})},K=function(t,e){return e.filter((function(t){return void 0!==t[y.BASE]})).map((function(t){return t[y.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},V=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+P(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var c=o[a],l=c.toLowerCase();-1===e.indexOf(l)||n===j&&"canonical"===t[n].toLowerCase()||l===j&&"stylesheet"===t[l].toLowerCase()||(n=l),-1===e.indexOf(c)||c!==w&&c!==A&&c!==M||(n=c)}if(!n||!t[n])return!1;var u=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],l=m()({},r[c],i[c]);r[c]=l}return t}),[]).reverse()},q=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},$=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){$(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,ot=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,l=t.onChangeClientState,u=t.scriptTags,s=t.styleTags,g=t.title,p=t.titleAttributes;lt(y.BODY,r),lt(y.HTML,i),ct(g,p);var d={baseTag:ut(y.BASE,n),linkTags:ut(y.LINK,o),metaTags:ut(y.META,a),noscriptTags:ut(y.NOSCRIPT,c),scriptTags:ut(y.SCRIPT,u),styleTags:ut(y.STYLE,s)},f={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(f[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),l(t,f,m)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),lt(y.TITLE,e)},lt=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(R),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),c=0;c<a.length;c++){var l=a[c],u=e[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var g=o.length-1;g>=0;g--)n.removeAttribute(o[g]);i.length===o.length?n.removeAttribute(R):n.getAttribute(R)!==a.join(",")&&n.setAttribute(R,a.join(","))}},ut=function(t,e){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===w)n.innerHTML=e.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(R,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},st=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},gt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[x[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case y.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[R]=!0,i=gt(n,r),[c.createElement(y.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=st(n),o=at(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+_(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+_(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case I:case b:return{toComponent:function(){return gt(e)},toString:function(){return st(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[R]=!0,r);return Object.keys(e).forEach((function(t){var n=x[t]||t;if(n===w||n===A){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),c.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===w||t===A)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+_(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===Y.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,l=t.scriptTags,u=t.styleTags,s=t.title,g=void 0===s?"":s,p=t.titleAttributes;return{base:pt(y.BASE,e,r),bodyAttributes:pt(I,n,r),htmlAttributes:pt(b,i,r),link:pt(y.LINK,o,r),meta:pt(y.META,a,r),noscript:pt(y.NOSCRIPT,c,r),script:pt(y.SCRIPT,l,r),style:pt(y.STYLE,u,r),title:pt(y.TITLE,{title:g,titleAttributes:p},r)}},ft=g()((function(t){return{baseTag:K([v,k],t),bodyAttributes:Q(I,t),defer:q(t,S),encode:q(t,N),htmlAttributes:Q(b,t),linkTags:V(y.LINK,[j,v],t),metaTags:V(y.META,[T,h,Z,O,M],t),noscriptTags:V(y.NOSCRIPT,[w],t),onChangeClientState:F(t),scriptTags:V(y.SCRIPT,[z,w],t),styleTags:V(y.STYLE,[A],t),title:U(t),titleAttributes:Q(C,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){ot(t,(function(){it=null}))})):(ot(t),it=null)}),dt)((function(){return null})),mt=(i=ft,a=o=function(t){function e(){return D(this,e),H(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:e};case y.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return B({},r,((e={})[n.type]=[].concat(r[n.type]||[],[B({},i,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(r.type){case y.TITLE:return B({},i,((e={})[r.type]=a,e.titleAttributes=B({},o),e));case y.BODY:return B({},i,{bodyAttributes:B({},o)});case y.HTML:return B({},i,{htmlAttributes:B({},o)})}return B({},i,((n={})[r.type]=B({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=B({},e);return Object.keys(t).forEach((function(e){var r;n=B({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return c.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[G[n]||n]=t[n],e}),e)}(J(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=J(t,["children"]),r=B({},n);return e&&(r=this.mapChildrenToProps(e,r)),c.createElement(i,r)},X(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(c.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var t=i.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);mt.renderStatic=mt.rewind;var It=mt,bt=n(4854);var Ct=()=>(0,bt.useStaticQuery)("1453463915").site.siteMetadata,yt=n(2396);const ht=t=>{let{title:e,description:n,pathname:r,image:i,children:o,props:a}=t;const l=Ct(),{theme:u}=(0,yt.B7)(),{siteTitle:s,siteTitleAlt:g,siteUrl:p,siteDescription:d,siteLanguage:f,siteImage:m}=l,I={title:e||g,description:n||d,url:""+p+(r||""),image:""+p+(i||m)};return c.createElement(It,{title:e,defaultTitle:g,titleTemplate:"%s | "+s},c.createElement("html",{lang:f}),c.createElement("meta",{name:"description",content:I.description}),c.createElement("meta",{name:"image",content:I.image}),c.createElement("meta",{property:"og:title",content:I.title}),c.createElement("meta",{property:"og:url",content:I.url}),c.createElement("meta",{property:"og:description",content:I.description}),c.createElement("meta",{property:"og:image",content:I.image}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{property:"og:image:alt",content:I.description}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("meta",{name:"twitter:title",content:I.title}),c.createElement("meta",{name:"twitter:url",content:I.url}),c.createElement("meta",{name:"twitter:description",content:I.description}),c.createElement("meta",{name:"twitter:image",content:I.image}),c.createElement("meta",{name:"twitter:image:alt",content:I.description}),c.createElement("meta",{name:"gatsby-theme",content:"@discuzhub/theme-ui"}),c.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),c.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),c.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),o)};var At=ht;ht.defaultProps={title:"",description:!1,pathname:!1,image:!1,children:null}},6383:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(8733),i=n(795),o=n(6197),a=n(4854),c=n(4058),l=n(9659);var u=()=>{const[t,e]=(0,o.If)(),n="dark"===t,u=(0,c.useIntl)(),{site:s}=(0,a.useStaticQuery)("3000541721");return(0,r.tZ)(i.W2,{as:"header",sx:{display:"flex",alignItems:"center",variant:"styles.header"}},(0,r.tZ)(i.rj,{columns:[1,"6fr 4fr"]},(0,r.tZ)(i.xu,null,(0,r.tZ)(i.Ee,{src:l.Z,ratio:1,sx:{width:32,verticalAlign:"middle"}}),(0,r.tZ)(c.Link,{as:a.Link,to:"/",sx:{variant:"styles.navlink",p:2,fontSize:4,fontWeight:400}},s.siteMetadata.title)),(0,r.tZ)(i.xu,null,(0,r.tZ)(i.rj,{columns:[1,6,6],as:"nav",sx:{alignContent:["left","right","right"],textAlign:["left","center","center"],justifyContent:"right"}},(0,r.tZ)(c.Link,{as:i.OL,to:"/dev-blog",sx:{variant:"styles.navlink",p:2}},(0,r.tZ)(c.FormattedMessage,{id:"nav.blog"})),(0,r.tZ)(c.Link,{as:i.OL,to:"/features",sx:{variant:"styles.navlink",p:2}},(0,r.tZ)(c.FormattedMessage,{id:"nav.features"})),(0,r.tZ)(c.Link,{as:i.OL,to:"/faq",sx:{variant:"styles.navlink",p:2}},(0,r.tZ)(c.FormattedMessage,{id:"nav.faq"})),(0,r.tZ)(c.Link,{as:i.OL,to:"/sponsor-us/",sx:{variant:"styles.navlink",p:2}},(0,r.tZ)(c.FormattedMessage,{id:"sponsor.sponsor"})),(0,r.tZ)(c.Link,{as:i.OL,to:"/contact",sx:{variant:"styles.navlink",p:2}},(0,r.tZ)(c.FormattedMessage,{id:"nav.contact"})),(0,r.tZ)(i.zx,{sx:{variant:"buttons.toggle",hidden:[!0,!1,!1]},onClick:t=>{e(n?"light":"dark")},type:"button","aria-label":"Toggle dark mode"},n?u.formatMessage({id:"footer.light"}):u.formatMessage({id:"footer.dark"}))))))},s=n(3150);const g={en:"English",zh:"简体中文","zh-hk":"繁體中文（港澳）"};var p=()=>{const t=(0,c.useIntl)();return(0,r.tZ)("footer",null,(0,r.tZ)(i.rj,null,(0,r.tZ)(i.xu,{variant:"primary",sx:{justifyContent:"center",alignItems:"center",textAlign:"center",borderRadius:4}},(0,r.tZ)(c.IntlContextConsumer,{sx:{justifyContent:"center"}},(t=>{let{languages:e,language:n}=t;return e.map((t=>(0,r.tZ)(s.Ge.a,{key:t,onClick:()=>(0,c.changeLocale)(t),sx:{ml:2,color:n===t?"primary":"highlight",fontWeight:n===t?"semibold":"regular"},style:{margin:10,textDecoration:n===t?"underline":"none",cursor:"pointer",focus:n===t}},g[t])))})))),(0,r.tZ)(i.rj,{columns:[1,2,2],sx:{ml:4,mt:4,mr:4,pb:4}},(0,r.tZ)(i.xu,null,(0,r.tZ)("h3",null,t.formatMessage({id:"footer.notice"})),(0,r.tZ)("p",null,t.formatMessage({id:"footer.copyright"})," © ",(new Date).getFullYear(),". ",t.formatMessage({id:"footer.copyright_rights_reserved"})),(0,r.tZ)("p",null,t.formatMessage({id:"about.about_description"}),", ",t.formatMessage({id:"footer.docs_with"}),(0,r.tZ)(c.Link,{"aria-label":"Link to the CC BY 4.0",href:"https://creativecommons.org/licenses/by/4.0"},"CC BY 4.0"))),(0,r.tZ)(i.xu,null,(0,r.tZ)("h3",null,t.formatMessage({id:"footer.links"})),(0,r.tZ)(i.rj,{columns:[1,2,2],sx:{"& >div":{mr:4}}},(0,r.tZ)(i.xu,null,(0,r.tZ)(c.Link,{to:"/term_of_use/"},t.formatMessage({id:"nav.terms_of_use"}))),(0,r.tZ)(i.xu,null,(0,r.tZ)(c.Link,{to:"/privacy_policy/"},t.formatMessage({id:"nav.privacy"}))),(0,r.tZ)(i.xu,null,(0,r.tZ)(c.Link,{to:"/test-my-bbs/"},t.formatMessage({id:"test-my-bbs.title"}))),(0,r.tZ)(i.xu,null,(0,r.tZ)(c.Link,{to:"/open_source_licence/"},t.formatMessage({id:"open_source.open_source_title"}))),(0,r.tZ)(i.xu,null,(0,r.tZ)(c.Link,{to:"/compatibility-guide/"},t.formatMessage({id:"compatibility.compatibility_title"}))),(0,r.tZ)(i.xu,null,(0,r.tZ)(c.Link,{to:"/sponsor-us/"},t.formatMessage({id:"sponsor.sponsor_title"}))),(0,r.tZ)(i.xu,null,(0,r.tZ)(c.Link,{to:"/customize-bbs/"},t.formatMessage({id:"customize.customize_locally_title"}))),(0,r.tZ)(i.xu,null,(0,r.tZ)(c.Link,{to:"/customize-bbs-in-github/"},t.formatMessage({id:"customize.customize_github_title"})))))))},d=n(3431),f=n(917),m=n(3239);var I=function(t){let{children:e}=t;return(0,r.tZ)(s.Ge,{"data-testid":"theme-root"},(0,r.tZ)(f.xB,{styles:(0,d.iv)({"*":{boxSizing:"inherit","&:before":{boxSizing:"inherit"},"&:after":{boxSizing:"inherit"}},body:{margin:0,padding:0,boxSizing:"border-box",textRendering:"optimizeLegibility",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"::selection":{backgroundColor:"primary",color:"white"}})}),(0,r.tZ)(m.Z,null),(0,r.tZ)("main",null,e))};var b=function(t){let{location:e,title:n,children:o,subject:a}=t;return(0,r.tZ)(I,{className:"discuzhub"},(0,r.tZ)(m.Z,{title:n}),(0,r.tZ)(u,null),(0,r.tZ)(i.W2,{as:"main",sx:{p:0}},o),(0,r.tZ)(p,null))}},9590:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(l=c;0!=l--;)if(!o(t[l],a[l]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(l=c;0!=l--;)if(t[l]!==a[l])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(e&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!o(t[u[l]],a[u[l]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return o(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(t,e,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=t(u.map((function(t){return t.props}))),g.canUseDOM?e(l):n&&(l=n(l))}var g=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=l;return l=void 0,u=[],t};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var t=u.indexOf(this);u.splice(t,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(g,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(g,"canUseDOM",c),g}}},8733:function(t,e,n){"use strict";n.d(e,{tZ:function(){return r}});var r=n(2396).tZ},9659:function(t,e){"use strict";e.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzAwLjAwMDAzcHQiCiAgIGhlaWdodD0iMzAwLjAwMDAzcHQiCiAgIHZpZXdCb3g9IjAgMCAxMDUuODMzMzMgMTA1LjgzMzMzIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBzb2RpcG9kaTpkb2NuYW1lPSJsb2dvX3dpdGhfYmcuc3ZnIgogICBpbmtzY2FwZTpleHBvcnQtZmlsZW5hbWU9IkU6XEFuZHJvaWRQcm9qZWN0c1xEaXNjdXpIdWJcYXBwXHNyY1xtYWluXHJlc1xtaXBtYXAteHh4aGRwaVxsb2dvLnBuZyIKICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjE5OS45MTk5OCIKICAgaW5rc2NhcGU6ZXhwb3J0LXlkcGk9IjE5OS45MTk5OCIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi40ICg1ZGE2ODljMzEzLCAyMDE5LTAxLTE0KSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjAuOTg5OTQ5NDkiCiAgICAgaW5rc2NhcGU6Y3g9IjE3NS41NDI5NSIKICAgICBpbmtzY2FwZTpjeT0iMTc4LjIwOTM1IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLWJib3gtbWlkcG9pbnRzPSJ0cnVlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIHVuaXRzPSJwdCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSJ0cnVlIgogICAgIGlua3NjYXBlOmJib3gtbm9kZXM9InRydWUiCiAgICAgaW5rc2NhcGU6YmJveC1wYXRocz0idHJ1ZSIKICAgICBpbmtzY2FwZTpzbmFwLWJib3gtZWRnZS1taWRwb2ludHM9InRydWUiCiAgICAgaW5rc2NhcGU6c25hcC1jZW50ZXI9InRydWUiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzY2IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjcwNSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjIiCiAgICAgaW5rc2NhcGU6bGFiZWw9InJlY3RhbmdsZV9iYWNrZ3JvdW5kIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03Ljc1ODg0NDQsLTcuNzU4ODQ0NCkiPgogICAgPHJlY3QKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjEuMzg5MDUxNDQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIgogICAgICAgaWQ9InJlY3Q4MzciCiAgICAgICB3aWR0aD0iMTA1LjgzMzM0IgogICAgICAgaGVpZ2h0PSIxMDUuODMzMzQiCiAgICAgICB4PSI3Ljc1ODg0NDQiCiAgICAgICB5PSI3Ljc1ODg0NDQiCiAgICAgICByeD0iMjIuNTc3Nzc4IgogICAgICAgcnk9IjIyLjU3Nzc3OCIKICAgICAgIGlua3NjYXBlOmV4cG9ydC1maWxlbmFtZT0iRTpcQW5kcm9pZFByb2plY3RzXERpc2N1ekh1YlxhcHBcc3JjXG1haW5ccmVzXG1pcG1hcC14eHhoZHBpXGxvZ28ucG5nIgogICAgICAgaW5rc2NhcGU6ZXhwb3J0LXhkcGk9IjIwMCIKICAgICAgIGlua3NjYXBlOmV4cG9ydC15ZHBpPSIyMDAiIC8+CiAgPC9nPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9ImxvZ29fbGF5ZXIiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjAyMDc3ODksLTU0Ljg1NjUwNikiCiAgICAgc3R5bGU9ImRpc3BsYXk6aW5saW5lIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZThlMjg4O2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMmMzZTUwO3N0cm9rZS13aWR0aDoxMS4yODg4ODg4OTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO3BhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiCiAgICAgICBpZD0icGF0aDgxOSIKICAgICAgIGQ9Ik0gODIuMTA0MTE1LDE0NC40MzQ5MiBBIDQyLjMzMzMzMiw0Mi4zMzMzMzIgMCAwIDEgMjcuMzUyMTU5LDEzMy41NDQwOCA0Mi4zMzMzMzIsNDIuMzMzMzMyIDAgMCAxIDMxLjAwMzI2NSw3Ny44Mzg5OTEgNDIuMzMzMzMyLDQyLjMzMzMzMiAwIDAgMSA4Ni43MDgzNTEsNzQuMTg3ODg4IDQyLjMzMzMzMiw0Mi4zMzMzMzIgMCAwIDEgOTcuNTk5MTkxLDEyOC45Mzk4NCIKICAgICAgIHNvZGlwb2RpOnR5cGU9ImFyYyIKICAgICAgIHNvZGlwb2RpOnN0YXJ0PSIxLjA0NzE5NzYiCiAgICAgICBzb2RpcG9kaTplbmQ9IjAuNTIzNTk4NzgiCiAgICAgICBzb2RpcG9kaTpyeT0iNDIuMzMzMzMyIgogICAgICAgc29kaXBvZGk6cng9IjQyLjMzMzMzMiIKICAgICAgIHNvZGlwb2RpOmN5PSIxMDcuNzczMTgiCiAgICAgICBzb2RpcG9kaTpjeD0iNjAuOTM3NDUiCiAgICAgICBzb2RpcG9kaTpvcGVuPSJ0cnVlIiAvPgogICAgPGNpcmNsZQogICAgICAgc3R5bGU9ImZpbGw6I2U4NWM0MztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTEuMjg4ODg4OTM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIgogICAgICAgaWQ9InBhdGg4MjEiCiAgICAgICBjeD0iOTAuODYwMzk3IgogICAgICAgY3k9IjEzNy43MTg1NSIKICAgICAgIHI9IjE1Ljg3NSIgLz4KICA8L2c+Cjwvc3ZnPgo="},5263:function(t,e,n){var r=n(8698).default;function i(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(i=function(t){return t?n:e})(t)}t.exports=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var n=i(e);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if("default"!==c&&Object.prototype.hasOwnProperty.call(t,c)){var l=a?Object.getOwnPropertyDescriptor(t,c):null;l&&(l.get||l.set)?Object.defineProperty(o,c,l):o[c]=t[c]}return o.default=t,n&&n.set(t,o),o},t.exports.__esModule=!0,t.exports.default=t.exports},7071:function(t){t.exports=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i},t.exports.__esModule=!0,t.exports.default=t.exports},8698:function(t){function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=f3dde150724410cb33ddb3c71c5ba4e9f0d7edba-93cd2a8ca829e9cbd814.js.map