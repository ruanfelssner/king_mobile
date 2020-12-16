import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import KingIcon  from '../../../assets/Simbolo.svg'
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export default () => {

  const navigation = useNavigation();

  useEffect(() => {

    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token){
        // validar o token
      } else {
        navigation.navigate('SignIn');
      }
    }
    checkToken();
  }, []);

  return (
      <Container>
        <KingIcon width="100%" height="100" />
        <LoadingIcon size="large" color="#FFFFFF" />
      </Container>
    );
}