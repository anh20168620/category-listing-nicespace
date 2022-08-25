import { fetch } from '../utils'

export const fetchProduct = async (params) => {
    const res = await fetch.post('product-items', params)
    return res.data
}

