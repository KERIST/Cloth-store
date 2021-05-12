import cartTypes from './cart.types';

export const addItemToCart = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = (item) => ({
  type: cartTypes.REMOVE_ITEM,
  payload: item
})

export const changeItemAmount = (itemId, amount) => ({
  type: cartTypes.CHANGE_ITEM_AMOUNT,
  payload: {itemId, amount}
});