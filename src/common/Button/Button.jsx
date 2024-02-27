import React from 'react'
import { Button } from 'react-native-paper';

export default function MyButton({text,onPress,buttonColor ,textColor,style,rippleColor}) {
  return (
    <Button mode="contained-tonal" 
    onPress={onPress} 
    buttonColor={buttonColor} 
    textColor={textColor}
    style={style}
    rippleColor={rippleColor}
    title={'dialog box'}
    >
    {text}
  </Button>
  )
}