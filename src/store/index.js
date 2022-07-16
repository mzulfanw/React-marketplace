import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import action from './actions'
import producReducer from './features/Product'
import darkModeReducer from './features/DarkMode'

export default configureStore({
    reducer: {
        product: producReducer,
        darkMode: darkModeReducer
    },
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false
        })
    ] 
})

/**
 * 
 * Snippet to call Action Redux 
 * 
 * @param {...any} keys 
 * @returns
 */
export function mapStateToProps(...keys) {
    return (state) => keys.reduce((res,key) => {
        res[key] = state[key]
        return res
    }, {})
}

/**
 * 
 * Snippet to call Action Redux 
 * 
 * @param {...any} keys 
 * @returns
 */
export function mapActions(...keys) {
    return (dispatch)  => keys.reduce((res,key) => {
        res[key] = (...args) => dispatch(action[key](...args))
        return res
    }, {})
}
