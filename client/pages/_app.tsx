import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from '@/store/store'

import '../styles/globals.scss'

const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800']
})

export const client = new ApolloClient({
	uri: 'http://localhost:4200/graphql',
	cache: new InMemoryCache()
})

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ApolloProvider client={client}>
					<QueryClientProvider client={queryClient}>
						<main className={inter.className}>
							<Component {...pageProps} />
						</main>
					</QueryClientProvider>
				</ApolloProvider>
			</PersistGate>
		</Provider>
	)
}
