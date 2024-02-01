import { View, Text, ScrollView, TextInput, Platform, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import ecoPost from "./component/posts"

import { FontAwesome } from "@expo/vector-icons";
import categoriesItem from './component/categories';

import * as SQLite from "expo-sqlite"
import * as Device from 'expo-device';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { database } from '../../firebase';

const Main = ({navigation}: any) => {
    const [data, setData] = useState<any>([]);
    const [filterData, setFilterData] = useState<any>([]);
    const [posts, setPosts] = useState<any>([]);
    const [categories, setCategories] = useState<any>(categoriesItem);
    const [load, setLoad] = useState<any>(true)


    const db: any = SQLite.openDatabase("post.db")

    const searchFilterFunction = (text: any) => {
      if (text) {
        const newData = data.filter((item: any) => {
          const itemData = item.name
            ? item.name.toUpperCase()
            : "".toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilterData(newData);
      } else {
        setFilterData(data);
      }
    };
    const readDataWhereCategories = async (category: any) => {
      const q = query(collection(database, "posts"), where(category, "==", true));
      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map((doc) => ({
        name: doc.data().name,
        description: doc.data().description,
        img: doc.data().img,
        category1: doc.data().category1,
        category2: doc.data().category2,
        category3: doc.data().category3,
        category4: doc.data().category4,
        category5: doc.data().category5,
        category6: doc.data().category6,
        id: doc.id
      }));
      setFilterData(users);
      setData(users)
    };

    const readData = async () => {
      const q = query(collection(database, "posts"));
      const querySnapshot = await getDocs(q);
      // const posts = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      // console.log(posts);
      const users = querySnapshot.docs.map((doc) => ({
        name: doc.data().name,
        description: doc.data().description,
        img: doc.data().img,
        category1: doc.data().category1,
        category2: doc.data().category2,
        category3: doc.data().category3,
        category4: doc.data().category4,
        category5: doc.data().category5,
        category6: doc.data().category6,
        user: doc.data().user,
        id: doc.id
      })); 
      setFilterData(users);
      setData(users)
    };

  useEffect(() => {
    readData()
    console.log(Device.osBuildId)
  }, [])

  return (

      <View style={{paddingHorizontal: 20, marginTop: 40, marginBottom: 50}}>
        <View style={{alignItems: "center", flexDirection: "row", display: "flex", marginVertical: 40, justifyContent: "space-between", position: "relative"}}>
          <View style={styles.searchBox}>
              <TextInput
                    placeholder="search"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    style={{ height: 20, width: "90%", padding: 0, marginLeft: 8, }}
                    onChangeText={(event) => {
                      searchFilterFunction(event);
                    }}  
              />
                  <FontAwesome name="search" size={20} />
              </View>
              <FontAwesome
                  name="plus"
                  style={{position: "absolute", right: 0}}
                  size={30}
                  color="#000"
                  onPress={() => navigation.navigate("AddPost")}
              />
        </View>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.chipsScrollView}
          contentContainerStyle={{
            paddingRight: Platform.OS === "android" ? 20 : 20,
          }}
        >
          {/* chose categories */}
          {categories.map((category: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.chipsItem}
              onPress={() => readDataWhereCategories(category.id)}
            >
              {/* {category.icon} */}
              <Text style={{color: "#01723f"}}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView> 
        <ScrollView style={{marginTop: 60, marginBottom: 100}}>
          {filterData.map((posts: any, index: number) => (
              <TouchableOpacity key={index} style={{height: 320, borderWidth: 2, borderRadius: 20, marginBottom: 24}} onPress={() => navigation.navigate("FullDescription", {
                name: posts.name,
                description: posts.description,
                img: posts.img,
              })}>
                  <View style={{borderRadius: 20, marginBottom: 10}}>
                    {posts.user == Device.osBuildId ? (
                      <TouchableOpacity
                        key={index}
                        style={styles.chipsItem1}
                        onPress={() => navigation.navigate("UpdateData", {
                          name: posts.name,
                          description: posts.description,
                          img: posts.img,
                          category1: posts.category1,
                          category2: posts.category2,
                          category3: posts.category3,
                          user: posts.user,
                          id: posts.id
                        })}
                      >
                        {/* {category.icon} */}
                        <Text style={{color: "#01723f"}}>Редагувати</Text>
                      </TouchableOpacity>
                    ) : (
                      <></>
                    )}
                    <Image source={{uri: `${posts.img}`}} resizeMode="cover" style={{height: 250, width: "100%", borderRadius: 20}}/>
                  </View>
                  <View style={{marginLeft: 20, paddingBottom: 15}}>
                      <Text style={{fontSize: 14, color: "#000", fontWeight: "600"}}>{posts.name}</Text>
                  </View>
              </TouchableOpacity>
          ))}
        </ScrollView>  
      </View>
  )
}

const styles = StyleSheet.create({
    searchBox: {
      position: "absolute",
      marginTop: Platform.OS === "ios" ? 40 : 40,
      flexDirection: "row",
      backgroundColor: "#fff",
      width: "85%",
      alignSelf: "center",
      borderRadius: 5,
      padding: 10,
      shadowColor: "#ccc",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
      borderWidth: 2
    },
    chipsScrollView: {
        position: "absolute",
        top: Platform.OS === "ios" ? 70 : 80,
        paddingHorizontal: 0,
        paddingLeft: 20,
        paddingRight: 20,
        width: 400 
    },
    box: {
      flexDirection: "row",
      position: "absolute",
      top: 110
    },
    chipsIcon: {
      marginRight: 2,
    },
    chipsItem: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 8,
      paddingHorizontal: 10,
      marginHorizontal: 3,
      height: 35,
      shadowColor: "#ccc",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
      borderWidth: 1,
      borderColor: "#01723f"
    },
    chipsItem1: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 8,
      paddingHorizontal: 10,
      marginHorizontal: 3,
      height: 35,
      shadowColor: "#ccc",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
      borderWidth: 1,
      borderColor: "#01723f",
      position: "absolute",
      zIndex: 200,
      alignItems: "center",
      marginTop: 5
    },
  });

export default Main