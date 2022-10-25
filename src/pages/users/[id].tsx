import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage, } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/router';
import BreadcrumbItem from 'components/atoms/BreadcrumbItem';
import Separator from 'components/atoms/Separator';
import Box from 'components/layout/Box';
import Flex from 'components/layout/Flex';
import Breadcrumb from 'components/molecules/Breadcrumb';
import Layout from 'components/templates/Layout';
import UserProductCardListContainer from 'components/UserProductCardListContainer';
import UserProfileContainer from 'components/UserProfileContainer';
import getAllProducts from 'services/products/get-all-products';
import getAllUsers from 'services/users/get-all-users';
import getUser from 'services/users/get-user';
import type { ApiContext } from 'types';

type UserPageProps = InferGetStaticPropsType<typeof getStaticProps>

const UserPage: NextPage<UserPageProps> = ({
  id,
  user,
  products,
}: UserPageProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Flex className="px-0.5 py-0.5 md:py-0 justify-center ">
        <div style={{width: 1180 }}>
          <Box className="mb-0.5">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href="/">
                  <a>トップ</a>
                </Link>
              </BreadcrumbItem>
              {user && <BreadcrumbItem>{user.username}</BreadcrumbItem>}
            </Breadcrumb>
          </Box>
          <Box>
            <Box className="mt-0.5 ">
              {/* ユーザープロファイルコンテナ
              ユーザー情報を表示する。useUserで常に最新のデータを取得。 */}
              <UserProfileContainer userId={id} user={user} />
            </Box>
            <Box className="mb-0.5 ">
              <Separator />
            </Box>
            {/* ユーザー商品カードリストコンテナ
                ユーザーが所持する商品カードリストを表示する。useSearchで常に最新。*/}
            <UserProductCardListContainer userId={id} products={products} />
          </Box>
        </div>
      </Flex>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }
  const users = await getAllUsers(context)
  const paths = users.map((u) => `/users/${u.id}`)

  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }

  if (!params) {
    throw new Error('params is undefined')
  }

  //ユーザー情報とユーザーの所持する商品を取得し、静的ページを更新する
  //10秒でrevalidateな状態にし、静的ページを更新する
  const userId = Number(params.id)
  const [user, products] = await Promise.all([
    getUser(context, {id: userId }),
    getAllProducts(context, {userId }),
  ])

  return {
    props: {
      id: userId,
      user,
      products: products ?? [],
    },
    revalidate: 10
  }
}

export default UserPage
