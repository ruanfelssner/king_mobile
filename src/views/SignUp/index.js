import React, {useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageText,
  SignMessageTextBold,
} from './styles';
import { userContext } from '../../contexts/UserContext'
import Api from '../../Api';
import KingIcon from '../../../assets/Simbolo.svg';
import UserIcon from '../../../assets/UserIcon.svg';
import EmailIcon from '../../../assets/EmailIcon.svg';
import PasswordIcon from '../../../assets/PasswordIcon.svg';
import SignInput from '../../components/SignInput';

export default () => {
  const [ nomeField, setNomeField] = useState('');
  const [ emailField, setEmailField] = useState('');
  const [ passwordField, setPasswordField] = useState('');
  const navigation = useNavigation();
  const { dispatch: userDispatch} = useContext(UserContext)
  const handleSignClick = async() => {
    if(nomeField != '' && emailField != '' && passwordField != ''){
      let json = await Api.signUp(nomeField, emailField, passwordField);
      if(json.token){
        await AsyncStorage.setItem('token', json.token)
        userDispatch({ type: 'setNome', payload: { nome: json.usuario.name } })
        navigation.reset({ routes:[{name:'Home'}] });
      }else{
        alert("Erro ao cadastrar!");
      }
    }else{
      alert("Preencha todos os campos");
    }
  }
  const handleMessageClick = () => {
    navigation.reset({
      routes:[{name:'SignIn'}]
    });
  }
  return (
    <Container>
      <KingIcon width="100%" height="100" />

      <InputArea>
        <SignInput IconSvg={UserIcon} Placeholder="Digite seu nome" value={nomeField} onChangeText={t => setNomeField(t)}  />
        <SignInput IconSvg={EmailIcon} Placeholder="Digite seu e-mail" value={emailField} onChangeText={t => setEmailField(t)}  />
        <SignInput IconSvg={PasswordIcon} Placeholder="Digite sua senha" value={passwordField} onChangeText={t => setPasswordField(t)} password={true}  />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageClick}>
        <SignMessageText>Já possúí uma conta?</SignMessageText>
        <SignMessageTextBold>Entrar</SignMessageTextBold>
      </SignMessageButton>
    </Container>
  );
};
