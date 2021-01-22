import { makeStyles, Typography } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import React from 'react'
import { ComponentContainer, ComponentType } from '../AppContainer'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    '& h1': {
      fontSize: '16vw',
      fontWeight: 'normal',
    },
    '& h2': {
      fontSize: '3rem',
      fontWeight: 'normal',
      marginBottom: '5rem',
    },
    '& h4': {
      fontWeight: 500,
      '& i': {
        color: theme.palette.primary.main,
        fontWeight: 600,
      },
    },
  },
  appFeatures: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  appFeatureContainer: {
    margin: '1rem 4rem 0rem 4rem',
    '& h6': {
      textAlign: 'bottom',
    },
    '& svg': {
      verticalAlign: 'middle',
    },
  },
}))

const LandingPage: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <ComponentContainer
        className={classes.container}
        type={ComponentType.Section}
      >
        <Typography variant="h1" color="primary">
          {'CANDID'}
        </Typography>
        <Typography variant="h2" color="primary">
          {'conversations'}
        </Typography>
        <Typography variant="h4">
          Creating a more <i>vocal</i> and <i>empathetic</i> society
        </Typography>
        <div id="app-features" className={classes.appFeatures}>
          <div className={classes.appFeatureContainer}>
            <Typography variant="subtitle1">
              <KeyboardArrowRightIcon color="disabled" />
              {'Raising Awareness'}
            </Typography>
          </div>
          <div className={classes.appFeatureContainer}>
            <Typography variant="subtitle1">
              <KeyboardArrowRightIcon color="disabled" />
              {'Empowering People'}
            </Typography>
          </div>
          <div className={classes.appFeatureContainer}>
            <Typography variant="subtitle1">
              <KeyboardArrowRightIcon color="disabled" />
              {'Creating a Safe Space'}
            </Typography>
          </div>
        </div>
      </ComponentContainer>
    </>
  )
}

export default LandingPage
