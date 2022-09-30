import Link from 'next/link'
import { GitHubIcon } from 'components/atoms/IconButton'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

const Anchor = (props: React.ComponentPropsWithRef<'a'>) => {
  const { children, ...rest } = props

  return (
    <a className="cursor-pointer hover:underline " {...rest}>
      {children}
    </a>
  )
}

/** フッター */
const Footer = () => {
  return (
    <footer>
      <Flex className="flex-col md:flex-row ">
        <Box className="min-w-full md:min-w-min md:w-48 pr-0 md:mr-0.5 ">
          <nav>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor>トップ</Anchor>
              </Link>
            </Box>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor>採用</Anchor>
              </Link>
            </Box>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor>お知らせ</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box className="min-w-full md:min-w-min md:w-48 pr-0 md:mr-0.5 ">
          <nav>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor>利用規約</Anchor>
              </Link>
            </Box>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor>プライバシーポリシー</Anchor>
              </Link>
            </Box>
            <Box className="mb-0.5 ">
              <Link href="/" passHref>
                <Anchor>配送と返品</Anchor>
              </Link>
            </Box>
          </nav>
        </Box>
        <Box className="min-w-full md:min-w-min md:w-48 ">
          <nav>
            <Anchor
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
