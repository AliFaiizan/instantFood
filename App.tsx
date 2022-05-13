import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Home from './screens/Home';
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'

import resturantReducer from './store/reducers/resturant.reducer';

const rootReducer=combineReducers({
  resturants:resturantReducer,
})
const store= createStore(rootReducer,applyMiddleware(ReduxThunk))

export default function App() {
  return (
   <Provider store={store}>
     <Home />
   </Provider>
    
  );
}


