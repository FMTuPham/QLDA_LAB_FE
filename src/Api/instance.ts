import axios from 'axios'
import { store } from '../redux/store'
import { API_BASE_URL } from './endpoints'

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
//API.defaults.headers.common['bku-key'] = '8e31b3553533e085da38702a5a8f220c'

API.interceptors.request.use(
  config => {
    const token = store.getState().userReducer.accessToken
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default API
