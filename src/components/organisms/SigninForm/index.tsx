import { useForm } from 'react-hook-form'
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'

export type SigninFormData = {
  username: string
  password: string
}

interface SigninFormProps {
  /** サインインボタンを押した時のイベントハンドラ */
  onSignin?: (username: string, password: string) => void
}

/** サインインフォーム */
const SigninForm = ({ onSignin }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>()
  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data

    onSignin && onSignin(username, password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="mb-0.5">
        <Input
          {...register('username', { required: true })}
          name="username"
          type="text"
          placeholder="ユーザー名"
          hasBorder={true}
          hasError={!!errors.username}
        />
        {errors.username && (
          <Text variant="small" className="pl-0.5 text-red-600 ">
            ユーザー名は必須です
          </Text>
        )}
      </Box>
      <Box className="mb-0.5">
        <Input
          {...register('password', { required: true })}
          name="password"
          type="password"
          placeholder="パスワード"
          hasBorder={true}
          hasError={!!errors.password}
        />
        {errors.password && (
          <Text variant="small" className="pl-0.5 text-red-600 ">
            パスワードは必須です
          </Text>
        )}
      </Box>
      <Button variant="primary" className="w-full" type="submit">
        サインイン
      </Button>
    </form>
  )
}

export default SigninForm
