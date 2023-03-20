import cn from 'clsx'
import { FC } from 'react'

const Line: FC<{ className?: string }> = ({ className }) => {
	return <div className={cn('w-full h-[1px] bg-[#EEE]', className)}></div>
}

export default Line
