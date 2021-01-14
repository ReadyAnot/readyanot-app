import _ from 'lodash'
import { makeStyles } from '@material-ui/core'
import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ComponentContainer, ComponentType } from './AppContainer'

const calculateDynamicHeight = (
  objectWidth: number,
  componentWidth: number,
  horizontalMargins: number
) => {
  const vh = window.innerHeight
  return objectWidth - componentWidth + vh - 2 * horizontalMargins
}

const handleDynamicHeight = (
  ref: MutableRefObject<HTMLDivElement>,
  setDynamicHeight: Dispatch<SetStateAction<number>>,
  componentWidth: number,
  horizontalMargins: number
) => {
  const objectWidth = ref.current.scrollWidth
  const dynamicHeight = calculateDynamicHeight(
    objectWidth,
    componentWidth,
    horizontalMargins
  )
  setDynamicHeight(dynamicHeight)
}

const applyScrollListener = (
  ref: MutableRefObject<HTMLDivElement>,
  setTranslateX: Dispatch<SetStateAction<number>>
) => {
  window.addEventListener('scroll', () => {
    const offsetTop = -ref.current.offsetTop
    setTranslateX(offsetTop)
  })
}

const calculateHorizontalMargins = (ref: MutableRefObject<HTMLDivElement>) => {
  const width = ref.current.clientWidth
  const margin = (window.innerWidth - width) / 2
  return margin
}

type useStyleProps = {
  dynamicHeight: number
  translateX: number
  marginBottom: number
  horizontalMargins: number
}

const useStyles = makeStyles({
  outerContainer: {
    height: ({ dynamicHeight }) => dynamicHeight,
    position: 'relative',
    width: '100%',
  },
  innerContainer: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    width: '100%',
    overflowX: 'hidden',
  },
  positionContainer: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
  },
  contentContent: {
    marginBottom: ({ marginBottom }) => marginBottom,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
  },
  translationContainer: {
    transform: ({ translateX }: useStyleProps) => `translateX(${translateX}px)`,
    margin: '2rem 0',
    willChange: 'transform',
  },
  scrollContentMargin: {
    paddingLeft: ({ horizontalMargins }) => horizontalMargins,
    paddingRight: ({ horizontalMargins }) => horizontalMargins,
  },
})

type StickyScrollProps = {
  Header: React.FC
}

const StickyScroll: React.FC<StickyScrollProps> = ({ Header, children }) => {
  const [dynamicHeight, setDynamicHeight] = useState<number>(null)
  const [translateX, setTranslateX] = useState<number>(0)
  const [marginBottom, setMarginBottom] = useState<number>(0)
  const [horizontalMargins, setHorizontalMargins] = useState<number>(0)

  const classes = useStyles({
    dynamicHeight,
    translateX,
    marginBottom,
    horizontalMargins,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const objectRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const resizeHandler = _.debounce(() => {
    const horizontalMargins = calculateHorizontalMargins(headerRef)
    const componentWidth = headerRef.current.clientWidth

    handleDynamicHeight(
      objectRef,
      setDynamicHeight,
      componentWidth,
      horizontalMargins
    )
    applyScrollListener(containerRef, setTranslateX)
    setHorizontalMargins(horizontalMargins)
    setMarginBottom(headerRef.current.clientHeight)
  }, 100)

  useEffect(() => resizeHandler(), [horizontalMargins])

  useEffect(() => window.addEventListener('resize', resizeHandler), [])

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer} ref={containerRef}>
        <div className={classes.positionContainer}>
          <div className={classes.contentContent}>
            <div className={classes.header}>
              <ComponentContainer type={ComponentType.Component}>
                <div ref={headerRef}>
                  <Header />
                </div>
              </ComponentContainer>
            </div>
            <div className={classes.translationContainer} ref={objectRef}>
              <div className={classes.scrollContentMargin}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyScroll
