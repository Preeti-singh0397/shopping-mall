export const addItemsToCart = (cartItems, cartItemToAdd) => {
    let existing = cartItems.find(cartItem=>cartItem.id === cartItemToAdd.id);
    if (existing) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ?
                { ...cartItem, quantity: cartItem.quantity + 1 }
                :
                cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}