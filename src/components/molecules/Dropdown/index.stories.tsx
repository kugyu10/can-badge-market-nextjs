import { ComponentMeta, ComponentStory } from '@storybook/react'
import Dropdown from '.'

export default {
  title: 'Molecules/Dropdown',
  argTypes: {
    options: {
      control: { type: 'array' },
      description: 'ドロップダウンの選択肢',
      table: {
        type: { summary: 'attay' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'ドロップダウンの値',
      table: {
        type: { summary: 'string' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  options: [
    { value: null, label: '-' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
  ],
  placeholder: 'アイテムを選択してください',
}

//初期値を設定
export const InitialValue = Template.bind({})
InitialValue.args = {
  options: [
    { value: null, label: '-' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
  ],
  placeholder: 'アイテムを選択してください',
  value: 'one',
}

//初期値を設定
export const Many = Template.bind({})
Many.args = {
  options: Array.from(Array(20), (_v, k) => {
    return { value: k.toString(), label: k.toString() }
  }),
  placeholder: 'アイテムを選択してください',
}
