import axios, { AxiosError } from 'axios'

export const defaultAxios = axios.create({
  timeout: 2500, // 연결 자동 끊길 시간, 2500이면 2.5초
  withCredentials: true, // 쿠키 전송시 사용
})

/**
 * Request config and error handler
 */
defaultAxios.interceptors.request.use(config => {
  return config
}, async (error: AxiosError) => {
  await Promise.reject(error)
})

/**
 * Response about config and error handler
 */
defaultAxios.interceptors.response.use(config => {
  return config
}, async (error) => {
  console.error(error)
})

export default defaultAxios
