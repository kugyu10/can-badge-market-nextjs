import { Controller, useForm } from 'react-hook-form'
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'
import Text from 'components/atoms/Text'
import TextArea from 'components/atoms/TextArea'
import Box from 'components/layout/Box'
import Dropdown from 'components/molecules/Dropdown'
import InputImages, { FileData } from 'components/molecules/InputImages'
import type { Category, Condition } from 'types'

export type ProductFormData = {
  image: FileData[]
  title: string
  description: string
  category: Category
  condition: Condition
  price: string //QUESTION ここはstringなんだ？
}

interface ProductFormProps {
  /** 出品ポタンを押した時のイベントハンドラ */
  onProductSave?: (data: ProductFormData) => void
}

/** 商品投稿フォーム */
const ProductForm = ({ onProductSave }: ProductFormProps) => {
  //React Hook Form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormData>()

  const onSubmit = (data: ProductFormData) => {
    onProductSave && onProductSave(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box className="mb-1 ">
        <Box className="mb-0.5">
          <Text className="font-bold " variant="mediumLarge">
            商品の写真
          </Text>
        </Box>
        <Controller
          control={control}
          name="image"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputImages
              images={value ?? []}
              onChange={onChange}
              maximumNumber={1}
              hasError={!!error}
            />
          )}
        />
        {errors.image && (
          <Text variant="small" className="text-red-600 pl-0.5 ">
            Product image is required
          </Text>
        )}
      </Box>

      <Box className="mb-1 ">
        <Box className="mb-0.5 ">
          <Text variant="mediumLarge" className="font-bold ">
            商品情報
          </Text>
        </Box>
        <Box className="mb-0.5 ">
          <Text variant="medium">タイトル</Text>
          <Input
            {...register('title', { required: true })}
            name="title"
            type="text"
            placeholder="出品のタイトル"
            hasBorder={true}
            hasError={!!errors.title}
          />
          {errors.title && (
            <Text variant="small" className="text-red-600 pl-0.5 ">
              タイトルの入力は必須です
            </Text>
          )}
        </Box>
        <Box className="mb-0.5 ">
          <Text variant="medium">概要</Text>
          <Controller
            control={control}
            name="description"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextArea
                placeholder="アニメ「◯◯◯◯」のキャラクター「◯◯◯◯」の缶バッジです"
                hasError={!!error}
                onChange={onChange}
              >
                {value}
              </TextArea>
            )}
          />
          {errors.description && (
            <Text variant="small" className="text-red-600 pl-0.5 ">
              概要の入力は必須です
            </Text>
          )}
        </Box>
        <Box className="mb-0.5 ">
          <Text variant="medium">カテゴリ</Text>
          <Controller
            control={control}
            name="category"
            rules={{ required: true }}
            defaultValue="anime"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: 'anime', label: 'アニメ' },
                  { value: 'actor', label: '声優' },
                  { value: 'other', label: 'その他' },
                ]}
                hasError={!!error}
                value={value}
                placeholder="カテゴリを選択して下さい"
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.category && (
            <Text variant="small" className="text-red-600 pl-0.5 ">
              カテゴリの選択は必須です
            </Text>
          )}
        </Box>
        <Box className="mb-0.5 ">
          <Text variant="medium">商品の状態</Text>
          <Controller
            control={control}
            name="condition"
            rules={{ required: true }}
            defaultValue="used"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: 'brand-new', label: '新品' },
                  { value: 'almost-new', label: '新古品' },
                  { value: 'used', label: '中古（良）' },
                  { value: 'heavy-used', label: '中古（悪）' },
                ]}
                hasError={!!error}
                value={value}
                placeholder="カテゴリを選択して下さい"
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.condition && (
            <Text variant="small" className="text-red-600 pl-0.5 ">
              商品の状態の選択は必須です
            </Text>
          )}
        </Box>
        <Box className="mb-0.5 ">
          <Text variant="medium">価格（円）</Text>
          <Input
            {...register('price', { required: true })}
            name="price"
            type="number"
            placeholder="100"
            hasBorder={true}
            hasError={!!errors.price}
          />
          {errors.price && (
            <Text variant="small" className="text-red-600 pl-0.5 ">
              価格の入力は必須です
            </Text>
          )}
        </Box>
      </Box>
      <Button variant="primary" className="w-full" type="submit">
        出品
      </Button>
    </form>
  )
}

export default ProductForm
