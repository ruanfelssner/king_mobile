import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageText,
  SignMessageTextBold,
} from './styles';
import Api from '../../Api';
import KingIcon from '../../../assets/Simbolo.svg';
import EmailIcon from '../../../assets/EmailIcon.svg';
import PasswordIcon from '../../../assets/PasswordIcon.svg';
import SignInput from '../../components/SignInput';

export default () => {
  const [ emailField, setEmailField] = useState('contato@king.com.br');
  const [ passwordField, setPasswordField] = useState('123456789');
  const navigation = useNavigation();
  const handleSignClick = async () => {
    if(emailField != '' && passwordField != ''){
      let json = await Api.signIn(emailField, passwordField);
      if(json.token){
        await AsyncStorage.setItem('token', json.token)
        // userDispatch({ type: 'setNome', payload: { nome: json.usuario.name } })
        navigation.reset({ routes:[{name:'Home'}] });
      }else{
        alert("Email ou senha invalidos!");
      }
    }else{
      alert("Preencha todos os campos");
    }
  }
  const handleMessageClick = () => { navigation.reset({ routes:[{name:'SignUp'}] }); }
  return (
    <Container>

      <KingIcon width="100%" height="100" />

      <InputArea>
        <SignInput IconSvg={EmailIcon} Placeholder="Digite seu e-mail" value={emailField} onChangeText={t => setEmailField(t)}  />
        <SignInput IconSvg={PasswordIcon} Placeholder="Digite sua senha" value={passwordField} onChangeText={t => setPasswordField(t)} password={true}  />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageClick}>
        <SignMessageText>Ainda não possui conta?</SignMessageText>
        <SignMessageTextBold>Cadastre-se</SignMessageTextBold>
      </SignMessageButton>

    </Container>
  );
};
