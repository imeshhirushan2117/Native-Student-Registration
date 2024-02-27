import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import register_icon from '../../assets/icons/register.png';
import KeyboardInput from '../../common/KeyboardInput/KeyboardInput';
import { Text } from 'react-native-paper';
import MyButton from '../../common/Button/Button';
import instance from '../../services/Axious';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function Register({ navigation }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const register = () => {
        instance.post('/register', {
            name: name,
            email: email,
            password: password,
        })
            .then(function (response) {
                console.log(response.data);
                // console.log("Register Seccess!");
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'User Register Seccess!',
                    button: 'close',
                })
                
                navigation.navigate('Login')
                clear()
            })
            .catch(function (error) {
                console.log(error);
                // console.log("Register Un Seccess!");
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Warning',
                    textBody: 'User Register Un Seccess! Try Again...',
                    button: 'close',
                })
            });
    }

    const clear = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    // const back = () => {
    //   console.log("back"); 
    // }

    return (
        <ScrollView>
            <View style={styles.mainView}>
                <View>
                    <Text style={styles.text} variant="headlineSmall">User Registation!</Text>
                </View>
                <View style={styles.view}>
                    <Image style={styles.img} source={register_icon} />
                </View>

                <View style={styles.input} >

                    <KeyboardInput
                        value={name}
                        onChangeText={(value) => setName(value)}
                        style={{ marginBottom: 20 }}
                        label={"User Name"}
                    />
                    <KeyboardInput
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        style={{ marginBottom: 20 }}
                        label={"Email"}
                    />

                    <KeyboardInput
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        label={"Password"}
                        secureTextEntry
                    />

                </View>

                <View style={styles.btn}>
                    <MyButton
                        style={styles.myBtn}
                        text={"Register"}
                        textColor={"black"}
                        buttonColor={"#1F87C7"}
                        rippleColor={"white"}
                        onPress={register}

                    />

                    <AlertNotificationRoot>
                        <MyButton
                            style={styles.myBtn}
                            text={"Clear"}
                            textColor={"black"}
                            buttonColor={"#f39c12"}
                            rippleColor={"white"}
                            onPress={clear}
                            title={'dialog box'}
                        />
                    </AlertNotificationRoot>
                    {/* <MyButton
                    style={styles.myBtn}
                    text={"Back"}
                    textColor={"white"}
                    buttonColor={"#2c3e50"}
                    rippleColor={"white"}
                    onPress={back}
                /> */}

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
