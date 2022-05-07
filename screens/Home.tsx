import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import HeaderTabs from '../components/HeaderTabs'

const Home = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <HeaderTabs />     

      </View>
    </Screen>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding:15,
  },
});