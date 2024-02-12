import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Card } from 'react-native-paper';
import KeyboardInput from '../../common/KeyboardInput/KeyboardInput'
import MyCard from '../../common/Card/Card';


export default function Login() {
  return (
  <View style={styles.view}>
     <MyCard />
  </View>
  )
}

const styles = StyleSheet.create({
  view:{
    padding:20,
  }
})