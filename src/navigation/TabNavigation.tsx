import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from "@expo/vector-icons";
import Info from '../screen/Info';
import Main from '../screen/Main';
import Map from '../screen/Map';

const Tab = createBottomTabNavigator();

const TabNavigation = ({ route }: any) => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor: "#01723f", marginHorizontal: 15, position: "absolute", bottom: 20, borderRadius: 15, height: 60}
    }}
  >
    <Tab.Screen
      name={"Main"}
      component={Main}
      options={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={26} color={color}/>
        ),
      }}
    />
    <Tab.Screen
      name={"Map"}
      component={Map}
      options={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarIcon: ({ color }) => (
            <FontAwesome name="map" size={26} color={color}/>
        ),
      }}
    />
    <Tab.Screen
      name={"Info"}
      component={Info}
      options={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarIcon: ({ color }) => (
            <FontAwesome name="info" size={26} color={color}/>
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default TabNavigation