import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

import * as SQLite from "expo-sqlite"
import * as Device from 'expo-device';
import { auth, database } from '../../firebase';
import { addDoc, collection, getDocs, query, updateDoc, doc } from "firebase/firestore";

const UpdateAgree = ({navigation, route}: any) => {
    const readData = async () => {
        // const q = query(collection(database, "posts"), where("user", "==", Device.osBuildId));
        const collectionRef = doc(database, "posts", route?.params?.id);
        
        await updateDoc(collectionRef, {
            name: route?.params?.name,
            description: route?.params?.description,
            img: route?.params?.img,
            category1: route?.params?.category1,
            category2: route?.params?.category2,
            category3: route?.params?.category3,
        })

        navigation.navigate("Load")
    };

  return (
    <View style={{paddingHorizontal: 15, marginTop: 100}}>
      <View style={{alignItems: "center"}}>
        <TouchableOpacity style={{width: "100%", backgroundColor: "#01723f", alignItems: "center", paddingVertical: 10, marginVertical: 10}} onPress={readData}>
          <Text style={{fontSize: 20, color: "#fff"}}>Оновити</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: "center"}}>
        <TouchableOpacity style={{width: "100%", backgroundColor: "#01723f", alignItems: "center", paddingVertical: 10, marginVertical: 10}} onPress={() => navigation.navigate("Main")}>
          <Text style={{fontSize: 20, color: "#fff"}}>Скасувати</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UpdateAgree