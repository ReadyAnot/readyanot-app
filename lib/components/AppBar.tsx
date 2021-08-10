import { AppBar, Button, Hidden, makeStyles, Toolbar } from '@material-ui/core'
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
    width: 160,
    maxWidth: '30vw',
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

  const handleClick = () => {
    window.scrollBy(0, 2830)
  }

  return (
    <AppBar position="static" color="transparent">
      <ComponentContainer type={ComponentType.AppBar}>
        <Toolbar className={classes.toolBar}>
          <Link href="/">
            <a>
              <img
                src="/candid-logo.svg"
                alt="candid-logo"
                className={classes.appLogo}
                draggable={false}
              />
            </a>
          </Link>
          <div className={classes.buttonGroup}>
            <Link href="/privilege-test">
              <a>
                <Button variant="text" size="large">
                  Majority Privilege Quiz
                </Button>
              </a>
            </Link>
            <Button variant="text" size="large" onClick={handleClick}>
              Contact
            </Button>
          </div>
        </Toolbar>
      </ComponentContainer>
    </AppBar>
  )
}

export default MyAppBar
