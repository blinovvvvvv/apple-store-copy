import { gql } from 'graphql-request'

import { graphqlClient } from '../config/api.config'

import { IProduct } from '@/types/product.interface'

export const productService = {
	async getAll() {
		return graphqlClient
			.request<{ product: IProduct[] }>(
				gql`
					query getProduct {
						product {
							name
							price
							storageSize
							ramSize
							images
							slug
							storageSize
							color
							allColors
						}
					}
				`
			)
			.then(data => {
				return data.product
			})
	},

	async getBySlug(slug: string) {
		return graphqlClient
			.request<{ productBySlug: IProduct[] }>(
				gql`
					query getProductBySlug($slug: String!) {
						productBySlug(slug: $slug) {
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
				`,
				{
					slug
				}
			)
			.then(data => data.productBySlug)
	},

	async getAllSlugs() {
		return graphqlClient.request<{ product: IProduct[] }>(
			gql`
				query getCategories {
					product {
						slug
					}
				}
			`
		)
	},

	async findProduct(searchTerm: string) {
		return graphqlClient.request<{ findProduct: IProduct[] }>(
			gql`
				query findProduct($searchTerm: String!) {
					findProduct(searchTerm: $searchTerm) {
						name
						price
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
			`,
			{ searchTerm }
		)
	}
}
