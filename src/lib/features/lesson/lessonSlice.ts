import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
	items: number[]
}
const initialState = {
	items: []
} satisfies CounterState as CounterState

const lessonSlice = createSlice({
	name: 'lesson',
	initialState,
	reducers: {
		create(state, action: PayloadAction<number>) {
			state.items = [...state.items, action.payload]
		}
	}
})

export const { create } = lessonSlice.actions

export default lessonSlice.reducer
