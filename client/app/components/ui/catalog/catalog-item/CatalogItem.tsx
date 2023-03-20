import Image from 'next/image'
import { FC } from 'react'

import CatalogPrice from '@/ui/catalog/catalog-item/catalog-price/CatalogPrice'

import styles from './CatalogItem.module.scss'
import { IProduct } from '@/types/product.interface'

const CatalogItem: FC<{ item: IProduct }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				unoptimized
				quality={100}
				src={item.images[0]}
				alt={item.name}
				width={250}
				height={300}
			/>
			<div className={styles.name}>{item.name}</div>
			<CatalogPrice item={item} />
		</div>
	)
}

export default CatalogItem
