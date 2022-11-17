import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

type NextageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
  const getLayout = Component.getLayout || ((page) => page)
  
  //return <Component {...pageProps} />
  return getLayout (<Component {...pageProps} />)
}
