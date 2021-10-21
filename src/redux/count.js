
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";

// action
 export const incrementAction = (payload)=>{
    return {
        type: INCREMENT_COUNT,
        payload
    }
}
export const decrementAction = (payload)=>{
    return {
        type: DECREMENT_COUNT,
        payload
    }
}
// state 
const initialState = {
    count:0
}

// reducer 
export const counterReducer = (state = initialState,action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {...state, count: state.count + action.payload}
        case DECREMENT_COUNT:
            return {...state, count: state.count - action.payload}
        default:
            return state;
    }
}

//store 
