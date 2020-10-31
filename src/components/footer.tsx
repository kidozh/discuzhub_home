/** @jsx jsx */
import { Footer as ThemeFooter, Styled, Flex, useColorMode, jsx, Box, Link as GatsbyLink, Grid, Button } from "theme-ui"
import { useIntl, Link } from "gatsby-plugin-intl"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  zh: "简体中文",
  "zh-hk":"繁體中文（港澳）"
}

const Footer = () => {
  const intl = useIntl()

  return (
    <footer>
      <Grid>
        <Box
          variant='primary'
          sx={{
            justifyContent: `center`,
            alignItems: `center`,
            textAlign: `center`,
            borderRadius: 4,
          }}
        >
          <IntlContextConsumer
            sx={{
              justifyContent: `center`,
            }}
          >
            {({ languages, language: currentLocale }) =>
              languages.map(language => (
                <Styled.a

                  key={language}
                  onClick={() => changeLocale(language)}
                  sx={{
                    ml: 2,
                    color: currentLocale === language ? `primary` : `highlight`,
                    fontWeight: currentLocale === language ? `semibold` : `regular`
                  }}
                  style={{
                    // color: currentLocale === language ? `yellow` : `white`,

                    margin: 10,
                    textDecoration: currentLocale === language ? `underline` : `none`,
                    cursor: `pointer`,
                    focus: currentLocale === language ? true : false
                  }}
                >
                  {languageName[language]}
                </Styled.a>
              ))
            }
          </IntlContextConsumer>
        </Box>
      </Grid>

      <Grid
        columns={[1, 2, 2]}
        sx={{
          ml: 4,
          mt: 4,
          mr: 4,
          pb: 4,
        }}>
        <Box>
          <h3>{intl.formatMessage({ id: "footer.notice" })}</h3>
          <p>{intl.formatMessage({ id: "footer.copyright" })} &copy; {new Date().getFullYear()}. {intl.formatMessage({ id: "footer.copyright_rights_reserved" })}</p>
          <p>{intl.formatMessage({ id: "about.about_description" })}, {intl.formatMessage({ id: "footer.docs_with" })}
            <Link
              aria-label="Link to the CC BY 4.0"
              href="https://creativecommons.org/licenses/by/4.0"
            >CC BY 4.0
            </Link>
          </p>
        </Box>
        <Box>
          <h3>{intl.formatMessage({ id: "footer.links" })}</h3>
          <Grid columns={[1,2,2]}
                sx={{
                  '& >div':{
                    mr:4
                  }
                }}
          >

            <Box><Link to="/term_of_use/">{intl.formatMessage({ id: "nav.terms_of_use" })}</Link></Box>
            <Box><Link to="/privacy_policy/">{intl.formatMessage({ id: "nav.privacy" })}</Link></Box>
            <Box><Link to="/test-my-bbs/">{intl.formatMessage({ id: "test-my-bbs.title" })}</Link></Box>
            <Box><Link to="/open_source_licence/">{intl.formatMessage({ id: "open_source.open_source_title" })}</Link></Box>
            <Box><Link to="/compatibility-guide/">{intl.formatMessage({ id: "compatibility.compatibility_title" })}</Link></Box>
            <Box><Link to="/add-a-bbs-guide/">{intl.formatMessage({ id: "add_bbs.add_bbs_title" })}</Link></Box>
          </Grid>
        </Box>

      </Grid>



    </footer>
  )
}

export default Footer