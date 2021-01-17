import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    currentNominations: [],
    currentSize: 0
}

const nominationsSlice = createSlice({
    name: 'nominations',
    initialState,
    reducers: {
        addNomination(state, action) {
            state.currentNominations.push(action.payload)
            state.currentSize += 1
        },
        removeNomination(state, action) {
            state.currentNominations = state.currentNominations.filter((nom) => nom.imdbID !== action.payload.imdbID)
            state.currentSize -= 1
        }
    }
})

export const { addNomination, removeNomination } = nominationsSlice.actions
export const nominationsSelector = state => state.nominations
export default nominationsSlice.reducer