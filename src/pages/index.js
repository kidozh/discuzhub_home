/** @jsx jsx */
import * as React from "react"
import Layout from "../components/layout"
import { Box, Grid, Image, Link, Text, Heading, Container, Flex, jsx } from "theme-ui"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Bridge3D from "../../static/index/3d-bridges.svg"
import SelectiveLaser from "../../static/index/selective-laser-sintering.svg"
import Tech3D from "../../static/index/3d-technology.svg"
import RocketEngine3D from "../../static/index/3d-rocket-engine.svg"
import Github from "../../static/index/github-white.svg"

import PlayBadgeZh from "../../static/play-store/Google_Play_Store_badge_ZH.svg"
import PlayBadgeEn from "../../static/play-store/Google_Play_Store_badge_EN.svg"

import AppStoreBadgeEn from "../../static/app-store/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
import AppStoreBadgeZh from "../../static/app-store/CN(SC)/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_CNSC_RGB_blk_092917.svg"
import AppStoreBadgeZhHK from "../../static/app-store/HKTW(TC)/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_CNTC_RGB_blk_100217.svg"
import AppGallery from "../../static/app-gallery/AppGalleryBadge.svg"
import Logo from "../../static/logo.svg"
import DisFlyLogo from "../../static/disfly-logo.svg"

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
            color: "primary",
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

function ShowPlayStoreBadge({ intl }) {
  if (intl.locale === "zh") {
    return (
      <Image src={PlayBadgeZh} alt={"Play store"} sx={{
        height: 70,
        verticalAlign: "middle"
      }} />
    )
  } else {
    return (
      <Image src={PlayBadgeEn} alt={"Play store"} sx={{
        height: 70,
        verticalAlign: "middle"
      }} />
    )
  }
}

function ShowAppStoreBadge({ intl }) {
  if (intl.locale === "zh") {
    return (
      <Image src={AppStoreBadgeZh} alt={"App Store"} sx={{
        height: 70,
        verticalAlign: "middle"
      }} />
    )
  }
  else if (intl.locale === "zh-hk") {
    return (
      <Image src={AppStoreBadgeZhHK} alt={"App Store"} sx={{
        height: 70,
        verticalAlign: "middle"
      }} />
    )
  }
  else {
    return (
      <Image src={AppStoreBadgeEn} alt={"App Store"} sx={{
        height: 70,
        verticalAlign: "middle"
      }} />
    )
  }
}

function HomePage() {
  const intl = useIntl();
  return (
    <Grid>
      {/* index page */}
      <Container p={0}>
        <Grid columns={[1, 1, 2]} gap={0} sx={{
          m: 0
        }}>
          <Box sx={{
            p: 4,
            background: "#3949AB"
          }}>
            <Text as="p" sx={{
              textAlign: "center",
            }}>
              <Image src={DisFlyLogo}
                               ratio={1}
                               sx={{
                                 width:128,
                                 verticalAlign:"middle"
            
                               }} />
            </Text>
            <Text as="h1" sx={{
              textAlign: "center",
              color: "white",
              mt: 2,
              mb: 1
            }}>
              {intl.formatMessage({ id: "intro.disfly_title" })}
              <Text as="small" sx={{
                fontSize: 1,
                p: 2,
                bg: "#E8EAF6",
                color: "#3949AB",
                borderRadius: 8,
                ml: 2,
                alignContent: "center",
                verticalAlign: "middle"
              }}>
              {intl.formatMessage({ id: "intro.recommended" })}
              </Text>
            </Text>
            <Text as="p" sx={{
              textAlign: "center",
              mb: 4,
              color: "white",
            }}><FormattedMessage id="intro.disfly_description" />
            </Text>
            
            <Grid columns={[1, 2, 2]} gap={1} sx={{
              alignContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}>
              <Box>
                
              <Link
                href="https://apps.apple.com/us/app/%E8%B0%88%E5%9D%9B/id1601703772"
                sx={{
                  mb: 2,
                  pb: 2
                  
                }}
              >
                <ShowAppStoreBadge intl={intl} />
              </Link>
              </Box>
              <Box>
              <Link
                href="https://play.google.com/store/apps/details?id=com.kidozh.discuz_flutter"
              >

                <ShowPlayStoreBadge intl={intl} />

              </Link>
              </Box>
            </Grid>
          </Box>
          <Box bg="muted" sx={{
            p: 4,
          }}>
            <Text as="p" sx={{
              textAlign: "center",
            }}>
              <Image src={Logo}
                               ratio={1}
                               sx={{
                                 width:128,
                                 verticalAlign:"middle"
            
                               }} />
            </Text>
            
            <Text as="h1" sx={{
              textAlign: "center",
              mb: 1,
              mt: 2
            }}>
              
              <FormattedMessage id="intro.discuzhub_title" />
            </Text>
            <Text as="p" sx={{
              textAlign: "center",
              mb: 4
            }}><FormattedMessage id="intro.discuzhub_description" />
            </Text>
            <Grid columns={[1]} gap={1} sx={{
              alignContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}>
              <Box sx={{
                
              }}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.kidozh.discuzhub"
              >

                <ShowPlayStoreBadge intl={intl} />

              </Link>
              </Box>
              {/* <Box>
              <Link
                href="https://appgallery.cloud.huawei.com/ag/n/app/C105331315?channelId=Discuz+Hub+download+from+AppGallery&id=0ab329e643f64442b5540de9ace56780&s=C59880EBA1C60199ECC0A77459C35B87EF8D82F96F2623D568F704EC21C757AD&detailType=0&v=&callType=AGDLINK&installType=0000"
              >

                <Image src={AppGallery} width={236} />

              </Link>
              </Box> */}

            </Grid>
          </Box>
        </Grid>
      </Container>
      
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

const Home = () => <Layout><HomePage></HomePage></Layout>;

// const Home = () =>{
//   return (<Layout><HomePage></HomePage></Layout>)
// }

export default Home
