import { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type SigninParams = {
  username: string
  password: string
}

/** 認証API
 * @param context APIコンテキスト(APIのルートURLを指定)
 * @param params パラメータ (SigninParams)
 * @returns ログインユーザ
 */
const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
