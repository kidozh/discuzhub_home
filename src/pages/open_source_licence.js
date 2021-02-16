import React from "react"
import {  useIntl } from 'react-intl';
import DocLayout from "../components/doc-layout"
import { Box, Grid, Heading, Text, Badge } from "theme-ui"

const OpenLibCard = ({ link, title, licence, children}) => (
  <Grid as="a"
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        bg="cornflowerblue"
        sx={{
            width: `100%`,
            boxShadow: `lg`,
            position: `relative`,
            textDecoration: `none`,
            borderRadius: `lg`,
            px: 4,
            py: [4, 5],
            color: `white`,
            // background: bg || `none`,
            transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
            "&:hover": {
                color: `white !important`,
                transform: `translateY(-5px)`,
                boxShadow: `xl`,
            },
        }}
  >
      <Grid>
          <Heading as="h1" sx={{
              wordBreak:"break-all"
          }}>{title}<Badge variant='accent' ml={1}>{licence}</Badge></Heading>
          <Box>
              {children}
          </Box>
      </Grid>
  </Grid>
)

const OpenSourcePage = () => {

    const intl = useIntl()

    return (
        <DocLayout
        sx={{
            mb:6
        }}
        
        subject={intl.formatMessage({ id: "open_source.open_source_title" })}>
            <Grid>
                <Heading as="h1" sx={{
                    fontWeight : 400,
                    color: "primary",
                    mt:4
                }}>
                    {intl.formatMessage({ id: "open_source.open_source_subtitle" })}
                    </Heading>
            </Grid>
            <Grid columns={[1,3,3]} mt={4}>
                <Box >
                    <OpenLibCard 
                    title="Material Components for Android"
                    licence="Apache 2.0"
                    link="https://github.com/material-components/material-components-android">
                        Material Components for Android is a drop-in replacement for Android's Design Support Library.
                    </OpenLibCard>
                </Box>

                <Box>
                    <OpenLibCard 
                    title="Glide"
                    licence="BSD, part MIT and Apache 2.0"
                    link="https://bumptech.github.io/glide/">
                        An image loading and caching library for Android focused on smooth scrolling.
                    </OpenLibCard>
                </Box>

                <Box>
                    <OpenLibCard 
                    title="PersistentCookieJar"
                    licence="Apache 2.0"
                    link="https://github.com/franmontiel/PersistentCookieJar">
                        A persistent CookieJar implementation for OkHttp 3 based on SharedPreferences.
                    </OpenLibCard>
                </Box>

                <Box>
                    <OpenLibCard 
                    title="jsoup"
                    licence="MIT"
                    link="https://jsoup.org/">
                        jsoup: Java HTML Parser, with best of DOM, CSS, and jquery 
                    </OpenLibCard>
                </Box>

                <Box>
                    <OpenLibCard 
                    title="Toasty"
                    licence="LGPL-3.0"
                    link="https://github.com/GrenderG/Toasty">
                        The usual Toast, but with steroids 💪
                    </OpenLibCard>
                </Box>

                <Box>
                    <OpenLibCard 
                    title="OkHttp"
                    licence="Apache-2.0"
                    link="https://square.github.io/okhttp/">
                        Square’s meticulous HTTP client for Java and Kotlin.
                    </OpenLibCard>
                </Box>
                
            </Grid>
            <Grid bg="primary" sx={{
                mb:4,
                p:2,
                pl:4,
                pr:4,
                borderRadius:8,
                mt:4


            }}>
                <Box>
                    <Text as="h1" sx={{
                        color:"white",
                        fontWeight:"400",
                        wordBreak:"break-all"
                    }} >{intl.formatMessage({ id: "open_source.discuzHub_licence_description" })}</Text>
                </Box>
            </Grid>


        </DocLayout>
    )

}


export default OpenSourcePage