import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React ,{useEffect, useState} from 'react'

import Screen from '../components/Screen'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import ResturantList from '../components/ResturantList'


const Home = () => {

  const [lState, setLState] = useState("SanFransisco");
  

  return (
    <Screen>
      <View style={styles.container}>
        <HeaderTabs />
        <SearchBar location={setLState} />
      </View>
      <Categories />
      <View style={{flex:1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {lState&&<ResturantList location={lState} />}
        </ScrollView>
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