import Head from 'next/head'
import MyAppBar from '../lib/components/AppBar'
import PageContainer from '../lib/components/AppContainer'
import MyFooter from '../lib/components/Footer'

const PrivilegeTest: React.FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Privilege Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <MyAppBar />
      </main>

      <MyFooter />
    </PageContainer>
  )
}

export default PrivilegeTest
