import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { cartSlice } from './cart/cart.slice'
import { imageSlice } from './image/image.slice'
import { optionSlice } from './option/option.slice'

const persistConfig = {
	key: 'contrl-store',
	storage,
	whiteList: ['cart']
}
const rootReducer = combineReducers({
	image: imageSlice.reducer,
	cart: cartSlice.reducer,
	option: optionSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export let persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof store.getState>

export default store
