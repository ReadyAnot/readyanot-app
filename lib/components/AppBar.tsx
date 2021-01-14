import {
  AppBar,
  Button,
  Hidden,
  makeStyles,
  Toolbar,
} from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import { ComponentContainer, ComponentType } from './AppContainer'

const useStyles = makeStyles((theme) => ({
  toolBar: {
    padding: 0,
    '& img': {
      maxHeight: 90,
    },
    [theme.breakpoints.up('sm')]: {
      '& img': {
        maxHeight: 120,
      },
    },
  },
  appLogo: {
    maxHeight: 120,
  },
  buttonGroup: {
    display: 'flex',
    marginLeft: 'auto',
    '& a': {
      color: 'inherit',
      marginRight: '1rem',
      textDecoration: 'none',
      '&:last-child': {
        marginRight: 'unset',
      },
    },
  },
}))

const MyAppBar: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="transparent">
      <ComponentContainer type={ComponentType.AppBar}>
        <Toolbar className={classes.toolBar}>
          <Link href="/">
            <a>
              <img
                src="/ready-anot-logo.png"
                className={classes.appLogo}
                draggable={false}
              />
            </a>
          </Link>
          <div className={classes.buttonGroup}>
            <Hidden xsDown>
              <Link href="/">
                <a>
                  <Button variant="text">About</Button>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Button variant="text">Help</Button>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Button variant="text">Contact</Button>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Button variant="text">
                    <i>My Account</i>
                  </Button>
                </a>
              </Link>
            </Hidden>
          </div>
        </Toolbar>
      </ComponentContainer>
    </AppBar>
  )
}

export default MyAppBar
