import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import { IHome } from '@/screens/home/home.interface'

import Layout from '@/components/layout/Layout'
import Sale from '@/components/ui/sale/Sale'

import Catalog from '@/ui/catalog/Catalog'

import { productService } from '@/services/product.service'

const Home: FC<IHome> = ({ products }) => {
	const { data } = useQuery(['get products'], () => productService.getAll())

	return (
		<Layout
			title='Catalog'
			description='Contrl Store is the best way to buy Apple electronics'
		>
			<Sale
				buttonText='Перейти'
				image='/images/iphone_14_pro_silver_1.png'
				title='Новые Macbook Pro 14 M2 и iPhone 14 Pro в нескольких цветах уже доступны для покупки!'
				link='/product/apple-iphone-14-pro'
			/>
			<Catalog products={products} />
		</Layout>
	)
}

export default Home
