export type BoxProps = {
  /** Tailwindでのスタイル color、width、margin、paddingなどを指定 */
  tw: string
}

/** Boxコンポーネント */
const Box = (props: React.ComponentPropsWithRef<'div'> & BoxProps) => {
  return <div className={props.tw}>{props.children}</div>
}

export default Box
