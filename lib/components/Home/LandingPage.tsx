import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { ComponentContainer } from '../AppContainer'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: 1,
    '& h2': {
      marginBottom: '2.25rem',
    },
    '& img': {
      marginTop: '-5rem',
      marginBottom: '-3rem',
    },
  },
  handshakeGraphic: {
    zIndex: -1,
  },
})

const LandingPage: React.FC = () => {
  const classes = useStyles()

  return (
    <ComponentContainer className={classes.container}>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <Typography variant="h2">
          {'Social conversations made safe & open'}
        </Typography>
        <Typography variant="subtitle1">
          {'3 pointers that convinces the platform'}
        </Typography>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce
        className={classes.handshakeGraphic}
      >
        <img
          src="/assets/home/landing-page/continuous-one-line-drawing-handshake-minimalism.jpg"
          draggable={false}
        />
      </ScrollAnimation>
    </ComponentContainer>
  )
}

export default LandingPage
