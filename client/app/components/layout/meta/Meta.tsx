import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { ISeo } from '@/components/layout/meta/meta.interface'

import { titleMerge } from '@/utils/title-merge'

const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	children,
	description
}) => {
	const { asPath } = useRouter()

	const currentUrl = `${process.env.APP_URL}/${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<link rel='canonical' href={currentUrl} />
						<meta property='og:type' content={'website'} />
						<meta property='og:locale' content='en' />
						<meta property='og:title' content={title} />
						<meta property='og:url' content={currentUrl} />
						<meta property='og:site_name' content={'coffee shop'} />
						<meta property='og:description' content={description} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
