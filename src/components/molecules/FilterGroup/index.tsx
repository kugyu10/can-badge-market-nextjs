import React, { useCallback, useEffect, useState } from 'react'
import Text from 'components/atoms/Text'
import CheckBox from 'components/molecules/Checkbox'

type Item = {
  label: string
  name: string
}

type FilterGroupProps = {
  title: string
  items: Item[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string[]) => void
}

/** フィルターグループ */
const FilterGroup = ({
  title,
  items,
  value = [],
  defaultValue = [],
  onChange,
}: FilterGroupProps) => {
  const [selected, setSelected] = useState(value ?? defaultValue)

  useEffect(() => {
    setSelected(value)
  }, [value])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.name
      const newSelected = e.target.checked
        ? [...selected, value]
        : selected.filter((v) => v !== value)

      setSelected(newSelected)
      onChange && onChange(newSelected)
    },
    [onChange, selected],
  )

  return (
    <>
      <Text fontWeight="bold" variant="mediumLarge">
        {title}
      </Text>
      <div className="mt-1">
        {items.map(({ label, name }, i) => (
          <div key={i} className="mt-1">
            <CheckBox
              name={name}
              label={label}
              checked={!!selected.find((e) => e === name)}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default FilterGroup
