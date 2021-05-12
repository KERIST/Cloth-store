export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(({ id, size }) => id === itemToAdd.id && size === itemToAdd.size);

  if(existingItem) {
    return cartItems.map((item) => {
      if(item.id === itemToAdd.id) {
        return {...item, quantity: item.quantity + itemToAdd.quantity}
      }
      return item;
    })
  }
  
  return [...cartItems, itemToAdd]
}

export const removeItemFromCart = (cartItems, itemToRemoveId) => {
  return cartItems.filter(({ id }) => id !== itemToRemoveId);
}

export const changeItemAmount = (cartItems, { itemId, amount }) => {
  if(amount === 0) {
    return removeItemFromCart(cartItems, itemId)
  } else {
    return cartItems.map((item) => {
      if(item.id === itemId) {
        return {...item, quantity: amount}
      } else {
        return item;
      }
    })
  }
}