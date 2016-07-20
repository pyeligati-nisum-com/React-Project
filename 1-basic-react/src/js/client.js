import { applyMiddleware, combineReducers, createStore} from "redux";
import axios from "axios";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const initialState={
	fetching:false,
	fetched:false,
	user:[],
	err:null

}
const reducer = function(state=initialState, action){
	if(action.type === "FETCH_USERS_PENDING"){
		return {...state,fetching:true};
	}
	else if(action.type === "FETCH_USERS_FULFILLED"){
		return {...state,
			fetching:false,
			fetched:true,
			users:action.payload
		};
	}
	else if(action.type === "FETCH_USERS_REJECTED"){
		return {...state,fetching:false,err:action.payload};
	}
	return state;
}
// const userReducer = function(state={}, action){
// 	if(action.type==="CHANGE_NAME")
// 	{
// 		state ={...state , name:action.payload}
// 	}
// 	else if(action.type==="CHANGE_AGE")
// 	{
// 		state ={...state , age:action.payload}
// 	}

// 	return state;
// }
// const tweetsReducer =function(state={}, action) {
// 	return state;	
// }
// const reducer =combineReducers ({
// 	user: userReducer,
// 	tweets:tweetsReducer,
// })
// const logger = store => next => action => {
//   console.group(action.type)
//   console.info('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   console.groupEnd(action.type)
//   return result;
// }

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

// store.subscribe(() => {
// 	console.log("Store changed", store.getState())
// })

// with promise

store.dispatch({
	type:"FETCH_USERS",
	payload:axios.get("http://rest.learncode.acasdsdemy/api/prem/friends")
})
//with out promise
// store.dispatch((dispatch)=>{
// 	dispatch({type:"FETCH_USERS"})
// 	axios.get("http://rest.learncode.academy/api/prem/friends")
// 	.then((response) => {
// 		dispatch({type:"RECEIVE_USERS",payload:response.data})
// 	})
// 	.catch((err) => {
// 		dispatch({type:"FETCH_USER_ERRROS",payload:err})
// 	})
	
// })
// store.dispatch({type:"CHANGE_NAME", payload:"Will"})
// store.dispatch({type:"CHANGE_AGE", payload:24})
// store.dispatch({type:"CHANGE_AGE", payload:26})
// store.dispatch({type:"INC", payload:1})
// store.dispatch({type:"INC", payload:1})
// store.dispatch({type:"INC", payload:112})
// store.dispatch({type:"INC", payload:123213})
// store.dispatch({type:"DEC", payload:111})
// store.dispatch({type:"DEC", payload:1545})
// store.dispatch({type:"DEC", payload:1655})
// store.dispatch({type:"DEC", payload:14})
// store.dispatch({type:"INC", payload:178})
// store.dispatch({type:"INC", payload:1456})


// store.dispatch({type:"INC"})
// store.dispatch({type:"INC"})
// store.dispatch({type:"INC"})
// store.dispatch({type:"DEC"})
// store.dispatch({type:"DEC"})
// store.dispatch({type:"DEC"})
// store.dispatch({type:"DEC"})