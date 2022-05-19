import { View, ScrollView } from 'react-native'
import React from 'react'
import About from '../components/About/About';
import MenuItems from '../components/About/MenuItems';
import { Divider } from 'react-native-elements';
import ViewCart from '../components/About/ViewCart';
import { useSelector } from 'react-redux';


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
    description: "taste touches the sky ",
    price: 50,
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/SlJ---I5FeRJtwKvbJrNlg/o.jpg",
  },
  {
    title: "pizza",
    description: "Tbest pizza around the globe ",
    price: 50,
    image:
      "https://s3-media2.fl.yelpcdn.com/bphoto/SlJ---I5FeRJtwKvbJrNlg/o.jpg",
  },
  {
    title: "cake",
    description: "you better eat it or you will regret later",
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

  let {items}= useSelector((state:any) => { return state.cart.selectedItems})

  let total=items.map((item:any) => { return item.price }).reduce((acc:any,curr:any) => acc+curr,0 )
  console.log(total)


  return (
    <View style={{flex:1}}>
      <About
        description={description}
        name={name}
        image_url={image_url}
        about={route}
      />
      <Divider width={1.8} style={{ marginTop: 20 }} />
      <ScrollView>
        {menuData.map(({title,description,price,image},index) => { 
          
          return (
          <View key={index}>
            <MenuItems
              food={{
                title,
                description,
                price,
                image,
              }}
              isInCart={ 
               Boolean( items.find((item: any) => {
                  return item.title === title;
                  }) )
               }
            />
              
            <Divider width={0.5} style={{ paddingVertical: 5 }} />
          </View>
        ); })}
      </ScrollView>
      {total>0?<View style={{ justifyContent: "center", alignItems: "center" }}>
        <ViewCart total={total} />
      </View>:<View></View>}
    </View>
  );
}

export default ResturantDetail

