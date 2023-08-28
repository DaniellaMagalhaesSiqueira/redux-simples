import { combineReducers, legacy_createStore as createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
    numeros: function(state, action){
        console.log(state, ' ', action)
        return {
            min: 1,
            max:10
        }
    }, 
    nomes: function(state, action){
        console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig