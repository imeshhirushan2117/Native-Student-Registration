import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import user_icon from '../../assets/icons/user.png';
import KeyboardInput from '../KeyboardInput/KeyboardInput'
import { Text } from 'react-native-paper';
import MyButton from '../Button/Button';



export default function MyCard() {

    const logIn = () => {
        console.log("LogIn");
    }

    return (
        <>
            <View>
                <Text style={styles.text} variant="displaySmall">Student Registation System !</Text>
            </View>
            <View style={styles.view}>
                <Image style={styles.img} source={user_icon} />
            </View>

            <View style={styles.input} >
                <KeyboardInput style={{ marginBottom: 20 }} label={"Email"} />
                <KeyboardInput label={"Password"} />
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
                    style={styles.myBtn }
                    text={"Regiseter"}
                    textColor={"black"}
                    buttonColor={"#16a085"}
                    rippleColor={"white"}
                    onPress={logIn}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        position: 'relative',
        padding: 20,
    },

    img: {
       marginTop:10,
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
      marginBottom:15,
      borderRadius: 10,
    },
})
