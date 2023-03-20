import { useRouter } from 'next/router'
import { ChangeEvent, FC, useState } from 'react'

import styles from './Search.module.scss'

const Search: FC = () => {
	const [value, setValue] = useState<string>('')

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const { push } = useRouter()

	const handleClick = () => {
		if (!value.length) return
		push(`/search?q=${value}`)
	}

	return (
		<div className={styles.search}>
			<input
				className={styles.input}
				type='search'
				placeholder='Поиск...'
				onChange={onChange}
				value={value}
			/>
			<button onClick={handleClick}>Найти</button>
		</div>
	)
}

export default Search
