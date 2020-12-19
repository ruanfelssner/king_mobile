import token from './Service'
import * as axios from 'axios';
const BASE_API = 'https://apiking.herokuapp.com';
axios.defaults.baseURL = BASE_API
axios.defaults.headers.common = {'Authorization': `bearer `+token}

export default {
    checkToken: async (token) => {    
        return await axios.post('login/Token', {token})
        .then((res) =>{ return res.data })
        .catch((res) => { return res })
    },
    signIn: async (email, password) => {
        return await axios.post('login', {
            email: email,
            password: password
        })
        .then((res) =>{ return res.data })
        .catch((res) => { return res })
    },
    signUp: async(nome, email, password) => {

        return await axios.post('login/Add', {
            name: nome,
            email: email,
            password: password
        })
        .then((res) =>{ return res.data })
        .catch((res) => { return res })
    },
    getRifas: async() => { 
        console.log(token)  
        return await axios.get('rifas')
        .then((res) =>{ return res.data })
        .catch((res) => { return res })
    }
}