import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import theme from '../config/theme'
import { ThemeProvider } from '@mui/material/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
