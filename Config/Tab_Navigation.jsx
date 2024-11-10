import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { NavigationContainer } from '@react-navigation/native'
import  Icon  from 'react-native-vector-icons/FontAwesome'
import Setting from '../Screens/Setting'
import Browse from '../Screens/Browse'
import Carts from '../Screens/Carts'
import Orders from '../Screens/Orders'
import Accounts from '../Screens/Accounts'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TabOrder from '../Screens/TabOrder'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import OptionSelection from '../Screens/OptionSelection'
import Cart from '../Screens/Carts'
import Octicons from "react-native-vector-icons/Octicons"



const Tab_Navigation = () => {
    const Tab = createBottomTabNavigator()
  return (
  
    <Tab.Navigator
    screenOptions={
      ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-filled';
            } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-applications';
            }

            return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'lightblue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: "rgba(60, 45, 87,0.9)" },
  headerShown :false

  })}
>
      <Tab.Screen  name="Home" component={Setting}  options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen  name="Browse" component={Browse}  options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="browser" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen name="Carts" component={Cart}  options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}/>
         <Tab.Screen  name="orders" component={Orders}  options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="note" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen name="Accounts" component={Accounts}  options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="location" size={size} color={color} />
          ),
        }}/>
        
      {/* <Tab.Screen name="Login" component={Login} /> */}
    </Tab.Navigator>

  )
}

export default Tab_Navigation
