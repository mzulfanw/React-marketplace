import { createSlice } from '@reduxjs/toolkit'
import { fetchProduct } from '../actions/productAction'

const initialState = {
    product: [],
    loading: false
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProduct.pending, state  => {
            return {
                ...state,
                loading: true
            }
        })
            .addCase(fetchProduct.fulfilled, (state,action) => {
                return {
                    ...state,
                    loading: false,
                    product: action?.payload?.data
                }
            })
    }
})

export default productSlice.reducer