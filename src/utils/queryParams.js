/**
 *
 * Query params
 *
 * @param {*} status
 * @param {*} limit
 * @returns
 */
export const queryParams = ({ status, limit}) => {
    return `?status=${status}&limit=${limit}`
}
