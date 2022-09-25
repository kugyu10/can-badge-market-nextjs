export type GridProps = {
  /** Tailwindでのスタイル gap-1, grid-cols-1 などを指定 */
  tw?: string
}

/** Gridコンポーネント */
const Grid = (props: React.ComponentPropsWithRef<'div'> & GridProps) => {
  const { className, children, ...rest } = props
  const tw = 'grid ' + className ?? ''

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

export default Grid
