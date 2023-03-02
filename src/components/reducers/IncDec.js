const initialState = 0;

const changeTheNum = (state=initialState, action) => {
    if (action.type === "increment") {
        return state + action.payload
    }
    else if (action.type === 'decrement') {
        return state - 1
    }
    else {
        return state
    }
}

export default changeTheNum;