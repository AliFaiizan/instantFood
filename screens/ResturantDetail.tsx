import { StyleSheet, Text, View,Image, Platform } from 'react-native'
import React from 'react'
import About from '../components/About/About';
import MenuItems from '../components/About/MenuItems';
import { Divider } from 'react-native-elements';



const ResturantDetail = () => {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems food={{}} />
    </View>
  );
}

export default ResturantDetail

const styles = StyleSheet.create({
   
    
})