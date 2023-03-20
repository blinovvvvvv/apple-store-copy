import { FC, PropsWithChildren } from 'react'

import Header from '@/components/layout/header/Header'
import Meta from '@/components/layout/meta/Meta'
import { ISeo } from '@/components/layout/meta/meta.interface'

import styles from './Layout.module.scss'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<Header />
			<div className={styles.layout}>
				<section className={styles.content}>{children}</section>
			</div>
		</>
	)
}

export default Layout
