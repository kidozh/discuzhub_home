import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'gatsby-plugin-intl';
import Layout from "../components/doc-layout"
import ZH from "../../sections/customize_app_locally/zh"
import ZHHK from "../../sections/customize_app_locally/zh-hk"
import EN from "../../sections/customize_app_locally/en"
import { Box, jsx } from "theme-ui"


const TermsPage = () => {

    const intl = useIntl()
    
    return (
        <Layout

        
        subject={intl.formatMessage({ id: "customize.customize_locally_title" })}>
            {intl.locale === "en" && <EN/>}
            {intl.locale === "zh" && <ZH/>}
            {intl.locale === "zh-hk" && <ZHHK/>}


        </Layout>
    )

}


export default TermsPage