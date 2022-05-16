import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Touchable from '../Touchable'

const ViewCart = () => {
  return (
      <View style={styles.container}>
        <Touchable >
            <Text style={styles.text}>ViewCart</Text>

        </Touchable>
      </View>
  );
}

export default ViewCart

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 300,
    height: 50,
    position: "absolute",
    bottom: 50,
    zIndex: 999,
  },
  text: {
    color: "white",
  },
});