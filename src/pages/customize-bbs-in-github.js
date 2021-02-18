import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'react-intl';
import Layout from "../components/doc-layout"
import ZH from "../../sections/customize_app_github_action/zh"
import EN from "../../sections/customize_app_github_action/en"
import { Box, jsx } from "theme-ui"


const TermsPage = () => {

    const intl = useIntl()
    
    return (
        <Layout

        
        subject={intl.formatMessage({ id: "customize.customize_github_title" })}>
            {intl.locale === "en" && <EN/>}
            {intl.locale === "zh" && <ZH/>}
            {intl.locale === "zh-hk" && <ZH/>}


        </Layout>
    )

}


export default TermsPage