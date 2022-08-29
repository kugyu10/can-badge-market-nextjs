import React, { useRef, useState, useCallback, useEffect } from 'react'
import { CheckBoxOutlineBlankIcon, CheckBoxIcon } from '../../atoms/IconButton'
/* import Text from '../../atoms/Text' */
/* import Flex from 'components/layout/Flex' */

export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  /** 表示ラベル */
  label?: string
}

//非表示のチェックボックス
const CheckBoxElement = (props: React.ComponentPropsWithRef<'input'>) => {
  return <input className="hidden" {...props} />
}

//チェックボックスのラベル
const Label = (props: React.ComponentPropsWithRef<'label'>) => {
  const { children, ...rest } = props

  return (
    <label className="ml-1 select-none cursor-pointer" {...rest}>
      {children}
    </label>
  )
}

/** チェックボックス */
const CheckBox = (props: CheckBoxProps) => {
  const { id, label, onChange, checked, ...rest } = props
  const [isChecked, setIsChecked] = useState(checked)

  const ref = useRef<HTMLInputElement>(null)
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()

      //チェックボックスを強制的にクリック
      //QUESTION もうわからん
      ref.current?.click()
      setIsChecked((isChecked) => !isChecked)
    },
    [ref, setIsChecked],
  )

  useEffect(() => {
    // パラメータからの変更を受け付ける
    setIsChecked(checked ?? false)
  }, [checked])

  return (
    <>
      <CheckBoxElement
        {...rest}
        ref={ref}
        type="checkbox"
        checked={isChecked}
        readOnly={!onChange}
        onChange={onChange}
      />

      <div className="flex items-center">
        {/* チェックボックスのON/OFFの描画 */}
        {checked ?? isChecked ? (
          <CheckBoxIcon size={5} onClick={onClick} />
        ) : (
          <CheckBoxOutlineBlankIcon size={5} onClick={onClick} />
        )}

        {/* チェックボックスのラベル */}
        {label && label.length > 0 && (
          <Label htmlFor={id} onClick={onClick}>
            {label}
          </Label>
        )}
      </div>
    </>
  )
}

export default CheckBox
