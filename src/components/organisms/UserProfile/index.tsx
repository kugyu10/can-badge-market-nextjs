import ShapeImage from 'components/atoms/ShapeImage'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

interface UserProfileProps {
  /** バリアント */
  variant?: 'normal' | 'small'

  /** ユーザー名 */
  username: string

  /** ユーザー画像URL */
  profileImageUrl: string

  /** ユーザーが所有する商品数 */
  numberOfProducts: number

  /** ユーザーの説明 */
  description?: string
}

/** ユーザープロファイル */
const UserProfile = ({
  variant = 'normal',
  username,
  profileImageUrl,
  numberOfProducts,
  description,
}: UserProfileProps) => {
  const profileImageSize = variant === 'small' ? '100px' : '120px'
  const twWidth = variant === 'small' ? 'w-24' : 'w-30'
  const tw = `min-${twWidth}
  `
  return (
    <Flex>
      <Box className={tw}>
        <ShapeImage
          shape="circle"
          quality="85"
          src={profileImageUrl}
          alt={username}
          height={profileImageSize}
          width={profileImageSize}
        />
      </Box>
      <Box className="p-0.5 ">
        <Flex className="h-full flex-col justify-between ">
          <Box className="my-auto ">
            <p>
              <Text variant="mediumLarge" className="mt-0 mb-0.5 font-bold ">
                {username}
              </Text>
            </p>
            <p>
              <Text className="mb-0.5 mt-0 ">{numberOfProducts}点 出品済</Text>
            </p>

            {variant === 'normal' && (
              <Text className="mt-0 ">{description}</Text>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default UserProfile
