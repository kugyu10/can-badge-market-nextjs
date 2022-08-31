import Badge from 'components/atoms/Badge'

const BadgeIconButtonWrapper = (
  props: React.ComponentPropsWithRef<'span'> & { twSize: number },
) => {
  const tw = `relative flex items-center h-${props.twSize} w-${props.twSize} `
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
  twSize?: number
}

/** バッジ付きアイコンボタン */
const BadgeIconButton = ({
  icon,
  twSize = 6,
  badgeContent,
  badgeBackgroundColor,
}: BadgeIconButton) => {
  return (
    <BadgeIconButtonWrapper twSize={twSize}>
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
