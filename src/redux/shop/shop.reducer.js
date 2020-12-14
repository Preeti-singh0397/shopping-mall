import SHOP_DATA from "../../pages/shop/shop.data" 

const intial_state = {
    collections: SHOP_DATA
}

const ShopReducer = (state = intial_state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default ShopReducer;