import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { ComponentContainer, ComponentType } from '../AppContainer'

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    '& span': {
      fontWeight: 'normal',
    },
  },
  pinkText: {
    color: '#FC9999',
  },
})

const DoMoreSection = () => {
  const classes = useStyles()

  return (
    <ComponentContainer
      type={ComponentType.Section}
      className={classes.container}
    >
      <span>
        <Typography variant="h1" component="span">
          {'DO M'}
        </Typography>
        <Typography variant="h1" component="span" className={classes.pinkText}>
          {'O'}
        </Typography>
        <Typography variant="h1" component="span">
          {'RE'}
        </Typography>
      </span>
      <Typography variant="body1">{'Dedicate your hearts, linked horizon'}</Typography>
    </ComponentContainer>
  )
}

export default DoMoreSection
