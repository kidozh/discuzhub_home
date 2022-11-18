/** @jsx jsx */
import { jsx, Container} from "theme-ui"
import Header from "./header"
import Footer from "./footer"
import RootLayout from "./theme-ui-root-layout"
import SEO from "./seo"
import Banner from "../components/focus-us-on-weibo"


function Layout ({ location, title, children,subject }){

  return (
    <RootLayout className="discuzhub">
      <SEO title={title} />
      <Banner/>
      {/* header */}

      <Header/>
      <Container as="main" sx={{
        p:0
      }}>
        {children}
      </Container>
      <Footer />
    </RootLayout>
  )
}

export default Layout