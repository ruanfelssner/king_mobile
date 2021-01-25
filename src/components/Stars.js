import React from 'react'
import styled from 'styled-components/native'
import StarHalf from '../../assets/star-half-alt-solid.svg'
import StarFull from '../../assets/star-solid.svg'
import StarEmpty from '../../assets/star-regular.svg'

const StarArea = styled.View`
    flex-direction: row;
    position:absolute;
    top:25px;
    right:25px;
`;
const StarText = styled.Text`
    font-size:12px;
    font-weight:bold;
    color:#737373;
    margin-left:5px;
`;
// FF9200
const StarView = styled.View``;

export default ({stars, showNumber}) => {
    let s = [0, 0, 0, 0, 0];
    // let floor = Math.floor(Stars);
    // let left = stars - floor
    // for(var i=0;i<floor;i++){
    //     s[i] = 2;
    // }
    // if(left > 0){
    //     s[i] = 1;
    // }

    return (
        <StarArea>
            {s.map((i, k)=>(
                <StarView key={k}>
                    {i === 0 && <StarEmpty width="18" height="18" fill="#FFF" />}
                    {i === 1 && <StarHalf width="18" height="18" fill="#FFF" />}
                    {i === 2 && <StarFull width="18" height="18" fill="#FFF" />}
                </StarView>
            ))}
            {showNumber && <StarText>{stars}</StarText>}
        </StarArea>
    );
}