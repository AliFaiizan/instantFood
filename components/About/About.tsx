import { StyleSheet, Text, View,Image,Platform } from 'react-native'
import React from 'react'

const About = ({description,image_url,name}:any) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: image_url,
        }}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
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

