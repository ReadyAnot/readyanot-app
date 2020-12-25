import { Slide, useScrollTrigger } from '@material-ui/core'

export type HideOnScrollProps = {
  children: React.ReactElement
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
