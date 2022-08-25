type SpinnerProps = {
  size?: number
  strokeWidth?: number
  isAutoCentering?: boolean
}

/** スピナー */
const Spinner = (props: SpinnerProps) => {
  const { size = 50, strokeWidth = 4, isAutoCentering = false } = props

  //TODO margin -(size/2)
  let svgCss = ''
  if (isAutoCentering) {
    svgCss += 'margin: -50% 0 0 -50%;'
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        className="path"
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth / 2}
        fill="red"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}

export default Spinner
