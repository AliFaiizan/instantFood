import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({item}:any) => {
    const {title,price}=item;
    console.log('$',price)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text2}>${price}</Text>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        borderBottomWidth:1,
        borderBottomColor:'#999'
    },
    text:{
        fontSize:16,
        fontWeight:Platform.OS==='android'?'normal':'600',
    },
    text2:{
        opacity:0.7,
        fontSize:16
    }
})