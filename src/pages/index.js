/** @jsx jsx */
import React from "react"
import Layout from "../components/layout"
import { Box, Grid, Image, Link, Text, Heading, Container, Flex, jsx } from "theme-ui"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Bridge3D from "../../static/index/3d-bridges.svg"
import SelectiveLaser from "../../static/index/selective-laser-sintering.svg"
import Tech3D from "../../static/index/3d-technology.svg"
import RocketEngine3D from "../../static/index/3d-rocket-engine.svg"
import Github from "../../static/index/github-white.svg"

import PlayBadgeZh from "../../static/play-store/google-play-badge_zh_CN.png"
import PlayBadgeEn from "../../static/play-store/google-play-badge_en.png"

class InfoCard extends React.Component {

  render() {
    return (
      <Grid columns={[1, 2, 2]} gap={4} sx={{
        pb: 4,
        borderBottomColor: 'muted',
        borderBottomWidth: 1,
        borderBottomStyle: 'dotted',
        ml: 2,
        mr: 2,
        mt: 4
      }}>
        <Box sx={{
          textAlign: ["center", "right", "right"]
        }}>
          <p>
            <Image sx={{

            }}
                   width={128} height={64} src={this.props.imageLink} />
          </p>
        </Box>
        <Box sx={{
          textAlign: ["center", "left", "left"]
        }}>
          <Heading as="h1" sx={{
            color: "primary"
          }}>{this.props.infoTitle}</Heading>
          <Text as="p">{this.props.infoContent}</Text>
        </Box>
      </Grid>
    )
  }
}

class InfoCardReverse extends React.Component {

  render() {
    return (
      <Grid columns={[1, 2, 2]} gap={4} sx={{
        pb: 4,
        borderBottomColor: 'muted',
        borderBottomWidth: 1,
        borderBottomStyle: 'dotted',
        ml: 2,
        mr: 2,
        mt: 4
      }}>

        <Box sx={{
          textAlign: ["center", "right", "right"]
        }}>
          <Heading as="h1" sx={{
            color: "primary"
          }}>{this.props.infoTitle}</Heading>
          <Text as="p">{this.props.infoContent}</Text>
        </Box>
        <Box sx={{
          textAlign: ["center", "left", "left"]
        }}>
          <p>
            <Image sx={{
              //float: ["right", "center", "center"]
            }}
                   width={128} height={64} src={this.props.imageLink} />
          </p>

        </Box>
      </Grid>
    )
  }
}

function ShowPlayStoreBadge({intl}) {
  if(intl.locale === "zh"){
    return (
      <Image src={PlayBadgeZh} alt={"Play store"} sx={{
        width:200
      }} />
    )
  }else {
    return (
      <Image src={PlayBadgeEn} alt={"Play store"} sx={{
        width:200
      }}/>
    )
  }



}

