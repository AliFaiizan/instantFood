import { SafeAreaView } from 'react-native'
import React from 'react'

const Screen = (props:any) => {
  return (
    <SafeAreaView>
          {props.children}
    </SafeAreaView>
  )
}

export default Screen

