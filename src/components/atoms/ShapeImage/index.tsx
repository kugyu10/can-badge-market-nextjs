import Image, { ImageProps } from 'next/image'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = ImageProps & { shape?: ImageShape }

/** Atoms/ShapeImage
 * @params shape as 'circle' | 'square'
 */
const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props

  //circleなら円形に
  let shapeImageClasses = ''
  if (shape == 'circle') {
    shapeImageClasses = 'rounded-full '
  }

  return <Image {...imageProps} className={shapeImageClasses} />
}

export default ShapeImage
