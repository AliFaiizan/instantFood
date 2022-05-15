import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Touchable from './Touchable';

const BottomTab = () => {
  return (
    <View style={styles.bottomContainer}>
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browse" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Account" />
    </View>
  );
}

const Icon=(props:any) => { 
    
return<Touchable>
            <View style={styles.icon}>
                <FontAwesome5 name={props.name} size={24} color='black' />
                <Text>{props.text}</Text>
            </View>

        </Touchable>
    
 }

export default BottomTab

const styles = StyleSheet.create({
    bottomContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',    
    },
    icon:{
        flex:1,
        marginBottom:3,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    iconText:{
        fontWeight:Platform.OS==='android'?'bold':'900'
    }
})