import Head from 'next/head'
import MyAppBar from '../lib/components/AppBar'
import PageContainer from '../lib/components/AppContainer'
import AsSeenOn from '../lib/components/AsSeenOn'
import MyFooter from '../lib/components/Footer'
import LandingPage from '../lib/components/LandingPage'

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
        <MyAppBar />
        <LandingPage />
        <AsSeenOn />
      </main>

      <MyFooter />
    </PageContainer>
  )
}

export default Home
