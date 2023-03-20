import Link from 'next/link'
import { FC } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from '../CatalogItem.module.scss'

import { IProduct } from '@/types/product.interface'

const CatalogPrice: FC<{ item: IProduct }> = ({ item }) => {
	return (
		<div className={styles.price}>
			<div>От {formatToCurrency(item.price)}</div>
			<Link href={`/product/${item.slug}`}>Перейти</Link>
		</div>
	)
}

export default CatalogPrice
