(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{B2PW:function(e,t,n){var i=n("TGkP"),o=function(e){return i(e)[0]};e.exports=function(e){return null==e&&(e=e),function(t,n,r,a){null==r&&(r=e),null==a&&(a=r);var l=function(e){return i(e)[1]}(t);if(l===n)return t;var c=o(t);if("px"!==l)if("em"===l)c=o(t)*o(r);else if("rem"===l)c=o(t)*o(e);else{if("ex"!==l)return t;c=o(t)*o(r)*2}var s=c;if("px"!==n)if("em"===n)s=c/o(a);else if("rem"===n)s=c/o(e);else{if("ex"!==n)return t;s=c/o(a)/2}return parseFloat(s.toFixed(5))+n}}},"Eb/5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LARGER_DISPLAY_WIDTH="1600px",t.LARGE_DISPLAY_WIDTH="1280px",t.DEFAULT_WIDTH="980px",t.TABLET_WIDTH="768px",t.MOBILE_WIDTH="480px",t.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",t.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",t.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",t.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",t.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",t.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",t.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",t.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",t.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",t.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},FwpG:function(e,t,n){"use strict";n("q1tI");var i=n("izhR"),o=n("2A+t"),r=n("MXbp"),a=n("kCIJ"),l=n("Bl7J"),c=n("Wbzz"),s=(n("ki+i"),n("aehL"),n("YVoz")),u=n.n(s);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={fontFamily:"heading",lineHeight:"heading",fontWeight:"heading"},b={root:{fontFamily:"body",fontSize:2,fontWeight:"body",lineHeight:"body"},img:{maxWidth:"100%"},h1:u()({fontSize:5},h),h2:u()({fontSize:4},h),h3:u()({fontSize:3},h),h4:u()({fontSize:2},h),h5:u()({fontSize:1},h),h6:u()({fontSize:0},h),ul:{listStylePosition:"outside",listStyleImage:"none",ml:3},ol:{listStylePosition:"outside",listStyleImage:"none",ml:3},li:{mb:2,pl:0,ol:{my:2,ml:3},ul:{my:2,ml:3},p:{mb:2}},p:{},table:{borderCollapse:"collapse",width:"100%"},th:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,":first-child":{pl:0},":last-child":{pr:0}},td:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,mt:"-1px",":first-child":{pl:0},":last-child":{pr:0}},blockquote:{mx:3},hr:{border:0,borderBottom:"1px solid",mt:"-1px",mb:3},b:{fontWeight:"bold"},strong:{fontWeight:"bold"},code:{fontSize:"85%"},pre:{fontSize:"85%",padding:3}};[].concat(["h6","h5","h4","h3","h2","h1"],["ul","ol","p","pre","table","blockquote","img","hr"]).forEach((function(e){u()(b,d({},e,u()({padding:0,margin:0,marginBottom:3},b[e])))}));n("Z5ny"),n("qKvR"),i.k.h1,i.k.h2,i.k.h3,i.k.h4,i.k.h5,i.k.h6,i.s,i.o,t.a=function(e){var t=e.subject,n=e.children,s=(Object(a.useIntl)(),Object(c.useStaticQuery)("3348891086"));return Object(o.c)(l.a,{title:t},Object(o.c)(i.g,{sx:{bg:"primary",p:4}},Object(o.c)(r.b.h1,{sx:{color:"white",textAlign:"center",fontWeight:600}},t),Object(o.c)(r.b.p,{sx:{color:"white",textAlign:"center"}},s.site.siteMetadata.title)),Object(o.c)(i.g,{as:"article",sx:{px:[2,4,6],py:[2,4,6],pt:[1,2,2],pb:[1,2,2]}},Object(o.c)(r.a,{components:{a:i.o}}),n))}},TGkP:function(e,t){e.exports=function(e,t){t||(t=[0,""]),e=String(e);var n=parseFloat(e,10);return t[0]=n,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},Z5ny:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=n("aZJH"),a=(i=r)&&i.__esModule?i:{default:i},l=n("Eb/5");var c={title:"Grand View",baseFontSize:"16px",baseLineHeight:1.6875,googleFonts:[{name:"Montserrat",styles:["700"]},{name:"Arvo",styles:["400","400i","700"]}],headerFontFamily:["Montserrat","sans-serif"],bodyFontFamily:["Arvo","sans-serif"],headerColor:"hsla(0,0%,0%,1)",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:700,bodyWeight:400,boldWeight:700,overrideStyles:function(e,t){var n=e.adjustFontSizeTo,i=e.scale,r=e.rhythm;return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({a:{color:"#d65947",textDecoration:"none"},"a:hover,a:active":{color:t.bodyColor},"h1,h2,h3,h4,h5,h6":{marginTop:r(2)},blockquote:o({},i(.2),{color:(0,a.default)(41),paddingLeft:r(13/16),marginLeft:0,borderLeft:r(3/16)+" solid #fca206"}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":o({},n(t.baseFontSize),{color:t.bodyColor,fontWeight:t.bodyWeight}),"blockquote cite:before":{content:'"— "'}},l.MOBILE_MEDIA_QUERY,{blockquote:{marginLeft:r(-3/4),marginRight:0,paddingLeft:r(9/16)}})}};t.default=c},"Z94/":function(e,t){var n=Object.prototype.toString;e.exports=function(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"==n.call(e)}},ZvH3:function(e,t,n){"use strict";n.r(t);n("q1tI");var i=n("52Oh"),o=n("FwpG"),r=n("izhR"),a=n("qKvR"),l=function(e){var t=e.link,n=e.title,i=e.licence,o=e.children;return Object(a.c)(r.j,{as:"a",href:t,target:"_blank",rel:"noreferrer noopener",bg:"cornflowerblue",sx:{width:"100%",boxShadow:"lg",position:"relative",textDecoration:"none",borderRadius:"lg",px:4,py:[4,5],color:"white",transition:"all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important","&:hover":{color:"white !important",transform:"translateY(-5px)",boxShadow:"xl"}}},Object(a.c)(r.j,null,Object(a.c)(r.k,{as:"h1",sx:{wordBreak:"break-all"}},n,Object(a.c)(r.c,{variant:"accent",ml:1},i)),Object(a.c)(r.d,null,o)))};t.default=function(){var e=Object(i.a)();return Object(a.c)(o.a,{sx:{mb:6},subject:e.formatMessage({id:"open_source.open_source_title"})},Object(a.c)(r.j,null,Object(a.c)(r.k,{as:"h1",sx:{fontWeight:400,color:"primary",mt:4}},e.formatMessage({id:"open_source.open_source_subtitle"}))),Object(a.c)(r.j,{columns:[1,3,3],mt:4},Object(a.c)(r.d,null,Object(a.c)(l,{title:"Material Components for Android",licence:"Apache 2.0",link:"https://github.com/material-components/material-components-android"},"Material Components for Android is a drop-in replacement for Android's Design Support Library.")),Object(a.c)(r.d,null,Object(a.c)(l,{title:"Glide",licence:"BSD, part MIT and Apache 2.0",link:"https://bumptech.github.io/glide/"},"An image loading and caching library for Android focused on smooth scrolling.")),Object(a.c)(r.d,null,Object(a.c)(l,{title:"Butter Knife",licence:"Apache 2.0",link:"https://jakewharton.github.io/butterknife/"},"Field and method binding for Android views")),Object(a.c)(r.d,null,Object(a.c)(l,{title:"PersistentCookieJar",licence:"Apache 2.0",link:"https://github.com/franmontiel/PersistentCookieJar"},"A persistent CookieJar implementation for OkHttp 3 based on SharedPreferences.")),Object(a.c)(r.d,null,Object(a.c)(l,{title:"jsoup",licence:"MIT",link:"https://jsoup.org/"},"jsoup: Java HTML Parser, with best of DOM, CSS, and jquery")),Object(a.c)(r.d,null,Object(a.c)(l,{title:"Toasty",licence:"LGPL-3.0",link:"https://github.com/GrenderG/Toasty"},"The usual Toast, but with steroids 💪")),Object(a.c)(r.d,null,Object(a.c)(l,{title:"OkHttp",licence:"Apache-2.0",link:"https://square.github.io/okhttp/"},"Square’s meticulous HTTP client for Java and Kotlin.")),Object(a.c)(r.d,null,Object(a.c)(l,{title:"Badgeview",licence:"Apache-2.0",link:"https://github.com/liyanxi/BadgeView"},"BadgeView for android")),Object(a.c)(r.d,null,Object(a.c)(l,{title:"ShapedImageView",licence:"MIT",link:"https://github.com/gavinliu/ShapedImageView"},"Android Rounded, Circle, Path ImageView"))),Object(a.c)(r.j,{bg:"primary",sx:{mb:4,p:2,pl:4,pr:4,borderRadius:8,mt:4}},Object(a.c)(r.d,null,Object(a.c)(r.s,{as:"h1",sx:{color:"white",fontWeight:"400",wordBreak:"break-all"}},e.formatMessage({id:"open_source.discuzHub_licence_description"})))))}},aZJH:function(e,t){function n(e){return!isNaN(parseFloat(e))&&isFinite(e)}e.exports=function(e,t,i){if(void 0===t&&(t=0),void 0===i&&(i=!1),"cool"===t?t=237:"slate"===t?t=122:"warm"===t&&(t=69),!n(t))throw new Error("Hue is not a number");if(!n(e))throw new Error("Lightness is not a number");e>100&&(e=100),e<0&&(e=0);var o=0;if(0!==t){o=19.92978+-.3651759*e+.001737214*Math.pow(e,2)}var r=0;return i?(r=e/100,e="100%,"):(r=(100-e)/100,e="0%,"),"hsla("+t+","+o+"%,"+e+r+")"}},aehL:function(e,t,n){(function(){var t,i;t=n("Z94/"),i={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"augmented fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},e.exports=function(e,n){var o;return null==e&&(e=0),null==n&&(n="golden"),o=t(n)?n:null!=i[n]?i[n]:i.golden,Math.pow(o,e)}}).call(this)},"ki+i":function(e,t,n){var i=n("B2PW"),o=n("TGkP"),r=function(e){return o(e)[1]},a=function(e){return o(e)[0]},l={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},c=function(e,t){var n,o=i(t.baseFontSize),r=a(o(e,"px")),l=a(t.baseLineHeightInPx),c=a(o(t.minLinePadding,"px"));return(n=t.roundToNearestHalfLine?Math.ceil(2*r/l)/2:Math.ceil(r/l))*l-r<2*c&&(n+=t.roundToNearestHalfLine?.5:1),n},s=function(e){var t=i(e.baseFontSize);return function(n,i,o){null==n&&(n=1),null==i&&(i=e.baseFontSize),null==o&&(o=0);var l=n*a(e.baseLineHeightInPx)-o+"px",c=t(l,e.rhythmUnit,i);return"px"===r(c)&&(c=Math.floor(a(c))+r(c)),parseFloat(a(c).toFixed(5))+r(c)}};e.exports=function(e){var t=JSON.parse(JSON.stringify(l)),n=Object.assign({},t,e),o=i(n.baseFontSize);return r(n.baseLineHeight)?(a(o(n.baseFontSize,"px")),n.baseLineHeightInPx=o(n.baseLineHeight,"px")):n.baseLineHeightInPx=a(n.baseFontSize)*n.baseLineHeight+"px",{rhythm:s(n),establishBaseline:function(){return function(e){return i(e.baseFontSize),{fontSize:a(e.baseFontSize)/16*100+"%",lineHeight:e.baseLineHeight.toString()}}(n)},linesForFontSize:function(e){return c(e,n)},adjustFontSizeTo:function(e,t,o){return null==t&&(t="auto"),function(e,t,n,o){null==n&&(n=o.baseFontSize),"%"===r(e)&&(e=a(o.baseFontSize)*(a(e)/100)+"px");var l=i(o.baseFontSize);e=l(e,"px",n=l(n,"px"));var u=s(o);return"auto"===t&&(t=c(e,o)),{fontSize:l(e,o.rhythmUnit,n),lineHeight:u(t,n)}}(e,t,o,n)}}}}}]);
//# sourceMappingURL=component---src-pages-open-source-licence-js-098569c1f309d17374c7.js.map