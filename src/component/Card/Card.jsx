import * as React from 'react';
import { StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper';
import MyButton from '../../common/Button/Button'

export default function CardComponent({update,deleted , name, age, address, contact }) {

    return (
        <View style={{ padding: 20, flex: 1 }}>
            <Card style={{ padding: 10 }}>

                <Card.Content>
                    <Text style={{ marginBottom: 40 }} variant="headlineSmall">Student Card</Text>
                </Card.Content>

                <View>
                    <Text style={styles.txt} variant="bodyLarge">Name : {name}</Text>
                    <Text style={styles.txt} variant="bodyLarge">Age : {age}</Text>
                    <Text style={styles.txt} variant="bodyLarge">Address : {address}</Text>
                    <Text style={styles.txt} variant="bodyLarge">Contact : {contact}</Text>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MyButton
                        text={"Update"}
                        buttonColor={'#16a085'}
                        textColor={'white'}
                        rippleColor={"#63BFAD"}
                        onPress={update}
                        style={styles.btn}
                    />


                    <MyButton
                        text={"Deleted"}
                        buttonColor={'#c0392b'}
                        textColor={'white'}
                        rippleColor={"#D57B71"}
                        onPress={deleted}
                        style={styles.btn}
                    />
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
        paddingBottom: 5
    },
})