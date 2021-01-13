import {
  AppBar,
  Hidden,
  makeStyles,
  Toolbar,
  Typography,
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
  title: {
    color: 'inherit',
    fontSize: '3.125rem',
    fontWeight: 900,
    textDecoration: 'none',
  },
  buttonGroup: {
    display: 'flex',
    marginLeft: 'auto',
    '& a': {
      color: 'inherit',
      marginRight: '2.6875rem',
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
            <a className={classes.title}>Ready Anot</a>
          </Link>
          <div className={classes.buttonGroup}>
            <Hidden xsDown>
              <Link href="/">
                <a>
                  <Typography variant="h6">About</Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography variant="h6">Help</Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography variant="h6">Contact</Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography variant="h6">
                    <i>My Account</i>
                  </Typography>
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
