import React from "react"

import Layout from "../components/layout"
import {  Box, Grid, Heading } from 'theme-ui'
import { injectIntl } from "gatsby-plugin-intl"

class notFoundPage extends React.Component {
    constructor(props, intl) {
        super(props)
    }

    render() {
        const { intl } = this.props;
        return (
            <Layout>
                <Grid>
                    <Box sx={{
                      textAlign:"center",
                      mt:[4,4,4],
                      mb:[4,4,4],
                      pl:[1,2,4],
                      pr:[1,2,4]
                    }}>
                      <Heading as="h1">{intl.formatMessage({id:"notfound.header"})}</Heading>
                      <Heading as="p" sx={{
                        mt:4,
                        fontWeight: 400
                      }}>{intl.formatMessage({id:"notfound.description"})}</Heading>
                    </Box>
                </Grid>
            </Layout>
        )
    }
}

export default injectIntl(notFoundPage)