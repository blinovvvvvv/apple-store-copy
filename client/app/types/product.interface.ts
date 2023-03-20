import { ICategory } from '@/types/category.interface'
import { TypeColor, TypeRamSize, TypeStorageSize } from '@/types/option.types'

export interface IProduct {
	name: string
	price: number
	slug: string
	category: ICategory
	images: string[]
	allColors: TypeColor[]
	color: TypeColor
	ramSize?: TypeRamSize[]
	storageSize?: TypeStorageSize[]
}
