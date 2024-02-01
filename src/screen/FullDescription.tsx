import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const FullDescription = ({ route }: any) => {
  return (
    <ScrollView>
      <View>
        <Image source={{uri: `${route?.params?.img}`}} resizeMode="cover" style={{height: 250, width: "100%"}}/>
      </View>
      <View style={{paddingHorizontal: 15}}>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 24}}>{route?.params?.name}</Text>
        </View>
        <Text>{route?.params?.description}</Text>
      </View>
    </ScrollView>
  )
}

export default FullDescription