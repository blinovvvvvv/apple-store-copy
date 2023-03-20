import { FC } from 'react'

import RowItem from '@/screens/product/product-image/image-row/row-item/RowItem'

import styles from './ImageRow.module.scss'

interface IImageRow {
	images: string[]
}

const ImageRow: FC<IImageRow> = ({ images }) => {
	return (
		<div className={styles.row}>
			{images.map((image, index) => (
				<RowItem key={index} image={image} index={index} />
			))}
		</div>
	)
}

export default ImageRow
