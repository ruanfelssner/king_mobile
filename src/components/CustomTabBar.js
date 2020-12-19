import React, { useContext} from 'react';
import styled from 'styled-components/native'
import { UserContext } from '../contexts/UserContext'
import HomeIcon from '../../assets/warehouse-solid.svg'
import SearchIcon from '../../assets/search-solid.svg'
import AppointsmentsIcon from '../../assets/shopping-bag-solid.svg'
import FavoritesIcon from '../../assets/heart-solid.svg'
import ProfileIcon from '../../assets/bars-solid.svg'

const TabArea = styled.View`
    height:60px;
    background-color:#62228a;
    flex-direction:row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius:35px;
    border: 3px solid #62228a;
    margin-top:-15px;    
`;

const AvatarIcon = styled.Image`
    width: 24px;
    height:24px;
    border-radius:12px;
`;

export default ( { state, navigation }) => {

    const { state:user } = useContext(UserContext);
    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }
    return (
        <TabArea>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon style={{opacity:state.index===1? 1 : 0.5}} width="24" height="24" />
            </TabItem>
            <TabItem onPress={() => goTo('Appointsments')}>
                <AppointsmentsIcon style={{opacity:state.index===2? 1 : 0.5}} width="24" height="24" />
            </TabItem>            
            <TabItemCenter onPress={() => goTo('Home')} style={{backgroundColor: state.index===0? '#FFF' : '#CCC'}}>
                <HomeIcon width="32" height="32" fill="#62228a"  />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoritesIcon style={{opacity:state.index===3? 1 : 0.5}} width="24" height="24" />
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                {user.avatar != '' ? 
                <AvatarIcon source={{url: user.avatar}} />    
                :
                <ProfileIcon style={{opacity:state.index===4? 1 : 0.5}} width="24" height="24" />
            }                
            </TabItem>
        </TabArea>
    );
}