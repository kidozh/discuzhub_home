import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'react-intl';
import DocLayout from "../components/doc-layout"
import EN from "../components/faq_docs/en"
import ZH from "../components/faq_docs/zh"
import ZHHK from "../components/faq_docs/zh-hk"
import {Box,jsx, Grid} from "theme-ui"
// import BackToTop from "react-back-top"


class FAQPage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { intl } = this.props;
        const config={
            "text":intl.formatMessage({ id: "back_to_top" })
        }
        return (
            <DocLayout subject={intl.formatMessage({ id: "faq.faq_full" })}>
                <Grid sx={{
                    mb:4
                }}>
                    {intl.locale === "en" && <EN />}
                    {intl.locale === "zh" && <ZH />}
                    {intl.locale === "zh-hk" && <ZHHK />}

                </Grid>
                
                {/* <BackToTop text={intl.formatMessage({ id: "back_to_top" })} 
                sx={{
                    bg:"primary"
                }}
                /> */}

            </DocLayout>
        )
    }
}


export default injectIntl(FAQPage)