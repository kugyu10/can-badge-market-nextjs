export type FlexProps = {
  /** Tailwindでのスタイル items-center, justify-center, grow などを指定 */
  tw: string
}

/** Flexコンポーネント */
const Flex = (props: React.ComponentPropsWithRef<'div'> & FlexProps) => {
  const tw = 'flex ' + props.tw

  return <div className={tw}>{props.children}</div>
}

export default Flex
