import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import KeyboardInput from '../../common/KeyboardInput/KeyboardInput';
import MyButton from '../../common/Button/Button';
import { useState,useEffect } from 'react';
import instance from '../../services/Axious';


export default function DialogBox({ visible = false, hideDialog ,object}) {

    console.log(object.age);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    useEffect(()=> {
        setName(object?.name)
        setAge(object?.age)
        setAddress(object?.address)
        setContact(object?.contact)
    },[object])

    const updateData = () => {
        console.log("diolog id : " + object.id);
        
         console.log(name,age,address,contact);
    }

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Update Student !</Dialog.Title>
                <View style={{ padding: 20 }}>
                    <KeyboardInput
                        value={name}
                        onChangeText={(value) => setName(value)}
                        label={"Name"}
                        style={{ marginBottom: 10 }}
                    />

                    <KeyboardInput
                         value={age ? age.toString() : ""} 
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



                <View style={{ padding: 20 }}>
                    <MyButton
                        text={"Update"}
                        buttonColor={'#16a085'}
                        textColor={'white'}
                        rippleColor={"#B1DFD6"}
                        onPress={updateData}
                        style={styles.btn}
                    />

                    <MyButton
                        text={"Cansel"}
                        buttonColor={'#c0392b'}
                        textColor={'white'}
                        rippleColor={"#EABDB8"}
                        onPress={hideDialog}
                        style={styles.btn}
                    />
                </View>
            </Dialog>
        </Portal>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderRadius: 8,
        marginBottom: 10
    },
})