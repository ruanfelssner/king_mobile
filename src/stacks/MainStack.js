import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../views/Preload'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Home from '../views/Home'

const Stack = createStackNavigator();
export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);