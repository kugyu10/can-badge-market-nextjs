import Image, { ImageProps } from 'next/image'

type ScaleImageProps = Omit<ImageProps, 'quality'> & {
  /** ex)w-80 */
  containerWidth?: string

  /** ex)h-80 */
  containerHeight?: string
}

/** スケールイメージ */
const ScaleImage = (scaleImage: ScaleImageProps) => {
  let containerStyle =
    scaleImage.containerWidth ?? `${scaleImage.width}` ?? 'w-80'
  containerStyle +=
    ' ' + (scaleImage.containerHeight ?? `${scaleImage.height}` ?? 'h-80')
  const imageAlt = scaleImage.alt ?? 'Product Image'

  /** ex)320px */
  const imageHeight = scaleImage.height ?? '320px'

  /** ex)320px */
  const imageWidth = scaleImage.width ?? '320px'

  return (
    <div className={containerStyle}>
      <Image
        quality="85"
        alt={imageAlt}
        height={imageHeight}
        width={imageWidth}
        {...scaleImage}
      />
    </div>
  )
}

export default ScaleImage
