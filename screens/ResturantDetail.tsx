import { StyleSheet, Text, View,Image, Platform, ScrollView } from 'react-native'
import React from 'react'
import About from '../components/About/About';
import MenuItems from '../components/About/MenuItems';
import { Divider } from 'react-native-elements';



const ResturantDetail = () => {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView >
        <MenuItems
            food={{
            title: "Tandori Chicken",
            description: "Tasty",
            price: "20",
            image:
                "https://s3-media2.fl.yelpcdn.com/bphoto/SlJ---I5FeRJtwKvbJrNlg/o.jpg",
            }}
        />
        <Divider width={.5} />
      </ScrollView>
    </View>
  );
}

export default ResturantDetail

const styles = StyleSheet.create({
   
    
})