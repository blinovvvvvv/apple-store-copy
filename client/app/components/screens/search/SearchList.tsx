import { gql } from '@apollo/client'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/catalog/Catalog'
import Title from '@/components/ui/title/Title'

import { productService } from '@/services/product.service'

const SCHEMA = gql`
	query findProduct($searchTerm: String!) {
		findProduct(searchTerm: $searchTerm) {
			name
			price
			storageSize
			ramSize
			images
			slug
			storageSize
			color
			allColors
			category {
				name
				slug
			}
		}
	}
`

interface ISearchList {
	searchTerm: string
}

const SearchList: FC<ISearchList> = ({ searchTerm }) => {
	// const { data } = useQuery(SCHEMA, { variables: { searchTerm } })
	// console.log(searchTerm)

	const { data } = useQuery(['search', searchTerm], () =>
		productService.findProduct(searchTerm)
	)

	// console.log(data)

	return (
		<Layout title='Поиск'>
			<Title>Поиск по запросу &quot;{searchTerm}&quot;</Title>
			<Catalog products={data?.findProduct || []} />
		</Layout>
	)
}

export default SearchList
