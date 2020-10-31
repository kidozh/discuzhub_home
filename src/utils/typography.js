import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"

grandViewTheme.overrideThemeStyles = ({rhythm}, options) => ({
  "a:hover":{
    color:"var(--theme-ui-colors-primary)",
    transition:".5s all ease"
  },
  "h1,h2,h3,h4,h5":{
    color:"var(--theme-ui-colors-text)"
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