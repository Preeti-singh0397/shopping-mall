import {CartActionTypes} from "./cart.type";
import {addItemsToCart} from "./cart.utils";
const initialSate={
    hidden:true,
    cartItems:[]
}

const cartReducer=(state=initialSate,action)=>{
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_CART_ITEMS:
            return{
                ...state,
                cartItems:addItemsToCart(state.cartItems,action.payload)
            }
            
        default:
            return state;
    }

}

export default cartReducer