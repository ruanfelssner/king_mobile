import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext'
import Spinner from 'react-native-loading-spinner-overlay';
import * as axios from 'axios';


export default  () => {
  const [ spinner, setSpinner] = useState(false);
  axios.interceptors.request.use((config) =>{
    setSpinner(true)
    return config
  })
  axios.interceptors.response.use((config) =>{
    setSpinner(false)
    return config
  })
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
        <Spinner visible={spinner} />
      </NavigationContainer>
    </UserContextProvider>
  );
}