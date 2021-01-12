import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { ComponentContainer } from '../AppContainer'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: 1,
  },
})

const LandingPage: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <ComponentContainer className={classes.container}>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <Typography
            style={{
              fontSize: '12.5rem',
              color: 'rgba(88, 88, 88, 0.44)',
            }}
          >
            {'SOCIAL'}
          </Typography>
          <Typography variant="h2" style={{ color: '#585858' }}>
            {'conversations made safe & open'}
          </Typography>
        </ScrollAnimation>
      </ComponentContainer>
      <div style={{ flex: 2 }} />
    </>
  )
}

export default LandingPage
