import Image from 'next/image'
import { FC } from 'react'
import { MdOutlineDelete } from 'react-icons/md'

import { useActions } from '@/hooks/useActions'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from '../CheckoutList.module.scss'

import Quantity from './Quantity/Quantity'
import { ICartItem } from '@/types/cart.interface'

const CheckoutItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart } = useActions()
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				alt={item.product.name}
				width={200}
				height={200}
			/>
			<div className={styles.info}>
				<div className={styles.name}>{item.product.name}</div>
				<div className={styles.color}>Цвет: {item.product.color}</div>
				{item.ramSize && (
					<div className={styles.ram}>Объем ОЗУ: {item.ramSize}</div>
				)}
				{item.storageSize && (
					<div className={styles.storage}>Память: {item.storageSize}</div>
				)}
			</div>
			<div className={styles.price}>{formatToCurrency(item.price)}</div>
			<div className={styles.quantity}>
				<Quantity item={item} />
			</div>
			<div className={styles.price}>
				{formatToCurrency(item.price * item.quantity)}
			</div>
			<button onClick={() => removeFromCart(item.id)}>
				<MdOutlineDelete />
			</button>
		</div>
	)
}

export default CheckoutItem
