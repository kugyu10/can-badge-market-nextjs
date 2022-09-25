import Link from 'next/link'
import { GitHubIcon } from 'components/atoms/IconButton'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Box'

const Anchor = (props: React.ComponentPropsWithRef<'span'>) => {
  const { children, ...rest } = props

  return (
    <Text className="cursor-pointer hover:underline " {...rest}>
      {children}
    </Text>
  )
}

/** フッター */
const Footer = () => {
  return (
    <footer>
      <Flex className="flex-col md:flex-row">
        <Box className="min-w-full md:min-w-30 pr-0 md:mr-0.5 ">
          <nav>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor as="a">トップ</Anchor>
              </Link>
            </Box>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor as="a">採用</Anchor>
              </Link>
            </Box>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor as="a">お知らせ</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box className="min-w-full md:min-w-30 pr-0 md:mr-0.5 ">
          <nav>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor as="a">利用規約</Anchor>
              </Link>
            </Box>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor as="a">プライバシーポリシー</Anchor>
              </Link>
            </Box>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor as="a">配送と返品</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box className="min-w-full md:min-w-30">
          <nav>
            <Anchor
              as="a"
              href="https://github.com/kugyu10/can-badge-market-nextjs"
              target="_blank"
            >
              <GitHubIcon twSize={6} />
            </Anchor>
          </nav>
        </Box>
      </Flex>
      <Box className="pt-1 pb-0.5 ">
        <Text>© 2022 kugyu10 All rights reserved.</Text>
      </Box>
    </footer>
  )
}

export default Footer
