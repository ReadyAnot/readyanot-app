import { makeStyles, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { FooterCanvas } from '../styles/theme'
import { ComponentContainer } from './AppContainer'

const useStyles = makeStyles({
  footer: {
    backgroundColor: FooterCanvas,
    bottom: 0,
    height: 153,
    padding: '4rem',
    position: 'absolute',
    width: '100%',
    '& a': {
      textDecoration: 'none',
    },
  },
  footerContent: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  divider: {
    margin: '0 1rem',
  },
  links: {
    alignItems: 'center',
    display: 'flex',
  },
  copyright: {
    fontWeight: 400,
    opacity: 0.7,
  },
})

const MyFooter: React.FC = () => {
  const classes = useStyles()

  const Divider = () => (
    <Typography
      className={classes.divider}
      variant="body2"
      color="textSecondary"
    >
      {'|'}
    </Typography>
  )

  return (
    <footer className={classes.footer}>
      <ComponentContainer>
        <div className={classes.footerContent}>
          <div className={classes.links}>
            <Link href="/">
              <a>
                <Typography variant="body1" color="textSecondary">
                  {'Home'}
                </Typography>
              </a>
            </Link>
            <Divider />
            <Link href="/">
              <a>
                <Typography variant="body1" color="textSecondary">
                  {'Our Partners'}
                </Typography>
              </a>
            </Link>
            <Divider />
            <Link href="/">
              <a>
                <Typography variant="body1" color="textSecondary">
                  {'About'}
                </Typography>
              </a>
            </Link>
            <Divider />
            <Link href="/">
              <a>
                <Typography variant="body1" color="textSecondary">
                  {'Legal'}
                </Typography>
              </a>
            </Link>
          </div>
          <div>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.copyright}
            >
              {`© Copyright ${new Date().getFullYear()} ReadyAnot. All Rights Reserved.`}
            </Typography>
          </div>
        </div>
      </ComponentContainer>
    </footer>
  )
}

export default MyFooter
