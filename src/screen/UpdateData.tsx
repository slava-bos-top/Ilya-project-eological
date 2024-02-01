import { View, Text, TouchableOpacity, Button, Image, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

import categoriesItem from './component/categories'
import * as SQLite from "expo-sqlite"
import * as Device from 'expo-device';
import { auth, database } from '../../firebase';


const UpdateData = ({navigation, route}: any) => {
  const [categories, setCategories] = useState<any>(categoriesItem)
  const [image, setImage] = useState(route?.params?.img);
  const [category1, setCategory1] = useState<any>(route?.params?.category1)
  const [color1, setColor1] = useState<any>(route?.params?.category1)
  const [category2, setCategory2] = useState<any>(route?.params?.category2)
  const [color2, setColor2] = useState<any>(route?.params?.category2)
  const [category3, setCategory3] = useState<any>(route?.params?.category3)
  const [color3, setColor3] = useState<any>(route?.params?.category3)
  const [name, setName] = useState<any>(route?.params?.name);
  const [text, setText] = useState<any>(route?.params?.description);

  const db: any = SQLite.openDatabase("post.db")

  const readData = async () => {
    // const q = query(collection(database, "posts"), where("user", "==", Device.osBuildId));
    // const collectionRef = doc(database, "posts", route?.params?.id);
    
    // await updateDoc(collectionRef, {
    //     name: name,
    //     description: text,
    //     img: image,
    //     category1: category1,
    //     category2: category2,
    //     category3: category3,
    // })

    navigation.navigate("UpdateAgree", {
        name: name,
        description: text,
        img: image,
        category1: category1,
        category2: category2,
        category3: category3,
        id: route?.params?.id
    })
  };

  // function addPost() {
  //   addData()
  // }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const choiceCategories = (response: any) => {
    console.log(response)
    if (response == "1") {
      setCategory1(!category1)
      setColor1(!color1)
    }
    if (response == "2") {
      setCategory2(!category2)
      setColor2(!color2)
    }
    if (response == "3") {
      setCategory3(!category3)
      setColor3(!color3)
    }
  }

  return (
    <ScrollView style={{paddingHorizontal: 15}}>
        <View style={{alignItems: 'center', marginVertical: 25, minHeight: 200}}>
          <Button title="Завантажити фото" onPress={pickImage} color="#01723f"/>
          <View style={{borderRadius: 20, borderWidth: 2, borderColor: "#000", alignItems: 'center', marginTop: 20, width: 252, height: 252}}>
            {image && <Image source={{ uri: image }} style={{ width: 250, height: 250, borderRadius: 20 }} />}
          </View>
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontWeight: "bold", fontSize: 20}}>Категорії</Text>
        </View>
        <View style={{flexDirection: "row", height: 100, maxWidth: 300, flexWrap: "wrap"}}>
          {/* {categories.map((category: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={{marginVertical: 5, flexDirection: "row", alignItems: "center", backgroundColor: `${"category" + category.state}` == category.state ? ("#000") : ("#fff"), borderRadius: 10, padding: 5, paddingHorizontal: 12, marginHorizontal: 5, height: 35, shadowColor: "#ccc", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 10, borderWidth: 1, width: 60}}
              onPress={() => {
                choiceCategories(category.state)
              }}
            >
              {category.icon}
              <Text>{category.name}</Text>
            </TouchableOpacity>
          ))} */}
          <TouchableOpacity
              style={{marginVertical: 5, flexDirection: "row", alignItems: "center", backgroundColor: color1 == false ? ("#fff") : ("#5b9b47"), borderRadius: 10, padding: 5, paddingHorizontal: 12, marginHorizontal: 5, height: 35, shadowColor: "#ccc", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 10, borderWidth: 1, width: 130}}
              onPress={() => {
                choiceCategories("1")
              }}
          >
            <Text>Екопропозиція</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{marginVertical: 5, flexDirection: "row", alignItems: "center", backgroundColor: color2 == false ? ("#fff") : ("#5b9b47"), borderRadius: 10, padding: 5, paddingHorizontal: 12, marginHorizontal: 5, height: 35, shadowColor: "#ccc", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 10, borderWidth: 1, width: 120}}
              onPress={() => {
                choiceCategories("2")
              }}
          >
            <Text>Екоподія</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{marginVertical: 5, flexDirection: "row", alignItems: "center", backgroundColor: color3 == false ? ("#fff") : ("#5b9b47"), borderRadius: 10, padding: 5, paddingHorizontal: 12, marginHorizontal: 5, height: 35, shadowColor: "#ccc", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.5, shadowRadius: 5, elevation: 10, borderWidth: 1, width: 120}}
              onPress={() => {
                choiceCategories("3")
              }}
          >
            <Text>Екоінновація</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontWeight: "bold", fontSize: 20}}>Назва пропозиції</Text>
        </View>
       <View>
        <TextInput
            value={name}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setName(txt)}
            style={{
              color: "#000",
              marginTop: 0, 
              borderWidth: 2,
              paddingHorizontal: 20
            }}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Text style={{fontWeight: "bold", fontSize: 20}}>Опис пропозиції</Text>
        </View>
       <View>
        <TextInput
            // autoCorrect={false}
            onChangeText={(txt) => setText(txt)}
            multiline
            numberOfLines={2}
            value={text}
            // textAlign='left'
            // disableFullscreenUI={false}
            style={{
              // color: "#000",
              borderWidth: 2,
              paddingHorizontal: 20,
              // paddingBottom: 10,
              // paddingTop: 50
            }}
          />
        </View>
       <View style={{alignItems: "center"}}>
        <TouchableOpacity style={{width: "100%", backgroundColor: "#01723f", alignItems: "center", paddingVertical: 10, marginVertical: 25}} onPress={readData}>
          <Text style={{fontSize: 20, color: "#fff"}}>Оновити</Text>
        </TouchableOpacity>
      </View>
    </ScrollView> 
  )
}

export default UpdateData