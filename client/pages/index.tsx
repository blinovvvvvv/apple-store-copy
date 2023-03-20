import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'

import { productService } from '@/services/product.service'

import { IProduct } from '@/types/product.interface'

const HomePage: NextPage<{ products: IProduct[] }> = ({ products }) => {
	return <Home products={products} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const products = await productService.getAll()

		return {
			props: {
				products
			}
		}
	} catch (e) {
		return {
			props: {
				products: []
			}
		}
	}
}

export default HomePage
