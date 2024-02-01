import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Load = ({ navigation }: any) => {
  return (
    <View style={{paddingHorizontal: 20, backgroundColor: "#fff", paddingBottom: 160}}>
        <View style={{alignItems: "center", marginTop: 160}}>
          <View style={{}}>
            <Image source={require('../../assets/photo_2023-11-26_18-54-02.jpg')} style={{height: 75, width: 300}} />
          </View>
          <Text style={{fontWeight: "700", fontSize: 20, color: "#01723f"}}>Разом до чистого довкілля!</Text>
        </View>
        <View style={{marginTop: 160}}>
            <Text style={{color: "#01723f", alignContent: "center", textAlign: "center"}}>Кожен день великі та маленькі компанії стають ініціаторами екологічних заходів та акцій. ECOcommunity збирає всі пропозиції, щоб вам було легше долучатися та підтримувати екологічний спосіб життя.</Text>
        </View>
        <View style={{alignItems: "center"}}>
            <TouchableOpacity style={{width: "100%", backgroundColor: "#5b9b47", alignItems: "center", paddingVertical: 10, marginTop: 25}} onPress={() => navigation.navigate("TabNavigation")}>
              <Text style={{fontSize: 20, color: "#fff"}}>Перейти до пропозицій</Text>
            </TouchableOpacity>
        </View>
        <View style={{alignItems: "center"}}>
            <TouchableOpacity style={{width: "100%", backgroundColor: "#5b9b47", alignItems: "center", paddingVertical: 10, marginVertical: 25}} onPress={() => navigation.navigate("AddPost")}>
              <Text style={{fontSize: 20, color: "#fff"}}>Додати свою пропозицію</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Load