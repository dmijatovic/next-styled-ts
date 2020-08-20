import GlobalStyles from 'components/layout/GlobalStyles'
import appTheme from "styles/theme"
import {ThemeProvider} from "styled-components"

function MyApp({ Component, pageProps }){
  // add theme to all props
  let allProps={
    ...pageProps,
    appTheme
  }
  return (
    <>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles/>
        <Component {...allProps}/>
      </ThemeProvider>
    </>
  )
}

export default MyApp


