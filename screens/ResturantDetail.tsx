import { View, ScrollView, Modal,Text ,StyleSheet, Platform} from 'react-native'
import React ,{useState} from 'react'
import About from '../components/About/About';
import MenuItems from '../components/About/MenuItems';
import { Divider } from 'react-native-elements';
import ViewCart from '../components/About/ViewCart';
import { useSelector } from 'react-redux';
import Touchable from '../components/Touchable';
import OrderItem from '../components/About/OrderItem';
import app from '../firebase';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore/lite";


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
  const [modalVisibal, setModalVisibal] = useState(false);

  const {name,image_url,price,review_count,rating,categories}=ResturantDetail;

  const formatedCategories=categories.map((cat:any)=>cat.title).join('.');
  const description= `${formatedCategories} ${price?' '+price:' . '} . 💳 . ${rating} ⭐ (${review_count}+)` 

  let {items}= useSelector((state:any) => { return state.cart.selectedItems})

  let total=items.map((item:any) => { return item.price }).reduce((acc:any,curr:any) => acc+curr,0 )

  const addOrderToFireBase= async () => { 

    try{
       const db = getFirestore(app);

       const orders = collection(db, "orders");

        await addDoc(orders, {
         items,
         name,
         createdAt:serverTimestamp()
       });
       
    }catch(err){
      console.log(err)
    }
   

    setModalVisibal(false);
    
   }

  const viewCart=() => { 
    setModalVisibal(true)
   }

  const checkoutContent=() => { 
     return (
       <View style={style.modalContainer}>
         <View style={style.modalCheckoutContainer}>
           <Text style={style.resturantName}>{name}</Text>
           {items.map((item: any, index: Number) => (
             <OrderItem key={index} item={item} />
           ))}

           <View style={style.subTotal}>
             <Text style={style.subTotalText}>SUBTOTAL</Text>
             <Text style={style.subTotalText}>${total}</Text>
           </View>
           <View style={{ flex: 1, alignItems: "center" }}>
             <Touchable
               onPress={() =>{
                addOrderToFireBase()
                
               }}
             >
               <View
                 style={{
                   marginTop: 20,
                   backgroundColor: "black",
                   flexDirection: "row",
                   alignItems: "center",
                   justifyContent: "center",
                   borderRadius: 30,
                   width: 300,
                   height: 50,
                   overflow: "hidden",
                 }}
               >
                 <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                 <Text style={{color:'white',fontSize:15,position:'absolute',right:30}}>${total}</Text>
               </View>
             </Touchable>
           </View>
         </View>
       </View>
     );
   }


  return (
    <View style={{ flex: 1 }}>
      <About
        description={description}
        name={name}
        image_url={image_url}
        about={route}
      />
      <Divider width={1.8} style={{ marginTop: 20 }} />
      <ScrollView>
        {menuData.map(({ title, description, price, image }, index) => {
          return (
            <View key={index}>
              <MenuItems
                food={{
                  title,
                  description,
                  price,
                  image,
                }}
                isInCart={Boolean(
                  items.find((item: any) => {
                    return item.title === title;
                  })
                )}
              />

              <Divider width={0.5} style={{ paddingVertical: 5 }} />
            </View>
          );
        })}
      </ScrollView>
      <Modal
        visible={modalVisibal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisibal(false)}
        statusBarTranslucent={true} //will allow it to be full screen
      >
        {checkoutContent()}
      </Modal>
      {total > 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ViewCart total={total} onpress={viewCart} />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

export default ResturantDetail


const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
    
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  resturantName: {
    textAlign:'center',
    fontWeight:Platform.OS==='android'?'bold':'600',
    fontSize:18,
    marginBottom:10,
  },
  subTotal:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
  },
  subTotalText:{
    textAlign:'left',
    fontWeight:'600',
    fontSize:15,
    marginBottom:10
  }
});
