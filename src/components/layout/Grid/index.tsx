export type GridProps = {
  /** Tailwindでのスタイル gap-1, grid-cols-1 などを指定 */
  tw?: string
}

/** Gridコンポーネント */
const Grid = (props: React.ComponentPropsWithRef<'div'> & GridProps) => {
  const { tw, children, ...rest } = props
  const twGrid = 'grid ' + tw ?? ''

  return (
    <div className={twGrid} {...rest}>
      {children}
    </div>
  )
}

export default Grid
