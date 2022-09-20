import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const lolRequestInstance = axios.create(({
  baseURL: process.env.BASE_API || 'http://127.0.0.1:8001/',
  timeout: 5000,
  withCredentials: true
}))

/* Handle request to server */
lolRequestInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  //
  return config
}, (error) => {
  console.error(error.message)
  console.error(error)
})

/* Handle response from server */
lolRequestInstance.interceptors.response.use((config: AxiosResponse) => {
  // @DESCRIBE: Response from server

  return config
}, async (error) => {
  /* Error Handler 403 - Token or auth error */
  if (error.response.status === 403) {
    // @DESCRIBE: Forbidden
  } else if(error.response.status === 405) {
    // @DESCRIBE: Token is expired
  }

  console.log(error)
  throw error.response
})

export default lolRequestInstance
