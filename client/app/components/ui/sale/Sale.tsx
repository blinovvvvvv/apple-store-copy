import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Sale.module.scss'

interface ISale {
	title: string
	buttonText: string
	image: string
	link: string
}

const Sale: FC<ISale> = ({ image, buttonText, title, link }) => {
	return (
		<div className={styles.sale}>
			<div>
				<h2>{title}</h2>
				<Link href={link}>{buttonText}</Link>
			</div>
			<Image src={image} alt='Sale item image' width={300} height={250} />
		</div>
	)
}

export default Sale
