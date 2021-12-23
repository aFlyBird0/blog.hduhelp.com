import '../styles/globals.css'
import 'katex/dist/katex.min.css'
import 'windi.css'

import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const p5Script = document.createElement('script')
    p5Script.setAttribute('id', 'p5Script')
    p5Script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js')
    document.getElementsByTagName('head')[0].appendChild(p5Script)

    return () => {
      if (p5Script) {
        p5Script.remove()
      }
    }
  }, [])

  return (
    <ThemeProvider attribute="class">
      <NextNProgress height={1} color="rgb(156, 163, 175, 0.9)" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
