import { useNavigation } from '@react-navigation/native'
const navigation = useNavigation();
export const handleClick = (valor) => {
    navigation.reset({
      routes:[{name:valor}]
    });
  }