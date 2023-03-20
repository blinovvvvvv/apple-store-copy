import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href={'/'}>
			<Image
				src={logo}
				alt='Contrl Store Logo'
				draggable={false}
				priority
				width={165}
			/>
		</Link>
	)
}

export default Logo
