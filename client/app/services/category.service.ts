import { gql } from 'graphql-request'

import { graphqlClient } from '../config/api.config'

import { ICategory } from '@/types/category.interface'

export const categoryService = {
	async getCategory(slug: string) {
		return graphqlClient
			.request<{ categoryBySlug: ICategory }>(
				gql`
					query getCategory($slug: String!) {
						categoryBySlug(slug: $slug) {
							name
							slug
							products {
								slug
								name
								price
								images
							}
						}
					}
				`,
				{
					slug
				}
			)
			.then(data => data.categoryBySlug)
	},

	async getAll() {
		return graphqlClient.request<{ category: Pick<ICategory, 'slug'>[] }>(
			gql`
				query getCategories {
					category {
						slug
					}
				}
			`
		)
	}
}
