(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8o2o":function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,b={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(b[t]=e[t]);return b}t.d(a,"a",(function(){return n}))},ZQPf:function(e,a,t){"use strict";t.r(a);t("q1tI");var n=t("52Oh"),b=t("FwpG"),c=t("k1TG"),s=t("8o2o"),p=t("7ljp"),l=t("izhR"),r=t("qKvR"),i={_frontmatter:{}};function o(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(p.b)("wrapper",Object(c.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(p.b)("h1",null,"前言"),Object(p.b)("p",null,"我们收到部分论坛管理员的来信，希望我们能定制一款专属于他们论坛的应用。由于工作的繁忙以及安全问题，我们并未对此要求进行正面的答复。经过我们的测试和适配，我们很高兴的宣布在Discuz Hub 3.10版本后，我们支持了专属论坛的编译以及发布。"),Object(p.b)("h1",null,"使用许可"),Object(p.b)("p",null,"您需要同意下列条款以分发专属于单一论坛的应用"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(c.a)({parentName:"li"},{href:"/privacy_policy"}),"隐私政策")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(c.a)({parentName:"li"},{href:"/term_of_use"}),"使用条款"))),Object(p.b)(l.a,{mdxType:"Alert"},"我们理解到部分用户很少阅读条款，但是我们希望您浏览一次，以避免不必要的争端。"),Object(p.b)("h1",null,"举例说明"),Object(p.b)("p",null,"在接下来的内容中，我们谨以QZZN论坛为例，向你阐述如何分发自己论坛的专属应用。"),Object(p.b)("p",null,"QZZN论坛的网址是：",Object(p.b)("a",Object(c.a)({parentName:"p"},{href:"https://bbs.qzzn.com/"}),"https://bbs.qzzn.com/")),Object(p.b)(l.p,{mdxType:"Message"},"我们，DiscuzHub，与QZZN论坛之间并无任何联系。相关功能不为任何个人及组织担保。详细信息请检查我们的使用条款。"),Object(p.b)("h1",null,"技术要求"),Object(p.b)("p",null,"你需要达到以下要求以完成对于专属应用的编译以及发布"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"一台支持Android studio的计算机"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("a",Object(c.a)({parentName:"li"},{href:"https://developer.android.com/studio"}),"Android studio"),"（大陆地区可以使用Google.cn开发者网站下载",Object(p.b)("a",Object(c.a)({parentName:"li"},{href:"https://developer.android.google.cn/studio"}),"https://developer.android.google.cn/studio"),"）"),Object(p.b)("li",{parentName:"ul"},"Git或者能够解压Zip压缩文件的软件")),Object(p.b)(l.p,{mdxType:"Message"},"当您处于中国大陆区域时，从Android studio官网上下载可能非常缓慢。您可以使用Google中国开发者网站下载以获得更好的速度。"),Object(p.b)("h1",null,"准备"),Object(p.b)("p",null,"首先，你需要下载我们的Discuz Hub源代码。你可以使用："),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"git命令下载"),Object(p.b)("li",{parentName:"ul"},"从Github上下载zip打包的源代码")),Object(p.b)(l.p,{mdxType:"Message"},"当您处于中国大陆区域时，使用Github下载可能非常缓慢。您可以使用代理服务以加速此过程。"),Object(p.b)("h2",null,"使用git命令"),Object(p.b)("p",null,"打开您的终端（Windows用户使用Win徽标键+R，在弹出的运行对话框中键入cmd并选择确定）"),Object(p.b)("p",null,"使用",Object(p.b)("code",Object(c.a)({parentName:"p"},{className:"language-text"}),"cd"),"命令进入你想存放代码的文件夹"),Object(p.b)("h3",null,"使用HTTPS"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(p.b)("pre",Object(c.a)({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-bash line-numbers"}),Object(p.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token function"}),"git")," clone https://github.com/kidozh/DiscuzHub.git"),Object(p.b)("span",Object(c.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(p.b)("span",{parentName:"span"})))),Object(p.b)("h3",null,"使用SSH"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(p.b)("pre",Object(c.a)({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-bash line-numbers"}),Object(p.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token function"}),"git")," clone git@github.com:kidozh/DiscuzHub.git"),Object(p.b)("span",Object(c.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(p.b)("span",{parentName:"span"})))),Object(p.b)("h3",null,"使用Github CLI"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"bash"},Object(p.b)("pre",Object(c.a)({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-bash line-numbers"}),Object(p.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"gh repo clone kidozh/DiscuzHub"),Object(p.b)("span",Object(c.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(p.b)("span",{parentName:"span"})))),Object(p.b)("p",null,"等待终端执行命令后，完成Discuz源码的下载"),Object(p.b)("h3",null,"直接下载源码"),Object(p.b)("p",null,"使用浏览器打开我们的库：",Object(p.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/kidozh/DiscuzHub"}),"https://github.com/kidozh/DiscuzHub"),"，点击Code按钮，点击Download ZIP，等待下载完成。"),Object(p.b)("p",null,Object(p.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}}),"\n      ",Object(p.b)("a",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/8e73a217204c4ef406579173fb778104/c8ad9/download_from_github.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(p.b)("span",Object(c.a)({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.920245398773%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0klEQVQoz11S247TMBTMH8Fqu2qXUljErnjhc3nhL5CQeEVAt900N8dJbCe+DOPTZSthaXIce3zOzLGL+0+fsX1/j832Dqv1W1zdvMHN7Q67uwds333E7sODYM3916sNrla3jBe8ut7ger0ldvzfoihPDX4/1vi1b/B4bFG3naDtekI9o0fDWNUtjocST2WFw7HkfyOxblqUpwoNzxV+8XDWwroFiw+Y5wUz1+blHN18XhfIusdEfoYPETEBiYj85HmREwzjdE7AuXMziQHcIzEJOe9ljrUOalD4+uMLvu+/YSY3BI8UyY8R3nsUx1Lh558KrbbQJrxgcAkjMdiAvtdQSrHgTKULJjdhNCNUP+FU52gQYhIBhTae/dFiJdvyPkLr8Vk1Lc60aKwk/acyhKwmMKnHaCPMnGBclKSFWxL75BGz7OyPIysxxtC+k7k1E8w0Qfc912xuhtjLnEDFl8GElgl7PcnmuWeJKiwGPYiKwIPd0x7V8YC+qWC0gh2YWHdU3WOk6oWcmKL0Wy6l45NYlkuliSSlerm5XGCxtM+eeWcEqqlFtR4GdK1iKzQv0svZIj+FXGmipZTON5utjuMoCv8fuUjuqagPkKeClxeR8BduoNyl/FcDuwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(p.b)("img",Object(c.a)({parentName:"a"},{className:"gatsby-resp-image-image",alt:"使用Github下载源代码",title:"使用Github下载源代码",src:"/static/8e73a217204c4ef406579173fb778104/a6d36/download_from_github.png",srcSet:["/static/8e73a217204c4ef406579173fb778104/222b7/download_from_github.png 163w","/static/8e73a217204c4ef406579173fb778104/ff46a/download_from_github.png 325w","/static/8e73a217204c4ef406579173fb778104/a6d36/download_from_github.png 650w","/static/8e73a217204c4ef406579173fb778104/e548f/download_from_github.png 975w","/static/8e73a217204c4ef406579173fb778104/3c492/download_from_github.png 1300w","/static/8e73a217204c4ef406579173fb778104/c8ad9/download_from_github.png 1564w"],sizes:"(max-width: 650px) 100vw, 650px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(p.b)("p",null,"将下载的源代码（文件名可能是DiscuzHub-master.zip）解压到您存放源代码的文件夹"),Object(p.b)("p",null,"这样你就完成了对于源代码的下载。接着你需要开始使用Android studio这个官方IDE编译此应用。"),Object(p.b)("h1",null,"使用并安装Android studio"),Object(p.b)("p",null,"从",Object(p.b)("a",Object(c.a)({parentName:"p"},{href:"https://developer.android.com/studio"}),"Android studio"),"（大陆地区",Object(p.b)("a",Object(c.a)({parentName:"p"},{href:"https://developer.android.google.cn/studio"}),"https://developer.android.google.cn/studio"),"）安装好应用后，你可能需要设置或下载一系列的软件和插件以能够编译Android应用。"),Object(p.b)("p",null,"我们的工程目前是支持Android 11版本的，请选择并下载此版本的SDK以完成编译。"),Object(p.b)("p",null,"使用Android studio打开存放源代码的文件夹。"),Object(p.b)("h1",null,"自定义参数"),Object(p.b)("p",null,"我们的使用条款明确表明，使用我们的服务并不意味着您可以使用我们的图标，同时您的衍生服务也不应当干扰我们的正常服务，因此，您必须修改下面的内容以满足协议："),Object(p.b)("h2",null,"1. 修改应用名称"),Object(p.b)("p",null,"请在AndroidManifest.xml（路径：",Object(p.b)("code",Object(c.a)({parentName:"p"},{className:"language-text"}),"app\\src\\main\\AndroidManifest.xml"),'）文件中，修改application目录下的android:label这个值为您论坛的名称。例如android:label="QZZN论坛"'),Object(p.b)("div",{className:"gatsby-highlight","data-language":"xml"},Object(p.b)("pre",Object(c.a)({parentName:"div"},{style:{counterReset:"linenumber 16"},className:"language-xml line-numbers"}),Object(p.b)("code",Object(c.a)({parentName:"pre"},{className:"language-xml"}),'    <application\n        android:allowBackup="true"\n        android:icon="@mipmap/logo"\n',Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"gatsby-highlight-code-line"}),'        android:label="QZZN论坛"'),'        android:networkSecurityConfig="@xml/network_security_config"\n        android:supportsRtl="true"\n        android:theme="@style/AppTheme.Default"\n        tools:ignore="GoogleAppIndexingWarning"\n        tools:targetApi="n">'),Object(p.b)("span",Object(c.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"})))),Object(p.b)("h3",null,"国际化需求"),Object(p.b)("p",null,"我们理解到部分论坛可能具有国际化任务的需求，那么请维持AndroidManifest.xml文件的android:label这个值，转而修改string.xml文件的app_name这个值。我们谨以",Object(p.b)("strong",{parentName:"p"},"keylol.com"),"为例子。"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"keylol.com"),"中文名称为其乐，英文名称为keylol。"),Object(p.b)("p",null,"在默认英文字符串文件（strings.xml，路径",Object(p.b)("code",Object(c.a)({parentName:"p"},{className:"language-text"}),"app\\src\\main\\res\\values\\strings.xml"),"）中修改app_name为keylol，在中文字符串文件（src\\main\\res\\values-zh-rCN\\strings.xml）中修改app_name值为其乐。"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"xml"},Object(p.b)("pre",Object(c.a)({parentName:"div"},{style:{counterReset:"linenumber 16"},className:"language-xml line-numbers"}),Object(p.b)("code",Object(c.a)({parentName:"pre"},{className:"language-xml"}),'    <application\n        android:allowBackup="true"\n        android:icon="@mipmap/logo"\n',Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"gatsby-highlight-code-line"}),'        android:label="@string/app_name"'),'        android:networkSecurityConfig="@xml/network_security_config"\n        android:supportsRtl="true"\n        android:theme="@style/AppTheme.Default"\n        tools:ignore="GoogleAppIndexingWarning"\n        tools:targetApi="n">'),Object(p.b)("span",Object(c.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"})))),Object(p.b)(l.a,{mdxType:"Alert"},"我们，DiscuzHub，与其乐论坛（keylol.com）之间并无任何联系。"),Object(p.b)("h2",null,"2. 修改应用ID"),Object(p.b)("p",null,"应用ID相当于应用的身份证，一个应用应当只有一个ID。当相同的ID安装时，将会发生覆盖的情况，并且会干扰应用的运行。根据我们的使用条款且为了您的分发便利，您不应当使用我们的应用ID而应当转而使用自己的ID。我们以QZZN为例，其论坛使用的域名为bbs.qzzn.com，那么根据Google开发者指南推荐，你可以使用",Object(p.b)("strong",{parentName:"p"},"com.qzzn.bbs"),"为应用ID。"),Object(p.b)("p",null,"在模块的Gradle文件中，修改android选项下的",Object(p.b)("strong",{parentName:"p"},"defaultConfig"),"中的",Object(p.b)("strong",{parentName:"p"},"applicationId"),"为 ",Object(p.b)("strong",{parentName:"p"},'"com.qzzn.bbs"')," ，示例如下："),Object(p.b)("div",{className:"gatsby-highlight","data-language":"groovy"},Object(p.b)("pre",Object(c.a)({parentName:"div"},{style:{counterReset:"linenumber 4"},className:"language-groovy line-numbers"}),Object(p.b)("code",Object(c.a)({parentName:"pre"},{className:"language-groovy"}),"android ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    compileSdkVersion ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token number"}),"30"),"\n    buildToolsVersion ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token string gstring"}),'"29.0.3"'),"\n    defaultConfig ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"gatsby-highlight-code-line"}),"        applicationId ",Object(p.b)("span",Object(c.a)({parentName:"span"},{className:"token string gstring"}),'"com.qzzn.bbs"')),"        minSdkVersion ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token number"}),"23"),"\n        targetSdkVersion ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token number"}),"30"),"\n        versionCode ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token number"}),"31"),"\n        versionName ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token string gstring"}),'"3.10"'),"\n        testInstrumentationRunner ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token string gstring"}),'"androidx.test.runner.AndroidJUnitRunner"'),"\n        manifestPlaceholders ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n                discuz_title",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token string gstring"}),'"NOT_IMPLEMENTED"'),Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),","),"\n                discuz_base_url",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token string gstring"}),'"NOT_IMPLEMENTED"'),Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n    ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"..."),"\n",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"}")),Object(p.b)("span",Object(c.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"})))),Object(p.b)("p",null,"这样你就完成了applicationId的修改。"),Object(p.b)("h2",null,"修改构建类型的值"),Object(p.b)("p",null,"在项目的gradle文件（相对路径：",Object(p.b)("code",Object(c.a)({parentName:"p"},{className:"language-text"}),"app/build.gradle"),"）下，我们提供了不同的构建类型，其对应着不同的分发版本，有着不同的功能"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"single"),"：这个就是专属论坛使用的构建类型，在分发时，您应当选择此构建类型构建自己的应用并分发"),Object(p.b)("li",{parentName:"ul"},"release: 这个是我们分发Discuz Hub应用时的构建源，其支持多个论坛同时使用，这个不应当用于构建专属论坛。"),Object(p.b)("li",{parentName:"ul"},"debug：调试内容，这个不应用于生产环境"),Object(p.b)("li",{parentName:"ul"},"qzzn：一个以qzzn论坛为例的构建类型")),Object(p.b)("p",null,"请修改",Object(p.b)("code",Object(c.a)({parentName:"p"},{className:"language-text"}),"single"),"下的",Object(p.b)("strong",{parentName:"p"},"discuz_title"),"以及",Object(p.b)("strong",{parentName:"p"},"discuz_base_url"),"两个值。"),Object(p.b)("div",{className:"gatsby-highlight","data-language":"groovy"},Object(p.b)("pre",Object(c.a)({parentName:"div"},{style:{counterReset:"linenumber 31"},className:"language-groovy line-numbers"}),Object(p.b)("code",Object(c.a)({parentName:"pre"},{className:"language-groovy"}),"        single ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token comment"}),"// fill your bbs id"),"\n            manifestPlaceholders ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"gatsby-highlight-code-line"}),"                    discuz_title",Object(p.b)("span",Object(c.a)({parentName:"span"},{className:"token punctuation"}),":")," ",Object(p.b)("span",Object(c.a)({parentName:"span"},{className:"token string gstring"}),'"论坛名称（如：西北工业大学三行四方）"'),Object(p.b)("span",Object(c.a)({parentName:"span"},{className:"token punctuation"}),",")),Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"gatsby-highlight-code-line"}),"                    discuz_base_url",Object(p.b)("span",Object(c.a)({parentName:"span"},{className:"token punctuation"}),":")," ",Object(p.b)("span",Object(c.a)({parentName:"span"},{className:"token string gstring"}),'"服务网址（如：https://bbs.example.com）"'),Object(p.b)("span",Object(c.a)({parentName:"span"},{className:"token punctuation"}),",")),"            ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n            proguardFiles ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token function"}),"getDefaultProguardFile"),Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token string"}),"'proguard-android-optimize.txt'"),Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token string"}),"'proguard-rules.pro'"),"\n            applicationIdSuffix ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token string gstring"}),'".bbs"'),"\n        ",Object(p.b)("span",Object(c.a)({parentName:"code"},{className:"token punctuation"}),"}")),Object(p.b)("span",Object(c.a)({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"}),Object(p.b)("span",{parentName:"span"})))),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"discuz_title是论坛的名称，其将会被显示与开始页面，最终存入数据库的名称将以API为准"),Object(p.b)("li",{parentName:"ul"},"discuz_base_url是论坛的网址，这个参数非常重要，有的论坛服务在域名上（如bbs.qzzn.com）,有的论坛则有一个路径（如一亩三分地: ",Object(p.b)("a",Object(c.a)({parentName:"li"},{href:"https://www.1point3acres.com/bbs"}),"www.1point3acres.com/bbs"),"），你应当非常注意此值。同时网址也需要给上协议（如HTTP和HTTPS）。我们的应用虽然支持跳转，但是当你的论坛支持HTTPS协议时，请不要使用HTTP协议。")),Object(p.b)(l.a,{mdxType:"Alert"}),Object(p.b)("p",null,"这样就完成了应用的修改，接着就可以开始应用的构建了。"),Object(p.b)("h1",null,"构建应用"),Object(p.b)("p",null,"和正常的Android程序一样，首先你需要使用gradle build一下整个项目。在导航栏中选择Build->Make Project完成项目的构建。"),Object(p.b)(l.a,{mdxType:"Alert"},"当您处于中国大陆区域时，使用Gradle编译Android应用可能非常缓慢甚至报错。您可以使用代理服务器以获得更好的速度。"),Object(p.b)("h1",null,"生成应用"),Object(p.b)("p",null,"在导航栏中选择Build->Generate Signed Bundle or APK，打开选中的框"),Object(p.b)("p",null,Object(p.b)("span",Object(c.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"549px"}}),"\n      ",Object(p.b)("a",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-link",href:"/static/ee161d6f9368df26566e0dc88f60b044/928ea/build-dialog.png",style:{display:"block"},target:"_blank",rel:"noopener"}),"\n    ",Object(p.b)("span",Object(c.a)({parentName:"a"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"75.4601226993865%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQ4y5VU25abMAzMT20CGOMbOBgSQrPp5ezTnr70/79gKtk4JXtos32YWBzMSBqNstsfNdTQQ2kHZds7tOtg2g5SW4hGo1bmr+D3jXEohcROGAPjPbp+QHcMaAkcK+v+SfIRnLioauxK+ml9QDhNGM5TPMfpQhktyrqJ2SupnoPuRcJC1LFcBmfJMbfsuiO17WHptHSaD3D+mN4RnO+pACJ8ORTxYZxmhPG8VDijH07xYvqw//PhijwT5TNWuC8q9ER0/fod8/WGL7dveKV4PF9ixZ9qd91yRTpxi5xV03RtlzLXTya7hUh4KCvUpoUwnk5/t8HaEs+I8p0VIRG5AbIlaLaL/jTZA6FYpsyCGpqqIC3+h2CTkKthI/PUsrhZaLER54+3ZImE+6K8+y6tW7LEw/MS87BYkm0plk15OZTxYhvXrl9AMcuweDDG1sI6Mr1OlfIW5YpzfKgE7fJDa6sWKU5/FC46QE4/4W6/UIUfJFHAab7Ch5GK6THwUtBCVLJJFQpNBKq5o5IS0iois5CNQlFTFeEN+vKOvZ2haM99GMi3yRHclSP/sny/AcU3DmfXl96AAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(p.b)("img",Object(c.a)({parentName:"a"},{className:"gatsby-resp-image-image",alt:"生成应用",title:"生成应用",src:"/static/ee161d6f9368df26566e0dc88f60b044/928ea/build-dialog.png",srcSet:["/static/ee161d6f9368df26566e0dc88f60b044/222b7/build-dialog.png 163w","/static/ee161d6f9368df26566e0dc88f60b044/ff46a/build-dialog.png 325w","/static/ee161d6f9368df26566e0dc88f60b044/928ea/build-dialog.png 549w"],sizes:"(max-width: 549px) 100vw, 549px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n  "),"\n    ")),Object(p.b)("p",null,"选择你需要分发的应用类型，我们以分发APK为例，选择APK，点击Next。"),Object(p.b)("h2",null,"选择密钥库"),Object(p.b)("p",null,"当你首次生成安装文件时，你需要创建一个密钥库（keystore）对安装包进行加密，并验证你的身份。选择Create New以创建新的密钥库。如果你之前有密钥库，你可以选择Choose exisiting以选择密钥库。"),Object(p.b)(l.a,{mdxType:"Alert"},"密钥非常重要，它是验证发布者身份的重要凭证，请小心保管并做好备份。每次您分发应用时，都需要使用到此密钥。当您使用不一样的密钥签发同一Id应用时，将导致无法安装的情况。"),Object(p.b)("p",null,"选择密钥库并填上密钥和密码，点击Next。"),Object(p.b)("h3",null,"选择构建类型"),Object(p.b)("p",null,"请选择single，构建专属于您论坛的应用。建议同时选择上签名版本v1和v2。点击finish开始生成安装包apk。"),Object(p.b)("p",null,"等待生成完毕后，生成的APK文件就可以用于分发以及安装。"),Object(p.b)("p",null,"这样，你就完成了应用的构建"),Object(p.b)("h1",null,"后语"),Object(p.b)("p",null,"如若你有任何问题，你可以联系",Object(p.b)("a",Object(c.a)({parentName:"p"},{href:"mailto:kidozh@gmail.com"}),"kidozh@gmail.com"),"以获得帮助和支持。"),Object(p.b)(l.a,{mdxType:"Alert"},"请注意措辞和言行，开发者并未对此功能做出任何承诺和保证，同时开发者并不是你爹。若措辞不当或者发生消息滥用的情况，我们有权停止对你的服务和支持，并撤销使用和再分发许可。"))}o.isMDXComponent=!0;a.default=function(){var e=Object(n.a)();return Object(r.c)(b.a,{subject:e.formatMessage({id:"customize.customize_title"})},Object(r.c)(o,null))}}}]);
//# sourceMappingURL=component---src-pages-customize-bbs-js-4b273ab225adefd6fc85.js.map