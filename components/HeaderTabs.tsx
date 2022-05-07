import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {

  const [activeTab,setActiveTab]=useState('Delivery'); //for managing top options
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        btnColor="#000"
        txtColor="#fff"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="#fff"
        txtColor="#000"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({ text, btnColor='#000', txtColor="#fff",activeTab,setActiveTab }: any) => { //default value of the prop is empty

  let Touchable: any = TouchableOpacity;

  if (Platform.OS === "android") {
    Touchable = TouchableNativeFeedback;
  }
  return (
  <View style={[styles.touchable,{backgroundColor:activeTab===text?"#000":"#fff"}]}>
    <Touchable
      onPress={() => {
        setActiveTab(text)
      }}
    > 
        <Text style={[styles.text,{color:activeTab===text?"#fff":"#000"}]}>{text}</Text>
    </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:'center',
    width:'100%',
    alignSelf: "center",
    marginTop: 5,
  },
  text: {
    fontSize: 15,
    fontWeight:Platform.OS==='android'?'bold':'900',
    color: "#fff",
  },
  touchable: {
    padding:5,
    width:100,
    alignItems:'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
});
