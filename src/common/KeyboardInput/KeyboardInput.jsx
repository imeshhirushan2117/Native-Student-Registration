import React from 'react'
import { TextInput } from 'react-native-paper';

export default function KeyboardInput({value,label,onChangeText,style,secureTextEntry}) {

  return (
    <TextInput
    mode='outlined'
    label={label}
    value={value}
    onChangeText={onChangeText}
    cursorColor='blue'
    activeOutlineColor="#0B6FB8"
    outlineColor="#2c3e50"
    textColor="#2c3e50"
    secureTextEntry = {secureTextEntry } 
    style={style}
  />
  )
}