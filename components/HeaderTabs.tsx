import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";

export default function HeaderTabs() {
  return (
    <View style={styles.container}>
      <HeaderButton text="Delivery"  btnColor='' txtColor='' />
      <HeaderButton text="Pickup" />
    </View>
  );
}

const HeaderButton = ({ text }: any) => {
  let Touchable: any = TouchableOpacity;

  if (Platform.OS === "android") {
    Touchable = TouchableNativeFeedback;
  }
  return (
    <View style={styles.touchable}>
    <Touchable
      onPress={() => {
        console.log("this");
      }}
    >
        <Text style={styles.text}>{text}</Text>
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
    marginTop: 30,
  },
  text: {
    fontSize: 15,
    fontWeight:Platform.OS==='android'?'bold':'900',
    color: "#fff",
    backgroundColor: "#000",
  },
  touchable: {
    backgroundColor: "#000",
    margin:5,
    width:100,
    alignItems:'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
});
