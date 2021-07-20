export const Increment = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "Increment",
            payload: amount
    });
    }
}

export const Decrement = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "Decrement",
            payload: amount
        });
    }
}