import React from "react"
import { IntlProvider, FormattedMessage, useIntl, injectIntl } from 'react-intl';
import EN from "../../sections/privacy_policy/en"
import ZH from "../../sections/privacy_policy/zh"
import ZHHK from "../../sections/privacy_policy/zh-hk"
import { Box, jsx } from "theme-ui"
import DocLayout from "../components/doc-layout"


const PrivacyPage = () => {

    const intl = useIntl()

    return (
        <DocLayout
          subject={intl.formatMessage({ id: "privacy.privacy_policy" })}>

            {intl.locale === "en" && <EN/>}
            {intl.locale === "zh" && <ZH/>}
            {intl.locale === "zh-hk" && <ZHHK/>}


        </DocLayout>
    )

}


export default PrivacyPage