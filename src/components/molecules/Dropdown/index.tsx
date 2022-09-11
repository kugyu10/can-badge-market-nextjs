import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  ForwardRefExoticComponent,
  PropsWithRef,
} from 'react'
import styled from 'styled-components'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
export type ElementFrec<T extends keyof JSX.IntrinsicElements> =
  ForwardRefExoticComponent<PropsWithRef<JSX.IntrinsicElements[T]>>

//TODO ESLint問題解決
//ドロップゾーンルート
const divTag = 'div'
// eslint-disable-next-line react/display-name
const DropdownRoot: ElementFrec<typeof divTag> = React.forwardRef(
  (props, ref) => {
    // eslint-disable-next-line react/prop-types
    const { children, ...rest } = props
    return (
      <div ref={ref} className="relative h-10" {...rest}>
        {children}
      </div>
    )
  },
)

//ドロップダウン外観
const DropdownControl = (
  props: React.ComponentPropsWithRef<'div'> & { hasError?: boolean },
) => {
  const { children, hasError, ...rest } = props

  let tw =
    'relative overflow-hidden rounded-md cursor-default py-2 pr-12 pl-3 box-border border '
  if (hasError) {
    tw += 'border-red-700 '
  } else {
    tw += 'border-gray-200 '
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

// ドロップダウンの矢印の外観  //TODO close color&width
// const DropdownArrow = styled.div<{ isOpen?: boolean }>`
//   border-color: 'transparent transparent #222222';
//   border-width: '0 5px 5px';
//   border-style: solid;
//   content: ' ';
//   display: block;
//   height: 0;
//   margin-top: -ceil(2.5);
//   position: absolute;
//   right: 10px;
//   top: 16px;
//   width: 0;
// `

//ドロップダウンの矢印の外観
const DropdownArrow = (
  props: React.ComponentPropsWithRef<'div'> & { isOpen?: boolean },
) => {
  const { isOpen, ...rest } = props
  const tw = 'absolute right-2 top-2 block h-4 w-4 text-gray-400 '
  const content = isOpen ? '▲' : '▼' //とりあえず
  return (
    <div className={tw} {...rest}>
      {content}
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
  const tw = 'px-2 py-3 hover:bg-gray-200 '

  return (
    <div className={tw} {...rest}>
      {children}
    </div>
  )
}

interface DropdownItemProps {
  item: DropdownItem
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

//QUESTION なんで↑と同名？
export interface DropdownItem {
  value: string | number | null
  label?: string
}

interface DropdownProps {
  /** ドロップダウンの選択肢 */
  options: DropdownItem[]

  /** ドロップダウンの値 */
  value?: string | number

  /** <input />のname属性 */
  name?: string

  /** プレースホルダー */
  placeholder?: string

  /** バリデーションエラーフラグ */
  hasError?: boolean

  /** 値が変化した時のイベントハンドラ */
  onChange?: (selected?: DropdownItem) => void
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
    item: DropdownItem,
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
        <DropdownArrow id="Arrow" isOpen={isOpen} />
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
