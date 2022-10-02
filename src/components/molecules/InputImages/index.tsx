import React, { useCallback, useMemo } from 'react'
import Flex from 'components/layout/Flex'
import Dropzone from 'components/molecules/Dropzone'
import ImagePreview from 'components/molecules/ImagePreview'

const InputImagesContainer = (props: React.ComponentPropsWithRef<'div'>) => {
  const { children } = props

  const tw = 'flex-col mt-2 first:mt-0 '
  return <Flex className={tw}>{children}</Flex>
}

export type FileData = {
  id?: string
  src?: string
  file?: File
  selected?: boolean
  shosen?: boolean
}

interface InputImagesProps {
  name?: string
  images: FileData[]
  maximumNumber?: number
  hasError?: boolean
  width?: string
  height?: string
  onChange: (images: FileData[]) => void
}

/** インプットイメージ */
const InputImages = (props: InputImagesProps) => {
  const {
    images,
    maximumNumber,
    name,
    hasError,
    width = '100%',
    height = '260px',
    onChange,
  } = props

  const files = useMemo(
    //QUESTION 記述の意味
    () =>
      images
        .filter((img: FileData) => img.file)
        .map((img: FileData) => img.file as File),
    [images],
  )
  const isDropzoneDisplay =
    !maximumNumber || images.length < maximumNumber ? 'block' : 'none'

  const onRemove = useCallback(
    (src: string) => {
      //QUESTION 記述の意味
      const image = images.find((img: FileData) => img.src === src)
      const newImages = images.filter((img: FileData) => img.src !== src)

      if (image) {
        if (image.file && image.src) {
          //QUESTION
          URL.revokeObjectURL(image.src)
          delete image.src
        }

        onChange && onChange(newImages)
      }
    },
    [images, onChange],
  )

  const onDrop = useCallback(
    (files: File[]) => {
      const newImages = []

      for (const file of files) {
        const img = images.find((img: FileData) => img.file === file)

        //QUESTION
        if (
          !img &&
          (!maximumNumber || images.length + newImages.length < maximumNumber)
        ) {
          newImages.push({ file, src: URL.createObjectURL(file) })
        }
      }

      onChange && onChange(newImages)
    },
    [images, maximumNumber, onChange],
  )

  return (
    <InputImagesContainer>
      {images &&
        images.map((img, index) => {
          return (
            <ImagePreview
              alt={img.id}
              key={index}
              src={img.src}
              height={height}
              onRemove={onRemove}
            />
          )
        })}
      <div style={{ display: isDropzoneDisplay }}>
        <Dropzone
          acceptedFileTypes={[
            'image/gif',
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/webp',
          ]}
          name={name}
          height={height}
          width={width}
          value={files}
          hasError={hasError}
          onDrop={onDrop}
        />
      </div>
    </InputImagesContainer>
  )
}

export default InputImages
