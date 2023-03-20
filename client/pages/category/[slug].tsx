import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Category from '@/screens/category/Category'

import { categoryService } from '@/services/category.service'

import { ICategory } from '@/types/category.interface'

const CategoryPage: NextPage<{ category: ICategory }> = ({ category }) => {
	return <Category category={category} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const slugs = await categoryService.getAll()
		const paths = slugs.category.map(item => ({
			params: {
				slug: item.slug
			}
		}))

		return {
			paths,
			fallback: 'blocking'
		}
	} catch (e) {
		console.log(e)
		return {
			paths: [],
			fallback: 'blocking'
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const category = await categoryService.getCategory(String(params?.slug))

		return {
			props: {
				category
			}
		}
	} catch (e) {
		console.log(e)
		return {
			props: {}
		}
	}
}

export default CategoryPage
