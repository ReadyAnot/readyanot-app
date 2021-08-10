import {
  Button,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import React from 'react'
import { ComponentContainer, ComponentType } from './AppContainer'

export const useCopyRightHeight = () => {
  const theme = useTheme()
  const isLargeFooter = useMediaQuery(theme.breakpoints.up('md'))
  return isLargeFooter ? 100 : 100
}

type StyleProps = {
  footerHeight: number
}

const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#CCE0C5',
    bottom: 0,
    height: (props: StyleProps) => props.footerHeight,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    '& a': {
      textDecoration: 'none',
    },
  },

  // Desktop footer styles
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  links: {
    alignItems: 'center',
    display: 'flex',
    '& a': {
      marginBottom: 'unset',
    },
  },

  // Mobile footer styles
  mobileFooterContent: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  mobileFooterHeader: {
    fontWeight: 600,
    marginBottom: '1rem',
  },
  inlineIcon: {
    display: 'flex',
    marginTop: '0.25rem',
    '& svg': {
      marginRight: '0.5rem',
    },
  },
  mobileCopyright: {
    fontWeight: 600,
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}))

const MyFooter: React.FC = () => {
  const footerHeight = useCopyRightHeight()
  const classes = useStyles({ footerHeight })

  const DesktopFooter: React.FC = () => (
    <div className={classes.footerContent}>
      <div>
        <Typography variant="subtitle1" color="textPrimary">
          {`© ${new Date().getFullYear()} Candid`}
        </Typography>
      </div>
    </div>
  )

  const MobileFooter: React.FC = () => (
    <div className={classes.mobileFooterContent}>
      <Typography
        variant="body1"
        color="textPrimary"
        className={classes.mobileCopyright}
      >
        {`© ${new Date().getFullYear()} Candid`}
      </Typography>
    </div>
  )

  return (
    <footer className={classes.footer}>
      <ComponentContainer type={ComponentType.Section}>
        <Hidden smDown>
          <DesktopFooter />
        </Hidden>
        <Hidden mdUp>
          <MobileFooter />
        </Hidden>
      </ComponentContainer>
    </footer>
  )
}

export default MyFooter
