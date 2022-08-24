import { ComponentMeta, ComponentStory } from '@storybook/react'
import Text from './index'

export default {
  title: 'Atoms/Text',
  argTypes: {
    variant: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      defaultValue: 'medium',
      description: 'テキストバリアント',
      table: {
        type: {
          summary: 'extraSmall, small, medium, mediumLarge, large, extraLarge',
        },
      },
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Text',
      description: 'テキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    fontWeight: {
      control: { type: 'text' },
      description:
        'フォントの太さ thin, extralight, light, normal, medium, semibold, bold, extrabold',
      table: {
        type: { summary: 'string' },
      },
    },
    lineHeight: {
      control: { type: 'text' },
      description: '行の高さ',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: { type: 'text' },
      description: 'テキストの色',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'text' },
      description: '背景の色',
      table: {
        type: { summary: 'string' },
      },
    },
    margin: {
      control: { type: 'text' },
      description: 'マージン',
      table: {
        type: { summary: 'string' },
      },
    },
    padding: {
      control: { type: 'text' },
      description: 'パディング',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

const longText =
  '吾輩は猫である。名前はまだない。どこで生れたか頓（とん）と見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。'

export const ExtraSmall = Template.bind({})
ExtraSmall.args = { variant: 'extraSmall', children: longText }

export const Small = Template.bind({})
Small.args = { variant: 'small', children: longText }

export const Medium = Template.bind({})
Medium.args = { variant: 'medium', children: longText }

export const MediumLarge = Template.bind({})
MediumLarge.args = { variant: 'mediumLarge', children: longText }

export const Large = Template.bind({})
Large.args = { variant: 'large', children: longText }

export const ExtraLarge = Template.bind({})
ExtraLarge.args = { variant: 'extraLarge', children: longText }
