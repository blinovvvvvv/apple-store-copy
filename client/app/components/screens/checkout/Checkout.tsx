import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Title from '@/components/ui/title/Title'

import CheckoutList from './checkout-list/CheckoutList'
import Total from './total/Total'

const Checkout: FC = () => {
	return (
		<Layout title='Корзина'>
			<Title className='font-medium text-2xl mb-6'>Корзина</Title>
			<div className='flex justify-between gap-16'>
				<CheckoutList />
				<Total />
			</div>
		</Layout>
	)
}

export default Checkout
