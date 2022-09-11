import React from 'react'
import { CloseIcon } from 'components/atoms/IconButton'
import Text, { TextProps } from 'components/atoms/Text'
import Flex from 'components/layout/Flex'

const ImagePreviewContainer = (props: React.ComponentPropsWithRef<'div'>) => {
  const { children, ...rest } = props
  return (
    <div className="relative inline-block w-fit " {...rest}>
      {children}
    </div>
  )
}

//閉じるボタンのラップ
const Closebox = (props: React.ComponentPropsWithRef<'div'>) => {
  const { children, ...rest } = props
  const tw =
    'absolute items-center justify-center top-0 right-0 w-6 h-6 rounded-md bg-gray-700 cursor-pointer '
  return (
    <Flex tw={tw} {...rest}>
      {children}
    </Flex>
  )
}

//画像タイトル
const ImageTitle = (props: React.ComponentPropsWithRef<'span'> & TextProps) => {
  const tw = 'absolute t-3 rounded-md bg-red-400 box-border px-1 '
  return <Text className={tw}>{props.children}</Text>
}

interface ImagePreviewProps {
  /** 画像URL */
  src?: string

  /** 代替テキスト */
  alt?: string

  /** 縦幅 */
  height?: string

  /** 横幅 */
  width?: string

  /** 削除ボタン */
  onRemove?: (src: string) => void
}

/** イメージプレビュー */
const ImagePreview = ({
  src,
  alt,
  height,
  width,
  onRemove,
}: ImagePreviewProps) => {
  //閉じるボタンを押したらonRemoveを呼ぶ
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onRemove && src && onRemove(src)

    return false
  }

  //TODO heightのエラー？
  return (
    <ImagePreviewContainer height={height} width={width}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} height={height} width={width} />
      <Closebox onClick={handleCloseClick}>
        <CloseIcon twSize={6} color="white" />
      </Closebox>
    </ImagePreviewContainer>
  )
}

export default ImagePreview
