"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[875],{9779:function(e,n,l){l.r(n);var t=l(1151),a=l(7294),r=l(795);function s(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",div:"div",h3:"h3",strong:"strong",img:"img"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,null,"前言"),"\n",a.createElement(n.p,null,"我们收到部分论坛管理员的来信，希望我们能定制一款专属于他们论坛的应用。由于工作的繁忙以及安全问题，我们并未对此要求进行正面的答复。经过我们的测试和适配，我们很高兴的宣布在Discuz Hub 3.10版本后，我们支持了专属论坛的编译以及发布。"),"\n",a.createElement(n.h1,null,"使用许可"),"\n",a.createElement(n.p,null,"您需要同意下列条款以分发专属于单一论坛的应用"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/privacy_policy"},"隐私政策")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"/term_of_use"},"使用条款")),"\n"),"\n",a.createElement(r.bZ,null,"我们理解到部分用户很少阅读条款，但是我们希望您浏览一次，以避免不必要的争端。"),"\n",a.createElement(n.h1,null,"举例说明"),"\n",a.createElement(n.p,null,"在接下来的内容中，我们谨以QZZN论坛为例，向你阐述如何分发自己论坛的专属应用。"),"\n",a.createElement(n.p,null,"QZZN论坛的网址是：",a.createElement(n.a,{href:"https://bbs.qzzn.com/"},"https://bbs.qzzn.com/")),"\n",a.createElement(r.bZ,null,"我们，DiscuzHub，与QZZN论坛之间并无任何联系。相关功能不为任何个人及组织担保。详细信息请检查我们的使用条款。"),"\n",a.createElement(n.h1,null,"技术要求"),"\n",a.createElement(n.p,null,"你需要达到以下要求以完成对于专属应用的编译以及发布"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"一台支持Android studio的计算机"),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://developer.android.com/studio"},"Android studio"),"（大陆地区可以使用Google.cn开发者网站下载",a.createElement(n.a,{href:"https://developer.android.google.cn/studio"},"https://developer.android.google.cn/studio"),"）"),"\n",a.createElement(n.li,null,"Git或者能够解压Zip压缩文件的软件"),"\n"),"\n",a.createElement(r.bZ,null,"当您处于中国大陆区域时，从Android studio官网上下载可能非常缓慢。您可以使用Google中国开发者网站下载以获得更好的速度。"),"\n",a.createElement(n.h1,null,"准备"),"\n",a.createElement(n.p,null,"首先，你需要下载我们的Discuz Hub源代码。你可以使用："),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"git命令下载"),"\n",a.createElement(n.li,null,"从Github上下载zip打包的源代码"),"\n"),"\n",a.createElement(r.bZ,null,"当您处于中国大陆区域时，使用Github下载可能非常缓慢。您可以使用代理服务以加速此过程。"),"\n",a.createElement(n.h2,null,"使用git命令"),"\n",a.createElement(n.p,null,"打开您的终端（Windows用户使用Win徽标键+R，在弹出的运行对话框中键入cmd并选择确定）"),"\n",a.createElement(n.p,null,"使用",a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cd</code>'}}),"命令进入你想存放代码的文件夹"),"\n",a.createElement(n.h3,null,"使用HTTPS"),"\n",a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre style="counter-reset: linenumber NaN" class="language-text line-numbers"><code class="language-text">git clone https://github.com/kidozh/DiscuzHub.git</code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span></span></pre></div>'}}),"\n",a.createElement(n.h3,null,"使用SSH"),"\n",a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre style="counter-reset: linenumber NaN" class="language-text line-numbers"><code class="language-text">git clone git@github.com:kidozh/DiscuzHub.git</code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span></span></pre></div>'}}),"\n",a.createElement(n.h3,null,"使用Github CLI"),"\n",a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre style="counter-reset: linenumber NaN" class="language-text line-numbers"><code class="language-text">gh repo clone kidozh/DiscuzHub</code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span></span></pre></div>'}}),"\n",a.createElement(n.p,null,"等待终端执行命令后，完成Discuz源码的下载"),"\n",a.createElement(n.h2,null,"直接下载源码"),"\n",a.createElement(n.p,null,"使用浏览器打开我们的库：",a.createElement(n.a,{href:"https://github.com/kidozh/DiscuzHub"},"https://github.com/kidozh/DiscuzHub"),"，点击Code按钮，点击Download ZIP，等待下载完成。"),"\n",a.createElement(n.p,null,"将下载的源代码（文件名可能是DiscuzHub-master.zip）解压到您存放源代码的文件夹"),"\n",a.createElement(n.p,null,"这样你就完成了对于源代码的下载。接着你需要开始使用Android studio这个官方IDE编译此应用。"),"\n",a.createElement(n.h1,null,"使用Android studio"),"\n",a.createElement(n.p,null,"安装好应用后，你可能需要设置或下载一系列的软件和插件以能够编译Android应用。我们的工程目前是支持Android 11版本的，请选择并下载此版本的SDK以完成编译。"),"\n",a.createElement(n.p,null,"使用Android studio打开存放源代码的文件夹。"),"\n",a.createElement(n.h1,null,"自定义参数"),"\n",a.createElement(n.p,null,"我们的使用条款明确表明，使用我们的服务并不意味着您可以使用我们的图标，同时您的衍生服务也不应当干扰我们的正常服务，因此，您必须修改下面的内容以满足协议："),"\n",a.createElement(n.h2,null,"1. 修改应用名称"),"\n",a.createElement(n.p,null,'请在AndroidManifest.xml（路径：src\\main\\AndroidManifest.xml）文件中，修改application目录下的android:label这个值为您论坛的名称。例如android:label="QZZN论坛"'),"\n",a.createElement(n.h3,null,"国际化需求"),"\n",a.createElement(n.p,null,"我们理解到部分论坛可能具有国际化任务的需求，那么请维持AndroidManifest.xml文件的android:label这个值，转而修改string.xml文件的app_name这个值。我们谨以",a.createElement(n.strong,null,"keylol.com"),"为例子。"),"\n",a.createElement(n.p,null,a.createElement(n.strong,null,"keylol.com"),"中文名称为其乐，英文名称为keylol。"),"\n",a.createElement(n.p,null,"在默认英文字符串文件（strings.xml，路径src\\main\\res\\values\\strings.xml）中修改app_name为keylol，在中文字符串文件（src\\main\\res\\values-zh-rCN\\strings.xml）中修改app_name值为其乐。"),"\n",a.createElement(r.bZ,null,"我们，DiscuzHub，与其乐论坛（keylol.com）之间并无任何联系。"),"\n",a.createElement(n.h2,null,"2. 修改应用ID"),"\n",a.createElement(n.p,null,"应用ID相当于应用的身份证，一个应用应当只有一个ID。当相同的ID安装时，将会发生覆盖的情况，并且会干扰应用的运行。根据我们的使用条款且为了您的分发便利，您不应当使用我们的应用ID而应当转而使用自己的ID。我们以QZZN为例，其论坛使用的域名为bbs.qzzn.com，那么根据Google开发者指南推荐，你可以使用",a.createElement(n.strong,null,"com.qzzn.bbs"),"为应用ID。"),"\n",a.createElement(n.p,null,'在模块的Gradle文件中，修改android选项下的defaultConfig中的applicationId为"com.qzzn.bbs"，示例如下：'),"\n",a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre style="counter-reset: linenumber NaN" class="language-text line-numbers"><code class="language-text">android {\n    compileSdkVersion 30\n    buildToolsVersion "29.0.3"\n    defaultConfig {\n        applicationId "com.qzzn.bbs"\n        minSdkVersion 23\n        targetSdkVersion 30\n        versionCode 31\n        versionName "3.10"\n        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"\n        manifestPlaceholders = [\n                discuz_title: "NOT_IMPLEMENTED",\n                discuz_base_url: "NOT_IMPLEMENTED",\n        ]\n    }\n    ...\n}</code><span aria-hidden="true" class="line-numbers-rows" style="white-space: normal; width: auto; left: 0;"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></pre></div>'}}),"\n",a.createElement(n.p,null,"这样你就完成了applicationId的修改。"),"\n",a.createElement(n.h2,null,"修改构建类型的值"),"\n",a.createElement(n.p,null,"你可能观察到我们的构建类型（buildTypes）下包含了多个构建类型"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"release: 这个是我们分发Discuz Hub应用时的构建源，其支持多个论坛同时使用，这个不应当用于构建专属论坛。"),"\n",a.createElement(n.li,null,"debug：调试内容，这个不应用于生产环境"),"\n",a.createElement(n.li,null,"single：这个就是专属论坛使用的构建类型，在分发时，您应当选择此构建类型构建自己的应用并分发"),"\n",a.createElement(n.li,null,"qzzn：一个以qzzn论坛为例的构建类型"),"\n"),"\n",a.createElement(n.p,null,"请修改single下的",a.createElement(n.strong,null,"discuz_title"),"以及",a.createElement(n.strong,null,"discuz_base_url"),"两个值。"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"discuz_title是论坛的名称，其将会被显示与开始页面，最终存入数据库的名称将以API为准"),"\n",a.createElement(n.li,null,"discuz_base_url是论坛的网址，这个参数非常重要，有的论坛服务在域名上（如bbs.qzzn.com）,有的论坛则有一个路径（如一亩三分地: ",a.createElement(n.a,{href:"https://www.1point3acres.com/bbs"},"www.1point3acres.com/bbs"),"），你应当非常注意此值。同时网址也需要给上协议（如HTTP和HTTPS）。我们的应用虽然支持跳转，但是当你的论坛支持HTTPS协议时，请不要使用HTTP协议。"),"\n"),"\n",a.createElement(n.p,null,"这样就完成了应用的修改，接着就可以开始应用的构建了。"),"\n",a.createElement(n.h1,null,"构建应用"),"\n",a.createElement(n.p,null,"和正常的Android程序一样，首先你需要使用gradle build一下整个项目。在导航栏中选择Build->Make Project完成项目的构建。"),"\n",a.createElement(r.bZ,null,"当您处于中国大陆区域时，使用Gradle编译Android应用可能非常缓慢甚至报错。您可以使用代理服务器以获得更好的速度。"),"\n",a.createElement(n.h1,null,"生成应用"),"\n",a.createElement(n.p,null,"在导航栏中选择Build->Generate Signed Bundle or APK，打开选中的框"),"\n",a.createElement(n.img,{src:"/static/doc-images/build-dialog.png",alt:"生成应用"}),"\n",a.createElement(n.p,null,"选择你需要分发的应用类型，我们以分发APK为例，选择APK，点击Next。"),"\n",a.createElement(n.h2,null,"选择密钥库"),"\n",a.createElement(n.p,null,"当你首次生成安装文件时，你需要创建一个密钥库（keystore）对安装包进行加密，并验证你的身份。选择Create New以创建新的密钥库。如果你之前有密钥库，你可以选择Choose exisiting以选择密钥库。"),"\n",a.createElement(r.bZ,null,"密钥非常重要，它是验证发布者身份的重要凭证，请小心保管并做好备份。每次您分发应用时，都需要使用到此密钥。当您使用不一样的密钥签发同一Id应用时，将导致无法安装的情况。"),"\n",a.createElement(n.p,null,"选择密钥库并填上密钥和密码，点击Next。"),"\n",a.createElement(n.h3,null,"选择构建类型"),"\n",a.createElement(n.p,null,"请选择single，构建专属于您论坛的应用。建议同时选择上签名版本v1和v2。点击finish开始生成安装包apk。"),"\n",a.createElement(n.p,null,"等待生成完毕后，生成的APK文件就可以用于分发以及安装。"),"\n",a.createElement(n.p,null,"这样，你就完成了应用的构建"),"\n",a.createElement(n.h1,null,"后语"),"\n",a.createElement(n.p,null,"如若你有任何问题，你可以联系kidozh@gmail.com以获得帮助和支持。"),"\n",a.createElement(r.bZ,null,"请注意措辞和言行，开发者并未对此功能做出任何承诺和保证，同时开发者并不是你爹。若措辞不当或者发生消息滥用的情况，我们有权停止对你的服务和支持，并撤销使用和再分发许可。"))}n.default=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?a.createElement(n,e,a.createElement(s,e)):s(e)}}}]);
//# sourceMappingURL=component---docs-customize-your-app-zh-mdx-fcf06225512761a1353c.js.map