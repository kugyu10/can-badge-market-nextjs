import {
  Search,
  PersonOutline,
  ShoppingCart,
  CheckBoxOutlineBlank,
  CheckBox,
  Cancel,
  CloudUpload,
  Close,
  GitHub,
  Person,
} from '@mui/icons-material'
import SvgIcon from '@mui/material/SvgIcon'

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<SVGSVGElement>
  color?: string
  className?: string
  backgroundColor?: string
  size?: number
}

type IconWrapperProps = React.ComponentPropsWithRef<'div'> & {
  size: number
  cursor?: string
  color?: string
  backgroundColor?: string
}

const IconWrapper = (iconWrapper: IconWrapperProps) => {
  let iconWrapperStyle = `inline-block w-${iconWrapper.size} h-${iconWrapper.size} `

  if (iconWrapper.backgroundColor) {
    iconWrapperStyle += `bg-${iconWrapper.backgroundColor} `
  }

  if (iconWrapper.color) {
    iconWrapperStyle += `text-${iconWrapper.color} `
  }

  return <div className={iconWrapperStyle}>{iconWrapper.children}</div>
}

/** アイコンボタン */
function IconButton(
  Icon: typeof SvgIcon,
): React.ComponentType<IconButtonProps> {
  const IconWithStyle = (props: IconButtonProps) => {
    const { onClick, className, size = 24, ...rest } = props
    const cursor = onClick ? 'pointer' : ''

    return (
      <IconWrapper cursor={cursor} size={size} {...rest}>
        <Icon
          className={className}
          fontSize="inherit"
          color="inherit"
          onClick={onClick}
        />
      </IconWrapper>
    )
  }

  return IconWithStyle
}

export const CloseIcon = IconButton(Close)

export const SearchIcon = IconButton(Search)

export const CloudUploadIcon = IconButton(CloudUpload)

export const CancelIcon = IconButton(Cancel)

export const CheckBoxOutlineBlankIcon = IconButton(CheckBoxOutlineBlank)

export const CheckBoxIcon = IconButton(CheckBox)

export const PersonIcon = IconButton(Person)

export const GitHubIcon = IconButton(GitHub)

export const PersonOutlineIcon = IconButton(PersonOutline)

export const ShoppingCartIcon = IconButton(ShoppingCart)
