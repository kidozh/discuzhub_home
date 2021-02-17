/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import { Box, Grid, Image, Link, Text, Heading, Container, Flex, jsx } from "theme-ui"
import { injectIntl, useIntl } from "gatsby-plugin-intl"

import Logo  from "../../static/nightly/nightly-logo.svg"
import GithubActionLogo from "../../static/nightly/actions-icon-actions.svg"
import BugLogo from "../../static/nightly/bug-in-app.svg"

const NightlyPage = () => {
    const intl = useIntl()
    return(
        <Layout title={intl.formatMessage({ id: "nightly_version.nightly" })}>
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
                            {intl.formatMessage({ id: "nightly_version.nightly_title" })}
                        </Heading>
                        <Text as="p" sx={{
                            textAlign:"center",
                            fontWeight:300,
                            mt:[1,2,2]
                        }}>
                            {intl.formatMessage({ id: "nightly_version.nightly_subtitle" })}
                        </Text>
                    </Box>
                </Grid>
                {/* downloadable contents */}
                <Grid columns={[1,'1fr 3fr 1fr','1fr 4fr 1fr']}
                    sx={{
                        pt:[4,4,6],
                        pl:[4,4,4],
                        pr:[4,4,4]
                    }}
                >
                    <Box>
                        
                        <Text sx={{
                            textAlign:["left","right"]
                        }}>
                            <Image src={GithubActionLogo} sx={{
                            width:[32,48,64],
                            height:[32,48,64]
                        }} />
                        </Text>
                        
                    </Box>
                    <Box>
                        <Heading as="h2" sx={{
                            fontWeight:700
                        }}>{intl.formatMessage({ id: "nightly_version.nightly_build_title" })}</Heading>
                        <Text as="p" sx={{
                            fontWeight:400,
                            mb:[4,4,4]
                        }}>{intl.formatMessage({ id: "nightly_version.nightly_build_description" })}</Text>
                        <Text as="p" sx={{

                        }}>
                            
                            <small >{intl.formatMessage({ id: "nightly_version.nightly_policy" })} 
                            <Link sx={{ml:1,mr:1}} href="/privacy_policy/">{intl.formatMessage({ id: "privacy.privacy_policy" })} </Link> {intl.formatMessage({ id: "nightly_version.and" })} 
                            <Link sx={{ml:1}} href="/term_of_use/">{intl.formatMessage({ id: "term_of_service.term_of_service" })}</Link></small>
                            
                        </Text>
                        <Text as="p" sx={{
                            fontWeight:300
                            
                        }}>
                            <small>
                            {intl.formatMessage({ id: "nightly_version.nightly_build_annotation" })} 
                            </small>
                        </Text>
                    </Box>
                    <Box>
                        <Link href="https://github.com/kidozh/DiscuzHub/actions" sx={{
                            backgroundColor:"primary",
                            p:[2,3,3],
                            pl:[4,4,4],
                            pr:[4,4,4],
                            color:"white",
                            borderRadius:[8,8,8],
                            ":hover":{
                                color:"highlight",
                                backgroundColor:"accent",
                                textDecoration: "none",
                                transition: ".35s all ease-in"
                            }
                        }}>{intl.formatMessage({ id: "nightly_version.get_from_github" })} </Link>
                    </Box>
                </Grid>
                <Grid columns={[1,1,1]} sx={{
                    mt:[4,4,4],
                    mb:[4,4,4],
                    pl:[2,4,4],
                    pr:[2,4,4]
                }}>
                    <Box>
                        <Text sx={{
                            textAlign:"center"
                        }}>
                            <Image src={BugLogo} sx={{
                                width:[32,32,32]
                            }}/>
                        </Text>
                    </Box>
                    <Box>
                    <Text as="h3" sx={{
                            textAlign:"center"
                            
                        }}>
                            {intl.formatMessage({ id: "nightly_version.report_bug_title" })}
                    </Text>
                    <Text as="p" sx={{
                            textAlign:"center",
                            fontWeight: 300
                        }}>
                        {intl.formatMessage({ id: "nightly_version.report_bug_description" })}
                        
                    </Text>
                    <Text as="p" sx={{
                            textAlign:"center",
                            mt:[2,4,4]
                            
                        }}><Link href="https://github.com/kidozh/DiscuzHub/issues/new">{intl.formatMessage({ id: "nightly_version.report_bug_in_issue" })}</Link></Text>
                    <Text as="p" sx={{
                            textAlign:"center"
                            
                        }}><Link href="mailto:kidozh@gmail.com">{intl.formatMessage({ id: "nightly_version.report_bug_via_email" })}</Link></Text>
                    </Box>
                </Grid>

            </Container>
        </Layout>
    )
}




export default NightlyPage