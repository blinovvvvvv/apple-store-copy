import { TypeRamSize, TypeStorageSize } from './option.types'
import { IProduct } from './product.interface'

export interface ICartItem {
	product: Omit<IProduct, 'price' | 'ramSize' | 'storageSize'>
	quantity: number
	id: number
	ramSize?: TypeRamSize
	storageSize?: TypeStorageSize
	price: number
}
