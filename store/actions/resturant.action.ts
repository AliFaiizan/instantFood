
import {YELP_API} from '../../keys'
export const GET_RESTURANTS='GET_RESTURANTS';
export const SET_LOCATION='SET_LOCATION';


export const getResturants:any=({location,activeTab}:any) => { 
 return async(dispatch:any,state:any)=>{
   const url = `https://api.yelp.com/v3/businesses/search?term=resturants&location=${location}`;
   const options={
     headers:{
       Authorization: `Bearer ${YELP_API}`
      },
   }
   
   try{
     const response:any = await fetch(url,options);
     
     const resData = await response.json();
     
     if (!response.ok) {
       throw new Error("Something went wrong");
     }
     const businesses= resData.businesses.filter((bus:any) => { 
       return bus.transactions.includes(activeTab) 
      })
      //businesses =  response.body.businesses;
      dispatch({ type: GET_RESTURANTS, resturants: businesses });
   }catch(err){
    console.log(err)
   }
   
 }
}
export const setLocation: any = (locationState:any) => {
  return async (dispatch: any, state: any) => {
   dispatch({type:SET_LOCATION,location:locationState})
  };
};