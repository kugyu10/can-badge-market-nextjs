import { ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import InputImages, { FileData } from '.'

export default { title: 'Molecules/InputImages' } as ComponentMeta<
  typeof InputImages
>

const Container = (props: React.ComponentPropsWithRef<'div'>) => {
  const tw = 'w-72 grid gap-2 grid-cols-1'
  return <div className={tw}>{props.children}</div>
}

export const Standard = () => {
  const [images, setImages] = useState<FileData[]>([])

  const handleChange = (images: FileData[]) => {
    setImages(images)
  }

  return (
    <Container>
      <InputImages images={images} onChange={handleChange} maximumNumber={2} />
    </Container>
  )
}
