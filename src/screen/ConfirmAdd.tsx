import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ConfirmAdd = ({ navigation }: any) => {

  const close = () => {

  }
  const add = () => {
    navigation.navigate("Main")
  }


  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <View style={{alignItems: "center"}}>
        <TouchableOpacity style={{width: "100%", backgroundColor: "#7cb1fb", alignItems: "center", paddingVertical: 10, marginVertical: 25}} onPress={() => close()}>
          <Text style={{fontSize: 20, color: "#fff"}}>close</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: "center"}}>
        <TouchableOpacity style={{width: "100%", backgroundColor: "#7cb1fb", alignItems: "center", paddingVertical: 10, marginVertical: 25}} onPress={() => add()}>
          <Text style={{fontSize: 20, color: "#fff"}}>add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConfirmAdd