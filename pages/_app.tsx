import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Navigation from '../component/Navigation'
import styled from 'styled-components'

const ContentWrapper = styled.div`
    margin-left: 252px;
    padding-top: 58px;
    padding-left: 24px;
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <title>Front-end Assignment</title>
            <meta name="description" content="Front-end Assignment for DBDLAB Corp. by GyuminLee" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <ContentWrapper>
            <Component {...pageProps} />
        </ContentWrapper>
    </>
  )
}
