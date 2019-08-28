import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from '../src/components/Counter'
const initialState={
  count:0
}
// toma el estado actual con un acción
function reducer(state= initialState, action){
  /*return{
  count:32
  }*/
  switch(action.type){
    case 'INCREMENT':
      return{
        count: state.count +1
      }
      case 'DECREMENT':
          return{
            count: state.count -1
          }
          case 'REFRESH':
              return{
                count: 0
              }
      default:
        return state;
  }
}
const store = createStore(reducer)
function App() {
  return (
    <Provider store={store}>
       <Counter/>
    </Provider>
   
  );
}


export default App;
