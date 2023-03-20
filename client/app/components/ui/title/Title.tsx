import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface ITitle {
	className?: string
}

const Title: FC<PropsWithChildren<ITitle>> = ({ children, className }) => {
	return (
		<h1 className={cn('text-black text-3xl font-bold', className)}>
			{children}
		</h1>
	)
}

export default Title
