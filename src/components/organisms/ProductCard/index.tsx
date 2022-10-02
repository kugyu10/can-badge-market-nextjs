import ScaleImage from 'components/atoms/ScaleImage'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'

interface ProductCardProps {
  /** 商品タイトル */
  title: string

  /** 商品価格 */
  price: number

  /** 商品画像URL */
  imageUrl: string

  /** 商品のぼかし画像のデータURIスキーム */
  blurDataUrl?: string

  /** バリアント(表示スタイル) */
  variant?: 'listing' | 'small' | 'detail'
}

const ProductCardContainer = (props: React.ComponentPropsWithRef<'div'>) => {
  const { className, children, ...rest } = props
  const tw = className + ' relative '

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

const ProductCardImageContainer = (
  props: React.ComponentPropsWithRef<'div'>,
) => {
  const { className, children, ...rest } = props
  const tw = className ? className + ' z-49 ' : 'z-49 '

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

const ProductCardInfo = (props: React.ComponentPropsWithRef<'div'>) => {
  const { className, children, ...rest } = props
  const tw = className
    ? className + ' absolute z-50 top-0 left-0 '
    : ' absolute z-50 top-0 left-0 '

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

/** 商品カード */
const ProductCard = ({
  title,
  price,
  imageUrl,
  blurDataUrl,
  variant = 'listing',
}: ProductCardProps) => {
  const { size, imgSize } = (() => {
    switch (variant) {
      case 'detail':
        return { size: '540px', imgSize: 540 }
      case 'listing':
        return { size: '240px', imgSize: 240 }
      // TODO スマホのsize対応
      // eslint-disable-next-line no-duplicate-case
      case 'listing':
      default:
        return { size: '160px', imgSize: 160 }
    }
  })()

  return (
    <ProductCardContainer>
      {variant !== 'small' && (
        <ProductCardInfo>
          <Box>
            <h2 className="text-base md:text-lg tracking-normal md:tracking-wide bg-white m-0 px-0.5 py-0 ">
              {title}
            </h2>
            <span className="font-bold inline-block text-xs md:text-sm tracking-normal md:tracking-wide bg-white m-0 p-0.5">
              {price}円
            </span>
          </Box>
        </ProductCardInfo>
      )}
      <ProductCardImageContainer>
        {blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerHeight={size}
            containerWidth={size}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        )}
        {!blurDataUrl && (
          <ScaleImage
            src={imageUrl}
            width={imgSize ?? 240}
            height={imgSize ?? 240}
            containerHeight={size}
            containerWidth={size}
            objectFit="cover"
          />
        )}
      </ProductCardImageContainer>
      {variant === 'small' && (
        <Box className="mt-0.5">
          <h2 className="m-0 p-0 text-base ">{title}</h2>
          <Text variant="medium">{price}円</Text>
        </Box>
      )}
    </ProductCardContainer>
  )
}

export default ProductCard
