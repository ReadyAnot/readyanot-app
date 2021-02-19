import Head from 'next/head'
import React from 'react'
import MyAppBar from '../lib/components/AppBar'
import PageContainer from '../lib/components/AppContainer'
import MyFooter from '../lib/components/Footer'
import LandingPage from '../lib/components/Home/LandingPage'
import FeaturedPartners from '../lib/components/Home/FeaturedPartners'
import PrivilegeTestPrompt from '../lib/components/Home/PrivilegeTestPrompt'
import DoMoreSection from '../lib/components/Home/DoMoreSection'

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Candid!</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <MyAppBar />
        <LandingPage />
        <FeaturedPartners />
        <PrivilegeTestPrompt />
        <DoMoreSection />
      </main>

      <MyFooter />
    </PageContainer>
  )
}

export default Home
