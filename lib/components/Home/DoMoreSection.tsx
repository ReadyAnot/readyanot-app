import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { ComponentContainer, ComponentType } from '../AppContainer'

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    '& span': {
      fontWeight: 'normal',
    },
  },
  pinkText: {
    color: '#FC9999',
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      maxWidth: 200,
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  action: {
    margin: '4rem',
    maxWidth: 240,
    [theme.breakpoints.down('sm')]: {
      margin: '1rem',
    },
  },
  buttonDiv: {
    maxWidth: 240,
    width: '100%',
    marginTop: '1rem',
    '&:last-child': {
      marginTop: '0.5rem',
    },
  },
}))

const DoMoreSection = () => {
  const classes = useStyles()

  return (
    <ComponentContainer
      type={ComponentType.Section}
      className={classes.container}
    >
      <span>
        <Typography variant="h1" component="span">
          {'DO M'}
        </Typography>
        <Typography variant="h1" component="span" className={classes.pinkText}>
          {'O'}
        </Typography>
        <Typography variant="h1" component="span">
          {'RE'}
        </Typography>
      </span>
      <Typography variant="body1">
        {'Dedicate your hearts, linked horizon'}
      </Typography>
      <div id="do-more-actions" className={classes.actions}>
        <div id="initiate-action" className={classes.action}>
          <img
            src="/assets/home/do-more/initiate-logo.png"
            alt="initiate-logo"
            draggable={false}
          />
          <Typography variant="h4">{'Initiate'}</Typography>
          <Typography variant="body1">
            {'For likeminded people. Source for support & funding.'}
          </Typography>
          <div id="initiate-join-button" className={classes.buttonDiv}>
            <Button variant="contained" color="primary">
              {'Join'}
            </Button>
          </div>
          <div id="initiate-learn-more-button" className={classes.buttonDiv}>
            <Button variant="text" color="secondary">
              {'Learn more'}
            </Button>
          </div>
        </div>
        <div id="advocate-action" className={classes.action}>
          <img
            src="/assets/home/do-more/advocate-logo.png"
            alt="initiate-logo"
            draggable={false}
          />
          <Typography variant="h4">{'Advocate'}</Typography>
          <Typography variant="body1">
            {'Help others get into the conversation.'}
          </Typography>
          <div id="advocate-join-button" className={classes.buttonDiv}>
            <Button variant="contained" color="primary">
              {'Join'}
            </Button>
          </div>
          <div id="advocate-learn-more-button" className={classes.buttonDiv}>
            <Button variant="text" color="secondary">
              {'Learn more'}
            </Button>
          </div>
        </div>
        <div id="support-action" className={classes.action}>
          <img
            src="/assets/home/do-more/support-logo.png"
            alt="initiate-logo"
            draggable={false}
          />
          <Typography variant="h4">{'Support'}</Typography>
          <Typography variant="body1">
            {'Support change-makers that align with your cause.'}
          </Typography>
          <div id="support-join-button" className={classes.buttonDiv}>
            <Button variant="contained" color="primary">
              {'Join'}
            </Button>
          </div>
          <div id="support-learn-more-button" className={classes.buttonDiv}>
            <Button variant="text" color="secondary">
              {'Learn more'}
            </Button>
          </div>
        </div>
      </div>
    </ComponentContainer>
  )
}

export default DoMoreSection
