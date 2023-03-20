import { FC } from 'react'
import { IProduct } from 'types/product.interface'

import CatalogItem from '@/ui/catalog/catalog-item/CatalogItem'

import styles from './Catalog.module.scss'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.catalog}>
			{products.length > 0 &&
				products.map(item => <CatalogItem item={item} key={item.name} />)}
		</div>
	)
}

export default Catalog
