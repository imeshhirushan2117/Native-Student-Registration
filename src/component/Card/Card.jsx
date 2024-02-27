import * as React from 'react';
import { StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper';
import MyButton from '../../common/Button/Button'
import DialogBox from '../DialogBox/DialogBox';
import { PaperProvider } from 'react-native-paper'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';


export default function CardComponent({ onPressUpdate, onPressDeleted, name, age, address, contact }) {

    const [visible, setVisible] = React.useState(false);

    return (
        <View style={{ padding: 20, flex: 1 }}>
            <Card style={{ padding: 15, backgroundColor: '#16a085' }}>

                <View>
                    <Text style={{ fontWeight: 'bold', color: '#0a3d62', marginBottom: 20, textAlign: 'center' }} variant="headlineSmall">Student Card !</Text>
                </View>

                <View>
                    <Text style={styles.txt} variant="bodyLarge">Name : {name}</Text>
                    <Text style={styles.txt} variant="bodyLarge">Age : {age}</Text>
                    <Text style={styles.txt} variant="bodyLarge">Address : {address}</Text>
                    <Text style={styles.txt} variant="bodyLarge">Contact : {contact}</Text>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', gap:20}}>
                    <MyButton
                        text={"Update"}
                        buttonColor={'#34495e'}
                        textColor={'white'}
                        rippleColor={"#BBC2C9"}
                        onPress={onPressUpdate}
                        style={styles.btn}
                    />

                    <AlertNotificationRoot>
                        <MyButton
                            text={"Deleted"}
                            buttonColor={'#c0392b'}
                            textColor={'white'}
                            rippleColor={"#D57B71"}
                            onPress={onPressDeleted}
                            style={{borderRadius: 8,width: "100%"}}
                        />

                    </AlertNotificationRoot>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 8,
        width: "48%"
    },

    txt: {
        fontWeight: '900',
        paddingBottom: 5,
        color: 'black'
    },
})