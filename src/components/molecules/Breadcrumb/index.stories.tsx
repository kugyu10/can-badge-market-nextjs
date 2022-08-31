import { ComponentMeta } from '@storybook/react'
import Breadcrumb from '.'
import BreadcrumbItem from 'components/atoms/BreadcrumbItem'

export default { title: 'Molecules/Breadcrumb' } as ComponentMeta<
  typeof Breadcrumb
>

export const Standard = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="#" className="text-gray-600 hover:underline">
        Top
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="#" className="text-gray-600 hover:underline">
        anime
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem>Item</BreadcrumbItem>
  </Breadcrumb>
)
