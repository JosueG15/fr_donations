import axios from 'axios';

// const axiosInstance = axios.create({
//     baseURL: process.env.COC_API_URL,
// });

const axiosInstance = axios.create({
    baseURL: process.env.COC_API_URL,
});


axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${process.env.COC_API_KEY}`

export default axiosInstance