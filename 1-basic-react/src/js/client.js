import { combineReducers, createStore} from "redux";

// const reducer = function(state, action){
// 	if(action.type === "INC"){
// 		return state+action.payload;
// 	}
// 	else if(action.type === "DEC"){
// 		return state - action.payload;
// 	}
// 	return state;
// }
const userReducer = function(state={}, action){
	if(action.type==="CHANGE_NAME")
	{
		state ={...state , name:action.payload}
	}
	else if(action.type==="CHANGE_AGE")
	{
		state ={...state , age:action.payload}
	}

	return state;
}
const tweetsReducer =function(state={}, action) {
	return state;	
}
const reducer =combineReducers ({
	user: userReducer,
	tweets:tweetsReducer,
})
const store = createStore(reducer);

store.subscribe(() => {
	console.log("Store changed", store.getState())
})

store.dispatch({type:"CHANGE_NAME", payload:"Will"})
store.dispatch({type:"CHANGE_AGE", payload:24})
store.dispatch({type:"CHANGE_AGE", payload:26})
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