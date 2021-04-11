import http from './utils/http'

// const handler = function(response) {
//     return new Promise(function(resolve, reject) {
        
//     })
// }
const baseUrl = ''
const $get = (url, params) => {
    console.log(params)
    let sParams = '?'
    for (let key in params) {
        sParams += key + '=' + params[key] + '&'
    }
    const fullUrl = baseUrl + url + sParams.slice(0, -1)
    console.log('fullUrl', fullUrl)
    return http.get(fullUrl)
}

const $post = (url, data) => {
    return http.post(baseUrl + url, data)
}
// const abUrl = (fn, url) => {

// }


class Apis {
    constructor() {
        this.init()
    }
    init() {
        const articleApi = '/article/'
        this.Article = {
            get: (id) => $get(`${articleApi}get`, {id}),
            update: (data) => {
                const { id, head, author, viewed, time, article, categories } = data
                console.log('update', data, id)
                // return $post(`${articleApi}update`, data)
                return $post(`${articleApi}update`, {
                    id,
                    head,
                    author,
                    viewed,
                    time,
                    article,
                    categories,
                })
            },
            getlist: (offset, num) => {
                return $get(`${articleApi}getlist`, {offset, num})
            }
        }

        const userApi = '/user/'
        this.User = {
            // 在此对接与后台的数据
            login: (name, pwd) => $post(`${userApi}login`, { name, pwd })
        }
    }
}

export default new Apis()
// export default {
//     getArticle: function(id) {
//         return axios.get(`/article?id=${id}`)
//             .then(function(response) {
//                 console.log(response)
//                 return Promise.resolve(response.data[0])
//             })
//             .catch(function(error) {
//                 console.log(error)
//             })
//     },

//     uploadArticle: function(data) {
//         const formData = new FormData()        
//         for (const key in data) {
//             console.log(key, data[key], '\n')
//             formData.append(key, data[key])
//         }
//         const config = {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         }
//         return axios.post('/upload', formData, config)
//         // .then((res) => {
            
//         // })
//     }
// }