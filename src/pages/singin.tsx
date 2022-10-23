import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import AppLogo from 'components/atoms/AppLogo';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Layout from 'components/templates/Layout';
import SigninFormContainer from 'containers/SigninFormContainer';

const SigninPage: NextPage = () => {
  const router = useRouter()
  //認証後のハンドラ
  const handleSignin = async (err?: Error) => {
    if (!err) {
      // サインインに成功し、クエリが指定されている場合はそのURLに移動
      // デフォルトはトップページに移動
      const redirectTo = (router.query['redirect_to'] as string) ?? '/'

      console.log('Redirecting', redirectTo)
      await router.push(redirectTo)
    }
  }

  return (
    <Layout>
      <Flex className="py-0.5 px-0.5 md:px-0 justify-center ">
        <Flex className="w-100 flex-column justify-center items-center ">
          <Box className="bm-0.5 ">
            <AppLogo />
          </Box>
          <Box className="w-full ">
            <SigninFormContainer onSignin={handleSignin} />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default SigninPage
