import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

import * as SQLite from "expo-sqlite"
import * as Device from 'expo-device';
import { auth, database } from '../../firebase';
import { addDoc, collection, getDocs, query } from "firebase/firestore";

const Agree = ({navigation, route}: any) => {
    const addData = () => {  
          addDoc(collection(database, "posts"), {
            name: route?.params?.name,
            description: route?.params?.description,
            img: route?.params?.img,
            category1: route?.params?.category1,
            category2: route?.params?.category2,
            category3: route?.params?.category3,
            user: Device.osBuildId
          })
        .catch((err: any) => Alert.alert("Login error", err.message));

      
      // console.log("sucesful")
      navigation.navigate("Main")
    }

  return (
    <View style={{paddingHorizontal: 15, marginTop: 100}}>
      <View style={{alignItems: "center"}}>
        <TouchableOpacity style={{width: "100%", backgroundColor: "#7cb1fb", alignItems: "center", paddingVertical: 10, marginVertical: 25}} onPress={addData}>
          <Text style={{fontSize: 20, color: "#fff"}}>Додати</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: "center"}}>
        <TouchableOpacity style={{width: "100%", backgroundColor: "#7cb1fb", alignItems: "center", paddingVertical: 10, marginVertical: 25}} onPress={() => navigation.navigate("AddPost")}>
          <Text style={{fontSize: 20, color: "#fff"}}>Скасувати</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Agree