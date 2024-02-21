import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../component/Card/Card'
import instance from '../../services/Axious'
import DialogBox from '../../component/DialogBox/DialogBox'
import { PaperProvider } from 'react-native-paper'
export default function ReadData() {

    const [data, setData] = useState([])

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
        console.log("Update")
    }

    const deleted = () => {
        console.log("Deleted")
    }

    return (
        <>
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
        </>
    )
}