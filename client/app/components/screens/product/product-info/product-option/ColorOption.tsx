import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import styles from '../ProductInfo.module.scss'

import { EnumColor } from '@/types/color.enum'
import { IProduct } from '@/types/product.interface'

interface IColorOption {
	product: IProduct
}

const ColorOption: FC<IColorOption> = ({ product }) => {
	return (
		<div className={styles.colors}>
			<span>Цвет</span>
			<div>
				{product.allColors.map(color => (
					<Link
						key={color}
						href={color}
						className={cn({
							[styles.active]: product.color === color
						})}
					>
						<div className={`${EnumColor[color]}`}></div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default ColorOption
