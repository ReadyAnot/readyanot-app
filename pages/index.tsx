import Head from 'next/head'
import MyAppBar from '../lib/components/AppBar'
import PageContainer from '../lib/components/AppContainer'
import LandingPage from '../lib/components/LandingPage'

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>ReadyAnot</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <MyAppBar />
        <LandingPage />
      </main>

      <footer></footer>
    </PageContainer>
  )
}

export default Home
