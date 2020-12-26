import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core'
import Link from 'next/link'
import AppContainer, { AppContainerTypes } from './AppContainer'
import HideOnScroll from './HideOnScroll'

const useStyles = makeStyles({
  toolBar: {
    minHeight: 200,
    '& img': {
      maxHeight: 120,
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
})

const MyAppBar: React.FC = () => {
  const classes = useStyles()

  return (
    <HideOnScroll>
      <AppBar color="transparent">
        <AppContainer type={AppContainerTypes.Nav}>
          <Toolbar className={classes.toolBar}>
            <Link href="/">
              <a>
                <img src="/ready-anot-logo.png" draggable={false} />
              </a>
            </Link>
            <div className={classes.buttonGroup}>
              <Button size="large" variant="text">
                Stage
              </Button>
              <Button size="large" variant="text">
                Forum
              </Button>
              <Button size="large" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </Toolbar>
        </AppContainer>
      </AppBar>
    </HideOnScroll>
  )
}

export default MyAppBar
