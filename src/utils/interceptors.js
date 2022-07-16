import axios from 'axios'
import { getStorage } from './localstorage'

/**
 * 
 * Axios create instance 
 */

const services = axios.create({
    baseURL: import.meta.env.VITE_APP_ENDPOINT,
    headers: {
        Authorization: {
            toString() {
                return `Bearer ${getStorage('token')}`
            }
        }
    }
})

/**
 * 
 * Services Get 
 * 
 * @param {*} url 
 * @param {*} params
 * @returns
 */
export const get = (url,params) => {
    return services.get(`${url}`, {
        params
    })
}