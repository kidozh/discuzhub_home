import React from "react"
import { Card, Box, Grid, Image, Link, Alert } from 'theme-ui'
import { Link as IntlLink } from "gatsby-plugin-intl"


import FAQCard from "../questionAndAnswerCard"

export default ({ children } )=> (

<Grid>

    {children}



    <FAQCard subject="應用對於論壇有何要求？">

        <ul>

            <li>Discuz！為覈心且Discuz版本&gt;<b>X3.2</b></li>

            <li>API版本&gt;<b>4</b></li>

            <li>打開論壇移動頁面並關閉防採集</li>

            <li>關閉其他可能會影響API訪問的挿件（已知的包括千帆網的挿件）</li>

        </ul>

    </FAQCard>



    <FAQCard subject="我現在已經有一個Discuz！的論壇了，如何相容應用？">

        <ol>

            <li>打開論壇的手機版功能</li>

            <li>關閉論壇的防採集設定</li>

            <li>移除掉一些可能會影響API訪問的挿件（例如千帆網挿件）</li>

        </ol>

    </FAQCard>



    <FAQCard subject="現在應用有廣告嗎？以後會有嗎？">

        <p>現時來說我們沒有向應用植入廣告的計畫。未來如果我們有相關的計畫的話，我們將會在我們的<Link href="/blog/">開發者部落格</Link>、<Link href="/term_of_services/">服務協定</Link>中向您說明情况</p>

    </FAQCard>



    <FAQCard subject="開發者會為使用提供擔保或者負責嘛？">

        <p>不會。</p>

        <p>我們的應用使用的是開源協定<Link href="https://opensource.org/licenses/MIT">MIT</Link>。在MIT協定中，本軟件按"原樣"提供，不提供任何形式的明示或暗示的保證，包括但不限於對適銷性，特定目的的適用性和非侵權性的保證。</p>

    </FAQCard>



    <FAQCard subject="如何資助開發者？">

        <p>本項目始源也是我校的一個論壇的手機版的需求，開源出來也是為了讓我用爪機和論壇的沙雕群友對線。囙此現時我並沒有接受資助的打算。<del>祖安人可以貢獻一些祖安段子</del></p>

    </FAQCard>




</Grid>

)