import React from "react"
import { Card, Box, Grid, Image, Link, Alert, jsx, Message } from 'theme-ui'
import quickStarImage from "../../../static/features/quick-star.svg"
import telescopeImage from "../../../static/features/telescope.svg"
import galaxyImage from "../../../static/features/galaxy.svg"
import bigDipperImage from "../../../static/features/big-dipper.svg"
import dayNightShiftImage from "../../../static/features/day-night-shift.svg"
import sunImage from "../../../static/features/sun.svg"
import { Link as IntlLink } from "gatsby-plugin-intl"

class ZHFeatures extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Grid>
                <Message>
                這個文本翻譯與簡體中文版。若您需要獲得更準確的描述,請選擇簡體中文版描述。
                </Message>
                <h3>支持Discuz的輕量級Android應用</h3>
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
                                <p>無廣告干擾您的閱讀</p>
                            </Card>
                        </animateDiv>

                    </Box>
                    <Box>
                        <Card sx={{

                        }}>
                            <Image src={telescopeImage} />
                            <h2 color="primary">強力</h2>
                            <p>支持絕大多數的Discuz！論壇</p>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{

                        }}>
                            <Image src={galaxyImage} />
                            <h2 color="primary">開源</h2>
                            <p>以MIT協議開源於Github上</p>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{

                        }}>
                            <Image src={bigDipperImage} />
                            <h2 color="primary">安全</h2>
                            <p>應用不會存儲您的任何密碼信息</p>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{

                        }}>
                            <Image src={dayNightShiftImage} />
                            <h2 color="primary">Android 10支持</h2>
                            <p>我們不會向您索取任何敏感權限</p>
                        </Card>
                    </Box>
                    <Box>
                        <Card sx={{
                        }}>
                            <Image src={sunImage} />
                            <h2 color="primary">輕量</h2>
                            <p>應用程序包大小 &lt; 5MB</p>
                        </Card>
                    </Box>

                </Grid>
                <h2>論壇支持要求</h2>

                <ul>

                    <li>Discuz！為覈心且Discuz版本&gt;<b>X3.2</b></li>

                    <li>API版本&gt;<b>4</b></li>
                    <li>安裝應用“掌上論壇”（X3.4版本自帶並默認開啟）</li>

                    <li>打開論壇移動頁面並關閉防採集</li>

                    <li>關閉其他可能會影響API訪問的挿件（已知的包括千帆網的挿件）</li>

                </ul>

                <h2>應用支持的論壇例子</h2>
                <ul>
                    <li> <Link href='https://bbs.nwpu.edu.cn'>西北工業大學三航四方</Link> </li>
                    <li> <Link href='https://www.mcbbs.net'>MCBBS（我的世界）</Link> </li>
                    <li> <Link href='https://keylol.com/'>keylol</Link> </li>
                </ul>
                <Alert variant="secondary">上面列出的應用和我們並無直接或間接的關係，並且不對本程式做任何形式的擔保或者承諾。</Alert>
                <IntlLink to="/test-my-bbs/"
                    sx={{
                        color: "text",
                        underline: "none"
                    }}
                >
                    <Alert variant="highlight" sx={{
                        bg: "highlight",
                        mt: 2

                    }}>您可以通過本鏈接來檢測我們的應用是否支持您的論壇</Alert>
                </IntlLink>


                <h2>功能清單</h2>
                <ul>
                    <li>應用層面</li>
                    <ul>
                        <li>支持密碼以及網頁驗證</li>
                        <li>多論壇支持</li>
                        <li>多帳號支持</li>
                        <li>深色模式支持</li>
                        <li>通知預覽</li>
                        <li>新帖以及流行趨勢展示</li>
                    </ul>
                    <li>論壇</li>
                    <ul>
                        <li>查閱版規、帖主</li>
                        <li>以標籤或者分類來過濾帖子</li>
                        <li>查閱快速回复信息</li>
                    </ul>
                    <li>帖子</li>
                    <ul>
                        <li>瀏覽</li>
                        <li>只看某個用戶發的帖子</li>
                        <li>時間排序</li>
                        <li>快速回复</li>
                        <li>給某位樓主回复</li>
                        <li>富文本渲染支持</li>
                        <li>內嵌的圖像渲染支持（GIF不支持播放）</li>
                        <li>省流量模式</li>
                        <li>查看圖片並下載附件</li>
                    </ul>
                    <li>發帖</li>
                    <ul>
                        <li>支持類型和標籤輸入</li>
                        <li>支持圖片</li>
                        <li>支持表情包（需要論壇指定）</li>
                        <li>偽富文本支持</li>
                        <li>草稿箱自動備份</li>
                        <li>發帖失敗自動備份內容</li>
                        <li>富文本支持</li>
                        <li>新增、刪除以及修改草稿箱中的稿件內容</li>
                    </ul>
                    <li>通知</li>
                    <ul>
                        <li>系統推送</li>
                        <li>帖子更新或者回复</li>
                        <li>公共及私信查看及回复</li>
                    </ul>
                    <li>用戶</li>
                    <ul>
                        <li>基本信息</li>
                        <li>渲染HTML格式的個人信息</li>
                        <li>查看好友以及他發表過的主題和帖子</li>
                        <li>支持播放GIF動畫頭像</li>
                    </ul>
                    <li>內嵌webview</li>
                    <ul>
                        <li>靈活的完成驗證以及其他交互</li>
                        <li>完整支持論壇網頁渲染（可能會有XSS風險）</li>
                    </ul>
                </ul>
            </Grid>
        )
    }
}

export default ZHFeatures