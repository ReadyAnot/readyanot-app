import {
  Button,
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
      marginRight: '1rem',
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
                <Button variant="text">About</Button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Button variant="text">Help Centre</Button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Button variant="text">Terms of Service</Button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Button variant="text">Cookie Policy</Button>
              </a>
            </Link>
          </div>
          <div>
            <Typography variant="subtitle1" color="textPrimary">
              {`© ${new Date().getFullYear()} ReadyAnot`}
            </Typography>
          </div>
        </div>
      </ComponentContainer>
    </footer>
  )
}

export default MyFooter
