import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background: #8c42c1;
    flex: 1;
    justify-content:center;
    align-items:center;
`;

export const Scrooler = styled.ScrollView`
    flex: 1;
    padding:20px;
    width:100%;
`;

export const HeaderArea = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 24px;
    font-weight:bold;
    color:#FFF;
    width:250px;
`;

export const SearchButton = styled.TouchableOpacity`
    width:26px;
    height:26px;
`;

export const LocationArea = styled.View`
    background-color: #62228a;
    height:60px;
    border-radius: 30px;
    flex-direction:row;
    align-items: center;
    padding-left: 20px;
    padding-right:20px;
    margin-top:30px;
`;

export const LocationInput = styled.TextInput`
    flex:1;
    font-size:16px;
    color:#FFF;
`;

export const LocationFinder = styled.TouchableOpacity`
    width:24px;
    height:24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top:50px;
`;
