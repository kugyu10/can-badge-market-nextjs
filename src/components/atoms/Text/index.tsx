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

const Text = (text: TextProps) => {
  let textClasses = 'm-2 p-2 font-sans ' //デフォルト、テキトー

  if (text.variant && variants[text.variant]) {
    textClasses += variants[text.variant].join(' ') + ' '
  }

  if (text.fontWeight) {
    textClasses += `font-${text.fontWeight} `
  }

  if (text.lineHeight) {
    textClasses += `leading-${text.lineHeight} `
  }

  if (text.color) {
    textClasses += `text-${text.color} `
  }

  if (text.backgroundColor) {
    textClasses += `bg-${text.backgroundColor} `
  }
  if (text.margin) {
    textClasses += `${text.margin} `
  }
  if (text.padding) {
    textClasses += `${text.padding} `
  }

  return <span className={textClasses}>{text.children}</span>
}

export default Text
