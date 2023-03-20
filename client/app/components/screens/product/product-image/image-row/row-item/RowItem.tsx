import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from '../ImageRow.module.scss'

interface IRowItem {
	image: string
	index: number
}

const RowItem: FC<IRowItem> = ({ index, image }) => {
	const imageIndex = useTypedSelector(state => state.image.selectedIndex)

	const { selectIndex } = useActions()

	return (
		<button
			onClick={() => selectIndex(index)}
			className={cn(styles.image, {
				[styles.active]: index === imageIndex
			})}
		>
			<Image src={image} alt={image} width={100} height={100} />
		</button>
	)
}

export default RowItem
