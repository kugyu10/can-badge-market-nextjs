//ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = React.ComponentPropsWithRef<'button'> & {
  variant?: ButtonVariant
  width?: number
  height?: number
  disabled?: boolean
  //onClick?: function
}

const variants = {
  primary: ['text-white', 'bg-blue-600', 'border-0', 'hover:bg-blue-800'],
  secondary: ['text-white', 'bg-pink-600', 'border-0', 'hover:bg-pink-800'],
  danger: ['text-white', 'bg-red-600', 'border-0', 'hover:bg-red-800'],
}

const Button = (props: React.ComponentPropsWithRef<'button'> & ButtonProps) => {
  const { className, children, variant, onClick, ...rest } = props
  //ButtonType
  const buttonType = 'button' //TODO とりあえずbutton固定、submitやreset対応必要
  let tw = className
    ? className + 'rounded px-4 py-2 m-2 '
    : 'rounded px-4 py-2 m-2 '

  //バリアントのスタイルの適用
  if (variant && variants[variant]) {
    tw += variants[variant].join(' ') + ' '
  }
  //Disable
  if (props.disabled) {
    tw += 'text-white bg-gray-600 hover:bg-gray-800 '
  }

  //横幅
  if (props.width) {
    tw += `w-${props.width} `
  }

  //縦幅
  if (props.height) {
    tw += `h-${props.height} `
  }

  return (
    <button type={buttonType} className={tw} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
