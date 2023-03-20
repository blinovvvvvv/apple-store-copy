import { FC, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { useActions } from '@/hooks/useActions'

import styles from './Quantity.module.scss'
import { ICartItem } from '@/types/cart.interface'

const Quantity: FC<{ item: ICartItem }> = ({ item }) => {
	const [value, setValue] = useState<number>(item.quantity)
	const { changeQuantity } = useActions()

	const isAvailable = value <= 5 && value >= 1

	const handleClick = (id: number, type: 'minus' | 'plus') => {
		if (isAvailable) {
			changeQuantity({
				type,
				id
			})
			setValue(prev => (type === 'minus' ? prev - 1 : prev + 1))
		}
	}

	return (
		<div className={styles.quantity}>
			<button
				onClick={() => handleClick(item.id, 'minus')}
				disabled={!(value > 1)}
			>
				<AiOutlineMinus size={16} />
			</button>
			<span>{value}</span>
			<button
				onClick={() => handleClick(item.id, 'plus')}
				disabled={!(value < 5)}
			>
				<AiOutlinePlus size={16} />
			</button>
		</div>
	)
}

export default Quantity
