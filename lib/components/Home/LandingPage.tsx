import { makeStyles, Typography } from '@material-ui/core'
import { ComponentContainer } from '../AppContainer'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    '& h2': {
      marginBottom: '2.25rem',
    },
    '& h6': {
      zIndex: 1,
    },
    '& img': {
      marginTop: '-5rem',
      marginBottom: '-3rem',
      zIndex: -1,
    },
  },
})

const LandingPage: React.FC = () => {
  const classes = useStyles()

  return (
    <ComponentContainer className={classes.container}>
      <Typography variant="h2">
        {'Social conversations made safe & open'}
      </Typography>
      <Typography variant="subtitle1">
        {'3 pointers that convinces the platform'}
      </Typography>
      <div>
        <img
          src="/assets/home/landing-page/continuous-one-line-drawing-handshake-minimalism.jpg"
          draggable={false}
        />
      </div>
    </ComponentContainer>
  )
}

export default LandingPage
