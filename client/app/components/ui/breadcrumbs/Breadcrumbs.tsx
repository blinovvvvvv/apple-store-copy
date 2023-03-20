import Link from 'next/link'
import { FC } from 'react'

import styles from './Breadcrumbs.module.scss'
import { ICategory } from '@/types/category.interface'
import { IProduct } from '@/types/product.interface'

interface IBreadcrumbs {
	category: ICategory
	product?: IProduct
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ category, product }) => {
	return (
		<div className={styles.breadcrumbs}>
			<Link href={'/'}>Главная</Link>
			<span>/</span>
			{category && (
				<Link href={`/category/${category.slug}`}>{category.name}</Link>
			)}
			{product && (
				<>
					<span>/</span>
					<Link href={`/product/${product.slug}`}>{product.name}</Link>
				</>
			)}
		</div>
	)
}

export default Breadcrumbs
