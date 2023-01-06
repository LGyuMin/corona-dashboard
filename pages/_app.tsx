import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <title>Front-end Assignment</title>
            <meta name="description" content="Front-end Assignment for DBDLAB Corp. by GyuminLee" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>
  )
}
