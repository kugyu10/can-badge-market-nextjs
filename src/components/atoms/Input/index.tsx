export type InputProps = React.ComponentPropsWithRef<'input'> & {
  hasBorder?: boolean
  hasError?: boolean
}

/** Atoms/Input
 * @params hasBorder?
 * @params hasError?
 */
const Input = (input: InputProps) => {
  //TODO hasBorderはデフォルト対応

  let inputClasses = 'p-3 pl-2 w-full h-9 text-base '

  if (input.hasBorder) {
    inputClasses += 'border rounded '
  }
  if (input.hasError) {
    inputClasses += 'border-red-600 '
  }

  return <input type="text" className={inputClasses} />
}

export default Input
