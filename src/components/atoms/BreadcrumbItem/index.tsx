export type BreadcrumbItemProps = React.ComponentPropsWithRef<'li'> //& {}
/** パンくずリスト要素 */
const BreadcrumbItem = (item: BreadcrumbItemProps) => {
  //TODO 子要素のLinkスタイル定義
  //TODO 子要素、:not(:first-child)のスタイル定義

  const tw =
    'list-none inline text-gray-600 before:content-["/"] ' +
    'before:px-2 before:text-gray-400 first:before:content-none first:before:px-0 '

  return <li className={tw}>{item.children}</li>
}

export default BreadcrumbItem
