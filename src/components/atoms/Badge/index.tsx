import Flex from 'components/layout/Flex'

interface BadgeProps {
  /** バッジのテキスト */
  content: string

  /** バッジの色
   * red-600, yellow-200 など
   */
  backgroundColor: string
}

/** Atoms/Badge */
const Badge = ({ content, backgroundColor }: BadgeProps) => {
  const badgeTw = `badge inline-flex items-center justify-center h-5 w-5 rounded-full bg-${backgroundColor} `

  const contentTw = 'text-white text-xs select-none '

  return (
    <Flex tw={badgeTw}>
      <p className={contentTw}>{content}</p>
    </Flex>
  )
}

export default Badge
