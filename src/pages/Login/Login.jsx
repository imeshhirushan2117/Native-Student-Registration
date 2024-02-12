import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import user_icon from '../../assets/icons/user.png';
import KeyboardInput from '../../common/KeyboardInput/KeyboardInput';
import { Text } from 'react-native-paper';
import MyButton from '../../common/Button/Button';


export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    console.log(password);
  }

  const register = () => {
    console.log("Register");
    console.log(email);
    console.log(password);
  }

  return (
    <View style={styles.mainView}>
      <View>
        <Text style={styles.text} variant="headlineSmall">User Login!</Text>
      </View>
      <View style={styles.view}>
        <Image style={styles.img} source={user_icon} />
      </View>

      <View style={styles.input} >
        <KeyboardInput 
        value={email} 
        onChangeText={(value) => setEmail(value) } 
        style={{ marginBottom: 20 }} 
        label={"Email"} 
        />

        <KeyboardInput 
        value={password} 
        onChangeText={(value) => setPassword(value) } 
        label={"Password"} 
        secureTextEntry
        />

      </View>

      <View style={styles.btn}>
        <MyButton
          style={styles.myBtn}
          text={"LogIn"}
          textColor={"black"}
          buttonColor={"#1F87C7"}
          rippleColor={"white"}
          onPress={logIn}

        />


        <MyButton
          style={styles.myBtn}
          text={"Regiseter"}
          textColor={"black"}
          buttonColor={"#16a085"}
          rippleColor={"white"}
          onPress={register}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  mainView: {
    padding: 20,
  },

  view: {
    alignItems: 'center',
    position: 'relative',
    padding: 20,
  },

  img: {
    marginTop: 10,
  },

  input: {

  },
  text: {
    color: "#2c3e50",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    marginTop: 30,
  },

  myBtn: {
    marginBottom: 15,
    borderRadius: 10,
  },
})
