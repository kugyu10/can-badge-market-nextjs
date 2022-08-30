import { ComponentMeta } from '@storybook/react'
import BreadcrumbItem from 'components/atoms/BreadcrumbItem'
import Breadcrumb from '.'

export default { title: 'Molecules/Breadcrumb' } as ComponentMeta<
  typeof Breadcrumb
>

export const Standard = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#">Top</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#">anime</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Item</BreadcrumbItem>
  </Breadcrumb>
)
