export type BoxProps = {
  /** Tailwindでのスタイル color、width、margin、paddingなどを指定 */
  tw?: string
}

/** Boxコンポーネント */
const Box = (props: React.ComponentPropsWithRef<'div'> & BoxProps) => {
  const { tw, children, ...rest } = props
  return (
    <div className={tw ?? ''} {...rest}>
      {children}
    </div>
  )
}

export default Box
