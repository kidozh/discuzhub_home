import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'gatsby-plugin-intl';
import DocLayout from "../components/doc-layout"
import EnTerms from "../../sections/term_of_services/en"
import ZhTerms from "../../sections/term_of_services/zh"
import ZhHkTerms from "../../sections/term_of_services/zh-hk"
import { Box, jsx } from "theme-ui"


const TermsPage = () => {

    const intl = useIntl()
    return (
        <DocLayout

        
        subject={intl.formatMessage({ id: "term_of_service.term_of_service" })}>
            {intl.locale === "en" && <EnTerms />}
            {intl.locale === "zh" && <ZhTerms/>}
            {intl.locale === "zh-hk" && <ZhHkTerms/>}


        </DocLayout>
    )

}


export default TermsPage