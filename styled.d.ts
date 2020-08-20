// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily:string,
    color:{
      primary:{
        main:string
      },
      secondary:{
        main:string
      },
      error:{
        main:string
      },
      background:{
        default:string
      }
    }
  }
}