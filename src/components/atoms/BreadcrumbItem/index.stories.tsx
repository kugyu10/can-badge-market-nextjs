import { ComponentMeta } from '@storybook/react'
import BreadcrumbItem from './index'

export default {
  title: 'Atoms/BreadcrumbItem',
} as ComponentMeta<typeof BreadcrumbItem>

export const Breadcrumb = () => (
  <div>
    <BreadcrumbItem>Item1</BreadcrumbItem>
    <BreadcrumbItem>Item2</BreadcrumbItem>
    <BreadcrumbItem>Item3</BreadcrumbItem>
  </div>
)
