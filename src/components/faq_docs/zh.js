import React from "react"
import { Card, Box, Grid, Image, Link, Alert } from 'theme-ui'
import { Link as IntlLink } from "gatsby-plugin-intl"


import FAQCard from "../questionAndAnswerCard"

export default ({ children }) => (
    <Grid>
        {children}
        
        <FAQCard subject="应用对于论坛有何要求？">
          <ul>
            <li>Discuz！为核心且Discuz版本&gt;<b>X3.2</b></li>
            <li>API版本&gt;<b>4</b></li>
            <li>打开论坛移动页面并关闭防采集</li>
            <li>启动掌上论坛插件</li>
            <li>关闭其他可能会影响API访问的插件（已知的包括千帆网的插件）</li>
          </ul>
        </FAQCard>

        <FAQCard subject="我现在已经有一个Discuz！的论坛了，如何兼容应用？">
            <ol>
                <li>打开论坛的手机版功能</li>
                <li>关闭论坛的防采集设置</li>
                <li>移除掉一些可能会影响API访问的插件（例如千帆网插件）</li>
            </ol>
        </FAQCard>

        <FAQCard subject="现在应用有广告吗？以后会有吗？">
            <p>目前来说我们没有向应用植入广告的计划。未来如果我们有相关的计划的话，我们将会在我们的<Link href="/blog/">开发者博客</Link>、<Link href="/term_of_use/">服务协议</Link>中向您说明情况</p>
        </FAQCard>

        <FAQCard subject="开发者会为使用提供担保或者负责嘛？">
            <p>不会。</p>
            <p>我们的应用使用的是开源协议<Link href="https://opensource.org/licenses/MIT">MIT</Link>。 在MIT协议中, 本软件按“原样”提供，不提供任何形式的明示或暗示的保证，包括但不限于对适销性，特定目的的适用性和非侵权性的保证。</p>
        </FAQCard>

        <FAQCard subject="如何资助开发者？">
            <p>本项目始源也是我校的一个论坛的手机版的需求，开源出来也是为了让我用爪机和论坛的沙雕群友对线。因此目前我并没有接受资助的打算。<del>祖安人可以贡献一些祖安段子</del></p>
        </FAQCard>

        <FAQCard subject="3DM论坛为什么不显示帖子回复内容？">
            <p>3DM论坛给出的API中似乎屏蔽了对于回复内容的请求，因此应用无法显示帖子的回复内容。</p>
        </FAQCard>


    </Grid>
)