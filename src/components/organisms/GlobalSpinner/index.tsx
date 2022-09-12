import Spinner from 'components/atoms/Spinner'
import { useGlobalSpinnerContext } from 'contexts/GlobalSpinnerContext'

//グローバルスピナーの背景
const GlobalSpinnerWrapper = (props: React.ComponentPropsWithRef<'div'>) => {
  const { children, className, ...rest } = props
  let tw =
    'fixed top-0 left-0 right-0 bottom-0 bg-white opacity-70 flex justify-center items-center z-50 '
  if (className) {
    tw += className
  }

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

/** グローバルスピナー */
const GlobalSpinner = () => {
  const isGlobalSpinnerOn = useGlobalSpinnerContext()

  return (
    <>
      {isGlobalSpinnerOn && (
        <GlobalSpinnerWrapper>
          <Spinner isAutoCentering={true} />
        </GlobalSpinnerWrapper>
      )}
    </>
  )
}

export default GlobalSpinner
