import { Actiontypes } from "../constants/action_types";
import fakeapistore from "../../apis/fakeapistore";


export const fetchProducts=()=>async (dispatch)=>{
    const response=await fakeapistore.get('/products');
    dispatch({type:Actiontypes.FETCH_PRODUCTS, payload:response.data})
}
export const setProducts=(products)=>{
    return{
    type:Actiontypes.SET_PRODUCTS,
    payload:products
    }
};
export const selectProduct=(product)=>{
    return{
    type:Actiontypes.SELECTED_PRODUCT,
    payload:product
    }
}