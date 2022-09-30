/** Flexコンポーネント */
const Flex = (props: React.ComponentPropsWithRef<'div'>) => {
  const { className, children, ...rest } = props
  const tw = 'flex ' + className ?? ''

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

export default Flex
