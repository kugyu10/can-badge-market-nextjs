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
  const badgeClasses =
    'badge inline-flex items-center justify-center h-5 w-5 rounded-full bg-' +
    backgroundColor

  const contentClasses = 'text-white text-xs select-none '

  return (
    <div className={badgeClasses}>
      <p className={contentClasses}>{content}</p>
    </div>
  )
}

export default Badge
