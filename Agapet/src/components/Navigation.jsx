import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Ventanas
import {BarNavigation} from '../components/BarNavigation'
import { Login } from '../screens/auth/Login';
import { Register } from '../screens/auth/Register';
import { AuthContext } from '../context/AuthContext'


const Stack = createNativeStackNavigator();


export const Navigation = () => {

  const { userInfo } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {
        userInfo.access ?
        (
          <>
            <BarNavigation/>
          </>

        ):
        (
          <Stack.Navigator>
            <>
              <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
              <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
            </>
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  );
};
