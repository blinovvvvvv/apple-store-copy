import Link from 'next/link'
import { FC } from 'react'

import { IMenuItem } from '@/components/layout/header/menu/menu.interface'

import styles from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<Link className={styles.item} href={item.link}>
			{item.name}
		</Link>
	)
}

export default MenuItem
