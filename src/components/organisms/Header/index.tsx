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
import Box from 'components/layout/Box'
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
  const { children, ...rest } = props

  return (
    <nav className="ml-4 first:ml-0 " {...rest}>
      {children}
    </nav>
  )
}

//アンカーリンク
const Anchor = (props: React.ComponentPropsWithRef<'a'>) => {
  const { children, ...rest } = props

  return (
    <a className="cursor-pointer hover:underline " {...rest}>
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
            <Box className="hidden md:block">
              <Link href="/" passHref>
                <Anchor>すべて</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box className="hidden md:block">
              <Link href="/" passHref>
                <Anchor>アニメ</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box className="hidden md:block">
              <Link href="/" passHref>
                <Anchor>キャラクター</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box className="hidden md:block">
              <Link href="/" passHref>
                <Anchor>その他</Anchor>
              </Link>
            </Box>
          </NavLink>
        </Nav>
        <Nav className="h-14 items-center ">
          <NavLink>
            <Box className="block md:hidden">
              <Link href="/search" passHref>
                <Anchor>
                  <SearchIcon />
                </Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Link href="/cart" passHref>
              <Anchor>
                <BadgeIconButton
                  icon={<ShoppingCartIcon twSize={6} />}
                  twSize={6}
                  badgeContent={cart.length === 0 ? undefined : cart.length}
                  badgeBackgroundColor="primary"
                />
              </Anchor>
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
              <Button variant="primary">出品</Button>
            </Link>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  )
}

export default Header
