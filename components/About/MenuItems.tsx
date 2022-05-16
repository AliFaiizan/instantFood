import { Platform, StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import Touchable from '../Touchable';

const MenuItems = ({food}:any) => {
  return (
      <Touchable>
        <View style={styles.menuitem}>
            <View style={styles.container}>
                <Text style={styles.title}>{food.title}</Text>
                <Text>{food.description}</Text>
                <Text>${food.price}</Text>
            </View>
            <View>
                <Image style={styles.image} source={{uri:food.image}} />
            </View>
        </View>

      </Touchable>
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
        padding:20,
        elevation:5,
    },
    title:{
        fontSize:19,
        fontWeight:Platform.OS==='android'?'bold':'900',
    },
    image:{
        width:100,
        height:100,
        borderRadius:8
    }

})