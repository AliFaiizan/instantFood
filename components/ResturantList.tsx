import { StyleSheet, Text, View, Image,TouchableNativeFeedback,Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Touchable from './Touchable'
import { useSelector } from 'react-redux'


const ResturantItem = ({ uri, name, rating }: any) => {
  return (
    <Touchable>
      <View style={styles.container}>
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Image
            source={{
              uri: uri,
            }}
            style={styles.image}
          />
          <Touchable onPress={() => {}}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="heart-outline"
              size={25}
              color="white"
            />
          </Touchable>
        </View>

        <View style={styles.info}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.time}> 30-40 min </Text>
          </View>
          <View style={styles.rating}>
            <Text>{rating}</Text>
          </View>
        </View>
      </View>
    </Touchable>
  );
};

const ResturantList = () => {

  const resturants=useSelector((state:any) => { return state.resturants.resturants })

  if(resturants.length>0){
     return (
      resturants.map((item:any,index:any) => { 
        return <ResturantItem name={item.name} uri={item.uri} rating={item.rating} />
       })
    )
  }

  return <Text>There are no items</Text>
 
}




export default ResturantList

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginVertical:10,
        padding:10,
        borderRadius:5
    },
    image:{
        width:'100%',
        height:180
    },
    icon:{
        position:'absolute',
        top:20,
        right:20
    },
    title:{
        fontSize:15,
        fontWeight:Platform.OS==='android'?'bold':'900',
    },
    time:{
        fontSize:13,
        color:'grey'
    },
    rating:{
        backgroundColor:'#eee',
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:7

    }
})