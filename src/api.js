import axios from 'axios'


let api = {
  token: null,
  headers: {},
  http: axios,

  setAuthToken: token => {
    api.token = token
    api.headers.Authorization = `Bearer ${token}`
  },


  login: data => {
    return axios({ method: 'post', url: '/login', data })
      .then(res => res, err => ({ err }))
  },


  register: data => {
    return axios({ method: 'post', url: '/register', data })
      .then(res => res, err => ({ err }))
  },

  apps: () => axios({
    method: 'get',
    url: '/apps'
  }),

  disabledApps: () => axios({
    method: 'get',
    url: '/disabled'
  }),

  subscribe: ({ app, source }) => axios({
    method: 'post',
    url: '/subscribe',
    headers: api.headers,
    data: { app, source }
  })
}


export default api
