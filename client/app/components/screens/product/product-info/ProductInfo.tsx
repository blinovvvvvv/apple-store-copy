import { FC, useEffect } from 'react'

import Line from '@/components/ui/line/Line'
import Title from '@/components/ui/title/Title'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import { formatToCurrency } from '@/utils/format-to-currency'

import AddToCartButton from './AddToCartButton'
import styles from './ProductInfo.module.scss'
import ColorOption from './product-option/ColorOption'
import ProductOption from './product-option/ProductOption'
import { TypeRamSize, TypeStorageSize } from '@/types/option.types'
import { IProduct } from '@/types/product.interface'

interface IProductInfo {
	product: IProduct
}

const ProductInfo: FC<IProductInfo> = ({ product }) => {
	const ramSizeOption = useTypedSelector(state => state.option.ramSize)
	const storageSizeOption = useTypedSelector(state => state.option.storageSize)

	const selectedButtons = useTypedSelector(
		state => state.option.selectedButtons
	)
	const { setInitialState } = useActions()
	useEffect(() => {
		setInitialState({
			ramSize: product.ramSize?.[0],
			storageSize: product.storageSize?.[0],
			selectedButtons: [
				{ value: product.ramSize?.[0], index: 0 },
				{ value: product.storageSize?.[0], index: 0 }
			],
			buttons: [product.ramSize, product.storageSize]
		})
	}, [])

	const price = selectedButtons.reduce(
		(acc, item) => acc + item.index * 30000,
		0
	)
	const total = product.price + price

	return (
		<div className={styles.info}>
			<Title className='text-xl font-semibold'>{product.name}</Title>
			<ColorOption product={product} />
			{product.ramSize && (
				<ProductOption
					title='Объем ОЗУ'
					variables={product.ramSize}
					option={ramSizeOption}
					type='ramSize'
				/>
			)}
			{product.storageSize && (
				<ProductOption
					title='Память'
					option={storageSizeOption}
					variables={product.storageSize}
					type='storageSize'
				/>
			)}
			<Line className='mt-10' />
			<div className={styles.price}>{formatToCurrency(total)}</div>
			<AddToCartButton
				product={product}
				price={total}
				ramSize={selectedButtons[0].value as TypeRamSize}
				storageSize={selectedButtons[1].value as TypeStorageSize}
			/>
		</div>
	)
}

export default ProductInfo
