//ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const variants = {
  //プライマリ
  primary: ['text-white', 'bg-blue-600', 'border-0', 'hover:bg-blue-800'],
  secondary: ['text-white', 'bg-pink-600', 'border-0', 'hover:bg-pink-800'],
  danger: ['text-white', 'bg-red-600', 'border-0', 'hover:bg-red-800'],
}

const Button = (button: ButtonProps) => {
  //ButtonType
  const buttonType = 'button' //FIXME とりあえずbutton固定、submitやreset対応必要

  //バリアントのスタイルの適用
  let variantTailwinds = ''
  if (button.variant && variants[button.variant]) {
    variantTailwinds = variants[button.variant].join(' ')
    console.log(`variantTailwinds=${variantTailwinds}`) //TODO あとで消す
  }

  const buttonTailwinds = 'mx-4 my-2'

  return (
    <button
      type={buttonType}
      className={`${variantTailwinds} ${buttonTailwinds}`}
    >
      {button.children}
    </button>
  )
}

export default Button
