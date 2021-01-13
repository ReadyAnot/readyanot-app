import {
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { ComponentContainer, ComponentType } from './AppContainer'

export const useCopyRightHeight = () => {
  const theme = useTheme()
  const isLargeFooter = useMediaQuery(theme.breakpoints.up('md'))
  return isLargeFooter ? 160 : 184
}

type StyleProps = {
  footerHeight: number
}

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    height: (props: StyleProps) => props.footerHeight,
    opacity: 0.5,
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
  links: {
    '& a': {
      marginBottom: '0.25rem',
      marginRight: '3.75rem',
      '& last-child': {
        marginRight: 'unset',
      },
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
      display: 'flex',
      '& a': {
        marginBottom: 'unset',
      },
    },
  },
}))

const MyFooter: React.FC = () => {
  const footerHeight = useCopyRightHeight()
  const classes = useStyles({ footerHeight })

  return (
    <footer className={classes.footer}>
      <ComponentContainer type={ComponentType.AppBar}>
        <div className={classes.footerContent}>
          <div className={classes.links}>
            <Link href="/">
              <a>
                <Typography variant="h6" color="textPrimary">
                  About
                </Typography>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Typography variant="h6" color="textPrimary">
                  Help Centre
                </Typography>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Typography variant="h6" color="textPrimary">
                  Terms of Service
                </Typography>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Typography variant="h6" color="textPrimary">
                  Cookie Policy
                </Typography>
              </a>
            </Link>
          </div>
          <div>
            <Typography variant="h6" color="textPrimary">
              {`© ${new Date().getFullYear()} ReadyAnot`}
            </Typography>
          </div>
        </div>
      </ComponentContainer>
    </footer>
  )
}

export default MyFooter
