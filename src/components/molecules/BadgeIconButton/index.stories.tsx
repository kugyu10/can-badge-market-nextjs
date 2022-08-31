import { ComponentMeta, ComponentStory } from '@storybook/react'
import BadgeIconButton from './index'
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from 'components/atoms/IconButton'

export default {
  title: 'Molecules/BadgeIconButton',
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: 'アイコン',
      table: {
        type: { summary: 'object' },
      },
    },
    twSize: {
      control: { type: 'number' },
      desccription: 'アイコンサイズ',
      defaultValue: 6,
      table: {
        type: { summary: 'number' },
      },
    },
    badgeContent: {
      control: { type: 'number' },
      desccription: 'バッジのカウンター',
      table: {
        type: { summary: 'number' },
      },
    },
    badgeBackgroundColor: {
      control: { type: 'color' },
      description: 'バッジの背景色',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as ComponentMeta<typeof BadgeIconButton>

const Template: ComponentStory<typeof BadgeIconButton> = (args) => (
  <BadgeIconButton {...args} />
)

export const SearchBadgeIcon = Template.bind({})
SearchBadgeIcon.args = {
  icon: <SearchIcon twSize={6} />,
  badgeContent: 1,
  badgeBackgroundColor: 'yellow-600',
}

export const PersonBadgeIcon = Template.bind({})
PersonBadgeIcon.args = {
  icon: <PersonIcon twSize={9} />,
  badgeContent: 2,
  badgeBackgroundColor: 'blue-600',
}

export const ShoppingCartBadgeIcon = Template.bind({})
ShoppingCartBadgeIcon.args = {
  icon: <ShoppingCartIcon twSize={12} />,
  badgeContent: 3,
  badgeBackgroundColor: 'green-600',
}
