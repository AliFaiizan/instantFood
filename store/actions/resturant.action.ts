import {YELP_API} from '../../keys'
export const GET_RESTURANTS='GET_RESTURANTS';


export const getResturants=() => { 
 return async(dispatch:any,state:any)=>{

    const response=await fetch(
    `https://onlineshop-e7753-default-rtdb.firebaseio.com/products/`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
        
    dispatch({type:GET_RESTURANTS,response})

 }
}