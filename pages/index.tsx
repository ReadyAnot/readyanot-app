import Head from 'next/head'
import React from 'react'
import MyAppBar from '../lib/components/AppBar'
import PageContainer from '../lib/components/AppContainer'
import MyFooter from '../lib/components/Footer'
import FullViewHeight from '../lib/components/FullViewHeight'
import ShareVoiceContent from '../lib/components/Home/ShareVoiceContent'
import LandingPage from '../lib/components/Home/LandingPage'
import NewsContent from '../lib/components/Home/NewsContent'
import AsSeenOn from '../lib/components/Home/AsSeenOn'

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>ReadyAnot</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <FullViewHeight>
          <MyAppBar />
          <LandingPage />
        </FullViewHeight>
        <ShareVoiceContent />
        <NewsContent />
        <AsSeenOn />
      </main>

      <MyFooter />
    </PageContainer>
  )
}

export default Home
