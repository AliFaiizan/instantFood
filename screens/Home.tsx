import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import HeaderTabs from '../components/HeaderTabs'

const Home = () => {
  return (
    <Screen>
        <HeaderTabs />     
    </Screen>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});