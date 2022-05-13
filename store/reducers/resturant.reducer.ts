import { GET_RESTURANTS } from "../actions/resturant.action"



type fState={
    resturants:Array<any>
}

const initialState:fState={
    resturants:[]
}

export default function (state=initialState,action:any){

    switch (action.type){
        case GET_RESTURANTS:
            return{
                
            }
    }
}