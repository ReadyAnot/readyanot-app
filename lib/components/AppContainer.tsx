import { Container, makeStyles } from '@material-ui/core'
import classNames from 'classnames'
import { useCopyRightHeight } from './Footer'

type StyleProps = {
  footerHeight: number
}

const usePageStyles = makeStyles({
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
    paddingBottom: (props: StyleProps) => props.footerHeight,
  },
})

const PageContainer: React.FC = ({ children }) => {
  const footerHeight = useCopyRightHeight()
  const classes = usePageStyles({ footerHeight })
  return <div className={classes.pageContainer}>{children}</div>
}

const useComponentStyles = makeStyles({
  componentContainer: {
    padding: '2.0625rem 2rem',
  },
})

export type ComponentContainerProps = {
  className?: string
}

export const ComponentContainer: React.FC<ComponentContainerProps> = ({
  children,
  className,
}) => {
  const classes = useComponentStyles()
  return (
    <Container
      className={classNames(classes.componentContainer, className)}
      maxWidth="lg"
    >
      {children}
    </Container>
  )
}

export default PageContainer
