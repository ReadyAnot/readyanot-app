import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { ComponentContainer, ComponentType } from '../AppContainer'

const useStyles = makeStyles((theme) => ({
  asSeenOn: {
    overflow: 'hidden',
    width: '100%',
  },
  asSeenOnContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  asSeenOnLogos: {
    alignItems: 'center',
    columnGap: '3rem',
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto auto',
    justifyContent: 'center',
    rowGap: '2rem',
    marginTop: '2rem',
    width: '100%',
    '& img': {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxHeight: 60,
      maxWidth: 120,
    },
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'auto auto auto auto',
      gridTemplateRows: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      columnGap: '5rem',
      '& img': {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxHeight: 80,
        maxWidth: 160,
      },
    },
  },
}))

const FeaturedPartners = () => {
  const classes = useStyles()

  return (
    <div id="as-seen-on" className={classes.asSeenOn}>
      <ComponentContainer type={ComponentType.Section}>
        <div className={classes.asSeenOnContent}>
          <div>
            <Typography variant="h5">{'Featured On'}</Typography>
            <div className={classes.asSeenOnLogos}>
              <img
                src="/assets/home/as-seen-on/mccy-logo-dark.svg"
                alt="mccy-logo"
                draggable={false}
              />
              <img
                src="/assets/home/as-seen-on/startupx-logo.png"
                alt="startupx-logo"
                draggable={false}
              />
              <img
                src="/assets/home/as-seen-on/berita-harian-logo.svg"
                alt="berita-harian-logo"
                draggable={false}
              />
              <img
                src="/assets/home/as-seen-on/groundup-sandbox-logo.svg"
                alt="ground-up-sandbox"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </ComponentContainer>
    </div>
  )
}

export default FeaturedPartners
