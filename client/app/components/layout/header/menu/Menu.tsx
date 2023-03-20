import { FC } from 'react'

import MenuItem from '@/components/layout/header/menu/MenuItem'
import { menuList } from '@/components/layout/header/menu/menu.data'

import styles from './Menu.module.scss'

const Menu: FC = () => {
	return (
		<nav className={styles.menu}>
			{menuList.map(item => (
				<MenuItem item={item} key={item.link} />
			))}
		</nav>
	)
}

export default Menu
