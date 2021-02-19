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

const useComponentStyles = makeStyles((theme) => ({
  appBarPadding: {
    padding: '2rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 1rem',
    },
  },
  sectionPadding: {
    padding: '6rem 2rem',
    [theme.breakpoints.down('xs')]: {
      padding: '4rem 1rem',
    },
  },
}))

export enum ComponentType {
  AppBar,
  Section,
  Component,
  PaddingOnly,
}

export type ComponentContainerProps = {
  className?: string
  type: ComponentType
}

export const ComponentContainer: React.FC<ComponentContainerProps> = ({
  children,
  className,
  type = ComponentType.AppBar,
}) => {
  const classes = useComponentStyles()

  if (type == ComponentType.PaddingOnly) {
    return (
      <Container maxWidth={false} className={classes.sectionPadding}>
        {children}
      </Container>
    )
  }

  return (
    <Container
      className={classNames(
        { [classes.appBarPadding]: type === ComponentType.AppBar },
        { [classes.sectionPadding]: type === ComponentType.Section },
        className
      )}
      maxWidth="lg"
    >
      {children}
    </Container>
  )
}

export default PageContainer
