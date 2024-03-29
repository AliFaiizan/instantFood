import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Touchable from '../Touchable'

const ViewCart = ({total,onpress}:any) => {
  
  return (
        <Touchable onPress={onpress} >
          <View style={styles.container}>
              <View style={styles.inner}>
                <Text style={styles.text}>ViewCart</Text>
                <Text style={styles.text}>${total}</Text>
              
              </View>
            
          </View>
        </Touchable>
  );
}

export default ViewCart

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "black",
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 300,
    height: 50,
    position: "absolute",
    bottom: 30,
    zIndex: 999,
  },
  inner:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  text: {
    color: "white",
    fontSize:22,
    marginRight:30,
  },
});