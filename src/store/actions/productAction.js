import { createAsyncThunk } from '@reduxjs/toolkit'
import { get } from '../../utils/interceptors'
import { queryParams } from '../../utils/queryParams'

const basePath = `products`

/**
 * 
 * Actions Product
 * 
 * @param {*} payload
 * @returns 
 */

export const fetchProduct = createAsyncThunk('product/fetchProduct', async(payload) => {
    const { limit , status } = payload
    return await get(`${basePath}${queryParams({limit, status})}`)
})