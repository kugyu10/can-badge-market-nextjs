import { ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import InputImages, { FileData } from './index'
import Grid from 'components/layout/Grid'

export default { title: 'Molecules/InputImages' } as ComponentMeta<
  typeof InputImages
>

const Container = (props: React.ComponentPropsWithRef<'div'>) => {
  const tw = 'w-72 gap-2 grid-cols-1'
  return <Grid className={tw}>{props.children}</Grid>
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
