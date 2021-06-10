import {
  Button,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import MailIcon from '@material-ui/icons/Mail'
import Link from 'next/link'
import React from 'react'
import { ComponentContainer, ComponentType } from './AppContainer'

export const useCopyRightHeight = () => {
  const theme = useTheme()
  const isLargeFooter = useMediaQuery(theme.breakpoints.up('md'))
  return isLargeFooter ? 160 : 335
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
      <div className={classes.links}>
        <div id="about-link">
          <Link href="#">
            <a>
              <Button variant="text">About</Button>
            </a>
          </Link>
        </div>
        <div id="help-centre-link">
          <Link href="#">
            <a>
              <Button variant="text">Help Centre</Button>
            </a>
          </Link>
        </div>
        <div id="terms-of-service-link">
          <Link href="#">
            <a>
              <Button variant="text">Terms of Service</Button>
            </a>
          </Link>
        </div>
        <div id="cookie-policy-link">
          <Link href="#">
            <a>
              <Button variant="text">Cookie Policy</Button>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <Typography variant="subtitle1" color="textPrimary">
          {`© ${new Date().getFullYear()} Candid`}
        </Typography>
      </div>
    </div>
  )

  const MobileFooter: React.FC = () => (
    <div className={classes.mobileFooterContent}>
      <Link href="/">
        <a>
          <Typography variant="body1" className={classes.mobileFooterHeader}>
            {'Home'}
          </Typography>
        </a>
      </Link>
      <Link href="#">
        <a>
          <Typography variant="body1" className={classes.mobileFooterHeader}>
            {'About'}
          </Typography>
        </a>
      </Link>
      <Link href="#">
        <a>
          <Typography variant="body1" className={classes.mobileFooterHeader}>
            {'Privacy Policy'}
          </Typography>
        </a>
      </Link>
      <Typography variant="body1" className={classes.mobileFooterHeader}>
        {'Contact Us'}
      </Typography>
      <div className={classes.inlineIcon}>
        <InstagramIcon />
        <Link href="https://www.instagram.com/candid.sg/">
        <a>
        <Typography>{'@candid.sg'}</Typography>
        </a>
      </Link>
      </div>
      <div className={classes.inlineIcon}>
        <MailIcon />
        <Typography>{'candoursg2020@gmail.com'}</Typography>
      </div>
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
