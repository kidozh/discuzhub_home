(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B2PW:function(e,t,a){var n=a("TGkP"),b=function(e){return n(e)[0]};e.exports=function(e){return null==e&&(e=e),function(t,a,l,i){null==l&&(l=e),null==i&&(i=l);var r=function(e){return n(e)[1]}(t);if(r===a)return t;var c=b(t);if("px"!==r)if("em"===r)c=b(t)*b(l);else if("rem"===r)c=b(t)*b(e);else{if("ex"!==r)return t;c=b(t)*b(l)*2}var o=c;if("px"!==a)if("em"===a)o=c/b(i);else if("rem"===a)o=c/b(e);else{if("ex"!==a)return t;o=c/b(i)/2}return parseFloat(o.toFixed(5))+a}}},"Eb/5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LARGER_DISPLAY_WIDTH="1600px",t.LARGE_DISPLAY_WIDTH="1280px",t.DEFAULT_WIDTH="980px",t.TABLET_WIDTH="768px",t.MOBILE_WIDTH="480px",t.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",t.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",t.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",t.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",t.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",t.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",t.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",t.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",t.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",t.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},FwpG:function(e,t,a){"use strict";a("q1tI");var n=a("izhR"),b=a("2A+t"),l=a("MXbp"),i=a("kCIJ"),r=a("Bl7J"),c=a("Wbzz"),o=(a("ki+i"),a("aehL"),a("YVoz")),u=a.n(o);function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={fontFamily:"heading",lineHeight:"heading",fontWeight:"heading"},s={root:{fontFamily:"body",fontSize:2,fontWeight:"body",lineHeight:"body"},img:{maxWidth:"100%"},h1:u()({fontSize:5},p),h2:u()({fontSize:4},p),h3:u()({fontSize:3},p),h4:u()({fontSize:2},p),h5:u()({fontSize:1},p),h6:u()({fontSize:0},p),ul:{listStylePosition:"outside",listStyleImage:"none",ml:3},ol:{listStylePosition:"outside",listStyleImage:"none",ml:3},li:{mb:2,pl:0,ol:{my:2,ml:3},ul:{my:2,ml:3},p:{mb:2}},p:{},table:{borderCollapse:"collapse",width:"100%"},th:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,":first-child":{pl:0},":last-child":{pr:0}},td:{textAlign:"left",borderBottom:"1px solid",px:2,py:1,mt:"-1px",":first-child":{pl:0},":last-child":{pr:0}},blockquote:{mx:3},hr:{border:0,borderBottom:"1px solid",mt:"-1px",mb:3},b:{fontWeight:"bold"},strong:{fontWeight:"bold"},code:{fontSize:"85%"},pre:{fontSize:"85%",padding:3}};[].concat(["h6","h5","h4","h3","h2","h1"],["ul","ol","p","pre","table","blockquote","img","hr"]).forEach((function(e){u()(s,m({},e,u()({padding:0,margin:0,marginBottom:3},s[e])))}));a("Z5ny"),a("qKvR"),n.k.h1,n.k.h2,n.k.h3,n.k.h4,n.k.h5,n.k.h6,n.r,n.o,t.a=function(e){var t=e.subject,a=e.children,o=(Object(i.useIntl)(),Object(c.useStaticQuery)("3348891086"));return Object(b.c)(r.a,{title:t},Object(b.c)(n.g,{sx:{bg:"primary",p:4}},Object(b.c)(l.b.h1,{sx:{color:"highlight",textAlign:"center",fontWeight:600}},t),Object(b.c)(l.b.p,{sx:{color:"white",textAlign:"center"}},o.site.siteMetadata.title)),Object(b.c)(n.g,{as:"article",sx:{px:[2,4,6],py:[2,4,6],pt:[1,2,2],pb:[1,2,2]}},Object(b.c)(l.a,{components:{a:n.o}}),a))}},TGkP:function(e,t){e.exports=function(e,t){t||(t=[0,""]),e=String(e);var a=parseFloat(e,10);return t[0]=a,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},Xp4G:function(e,t,a){"use strict";a.r(t);a("q1tI");var n=a("52Oh"),b=a("FwpG"),l=a("wx14"),i=a("zLVn"),r=a("7ljp"),c=a("izhR"),o=a("qKvR"),u={_frontmatter:{}};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Welcome to read our Discuz! Compatibility guidance"),Object(r.b)("p",null,"DiscuzHub can support Discuz! based BBS, but may encounter various problems in practice. Therefore, we are here to provide some suggestions and guidance for the web administrators so that the forum can be better displayed on DiscuzHub."),Object(r.b)("h2",null,"Compatibility requirements"),Object(r.b)("p",null,"Because DiscuzHub uses Discuz! mobile API, the BBS needs to meet the following requirements to display threads and posts correctly."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The BBS is built with Discuz X"),Object(r.b)("li",{parentName:"ul"},"Discuz version is greater than X 3.2"),Object(r.b)("li",{parentName:"ul"},"Mobile API version is greater than 4"),Object(r.b)("li",{parentName:"ul"},"Open ",Object(r.b)("strong",{parentName:"li"},"mobile page")," and turn off anti-capture module"),Object(r.b)("li",{parentName:"ul"},"Close other plugins that may affect API access (known plugins including Qianfan.com)")),Object(r.b)("h3",null,"Open the mobile page"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Log in to the forum with an administrator account"),Object(r.b)("li",{parentName:"ol"},"Click the management center in the list of web pages in the upper right corner -> Discuz! Management center"),Object(r.b)("li",{parentName:"ol"},"Use the administrator account to log in to Discuz! Management Center"),Object(r.b)("li",{parentName:"ol"},"Global-",">"," Mobile version access settings-",">"," Open mobile version-",">"," Submit")),Object(r.b)("p",null,"Completing the above operations, you can browse the mobile API. And your bbs can be detected and parsed by DiscuzHub"),Object(r.b)("h3",null,"Turn off anti-capture"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Log in to the forum with an administrator account"),Object(r.b)("li",{parentName:"ol"},"Click the management center in the list of web pages in the upper right corner -> Discuz! Management center"),Object(r.b)("li",{parentName:"ol"},"Use the administrator account to log in to Discuz! Management Center"),Object(r.b)("li",{parentName:"ol"},"Global -",">"," Whether to enable anti-collection -",">"," No -",">"," Submit")),Object(r.b)("p",null,"Completing the above operations, the API can be accessed normally."),Object(r.b)(c.p,{mdxType:"Message"},"The anti-capture mechanism requires us to parse JavaScript scripts, add normal cookies, and then redirect to the real API page when obtaining the requested content. However, due to security and compatibility requirements, we will not parse the Javascript file, so the anti-collection mechanism will eventually prevent DiscuzHub from accessing data. "),Object(r.b)("h2",null,"Other compatibility recommendations"),Object(r.b)("h3",null,"The category label under each sub-forum, please use ","<","font",">"," carefully to designate font color"),Object(r.b)("p",null,"Since we support the dark mode, our label background color will change according to the HTML which we also support. Using ","<","font",">"," labels to designate colors will make the text difficult to recognize and weaken the user's perception. Therefore, we recommend that you do not use font tag to emphasize or highlight a category."),Object(r.b)("p",null,"We recommend that you use emoticons in HTML to identify categories, such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"🤔 Doubt"),Object(r.b)("li",{parentName:"ul"},"😃 Solved"),Object(r.b)("li",{parentName:"ul"},"🧐 Investigating"),Object(r.b)("li",{parentName:"ul"},"🎉 Good advice"),Object(r.b)("li",{parentName:"ul"},"🧧 Welfare"),Object(r.b)("li",{parentName:"ul"},"💎 Digest"),Object(r.b)("li",{parentName:"ul"},"😎 EMMMMMMMM")),Object(r.b)("h3",null,"Color configuration"),Object(r.b)("p",null,"Many forums may use custom colors to mark or highlight certain fields. Since we support two sets of display modes at the same time, please use dark / light colors to mark or highlight fields carefully. Black or white color will make highlight field unrecognizable in the night mode / day mode, because the text is too difficult to distinguish from the background. We recommend that you use CSS to specify attributes such as color. The hard coding of colors may cause display difficulty in different display mode."),Object(r.b)("p",null,"The color matching we currently use is:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Mode"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Primary Color"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Primary Dark Color"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Accent Color"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Day mode"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#3498DB",mdxType:"Avatar"})," # 3498DB"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#2980B9",mdxType:"Avatar"})," # 2980B9"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#E74C3C",mdxType:"Avatar"})," # E74C3C")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Night mode"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#BB86FC",mdxType:"Avatar"})," # BB86FC"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#8E24AA",mdxType:"Avatar"})," # 8E24AA"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#00796B",mdxType:"Avatar"})," # 00796B")))),Object(r.b)("p",null,"You can refer to it to determine your designated color which should be recognizable in both mode."),Object(r.b)("h3",null,"About the forum icon"),Object(r.b)("p",null,"We noticed that some forums may have a URL prefix  in the forum icon. Please double check that the icon link is pointing correctly to avoid the problem that the icon cann't be displayed."),Object(r.b)("h2",null,"Contact us"),Object(r.b)("p",null,"If you have comments and suggestions on the displayed issues and compatibility issues, please send an email to ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"mailto:kidozh@gmail.com."}),"kidozh@gmail.com.")," We will answer your questions as soon as possible and make necessary amendments."))}m.isMDXComponent=!0;var p={_frontmatter:{}};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"欢迎阅读我们的Discuz！兼容性指导"),Object(r.b)("p",null,"DiscuzHub能支持以Discuz！架构的论坛，但是在实践时可能遇到各种各样的问题。因此我们在这里向网页管理者提供一些的建议和指导，以使得论坛能够更好的展示在DiscuzHub上。"),Object(r.b)("h2",null,"兼容性要求"),Object(r.b)("p",null,"因为DiscuzHub基于Discuz！的移动端协议，所以论坛网站需要满足以下要求以完成",Object(r.b)("strong",{parentName:"p"},"正常"),"和",Object(r.b)("strong",{parentName:"p"},"基本"),"的论坛显示。"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"论坛需要以Discuz X为架构"),Object(r.b)("li",{parentName:"ul"},"Discuz版本大于X 3.2"),Object(r.b)("li",{parentName:"ul"},"移动端API版本大于4"),Object(r.b)("li",{parentName:"ul"},"安装并开启掌上论坛应用"),Object(r.b)("li",{parentName:"ul"},"打开论坛",Object(r.b)("strong",{parentName:"li"},"移动页面"),"并关闭防采集"),Object(r.b)("li",{parentName:"ul"},"关闭其他可能会影响API访问的插件（已知的包括千帆网的插件）")),Object(r.b)("h3",null,"如何开启移动界面"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"使用",Object(r.b)("strong",{parentName:"li"},"管理员"),"账号登录论坛 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/forum_index.jpg",alt:"管理员登录"}))),Object(r.b)("li",{parentName:"ol"},"右上角的网页列表点击管理中心跳转到Discuz！管理中心 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/forum_admin_navbar.jpg",alt:"管理中心"}))),Object(r.b)("li",{parentName:"ol"},"使用管理员账号登录Discuz!管理中心 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/admin_manage_panel.jpg",alt:"登录管理中心"}))),Object(r.b)("li",{parentName:"ol"},"全局 -> 手机版访问设置 -> 开启手机版 -> 提交 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/open_mobile_function.jpg",alt:"打开移动界面"})))),Object(r.b)("p",null,"完成上述的操作就可以开启移动API，这样论坛网站就能基本被DiscuzHub检测并且解析"),Object(r.b)("h3",null,"如何安装并开启掌上论坛应用"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"使用",Object(r.b)("strong",{parentName:"li"},"管理员"),"账号登录论坛 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/forum_index.jpg",alt:"管理员登录"}))),Object(r.b)("li",{parentName:"ol"},"右上角的网页列表点击管理中心跳转到Discuz！管理中心 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/forum_admin_navbar.jpg",alt:"管理中心"}))),Object(r.b)("li",{parentName:"ol"},"使用管理员账号登录Discuz!管理中心 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/admin_manage_panel.jpg",alt:"登录管理中心"}))),Object(r.b)("li",{parentName:"ol"},"应用 -> 掌上论坛 -> 启用")),Object(r.b)("h3",null,"如何关闭防采集"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"使用管理员账号登录论坛  ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/forum_index.jpg",alt:"管理员登录"}))),Object(r.b)("li",{parentName:"ol"},"右上角的网页列表点击管理中心跳转到Discuz！管理中心 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/forum_admin_navbar.jpg",alt:"管理中心"}))),Object(r.b)("li",{parentName:"ol"},"使用管理员账号登录Discuz!管理中心 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/admin_manage_panel.jpg",alt:"登录管理中心"}))),Object(r.b)("li",{parentName:"ol"},"全局 -> 是否开启防采集 -> 否 -> 提交 ",Object(r.b)("img",Object(l.a)({parentName:"li"},{src:"/static/images/anti_capture.jpg",alt:"登录管理中心"})))),Object(r.b)("p",null,"完成上述的操作就可以使得API能够被正常访问。"),Object(r.b)(c.p,{mdxType:"Message"},"防采集机制使得我们在访问API时，需要解析JavaScript脚本后添加正常的Cookie然后重定向到真正的API页面，以获得正常的内容。然而出于安全性和兼容性的要求，我们并不会解析Javascript文件，因此防采集机制将会实质上阻止DiscuzHub获得正常的数据。"),Object(r.b)("h2",null,"其他兼容性推荐"),Object(r.b)("h3",null,"各个子论坛下的分类标签，请慎重使用","<","font",">","改变颜色"),Object(r.b)("p",null,"由于我们支持暗黑模式，因此，我们的标签背景色会随着设定的变化而变化。同时，我们也支持HTML的富文本显示。使用","<","font",">","标签改变颜色将会使得文字变得难以辨识，减弱用户的认知。因此，我们建议您不使用font标签来强调某个分类。"),Object(r.b)("p",null,"我们推荐您使用HTML中的表情符号来标识分类，例如："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"🤔 疑问"),Object(r.b)("li",{parentName:"ul"},"😃 已解决"),Object(r.b)("li",{parentName:"ul"},"🧐 正在研究"),Object(r.b)("li",{parentName:"ul"},"🎉 好的建议"),Object(r.b)("li",{parentName:"ul"},"🧧 福利"),Object(r.b)("li",{parentName:"ul"},"💎 精华"),Object(r.b)("li",{parentName:"ul"},"😎 EMMMMMMMM")),Object(r.b)("h3",null,"颜色设置"),Object(r.b)("p",null,"许许多多论坛可能都会使用自定的颜色以标记或高亮某些字段。由于我们同时支持两套显示模式，请慎重使用深色/亮色来标记或者高亮字段。较黑或者白色会导致在夜间模式/日间模式时，因为与背景难以区分，应用无法很好的显示这些高亮字段。我们推荐您使用CSS规定颜色等属性，对于颜色的硬编码有可能导致不同显示情况下的显示差异问题。"),Object(r.b)("p",null,"目前我们使用的颜色系统为："),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"模式"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"主色"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"主暗色"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"强调色"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"日间模式"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#3498DB",mdxType:"Avatar"})," #3498DB"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#2980B9",mdxType:"Avatar"})," #2980B9"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#E74C3C",mdxType:"Avatar"})," #E74C3C")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"夜间模式"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#BB86FC",mdxType:"Avatar"})," #BB86FC"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#8E24AA",mdxType:"Avatar"})," #8E24AA"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#00796B",mdxType:"Avatar"})," #00796B")))),Object(r.b)("p",null,"您可以参考之后确定您的颜色是否和我们的颜色系统区分，以确保在您的高亮字体作为标签时，仍然能够正常的显示。"),Object(r.b)("h3",null,"关于论坛图标的配置"),Object(r.b)("p",null,"我们留意到部分论坛在传递论坛图标的链接时，可能出现一个URL前缀。请仔细检查图标的链接是否指向正确，以免出现无法显示图标的问题。"),Object(r.b)("h2",null,"联系我们"),Object(r.b)("p",null,"如果您对显示的问题和兼容性的问题存在意见和建议，请发送邮件至",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"mailto:kidozh@gmail.com"}),"kidozh@gmail.com"),"。我们将尽快解答您的疑问，并作出必要的修改。"))}s.isMDXComponent=!0;var j={_frontmatter:{}};function O(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"歡迎閱讀我們的Discuz！兼容性指導"),Object(r.b)("p",null,"DiscuzHub能支持以Discuz！架構的論壇，但是在實踐時可能遇到各種各樣的問題。因此我們在這裡向網頁管理者提供一些的建議和指導，以使得論壇能夠更好的展示在DiscuzHub上。"),Object(r.b)("h2",null,"兼容性要求"),Object(r.b)("p",null,"因為DiscuzHub基於Discuz！的移動端協議，所以論壇網站需要滿足以下要求以完成",Object(r.b)("strong",{parentName:"p"},"正常"),"和",Object(r.b)("strong",{parentName:"p"},"基本"),"的論壇顯示。"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"論壇需要以Discuz X為架構"),Object(r.b)("li",{parentName:"ul"},"Discuz版本大於X 3.2"),Object(r.b)("li",{parentName:"ul"},"移動端API版本大於4"),Object(r.b)("li",{parentName:"ul"},"打開論壇",Object(r.b)("strong",{parentName:"li"},"移動頁面"),"並關閉防採集"),Object(r.b)("li",{parentName:"ul"},"關閉其他可能會影響API訪問的插件（已知的包括千帆網的插件）")),Object(r.b)("h3",null,"如何開啟移動界面"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"使用管理員賬號登錄論壇"),Object(r.b)("li",{parentName:"ol"},"右上角的網頁列表點擊管理中心跳轉到Discuz！管理中心"),Object(r.b)("li",{parentName:"ol"},"使用管理員賬號登錄Discuz!管理中心"),Object(r.b)("li",{parentName:"ol"},"全局 -> 手機版訪問設置 -> 開啟手機版 -> 提交")),Object(r.b)("p",null,"完成上述的操作就可以開啟移動API，這樣論壇網站就能基本被DiscuzHub檢測並且解析"),Object(r.b)("h3",null,"如何關閉防採集"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"使用管理員賬號登錄論壇"),Object(r.b)("li",{parentName:"ol"},"右上角的網頁列表點擊管理中心跳轉到Discuz！管理中心"),Object(r.b)("li",{parentName:"ol"},"使用管理員賬號登錄Discuz!管理中心"),Object(r.b)("li",{parentName:"ol"},"全局 -> 是否開啟防採集 -> 否 -> 提交")),Object(r.b)("p",null,"完成上述的操作就可以使得API能夠被正常訪問。"),Object(r.b)(c.p,{mdxType:"Message"},"防採集機制使得我們在訪問API時，需要解析JavaScript腳本後添加正常的Cookie然後重定向到真正的API頁面，以獲得正常的內容。然而出於安全性和兼容性的要求，我們並不會解析Javascript文件，因此防採集機制將會實質上阻止DiscuzHub獲得正常的數據。 "),Object(r.b)("h2",null,"其他兼容性推薦"),Object(r.b)("h3",null,"各個子論壇下的分類標籤，請慎重使用","<","font",">","改變顏色"),Object(r.b)("p",null,"由於我們支持暗黑模式，因此，我們的標籤背景色會隨著設定的變化而變化。同時，我們也支持HTML的富文本顯示。使用","<","font",">","標籤改變顏色將會使得文字變得難以辨識，減弱用戶的認知。因此，我們建議您不使用font標籤來強調某個分類。"),Object(r.b)("p",null,"我們推薦您使用HTML中的表情符號來標識分類，例如："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"🤔 疑問"),Object(r.b)("li",{parentName:"ul"},"😃 已解決"),Object(r.b)("li",{parentName:"ul"},"🧐 正在研究"),Object(r.b)("li",{parentName:"ul"},"🎉 好的建議"),Object(r.b)("li",{parentName:"ul"},"🧧 福利"),Object(r.b)("li",{parentName:"ul"},"💎 精華"),Object(r.b)("li",{parentName:"ul"},"😎 EMMMMMMMM")),Object(r.b)("h3",null,"顏色設置"),Object(r.b)("p",null,"許許多多論壇可能都會使用自定的顏色以標記或高亮某些字段。由於我們同時支持兩套顯示模式，請慎重使用深色/亮色來標記或者高亮字段。較黑或者白色會導致在夜間模式/日間模式時，因為與背景難以區分，應用無法很好的顯示這些高亮字段。我們推薦您使用CSS規定顏色等屬性，對於顏色的硬編碼有可能導致不同顯示情況下的顯示差異問題。"),Object(r.b)("p",null,"目前我們使用的顏色系統為："),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"模式"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"主色"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"主暗色"),Object(r.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"強調色"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"日間模式"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#3498DB",mdxType:"Avatar"})," #3498DB"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#2980B9",mdxType:"Avatar"})," #2980B9"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#E74C3C",mdxType:"Avatar"})," #E74C3C")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"夜間模式"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#BB86FC",mdxType:"Avatar"})," #BB86FC"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#8E24AA",mdxType:"Avatar"})," #8E24AA"),Object(r.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(r.b)(c.b,{bg:"#00796B",mdxType:"Avatar"})," #00796B")))),Object(r.b)("p",null,"您可以參考之後確定您的顏色是否和我們的顏色系統區分，以確保在您的高亮字體作為標籤時，仍然能夠正常的顯示。"),Object(r.b)("h3",null,"關於論壇圖標的配置"),Object(r.b)("p",null,"我們留意到部分論壇在傳遞論壇圖標的鏈接時，可能出現一個URL前綴。請仔細檢查圖標的鏈接是否指向正確，以免出現無法顯示圖標的問題。"),Object(r.b)("h2",null,"聯繫我們"),Object(r.b)("p",null,"如果您對顯示的問題和兼容性的問題存在意見和建議，請發送郵件至",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"mailto:kidozh@gmail.com"}),"kidozh@gmail.com"),"。我們將盡快解答您的疑問，並作出必要的修改。"))}O.isMDXComponent=!0;t.default=function(){var e=Object(n.a)();e.formatMessage({id:"back_to_top"});return Object(o.c)(b.a,{sx:{mb:6},subject:e.formatMessage({id:"compatibility.compatibility_title"})},"en"===e.locale&&Object(o.c)(m,null),"zh"===e.locale&&Object(o.c)(s,null),"zh-hk"===e.locale&&Object(o.c)(O,null))}},Z5ny:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a("aZJH"),i=(n=l)&&n.__esModule?n:{default:n},r=a("Eb/5");var c={title:"Grand View",baseFontSize:"16px",baseLineHeight:1.6875,googleFonts:[{name:"Montserrat",styles:["700"]},{name:"Arvo",styles:["400","400i","700"]}],headerFontFamily:["Montserrat","sans-serif"],bodyFontFamily:["Arvo","sans-serif"],headerColor:"hsla(0,0%,0%,1)",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:700,bodyWeight:400,boldWeight:700,overrideStyles:function(e,t){var a=e.adjustFontSizeTo,n=e.scale,l=e.rhythm;return function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({a:{color:"#d65947",textDecoration:"none"},"a:hover,a:active":{color:t.bodyColor},"h1,h2,h3,h4,h5,h6":{marginTop:l(2)},blockquote:b({},n(.2),{color:(0,i.default)(41),paddingLeft:l(13/16),marginLeft:0,borderLeft:l(3/16)+" solid #fca206"}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":b({},a(t.baseFontSize),{color:t.bodyColor,fontWeight:t.bodyWeight}),"blockquote cite:before":{content:'"— "'}},r.MOBILE_MEDIA_QUERY,{blockquote:{marginLeft:l(-3/4),marginRight:0,paddingLeft:l(9/16)}})}};t.default=c},"Z94/":function(e,t){var a=Object.prototype.toString;e.exports=function(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"==a.call(e)}},aZJH:function(e,t){function a(e){return!isNaN(parseFloat(e))&&isFinite(e)}e.exports=function(e,t,n){if(void 0===t&&(t=0),void 0===n&&(n=!1),"cool"===t?t=237:"slate"===t?t=122:"warm"===t&&(t=69),!a(t))throw new Error("Hue is not a number");if(!a(e))throw new Error("Lightness is not a number");e>100&&(e=100),e<0&&(e=0);var b=0;if(0!==t){b=19.92978+-.3651759*e+.001737214*Math.pow(e,2)}var l=0;return n?(l=e/100,e="100%,"):(l=(100-e)/100,e="0%,"),"hsla("+t+","+b+"%,"+e+l+")"}},aehL:function(e,t,a){(function(){var t,n;t=a("Z94/"),n={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"augmented fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},e.exports=function(e,a){var b;return null==e&&(e=0),null==a&&(a="golden"),b=t(a)?a:null!=n[a]?n[a]:n.golden,Math.pow(b,e)}}).call(this)},"ki+i":function(e,t,a){var n=a("B2PW"),b=a("TGkP"),l=function(e){return b(e)[1]},i=function(e){return b(e)[0]},r={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},c=function(e,t){var a,b=n(t.baseFontSize),l=i(b(e,"px")),r=i(t.baseLineHeightInPx),c=i(b(t.minLinePadding,"px"));return(a=t.roundToNearestHalfLine?Math.ceil(2*l/r)/2:Math.ceil(l/r))*r-l<2*c&&(a+=t.roundToNearestHalfLine?.5:1),a},o=function(e){var t=n(e.baseFontSize);return function(a,n,b){null==a&&(a=1),null==n&&(n=e.baseFontSize),null==b&&(b=0);var r=a*i(e.baseLineHeightInPx)-b+"px",c=t(r,e.rhythmUnit,n);return"px"===l(c)&&(c=Math.floor(i(c))+l(c)),parseFloat(i(c).toFixed(5))+l(c)}};e.exports=function(e){var t=JSON.parse(JSON.stringify(r)),a=Object.assign({},t,e),b=n(a.baseFontSize);return l(a.baseLineHeight)?(i(b(a.baseFontSize,"px")),a.baseLineHeightInPx=b(a.baseLineHeight,"px")):a.baseLineHeightInPx=i(a.baseFontSize)*a.baseLineHeight+"px",{rhythm:o(a),establishBaseline:function(){return function(e){return n(e.baseFontSize),{fontSize:i(e.baseFontSize)/16*100+"%",lineHeight:e.baseLineHeight.toString()}}(a)},linesForFontSize:function(e){return c(e,a)},adjustFontSizeTo:function(e,t,b){return null==t&&(t="auto"),function(e,t,a,b){null==a&&(a=b.baseFontSize),"%"===l(e)&&(e=i(b.baseFontSize)*(i(e)/100)+"px");var r=n(b.baseFontSize);e=r(e,"px",a=r(a,"px"));var u=o(b);return"auto"===t&&(t=c(e,b)),{fontSize:r(e,b.rhythmUnit,a),lineHeight:u(t,a)}}(e,t,b,a)}}}},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-compatibility-guide-js-fcbbb1151107be752484.js.map