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