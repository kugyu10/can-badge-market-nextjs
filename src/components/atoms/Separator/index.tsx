interface SeparatorProps {
  children?: React.ReactNode
}

const Separator = (separator: SeparatorProps) => {
  let separatorStyle = 'h-6 text-gray-400 flex align-center '

  if (separator.children) {
    separatorStyle += 'mx-2 '
  }

  return (
    <div className="flex">
      <div className="flex-shrink border-b border-gray-400 w-full mb-3 " />
      <div className={separatorStyle}>{separator.children}</div>
      <div className="flex-shrink border-b border-gray-400 w-full mb-3 " />
    </div>
  )
}

export default Separator
