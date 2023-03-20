import { IProduct } from '@/types/product.interface'

export interface ICategory {
	name: string
	slug: string
	products: IProduct[]
}
