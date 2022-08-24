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

const Button = (button: ButtonProps) => {
  //ButtonType
  const buttonType = 'button' //FIXME とりあえずbutton固定、submitやreset対応必要
  let buttonClasses = 'rounded px-4 py-2 m-2 '

  //バリアントのスタイルの適用
  if (button.variant && variants[button.variant]) {
    buttonClasses += variants[button.variant].join(' ') + ' '
  }
  //Disable
  if (button.disabled) {
    buttonClasses += 'text-white bg-gray-600 hover:bg-gray-800 '
  }

  //横幅
  if (button.width) {
    buttonClasses += `w-${button.width} `
  }

  //縦幅
  if (button.height) {
    buttonClasses += `h-${button.height} `
  }

  return (
    <button
      type={buttonType}
      className={buttonClasses}
      onClick={button.onClick}
    >
      {button.children}
    </button>
  )
}

export default Button
