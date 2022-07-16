/**
 * 
 * Configure Local Storage 
 * 
 * @param {*} name 
 * @param {*} value 
 * @param {*} action 
 */
const configureStore = (name,value,action = 'set') => {
    if (action === 'set') {
        window.localStorage.setItem(name,value)
    } else {
        window.localStorage.removeItem(name)
    }
}

/**
 * 
 * Set Local Storage 
 * 
 * @param {*} storages
 */
export const setStorages = (storages) => {
    storages.map((item) => configureStore(item?.name, item?.value))
}

/**
 * 
 * Clear Local Storage 
 * 
 * @param {*} storages
 */
export const clearStorages = (storages) => {
    storages.map((item) => configureStore(item,null,'remove'))
}

/**
 * 
 * Get local Storage 
 * 
 * @param {*} storage 
 * @returns
 */
export const getStorage = (storage) => {
    const store = window.localStorage.getItem(storage)

    if(typeof storage !== 'undefined') {
        return store
    }
    
    return null
}