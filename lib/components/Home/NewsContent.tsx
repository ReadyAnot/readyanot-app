import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { ComponentContainer } from '../AppContainer'

const useNewsCardScrollStyles = makeStyles({
  cardScroll: {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'hidden',
    '& div': {
      marginRight: '2rem',
      '&:last-child': {
        marginRight: 'unset',
      },
    },
  },
})

const NewsCardScroll: React.FC = ({ children }) => {
  const classes = useNewsCardScrollStyles()

  const [dynamicHeight, setDynamicHeight] = useState<number>(null)
  const [translateX, setTranslateX] = useState<number>(0)

  return <div className={classes.cardScroll}>{children}</div>
}

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
})

const NewsContent: React.FC = () => {
  const classes = useNewsContentStyles()

  return (
    <ComponentContainer>
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
      <NewsCardScroll>
        <NewsCard cardColor="#FFFFFF" />
        <NewsCard cardColor="#7D98A4" />
        <NewsCard cardColor="#28596C" />
      </NewsCardScroll>
    </ComponentContainer>
  )
}

export default NewsContent
