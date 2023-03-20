import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IChangeOptionPayload, IOptionInitialState } from './option.interface'

const initialState: IOptionInitialState = {
	ramSize: '8 ГБ',
	storageSize: '256 ГБ',

	buttons: [[], []],
	selectedButtons: []
}

export const optionSlice = createSlice({
	name: 'option',
	initialState,
	reducers: {
		setInitialState: (state, action: PayloadAction<IOptionInitialState>) => {
			state.ramSize = action.payload.ramSize
			state.storageSize = action.payload.storageSize

			state.selectedButtons = action.payload.selectedButtons
			state.buttons = action.payload.buttons
		},
		changeOption: (state, action: PayloadAction<IChangeOptionPayload>) => {
			const { option, value, index: actionIndex } = action.payload

			const index = option === 'ramSize' ? 0 : 1

			let selectedButtons = state.selectedButtons.map(item => ({
				index: item.index,
				value: item.value
			}))

			selectedButtons[index] = {
				index: actionIndex,
				value: value
			}
			state.selectedButtons[index] = selectedButtons[index]
		}
	}
})
