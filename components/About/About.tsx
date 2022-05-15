import { StyleSheet, Text, View,Image,Platform } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://s3-media1.fl.yelpcdn.com/bphoto/H9W5Tg14pPXXVMVNmmdIpA/o.jpg",
        }}
      />
      <Text style={styles.text}>Cocina 35</Text>
      <Text style={styles.description}>Cocina 35</Text>
    </View>
  );
}

export default About

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 180,
  },
  text: {
    fontSize: 26,
    fontWeight: Platform.OS === "android" ? "bold" : "900",
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    fontSize: 16,
    marginHorizontal: 15,
    fontWeight: Platform.OS === "android" ? "normal" : "400",
  },
});