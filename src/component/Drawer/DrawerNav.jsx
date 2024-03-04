import React from 'react'
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Activity from '../../pages/Activity/Activity';
import ReadData from '../../pages/ReadData/ReadData';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Drawer = createDrawerNavigator();

export default function DrawerNav({ navigation }) {

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('my-key');
      console.log('Token removed successfully.');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error removing token:', error);
    }
  };
  
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={logout} />
          </DrawerContentScrollView>
        )
      }}
    >
      <Drawer.Screen name="Activity" component={Activity} />
      <Drawer.Screen name="ReadData" component={ReadData} />
    </Drawer.Navigator>
  )
}