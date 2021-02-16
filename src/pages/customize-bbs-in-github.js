import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'react-intl';
import Layout from "../components/doc-layout"
import ZH from "../../sections/customize_your_app/zh"
import { Box, jsx } from "theme-ui"


const TermsPage = () => {

    const intl = useIntl()
    
    return (
        <Layout

        
        subject={intl.formatMessage({ id: "customize.customize_locally_title" })}>
            <ZH/>


        </Layout>
    )

}


export default TermsPage