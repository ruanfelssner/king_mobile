import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background: #62228a;
    flex: 1;
    justify-content:center;
    align-items:center;
`;

export const InputArea = styled.View`
    padding: 40px;
    width:100%;
    justify-content: center;
    align-items:center;
`;
export const CustomButton = styled.TouchableOpacity`
    height: 50px;
    width:40%;
    background-color:#e9ecef;
    border: 1px solid #ced4da;
    border-radius:30px;
    justify-content: center;
    align-items:center;
`;
export const CustomButtonText = styled.Text`
    font-size:16px;
    color:#62228a;
    font-weight:bold;
    text-transform:uppercase;
`;
export const SignMessageButton = styled.TouchableOpacity`
    justify-content:center;
    margin-top:50px;
    margin-bottom:20px;
`;
export const SignMessageText = styled.Text`
    font-size:16px;
    color:#FFF;
`;
export const SignMessageTextBold = styled.Text`
    font-size:16px;
    color:#FFF;
    font-weight:bold;
    margin-left:5px;
    text-align:center;
`;