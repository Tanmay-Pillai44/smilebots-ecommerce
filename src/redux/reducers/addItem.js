

const addItems = (state = [], action) => {
    switch (action.type) {
        case "ADDITEM":
            return [...state, action.payload]

        case "DELITEM":
            return state = state.filter((ele) => {
                return ele.productId !== action.payload.productId
            })

        default:
            return state;
    }
}

export default addItems;