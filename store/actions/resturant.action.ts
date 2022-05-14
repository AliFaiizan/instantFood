
import {YELP_API} from '../../keys'
export const GET_RESTURANTS='GET_RESTURANTS';


export const getResturants:any=() => { 
 return async(dispatch:any,state:any)=>{
   const url = `https://api.yelp.com/v3/businesses/search?term=resturants&location=SanDiego`;
   const options={
     headers:{
       Authorization: `Bearer ${YELP_API}`
      },
   }

   let businesses;

   try{
     const response:any = await fetch(url,options);
     
     const resData = await response.json();
     
     if (!response.ok) {
       throw new Error("Something went wrong");
     }
     
      //businesses =  response.body.businesses;
      dispatch({ type: GET_RESTURANTS, resturants: resData.businesses });
   }catch(err){
    console.log(err)
   }
   
        
    

 }
}