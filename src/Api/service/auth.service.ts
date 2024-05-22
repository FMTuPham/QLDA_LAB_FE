import API from '../instance'
import { ENDPOINTS } from '../endpoints'
import { LoginProps } from '../../types/auth'

export function loginAPI(body: LoginProps) {
  return API.post(ENDPOINTS.LOGIN, body)
}


export function logoutAPI() {
  return API.post(ENDPOINTS.LOGOUT)
}