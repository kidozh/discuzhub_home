import React from "react"
import {  useIntl } from 'gatsby-plugin-intl';
import DocLayout from "../components/doc-layout"
import EN from "../../sections/add_a_bbs/en"
import ZH from "../../sections/add_a_bbs/zh"
import ZHHK from "../../sections/add_a_bbs/zh-hk"

const AddDiscuzGuidePage = () => {

    const intl = useIntl()
    return (
        <DocLayout
        sx={{
            mb:6
        }}
        
        subject={intl.formatMessage({ id: "add_bbs.add_bbs_title" })}>
            {intl.locale === "en" && <EN/>}
            {intl.locale === "zh" && <ZH/>}
            {intl.locale === "zh-hk" && <ZHHK/>}


        </DocLayout>
    )

}


export default AddDiscuzGuidePage