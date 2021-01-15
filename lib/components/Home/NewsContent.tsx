import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import StickyScroll from '../StickyScroll'

type newsCardStylesProps = {
  cardColor: string
}

const useNewsCardStyles = makeStyles({
  card: {
    backgroundColor: (props: newsCardStylesProps) => props.cardColor,
    padding: '1rem 2rem',
    minWidth: 400,
    minHeight: 500,
  },
})

type NewsCardProps = {
  cardColor: string
}

const NewsCard: React.FC<NewsCardProps> = ({ cardColor }) => {
  const classes = useNewsCardStyles({ cardColor })

  return (
    <Card variant="elevation" className={classes.card}>
      <CardContent>
        <Typography style={{ fontWeight: 700, textAlign: 'right' }}>
          {'Know This 🔥'}
        </Typography>
      </CardContent>
    </Card>
  )
}

const useNewsContentStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'baseline',
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
      <Typography
        style={{
          color: '#FFFFFF',
          fontSize: '10rem',
          lineHeight: 1,
          margin: 0,
        }}
      >
        {'YOU'}
      </Typography>
      <div style={{ marginLeft: '-4rem' }}>
        <Typography
          style={{
            fontSize: '5rem',
            fontWeight: 700,
            margin: 0,
            lineHeight: 1,
          }}
        >
          {'might wanna'}
        </Typography>
      </div>
    </div>
  )

  const ScrollContent: React.FC = () => (
    <div className={classes.cardScroll}>
      <NewsCard cardColor="#FFFFFF" />
      <NewsCard cardColor="#E7E7E7" />
      <NewsCard cardColor="#A9C1A0" />
      <NewsCard cardColor="#FFFFFF" />
      <NewsCard cardColor="#E7E7E7" />
      <NewsCard cardColor="#A9C1A0" />
    </div>
  )

  return (
    <StickyScroll Header={Header}>
      <ScrollContent />
    </StickyScroll>
  )
}

export default NewsContent
