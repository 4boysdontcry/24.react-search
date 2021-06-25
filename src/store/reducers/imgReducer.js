import { createSlice } from '@reduxjs/toolkit'
import { getImgAction } from '../actions/img-action'

const name = 'img'

const initialState = {
	query: '',
	isQuering: false,
	err: null,
	isEnd: false,
	pageCnt: 0,
	listCnt: 0,
	lists: []
}

const reducers = {
	actQuery(state, { payload }) {
		state.query = payload
	}
}

const extraReducers = builder => builder
.addCase(getImgAction.pending, (state, { payload }) => {
	state.isQuering = true
})
.addCase(getImgAction.fulfilled, (state, { payload }) => {
	state.isQuering = false
	state.err = null
	state.isEnd = payload.isEnd
	state.pageCnt = payload.pageCnt
	state.listCnt = payload.listCnt
	state.lists = payload.lists
})
.addCase(getImgAction.rejected, (state, { payload }) => {
	state.isQuering = false
	state.err = payload
	state.query = ''
	state.isEnd = false
	state.pageCnt = 0
	state.listCnt = 0
	state.lists = []
})

const ImgReducers = createSlice({ name, initialState, reducers, extraReducers })

const getImgData = (query, size = 10) => (dispatch, getState) => {
	// dispatch(actQuery(query))
	dispatch(getImgAction({ query, size }))
}

export { getImgAction, getImgData }
export const { actQuery } = ImgReducers.actions
export default ImgReducers

