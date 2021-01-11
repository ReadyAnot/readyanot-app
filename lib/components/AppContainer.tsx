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

type ComponentStyleProps = {
  componentPadding: string
}

const useComponentStyles = makeStyles({
  componentContainer: {
    padding: (props: ComponentStyleProps) => props.componentPadding,
  },
})

export enum ComponentType {
  AppBar,
  Section,
}

export type ComponentContainerProps = {
  className?: string
  type?: ComponentType
}

export const ComponentContainer: React.FC<ComponentContainerProps> = ({
  children,
  className,
  type = ComponentType.AppBar,
}) => {
  const classes = useComponentStyles({
    componentPadding:
      type == ComponentType.AppBar ? '2.0625rem 2rem' : '4rem 2rem',
  })

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
