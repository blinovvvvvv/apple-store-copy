import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { cartSlice } from '@/store/cart/cart.slice'
import { imageSlice } from '@/store/image/image.slice'
import { optionSlice } from '@/store/option/option.slice'

const rootAction = {
	...cartSlice.actions,
	...imageSlice.actions,
	...optionSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
