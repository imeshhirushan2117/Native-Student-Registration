import React from 'react'
import { Button } from 'react-native-paper';

export default function MyButton({text,onPress,buttonColor ,textColor,style,rippleColor,title}) {
  return (
    <Button mode="contained-tonal" 
    onPress={onPress} 
    buttonColor={buttonColor} 
    textColor={textColor}
    style={style}
    rippleColor={rippleColor}
    title = {title}
    >
    {text}
  </Button>
  )
}