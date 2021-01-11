import { makeStyles, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Animated } from 'react-animated-css'
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
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => setIsVisible(true), [])

  return (
    <ComponentContainer className={classes.container}>
      <Animated
        animationIn="fadeInUp"
        animationOut="fadeInDown"
        isVisible={isVisible}
      >
        <Typography variant="h2">
          {'Social conversations made safe & open'}
        </Typography>
        <Typography variant="subtitle1">
          {'3 pointers that convinces the platform'}
        </Typography>
      </Animated>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeIn"
        animationInDuration={3000}
        isVisible={isVisible}
        className={classes.handshakeGraphic}
      >
        <img
          src="/assets/home/landing-page/continuous-one-line-drawing-handshake-minimalism.jpg"
          draggable={false}
        />
      </Animated>
    </ComponentContainer>
  )
}

export default LandingPage
