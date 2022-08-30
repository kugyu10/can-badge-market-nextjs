import Badge from 'components/atoms/Badge'

const BadgeIconButtonWrapper = (
  props: React.ComponentPropsWithRef<'span'> & { size: number | string },
) => {
  const tw = `relative flex items-center h-${props.size} w-${props.size}`
  return <span className={tw}>{props.children}</span>
}

const BadgeWrapper = (props: React.ComponentPropsWithRef<'div'>) => {
  const tw = 'absolute -top-2 -right-3 '
  return <div className={tw}>{props.children}</div>
}

type BadgeIconButton = {
  icon: React.ReactNode
  badgeContent?: number
  badgeBackgroundColor: string
  size?: number | string
}

/** バッジ付きアイコンボタン */
const BadgeIconButton = ({
  icon,
  size = '24px',
  badgeContent,
  badgeBackgroundColor,
}: BadgeIconButton) => {
  return (
    <BadgeIconButtonWrapper size={size}>
      {icon}
      {badgeContent && (
        <BadgeWrapper data-testid="badge-wrapper">
          <Badge
            content={`${badgeContent}`}
            backgroundColor={badgeBackgroundColor}
          />
        </BadgeWrapper>
      )}
    </BadgeIconButtonWrapper>
  )
}

export default BadgeIconButton
