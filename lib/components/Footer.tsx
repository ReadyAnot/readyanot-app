import {
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { FooterCanvas } from '../styles/theme'
import { ComponentContainer } from './AppContainer'

export const useCopyRightHeight = () => {
  const theme = useTheme()
  const isLargeFooter = useMediaQuery(theme.breakpoints.up('md'))
  return isLargeFooter ? 153 : 172
}

type StyleProps = {
  footerHeight: number
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: FooterCanvas,
    bottom: 0,
    height: (props: StyleProps) => props.footerHeight,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    '& a': {
      textDecoration: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  footerContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  divider: {
    margin: '0 1rem',
  },
  links: {
    '& p': {
      marginBottom: '0.25rem',
      '&:last-child': {
        marginBottom: 'unset',
      },
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      display: 'flex',
      '& p': {
        marginBottom: 'unset',
      },
    },
  },
  copyright: {
    fontWeight: 400,
    marginTop: '0.75rem',
    opacity: 0.7,
  },
}))

const MyFooter: React.FC = () => {
  const footerHeight = useCopyRightHeight()
  const classes = useStyles({ footerHeight })

  const Divider = () => (
    <Hidden xsDown>
      <Typography
        className={classes.divider}
        variant="body2"
        color="textSecondary"
      >
        {'|'}
      </Typography>
    </Hidden>
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
              {`© Copyright ${new Date().getFullYear()} ReadyAnot`}
            </Typography>
          </div>
        </div>
      </ComponentContainer>
    </footer>
  )
}

export default MyFooter
