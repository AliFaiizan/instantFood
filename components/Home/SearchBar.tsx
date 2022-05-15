import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons , AntDesign} from '@expo/vector-icons'
import Touchable from '../Touchable'
import { GOOGLE_PLACES } from '../../keys'
import { useDispatch } from 'react-redux'
import * as ResturantAction from "../../store/actions/resturant.action";

const SearchBar = ({location}:any) => {


  return (
    <View style={styles.container}>
      
        <GooglePlacesAutocomplete
          placeholder="search"
          styles={{
            textInput: {
              backgroundColor: "#eee",
              borderRadius: 20,
              fontWeight: Platform.OS === "android" ? "normal" : "900",
              marginTop: 7,
            },
            textInputContainer: {
              backgroundColor: "#eee",
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              marginRight: 7,
            },
          }}
          onPress={(data, details = null) => {
            // set state and call on press handler
            location(data.description.split(",")[0]);
          }}
          query={{
            key: GOOGLE_PLACES,
            language: "en",
          }}
          renderLeftButton={() => {
            return (
              <View style={styles.leftButton}>
                <Ionicons name="location-sharp" size={24} />
              </View>
            );
          }}
          renderRightButton={() => {
            return (
              <Touchable
                onPress={() => {
                  console.log("tha");
                }}
              >
                <View style={styles.rightButton}>
                  <AntDesign
                    name="clockcircle"
                    size={11}
                    style={{ marginRight: 5, alignSelf: "center" }}
                  />
                  <Text>Search</Text>
                </View>
              </Touchable>
            );
          }}
        />
      
    </View>
  );
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection:'row'
  },
  leftButton: {
    marginLeft: 10,
  },
  rightButton: {
    flexDirection: "row",
    height: 40,
    width: 90,
    overflow: "hidden",
    marginRight: 10,
    backgroundColor: "white",
    elevation: 10,
    padding: 10,
    borderRadius: 50,
  },
});