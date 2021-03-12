/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import { Box, Grid, Image, Link, Text, Heading, Container, Flex, jsx } from "theme-ui"
import { injectIntl, useIntl } from "gatsby-plugin-intl"

import Logo  from "../../static/nightly/nightly-logo.svg"

import SponsorQRCode from "../../static/sponsor/alipay-sponsor.jpg"
import WechatCode from "../../static/sponsor/wechat-sponsor.png"

const SponsorPage = () => {
    const intl = useIntl()
    return(
        <Layout title={intl.formatMessage({ id: "sponsor.sponsor_title" })}>
            {/* Banner */}
            <Container sx={{
                p:0
                
            }}>
                <Grid sx={{
                    pb:[2,3,5],
                    pt:[2,3,5],
                    pl:[2,2,2],
                    pr:[2,2,2],
                    backgroundColor: "muted"
                }}>
                    <Box>
                        <Text 
                        sx={{
                            textAlign:["center","center"]
                            
                            }}>
                            <Image src={Logo} sx={{
                                width:[32,48,64],
                                height:[32,48,64]
                            }}/>
                        </Text>
                        <Heading as="h1" sx={{
                            textAlign:"center",
                            fontWeight:600
                            }}>
                            {intl.formatMessage({ id: "sponsor.sponsor_title" })}
                        </Heading>
                        <Text as="p" sx={{
                            textAlign:"center",
                            fontWeight:300,
                            mt:[1,2,2]
                        }}>
                            {intl.formatMessage({ id: "sponsor.sponsor_description" })}
                        </Text>
                    </Box>
                </Grid>
                {/* downloadable contents */}
                <Grid columns={[1]} sx={{
                    pt:[4,4,6],
                    pl:[4,4,4],
                    pr:[4,4,4],
                    pb:[2,2,2],
                    textAlign:"center"
                }}>
                    <Box>
                        <Text as="h1" sx={{
                            
                        }}>{intl.formatMessage({ id: "sponsor.alipay_title" })}</Text>
                        <Text as="p" textAlign="center">{intl.formatMessage({ id: "sponsor.alipay_subtitle" })}</Text>
                    </Box>
                </Grid>
                <Grid columns={[1,'1fr 1fr','1fr 1fr']}
                    sx={{
                        
                        pb:[4,4,6]
                    }}
                >
                    <Box>
                        
                        <Text sx={{
                            textAlign:["center","right"]
                        }}>
                            <Image src={SponsorQRCode} sx={{
                            width:[256,384,512],
                            
                        }} />
                        </Text>
                        
                    </Box>
                    <Box>
                    <Text sx={{
                            textAlign:["center","left"]
                        }}>
                            <Image src={WechatCode} sx={{
                            width:[256,384,512],
                            
                        }} />
                        </Text>
                    </Box>
                    
                    
                </Grid>

            </Container>
        </Layout>
    )
}




export default SponsorPage