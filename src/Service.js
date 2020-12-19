
import AsyncStorage from '@react-native-community/async-storage';
export default getToken = async () => AsyncStorage.getItem('token');