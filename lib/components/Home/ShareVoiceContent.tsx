import { Button, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { ComponentContainer, ComponentType } from '../AppContainer'

const useStyles = makeStyles({
  conversationsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      textAlign: 'center',
    },
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h2': {
      marginBottom: '2rem',
    },
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  sideImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      maxWidth: '70%',
    },
  },
})

const ShareVoiceContent: React.FC = () => {
  const classes = useStyles()

  return (
    <ComponentContainer
      type={ComponentType.Section}
      className={classes.conversationsContainer}
    >
      <div
        className={classNames(
          classes.descriptionContainer,
          classes.textAlignCenter
        )}
      >
        <span>
          <Typography variant="h2" component="span">
            {'Share your '}
          </Typography>
          <Typography variant="h2" component="span" color="primary">
            <i>{'voice'}</i>
          </Typography>
          <Typography variant="h2" component="span" color="textSecondary">
            {'.'}
          </Typography>
        </span>
        <Typography variant="h2" className={classes.textAlignCenter}>
          {'Listen to others.'}
        </Typography>
        <Link href="/">
          <a>
            <Button variant="contained" color="primary">
              Join conversations&nbsp;
              <ArrowForwardIosIcon style={{ fontSize: '1rem' }} />
            </Button>
          </a>
        </Link>
      </div>
      <div className={classes.sideImage}>
        <img
          src="/assets/home/home-page-content/reddit-popular-posts.png"
          draggable={false}
        />
      </div>
    </ComponentContainer>
  )
}

export default ShareVoiceContent
