/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import Dropzone from '.'
import Button from 'components/atoms/Button'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

export default {
  title: 'Molecules/Dropzone',
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaltValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptedFileTypes: {
      options: {
        control: { type: 'array' },
        description: '受け付けるファイルタイプ',
        table: {
          type: { summary: 'array' },
        },
      },
    },
    onDrop: {
      description: 'ファイルがドロップ入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
    onChange: {
      description: 'ファイルが入力された時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof Dropzone>

const Template: ComponentStory<typeof Dropzone> = (args) => {
  const [files, setFiles] = useState<File[]>([])
  const handleDrop = (files: File[]) => {
    setFiles(files)
    args && args.onDrop && args.onDrop(files)
  }

  const fetchData = async () => {
    const res = await fetch('/images/sample/1.jpg')
    const blob = await res.blob()
    const file = new File([blob], '1.png', blob)

    setFiles([...files, file])
  }

  const clearImages = () => {
    setFiles([])
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="container">
        <Dropzone {...args} value={files} onDrop={handleDrop} />
      </div>
      <div className="container">
        <Button onClick={fetchData}>画像を追加</Button>
      </div>
      <div className="container">
        <Button onClick={clearImages}>全ての画像をクリア</Button>
      </div>
      <Flex>
        {files.map((f, i) => (
          <div className="container">
            <img
              src={URL.createObjectURL(f)}
              width="100px"
              key={i}
              alt="sample"
            />
          </div>
        ))}
      </Flex>
    </>
  )
}

export const WithControl = Template.bind({})
WithControl.args = {
  height: 200,
  width: '100%',
  acceptedFileTypes: [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
    'image/webp',
  ],
  hasError: false,
}
