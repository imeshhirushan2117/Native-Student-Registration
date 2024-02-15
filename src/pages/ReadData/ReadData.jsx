import { View, Text } from 'react-native'
import React, { useEffect ,useState } from 'react'
import Card from '../../component/Card/Card'
import instance from '../../services/Axious'

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

            });
    }

    const update = () =>{
        console.log("Update")
    }

    const deleted = () =>{
        console.log("Deleted")
    }

    return (
        <Card name={"Imesh"} 
        age={"23"} 
        address={"Panadura"} 
        contact={"0779201232"} 
        onPressDeleted={deleted} 
        onPressUpdate={update}/>
    )
}