import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext'
import Spinner from 'react-native-loading-spinner-overlay';
import * as axios from 'axios';
export default  () => {
  const [ spinner, setSpinner] = useState(false);
  axios.interceptors.request.use(
    function (req) {      
      setSpinner(true)
      return req;
    },
    (err) => {
      setSpinner(false)
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    function (res) {
      setSpinner(false)
      return res;  
    },
    (err) => {
      setSpinner(false)
      return Promise.reject(err);
    }
  );

  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
        <Spinner visible={spinner} />
      </NavigationContainer>
    </UserContextProvider>
  );
}