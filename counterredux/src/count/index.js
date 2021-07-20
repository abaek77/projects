import { combineReducers } from "redux";
import  Counter  from './Counter';

 const reducers = combineReducers({
    count: Counter
})

export default reducers;

export * as actionCreators from './actionCreators'
export * from './store'