import { NextPage } from 'next'
import { useRouter } from 'next/router'

import SearchList from '@/components/screens/search/SearchList'

const SearchPage: NextPage = () => {
	const { query } = useRouter()
	return <SearchList searchTerm={String(query.q)} />
}

export default SearchPage
