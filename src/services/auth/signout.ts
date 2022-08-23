import type { ApiContext } from 'types'
import { fetcher } from 'utils'

/** 認証API（サインアウト
 * @params context APIコンテキスト
 * @returns サインアウトメッセージ
 */
const signout = async (context: ApiContext): Promise<{ messasge: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signout`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'appliation/json',
      },
    },
  )
}

export default signout
