import { FC } from 'react'

import Line from '@/components/ui/line/Line'

import styles from './CheckoutList.module.scss'

const CheckoutHeader: FC = () => {
	return (
		<>
			<div className={styles.header}>
				<div>Наименование товара</div>
				<div>Цена</div>
				<div className='text-center'>Количество</div>
				<div className='text-center'>Стоимость</div>
			</div>
			<Line className='mb-4 max-w-[900px]' />
		</>
	)
}

export default CheckoutHeader
