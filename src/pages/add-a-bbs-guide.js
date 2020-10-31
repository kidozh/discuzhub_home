import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'react-intl';
import DocLayout from "../components/doc-layout"
import EN from "../../sections/add_a_bbs/en"
import ZH from "../../sections/add_a_bbs/zh"
import ZHHK from "../../sections/add_a_bbs/zh-hk"
import { Box, jsx } from "theme-ui"

const TermsPage = () => {

    const intl = useIntl()
    const config = {
        "text": intl.formatMessage({ id: "back_to_top" })
    }
    return (
        <DocLayout
        sx={{
            mb:6
        }}
        
        subject={intl.formatMessage({ id: "compatibility.compatibility_title" })}>
            {intl.locale === "en" && <EN/>}
            {intl.locale === "zh" && <ZH/>}
            {intl.locale === "zh-hk" && <ZHHK/>}


        </DocLayout>
    )

}


export default TermsPage