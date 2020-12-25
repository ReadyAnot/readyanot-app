import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  },
})

export enum AppContainerTypes {
  Nav,
  Page,
}

export type AppContainerProps = {
  type: AppContainerTypes
}

const AppContainer: React.FC<AppContainerProps> = ({ type, children }) => {
  const classes = useStyles()
  const baseContainer = <Container maxWidth="lg">{children}</Container>
  if (type === AppContainerTypes.Page) {
    return <div className={classes.container}>{baseContainer}</div>
  }
  return baseContainer
}

export default AppContainer
