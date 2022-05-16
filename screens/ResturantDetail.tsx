import { StyleSheet, Text, View,Image, Platform, ScrollView } from 'react-native'
import React from 'react'
import About from '../components/About/About';
import MenuItems from '../components/About/MenuItems';
import { Divider } from 'react-native-elements';
import ViewCart from '../components/About/ViewCart';


const menuData = [
  {
    title: "Tandori chicken",
    description: "Tasty",
    price: 20,
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/SlJ---I5FeRJtwKvbJrNlg/o.jpg",
  },
  {
    title: "Tika Boti chicken",
    description: "This is very good ",
    price: 50,
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/SlJ---I5FeRJtwKvbJrNlg/o.jpg",
  },
  {
    title: "Tika Boti chicken",
    description: "This is very good ",
    price: 50,
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/SlJ---I5FeRJtwKvbJrNlg/o.jpg",
  },
  {
    title: "Tika Boti chicken",
    description: "This is very good ",
    price: 50,
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/SlJ---I5FeRJtwKvbJrNlg/o.jpg",
  },
];



const ResturantDetail = ({route}:any) => {

    const ResturantDetail=route.params;

  const {name,image_url,price,review_count,rating,categories}=ResturantDetail;

  const formatedCategories=categories.map((cat:any)=>cat.title).join('.');
  const description= `${formatedCategories} ${price?' '+price:' . '} . 💳 . ${rating} ⭐ (${review_count}+)` 

  return (
    <View style={{flex:1}}>
      <About
        description={description}
        name={name}
        image_url={image_url}
        about={route}
      />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <ScrollView>
        {menuData.map(({title,description,price,image},index) => { return (
          <View>
            <MenuItems
            key={index}
              food={{
                title,
                description,
                price,
                image
                }}
            />

            <Divider width={0.5} style={{ paddingVertical: 5 }} />
          </View>
        ); })}
      </ScrollView>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ViewCart />
      </View>
    </View>
  );
}

export default ResturantDetail

const styles = StyleSheet.create({
   
    
})