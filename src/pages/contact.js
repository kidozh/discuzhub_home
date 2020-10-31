import React from "react"

import DocLayout from "../components/doc-layout"
import { Card, jsx, Box, Grid, Image, Link, Alert, Container } from 'theme-ui'


import { Link as IntlLink, injectIntl } from "gatsby-plugin-intl"

import LogoImage from "../../static/logo.svg"
import telescopeImage from "../../static/features/telescope.svg"




class notFoundPage extends React.Component {
    constructor(props, intl) {
        super(props)
    }

    render() {
        const { intl } = this.props;
        return (
            <DocLayout subject={intl.formatMessage({ id: "contact.contact" })}>

                <Grid columns={[1, 2, 2]} ml={4} mr={4} mb={4}
                    sx={{
                        alignContent: 'center'
                    }}
                >
                    <Box>
                        <Link href="mailto:kidozh@gmail.com">
                        <Container>
                            <Card sx={{
                                p:2
                            }}>
                                <Image width={48} height={48} src={telescopeImage}/>
                                <h2>{intl.formatMessage({ id: "contact.email" })}</h2>
                                <p>kidozh@gmail.com</p>
                            </Card>

                        </Container>
                        </Link>
                        
                    </Box>

                    <Box>
                    <Link href="https://github.com/kidozh/discuzhub">
                        <Container>
                            <Card sx={{
                                p:2
                            }}>
                                <Image width={48} height={48} src={LogoImage}/>
                                <h2>{intl.formatMessage({ id: "contact.github" })}</h2>
                                <p sx={{
                                    color:"text"
                                }}>DiscuzHub@github</p>
                            </Card>

                        </Container>
                        </Link>
                    </Box>

                </Grid>
            </DocLayout>
        )
    }
}

export default injectIntl(notFoundPage)