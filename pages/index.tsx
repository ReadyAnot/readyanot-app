import Head from 'next/head'
import MyAppBar from '../lib/components/AppBar'
import AppContainer, { AppContainerTypes } from '../lib/components/AppContainer'
import HideOnScroll from '../lib/components/HideOnScroll'

const Home: React.FC = () => {
  return (
    <AppContainer type={AppContainerTypes.Page}>
      <Head>
        <title>ReadyAnot</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <HideOnScroll>
          <MyAppBar />
        </HideOnScroll>
      </main>

      <footer></footer>
    </AppContainer>
  )
}

export default Home
