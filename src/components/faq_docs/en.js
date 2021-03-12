import React from "react"
import { Grid, Link } from 'theme-ui'

import FAQCard from "../questionAndAnswerCard"

export default ({ children }) => (
    <Grid>
        {children}
        
        <FAQCard subject="What's the Support requirements?">
            <ul>
                <li>Discuz! cored and version &gt;<b>X3.2</b></li>
                <li>API version &gt;<b>4</b></li>
                <li>Open mobile page and close anti-collection module</li>
                <li>Close other plugin that may interupt native API(eg. QianFan Plugin)</li>
            </ul>
        </FAQCard>

        <FAQCard subject="How to make my discuz site compatible with the app?">
            <ol>
                <li>Turn on mobile page</li>
                <li>Turn off anti-collection module</li>
                <li>Remove the plugins which may interupt API</li>
            </ol>
        </FAQCard>

        <FAQCard subject="Are there any ads? And will there be?">
            <p>In forseable time, there is no ad projects. If some ads is added to app, we will notice in <Link href="/blog/">developer blog</Link> and our <Link href="/term_of_use/">terms of services</Link></p>
        </FAQCard>

        <FAQCard subject="Should the developer be responsible for the use of discuzhub?">
            <p>In short, no.</p>
            <p>As you may know, our app is licenced <Link href="https://opensource.org/licenses/MIT">MIT</Link>. In MIT License, the software is provided without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement.</p>
        </FAQCard>

        <FAQCard subject="How to donate the developer?">
            <p>You can sponsor us via wechat or alipay in <a href="/sponsor-us/">Sponsor us</a>.</p>
        </FAQCard>


    </Grid>
)