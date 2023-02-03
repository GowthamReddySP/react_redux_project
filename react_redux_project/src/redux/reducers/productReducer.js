import { Actiontypes } from "../constants/action_types";
const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case Actiontypes.FETCH_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}