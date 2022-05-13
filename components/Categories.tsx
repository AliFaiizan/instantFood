import { StyleSheet, Text, View,Image, Platform, ScrollView} from 'react-native'
import React from 'react'
import Touchable from './Touchable';


const items = [
  {
    image: require("../assets/images/bread.png"),
    text: "bakery-item",
  },
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "pick-up",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

const Categories = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return (
            <Touchable key={index}>
              <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.categoryText} numberOfLines={1}>
                  {item.text}
                </Text>
              </View>
            </Touchable>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Categories

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:'#fff',
       
    },
    itemContainer:{
        alignItems:'center',
        paddingVertical:10,
        marginRight:15,
        width:80
    },
    image:{
        width:50,
        height:40,
        resizeMode:'contain'
    },
    categoryText:{
        
        fontWeight:Platform.OS==='android'?'bold':'900',
        paddingTop:10
    }
})