import Link from 'next/link'
import React from 'react'
import AppLogo from 'components/atoms/AppLogo'
import Button from 'components/atoms/Button'
import {
  SearchIcon,
  PersonIcon,
  ShoppingCartIcon,
} from 'components/atoms/IconButton'
import ShapeImage from 'components/atoms/ShapeImage'
import Spinner from 'components/atoms/Spinner'
import Text from 'components/atoms/Text'
import Flex from 'components/layout/Flex'
import BadgeIconButton from 'components/molecules/BadgeIconButton'
import { useAuthContext } from 'contexts/AuthContext'
import { useShoppingCartContext } from 'contexts/ShoppingCartContext'

//ヘッダーのルート
const HeaderRoot = (props: React.ComponentPropsWithRef<'div'>) => {
  const tw = 'h-22 p-0 border-b '

  return <div className={tw}>{props.children}</div>
}

//ナビゲーション
const Nav = (props: React.ComponentPropsWithRef<'div'>) => {
  const { className, children, ...rest } = props

  return (
    <Flex className={className} {...rest}>
      {children}
    </Flex>
  )
}

//ナビゲーションのリンク
const NavLink = (props: React.ComponentPropsWithRef<'span'>) => {
  const { className, children, ...rest } = props
  const tw = className + ' mr-1 last:mr-0 '
  return (
    <span className={tw} {...rest}>
      {children}
    </span>
  )
}


//アンカーリンク
const Anchor = (props: React.ComponentPropsWithRef<'span'>) => {
  const { className, children, ...rest } = props
  const tw = className + ' cursor-pointer hover:underline '

  return (
    <Text className={tw} {...rest}>
      {children}
    </Text>
  )
}

/** ヘッダー */
const Header = () => {
  const { cart } = useShoppingCartContext()
  const { authUser, isLoading } = useAuthContext()

  return (
    <HeaderRoot>
      <Flex className="pl-1 pr-1 justify-between ">
        <Nav as="nav" className="h-14 items-center ">
          <NavLink>
            <Link href="/" passHref>
              <Anchor as="a">
                <AppLogo />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref>
              <Anchor as="a">すべて</Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref>
              <Anchor as="a">アニメ</Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref>
              <Anchor as="a">キャラクター</Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref>
              <Anchor as="a">その他</Anchor>
            </Link>
          </NavLink>

          <NavLink>
            {(() => {
              //認証していたらアイコンを表示
              if (authUser) {
                return (
                  <Link href={`/users/${authUser.id}`} passHref>
                    <Anchor as="a">
                      <ShapeImage
                        shape="circle"
                        src={authUser.profileImageUrl}
                        width={24}
                        height={24}
                        data-testid="profile-shape-image"
                      />
                    </Anchor>
                  </Link>
                )
              } else if (isLoading) {
                //ロード中はスピナーを表示
                return <Spinner twSize={5} strokeWidth={2} />
              } else {
                //サインインしてない場合はアイコンを表示
                return (
                  <Link href="/signin" passHref>
                    <Anchor as="a">
                      <PersonIcon twSize={6} />
                    </Anchor>
                  </Link>
                )
              }
            })()}
          </NavLink>
          <NavLink>
            <Link href="/sell" passHref>
              <Button as="a">出品</Button>
            </Link>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  )
}

export default Header
