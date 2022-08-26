import Image, { ImageProps } from 'next/image'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = ImageProps & { shape?: ImageShape }

/** Atoms/ShapeImage
 * @params shape as 'circle' | 'square'
 */
const ShapeImage = (props: ShapeImageProps) => {
  const { shape, alt, style, ...imageProps } = props

  let imageStyle = style
  if (shape == 'circle') {
    imageStyle = { borderRadius: '50%', ...style }
  }

  return <Image {...imageProps} alt={alt ?? 'Image'} style={imageStyle} />
}

export default ShapeImage
