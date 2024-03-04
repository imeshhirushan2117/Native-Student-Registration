import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../component/Card/Card'
import instance from '../../services/Axious'
import DialogBox from '../../component/DialogBox/DialogBox'
import { Button, PaperProvider } from 'react-native-paper'
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default function ReadData() {

    const [data, setData] = useState([])
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState('');
    const [object,setObject] = useState('')
    
    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        instance({
            method: 'get',
            url: '/student/getAll',
        })
            .then(function (response) {
                // console.log(response.data);
                const array = [];

                response.data.forEach(val => {
                    array.push({
                        id: val.id,
                        name: val.student_name,
                        age: val.student_age,
                        address: val.student_address,
                        contact: val.student_contact
                    })
                })

                setData(array)

            }).catch(err => {
                console.log(err);
            })
    }

    const update = (val) => {
        setObject(val)
        setVisible(true)
    }

    const changeData = () => {
        getData()
        setVisible(false)
    }

    const deleted = (id) => {
        console.log(id);
        instance.delete('/student/delete/'+ id)
        .then(response => {
            // console.log(response)
            getData()
        //   console.log('Deleted Successes');
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Student Deleted Seccess!',
            button: 'Ok',
            autoClose:1000000,
        })

        })
        .catch(error => {
          console.error(error);
        //   console.log('Deleted Un Successes');
            Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Warning',
            textBody: 'Student Deleted Un Seccess!',
            button: 'Try Again...',
            autoClose:1000000,
        })

        });

        console.log("deletedData");
    }
    return (
        <PaperProvider>
        <DialogBox 
        id={id}
        object={object}
        visible={visible} 
        hideDialog={()=>{setVisible(false)}} 
        changeData={changeData}
        />
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card
                        name={item.name}
                        age={item.age}
                        address={item.address}
                        contact={item.contact}
                        onPressDeleted={() => deleted(item.id)}
                        onPressUpdate={() => update(item)}
                    />
                )}
            />    
        </View>
            
        </PaperProvider>

    )
}