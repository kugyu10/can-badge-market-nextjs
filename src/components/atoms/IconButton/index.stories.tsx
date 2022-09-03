import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchIcon, CloudUploadIcon, PersonOutlineIcon } from './index'

export default {
  title: 'Atoms/IconButton',
  argTypes: {
    color: {
      control: { type: 'text' },
      description: 'アイコン色',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'text' },
      description: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 6,
      description: 'アイコンのサイズ（px）',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof SearchIcon>

const Template: ComponentStory<typeof SearchIcon> = (args) => (
  <>
    <SearchIcon {...args} />
    <CloudUploadIcon {...args} />
    <PersonOutlineIcon {...args} />
  </>
)

export const Normal = Template.bind({})
