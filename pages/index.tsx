import Head from 'next/head'
import React from 'react'
import MyAppBar from '../lib/components/AppBar'
import PageContainer, {
  ComponentContainer,
  ComponentType,
} from '../lib/components/AppContainer'
import MyFooter from '../lib/components/Footer'
import FeaturedPartners from '../lib/components/Home/FeaturedPartners'
import PrivilegeTestPrompt from '../lib/components/Home/PrivilegeTestPrompt'
import DoMoreSection from '../lib/components/Home/JoinUsSection'
import { Hidden, useMediaQuery, useTheme } from '@material-ui/core'
import StickyScroll from '../lib/components/StickyScroll'

const Home: React.FC = () => {
  const isLarge = useMediaQuery(useTheme().breakpoints.up('md'))
  return (
    <PageContainer>
      <Head>
        <title>Candid</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <Hidden smDown>
          <MyAppBar />
        </Hidden>
        <ComponentContainer type={ComponentType.Section}>
          <img
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '100%',
            }}
            src="/assets/home/header.jpg"
            draggable="false"
          />
        </ComponentContainer>
        <ComponentContainer type={ComponentType.Section}>
          <img
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: isLarge ? '80%' : '100%',
            }}
            src="/assets/home/sub-header.jpg"
            draggable="false"
          />
        </ComponentContainer>
        <FeaturedPartners />
        <PrivilegeTestPrompt />
        <DoMoreSection />
      </main>

      <MyFooter />
    </PageContainer>
  )
}

export default Home
