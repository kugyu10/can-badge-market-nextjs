type SpinnerProps = {
  size?: number
  strokeWidth?: number
  isAutoCentering?: boolean
}

/** スピナー */
const Spinner = (props: SpinnerProps) => {
  const { size = 50, strokeWidth = 4, isAutoCentering = false } = props

  return (
    <div className="flex justify-center">
      <div className="animate-spin h-10 w-10 border-4 border-gray-800 rounded-full border-t-transparent"></div>
    </div>
  )
}

export default Spinner
