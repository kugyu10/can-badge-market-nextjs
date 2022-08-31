import React, { useEffect, useState, useRef, useCallback } from 'react'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'

const DropdownRoot = (props: React.ComponentPropsWithRef<'div'>) => {
  const { children, ...rest } = props
  return (
    <div className="relative h-10" {...rest}>
      {children}
    </div>
  )
}

//ドロップダウン外観
const DropdownControl = (
  props: React.ComponentPropsWithRef<'div'> & { hasError?: boolean },
) => {
  const { children, hasError, ...rest } = props

  let tw =
    'relative overflow-hidden bg-green-50 rounded-md box-border cursor-default px-2 pb-12 pt-3 border-gray-200 '
  if (hasError) {
    tw += 'border-red-600 '
  }
  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

//ドロップダウン値
const DropdownValue = (props: React.ComponentPropsWithRef<'div'>) => {
  return <div className="text-gray-700">{props.children}</div>
}

//ドロップダウンプレースホルダー
const DropdownPlaceholder = (props: React.ComponentPropsWithRef<'div'>) => {
  const tw = 'text-gray-500 text-sm leading-5 '
  const style = { minHeight: '20px' }

  return (
    <div className={tw} style={style}>
      {props.children}
    </div>
  )
}

//ドロップダウンの矢印の外観
const DropdownArrow = (
  props: React.ComponentPropsWithRef<'div'> & { isOpen?: boolean },
) => {
  const { children, ...rest } = props
  let tw = 'absolute block h-4 mt-1 r-2 t-4 w-4 '
  if (props.isOpen) {
    tw += 'before:border-gray-200 before:content("▼") '
  } else {
    tw += 'before:border-gray-200 before:content("▲") '
  }

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

//ドロップメニュー
const DropdownMenu = (props: React.ComponentPropsWithRef<'div'>) => {
  const tw =
    'bg-white border-gray-700 drop-shadow-md box-border rounded-md max-h-50 overflow-y-auto absolute top-full w-full z-50 '

  return <div className={tw}>{props.children}</div>
}

//ドロップメニューの選択肢
const DropdownOption = (props: React.ComponentPropsWithRef<'div'>) => {
  const { children, ...rest } = props
  const tw = 'px-2 py-3 hover:bg-gray-500 '

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

interface DropdownItemProps {
  item: DropdownItemIF
}

/** ドロップダウンの選択した要素 */
const DropdownItem = (props: DropdownItemProps) => {
  const { item, ...rest } = props

  return (
    <Flex tw="items-center" {...rest}>
      <Text margin="m-0" variant="small">
        {item.label ?? item.value}
      </Text>
    </Flex>
  )
}

export interface DropdownItemIF {
  value: string | number | null
  label?: string
}

interface DropdownProps {
  /** ドロップダウンの選択肢 */
  options: DropdownItemIF[]

  /** ドロップダウンの値 */
  value?: string | number

  /** <input /> のname属性 */
  name?: string

  /** プレースホルダー */
  placeholder?: string

  /** バリデーションエラーフラグ */
  hasError?: boolean

  /** 値が変化した時のイベントハンドラ */
  onChange?: (selected?: DropdownItemIF) => void
}

/** ドロップダウン */
const Dropdown = (props: DropdownProps) => {
  const { onChange, name, options, hasError } = props
  const initialItem = options.find((i) => i.value === props.value)
  const [isOpen, setIsOpenValue] = useState(false)
  const [selectedItem, setSelectedItem] = useState(initialItem)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDocumentClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      //自分自身をクリックした時は何もしない
      if (dropdownRef.current) {
        const elems = dropdownRef.current.querySelectorAll('*')

        for (let i = 0; i < elems.length; i++) {
          if (elems[i] == e.target) {
            return
          }
        }
      }
      setIsOpenValue(false)
    },
    [dropdownRef],
  )

  //マウスダウンした時にドロップダウンを開く
  const handleMouseDown = (e: React.SyntheticEvent) => {
    setIsOpenValue((isOpen) => !isOpen)
    e.stopPropagation()
  }

  //ドロップダウンから選択した時
  const handleSelectValue = (
    e: React.FormEvent<HTMLDivElement>,
    item: DropdownItemIF,
  ) => {
    e.stopPropagation()

    setSelectedItem(item)
    setIsOpenValue(false)
    onChange && onChange(item)
  }

  useEffect(() => {
    //画面外のクリックとタッチをイベントを設定
    document.addEventListener('click', handleDocumentClick, false)
    document.addEventListener('touchend', handleDocumentClick, false)

    return function cleanup() {
      document.removeEventListener('click', handleDocumentClick, false)
      document.removeEventListener('touchend', handleDocumentClick, false)
    }
    //最初だけ呼び出す
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DropdownRoot ref={dropdownRef}>
      <DropdownControl
        hasError={hasError}
        onMouseDown={handleMouseDown}
        onTouchEnd={handleMouseDown}
        data-testid="dropdown-control"
      >
        {selectedItem && (
          <DropdownValue>
            <DropdownItem item={selectedItem} />
          </DropdownValue>
        )}
        {/* 何も選択されてない時はプレースホルダーを表示 */}
        {!selectedItem && (
          <DropdownPlaceholder>{props?.placeholder}</DropdownPlaceholder>
        )}
        {/* ダミーinput */}
        <input
          type="hidden"
          name={name}
          value={selectedItem?.value ?? ''}
          onChange={() => onChange && onChange(selectedItem)}
        />
        <DropdownArrow isOpen={isOpen} />
      </DropdownControl>
      {/* ドロップダウンを表示 */}
      {isOpen && (
        <DropdownMenu>
          {props.options.map((item, idx) => (
            <DropdownOption
              key={idx}
              onMouseDown={(e) => handleSelectValue(e, item)}
              onClick={(e) => handleSelectValue(e, item)}
              data-testid="dropdown-option"
            >
              <DropdownItem item={item} />
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  )
}

export default Dropdown
