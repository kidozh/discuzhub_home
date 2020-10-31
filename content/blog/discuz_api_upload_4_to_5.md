---
title: 推荐升级Discuz X掌上论坛API
tags: [建议]
keywords: [建议]
date: 2020-10-17T00:04:05.226Z
cover: harbin-cathedral.jpg
excerpt: 我们推荐您将论坛默认4版本的掌上论坛API升级至5这个版本以获得更好的用户体验
---

# 简介

我们最近收到来自一些论坛管理者的针对某些特定功能的来信，经过我们的调查，我们发现很多功能都在Discuz X掌上论坛的新版本中实现了，因此我们决定着手支持高级版本的掌上论坛API。因此我们再次请求各位论坛主升级API至5这个版本已实现更多的功能。

我们目前已经接近完成了对于版本号为4的API的适配工作，我们正准备着手针对API5的支持，我们预计在2.7（也就是下个版本）着手针对5的功能支持。

# 升级步骤

1. 转到[Github托管下的Discuz-API](https://github.com/Comsenz/Discuz-Api)
2. 按照`README.md`的使用方法更新掌上论坛API
3. 完成更新

## 使用方法

**此文本于2020年10月17日取自Github README.md**

> ## 使用方法
> 
> - 修改配置文件，config_oauths.php， 将申请好的小程序 appkey appsecret 修改好
> - 把mobile目录覆盖(合并，注意不要**替换**否刚会把当前文件夹先删除换成现在的)discuz source/plugin/mobile目录
> - 进入论坛后台，进入应用，找到 **掌上论坛** 插件（如果没有启用先启用), 点后面的更新到1.5.1（最新版）
> - 进入论坛管理后台，全局->手机版访问设置->开启手机版（必须开启手机版，否则API无法正常使用）
> - 修改小程序配置文件，将域名换成您网站域名 小程序源码地址：https://github.com/Comsenz/Discuz-minapp
> - 上传小程序测试
> - 该接口也适用于App调用(支持QQ和微信登录)，APP源码地址：iOS https://github.com/Comsenz/Discuz-iOS ，Android https://github.com/Comsenz/Discuz-Android
>

# 会有什么变化

+ 将会支持更多的功能
+ 能够保持对于API 4的兼容

# API 5标识

我们将会在论坛中标识出<span style="color:var(--theme-ui-colors-background,#3498db)">最新API</span>的支持。

# 更新计划

我们将会在内部测试后尽速发布2.6版本，这个版本将会适配目前API 4的大部分功能。

如果您对于我们有任何建议、意见以及反馈，您可以通过[联系方式](/contact/)来联系我们。我们非常欢迎您的来信！

感谢您的支持。