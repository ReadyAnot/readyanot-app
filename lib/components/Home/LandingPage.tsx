import { makeStyles, Typography, useTheme } from '@material-ui/core'
import React from 'react'
import { ComponentContainer, ComponentType } from '../AppContainer'

const useStyles = makeStyles({
  centerBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    display: 'inline-block',
    '& h1': {
      fontSize: '12vw',
      fontWeight: 'bold',
      margin: '0 2rem',
      lineHeight: 0.9,
    },
    '& h3': {
      fontWeight: 'normal',
      textAlign: 'right',
    },
  },
})

const LandingPage: React.FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const primaryTextColor = theme.palette.primary.main

  return (
    <>
      <ComponentContainer type={ComponentType.Section}>
        <div className={classes.centerBox}>
          <div>
            <div className={classes.header}>
              <Typography variant="h1" color="primary">
                {'CANDID'}
              </Typography>
              <Typography variant="h3" color="primary">
                {'Conversations'}
              </Typography>
            </div>
            <div style={{ marginTop: '3rem' }} className={classes.centerBox}>
              <Typography style={{ fontWeight: 600 }} variant="h5">
                <i style={{ color: '#55644F70' }}>
                  We're creating a more{' '}
                  <span style={{ color: primaryTextColor }}>
                    vocal & empathetic
                  </span>{' '}
                  society
                </i>
              </Typography>
            </div>
          </div>
        </div>
      </ComponentContainer>
    </>
  )
}

export default LandingPage
