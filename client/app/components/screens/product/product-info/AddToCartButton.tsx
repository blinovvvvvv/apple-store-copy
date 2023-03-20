import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './ProductInfo.module.scss'
import { TypeRamSize, TypeStorageSize } from '@/types/option.types'
import { IProduct } from '@/types/product.interface'

interface IAddToCartButton {
	product: IProduct
	price: number
	ramSize?: TypeRamSize
	storageSize?: TypeStorageSize
}

const AddToCartButton: FC<IAddToCartButton> = ({
	product,
	price,
	ramSize,
	storageSize
}) => {
	const cart = useTypedSelector(state => state.cart.items)

	const { addToCart, removeFromCart } = useActions()

	const existInCart = cart.find(
		item =>
			item.product === product ||
			(item.ramSize === ramSize && item.storageSize === storageSize)
	)

	return (
		<button
			className={styles.add}
			onClick={
				existInCart
					? () => removeFromCart(existInCart.id)
					: () =>
							addToCart({
								quantity: 1,
								product: product,
								price,
								ramSize,
								storageSize
							})
			}
		>
			{existInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
		</button>
	)
}

export default AddToCartButton
