import axios from 'axios'

const instance = axios.create({
    baseURL:'https://test.acpt.lk/api'
})

export default instance