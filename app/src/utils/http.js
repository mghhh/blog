import axios from 'axios'

function get(url) {
    return axios.get(url)
        .then((response) => {
            console.log('utils-->http:get', response)
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}
// post({ url, data })?
function post(url, data) {
    console.log('utils-->http', data)    
    const formData = new FormData()        
    for (const key in data) {
        console.log(key, data[key], '\n')
        formData.append(key, data[key])
    }
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    return axios.post(url, formData, config)
        .then((response) => {
            console.log('utils-->http:post', response)
            return response.data
        })
        .catch((error) => {
            console.log(error)
        })
}

export default { get, post }