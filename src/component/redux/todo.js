const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

//Action
export const addToDoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const removeToDoAction = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}
// initial state
const initialState = {
    todoList: []
}

//reducer
export const addToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO :
            return { ...state, todoList: [...state.todoList, action.payload] }
        case REMOVE_TODO :
            return {...state, todoList: [...state.todoList.filter((item,i)=> i!== action.payload)]}
        default:
            return state
           
    }
}
