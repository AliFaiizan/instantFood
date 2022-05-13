import { Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native'
import React from 'react'

const Touchable:any = (props:any) => {
     let Touchable: any = TouchableOpacity;

    if (Platform.OS === "android") {
    Touchable = TouchableNativeFeedback;
  return (
    <Touchable {...props}>
      {props.children}
    </Touchable>
  )
}
}
export default Touchable;

