# NextJS with typescript and styled components

This is manual setup of nextjs with typescript and styled components. It based on [this article](https://dev.to/rffaguiar/nextjs-typescript-styled-components-1i3m).

## Install types

```bash
# install typescript and types
npm i -D typescript @types/react @types/node

```

## Change file extension to tsx

Change file extension to tsx on all react files.
Create empty tsconfig.json

```bash
# create empty file
touch tsconfig.json
```

## Instal styled-components

```bash
# install styled component
npm i -s styled-components @types/styled-components

# install babel plugin for consitent naming
npm i -D babel-plugin-styled-components

```

## Enable absolute imports

Add baseUrl definition in tsconfig.json to point to the root of the project.

```tsconfig.json
{
 "baseUrl": "."
}
```

## Start next.js

After starting nextjs in dev mode, it will detect typescript and update tsconfig.json

## Enable server side style loading

Create _document.tsx file and past the code

```javascript
import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
```

## Extend styled-components DefaultTheme type with custom interface

Based on the [documentation from here](https://styled-components.com/docs/api)

Create styled.d.ts file and change default theme types.

```ts
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
```
