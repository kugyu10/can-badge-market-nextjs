export type GridProps = {
  /** Tailwindでのスタイル gap-1, grid-cols-1 などを指定 */
  tw: string
}

/** Gridコンポーネント */
const Grid = (props: React.ComponentPropsWithRef<'div'> & GridProps) => {
  const tw = 'grid ' + props.tw

  return <div className={tw}>{props.children}</div>
}

export default Grid
