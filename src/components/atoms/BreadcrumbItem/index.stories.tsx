import { ComponentMeta } from '@storybook/react'
import BreadcrumbItem from './index'

export default {
  title: 'Atoms/BreadcrumbItem',
} as ComponentMeta<typeof BreadcrumbItem>

export const Breadcrumb = () => <BreadcrumbItem>リストアイテム</BreadcrumbItem>
