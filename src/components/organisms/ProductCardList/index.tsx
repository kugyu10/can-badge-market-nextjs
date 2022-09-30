import Grid from 'components/layout/Grid'

interface ProductCardListProps {
  /** 一行に表示する商品数 */
  numberPerRow?: number

  /** モバイルで1行に表示する商品数 */
  numberPerRowForMobile?: number
}

/** 商品カードリスト */
const ProductCardList = ({
  children,
}: React.PropsWithChildren<ProductCardListProps>) => (
  <Grid className=" gap-4 grid-cols-2 md:grid-cols-4">{children}</Grid>
)

export default ProductCardList
