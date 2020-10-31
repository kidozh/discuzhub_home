import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'react-intl';
import Layout from "../components/doc-layout"
import EN from "../../sections/term_of_services/en"
import ZH from "../../sections/term_of_services/zh"
import ZHHK from "../../sections/term_of_services/zh-hk"
import { Box, jsx } from "theme-ui"


const TermsPage = () => {

    const intl = useIntl()
    const config = {
        "text": intl.formatMessage({ id: "back_to_top" })
    }
    return (
        <Layout

        
        subject={intl.formatMessage({ id: "term_of_service.term_of_service" })}>
            {intl.locale === "en" && <EN/>}
            {intl.locale === "zh" && <ZH/>}
            {intl.locale === "zh-hk" && <ZHHK/>}


        </Layout>
    )

}


export default TermsPage