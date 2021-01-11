import { AppBar, Button, Hidden, makeStyles, Toolbar } from '@material-ui/core'
import Link from 'next/link'
import { ComponentContainer } from './AppContainer'

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
  buttonGroup: {
    marginLeft: 'auto',
    '& button': {
      marginRight: '1.25rem',
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
      <ComponentContainer>
        <Toolbar className={classes.toolBar}>
          <Link href="/">
            <a>
              <img src="/ready-anot-logo.png" draggable={false} />
            </a>
          </Link>
          <div className={classes.buttonGroup}>
            <Hidden xsDown>
              <Button size="large" variant="text">
                About
              </Button>
              <Button size="large" variant="text">
                Help
              </Button>
              <Button size="large" variant="text">
                Contact
              </Button>
              <Button size="large" variant="text">
                <i>My Account</i>
              </Button>
            </Hidden>
          </div>
        </Toolbar>
      </ComponentContainer>
    </AppBar>
  )
}

export default MyAppBar
