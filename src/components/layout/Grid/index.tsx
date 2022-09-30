/** Gridコンポーネント */
const Grid = (props: React.ComponentPropsWithRef<'div'>) => {
  const { className, children, ...rest } = props
  const tw = 'grid ' + className

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

export default Grid
