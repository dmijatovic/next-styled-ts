import {createGlobalStyle} from "styled-components"
import {iCustomTheme} from "styles/theme"

export default createGlobalStyle<iCustomTheme>`
  html {
    font-size:100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body{
    margin:0;
    padding:0;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    background-color: ${props=>{
      // let theme:iCustomTheme = props.theme
      // console.log(props)
      return props.theme['color']['background']['default']
    }};
  }
`