import { FC } from 'react'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Total.module.scss'

const Total: FC = () => {
	const cart = useTypedSelector(state => state.cart.items)

	const totalPrice = cart.reduce(
		(acc, item) => (acc += item.price * item.quantity),
		0
	)

	return (
		<div className={styles.total}>
			<div className={styles.price}>Итого: {formatToCurrency(+totalPrice)}</div>
			<button className={styles.order}>Оформить заказ</button>
		</div>
	)
}

export default Total
