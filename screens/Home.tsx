import { ScrollView, StyleSheet, Text, View} from 'react-native'

import React ,{useEffect, useState} from 'react'
import { Divider } from 'react-native-elements'
import Screen from '../components/Screen'
import HeaderTabs from '../components/Home/HeaderTabs'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import ResturantList from '../components/Home/ResturantList'
import BottomTab from '../components/Home/BottomTab'


const Home = () => {

  const [lState, setLState] = useState("SanFransisco");// by default it will load the this location data. state can be changed from searchbar

  const [activeTab,setActiveTab]=useState('Delivery');
  

  return (
    <Screen>
      <View style={styles.container}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar location={setLState} />
      </View>
      <Categories />
      <View style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ResturantList location={lState} activeTab={activeTab.toLowerCase()} />
        </ScrollView>
        <Divider width={1} />
        <BottomTab />
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