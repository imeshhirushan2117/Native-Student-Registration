import { View, Image, StyleSheet, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import student_icon from '../../assets/icons/student.png'
import KeyboardInput from '../../common/KeyboardInput/KeyboardInput';
import MyButton from '../../common/Button/Button';
import { Text } from 'react-native-paper';
import instance from '../../services/Axious';
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function Activity({ navigation }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const save = () => {
        instance.post('/student/save', {
            student_name: name,
            student_age: age,
            student_address: address,
            student_contact: contact
        })
            .then(function (response) {
                // console.log(response);
                // console.log("Save Seccuss !");
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'Student Save Seccess!',
                    button: 'Ok',
                    autoClose:1000000,
                })

                clear()
            })
            .catch(function (error) {
                console.log(error);
                // console.log("Save UnSeccuss !");
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Warning',
                    textBody: 'Student Save Un Seccess!',
                    button: 'Try Again...',
                    autoClose:1000000,
                })
            });
    }

    // const read = () => {
    //     navigation.navigate('ReadData')
    // }

    const clear = () => {
        setName("")
        setAge("")
        setAddress("")
        setContact("")
    }


    return (
        <View style={{ padding: 20, flex: 1 }}>
            <ScrollView>
                <Text style={{ textAlign: 'center' }} variant="titleLarge">Register Student!</Text>
                <View style={{ alignItems: 'center', flex: 1, marginTop: 100 }}>
                    <Image source={student_icon} />
                </View>
                <View style={{ flex: 4, marginTop: 50 }}>
                    <KeyboardInput
                        value={name}
                        onChangeText={(value) => setName(value)}
                        label={"Name"}
                        style={{ marginBottom: 10 }}
                    />

                    <KeyboardInput
                        value={age}
                        onChangeText={(value) => setAge(value)}
                        label={"Age"}
                        style={{ marginBottom: 10 }}
                    />


                    <KeyboardInput
                        value={address}
                        onChangeText={(value) => setAddress(value)}
                        label={"Address"}
                        style={{ marginBottom: 10 }}
                    />


                    <KeyboardInput
                        value={contact}
                        onChangeText={(value) => setContact(value)}
                        label={"Contact"}
                        style={{ marginBottom: 10 }}
                    />
                </View>

                <View style={{ flex: 2, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AlertNotificationRoot>
                        <MyButton
                            text={"Save"}
                            buttonColor={'#2980b9'}
                            textColor={'white'}
                            rippleColor={"#B7D4E7"}
                            onPress={save}
                            style={{borderRadius: 8,width: "90%"}}
                        />
                    </AlertNotificationRoot>

                    <MyButton
                        text={"Clear"}
                        buttonColor={'#f39c12'}
                        textColor={'white'}
                        rippleColor={"#F7BD61"}
                        onPress={clear}
                        style={styles.btn}
                    />


                </View>

                <View style={{ flex: 2, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>

                    {/* <MyButton
                        text={"Read"}
                        buttonColor={'#16a085'}
                        textColor={'white'}
                        rippleColor={"#B1DFD6"}
                        onPress={read}
                        style={styles.btn1} 
                /> */}
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 8,
        width: "48%"

    },

    btn1: {
        borderRadius: 8,
        width: "100%"
    },
})