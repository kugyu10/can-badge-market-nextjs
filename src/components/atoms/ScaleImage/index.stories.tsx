import { ComponentMeta, ComponentStory } from '@storybook/react'
import ScaleImage from './index'

export default {
  title: 'Atoms/ScaleImage',
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '画像の横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '画像の縦幅',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
    containerWidth: {
      control: { type: 'text' },
      defaultValue: 'w-80',
      description: '横幅',
      table: {
        type: { summary: 'string' },
      },
    },
    containerHeight: {
      control: { type: 'text' },
      description: '縦幅',
      defaultValue: 'h-80',
      table: {
        type: { summary: 'height' },
      },
    },
  },
} as ComponentMeta<typeof ScaleImage>

const Template: ComponentStory<typeof ScaleImage> = (args) => (
  <ScaleImage {...args} />
)

export const Normal = Template.bind({})
Normal.args = { src: '/images/sample/1.jpg' }

export const Small = Template.bind({})
Small.args = {
  src: '/images/sample/1.jpg',
  twContainerWidth: 'w-24',
  twContainerHeight: 'h-24',
}
