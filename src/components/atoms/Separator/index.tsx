interface SeparatorProps {
  children?: React.ReactNode
}

const Separator = (separator: SeparatorProps) => {
  let separatorStyle = 'h-5 text-gray-600 bg-gray-100 flex align-center '

  if (separator.children) {
    separatorStyle += 'mx-2 '
  }

  return <div className={separatorStyle}>{separator.children}</div>
}

export default Separator
