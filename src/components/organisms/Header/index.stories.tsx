import { ComponentMeta } from '@storybook/react'
import React, { useEffect } from 'react'
import Header from './index'
import { AuthContextProvider } from 'contexts/AuthContext'
import {
  ShoppingCartContextProvider,
  useShoppingCartContext,
} from 'contexts/ShoppingCartContext'

export default { title: 'organizems/Header' } as ComponentMeta<typeof Header>

export const NoLogin = () => <Header />

export const Login = () => {
  //ダミーユーザー
  const authUser = {
    id: 1,
    username: 'kugyu10',
    displayName: 'kugyu10',
    email: 'kugyu10@gmail.com',
    profileImageUrl: '/images/sample/1.jpg',
    description: '',
  }

  const ChildComponent = () => {
    const { addProductToCart } = useShoppingCartContext()

    //ダミー商品
    useEffect(() => {
      addProductToCart({
        id: 1,
        category: 'book',
        title: 'Product',
        description: '',
        imageUrl: '/images/sample/1.jpg',
        blurDataUrl: '',
        price: 1000,
        condition: 'used',
        owner: authUser,
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Header />
  }

  return (
    <ShoppingCartContextProvider>
      <AuthContextProvider
        context={{ apiRootUrl: 'https://dummy' }}
        authUser={authUser}
      >
        <ChildComponent />
      </AuthContextProvider>
    </ShoppingCartContextProvider>
  )
}
