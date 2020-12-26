import { Button, makeStyles, Typography } from '@material-ui/core'
import { LandingPageCanvas } from '../styles/theme'
import { ComponentContainer } from './AppContainer'

const useStyles = makeStyles({
  landingPage: {
    backgroundColor: LandingPageCanvas,
    padding: '4rem',
    width: '100%',
  },
  landingPageContent: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  landingPageDescription: {},
  landingPageAction: {
    alignItems: 'center',
    display: 'flex',
    marginTop: '1.5rem',
    '& button': {
      marginLeft: '1rem',
    },
  },
})

const LandingPage: React.FC = () => {
  const classes = useStyles()

  return (
    <div id="landing-page" className={classes.landingPage}>
      <ComponentContainer>
        <div className={classes.landingPageContent}>
          <div className={classes.landingPageDescription}>
            <Typography variant="h1">{'New to ReadyAnot?'}</Typography>
            <div className={classes.landingPageAction}>
              <Typography variant="h5">
                {'Try our Privilege Test?'}
              </Typography>
              <Button size="large" variant="contained" color="secondary">
                {'Take it now'}
              </Button>
            </div>
          </div>
          <img src="/landing-page-graphic.svg" draggable={false} />
        </div>
      </ComponentContainer>
    </div>
  )
}

export default LandingPage
