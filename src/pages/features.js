import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'gatsby-plugin-intl';
import DocLayout from "../components/doc-layout"
import ENFeatures from "../components/features_docs/en"
import ZHFeatures from "../components/features_docs/zh"
import ZHHKFeatures from "../components/features_docs/zh-hk"
import { Box, jsx } from "theme-ui"



const FeaturePage = () => {

    const intl = useIntl()
    const config = {
        "text": intl.formatMessage({ id: "back_to_top" })
    }
    return (
        <DocLayout subject={intl.formatMessage({ id: "feature.features" })}>
            {intl.locale === "en" && <ENFeatures></ENFeatures>}
            {intl.locale === "zh" && <ZHFeatures></ZHFeatures>}
            {intl.locale === "zh-hk" && <ZHHKFeatures/>}


        </DocLayout>
    )

}


export default FeaturePage