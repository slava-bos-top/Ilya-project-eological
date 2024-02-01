import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from '../screen/Main';
import AddPost from '../screen/AddPost';
import FullDescription from '../screen/FullDescription';
import ConfirmAdd from '../screen/ConfirmAdd';
import TabNavigation from './TabNavigation';
import Load from '../screen/Load';
import EcoPlace from '../screen/EcoPlace';
import Agree from '../screen/Agree';
import UpdateData from '../screen/UpdateData';
import UpdateAgree from '../screen/UpdateAgree';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="Load" component={Load} options={{ headerShown: false }}/>
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
        <Stack.Screen name="AddPost" component={AddPost} options={{ headerShown: true }}/>
        <Stack.Screen name="FullDescription" component={FullDescription} options={{ headerShown: true }}/>
        <Stack.Screen name="ConfirmAdd" component={ConfirmAdd} options={{ headerShown: true }}/>
        <Stack.Screen name="EcoPlace" component={EcoPlace} options={{ headerShown: true }}/>
        <Stack.Screen name="Agree" component={Agree} options={{ headerShown: true }}/>
        <Stack.Screen name="UpdateData" component={UpdateData} options={{ headerShown: true }}/>
        <Stack.Screen name="UpdateAgree" component={UpdateAgree} options={{ headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation