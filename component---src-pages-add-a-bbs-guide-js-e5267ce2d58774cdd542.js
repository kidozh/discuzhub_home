(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{B2PW:function(e,t,n){var i=n("TGkP"),o=function(e){return i(e)[0]};e.exports=function(e){return null==e&&(e=e),function(t,n,a,r){null==a&&(a=e),null==r&&(r=a);var l=function(e){return i(e)[1]}(t);if(l===n)return t;var b=o(t);if("px"!==l)if("em"===l)b=o(t)*o(a);else if("rem"===l)b=o(t)*o(e);else{if("ex"!==l)return t;b=o(t)*o(a)*2}var c=b;if("px"!==n)if("em"===n)c=b/o(r);else if("rem"===n)c=b/o(e);else{if("ex"!==n)return t;c=b/o(r)/2}return parseFloat(c.toFixed(5))+n}}},"Eb/5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LARGER_DISPLAY_WIDTH="1600px",t.LARGE_DISPLAY_WIDTH="1280px",t.DEFAULT_WIDTH="980px",t.TABLET_WIDTH="768px",t.MOBILE_WIDTH="480px",t.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",t.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",t.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",t.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",t.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",t.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",t.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",t.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",t.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",t.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},FwpG:function(e,t,n){"use strict";n("q1tI");var i=n("izhR"),o=n("2A+t"),a=n("MXbp"),r=n("kCIJ"),l=n("Bl7J"),b=n("Wbzz"),c=(n("ki+i"),n("aehL"),n("YVoz")),u=n.n(c);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={fontFamily:"heading",lineHeight:"heading",fontWeight:"heading"},h={root:{fontFamily:"body",fontSize:2,fontWeight:"body",lineHeight:"body"},img:{maxWidth:"100%"},h1:u()({fontSize:5},p),h2:u()({fontSize:4},p),h3:u()({fontSize:3},p),h4:u()({fontSize:2},p),h5:u()({fontSize:1},p),h6:u()({fontSize:0},p),ul:{listStylePosition:"outside",listStyleImage:"none",ml:3},ol:{listStylePosition:"outside",listStyleImage:"none",ml:3},li:{mb:2,pl:0,ol:{my:2,ml:3},ul:{my:2,ml:3},p:{mb:2}},p:{},table:{borderCollapse:"collapse",width:"100%"},th:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,":first-child":{pl:0},":last-child":{pr:0}},td:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,mt:"-1px",":first-child":{pl:0},":last-child":{pr:0}},blockquote:{mx:3},hr:{border:0,borderBottom:"1px solid",mt:"-1px",mb:3},b:{fontWeight:"bold"},strong:{fontWeight:"bold"},code:{fontSize:"85%"},pre:{fontSize:"85%",padding:3}};[].concat(["h6","h5","h4","h3","h2","h1"],["ul","ol","p","pre","table","blockquote","img","hr"]).forEach((function(e){u()(h,s({},e,u()({padding:0,margin:0,marginBottom:3},h[e])))}));n("Z5ny"),n("qKvR"),i.k.h1,i.k.h2,i.k.h3,i.k.h4,i.k.h5,i.k.h6,i.s,i.o,t.a=function(e){var t=e.subject,n=e.children,c=(Object(r.useIntl)(),Object(b.useStaticQuery)("3348891086"));return Object(o.c)(l.a,{title:t},Object(o.c)(i.g,{sx:{bg:"primary",p:4}},Object(o.c)(a.b.h1,{sx:{color:"white",textAlign:"center",fontWeight:600}},t),Object(o.c)(a.b.p,{sx:{color:"white",textAlign:"center"}},c.site.siteMetadata.title)),Object(o.c)(i.g,{as:"article",sx:{px:[2,4,6],py:[2,4,6],pt:[1,2,2],pb:[1,2,2]}},Object(o.c)(a.a,{components:{a:i.o}}),n))}},TGkP:function(e,t){e.exports=function(e,t){t||(t=[0,""]),e=String(e);var n=parseFloat(e,10);return t[0]=n,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},Z5ny:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=n("aZJH"),r=(i=a)&&i.__esModule?i:{default:i},l=n("Eb/5");var b={title:"Grand View",baseFontSize:"16px",baseLineHeight:1.6875,googleFonts:[{name:"Montserrat",styles:["700"]},{name:"Arvo",styles:["400","400i","700"]}],headerFontFamily:["Montserrat","sans-serif"],bodyFontFamily:["Arvo","sans-serif"],headerColor:"hsla(0,0%,0%,1)",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:700,bodyWeight:400,boldWeight:700,overrideStyles:function(e,t){var n=e.adjustFontSizeTo,i=e.scale,a=e.rhythm;return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({a:{color:"#d65947",textDecoration:"none"},"a:hover,a:active":{color:t.bodyColor},"h1,h2,h3,h4,h5,h6":{marginTop:a(2)},blockquote:o({},i(.2),{color:(0,r.default)(41),paddingLeft:a(13/16),marginLeft:0,borderLeft:a(3/16)+" solid #fca206"}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":o({},n(t.baseFontSize),{color:t.bodyColor,fontWeight:t.bodyWeight}),"blockquote cite:before":{content:'"— "'}},l.MOBILE_MEDIA_QUERY,{blockquote:{marginLeft:a(-3/4),marginRight:0,paddingLeft:a(9/16)}})}};t.default=b},"Z94/":function(e,t){var n=Object.prototype.toString;e.exports=function(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"==n.call(e)}},aZJH:function(e,t){function n(e){return!isNaN(parseFloat(e))&&isFinite(e)}e.exports=function(e,t,i){if(void 0===t&&(t=0),void 0===i&&(i=!1),"cool"===t?t=237:"slate"===t?t=122:"warm"===t&&(t=69),!n(t))throw new Error("Hue is not a number");if(!n(e))throw new Error("Lightness is not a number");e>100&&(e=100),e<0&&(e=0);var o=0;if(0!==t){o=19.92978+-.3651759*e+.001737214*Math.pow(e,2)}var a=0;return i?(a=e/100,e="100%,"):(a=(100-e)/100,e="0%,"),"hsla("+t+","+o+"%,"+e+a+")"}},aehL:function(e,t,n){(function(){var t,i;t=n("Z94/"),i={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"augmented fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},e.exports=function(e,n){var o;return null==e&&(e=0),null==n&&(n="golden"),o=t(n)?n:null!=i[n]?i[n]:i.golden,Math.pow(o,e)}}).call(this)},"ki+i":function(e,t,n){var i=n("B2PW"),o=n("TGkP"),a=function(e){return o(e)[1]},r=function(e){return o(e)[0]},l={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},b=function(e,t){var n,o=i(t.baseFontSize),a=r(o(e,"px")),l=r(t.baseLineHeightInPx),b=r(o(t.minLinePadding,"px"));return(n=t.roundToNearestHalfLine?Math.ceil(2*a/l)/2:Math.ceil(a/l))*l-a<2*b&&(n+=t.roundToNearestHalfLine?.5:1),n},c=function(e){var t=i(e.baseFontSize);return function(n,i,o){null==n&&(n=1),null==i&&(i=e.baseFontSize),null==o&&(o=0);var l=n*r(e.baseLineHeightInPx)-o+"px",b=t(l,e.rhythmUnit,i);return"px"===a(b)&&(b=Math.floor(r(b))+a(b)),parseFloat(r(b).toFixed(5))+a(b)}};e.exports=function(e){var t=JSON.parse(JSON.stringify(l)),n=Object.assign({},t,e),o=i(n.baseFontSize);return a(n.baseLineHeight)?(r(o(n.baseFontSize,"px")),n.baseLineHeightInPx=o(n.baseLineHeight,"px")):n.baseLineHeightInPx=r(n.baseFontSize)*n.baseLineHeight+"px",{rhythm:c(n),establishBaseline:function(){return function(e){return i(e.baseFontSize),{fontSize:r(e.baseFontSize)/16*100+"%",lineHeight:e.baseLineHeight.toString()}}(n)},linesForFontSize:function(e){return b(e,n)},adjustFontSizeTo:function(e,t,o){return null==t&&(t="auto"),function(e,t,n,o){null==n&&(n=o.baseFontSize),"%"===a(e)&&(e=r(o.baseFontSize)*(r(e)/100)+"px");var l=i(o.baseFontSize);e=l(e,"px",n=l(n,"px"));var u=c(o);return"auto"===t&&(t=b(e,o)),{fontSize:l(e,o.rhythmUnit,n),lineHeight:u(t,n)}}(e,t,o,n)}}}},"th6+":function(e,t,n){"use strict";n.r(t);n("q1tI");var i=n("52Oh"),o=n("FwpG"),a=n("wx14"),r=n("zLVn"),l=n("7ljp"),b=n("qKvR"),c={_frontmatter:{}};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Sorry!"),Object(l.b)("p",null,"The page is not localized in English... If you can read Chinese, you can find out in Chinese locale page."))}u.isMDXComponent=!0;var s={_frontmatter:{}};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"论坛添加指引"),Object(l.b)("p",null,"感谢使用Discuz Hub, 本页面将会指引你添加论坛。"),Object(l.b)("h1",null,"要求"),Object(l.b)("p",null,"Discuz Hub 要求您需要添加的论坛满足以下条件："),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"论坛需要以Discuz X为架构"),Object(l.b)("li",{parentName:"ul"},"Discuz版本大于X 3.2"),Object(l.b)("li",{parentName:"ul"},"移动端API版本大于4"),Object(l.b)("li",{parentName:"ul"},"打开论坛",Object(l.b)("strong",{parentName:"li"},"移动页面"),"并关闭防采集"),Object(l.b)("li",{parentName:"ul"},"关闭其他可能会影响API访问的插件（已知的包括千帆网的插件）")),Object(l.b)("h2",null,"您是网站拥有者？"),Object(l.b)("p",null,"您可以在",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/compatibility-guide/"}),"Discuz！兼容性设置向导"),"里找到兼容我们应用的方法。"),Object(l.b)("h1",null,"步骤"),Object(l.b)("h2",null,"1. 检查您的系统"),Object(l.b)("p",null,"请注意我们的应用目前仅支持",Object(l.b)("strong",{parentName:"p"},"Android/安卓"),"平台，并且要求Android版本大于",Object(l.b)("strong",{parentName:"p"},"5.0"),"，请检查您的系统是否符合要求。"),Object(l.b)("p",null,"我们的应用尽管兼容TV和平板，但是我们建议您在手机上使用Discuz Hub以获得更好的用户体验。"),Object(l.b)("h2",null,"2.下载并安装Discuz Hub"),Object(l.b)("p",null,"您可以选择在应用市场上下载本应用。在相关的应用市场上搜索Discuz Hub下载并安装后即可使用。"),Object(l.b)("h3",null,"中国大陆区应用变更说明"),Object(l.b)("p",null,"对于中国大陆用户而言，因为相关政策和法律法规，您在大陆的应用市场上下载的Discuz Hub会屏蔽某些功能或者模块。详情请参考",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/blog/china-edition-release/"}),"此博客"),"。"),Object(l.b)("p",null,"您可以使用",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/"}),"首页"),"的",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kidozh/DiscuzHub/releases"}),"Github Release"),"或者微云链接来下载本应用。下载应用后，安装APK文件即可。"),Object(l.b)("h3",null,"权限提醒"),Object(l.b)("p",null,"请检查你所安装的Discuz Hub是否有除以下权限以外的要求。如果应用要求了敏感权限，请",Object(l.b)("strong",{parentName:"p"},"立即停止"),"安装APK。"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"android.permission.INTERNET： 连接到网络 （我们需要此权限访问论坛API以完成正常的数据渲染和应用交互）"),Object(l.b)("li",{parentName:"ul"},"android.permission.ACCESS_NETWORK_STATE：获取网络状态 （我们需要此权限判定您是否处于计费流量下以选择图片等耗流量的资源是否下载）"),Object(l.b)("li",{parentName:"ul"},"android.permission.VIBRATE：振动手机 （我们需要此权限提醒您的操作是否合法）"),Object(l.b)("li",{parentName:"ul"},"（仅在低于Android 10/Q版本要求）android.permission.WRITE_EXTERNAL_STORAGE：读写外部数据 （我们需要此权限以完成图片或者附件的下载）")),Object(l.b)("h3",null,"添加论坛 （版本低于2.1）"),Object(l.b)("p",null,"您可以通过以下步骤新增一个论坛。"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"打开Discuz Hub"),Object(l.b)("li",{parentName:"ol"},"点击右下角的加号"),Object(l.b)("li",{parentName:"ol"},"输入论坛的网址（通常就是论坛的域名，例如西北工业大学三航四方论坛->bbs.nwpu.edu.cn，请务必带上HTTP或者HTTPS一些）",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"输入网站的协议，如 ",Object(l.b)("strong",{parentName:"li"},"http://")," 或者 ",Object(l.b)("strong",{parentName:"li"},"https:// ")),Object(l.b)("li",{parentName:"ol"},"接着输入网站的域名，如西北工业大学三航四方 bbs.nwpu.edu.cn"),Object(l.b)("li",{parentName:"ol"},"确定论坛下是否有一个前缀路径，例如一亩三分地会有BBS的路径"))),Object(l.b)("li",{parentName:"ol"},"等待下方智能联想，当出现对号时，选择该路径"),Object(l.b)("li",{parentName:"ol"},"点击完成，经过app检测后即可新增论坛")),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/static/images/input-url-guide.jpg",alt:"举例而言"}))),Object(l.b)("h4",null,"智能添加方法"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"打开Discuz Hub"),Object(l.b)("li",{parentName:"ol"},"点击右下角的加号"),Object(l.b)("li",{parentName:"ol"},"向对话框直接复制一个来自论坛的帖子地址"),Object(l.b)("li",{parentName:"ol"},"等待下方智能联想，当出现对号时，选择该路径"),Object(l.b)("li",{parentName:"ol"},"点击完成，经过app检测后即可新增论坛")),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/static/images/image3287.jpg",alt:"举例而言"}))))}p.isMDXComponent=!0;var h={_frontmatter:{}};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"抱歉"),Object(l.b)("p",null,"本页面正在建设中，您可以在简体中文区获得相关的详情。"))}m.isMDXComponent=!0;t.default=function(){var e=Object(i.a)();e.formatMessage({id:"back_to_top"});return Object(b.c)(o.a,{sx:{mb:6},subject:e.formatMessage({id:"compatibility.compatibility_title"})},"en"===e.locale&&Object(b.c)(u,null),"zh"===e.locale&&Object(b.c)(p,null),"zh-hk"===e.locale&&Object(b.c)(m,null))}},zLVn:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=component---src-pages-add-a-bbs-guide-js-e5267ce2d58774cdd542.js.map