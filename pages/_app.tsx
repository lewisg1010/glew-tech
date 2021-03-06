import '../styles/globals.css'
import '../styles/theme.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Header from "../src/components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider defaultTheme="system">
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
