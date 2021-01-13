import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import StickyScroll from '../StickyScroll'

type newsCardStylesProps = {
  cardColor: string
}

const useNewsCardStyles = makeStyles({
  card: {
    backgroundColor: (props: newsCardStylesProps) => props.cardColor,
    borderRadius: 77,
    padding: '1rem 2rem',
    minWidth: 640,
    height: 320,
  },
})

type NewsCardProps = {
  cardColor: string
}

const NewsCard: React.FC<NewsCardProps> = ({ cardColor }) => {
  const classes = useNewsCardStyles({ cardColor })

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent></CardContent>
    </Card>
  )
}

const useNewsContentStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  cardScroll: {
    display: 'flex',
    '& div': {
      marginRight: '4rem',
      '&:last-child': {
        marginRight: 'unset',
      },
    },
  },
})

const NewsContent: React.FC = () => {
  const classes = useNewsContentStyles()

  const Header: React.FC = () => (
    <div className={classes.header}>
      <Typography style={{ fontSize: '14.375rem', lineHeight: 1 }}>
        {'YOU'}
      </Typography>
      <div style={{ marginLeft: '2rem' }}>
        <Typography
          style={{
            color: '#B79494',
            fontSize: '5rem',
            margin: 0,
            lineHeight: 1,
          }}
        >
          {'MIGHT'}
        </Typography>
        <Typography style={{ fontSize: '5rem', margin: 0, lineHeight: 1 }}>
          {'WANNA'}
        </Typography>
      </div>
    </div>
  )

  const ScrollContent: React.FC = () => (
    <div className={classes.cardScroll}>
      <NewsCard cardColor="#FFFFFF" />
      <NewsCard cardColor="#FFFFFF" />
      <NewsCard cardColor="#FFFFFF" />
      <NewsCard cardColor="#FFFFFF" />
      <NewsCard cardColor="#FFFFFF" />
      <NewsCard cardColor="#FFFFFF" />
    </div>
  )

  return (
    <StickyScroll Header={Header}>
      <ScrollContent />
    </StickyScroll>
  )
}

export default NewsContent
