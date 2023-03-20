import { GraphQLClient } from 'graphql-request'

export const API_URL = `${process.env.SERVER_URL}/graphql`

export const graphqlClient = new GraphQLClient(API_URL, {
	headers: {
		'Content-Type': 'application/json'
	}
})
