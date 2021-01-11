import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  fullViewHeight: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
})

const FullViewHeight: React.FC = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.fullViewHeight}>{children}</div>
}

export default FullViewHeight
