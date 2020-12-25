import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import AppContainer, { AppContainerTypes } from './AppContainer'
import HideOnScroll from './HideOnScroll'

const useStyles = makeStyles({
  buttonGroup: {
    marginLeft: 'auto',
    '& button': {
      marginRight: '1rem',
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
          <Toolbar>
            <Typography variant="h6">ReadyAnot</Typography>
            <div className={classes.buttonGroup}>
              <Button size="large" variant="text">
                Stage
              </Button>
              <Button size="large" variant="text">
                Forum
              </Button>
              <Button size="large" variant="text">
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
