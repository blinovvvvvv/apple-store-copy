import { FC } from 'react'

import Line from '@/components/ui/line/Line'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import CheckoutHeader from './CheckoutHeader'
import styles from './CheckoutList.module.scss'
import CheckoutItem from './checkout-item/CheckoutItem'

const CheckoutList: FC = () => {
	const cart = useTypedSelector(state => state.cart.items)

	return (
		<div className={styles.list}>
			<CheckoutHeader />
			{cart.map(item => (
				<CheckoutItem item={item} key={item.id} />
			))}
		</div>
	)
}

export default CheckoutList
