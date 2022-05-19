
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension";
import AppNavigation from "./navigation/AppNavigation";
import resturantReducer from './store/reducers/resturant.reducer';
import cartReducer from "./store/reducers/cart.reducer";


const rootReducer=combineReducers({
  resturants:resturantReducer,
  cart:cartReducer
})
const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk)))

export default function App() {
  return (
   <Provider store={store}>    
     <AppNavigation />         
   </Provider>
    
  );
}


