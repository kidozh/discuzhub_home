import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'gatsby-plugin-intl';
import En from "../../sections/privacy_policy/en"
import Zh from "../../sections/privacy_policy/zh"
import ZhHk from "../../sections/privacy_policy/zh-hk"
import { Box, jsx } from "theme-ui"
import DocLayout from "../components/doc-layout"


const PrivacyPage = () => {

    const intl = useIntl()

    return (
        <DocLayout
          subject={intl.formatMessage({ id: "privacy.privacy_policy" })}>
            
            {intl.locale === "en" && <En/>}
            {intl.locale === "zh" && <Zh/>}
            {intl.locale === "zh-hk" && <ZhHk/>}


        </DocLayout>
    )

}


export default PrivacyPage