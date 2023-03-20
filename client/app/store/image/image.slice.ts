import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: IImageInitialState = {
	selectedIndex: 0
}

export const imageSlice = createSlice({
	name: 'image',
	initialState,
	reducers: {
		selectIndex: (state, action: PayloadAction<number>) => {
			state.selectedIndex = action.payload
		},
		nextImage: (state, action: PayloadAction<{ imageCount: number }>) => {
			if (state.selectedIndex !== action.payload.imageCount - 1)
				state.selectedIndex++
		},
		prevImage: state => {
			if (state.selectedIndex > 0) state.selectedIndex--
		}
	}
})
