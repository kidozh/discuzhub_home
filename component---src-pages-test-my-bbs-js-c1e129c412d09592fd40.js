(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{B2PW:function(t,e,n){var i=n("TGkP"),s=function(t){return i(t)[0]};t.exports=function(t){return null==t&&(t=t),function(e,n,l,a){null==l&&(l=t),null==a&&(a=l);var o=function(t){return i(t)[1]}(e);if(o===n)return e;var r=s(e);if("px"!==o)if("em"===o)r=s(e)*s(l);else if("rem"===o)r=s(e)*s(t);else{if("ex"!==o)return e;r=s(e)*s(l)*2}var c=r;if("px"!==n)if("em"===n)c=r/s(a);else if("rem"===n)c=r/s(t);else{if("ex"!==n)return e;c=r/s(a)/2}return parseFloat(c.toFixed(5))+n}}},"Eb/5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.LARGER_DISPLAY_WIDTH="1600px",e.LARGE_DISPLAY_WIDTH="1280px",e.DEFAULT_WIDTH="980px",e.TABLET_WIDTH="768px",e.MOBILE_WIDTH="480px",e.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",e.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",e.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",e.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",e.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",e.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",e.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",e.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",e.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",e.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},FwpG:function(t,e,n){"use strict";n("q1tI");var i=n("izhR"),s=n("2A+t"),l=n("MXbp"),a=n("kCIJ"),o=n("Bl7J"),r=n("Wbzz"),c=(n("ki+i"),n("aehL"),n("YVoz")),u=n.n(c);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={fontFamily:"heading",lineHeight:"heading",fontWeight:"heading"},h={root:{fontFamily:"body",fontSize:2,fontWeight:"body",lineHeight:"body"},img:{maxWidth:"100%"},h1:u()({fontSize:5},d),h2:u()({fontSize:4},d),h3:u()({fontSize:3},d),h4:u()({fontSize:2},d),h5:u()({fontSize:1},d),h6:u()({fontSize:0},d),ul:{listStylePosition:"outside",listStyleImage:"none",ml:3},ol:{listStylePosition:"outside",listStyleImage:"none",ml:3},li:{mb:2,pl:0,ol:{my:2,ml:3},ul:{my:2,ml:3},p:{mb:2}},p:{},table:{borderCollapse:"collapse",width:"100%"},th:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,":first-child":{pl:0},":last-child":{pr:0}},td:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,mt:"-1px",":first-child":{pl:0},":last-child":{pr:0}},blockquote:{mx:3},hr:{border:0,borderBottom:"1px solid",mt:"-1px",mb:3},b:{fontWeight:"bold"},strong:{fontWeight:"bold"},code:{fontSize:"85%"},pre:{fontSize:"85%",padding:3}};[].concat(["h6","h5","h4","h3","h2","h1"],["ul","ol","p","pre","table","blockquote","img","hr"]).forEach((function(t){u()(h,b({},t,u()({padding:0,margin:0,marginBottom:3},h[t])))}));n("Z5ny"),n("qKvR"),i.k.h1,i.k.h2,i.k.h3,i.k.h4,i.k.h5,i.k.h6,i.r,i.o,e.a=function(t){var e=t.subject,n=t.children,c=(Object(a.useIntl)(),Object(r.useStaticQuery)("3348891086"));return Object(s.c)(o.a,{title:e},Object(s.c)(i.g,{sx:{bg:"primary",p:4}},Object(s.c)(l.b.h1,{sx:{color:"highlight",textAlign:"center",fontWeight:600}},e),Object(s.c)(l.b.p,{sx:{color:"white",textAlign:"center"}},c.site.siteMetadata.title)),Object(s.c)(i.g,{as:"article",sx:{px:[2,4,6],py:[2,4,6],pt:[1,2,2],pb:[1,2,2]}},Object(s.c)(l.a,{components:{a:i.o}}),n))}},TGkP:function(t,e){t.exports=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e}},Z5ny:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l=n("aZJH"),a=(i=l)&&i.__esModule?i:{default:i},o=n("Eb/5");var r={title:"Grand View",baseFontSize:"16px",baseLineHeight:1.6875,googleFonts:[{name:"Montserrat",styles:["700"]},{name:"Arvo",styles:["400","400i","700"]}],headerFontFamily:["Montserrat","sans-serif"],bodyFontFamily:["Arvo","sans-serif"],headerColor:"hsla(0,0%,0%,1)",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:700,bodyWeight:400,boldWeight:700,overrideStyles:function(t,e){var n=t.adjustFontSizeTo,i=t.scale,l=t.rhythm;return function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({a:{color:"#d65947",textDecoration:"none"},"a:hover,a:active":{color:e.bodyColor},"h1,h2,h3,h4,h5,h6":{marginTop:l(2)},blockquote:s({},i(.2),{color:(0,a.default)(41),paddingLeft:l(13/16),marginLeft:0,borderLeft:l(3/16)+" solid #fca206"}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":s({},n(e.baseFontSize),{color:e.bodyColor,fontWeight:e.bodyWeight}),"blockquote cite:before":{content:'"— "'}},o.MOBILE_MEDIA_QUERY,{blockquote:{marginLeft:l(-3/4),marginRight:0,paddingLeft:l(9/16)}})}};e.default=r},"Z94/":function(t,e){var n=Object.prototype.toString;t.exports=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Number]"==n.call(t)}},aZJH:function(t,e){function n(t){return!isNaN(parseFloat(t))&&isFinite(t)}t.exports=function(t,e,i){if(void 0===e&&(e=0),void 0===i&&(i=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!n(e))throw new Error("Hue is not a number");if(!n(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var s=0;if(0!==e){s=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var l=0;return i?(l=t/100,t="100%,"):(l=(100-t)/100,t="0%,"),"hsla("+e+","+s+"%,"+t+l+")"}},aehL:function(t,e,n){(function(){var e,i;e=n("Z94/"),i={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"augmented fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},t.exports=function(t,n){var s;return null==t&&(t=0),null==n&&(n="golden"),s=e(n)?n:null!=i[n]?i[n]:i.golden,Math.pow(s,t)}}).call(this)},"ki+i":function(t,e,n){var i=n("B2PW"),s=n("TGkP"),l=function(t){return s(t)[1]},a=function(t){return s(t)[0]},o={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},r=function(t,e){var n,s=i(e.baseFontSize),l=a(s(t,"px")),o=a(e.baseLineHeightInPx),r=a(s(e.minLinePadding,"px"));return(n=e.roundToNearestHalfLine?Math.ceil(2*l/o)/2:Math.ceil(l/o))*o-l<2*r&&(n+=e.roundToNearestHalfLine?.5:1),n},c=function(t){var e=i(t.baseFontSize);return function(n,i,s){null==n&&(n=1),null==i&&(i=t.baseFontSize),null==s&&(s=0);var o=n*a(t.baseLineHeightInPx)-s+"px",r=e(o,t.rhythmUnit,i);return"px"===l(r)&&(r=Math.floor(a(r))+l(r)),parseFloat(a(r).toFixed(5))+l(r)}};t.exports=function(t){var e=JSON.parse(JSON.stringify(o)),n=Object.assign({},e,t),s=i(n.baseFontSize);return l(n.baseLineHeight)?(a(s(n.baseFontSize,"px")),n.baseLineHeightInPx=s(n.baseLineHeight,"px")):n.baseLineHeightInPx=a(n.baseFontSize)*n.baseLineHeight+"px",{rhythm:c(n),establishBaseline:function(){return function(t){return i(t.baseFontSize),{fontSize:a(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()}}(n)},linesForFontSize:function(t){return r(t,n)},adjustFontSizeTo:function(t,e,s){return null==e&&(e="auto"),function(t,e,n,s){null==n&&(n=s.baseFontSize),"%"===l(t)&&(t=a(s.baseFontSize)*(a(t)/100)+"px");var o=i(s.baseFontSize);t=o(t,"px",n=o(n,"px"));var u=c(s);return"auto"===e&&(e=r(t,s)),{fontSize:o(t,s.rhythmUnit,n),lineHeight:u(e,n)}}(t,e,s,n)}}}},us2A:function(t,e,n){"use strict";n.r(e);var i=n("JX7q"),s=n("dI71"),l=n("q1tI"),a=n.n(l),o=n("FwpG"),r=n("izhR"),c=n("kCIJ"),u=n("qKvR"),b={name:"xdees7",styles:"overflow:scroll;"},d=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={url:"",warn:"",apiResult:"",apiJSON:null,response:null,ok:!1,code:200,isLoading:!1},n.handleURLChange=n.handleURLChange.bind(Object(i.a)(n)),n.giveURLSuggestion=n.giveURLSuggestion.bind(Object(i.a)(n)),n.sendAjaxRequest=n.sendAjaxRequest.bind(Object(i.a)(n)),n.setCodeResult=n.setCodeResult.bind(Object(i.a)(n)),n.setResponseResult=n.setResponseResult.bind(Object(i.a)(n)),n}Object(s.a)(e,t);var n=e.prototype;return n.handleURLChange=function(t){this.setState({url:t.target.value}),this.giveURLSuggestion()},n.checkURL=function(t){var e=t;return 1==new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/).test(e)},n.getFullApiUrl=function(t){return t+"/api/mobile/index.php?version=4&module=check"},n.setCodeResult=function(t,e){this.setState({apiResult:t,apiJSON:e})},n.clearResult=function(){this.setState({apiResult:null,apiJSON:null})},n.setResponseResult=function(t,e){this.setState({response:e,ok:t})},n.sendAjaxRequest=function(){var t=this;this.props.intl;this.clearResult();var e=this.getFullApiUrl(this.state.url);this.state.isLoading=!0,fetch("https://cors-anywhere.herokuapp.com/"+e,{method:"GET",credentials:"same-origin","X-Requested-With":"XMLHttpRequest"}).then((function(e){return t.setState({ok:e.ok,code:e.status,isLoading:!1}),console.log(e),e.text()})).then((function(e){t.setCodeResult(e,null);var n=JSON.parse(e);console.log(e),console.log(n),t.setCodeResult(e,n),t.setState({ok:!0})})).catch((function(t){console.log(t)}))},n.checkBBSResultOk=function(){return null!=this.state.apiJSON&&null!=this.state.apiJSON.sitename},n.setURL=function(t){this.setState({url:t})},n.giveURLSuggestion=function(){var t=this.props.intl,e=this.state.url;e.startsWith("http://")||e.startsWith("https://")?this.checkURL(e)?this.setState({warn:""}):this.setState({warn:t.formatMessage({id:"test-my-bbs.warn_enter_to_check_problem"})}):this.setState({warn:t.formatMessage({id:"test-my-bbs.warn_need_protocol"})})},n.componentDidMount=function(){},n.render=function(){var t=this,e=this.props.intl,n=this.state.url,i=this.state;return Object(u.c)(o.a,{subject:e.formatMessage({id:"test-my-bbs.title"})},Object(u.c)(r.j,null,Object(u.c)(r.d,null,Object(u.c)(r.n,{htmlFor:"bbs_url"},e.formatMessage({id:"test-my-bbs.url"})),Object(u.c)(r.m,{name:"bbs_url",mb:3,type:"url",onChange:this.handleURLChange,value:n}),Object(u.c)("p",null,Object(u.c)("small",null,"*:",e.formatMessage({id:"test-my-bbs.redirect_by_cross_anywhere"}))),Object(u.c)("p",null,e.formatMessage({id:"test-my-bbs.example"})),Object(u.c)("ul",null,Object(u.c)("li",null,Object(u.c)(r.o,{href:"#",onClick:function(e){return t.setURL("https://www.mcbbs.net")}},"https://www.mcbbs.net")),Object(u.c)("li",null,Object(u.c)(r.o,{href:"#",onClick:function(e){return t.setURL("https://keylol.com")}},"https://keylol.com"))),this.checkURL(n)&&Object(u.c)("p",{sx:{m:0,color:"primary"}},e.formatMessage({id:"test-my-bbs.api_full_text"},{fullApi:""}),Object(u.c)(r.o,{href:this.getFullApiUrl(n)},this.getFullApiUrl(n))),this.checkURL(n)&&Object(u.c)(r.e,{variant:"success",onClick:this.sendAjaxRequest,sx:{mt:2,bg:"blue"}},e.formatMessage({id:"test-my-bbs.submit"})))),Object(u.c)(r.j,{columns:1,mt:2},Object(u.c)("box",null,i.isLoading&&Object(u.c)("p",null,Object(u.c)(r.q,null),e.formatMessage({id:"test-my-bbs.loading_data"},{url:n}))),this.state.apiResult&&Object(u.c)("box",null,this.checkBBSResultOk()?Object(u.c)(r.a,{variant:"secondary",mb:2,sx:{bg:"green"}},e.formatMessage({id:"test-my-bbs.app_add_guide"},{url:n,name:i.apiJSON.sitename})):Object(u.c)(r.a,{variant:"secondary",mb:2},e.formatMessage({id:"test-my-bbs.bbs_not_pass_result"})))),Object(u.c)(r.j,{columns:[1,2,2],sx:{mt:4,mb:4}},this.state.apiResult&&Object(u.c)(r.d,null,Object(u.c)("h3",null,e.formatMessage({id:"test-my-bbs.raw_result"})),Object(u.c)("pre",{css:b},this.state.apiResult)),this.state.apiJSON&&Object(u.c)(r.d,null,Object(u.c)("h3",null,e.formatMessage({id:"test-my-bbs.attributes"})),Object(u.c)("table",null,Object(u.c)("thead",null,Object(u.c)("tr",{sx:{bg:"primary"}},Object(u.c)("th",null,e.formatMessage({id:"test-my-bbs.key"})),Object(u.c)("th",null,e.formatMessage({id:"test-my-bbs.value"})),Object(u.c)("th",null,e.formatMessage({id:"test-my-bbs.compatible"})))),Object(u.c)("tbody",null,Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.discuz_version"})),Object(u.c)("td",null,this.state.apiJSON.discuzversion),Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.yes"}))),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.charset"})),Object(u.c)("td",null,this.state.apiJSON.charset),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.plugin_version"})),Object(u.c)("td",null,this.state.apiJSON.pluginversion),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.register_name"})),Object(u.c)("td",null,this.state.apiJSON.regname),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.qq_connect"})),Object(u.c)("td",null,this.state.apiJSON.qqconnect),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.hide_register"})),Object(u.c)("td",null,this.state.apiJSON.wsqhideregister),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.site_name"})),Object(u.c)("td",null,this.state.apiJSON.sitename),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.site_id"})),Object(u.c)("td",null,this.state.apiJSON.mysiteid),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.ucenter_url"})),Object(u.c)("td",null,this.state.apiJSON.ucenterurl),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.default_fid"})),Object(u.c)("td",null,this.state.apiJSON.defaultfid),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.total_post"})),Object(u.c)("td",null,this.state.apiJSON.totalposts),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.total_members"})),Object(u.c)("td",null,this.state.apiJSON.totalmembers),Object(u.c)("td",null,"/")),Object(u.c)("tr",null,Object(u.c)("td",null,e.formatMessage({id:"test-my-bbs.test_cookie"})),Object(u.c)("td",null,this.state.apiJSON.testcookie),Object(u.c)("td",null,"/")))))))},e}(a.a.Component);e.default=Object(c.injectIntl)(d)}}]);
//# sourceMappingURL=component---src-pages-test-my-bbs-js-c1e129c412d09592fd40.js.map