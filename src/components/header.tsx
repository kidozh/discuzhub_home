/** @jsx jsx */
import {Styled, jsx, BaseStyles, Flex, Container, Box, NavLink,useColorMode, Button, Image, Grid} from 'theme-ui'
// @ts-ignore
import React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { IntlContextConsumer, changeLocale, Link as IntlLink } from "gatsby-plugin-intl"
import Logo from "../../static/logo.svg"
import GatsbyImage from "gatsby-image"

const languageName = {
  en: "English",
  zh: "简体中文",
  "zh-hk":"繁體中文（港澳）"
}


const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }
  const intl = useIntl()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )


  return (
      <Container as="header"
        sx={{
          display: 'flex',
          alignItems: 'center',
          variant: 'styles.header',
        }}
      >
        <Grid columns={[1,"6fr 4fr"]}>
          <Box>
            <Image src={Logo}
                   ratio={1}
                   sx={{
                     width:32,
                     verticalAlign:"middle"

                   }} />
            <IntlLink as={GatsbyLink} to="/" sx={{
              variant: 'styles.navlink',
              p: 2,
              fontSize:4,
              fontWeight:400
            }}>{site.siteMetadata.title}</IntlLink>
          </Box>
          <Box >
            <Grid columns={[1,6,6]} as="nav" sx={{
              alignContent:["left","right","right"],
              textAlign:["left","center","center"],
              justifyContent:"right"
            }}>
              <IntlLink as={NavLink} to='/dev-blog'
                        sx={{
                          variant: 'styles.navlink',
                          p: 2,
                        }}>
                <FormattedMessage id="nav.blog" />
              </IntlLink>
              <IntlLink as={NavLink} to='/features'
                        sx={{
                          variant: 'styles.navlink',
                          p: 2,
                        }}>
                <FormattedMessage id="nav.features" />
              </IntlLink>
              <IntlLink as={NavLink} to='/faq'
                        sx={{
                          variant: 'styles.navlink',
                          p: 2,
                        }}>
                <FormattedMessage id="nav.faq" />
              </IntlLink>
              <IntlLink as={NavLink} to='/sponsor-us/'
                        sx={{
                          variant: 'styles.navlink',
                          p: 2,
                        }}>
                <FormattedMessage id="sponsor.sponsor" />
              </IntlLink>
              <IntlLink as={NavLink} to='/contact'
                        sx={{
                          variant: 'styles.navlink',
                          p: 2,
                        }}>
                <FormattedMessage id="nav.contact" />
              </IntlLink>
              <Button
                sx={{
                  variant: `buttons.toggle`,
                  hidden:[true,false,false]
                }}
                onClick={toggleColorMode}
                type="button"
                aria-label="Toggle dark mode"
              >
                {isDark ? intl.formatMessage({ id: "footer.light" }) : intl.formatMessage({ id: "footer.dark" })}
              </Button>
            </Grid>
          </Box>
        </Grid>



        {/* LangKey */}


      </Container>

  )
}

export default Header
