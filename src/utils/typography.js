import Typography from "typography"
import { toTheme } from '@theme-ui/typography'
import grandViewTheme from "typography-theme-github"

grandViewTheme.overrideThemeStyles = ({rhythm}, options) => ({
  "a:hover":{
    color:"var(--theme-ui-colors-primary)",
    transition:".5s all ease",
    "text-decoration":"none"
  },
  "h1,h2,h3,h4,h5":{
    color:"var(--theme-ui-colors-text)",
    "text-decoration": "none",
    "border-bottom":"none"

  },
  "blockquote":{
    color:"var(--theme-ui-colors-text)"
  },

  // "a":{
  //   color:"var(--theme-ui-colors-accent)"
  // },

})

const typography = new Typography(grandViewTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography