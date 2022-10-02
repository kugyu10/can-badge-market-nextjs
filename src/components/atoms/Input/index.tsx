export type InputProps = React.ComponentPropsWithRef<'input'> & {
  hasBorder?: boolean
  hasError?: boolean
}

/** Atoms/Input
 * @params hasBorder?
 * @params hasError?
 */
const Input = (props: InputProps) => {
  const hasBorder = props.hasBorder ?? true

  let tw = 'p-3 pl-2 w-full h-9 text-base '

  if (hasBorder) {
    tw += 'border rounded '
  }
  if (props.hasError) {
    tw += 'border-red-600 '
  }

  return <input type="text" className={tw} />
}

export default Input
