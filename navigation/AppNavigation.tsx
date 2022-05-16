import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Home from '../screens/Home'
import ResturantDetail from '../screens/ResturantDetail'
import { NavigationContainer } from '@react-navigation/native'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const HomeStack= createNativeStackNavigator();

const HomeNavigator=() => { 
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="Details"
          component={ResturantDetail}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    );


 }


const AppNavigation = () => {
  return (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})