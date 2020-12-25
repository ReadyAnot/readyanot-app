import { Typography } from '@material-ui/core'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ReadyAnot</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <Typography variant="h1">Hello</Typography>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
