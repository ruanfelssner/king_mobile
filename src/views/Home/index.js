import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import Api from '../../Api'

import { Container, Scrooler, HeaderArea, HeaderTitle, SearchButton, LocationArea, LocationInput, LocationFinder, LoadingIcon } from './styles';
import SearchIcon from '../../../assets/search-solid.svg'
import MyLocationIcon from '../../../assets/map-marker-alt-solid.svg'

export default () => {
  const navigation = useNavigation();
  const [locationText, setLocationText] =  useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.OS === 'ios' ?
      PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      :
      PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );
    if(result == 'granted'){
      setLoading(true);
      setLocationText('');
      setList([]);
      Geolocation.getCurrentPosition((info) => {
        setCoords(info.coords);
        getRifas();
      });
    }
  }
  const getRifas = async() => {
    setList([]);
    let res = await Api.getRifas();
  }

  useEffect(() => {
    getRifas();
  }, [])

  return (
    <Container>
        <Scrooler>
          <HeaderArea>
            <HeaderTitle numberOfLines={2}>Encontre a sua rifa favorita!</HeaderTitle>
            <SearchButton onPress={()=>navigation.navigate('Search')}>
              <SearchIcon width="26" height="26" fill="#62228a" />
            </SearchButton>
          </HeaderArea>
          <LocationArea>
            <LocationInput placeholder="Onde você está?" placeholderTextColor="#FFF" value={locationText} onChangeText={t=>setLocationText(t)} />
            <LocationFinder onPress={handleLocationFinder}>
              <MyLocationIcon width="24" height="24" fill="#FFF" />
            </LocationFinder>
          </LocationArea>
          {loading && 
          <LoadingIcon  size="large" color="#FFF" />
          }


        </Scrooler>
    </Container>
  );
};
