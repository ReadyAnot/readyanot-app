import { Button, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { ComponentContainer, ComponentType } from '../AppContainer'

const useStyles = makeStyles((theme) => ({
  conversationsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h3': {
      marginBottom: '2rem',
    },
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  sideImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: '70%',
    },
  },
}))

const PrivilegeTestPrompt: React.FC = () => {
  const classes = useStyles()

  return (
    <ComponentContainer
      type={ComponentType.Section}
      className={classes.conversationsContainer}
    >
      <div
        className={classNames(
          classes.descriptionContainer,
          classes.textAlignCenter
        )}
      >
        <span>
          <Typography variant="h3" component="span">
            {'Majority '}
          </Typography>
          <Typography variant="h3" component="span" color="primary">
            {'Privilege'}
          </Typography>
        </span>
        <Typography variant="h3">{'Fact or Myth?'}</Typography>
        <Link href="/privilege-test">
          <a>
            <Button variant="contained" color="primary">
              Take the Quiz&nbsp;
              <ArrowForwardIosIcon style={{ fontSize: '1rem' }} />
            </Button>
          </a>
        </Link>
      </div>
      <div className={classes.sideImage}>
        <img
          src="/assets/home/privilege-test/graphic.svg"
          alt="privilege-test-graphic"
          draggable={false}
        />
      </div>
    </ComponentContainer>
  )
}

export default PrivilegeTestPrompt
