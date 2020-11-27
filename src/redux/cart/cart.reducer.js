import {CartActionTypes} from "./cart.type";
const initialSate={
    hidden:true
}

const cartReducer=(state=initialSate,action)=>{
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
            
        default:
            return state;
    }

}

export default cartReducer