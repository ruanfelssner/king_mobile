import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from '../views/Preload'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import MainTab from '../stacks/MainTab'

const Stack = createStackNavigator();
export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
);