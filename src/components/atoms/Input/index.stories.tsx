import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '.'

export default {
  title: 'Atoms/Input',
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

//テキストの入力
export const Normal = Template.bind({})
Normal.args = { hasBorder: true }

//赤枠のテキスト
export const Error = Template.bind({})
Error.args = { hasBorder: true, hasError: true }
