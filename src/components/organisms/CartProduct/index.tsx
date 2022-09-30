import Image from 'next/image'
import Link from 'next/link'
import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

//削除ボタンのテキスト
//TODO onClickイベント
const RemoveText = (props: React.ComponentPropsWithRef<'span'>) => {
  const { children, className, onClick, ...rest } = props
  const tw = className + 'cursor-pointer hover:underline '

  return (
    <Text className={tw} onClick={onClick} {...rest}>
      {children}
    </Text>
  )
}

interface CartProductProps {
  /** 商品ID */
  id: number

  /** 商品画像URL */
  imageUrl: string

  /** 商品タイトル */
  title: string

  /** 商品価格 */
  price: number

  /** 購入ボタンを押した時のイベントハンドラ */
  onBuyButtonClick?: (id: number) => void

  /** 削除ボタンを押した時のイベントハンドラ */
  onRemoveButtonClick?: (id: number) => void
}

/** カート商品 */
const CartProduct = ({
  id,
  imageUrl,
  title,
  price,
  onBuyButtonClick,
  onRemoveButtonClick,
}: CartProductProps) => {
  return (
    <Flex className="justify-between ">
      <Flex>
        <Box className=" w-28 h-28">
          <Link href={`/products/${id}`} passHref>
            <a>
              <Image
                quality="85"
                src={imageUrl}
                alt={title}
                height={120}
                width={120}
                objectFit="cover"
              />
            </a>
          </Link>
        </Box>
        <Box className=" p-1 ">
          <Flex className="flex-col justify-between h-full ">
            <Box>
              <Text className="text-bold mt-0 mb-1 " variant="mediumLarge">
                {title}
              </Text>
              <Text className="m-0 ">{price}円</Text>
            </Box>

            <Flex className="mt-1 ">
              {/* 購入ボタン TODO onClickイベント */}
              <Button
                className=" w-24 "
                onClick={() => onBuyButtonClick && onBuyButtonClick(id)}
                variant="primary"
              >
                購入
              </Button>
              {/* 削除ボタン */}
              <Button
                className=" ml-1 block md:hidden w-24 "
                onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
                variant="danger"
              >
                削除
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Box className="hidden md:block ">
        <RemoveText
          className="text-red-600 "
          onClick={() => onRemoveButtonClick && onRemoveButtonClick(id)}
        >
          カートから削除
        </RemoveText>
      </Box>
    </Flex>
  )
}

export default CartProduct
