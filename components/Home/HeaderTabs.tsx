import {
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React from "react";
import Touchable from "../Touchable";

export default function HeaderTabs({activeTab,setActiveTab}:any) {

   //for managing top options
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

const HeaderButton = ({ text,activeTab,setActiveTab }: any) => { //default value of the prop is empty

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
