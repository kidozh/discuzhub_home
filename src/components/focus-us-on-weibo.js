/** @jsx jsx */
import {Styled, jsx, BaseStyles, Flex, Container, Box, NavLink,useColorMode, Button, Image, Grid, Link, Paragraph} from 'theme-ui'
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faBell } from '@fortawesome/free-solid-svg-icons'



const Banner = () => {

  return (
      <Container as="header"
        sx={{
          display: 'flex',
          alignItems: 'center',
          variant: 'styles.header',
          bg:"primary"
        }}
      >
        <Grid columns={[1]} sx={{
              alignContent:["center","right","right"],
              textAlign:["center","center","center"],
              width:"100%",
              justifyContent:"center"}}>
            <Box><center><Link href="https://weibo.com/u/7436177109" sx={{
                color:"white"
            }}><FontAwesomeIcon icon={faBell} /> 在微博上关注我们</Link></center></Box>
            
        </Grid>



        {/* LangKey */}


      </Container>

  )
}

export default Banner
