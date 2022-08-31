import { ComponentMeta } from '@storybook/react'
import AppLogo from '.'

export default {
  title: 'Atoms/AppLogo',
} as ComponentMeta<typeof AppLogo>

export const Logo = () => <AppLogo />
