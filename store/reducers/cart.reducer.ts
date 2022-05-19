import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cart.action";

type fState={
    
    selectedItems:{items:Array<any>,resturantName:String},
    total:Number,
}

const initialState:fState={
    
    selectedItems:{
        items:[],
        resturantName:''
    },
    total:0,
}

export default function (state=initialState,action:any){

    switch (action.type){
       case ADD_TO_CART:
           return{
            selectedItems:{
                items:[...state.selectedItems.items,action.item],
                resturantName:action.item.title
            },
            

           }
       case DELETE_FROM_CART:
           return {
             selectedItems: {
               items: state.selectedItems.items.filter((item) => {
                 return item.title !== action.item.title;
               }),
               resturantName: action.item.title,
             },
            

           };
        default:
            return state;
    }
}