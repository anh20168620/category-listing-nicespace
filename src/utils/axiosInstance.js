import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://nicespace.com.vn/front-store/v2'
})
export default axiosInstance