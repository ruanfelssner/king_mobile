const BASE_API = 'https://apiking.herokuapp.com';
import * as axios from 'axios';
export default {
    checkToken: async (token) => {    
        const req = await fetch(BASE_API+'/auth/refresh', {
            method: 'POST',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();
        return json;
    },
    signIn: async (email, password) => {
        return await axios.post(BASE_API+'/login', {
            email: email,
            password: password
        })
        .then((res) =>{ return res.data })
        .catch((res) => { return res })
    },
    signUp: async(name, email, password) => {        
        const req = await fetch(BASE_API+'/login/Add', {
            method: 'POST',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await req.json();
        return json;
    }
}