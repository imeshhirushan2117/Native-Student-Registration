import React from 'react'
import { useState, useEffect } from 'react'
import Login from './src/pages/Login/Login'
import Register from './src/pages/Register/Register'
import { NavigationContainer, View, Text } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './src/component/Drawer/DrawerNav'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Load from './src/Load';
const Stack = createStackNavigator();

export default function App() {

  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const token = await AsyncStorage.getItem('my-key');
      if (token !== null) {
        setLogin(true);
        console.log("login true");
      } else {
        console.log("login false");
        setLogin(false);
      }
      setLoading(true)
    } catch (error) {
      console.error('Token Error :', error);
      setLogin(false);
    }
  };





  return (
    <>
      {!loading ?
        <Load />
        :
        <>
          <NavigationContainer>
            <Stack.Navigator>
              {!login && <Stack.Screen name="Login" component={Login} />}
              <Stack.Screen name="DrawerNav" component={DrawerNav} />
              <Stack.Screen name="Register" component={Register} />
              {login && <Stack.Screen name="Login" component={Login} />}
            </Stack.Navigator>
          </NavigationContainer>
        </>
      }

    </>
  )
}