import { FC } from 'react'

import ProductImage from '@/screens/product/product-image/ProductImage'

import Layout from '@/components/layout/Layout'

import Breadcrumbs from '@/ui/breadcrumbs/Breadcrumbs'

import styles from './Product.module.scss'
import ProductInfo from './product-info/ProductInfo'
import { IProduct } from '@/types/product.interface'

const Product: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.name}>
			<Breadcrumbs category={product.category} product={product} />
			<div className={styles.product}>
				<ProductImage product={product} />
				<div>
					<ProductInfo product={product} />
				</div>
			</div>
		</Layout>
	)
}

export default Product
