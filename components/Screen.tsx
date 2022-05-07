import { Platform, SafeAreaView,StatusBar,StyleSheet } from 'react-native'
import React from 'react'

const Screen = (props:any) => {

  return (
    <SafeAreaView style={style.SafeViewAndroid}>
          {props.children}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  SafeViewAndroid: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight: 0
  },
});

export default Screen

