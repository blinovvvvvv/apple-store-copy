import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Product from '@/screens/product/Product'

import { productService } from '@/services/product.service'

import { IProduct } from '@/types/product.interface'

const ProductPage: NextPage<{ product: IProduct }> = ({ product }) => {
	return <Product product={product} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const products = await productService.getAllSlugs()

		const paths = products.product.map(item => ({
			params: {
				slug: item.slug
			}
		}))

		return {
			paths,
			fallback: 'blocking'
		}
	} catch (error) {
		console.log(error)
		return {
			paths: [],
			fallback: 'blocking'
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const product = await productService.getBySlug(String(params?.slug))

		return {
			props: {
				product
			}
		}
	} catch (error) {
		console.log(error)
		return {
			props: {},
			notFound: true
		}
	}
}

export default ProductPage
