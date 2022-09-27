import Flex from 'components/layout/Flex'

interface ProductCardCarouselProps {
  children?: React.ReactNode
}

/** 商品カードカルーセル */
const ProductCardCarousel = ({ children }: ProductCardCarouselProps) => {
  return (
    <Flex className="overflow-scroll md:overflow-hidden w-full ">
      {children}
    </Flex>
  )
}

export default ProductCardCarousel
