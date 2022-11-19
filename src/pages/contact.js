import React from "react"

import DocLayout from "../components/doc-layout"
import { Card, jsx, Box, Grid, Image, Link, Container } from 'theme-ui'


import { Link as IntlLink, injectIntl, useIntl } from "gatsby-plugin-intl"

import LogoImage from "../../static/logo.svg"
import telescopeImage from "../../static/features/telescope.svg"




const ContactPage = () => {
    const intl = useIntl()
    return (
        <DocLayout subject={intl.formatMessage({ id: "contact.contact" })}>

            <Grid columns={[1, 3, 3]} ml={4} mr={4} mb={4}
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
                <Box>
                <Link href="https://weibo.com/u/7436177109">
                    <Container>
                        <Card sx={{
                            p:2
                        }}>
                            <Image width={48} height={48} src={LogoImage}/>
                            <h2>{intl.formatMessage({ id: "contact.weibo" })}</h2>
                            <p sx={{
                                color:"text"
                            }}>谈坛app</p>
                        </Card>

                    </Container>
                    </Link>
                </Box>

            </Grid>
        </DocLayout>
    )
}

export default ContactPage