import { createSlice } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        theme: 'light'
    },
    reducers:{}
})

export default darkModeSlice.reducer