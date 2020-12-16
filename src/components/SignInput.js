import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width:100%;
    height:60px;
    background-color:#FFF;    
    border: 1px solid #ced4da;
    flex-direction: row;
    border-radius:20px;
    padding-left:15px;
    align-items: center;
    margin-bottom:20px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size:16px;
    color:#62228a;
    margin-left:10px;
`;

export default ({IconSvg, Placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill={"#000"} value={value} onChangeText={onChangeText} />
            <Input placeholder={Placeholder} value={value} onChangeText={onChangeText} secureTextEntry={password} />
        </InputArea>
    );
}