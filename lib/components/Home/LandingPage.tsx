import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { ComponentContainer, ComponentType } from '../AppContainer'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    zIndex: 1,
  },
})

const LandingPage: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <ComponentContainer
        className={classes.container}
        type={ComponentType.Section}
      >
        <Typography style={{ fontSize: '12.5rem' }} color="textSecondary">
          {'SOCIAL'}
        </Typography>
        <Typography variant="h2" style={{ color: '#585858' }}>
          {'conversations made safe & open'}
        </Typography>
      </ComponentContainer>
      <div style={{ flex: 2 }} />
    </>
  )
}

export default LandingPage
