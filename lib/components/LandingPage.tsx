import { Button, Hidden, makeStyles, Typography } from '@material-ui/core'
import Link from 'next/link'
import { LightCanvas } from '../styles/theme'
import { ComponentContainer } from './AppContainer'

const useStyles = makeStyles((theme) => ({
  landingPage: {
    backgroundColor: LightCanvas,
    overflow: 'hidden',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      padding: '4rem',
    },
  },
  landingPageContent: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    '& img': {
      height: 250,
      [theme.breakpoints.up('lg')]: {
        height: 'unset',
      },
    },
  },
  landingPageDescription: {
    [theme.breakpoints.up('sm')]: {
      minWidth: 400,
    },
  },
  landingPageAction: {
    '& h6': {
      marginTop: '0.75rem',
    },
    '& button': {
      marginTop: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      display: 'flex',
      marginTop: '1.5rem',
      '& button': {
        marginTop: 'unset',
        marginLeft: '1rem',
      },
    },
  },
}))

const LandingPage: React.FC = () => {
  const classes = useStyles()

  return (
    <div id="landing-page" className={classes.landingPage}>
      <ComponentContainer>
        <div className={classes.landingPageContent}>
          <div className={classes.landingPageDescription}>
            <Typography variant="h1">{'New to ReadyAnot?'}</Typography>
            <div className={classes.landingPageAction}>
              <Typography variant="subtitle1">
                {'Try our Privilege Test?'}
              </Typography>
              <Link href="/privilege-test">
                <Button size="large" variant="contained" color="secondary">
                  {'Take it now'}
                </Button>
              </Link>
            </div>
          </div>
          <Hidden smDown>
            <img src="/landing-page-graphic.svg" draggable={false} />
          </Hidden>
        </div>
      </ComponentContainer>
    </div>
  )
}

export default LandingPage
