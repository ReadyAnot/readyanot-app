import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import React from 'react'
import { ComponentContainer, ComponentType } from '../AppContainer'

const useStyles = makeStyles({
  container: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      textAlign: 'center',
    },
  },
  conversationsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h2': {
      marginBottom: '2rem',
      textAlign: 'center',
    },
  },
})

const HomePageContent: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <ComponentContainer
        type={ComponentType.Section}
        className={classes.conversationsContainer}
      >
        <div className={classes.descriptionContainer}>
          <Typography variant="h2">
            Share your voice.
            <br />
            Listen to others.
          </Typography>
          <Link href="/">
            <a>
              <Typography variant="h6" color="textPrimary">
                Join conversations&nbsp;&nbsp;{'>'}
              </Typography>
            </a>
          </Link>
        </div>
        <div>
          <img
            src="/assets/home/home-page-content/reddit-popular-posts.png"
            draggable={false}
          />
        </div>
      </ComponentContainer>
    </div>
  )
}

export default HomePageContent
