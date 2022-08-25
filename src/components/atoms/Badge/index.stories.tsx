import { ComponentMeta, ComponentStory } from '@storybook/react'
import Badge from './index'

export default {
  title: 'Atoms/Badge',
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'バッジのテキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'text' },
      description: 'バッジのカラー(ex. "red-600"',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

//オレンジ色のバッジ
export const Orange = Template.bind({})
Orange.args = { content: '1', backgroundColor: 'yellow-600' }

//緑色のバッジ
export const Green = Template.bind({})
Green.args = { content: '2', backgroundColor: 'green-600' }

//赤色のバッジ
export const Red = Template.bind({})
Red.args = { content: '3', backgroundColor: 'red-600' }
