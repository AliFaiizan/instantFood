import { StyleSheet, Text, View, Image,TouchableNativeFeedback,Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ResturantItem = () => {
  return (
    <View style={styles.container}>
        <ResturantImage />
        <ResturantInfo />
    </View>
  )
}

const ResturantImage=() => { 
    
    let Touchable:any=TouchableOpacity;

    if(Platform.OS==='android'){
        Touchable=TouchableNativeFeedback;
    }

    return (
      <View style={{borderRadius:10,overflow:'hidden'}}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/concept-oriental-cuisine-national-uzbek-pilaf-with-meat-cast-iron-skillet-wooden-table-background-image-top-view-copy-space-flat-lay_127425-9.jpg?w=826",
          }}
          style={styles.image}
        />
        <Touchable onPress={()=>{}}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="heart-outline"
            size={25}
            color="white"
          />
        </Touchable>
      </View>
    );
 }

 const ResturantInfo=() => { 
     return (
       <View style={styles.info}>
         <View>
           <Text style={styles.title}> Farm houser kitchen thai cuisine</Text>
           <Text style={styles.time}> 30-40 min </Text>
         </View>
         <View style={styles.rating}>

         <Text> 4.5 </Text>
         </View>
       </View>
     );
  }

export default ResturantItem

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