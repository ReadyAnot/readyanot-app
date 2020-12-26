import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
  },
})

const PageContainer: React.FC = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.container}>{children}</div>
}

export const ComponentContainer: React.FC = ({ children }) => (
  <Container maxWidth="lg">{children}</Container>
)

export default PageContainer
