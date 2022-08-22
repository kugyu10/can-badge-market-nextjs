import { addDecorator } from "@storybook/react"
//import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../src/themes'
import '../src/styles/globals.css';
import * as NextImage from 'next/image'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

/* styled-components
export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMaSystemFont, Segoe UI Roboto, Oxygen,
    Ubuntu, Cantarell, Fire Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`
*/

/* styled-components
//Themeの適用
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
))
*/

//next/imageの差し替え
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  ),
})


/*
Object.defineProperty(NextImage, '__esModule', {
  configurable: true,
  value: true,
})
*/