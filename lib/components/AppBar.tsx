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
            <Hidden smDown>
              <Link href="/">
                <a>
                  <Button variant="text" size="large">
                    About
                  </Button>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Button variant="text" size="large">
                    Help
                  </Button>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Button variant="text" size="large">
                    Contact
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
