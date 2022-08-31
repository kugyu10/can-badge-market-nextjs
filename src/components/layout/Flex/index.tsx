export type FlexProps = {
  /** Tailwindでのスタイル items-center, justify-center, grow などを指定 */
  tw?: string
}

/** Flexコンポーネント */
const Flex = (props: React.ComponentPropsWithRef<'div'> & FlexProps) => {
  const { tw, children, ...rest } = props
  const twFlex = 'flex ' + tw ?? ''

  return (
    <div className={twFlex} {...rest}>
      {children}
    </div>
  )
}

export default Flex
