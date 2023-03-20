import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/ui/breadcrumbs/Breadcrumbs'

import Catalog from '@/ui/catalog/Catalog'
import Title from '@/ui/title/Title'

import { ICategory } from '@/types/category.interface'

const Category: FC<{ category: ICategory }> = ({ category }) => {
	return (
		<Layout
			title={category.name}
			description={
				'Категория iPhone, здесь представлены множество новых устройств)'
			}
		>
			<Breadcrumbs category={category} />
			<Title>{category.name}</Title>
			<Catalog products={category.products} />
		</Layout>
	)
}

export default Category
