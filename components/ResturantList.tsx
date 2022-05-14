import {ActivityIndicator, StyleSheet, Text, View, Image,TouchableNativeFeedback,Platform, TouchableOpacity, ScrollView } from 'react-native'
import React ,{useEffect, useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Touchable from './Touchable'
import { useDispatch, useSelector } from 'react-redux'
import * as ResturantAction from '../store/actions/resturant.action'


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

const ResturantList = ({location}:any) => {
  const dispatch=useDispatch();

  const [isLoading,setIsLoading]=useState(false);
   //this is used because if the parent location changes thought search bar it also updates and re Render
  const resturants = useSelector((state: any) => {
    return state.resturants.resturants;
  });
  
  const getresturant = async () => {
    await dispatch(ResturantAction.getResturants(location));
    setIsLoading(false);
  };
  
  

  useEffect(() => {
    setIsLoading(true)

    getresturant() 
  }, [dispatch,location])
  


  if(isLoading){
     return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
  }

  if (!isLoading && resturants.length===0) {
    return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>There are no resturants to show please try again later</Text>
    </View>
     
    );
  }
 

     return (
       <ScrollView>
        {resturants.map((item:any,index:any) => { 
        return (
          <ResturantItem
            key={index}
            name={item.name}
            uri={item.image_url}
            rating={item.rating}
          />
        );
       })}
       </ScrollView>
     
    )
  

 
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