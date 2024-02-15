import { View, Button } from 'react-native'
import React from 'react'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function Alerat() {
    return (
        <AlertNotificationRoot>
            <View>
                <Button
                    title={'toast notification'}
                    onPress={() =>
                        Toast.show({
                            type: ALERT_TYPE.SUCCESS,
                            title: 'Success',
                            textBody: 'Congrats! this is toast notification success',
                        })
                    }
                />
            </View>
        </AlertNotificationRoot>
    )
}