function HomePage() {
  const intl = useIntl();
  return(
    <Grid>
      {/* index page */}
      <Container as="header" sx={{
        bg:"#2c3e50",
        p:[2,2,4],
        pt:[4,4,6],
        pb:[4,4,6],
        textAlign:"center"
      }}>
        <Heading as="h1" sx={{
          color:"primary",
          fontSize:60,
          fontWeight: 700
        }}>Discuz Hub</Heading>
        <Text as="p" sx={{
          color: "rgb(255,255,255)",
          mt:3,
          fontSize: 30,
          fontWeight: 200
        }}><FormattedMessage id="intro.lightweight" /> <FormattedMessage id="intro.discuz_app" /></Text>
        <Grid columns={[1,3,3]} sx={{
          pl:[1,2,4],
          pr:[1,2,4],
          mt:4,
          mb:4,
        }}>
          <Box sx={{
            textAlign: ["center", "right", "right"]
          }}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.kidozh.discuzhub"
              >

              <ShowPlayStoreBadge intl={intl} />
            </Link>
          </Box>
          <Box sx={{
            textAlign: ["center", "center", "center"],
            mt:[2,2,3],
            mb:[2,2,3],
          }}>
            <Link
              href="/nightly-version/"
              sx={{
                fontSize: 24,
                fontWeight: 500,
                backgroundColor:"primary",
                color:"white",
                pt:[1,2,2],
                pb:[1,2,2],
                pl:[4,4,4],
                pr:[4,4,4],
                borderRadius:8,
                "&:hover":{
                  backgroundColor:"accent",
                  color:"white",
                  transition: "all .35s ease",
                  textDecoration:"none"
                }
                
              }}
              >

              {intl.formatMessage({"id":"nightly_version.nightly"})}
            </Link>
          </Box>
          <Box sx={{
            textAlign: ["center", "left", "left"],
            mt:[2,2,3],
            mb:[2,2,3],
          }}>
            <Link
              href="https://github.com/kidozh/DiscuzHub"
              sx={{
                fontSize: 24,
                fontWeight: 400,
                "&:hover":{
                  color:"white",
                  transition: "all .35s ease"
                }
              }}>
              <FormattedMessage id="intro.project_at_github" />
            </Link>
          </Box>
        </Grid>

      </Container>
      <Grid sx={{
        mb: 4,
        mt: 4,
        ml: 2,
        mr: 2
      }}>
        <Box>
          <Heading as="h2" sx={{
            fontWeight: 400,
            textAlign : "center",
            wordWrap:"break-word",
            color:'heading'
          }} >🧐 <FormattedMessage id="intro.administrator_note" />
            <Link href="/compatibility-guide/"><FormattedMessage id="compatibility.compatibility_title" /></Link>
          </Heading>
        </Box>

      </Grid>
      <Grid columns={[1, '1fr 8fr 1fr', '1fr 6fr 1fr']}
            sx={{
              mb: 4,
              mt: 4,
              ml: 2,
              mr: 2
            }}>
        <Box />
        <Box sx={{
          p: 4,
          borderRadius: 8
        }}>
          <InfoCard imageLink={Bridge3D} infoTitle={intl.formatMessage({ id: "index.cross_platform_title" })} infoContent={intl.formatMessage({ id: "index.cross_platform_content" })} />
          <InfoCardReverse imageLink={SelectiveLaser} infoTitle={intl.formatMessage({ id: "index.speed_and_performance_title" })} infoContent={intl.formatMessage({ id: "index.speed_and_performance_content" })} />

          <InfoCard imageLink={RocketEngine3D} infoTitle={intl.formatMessage({ id: "index.powerful_tool_title" })} infoContent={intl.formatMessage({ id: "index.powerful_tool_content" })} />
          <InfoCardReverse imageLink={Tech3D} infoTitle={intl.formatMessage({ id: "index.open_source_title" })} infoContent={intl.formatMessage({ id: "index.open_source_content" })} />

        </Box>
        <Box />

      </Grid>


      <Grid
        //width={["100%", "80%", "60%"]}
        columns={[1, '1fr 2fr 1fr', '1fr 1fr 1fr']}
        sx={{
          mb: 4,
          mt: 4,
          ml: 4,
          mr: 4
        }}>
        <Box />
        <Box sx={{
          bg: "primary",
          color: "white",
          p: 4,
          borderRadius: 8
        }}>
          <Link as="a" href="https://github.com/kidozh/DiscuzHub/" sx={{
            color: "white",

          }}>
            <Flex columns={[1, 2, 2]} gap={4} sx={{

            }}>
              <Box sx={{
                textAlign: ["center", "right", "right"],

              }}>
                <Text as="p" p={0}>
                  <Image src={Github} sx={{
                    width: 128,
                    height: 128
                  }} />
                </Text>

              </Box>
              <Box sx={{
                ml: 4
              }}>
                <Heading as="h3" sx={{
                  color: "white"
                }}>
                  {intl.formatMessage({ id: "index.fork_on_github_title" })}
                </Heading>
                <Text as="p" sx={{
                  color: "white"
                }}>
                  {intl.formatMessage({ id: "index.fork_on_github_content" })}
                </Text>
              </Box>
            </Flex>
          </Link>


        </Box>
        <Box />
      </Grid>
    </Grid>
  )
}



export default function Home() {
  return (<Layout>
    <HomePage />
  </Layout>)
}
