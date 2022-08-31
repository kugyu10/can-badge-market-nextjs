import Flex from 'components/layout/Flex'

type SpinnerProps = {
  twSize?: number
  strokeWidth?: number
  isAutoCentering?: boolean
}

/** スピナー */
const Spinner = (props: SpinnerProps) => {
  const { twSize = 10, strokeWidth = 4, isAutoCentering = false } = props
  let tw = `animate-spin h-${twSize} w-${twSize} border-${strokeWidth} border-gray-800 rounded-full border-t-transparent `

  if (isAutoCentering) {
    tw += `mt-${twSize / 2} ml-${twSize / 2} `
  }

  return (
    <Flex tw="justify-center">
      <div className={tw}></div>
    </Flex>
  )
}

export default Spinner
