import React from 'react'
import styled from 'styled-components/native'
import Stars from '../components/Stars'

const Area = styled.TouchableOpacity`
    background:#FFF;
    margin-bottom:20px;
    border-radius:20px;
    padding:15px;
    flex-direction: column;
`;
const Avatar = styled.Image`
    width:100%;
    height:200px;
    margin-bottom:10px;
`;
const InfoArea = styled.View`
    flex-direction: row;
    width:100%;
`;
const UserName = styled.Text`
    color:#62228a;
    font-weight:bold;
    text-align:center;
    width:100%;
    margin-bottom:10px;
`;
const InfoDescricao = styled.View`
    flex-direction:row;
    width:100%;
    margin-bottom:10px;
    justify-content:center;
`;
const Tags = styled.Text`
    padding:5px;
    background:#7a7e87;
    color:#FFF;
    margin-right:5px;
    border-radius:10px;
`;
const SeeProfileButton = styled.View`
    background:#62228a;
    border-radius:20px;
    padding:7px;
`;
const SeeProfileButtonText = styled.Text`
    text-align:center;
    color:#FFF;
    font-weight:bold;
`;

export default ({data}) => {
    return (
        <Area>
            <Avatar source={{uri: data.avatar}} />
            {/* <Stars stars={data.stars} showNumber={true} /> */}
            <InfoArea>
                <UserName>{data.name}</UserName>
            </InfoArea>
            <InfoDescricao>
                <Tags>{data.qtdCotasDisponiveis}/{data.qtdCotas}</Tags>
                <Tags>{data.modelo}</Tags>
                <Tags>{data.anoModelo}</Tags>
            </InfoDescricao>
                <SeeProfileButton>
                    <SeeProfileButtonText>Comprar - R${data.valorCotas},00</SeeProfileButtonText>
                </SeeProfileButton>
        </Area>
    );
}