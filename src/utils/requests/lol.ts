import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const lolRequest = axios.create(({
  timeout: 5000,
  withCredentials: true
}))

/* Handle request to server */
lolRequest.interceptors.request.use((config: AxiosRequestConfig) => {
  //
  return config
}, (error) => {
  console.error(error.message)
  console.error(error)
})

/* Handle response from server */
lolRequest.interceptors.response.use((config: AxiosResponse) => {
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

export default lolRequest
