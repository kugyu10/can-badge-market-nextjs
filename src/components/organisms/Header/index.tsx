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
  const { children, ...rest } = props

  return <Flex {...rest}>{children}</Flex>
}

//ナビゲーションのリンク
const NavLink = (props: React.ComponentPropsWithRef<'span'>) => {
  const { className, children, ...rest } = props
  const tw = 'mr-1 last:mr-0 ' + className
  return (
    <nav className={tw} {...rest}>
      {children}
    </nav>
  )
}

//アンカーリンク
const Anchor = (props: React.ComponentPropsWithRef<'a'>) => {
  const { className, children, ...rest } = props
  const tw = 'cursor-pointer hover:underline ' + className

  return (
    <a className={tw} {...rest}>
      {children}
    </a>
  )
}

/** ヘッダー */
const Header = () => {
  const { cart } = useShoppingCartContext()
  const { authUser, isLoading } = useAuthContext()

  return (
    <HeaderRoot>
      <Flex className="pl-1 pr-1 justify-between ">
        <Nav className="h-14 items-center ">
          <NavLink>
            <Link href="/" passHref>
              <Anchor>
                <AppLogo />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref>
              <Anchor>すべて</Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref>
              <Anchor>アニメ</Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref>
              <Anchor>キャラクター</Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Link href="/" passHref>
              <Anchor>その他</Anchor>
            </Link>
          </NavLink>

          <NavLink>
            {(() => {
              //認証していたらアイコンを表示
              if (authUser) {
                return (
                  <Link href={`/users/${authUser.id}`} passHref>
                    <Anchor>
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
                    <Anchor>
                      <PersonIcon twSize={6} />
                    </Anchor>
                  </Link>
                )
              }
            })()}
          </NavLink>
          <NavLink>
            <Link href="/sell" passHref>
              <Button>出品</Button>
            </Link>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  )
}

export default Header
