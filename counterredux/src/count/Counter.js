

const Counter = (state = 0, action) => {
    switch (action) {
        case "Increment":
            return state + action.payload;
        case "decrement":
            return state - action.payload;
        default:
            return state;
    }
}

export default Counter;