import { combineReducers } from "redux";
import  Counter  from './Counter';

 const reducers = combineReducers({
    count: Counter
})

export default reducers;
