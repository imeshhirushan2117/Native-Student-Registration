import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
import KeyboardInput from '../../common/KeyboardInput/KeyboardInput';
import MyButton from '../../common/Button/Button';

export default function DialogBox() {

    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return (
        <PaperProvider>
            <View>
                <Button onPress={showDialog}>Show Dialog</Button>
             
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Update Student !</Dialog.Title>
                        <View style={{ padding: 20 }}>
                            <KeyboardInput
                                label={"Name"}
                                style={{ marginBottom: 10 }}
                            />

                            <KeyboardInput
                                label={"Age"}
                                style={{ marginBottom: 10 }}
                            />

                            <KeyboardInput
                                label={"Address"}
                                style={{ marginBottom: 10 }}
                            />

                            <KeyboardInput
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
                                onPress={()=> console.log("Update")}
                                style={styles.btn}
                            />

                            {/* <MyButton
                                text={"Cansel"}
                                buttonColor={'#c0392b'}
                                textColor={'white'}
                                rippleColor={"#EABDB8"}
                                onPress={hideDialog}
                                style={styles.btn}
                            /> */}
                        </View>
                    </Dialog>
                </Portal>
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    btn: {
        borderRadius: 8,
        marginBottom: 10
    },
})