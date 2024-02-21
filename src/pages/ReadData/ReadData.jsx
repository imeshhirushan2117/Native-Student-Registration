import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../component/Card/Card'
import instance from '../../services/Axious'
import DialogBox from '../../component/DialogBox/DialogBox'
import { Button, PaperProvider } from 'react-native-paper'
export default function ReadData() {

    const [data, setData] = useState([])
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        instance({
            method: 'get',
            url: '/student/getAll',
        })
            .then(function (response) {
                // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
                console.log(response.data);
                const array = [];

                response.data.forEach(val => {
                    array.push({
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


    const update = () => {
        setVisible(true)
    }

    const deleted = () => {
        console.log("Deleted")
    }

    return (
        <PaperProvider>
        <DialogBox visible={visible} hideDialog={()=>{setVisible(false)}}/>
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Card
                        name={item.name}
                        age={item.age}
                        address={item.address}
                        contact={item.contact}
                        onPressDeleted={deleted}
                        onPressUpdate={update}
                    />
                )}
            />    
        </View>
            
        </PaperProvider>

    )
}