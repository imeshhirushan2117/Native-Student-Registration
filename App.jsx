import React from 'react'
import { useState, useEffect } from 'react'
import Login from './src/pages/Login/Login'
import Register from './src/pages/Register/Register'
import Activity from './src/pages/Activity/Activity'
import ReadData from './src/pages/ReadData/ReadData'
import Alerat from './src/common/Alerat/Alerat'
import DialogBox from './src/component/DialogBox/DialogBox'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  const [login, setLogin] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('my-key');
      if (token !== null) {
        setLogin(true)
      }
    } catch (e) {
      setLogin(false)
    }
  };


  return (
    
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //     {login ? (
  //       <>
  //         <Stack.Screen name="Activity" component={Activity} />
  //         <Stack.Screen name="ReadData" component={ReadData} />
  //       </>
  //     ) : (
  //       <>
  //        <Stack.Screen name="Login" component={Login} />
  //         <Stack.Screen name="Register" component={Register} />
  //       </>
  //     )}
  //   </Stack.Navigator>
  // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Activity" component={Activity} />
      <Stack.Screen name="ReadData" component={ReadData} />
    </Stack.Navigator>
    </NavigationContainer>


    // <Register/>
    //  <Activity/>
    //  <ReadData/>
    // <Alerat/>
    // <DialogBox/>

  )
}