import { FC, PropsWithChildren } from 'react'

interface IButton {
	className: string
}

const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	children,
	...rest
}) => {
	return (
		<button className={className} {...rest}>
			{children}
		</button>
	)
}

export default Button
