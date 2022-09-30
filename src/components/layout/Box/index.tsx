/** Boxコンポーネント */
const Box = (props: React.ComponentPropsWithRef<'div'>) => {
  const { className, children, ...rest } = props
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

export default Box
