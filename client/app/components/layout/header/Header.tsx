import { useRouter } from 'next/router'
import { FC } from 'react'

import Logo from '@/components/layout/header/Logo'
import Action from '@/components/layout/header/action/Action'
import Cart from '@/components/layout/header/cart/Cart'
import Menu from '@/components/layout/header/menu/Menu'
import Search from '@/components/layout/header/search/Search'

import styles from './Header.module.scss'

const Header: FC = () => {
	const { asPath } = useRouter()

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div>
					<Logo />
					<Menu />
				</div>
				<Search />
				<Cart />
			</div>
			{asPath === '/' && <Action />}
		</header>
	)
}

export default Header
