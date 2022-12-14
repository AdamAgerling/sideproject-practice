import { theme } from '../src/theming/theme';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from '../src/theming/global';
import type { AppProps } from 'next/app'
import LogRocket from 'logrocket';
LogRocket.init('mxqbv6/sideproject');
export default function App({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  <Component {...pageProps} />
  </ThemeProvider>
  )
}
