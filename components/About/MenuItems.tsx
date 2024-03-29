import { Platform, StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import Touchable from '../Touchable';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import * as CartAction from '../../store/actions/cart.action';
import { useDispatch} from 'react-redux';

const MenuItems = ({food,isInCart}:any) => {

    const dispatch= useDispatch();


  return (
    <Touchable>
      <View style={styles.container}>
        <BouncyCheckbox
          iconStyle={{ borderColor: "lightgray", borderRadius: 1 }}
          fillColor="green"
          onPress={(checkboxValue) => {
            if (checkboxValue === true) {
              dispatch(CartAction.addToCart(food, checkboxValue));
            } else {
              dispatch(CartAction.deleteFromCart(food, checkboxValue));
            }
          }}
          isChecked={isInCart}
        />
        <View style={styles.menuitem}>
          <Text style={styles.title}>{food.title}</Text>
          <Text>{food.description}</Text>
          <Text>${food.price}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{ uri: food.image }} />
        </View>
      </View>
    </Touchable>
  );
}

export default MenuItems

const styles = StyleSheet.create({
    menuitem:{
        width:240,
        justifyContent:'space-evenly',
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        elevation:5,
        padding:10
    },
    title:{
        fontSize:19,
        fontWeight:Platform.OS==='android'?'bold':'900',
    },
    image:{
        width:100,
        height:100,
        borderRadius:8
    }

})