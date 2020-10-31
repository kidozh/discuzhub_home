import React from "react"
import { Card, Box, Grid, Image, Link, Alert, jsx } from 'theme-ui'
import quickStarImage from "../../../static/features/quick-star.svg"
import telescopeImage from "../../../static/features/telescope.svg"
import galaxyImage from "../../../static/features/galaxy.svg"
import bigDipperImage from "../../../static/features/big-dipper.svg"
import dayNightShiftImage from "../../../static/features/day-night-shift.svg"
import sunImage from "../../../static/features/sun.svg"
import { Link as IntlLink } from "gatsby-plugin-intl"

class ZHFeatures extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <Grid>
    
                <h3>支持Discuz的轻量级Android应用</h3>
                {/* Some box */}
                <Grid gap={2}
                    columns={[1, null, 3]}
    
                    sx={{
                        alignContent: 'center',
    
    
                    }}>
                    <Box>
                        <animateDiv>
                            <Card sx={{
    
                            }}>
                                <Image src={quickStarImage} />
                                <h2 color="primary">急速</h2>
                                <p>无广告干扰您的阅读</p>
                            </Card>
                        </animateDiv>
    
                    </Box>
                    <Box>
                        <Card sx={{
    
                        }}>
                            <Image src={telescopeImage} />
                            <h2 color="primary">强力</h2>
                            <p>支持绝大多数的Discuz！论坛</p>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{
    
                        }}>
                            <Image src={galaxyImage} />
                            <h2 color="primary">开源</h2>
                            <p>以MIT协议开源于Github上</p>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{
    
                        }}>
                            <Image src={bigDipperImage} />
                            <h2 color="primary">安全</h2>
                            <p>应用不会存储您的任何密码信息</p>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{
    
                        }}>
                            <Image src={dayNightShiftImage} />
                            <h2 color="primary">Android 10支持</h2>
                            <p>我们不会向您索取任何敏感权限</p>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{
                        }}>
                            <Image src={sunImage} />
                            <h2 color="primary">轻量</h2>
                            <p>应用程序包大小 &lt; 5MB</p>
                        </Card>
                    </Box>
    
                </Grid>
                <h2>论坛支持要求</h2>
                <ul>
                    <li>Discuz！为核心且Discuz版本&gt;<b>X3.2</b></li>
                    <li>API版本&gt;<b>4</b></li>
                    <li>安装应用“掌上论坛”（X3.4版本自带并默认开启）</li>
                    <li>打开论坛移动页面并关闭防采集</li>
                    <li>关闭其他可能会影响API访问的插件（已知的包括千帆网的插件）</li>
                </ul>
    
                <h2>应用支持的论坛例子</h2>
                <ul>
                    <li> <Link href='https://bbs.nwpu.edu.cn'>西北工业大学三航四方</Link> </li>
                    <li> <Link href='https://www.mcbbs.net'>MCBBS（我的世界）</Link> </li>
                    <li> <Link href='https://keylol.com/'>keylol</Link> </li>
                </ul>
                <Alert variant="secondary">上面列出的应用和我们并无直接或间接的关系，并且不对本程序做任何形式的担保或者承诺。</Alert>
                <IntlLink to="/test-my-bbs/"
                    sx={{
                        color: "text",
                        underline: "none"
                    }}
                >
                    <Alert variant="highlight" sx={{
                        bg: "highlight",
                        mt: 2
    
                    }}>您可以通过本链接来检测我们的应用是否支持您的论坛</Alert>
                </IntlLink>
    
    
                <h2>功能列表</h2>
                <ul>
                    <li>应用层面</li>
                    <ul>
                        <li>支持密码以及网页验证</li>
                        <li>多论坛支持</li>
                        <li>多账号支持</li>
                        <li>深色模式支持</li>
                        <li>通知预览</li>
                        <li>新帖以及流行趋势展示</li>
                    </ul>
                    <li>论坛</li>
                    <ul>
                        <li>查阅版规、帖主</li>
                        <li>以标签或者分类来过滤帖子</li>
                        <li>查阅快速回复信息</li>
                    </ul>
                    <li>帖子</li>
                    <ul>
                        <li>浏览</li>
                        <li>只看某个用户发的帖子</li>
                        <li>时间排序</li>
                        <li>快速回复</li>
                        <li>给某位楼主回复</li>
                        <li>富文本渲染支持</li>
                        <li>内嵌的图像渲染支持（GIF不支持播放）</li>
                        <li>省流量模式</li>
                        <li>查看图片并下载附件</li>
                    </ul>
                    <li>发帖</li>
                    <ul>
                        <li>支持类型和标签输入</li>
                        <li>支持图片</li>
                        <li>支持表情包（需要论坛指定）</li>
                        <li>伪富文本支持</li>
                        <li>草稿箱自动备份</li>
                        <li>发帖失败自动备份内容</li>
                        <li>富文本支持</li>
                        <li>新增、删除以及修改草稿箱中的稿件内容</li>
                    </ul>
                    <li>通知</li>
                    <ul>
                        <li>系统推送</li>
                        <li>帖子更新或者回复</li>
                        <li>公共及私信查看及回复</li>
                    </ul>
                    <li>用户</li>
                    <ul>
                        <li>基本信息</li>
                        <li>渲染HTML格式的个人信息</li>
                        <li>查看好友以及他发表过的主题和帖子</li>
                        <li>支持播放GIF动画头像</li>
                    </ul>
                    <li>内嵌webview</li>
                    <ul>
                        <li>灵活的完成验证以及其他交互</li>
                        <li>完整支持论坛网页渲染（可能会有XSS风险）</li>
                    </ul>
                </ul>
            </Grid>
        )
    }
}

export default ZHFeatures