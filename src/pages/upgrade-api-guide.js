import React from "react"
import {  useIntl } from 'react-intl';
import DocLayout from "../components/doc-layout"
import EN from "../../sections/compatibility_guide/en"
import ZH from "../../sections/compatibility_guide/zh"
import ZHHK from "../../sections/compatibility_guide/zh-hk"

const UpgradeAPIPage = () => {

    const intl = useIntl()
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


export default UpgradeAPIPage