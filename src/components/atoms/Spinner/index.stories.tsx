import { ComponentMeta, ComponentStory } from '@storybook/react'
import Spinner from '.'
import Flex from 'components/layout/Flex'

export default {
  title: 'Atoms/Spinner',
  argTypes: {
    size: {
      control: { type: 'number' },
      defaultValue: 50,
      description: 'サイズ',
      table: {
        type: { summary: 'number' },
      },
    },
    strokeWidth: {
      control: { type: 'number' },
      description: '先の太さ',
      defaultValue: 4,
      table: {
        type: { summary: 'number' },
      },
    },
    isAutoCentering: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'センタリングフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Flex tw="fixed inset-0 justify-center items-center z-50 ">
    <Spinner {...args} />
  </Flex>
)

export const Normal = Template.bind({})
