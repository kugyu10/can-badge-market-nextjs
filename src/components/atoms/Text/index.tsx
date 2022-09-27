//テキストバリアント
export type TextVariant =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'mediumLarge'
  | 'large'
  | 'extraLarge'

export type TextProps = React.ComponentPropsWithRef<'span'> & {
  variant?: TextVariant
  fontWeight?: string
  lineHeight?: number
  color?: string
  backgroundColor?: string
  margin?: string
  padding?: string
}

const variants = {
  //プライマリ
  extraSmall: ['text-xs'],
  small: ['text-sm'],
  medium: ['text-base'],
  mediumLarge: ['text-xl'],
  large: ['text-2xl'],
  extraLarge: ['text-3xl'],
}

const Text = (props: React.ComponentPropsWithRef<'span'> & TextProps) => {
  const { children, className, ...rest } = props
  let tw = className + 'm-1 p-1 font-sans ' //デフォルト、テキトー

  if (props.variant && variants[props.variant]) {
    tw += variants[props.variant].join(' ') + ' '
  }

  if (props.fontWeight) {
    tw += `font-${props.fontWeight} `
  }

  if (props.lineHeight) {
    tw += `leading-${props.lineHeight} `
  }

  if (props.color) {
    tw += `text-${props.color} `
  }

  if (props.backgroundColor) {
    tw += `bg-${props.backgroundColor} `
  }
  if (props.margin) {
    tw += `${props.margin} `
  }
  if (props.padding) {
    tw += `${props.padding} `
  }

  return (
    <span className={tw} onClick={props.onClick} {...rest}>
      {children}
    </span>
  )
}

export default Text
