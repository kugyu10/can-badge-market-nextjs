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
  twSize?: number
}

type IconWrapperProps = React.ComponentPropsWithRef<'div'> & {
  /** アイコンサイズ(twSize) */
  twSize: number
  /** hover時カーソルをpointerにするか？ */
  cursor?: string
  /** アイコンカラー(red-600など) */
  color?: string
  /** 背景色(gray-100など) */
  backgroundColor?: string
}

const IconWrapper = (props: IconWrapperProps) => {
  const { twSize, backgroundColor, color, cursor, ...rest } = props
  let tw = `inline-block w-${twSize} h-${twSize} `
  const style = { fontSize: twSize * 4 } //TODO Tailwind JIT対応

  if (backgroundColor) {
    tw += `bg-${backgroundColor} `
  }

  if (color) {
    tw += `text-${color} `
  }

  if (cursor) {
    tw += 'cursor-pointer '
  }

  return (
    <div className={tw} style={style} {...rest}>
      {props.children}
    </div>
  )
}

/** アイコンボタン */
function IconButton(
  Icon: typeof SvgIcon,
): React.ComponentType<IconButtonProps> {
  const IconWithStyle = (props: IconButtonProps) => {
    const { onClick, className, twSize = 6, ...rest } = props
    const cursor = onClick ? 'pointer' : ''
    const tw = 'block ' + className

    return (
      <IconWrapper cursor={cursor} twSize={twSize} {...rest}>
        <Icon
          className={tw}
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
