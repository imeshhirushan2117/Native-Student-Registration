import { View, StyleSheet,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import user_icon from '../../assets/icons/user.png';
import KeyboardInput from '../../common/KeyboardInput/KeyboardInput';
import { Text } from 'react-native-paper';
import MyButton from '../../common/Button/Button';
import instance from '../../services/Axious';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    instance.post('/login', {
      email: email,
      password: password,
  })
      .then(function  (response) {
        storeData(response)
          console.log("LogIn Seccess");
          
      })
      .catch(function (error) {
          console.log(error);
          // console.log("LogIn Un Seccess");
      });
  }

  const storeData = async (response) => {
    try {
      await AsyncStorage.setItem('my-key', response.data.token);
      // console.log(response.data.token);
      navigation.navigate('Activity')
    } catch (e) {
    }
  };
  
  const register = () => {
    navigation.navigate('Register')
  }

  return (
<ScrollView>
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
</ScrollView>

   
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
