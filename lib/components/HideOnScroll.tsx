import { Slide, useScrollTrigger } from '@material-ui/core'

const HideOnScroll: React.FC = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <>{children}</>
    </Slide>
  )
}

export default HideOnScroll
