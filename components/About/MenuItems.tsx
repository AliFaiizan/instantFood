import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuItems = ({food}:any) => {
  return (
    <View style={styles.menuitem}>
      <Text style={styles.title}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  );
}

export default MenuItems

const styles = StyleSheet.create({
    container:{
        width:240,
        justifyContent:'space-evenly',

    },
    menuitem:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,
    },
    title:{
        fontSize:19,
        fontWeight:Platform.OS==='android'?'bold':'900',
    }

})