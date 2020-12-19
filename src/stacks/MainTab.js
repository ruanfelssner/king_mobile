import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../views/Home'
import Search from '../views/Search'
import Appointsments from '../views/Appointsments'
import Favorites from '../views/Favorites'
import Profile from '../views/Profile'

import CustomTabBar from '../components/CustomTabBar'

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Appointsments" component={Appointsments} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);