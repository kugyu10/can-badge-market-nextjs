import React, { useCallback, useState } from 'react'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** 最小行数 */
  minRows?: number

  /** 最大行数 */
  maxRows?: number

  /** バリデーションエラーフラグ */
  varidated?: boolean
}

/** Atoms/TextArea */
const TextArea = (props: TextAreaProps) => {
  const {
    rows = 5,
    minRows = 5,
    maxRows = 10,
    children,
    varidated,
    onChange,
    ...rest
  } = props
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows))

  // 最低の行数より未満指定しないようにする
  console.assert(
    !(rows < minRows),
    'TextArea: rows should be greater than minRows.',
  )

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24
      const previusRows = e.target.rows

      e.target.rows = minRows //行数のリセット

      //現在の行数
      const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight)

      if (currentRows === previusRows) {
        e.target.rows = currentRows
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows
        e.target.scrollTop = e.target.scrollHeight
      }

      //最大を超えないように行数をセット
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows)
      onChange && onChange(e)
    },
    [onChange, minRows, maxRows],
  )

  //スタイルを指定する
  let textAreaClasses = 'border rounded-sm w-full text-base p-3 pl-2 '

  //エラーがえれば赤くする
  if (!varidated) {
    textAreaClasses += 'border-red-600 '
  }

  return (
    <textarea
      className={textAreaClasses}
      onChange={handleChange}
      aria-label={rest.placeholder}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </textarea>
  )
}

TextArea.defaultProps = {
  rows: 5,
  minRows: 5,
  maxRows: 10,
}

export default TextArea
