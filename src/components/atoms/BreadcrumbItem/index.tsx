export type BreadcrumbItemProps = React.ComponentPropsWithRef<'li'> //& {}
/** パンくずリスト要素 */
const BreadcrumbItem = (item: BreadcrumbItemProps) => {
  //TODO 子要素のLinkスタイル定義
  //TODO 子要素、:not(:first-child)のスタイル定義

  const itemStyle = 'list-none inline '
  return <li className={itemStyle}>{item.children}</li>
}

export default BreadcrumbItem
