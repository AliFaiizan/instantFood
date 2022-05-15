
import Home from './screens/Home';
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'

import resturantReducer from './store/reducers/resturant.reducer';
import ResturantDetail from './screens/ResturantDetail';


const rootReducer=combineReducers({
  resturants:resturantReducer,
})
const store= createStore(rootReducer,applyMiddleware(ReduxThunk))

export default function App() {
  return (
   <Provider store={store}>
     <>
     <ResturantDetail/>
     
     </>
   </Provider>
    
  );
}


