import { makeStyles, Typography } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import MailIcon from '@material-ui/icons/Mail'
import React from 'react'
import Link from 'next/dist/client/link'
import { ComponentContainer, ComponentType } from '../AppContainer'
import { NONAME } from 'dns'

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
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      display: 'flex',
      margin: '1rem',
    },
    '& a': {
      textDecoration: 'none',
      color: 'black',
      marginLeft: '0.5rem',
    },
  }
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
          {'J'}
        </Typography>
        <Typography variant="h1" component="span" className={classes.pinkText}>
          {'O'}
        </Typography>
        <Typography variant="h1" component="span">
          {'IN US'}
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
          <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>
            {'Content Creator'}
          </Typography>
          <Typography variant="body1">
            {'Create content to equip the public with the right knowledge'}
          </Typography>
        </div>
        <div id="advocate-action" className={classes.action}>
          <img
            src="/assets/home/do-more/advocate-logo.png"
            alt="initiate-logo"
            draggable={false}
          />
          <Typography variant="h5" style={{ marginBottom: '0.5rem' }}>
            {'Moderator'}
          </Typography>
          <Typography variant="body1">
            {'Help others get into the conversation'}
          </Typography>
        </div>
      </div>
      <div className={classes.contact}>
        <div>
          <InstagramIcon />
          <Link href="https://www.instagram.com/candid.sg/">
            <a>
              <Typography>{'@candid.sg'}</Typography>
            </a>
          </Link>
        </div>
        <div>
          <MailIcon />
          <Link href="#">
            <a>
              <Typography>{'hello@candid.sg'}</Typography>
            </a>
          </Link>
        </div>
      </div>
    </ComponentContainer>
  )
}

export default DoMoreSection
