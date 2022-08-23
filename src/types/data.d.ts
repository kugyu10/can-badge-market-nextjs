//商品のカテゴリ
export type Category = 'anime' | 'actor' | 'other'

//商品の状態
export type Condition = 'brand-new' | 'almost-new' | 'used' | 'heavy-used'

//ユーザー
export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  description: string
}

//商品
export type Product = {
  id: number
  category: CoreCategory
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: User
}

//APIContext
export type ApiContext = {
  apiRootUrl: string
}
