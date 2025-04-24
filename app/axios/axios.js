import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://edu-backend-git-main-abdelrahman-yasers-projects.vercel.app",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
// apiClient.interceptors.request.use(
//   (config) => { 
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`
//     }
//     return config
//   }
//   , (error) => {
//     return Promise.reject(error)
//   }
// )
// apiClient.interceptors.response.use(
//   (response) => {   
//     return response
//   }
//   , (error) => {
//     if (error.response.status === 401) {
//       localStorage.removeItem('token')
//       window.location.href = '/login'
//     }
//     return Promise.reject(error)
//   }
// )
export default apiClient