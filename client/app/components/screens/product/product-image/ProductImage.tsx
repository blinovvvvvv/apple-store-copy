import Image from 'next/image'
import { FC, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import ImageRow from '@/screens/product/product-image/image-row/ImageRow'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './ProductImage.module.scss'
import { IProduct } from '@/types/product.interface'

const ProductImage: FC<{ product: IProduct }> = ({ product }) => {
	const imageIndex = useTypedSelector(state => state.image.selectedIndex)
	const { nextImage, prevImage, selectIndex } = useActions()

	useEffect(() => {
		selectIndex(0)
	}, [])

	return (
		<div className={styles.images}>
			<ImageRow images={product.images} />
			<div className={styles.main}>
				<button onClick={() => prevImage()}>
					<MdChevronLeft size={30} />
				</button>
				<Image
					src={product.images[imageIndex]}
					alt={product.name}
					width={400}
					height={400}
					quality={100}
					unoptimized
				/>
				<button
					onClick={() => nextImage({ imageCount: product.images.length })}
				>
					<MdChevronRight size={30} />
				</button>
			</div>
		</div>
	)
}

export default ProductImage
