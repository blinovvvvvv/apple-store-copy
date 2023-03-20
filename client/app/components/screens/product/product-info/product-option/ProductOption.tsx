import cn from 'clsx'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from '../ProductInfo.module.scss'

import { TypeRamSize, TypeStorageSize } from '@/types/option.types'

interface IProductOption {
	title: string
	variables: TypeRamSize[] | TypeStorageSize[]
	option: TypeRamSize | TypeStorageSize | undefined
	type: 'ramSize' | 'storageSize'
}

const ProductOption: FC<IProductOption> = ({
	title,
	variables,
	option,
	type
}) => {
	const { changeOption } = useActions()
	const selectedButtons = useTypedSelector(
		state => state.option.selectedButtons
	)

	return (
		<div className={styles.option}>
			<div className={styles.title}>{title}</div>
			<div className={styles.variables}>
				{variables.map((variable, index) => (
					<button
						key={index}
						className={cn({
							[styles.active]: selectedButtons.some(
								item => variable === item.value
							)
						})}
						onClick={() =>
							changeOption({
								option: type,
								value: variable,
								index
							})
						}
					>
						{variable}
					</button>
				))}
			</div>
		</div>
	)
}

export default ProductOption
