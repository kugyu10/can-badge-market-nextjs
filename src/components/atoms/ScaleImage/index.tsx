import Image, { ImageProps } from 'next/image'

type ScaleImageProps = Omit<ImageProps, 'quality'> & {
  /** size of pixel */
  containerWidth?: string

  /** size of pixel */
  containerHeight?: string
}

/** スケールイメージ */
const ScaleImage = (scaleImage: ScaleImageProps) => {
  const widthNum = scaleImage.containerWidth ?? `${scaleImage.width}` ?? '320'

  const heightNum =
    scaleImage.containerHeight ?? `${scaleImage.height}` ?? '320'

  const imageAlt = scaleImage.alt ?? 'Product Image'

  /** ex)320px */
  const imageHeight = scaleImage.height ?? '320px'

  /** ex)320px */
  const imageWidth = scaleImage.width ?? '320px'

  return (
    <div style={{ width: widthNum + 'px', height: heightNum + 'px' }}>
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
