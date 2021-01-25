import * as axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const getLocalToken = async () => {
    return await AsyncStorage.getItem('token').then(res =>{
        SetBearerToken(res)
    })
}
const SetBearerToken = (value) => {
    axios.defaults.headers.common = {'Authorization': `Bearer `+value}
}

export default getLocalToken