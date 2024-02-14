import { View, Image, StyleSheet, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import student_icon from '../../assets/icons/student.png'
import KeyboardInput from '../../common/KeyboardInput/KeyboardInput';
import MyButton from '../../common/Button/Button';
import { Text } from 'react-native-paper';

export default function Activity() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const save = () => {
        console.log("Save");
    }

    const update = () => {
        console.log("Update");
    }

    const deleted = () => {
        console.log("Deleted");
    }

    const clear = () => {
        console.log("Clear");
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
                    <MyButton
                        text={"Save"}
                        buttonColor={'#2980b9'}
                        textColor={'white'}
                        rippleColor={"#B7D4E7"}
                        onPress={save}
                        style={styles.btn}


                    />

                    <MyButton
                        text={"Update"}
                        buttonColor={'#16a085'}
                        textColor={'white'}
                        rippleColor={"#63BFAD"}
                        onPress={update}
                        style={styles.btn}
                    />
                </View>


                <View style={{ flex: 2, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MyButton
                        text={"Deleted"}
                        buttonColor={'#c0392b'}
                        textColor={'white'}
                        rippleColor={"#D57B71"}
                        onPress={deleted}
                        style={styles.btn}
                    />

                    <MyButton
                        text={"Clear"}
                        buttonColor={'#f39c12'}
                        textColor={'white'}
                        rippleColor={"#F7BD61"}
                        onPress={clear}
                        style={styles.btn}
                    />
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 8,
        width: "48%"

    }
})