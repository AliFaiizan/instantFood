import { GET_RESTURANTS , SET_LOCATION } from "../actions/resturant.action"



type fState={
    locationState:string,
    resturants:Array<any>
}

const initialState:fState={
    locationState:'SanFransisco',
    resturants:[]
}

export default function (state=initialState,action:any){

    switch (action.type){
        case GET_RESTURANTS:
            return{
                ...state,
                resturants:action.resturants
            }
        case SET_LOCATION:
            return{
                ...state,
                locationState:action.location,
            }
        default:
            return state;
    }
}